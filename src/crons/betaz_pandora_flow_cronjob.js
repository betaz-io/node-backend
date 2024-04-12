require("dotenv").config();
// VRFV2CONSUMER
let { consumer_contract } = require("../contracts/pandora_random_contract.js");
let {
  setConsumerContract,
  getLastRequestId,
  getRequestStatus,
  requestRandomWords,
} = require("../contracts/pandora_random_contract_calls.js");
// pandora contract
let { pandora_contract } = require("../contracts/pandora_contract.js");
let {
  setPadoraPoolContract,
  finalize,
  updateIsLocked,
  getIsLocked,
  getLastSessionId,
  handle_find_winner,
  totalTicketsWin,
  getTotalWinAmount,
  addChainlinkRequestId,
  getChainlinkRequestIdBySessionId,
  getBetSession,
  getIdInSessionByRandomNumberAndIndex,
  getPlayerByNftId,
} = require("../contracts/pandora_contract_calls.js");
let { delay } = require("../utils/utils.js");

module.exports.pandora_cronjob = async () => runJob();

const runJob = async () => {
  // run
  try {
    let players = [];
    let session_id = await getLastSessionId();
    session_id = parseInt(session_id);
    console.log({ session_id });

    let total_win_amounts = await getTotalWinAmount();
    console.log({ total_win_amounts });

    // pause padora pool contract
    console.log({
      step1: "Locked padora pool contract",
    });
    let is_locked = await getIsLocked();
    if (!is_locked) {
      await updateIsLocked(true).catch((error) => {
        console.error("ErrorChangeState:", error);
        console.log("errorChangeState", error);
      });
    }

    // consumer contract
    console.log({ step2: "Find randomnumber with chainlink" });
    /// get last request id
    let lastRequestId = await getLastRequestId();
    console.log({ lastRequestId });

    /// handle request random
    let seconds = 0;
    await requestRandomWords(session_id).catch((error) => {
      console.error("ErrorRequestRandomWords:", error);
      console.log("errorRequestRandomWords", error);
    });
    let check_id = false;
    while (!check_id) {
      try {
        const newRequestId = await getLastRequestId();
        if (newRequestId !== lastRequestId) {
          check_id = true;
          lastRequestId = newRequestId;
        } else {
          await delay(1000);
          seconds += 1;
          console.log({ seconds });
        }
      } catch (err) {
        console.log({ errorGetId: err });
        break;
      }
    }

    /// find random number
    let random_number = false;
    while (!random_number) {
      try {
        const requestStatus = await getRequestStatus(lastRequestId);
        if (requestStatus[2].length === 0) {
          await delay(1000);
          seconds += 1;
          console.log({ seconds });
        } else {
          random_number = parseInt(requestStatus[2][0]);
          console.log("Find random number successfully");
          session_id = parseInt(requestStatus[1]);
          console.log(
            `Get session id: ${session_id} by request id: ${lastRequestId} in chainlick contract`
          );
        }
      } catch (err) {
        console.log({ errorGetRandomNumber: err });
        break;
      }
    }

    // Add request id to bet session
    let bet_session = await getBetSession(session_id);
    console.log({ bet_session });
    if (bet_session.status == "Finalized") {
      console.log(
        `Add request id: ${lastRequestId} to session id: ${session_id} in pandora contract`
      );
      await addChainlinkRequestId(session_id, lastRequestId);

      // get request id by session id
      let requestId = await getChainlinkRequestIdBySessionId(session_id);

      // get random number by request id
      const requestStatus = await getRequestStatus(requestId);
      random_number = parseInt(requestStatus[2][0]);
      console.log({ session_id, requestId, random_number });
    } else console.log("Session not Finalized");

    // handle finalize
    console.log({
      step3: "finalize",
    });

    bet_session = await getBetSession(session_id);
    console.log({ bet_session });
    // random_number = 123; // test
    if (bet_session.status == "Finalized") {
      await finalize(session_id, random_number).catch((error) => {
        console.error("ErrorFinalizeWinner:", error);
        console.log("errorFinalizeWinner", error);
      });
    } else console.log("Session not Finalized");

    // find winner
    console.log({ step4: "Find winner" });

    let totalTicketWin = await totalTicketsWin(session_id, random_number);
    console.log({ totalTicketWin });

    bet_session = await getBetSession(session_id);
    console.log({ bet_session });
    if (bet_session.status == "Completed") {
      for (let i = 0; i < parseInt(totalTicketWin); i++) {
        await handle_find_winner(session_id, i);

        const token_id = await getIdInSessionByRandomNumberAndIndex(
          session_id,
          random_number,
          i
        );

        if (token_id) {
          const player = await getPlayerByNftId(token_id);
          players.push(player);
        }
      }
    } else console.log("Session not Completed");

    // unlock padora pool contract
    console.log({ step5: "Open padora pool contract" });
    is_locked = await getIsLocked();
    if (is_locked) {
      await updateIsLocked(false).catch((error) => {
        console.error("ErrorChangeState:", error);
        console.log("errorChangeState", error);
      });
    }

    // show player win
    const win_player = Array.from(new Set(players));
    console.log({ win_player });
  } catch (error) {
    console.error("Error:", error);
    console.log("Error:", error);
  }

  console.log("Run the job every 7 days at 6am on the last day");
};
