require("dotenv").config();

const contract = {
  testnet: {
    CONTRACT_ADDRESS: "5DhEeGFtB3wNZjiGHAuGk7vR7qa85YJfefxHoseDAXuRW1b7",
    CONTRACT_ABI: {
      source: {
        hash: "0xa93459ceba56611bbefb54a5daaf313513bf6e6d5ad6cd3c2fd3b9304d6d5b75",
        language: "ink! 4.3.0",
        compiler: "rustc 1.75.0-nightly",
        build_info: {
          build_mode: "Debug",
          cargo_contract_version: "3.2.0",
          rust_toolchain: "nightly-x86_64-unknown-linux-gnu",
          wasm_opt_settings: {
            keep_debug_symbols: false,
            optimization_passes: "Z",
          },
        },
      },
      contract: {
        name: "pandora",
        version: "1.0.0",
        authors: ["bet_a0 <admin@betA0.net>"],
      },
      spec: {
        constructors: [
          {
            args: [
              {
                label: "admin_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "psp34_contract_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "max_bet_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [],
            label: "new",
            payable: false,
            returnType: {
              displayName: ["ink_primitives", "ConstructorResult"],
              type: 11,
            },
            selector: "0x9bae9d5e",
          },
        ],
        docs: [],
        environment: {
          accountId: {
            displayName: ["AccountId"],
            type: 0,
          },
          balance: {
            displayName: ["Balance"],
            type: 8,
          },
          blockNumber: {
            displayName: ["BlockNumber"],
            type: 4,
          },
          chainExtension: {
            displayName: ["ChainExtension"],
            type: 52,
          },
          hash: {
            displayName: ["Hash"],
            type: 46,
          },
          maxEventTopics: 4,
          timestamp: {
            displayName: ["Timestamp"],
            type: 7,
          },
        },
        events: [
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "session_id",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "player",
                type: {
                  displayName: ["Option"],
                  type: 36,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "token_id",
                type: {
                  displayName: ["Id"],
                  type: 25,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "bet_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
            ],
            docs: [],
            label: "PlayEvent",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "session_id",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "player",
                type: {
                  displayName: ["Option"],
                  type: 36,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "win_amount",
                type: {
                  displayName: ["Balance"],
                  type: 8,
                },
              },
            ],
            docs: [],
            label: "WithdrawWinAmountEvent",
          },
        ],
        lang_error: {
          displayName: ["ink", "LangError"],
          type: 12,
        },
        messages: [
          {
            args: [
              {
                label: "admin_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "psp34_contract_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "max_bet_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [" Function init"],
            label: "initialize",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0xf2f6dba3",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "random_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "status_type",
                type: {
                  displayName: ["SessionsStatusType"],
                  type: 22,
                },
              },
            ],
            default: false,
            docs: [],
            label: "update_bet_session",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0xe4bda728",
          },
          {
            args: [
              {
                label: "amount",
                type: {
                  displayName: ["Balance"],
                  type: 8,
                },
              },
            ],
            default: false,
            docs: [" update total win amount"],
            label: "update_total_win_amount",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0xdd28222f",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetIdInSessionByRandomNumberAndIndexInput1",
                  ],
                  type: 4,
                },
              },
              {
                label: "random_number",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetIdInSessionByRandomNumberAndIndexInput2",
                  ],
                  type: 4,
                },
              },
              {
                label: "index",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetIdInSessionByRandomNumberAndIndexInput3",
                  ],
                  type: 8,
                },
              },
            ],
            default: false,
            docs: [" get Id in session by random number"],
            label:
              "PandoraPoolTraits::get_id_in_session_by_random_number_and_index",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0x1c7b8061",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "WithdrawFeeInput1",
                  ],
                  type: 0,
                },
              },
              {
                label: "value",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "WithdrawFeeInput2",
                  ],
                  type: 8,
                },
              },
            ],
            default: false,
            docs: [" Withdraw fee"],
            label: "PandoraPoolTraits::withdraw_fee",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x1a9f91ea",
          },
          {
            args: [
              {
                label: "state",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "ChangeStateInput1",
                  ],
                  type: 3,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::change_state",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0xf360cf77",
          },
          {
            args: [
              {
                label: "max_bet_number",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "SetMaxBetNumberInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [" set max_bet_number"],
            label: "PandoraPoolTraits::set_max_bet_number",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x7c4f1539",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetChainlinkRequestIdBySessionIdInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [" get chainlink request id by session id"],
            label: "PandoraPoolTraits::get_chainlink_request_id_by_session_id",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 26,
            },
            selector: "0x9e02d145",
          },
          {
            args: [
              {
                label: "is_locked",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "UpdateIsLockedInput1",
                  ],
                  type: 3,
                },
              },
            ],
            default: false,
            docs: [" update is locked"],
            label: "PandoraPoolTraits::update_is_locked",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x430c53c5",
          },
          {
            args: [],
            default: false,
            docs: [" get psp34 address"],
            label: "PandoraPoolTraits::get_psp34_contract_address",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 28,
            },
            selector: "0xf4147bca",
          },
          {
            args: [
              {
                label: "address",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetHoldAmountPlayersInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [" Get hold amount players"],
            label: "PandoraPoolTraits::get_hold_amount_players",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 29,
            },
            selector: "0x045c951e",
          },
          {
            args: [],
            default: false,
            docs: [" get total win amount"],
            label: "PandoraPoolTraits::get_total_win_amount",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 31,
            },
            selector: "0x9c52f857",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "HandleFindWinnerInput1",
                  ],
                  type: 4,
                },
              },
              {
                label: "index",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "HandleFindWinnerInput2",
                  ],
                  type: 8,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::handle_find_winner",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x68437b43",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "SessionTotalTicketAmountInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [" get total ticket in session"],
            label: "PandoraPoolTraits::session_total_ticket_amount",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 31,
            },
            selector: "0x15d02921",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "SetPsp34ContractAddressInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::set_psp34_contract_address",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x2138d28f",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "AddChainlinkRequestIdInput1",
                  ],
                  type: 4,
                },
              },
              {
                label: "chainlink_request_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "AddChainlinkRequestIdInput2",
                  ],
                  type: 10,
                },
              },
            ],
            default: false,
            docs: [" add chainlink request id"],
            label: "PandoraPoolTraits::add_chainlink_request_id",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x94a4200b",
          },
          {
            args: [],
            default: false,
            docs: [" Get Hold Player Count"],
            label: "PandoraPoolTraits::get_hold_player_count",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 32,
            },
            selector: "0x1d19d9b8",
          },
          {
            args: [],
            default: false,
            docs: [" get total hold amount"],
            label: "PandoraPoolTraits::get_total_hold_amount",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 31,
            },
            selector: "0x3cf6a1f8",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: ["pandorapooltraits_external", "FinalizeInput1"],
                  type: 4,
                },
              },
              {
                label: "random_number",
                type: {
                  displayName: ["pandorapooltraits_external", "FinalizeInput2"],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::finalize",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x5f2b6996",
          },
          {
            args: [
              {
                label: "receiver",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "WithdrawHoldAmountInput1",
                  ],
                  type: 0,
                },
              },
              {
                label: "amount",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "WithdrawHoldAmountInput2",
                  ],
                  type: 8,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::withdraw_hold_amount",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x8b9f4bfe",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::add_new_bet_session",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x6e8baa4d",
          },
          {
            args: [],
            default: false,
            docs: [" get max_bet_number"],
            label: "PandoraPoolTraits::get_max_bet_number",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 33,
            },
            selector: "0xa0bd542e",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "TotalTicketsWinInput1",
                  ],
                  type: 4,
                },
              },
              {
                label: "random_number",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "TotalTicketsWinInput2",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::total_tickets_win",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 31,
            },
            selector: "0x8ad46672",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: ["pandorapooltraits_external", "PlayInput1"],
                  type: 4,
                },
              },
              {
                label: "bet_number",
                type: {
                  displayName: ["pandorapooltraits_external", "PlayInput2"],
                  type: 4,
                },
              },
              {
                label: "token_id",
                type: {
                  displayName: ["pandorapooltraits_external", "PlayInput3"],
                  type: 25,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::play",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x63eb22f9",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetIdInSessionByIndexInput1",
                  ],
                  type: 4,
                },
              },
              {
                label: "index",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetIdInSessionByIndexInput2",
                  ],
                  type: 8,
                },
              },
            ],
            default: false,
            docs: [" get Id in session"],
            label: "PandoraPoolTraits::get_id_in_session_by_index",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0xcc5dbd65",
          },
          {
            args: [
              {
                label: "token_ids",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "BurnTicketUsedInput1",
                  ],
                  type: 34,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::burn_ticket_used",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x84dd0f1b",
          },
          {
            args: [],
            default: false,
            docs: [" get last session id"],
            label: "PandoraPoolTraits::get_last_session_id",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 33,
            },
            selector: "0xaadab449",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "TotalPlayersInSessionInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::total_players_in_session",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 31,
            },
            selector: "0x4dce7946",
          },
          {
            args: [
              {
                label: "token_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetPlayerByNftIdInput1",
                  ],
                  type: 25,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::get_player_by_nft_id",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 35,
            },
            selector: "0x5d742f27",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetPlayersInSessionByIndexInput1",
                  ],
                  type: 4,
                },
              },
              {
                label: "index",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetPlayersInSessionByIndexInput2",
                  ],
                  type: 8,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::get_players_in_session_by_index",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 35,
            },
            selector: "0xd130f5ed",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetPlayerWinAmountInput1",
                  ],
                  type: 4,
                },
              },
              {
                label: "account",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetPlayerWinAmountInput2",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::get_player_win_amount",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 29,
            },
            selector: "0xce2766b7",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::get_player_not_yet_processed",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 31,
            },
            selector: "0xc1dde424",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::get_owner",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 35,
            },
            selector: "0x4a992a16",
          },
          {
            args: [
              {
                label: "token_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetNftInfoInput1",
                  ],
                  type: 25,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::get_nft_info",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 37,
            },
            selector: "0x63a8ad62",
          },
          {
            args: [
              {
                label: "index",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetHoldPlayersByIndexInput1",
                  ],
                  type: 7,
                },
              },
            ],
            default: false,
            docs: [" Get hold players by index"],
            label: "PandoraPoolTraits::get_hold_players_by_index",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 35,
            },
            selector: "0x00878623",
          },
          {
            args: [],
            default: false,
            docs: [" get is locked"],
            label: "PandoraPoolTraits::get_is_locked",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 40,
            },
            selector: "0x225447fa",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetBetSessionInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [" get bet session"],
            label: "PandoraPoolTraits::get_bet_session",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 41,
            },
            selector: "0x7c4dc868",
          },
          {
            args: [
              {
                label: "new_owner",
                type: {
                  displayName: ["ownable_external", "TransferOwnershipInput1"],
                  type: 36,
                },
              },
            ],
            default: false,
            docs: [],
            label: "Ownable::transfer_ownership",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 44,
            },
            selector: "0x11f43efd",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "Ownable::renounce_ownership",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 44,
            },
            selector: "0x5e228753",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "Ownable::owner",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 35,
            },
            selector: "0x4fa43c8c",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "Pausable::paused",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 40,
            },
            selector: "0xd123ce11",
          },
          {
            args: [
              {
                label: "new_code_hash",
                type: {
                  displayName: ["upgradeable_external", "SetCodeHashInput1"],
                  type: 46,
                },
              },
            ],
            default: false,
            docs: [],
            label: "Upgradeable::set_code_hash",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 47,
            },
            selector: "0x1700ae80",
          },
          {
            args: [
              {
                label: "role",
                type: {
                  displayName: ["accesscontrol_external", "RevokeRoleInput1"],
                  type: 4,
                },
              },
              {
                label: "account",
                type: {
                  displayName: ["accesscontrol_external", "RevokeRoleInput2"],
                  type: 36,
                },
              },
            ],
            default: false,
            docs: [],
            label: "AccessControl::revoke_role",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 50,
            },
            selector: "0x6e4f0991",
          },
          {
            args: [
              {
                label: "role",
                type: {
                  displayName: ["accesscontrol_external", "RenounceRoleInput1"],
                  type: 4,
                },
              },
              {
                label: "account",
                type: {
                  displayName: ["accesscontrol_external", "RenounceRoleInput2"],
                  type: 36,
                },
              },
            ],
            default: false,
            docs: [],
            label: "AccessControl::renounce_role",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 50,
            },
            selector: "0xeaf1248a",
          },
          {
            args: [
              {
                label: "role",
                type: {
                  displayName: ["accesscontrol_external", "GetRoleAdminInput1"],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [],
            label: "AccessControl::get_role_admin",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 33,
            },
            selector: "0x83da3bb2",
          },
          {
            args: [
              {
                label: "role",
                type: {
                  displayName: ["accesscontrol_external", "GrantRoleInput1"],
                  type: 4,
                },
              },
              {
                label: "account",
                type: {
                  displayName: ["accesscontrol_external", "GrantRoleInput2"],
                  type: 36,
                },
              },
            ],
            default: false,
            docs: [],
            label: "AccessControl::grant_role",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 50,
            },
            selector: "0x4ac062fd",
          },
          {
            args: [
              {
                label: "role",
                type: {
                  displayName: ["accesscontrol_external", "HasRoleInput1"],
                  type: 4,
                },
              },
              {
                label: "address",
                type: {
                  displayName: ["accesscontrol_external", "HasRoleInput2"],
                  type: 36,
                },
              },
            ],
            default: false,
            docs: [],
            label: "AccessControl::has_role",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 40,
            },
            selector: "0xc1d9ac18",
          },
          {
            args: [
              {
                label: "role",
                type: {
                  displayName: [
                    "accesscontrolenumerable_external",
                    "GetRoleMemberInput1",
                  ],
                  type: 4,
                },
              },
              {
                label: "index",
                type: {
                  displayName: [
                    "accesscontrolenumerable_external",
                    "GetRoleMemberInput2",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [],
            label: "AccessControlEnumerable::get_role_member",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 35,
            },
            selector: "0x163469e0",
          },
          {
            args: [
              {
                label: "role",
                type: {
                  displayName: [
                    "accesscontrolenumerable_external",
                    "GetRoleMemberCountInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [],
            label: "AccessControlEnumerable::get_role_member_count",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 33,
            },
            selector: "0xf1b1a9d7",
          },
        ],
      },
      storage: {
        root: {
          layout: {
            struct: {
              fields: [
                {
                  layout: {
                    struct: {
                      fields: [
                        {
                          layout: {
                            root: {
                              layout: {
                                enum: {
                                  dispatchKey: "0x6f713913",
                                  name: "Option",
                                  variants: {
                                    0: {
                                      fields: [],
                                      name: "None",
                                    },
                                    1: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0x6f713913",
                                              ty: 0,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "Some",
                                    },
                                  },
                                },
                              },
                              root_key: "0x6f713913",
                            },
                          },
                          name: "owner",
                        },
                      ],
                      name: "Data",
                    },
                  },
                  name: "ownable",
                },
                {
                  layout: {
                    struct: {
                      fields: [
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0xec3485f7",
                                  ty: 3,
                                },
                              },
                              root_key: "0xec3485f7",
                            },
                          },
                          name: "paused",
                        },
                      ],
                      name: "Data",
                    },
                  },
                  name: "pausable",
                },
                {
                  layout: {
                    struct: {
                      fields: [
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x1f2cf4ac",
                                  ty: 4,
                                },
                              },
                              root_key: "0x1f2cf4ac",
                            },
                          },
                          name: "admin_roles",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x8150f558",
                                  ty: 5,
                                },
                              },
                              root_key: "0x8150f558",
                            },
                          },
                          name: "members",
                        },
                      ],
                      name: "Data",
                    },
                  },
                  name: "access",
                },
                {
                  layout: {
                    struct: {
                      fields: [
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 0,
                            },
                          },
                          name: "psp34_contract_address",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 3,
                            },
                          },
                          name: "is_locked",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 4,
                            },
                          },
                          name: "max_bet_number",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                enum: {
                                  dispatchKey: "0x3e46dd4a",
                                  name: "Id",
                                  variants: {
                                    0: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0x3e46dd4a",
                                              ty: 2,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "U8",
                                    },
                                    1: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0x3e46dd4a",
                                              ty: 6,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "U16",
                                    },
                                    2: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0x3e46dd4a",
                                              ty: 4,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "U32",
                                    },
                                    3: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0x3e46dd4a",
                                              ty: 7,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "U64",
                                    },
                                    4: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0x3e46dd4a",
                                              ty: 8,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "U128",
                                    },
                                    5: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0x3e46dd4a",
                                              ty: 9,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "Bytes",
                                    },
                                  },
                                },
                              },
                              root_key: "0x3e46dd4a",
                            },
                          },
                          name: "ticket_in_session",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 8,
                            },
                          },
                          name: "total_win_amounts",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                struct: {
                                  fields: [
                                    {
                                      layout: {
                                        leaf: {
                                          key: "0x806a82b1",
                                          ty: 4,
                                        },
                                      },
                                      name: "session_id",
                                    },
                                    {
                                      layout: {
                                        leaf: {
                                          key: "0x806a82b1",
                                          ty: 4,
                                        },
                                      },
                                      name: "bet_number",
                                    },
                                    {
                                      layout: {
                                        leaf: {
                                          key: "0x806a82b1",
                                          ty: 7,
                                        },
                                      },
                                      name: "time",
                                    },
                                    {
                                      layout: {
                                        leaf: {
                                          key: "0x806a82b1",
                                          ty: 3,
                                        },
                                      },
                                      name: "used",
                                    },
                                  ],
                                  name: "NFTInfomation",
                                },
                              },
                              root_key: "0x806a82b1",
                            },
                          },
                          name: "nft_infor",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 4,
                            },
                          },
                          name: "last_session_id",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                struct: {
                                  fields: [
                                    {
                                      layout: {
                                        leaf: {
                                          key: "0x76829ac5",
                                          ty: 4,
                                        },
                                      },
                                      name: "random_number",
                                    },
                                    {
                                      layout: {
                                        enum: {
                                          dispatchKey: "0x76829ac5",
                                          name: "SessionsStatusType",
                                          variants: {
                                            0: {
                                              fields: [],
                                              name: "Processing",
                                            },
                                            1: {
                                              fields: [],
                                              name: "Finalized",
                                            },
                                            2: {
                                              fields: [],
                                              name: "Completed",
                                            },
                                          },
                                        },
                                      },
                                      name: "status",
                                    },
                                  ],
                                  name: "SessionInfo",
                                },
                              },
                              root_key: "0x76829ac5",
                            },
                          },
                          name: "sessions",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0xcba05418",
                                  ty: 0,
                                },
                              },
                              root_key: "0xcba05418",
                            },
                          },
                          name: "players_in_session",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x00ae2bdd",
                                  ty: 8,
                                },
                              },
                              root_key: "0x00ae2bdd",
                            },
                          },
                          name: "player_win_amount",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                enum: {
                                  dispatchKey: "0xe67269eb",
                                  name: "Id",
                                  variants: {
                                    0: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0xe67269eb",
                                              ty: 2,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "U8",
                                    },
                                    1: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0xe67269eb",
                                              ty: 6,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "U16",
                                    },
                                    2: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0xe67269eb",
                                              ty: 4,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "U32",
                                    },
                                    3: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0xe67269eb",
                                              ty: 7,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "U64",
                                    },
                                    4: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0xe67269eb",
                                              ty: 8,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "U128",
                                    },
                                    5: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0xe67269eb",
                                              ty: 9,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "Bytes",
                                    },
                                  },
                                },
                              },
                              root_key: "0xe67269eb",
                            },
                          },
                          name: "ticket_player_link",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x2715199f",
                                  ty: 0,
                                },
                              },
                              root_key: "0x2715199f",
                            },
                          },
                          name: "player_nfts",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x7180a2ac",
                                  ty: 10,
                                },
                              },
                              root_key: "0x7180a2ac",
                            },
                          },
                          name: "chainlink_request_id_session_link",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x2443cbd6",
                                  ty: 8,
                                },
                              },
                              root_key: "0x2443cbd6",
                            },
                          },
                          name: "hold_amount_players",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x57ecaff6",
                                  ty: 0,
                                },
                              },
                              root_key: "0x57ecaff6",
                            },
                          },
                          name: "hold_players",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 8,
                            },
                          },
                          name: "total_tickets_win",
                        },
                        {
                          layout: {
                            enum: {
                              dispatchKey: "0x00000000",
                              name: "Option",
                              variants: {
                                0: {
                                  fields: [],
                                  name: "None",
                                },
                                1: {
                                  fields: [
                                    {
                                      layout: {
                                        leaf: {
                                          key: "0x00000000",
                                          ty: 5,
                                        },
                                      },
                                      name: "0",
                                    },
                                  ],
                                  name: "Some",
                                },
                              },
                            },
                          },
                          name: "_reserved",
                        },
                      ],
                      name: "Manager",
                    },
                  },
                  name: "manager",
                },
                {
                  layout: {
                    struct: {
                      fields: [
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x1eb9f2a8",
                                  ty: 4,
                                },
                              },
                              root_key: "0x1eb9f2a8",
                            },
                          },
                          name: "admin_roles",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                enum: {
                                  dispatchKey: "0x869d6fc0",
                                  name: "Option",
                                  variants: {
                                    0: {
                                      fields: [],
                                      name: "None",
                                    },
                                    1: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0x869d6fc0",
                                              ty: 0,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "Some",
                                    },
                                  },
                                },
                              },
                              root_key: "0x869d6fc0",
                            },
                          },
                          name: "role_members",
                        },
                      ],
                      name: "Data",
                    },
                  },
                  name: "enumerable",
                },
                {
                  layout: {
                    struct: {
                      fields: [
                        {
                          layout: {
                            enum: {
                              dispatchKey: "0x00000000",
                              name: "Option",
                              variants: {
                                0: {
                                  fields: [],
                                  name: "None",
                                },
                                1: {
                                  fields: [
                                    {
                                      layout: {
                                        leaf: {
                                          key: "0x00000000",
                                          ty: 5,
                                        },
                                      },
                                      name: "0",
                                    },
                                  ],
                                  name: "Some",
                                },
                              },
                            },
                          },
                          name: "_reserved",
                        },
                      ],
                      name: "Data",
                    },
                  },
                  name: "admin",
                },
              ],
              name: "PandoraPoolContract",
            },
          },
          root_key: "0x00000000",
        },
      },
      types: [
        {
          id: 0,
          type: {
            def: {
              composite: {
                fields: [
                  {
                    type: 1,
                    typeName: "[u8; 32]",
                  },
                ],
              },
            },
            path: ["ink_primitives", "types", "AccountId"],
          },
        },
        {
          id: 1,
          type: {
            def: {
              array: {
                len: 32,
                type: 2,
              },
            },
          },
        },
        {
          id: 2,
          type: {
            def: {
              primitive: "u8",
            },
          },
        },
        {
          id: 3,
          type: {
            def: {
              primitive: "bool",
            },
          },
        },
        {
          id: 4,
          type: {
            def: {
              primitive: "u32",
            },
          },
        },
        {
          id: 5,
          type: {
            def: {
              tuple: [],
            },
          },
        },
        {
          id: 6,
          type: {
            def: {
              primitive: "u16",
            },
          },
        },
        {
          id: 7,
          type: {
            def: {
              primitive: "u64",
            },
          },
        },
        {
          id: 8,
          type: {
            def: {
              primitive: "u128",
            },
          },
        },
        {
          id: 9,
          type: {
            def: {
              sequence: {
                type: 2,
              },
            },
          },
        },
        {
          id: 10,
          type: {
            def: {
              primitive: "str",
            },
          },
        },
        {
          id: 11,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 5,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 5,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 12,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    index: 1,
                    name: "CouldNotReadInput",
                  },
                ],
              },
            },
            path: ["ink_primitives", "LangError"],
          },
        },
        {
          id: 13,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 14,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 14,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 14,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 5,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 15,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 5,
              },
              {
                name: "E",
                type: 15,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 15,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 10,
                        typeName: "String",
                      },
                    ],
                    index: 0,
                    name: "Custom",
                  },
                  {
                    index: 1,
                    name: "OnlyOwner",
                  },
                  {
                    index: 2,
                    name: "OnlyAdmin",
                  },
                  {
                    index: 3,
                    name: "InvalidCaller",
                  },
                  {
                    index: 4,
                    name: "OnlyMinterCanMint",
                  },
                  {
                    index: 5,
                    name: "NotApproved",
                  },
                  {
                    index: 6,
                    name: "CannotTransfer",
                  },
                  {
                    index: 7,
                    name: "CannotMint",
                  },
                  {
                    index: 8,
                    name: "InvalidBuyTokensStatus",
                  },
                  {
                    index: 9,
                    name: "InvalidRewardTokensStatus",
                  },
                  {
                    index: 10,
                    name: "InsufficientAllowanceToLend",
                  },
                  {
                    index: 11,
                    name: "NotEnoughBalance",
                  },
                  {
                    index: 12,
                    name: "WithdrawFeeError",
                  },
                  {
                    index: 13,
                    name: "MaxBuyTokenAmount",
                  },
                  {
                    index: 14,
                    name: "TokensCanNotPurchased",
                  },
                  {
                    index: 15,
                    name: "TransferFailed",
                  },
                  {
                    index: 16,
                    name: "AlreadyInit",
                  },
                  {
                    index: 17,
                    name: "NotOwner",
                  },
                  {
                    index: 18,
                    name: "BetNotFinalized",
                  },
                  {
                    index: 19,
                    name: "CallerIsNotAdmin",
                  },
                  {
                    index: 20,
                    name: "InvalidInput",
                  },
                  {
                    index: 21,
                    name: "BetNotExist",
                  },
                  {
                    index: 22,
                    name: "HoldAmountPlayerNotExist",
                  },
                  {
                    index: 23,
                    name: "NoAmount",
                  },
                  {
                    index: 24,
                    name: "InvalidBalanceAndAllowance",
                  },
                  {
                    index: 25,
                    name: "InvalidUnstakedAmount",
                  },
                  {
                    index: 26,
                    name: "NotTimeToUnstaked",
                  },
                  {
                    index: 27,
                    name: "NoStakerFound",
                  },
                  {
                    index: 28,
                    name: "NotStaked",
                  },
                  {
                    index: 29,
                    name: "InvalidTotalStake",
                  },
                  {
                    index: 30,
                    name: "CallerNotRequestUnstake",
                  },
                  {
                    index: 31,
                    name: "ClaimMustBeFalse",
                  },
                  {
                    index: 32,
                    name: "RewardStarted",
                  },
                  {
                    index: 33,
                    name: "RewardNotStarted",
                  },
                  {
                    index: 34,
                    name: "InvalidInputRatio",
                  },
                  {
                    index: 35,
                    name: "NotTimeBuyToken",
                  },
                  {
                    index: 36,
                    name: "CannotBuyAtThisTime",
                  },
                  {
                    index: 37,
                    name: "NotTimeToFinalize",
                  },
                  {
                    index: 38,
                    name: "WhitelistNotExists",
                  },
                  {
                    index: 39,
                    name: "PoolNotExists",
                  },
                  {
                    index: 40,
                    name: "InvalidWhitelistData",
                  },
                  {
                    index: 41,
                    name: "WhitelistInfoExist",
                  },
                  {
                    index: 42,
                    name: "WhitelistBuyerPurchased",
                  },
                  {
                    index: 43,
                    name: "SalePoolPrurchased",
                  },
                  {
                    index: 44,
                    name: "PoolPrurchased",
                  },
                  {
                    index: 45,
                    name: "InvalidEndTime",
                  },
                  {
                    index: 46,
                    name: "NotTokenOwner",
                  },
                  {
                    index: 47,
                    name: "CannotIncreaseLastTokenId",
                  },
                  {
                    index: 48,
                    name: "CannotSetAttributes",
                  },
                  {
                    index: 49,
                    name: "SessionNotExists",
                  },
                  {
                    index: 50,
                    name: "SessionIsExists",
                  },
                  {
                    index: 51,
                    name: "BetIsExists",
                  },
                  {
                    index: 52,
                    name: "SessionNotCompleted",
                  },
                  {
                    index: 53,
                    name: "SessionNotFinished",
                  },
                  {
                    index: 54,
                    name: "SessionNotProcessed",
                  },
                  {
                    index: 55,
                    name: "YouAreNotWinner",
                  },
                  {
                    index: 56,
                    name: "InvalidState",
                  },
                  {
                    index: 57,
                    name: "SessionNotTicketWin",
                  },
                  {
                    index: 58,
                    name: "NftIsUsed",
                  },
                  {
                    index: 59,
                    name: "NftIsNotUsed",
                  },
                  {
                    index: 60,
                    name: "CannotBurn",
                  },
                  {
                    index: 61,
                    name: "NextSessionsNotExists",
                  },
                  {
                    index: 62,
                    name: "AddSessionFailed",
                  },
                  {
                    index: 63,
                    name: "InvalidFee",
                  },
                  {
                    index: 64,
                    name: "PoolIsExists",
                  },
                  {
                    index: 65,
                    name: "InvalidTotalPurchasedAmount",
                  },
                  {
                    index: 66,
                    name: "TicketAmountLimitReached",
                  },
                  {
                    index: 67,
                    name: "NotTimeToFinalized",
                  },
                  {
                    index: 68,
                    name: "CallerDoNotHaveVoting",
                  },
                  {
                    index: 69,
                    name: "SetPoolRationFailed",
                  },
                  {
                    index: 70,
                    name: "FailToDecreaseClaimableReward",
                  },
                  {
                    index: 71,
                    name: "RewardNotAdded",
                  },
                  {
                    index: 72,
                    name: "ChainlinkRequestIdIsExists",
                  },
                  {
                    index: 73,
                    name: "CannotUpdateSession",
                  },
                  {
                    fields: [
                      {
                        type: 16,
                        typeName: "OwnableError",
                      },
                    ],
                    index: 74,
                    name: "OwnableError",
                  },
                  {
                    fields: [
                      {
                        type: 17,
                        typeName: "AccessControlError",
                      },
                    ],
                    index: 75,
                    name: "AccessControlError",
                  },
                  {
                    fields: [
                      {
                        type: 18,
                        typeName: "PSP22Error",
                      },
                    ],
                    index: 76,
                    name: "PSP22Error",
                  },
                  {
                    fields: [
                      {
                        type: 20,
                        typeName: "PSP34Error",
                      },
                    ],
                    index: 77,
                    name: "PSP34Error",
                  },
                  {
                    fields: [
                      {
                        type: 21,
                        typeName: "PausableError",
                      },
                    ],
                    index: 78,
                    name: "PausableError",
                  },
                  {
                    index: 79,
                    name: "CheckedOperations",
                  },
                ],
              },
            },
            path: ["bet_a0", "traits", "error", "Error"],
          },
        },
        {
          id: 16,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    index: 0,
                    name: "CallerIsNotOwner",
                  },
                  {
                    index: 1,
                    name: "NewOwnerIsNotSet",
                  },
                ],
              },
            },
            path: [
              "openbrush_contracts",
              "traits",
              "errors",
              "ownable",
              "OwnableError",
            ],
          },
        },
        {
          id: 17,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    index: 0,
                    name: "InvalidCaller",
                  },
                  {
                    index: 1,
                    name: "MissingRole",
                  },
                  {
                    index: 2,
                    name: "RoleRedundant",
                  },
                ],
              },
            },
            path: [
              "openbrush_contracts",
              "traits",
              "errors",
              "access_control",
              "AccessControlError",
            ],
          },
        },
        {
          id: 18,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 10,
                        typeName: "String",
                      },
                    ],
                    index: 0,
                    name: "Custom",
                  },
                  {
                    index: 1,
                    name: "InsufficientBalance",
                  },
                  {
                    index: 2,
                    name: "InsufficientAllowance",
                  },
                  {
                    index: 3,
                    name: "RecipientIsNotSet",
                  },
                  {
                    index: 4,
                    name: "SenderIsNotSet",
                  },
                  {
                    fields: [
                      {
                        type: 10,
                        typeName: "String",
                      },
                    ],
                    index: 5,
                    name: "SafeTransferCheckFailed",
                  },
                  {
                    index: 6,
                    name: "PermitInvalidSignature",
                  },
                  {
                    index: 7,
                    name: "PermitExpired",
                  },
                  {
                    fields: [
                      {
                        type: 19,
                        typeName: "NoncesError",
                      },
                    ],
                    index: 8,
                    name: "NoncesError",
                  },
                ],
              },
            },
            path: [
              "openbrush_contracts",
              "traits",
              "errors",
              "psp22",
              "PSP22Error",
            ],
          },
        },
        {
          id: 19,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 0,
                        typeName: "AccountId",
                      },
                      {
                        type: 7,
                        typeName: "u64",
                      },
                    ],
                    index: 0,
                    name: "InvalidAccountNonce",
                  },
                  {
                    index: 1,
                    name: "NonceOverflow",
                  },
                ],
              },
            },
            path: [
              "openbrush_contracts",
              "traits",
              "errors",
              "nonces",
              "NoncesError",
            ],
          },
        },
        {
          id: 20,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 10,
                        typeName: "String",
                      },
                    ],
                    index: 0,
                    name: "Custom",
                  },
                  {
                    index: 1,
                    name: "SelfApprove",
                  },
                  {
                    index: 2,
                    name: "NotApproved",
                  },
                  {
                    index: 3,
                    name: "TokenExists",
                  },
                  {
                    index: 4,
                    name: "TokenNotExists",
                  },
                  {
                    fields: [
                      {
                        type: 10,
                        typeName: "String",
                      },
                    ],
                    index: 5,
                    name: "SafeTransferCheckFailed",
                  },
                ],
              },
            },
            path: [
              "openbrush_contracts",
              "traits",
              "errors",
              "psp34",
              "PSP34Error",
            ],
          },
        },
        {
          id: 21,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    index: 0,
                    name: "Paused",
                  },
                  {
                    index: 1,
                    name: "NotPaused",
                  },
                ],
              },
            },
            path: [
              "openbrush_contracts",
              "traits",
              "errors",
              "pausable",
              "PausableError",
            ],
          },
        },
        {
          id: 22,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    index: 0,
                    name: "Processing",
                  },
                  {
                    index: 1,
                    name: "Finalized",
                  },
                  {
                    index: 2,
                    name: "Completed",
                  },
                ],
              },
            },
            path: ["bet_a0", "impls", "pandora", "data", "SessionsStatusType"],
          },
        },
        {
          id: 23,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 24,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 24,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 24,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    index: 0,
                    name: "None",
                  },
                  {
                    fields: [
                      {
                        type: 25,
                      },
                    ],
                    index: 1,
                    name: "Some",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 25,
              },
            ],
            path: ["Option"],
          },
        },
        {
          id: 25,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 2,
                        typeName: "u8",
                      },
                    ],
                    index: 0,
                    name: "U8",
                  },
                  {
                    fields: [
                      {
                        type: 6,
                        typeName: "u16",
                      },
                    ],
                    index: 1,
                    name: "U16",
                  },
                  {
                    fields: [
                      {
                        type: 4,
                        typeName: "u32",
                      },
                    ],
                    index: 2,
                    name: "U32",
                  },
                  {
                    fields: [
                      {
                        type: 7,
                        typeName: "u64",
                      },
                    ],
                    index: 3,
                    name: "U64",
                  },
                  {
                    fields: [
                      {
                        type: 8,
                        typeName: "u128",
                      },
                    ],
                    index: 4,
                    name: "U128",
                  },
                  {
                    fields: [
                      {
                        type: 9,
                        typeName: "Vec<u8>",
                      },
                    ],
                    index: 5,
                    name: "Bytes",
                  },
                ],
              },
            },
            path: ["openbrush_contracts", "traits", "types", "Id"],
          },
        },
        {
          id: 26,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 27,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 27,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 27,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    index: 0,
                    name: "None",
                  },
                  {
                    fields: [
                      {
                        type: 10,
                      },
                    ],
                    index: 1,
                    name: "Some",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 10,
              },
            ],
            path: ["Option"],
          },
        },
        {
          id: 28,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 0,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 0,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 29,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 30,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 30,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 30,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    index: 0,
                    name: "None",
                  },
                  {
                    fields: [
                      {
                        type: 8,
                      },
                    ],
                    index: 1,
                    name: "Some",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 8,
              },
            ],
            path: ["Option"],
          },
        },
        {
          id: 31,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 8,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 8,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 32,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 7,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 7,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 33,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 4,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 4,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 34,
          type: {
            def: {
              sequence: {
                type: 25,
              },
            },
          },
        },
        {
          id: 35,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 36,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 36,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 36,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    index: 0,
                    name: "None",
                  },
                  {
                    fields: [
                      {
                        type: 0,
                      },
                    ],
                    index: 1,
                    name: "Some",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 0,
              },
            ],
            path: ["Option"],
          },
        },
        {
          id: 37,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 38,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 38,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 38,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    index: 0,
                    name: "None",
                  },
                  {
                    fields: [
                      {
                        type: 39,
                      },
                    ],
                    index: 1,
                    name: "Some",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 39,
              },
            ],
            path: ["Option"],
          },
        },
        {
          id: 39,
          type: {
            def: {
              composite: {
                fields: [
                  {
                    name: "session_id",
                    type: 4,
                    typeName: "u32",
                  },
                  {
                    name: "bet_number",
                    type: 4,
                    typeName: "u32",
                  },
                  {
                    name: "time",
                    type: 7,
                    typeName: "Timestamp",
                  },
                  {
                    name: "used",
                    type: 3,
                    typeName: "bool",
                  },
                ],
              },
            },
            path: ["bet_a0", "impls", "pandora", "data", "NFTInfomation"],
          },
        },
        {
          id: 40,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 3,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 3,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 41,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 42,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 42,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 42,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    index: 0,
                    name: "None",
                  },
                  {
                    fields: [
                      {
                        type: 43,
                      },
                    ],
                    index: 1,
                    name: "Some",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 43,
              },
            ],
            path: ["Option"],
          },
        },
        {
          id: 43,
          type: {
            def: {
              composite: {
                fields: [
                  {
                    name: "random_number",
                    type: 4,
                    typeName: "u32",
                  },
                  {
                    name: "status",
                    type: 22,
                    typeName: "SessionsStatusType",
                  },
                ],
              },
            },
            path: ["bet_a0", "impls", "pandora", "data", "SessionInfo"],
          },
        },
        {
          id: 44,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 45,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 45,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 45,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 5,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 16,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 5,
              },
              {
                name: "E",
                type: 16,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 46,
          type: {
            def: {
              composite: {
                fields: [
                  {
                    type: 1,
                    typeName: "[u8; 32]",
                  },
                ],
              },
            },
            path: ["ink_primitives", "types", "Hash"],
          },
        },
        {
          id: 47,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 48,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 48,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 48,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 5,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 49,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 5,
              },
              {
                name: "E",
                type: 49,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 49,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 10,
                        typeName: "String",
                      },
                    ],
                    index: 0,
                    name: "Custom",
                  },
                  {
                    index: 1,
                    name: "SetCodeHashFailed",
                  },
                  {
                    fields: [
                      {
                        type: 16,
                        typeName: "OwnableError",
                      },
                    ],
                    index: 2,
                    name: "OwnableError",
                  },
                  {
                    fields: [
                      {
                        type: 17,
                        typeName: "AccessControlError",
                      },
                    ],
                    index: 3,
                    name: "AccessControlError",
                  },
                ],
              },
            },
            path: [
              "openbrush_contracts",
              "traits",
              "errors",
              "upgradeable",
              "UpgradeableError",
            ],
          },
        },
        {
          id: 50,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 51,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 51,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 51,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 5,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 17,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 5,
              },
              {
                name: "E",
                type: 17,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 52,
          type: {
            def: {
              variant: {},
            },
            path: ["ink_env", "types", "NoChainExtension"],
          },
        },
      ],
      version: "4",
    },
  },
  mainnet: {
    CONTRACT_ADDRESS: "5GrhiAP3vHZU7oNyfpPUL1jU3yWLDmkLkMFcmvBC8PcPvuZh",
    CONTRACT_ABI: {
      source: {
        hash: "0xa93459ceba56611bbefb54a5daaf313513bf6e6d5ad6cd3c2fd3b9304d6d5b75",
        language: "ink! 4.3.0",
        compiler: "rustc 1.75.0-nightly",
        build_info: {
          build_mode: "Debug",
          cargo_contract_version: "3.2.0",
          rust_toolchain: "nightly-x86_64-unknown-linux-gnu",
          wasm_opt_settings: {
            keep_debug_symbols: false,
            optimization_passes: "Z",
          },
        },
      },
      contract: {
        name: "pandora",
        version: "1.0.0",
        authors: ["bet_a0 <admin@betA0.net>"],
      },
      spec: {
        constructors: [
          {
            args: [
              {
                label: "admin_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "psp34_contract_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "max_bet_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [],
            label: "new",
            payable: false,
            returnType: {
              displayName: ["ink_primitives", "ConstructorResult"],
              type: 11,
            },
            selector: "0x9bae9d5e",
          },
        ],
        docs: [],
        environment: {
          accountId: {
            displayName: ["AccountId"],
            type: 0,
          },
          balance: {
            displayName: ["Balance"],
            type: 8,
          },
          blockNumber: {
            displayName: ["BlockNumber"],
            type: 4,
          },
          chainExtension: {
            displayName: ["ChainExtension"],
            type: 52,
          },
          hash: {
            displayName: ["Hash"],
            type: 46,
          },
          maxEventTopics: 4,
          timestamp: {
            displayName: ["Timestamp"],
            type: 7,
          },
        },
        events: [
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "session_id",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "player",
                type: {
                  displayName: ["Option"],
                  type: 36,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "token_id",
                type: {
                  displayName: ["Id"],
                  type: 25,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "bet_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
            ],
            docs: [],
            label: "PlayEvent",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "session_id",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "player",
                type: {
                  displayName: ["Option"],
                  type: 36,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "win_amount",
                type: {
                  displayName: ["Balance"],
                  type: 8,
                },
              },
            ],
            docs: [],
            label: "WithdrawWinAmountEvent",
          },
        ],
        lang_error: {
          displayName: ["ink", "LangError"],
          type: 12,
        },
        messages: [
          {
            args: [
              {
                label: "admin_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "psp34_contract_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "max_bet_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [" Function init"],
            label: "initialize",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0xf2f6dba3",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "random_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "status_type",
                type: {
                  displayName: ["SessionsStatusType"],
                  type: 22,
                },
              },
            ],
            default: false,
            docs: [],
            label: "update_bet_session",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0xe4bda728",
          },
          {
            args: [
              {
                label: "amount",
                type: {
                  displayName: ["Balance"],
                  type: 8,
                },
              },
            ],
            default: false,
            docs: [" update total win amount"],
            label: "update_total_win_amount",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0xdd28222f",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetIdInSessionByRandomNumberAndIndexInput1",
                  ],
                  type: 4,
                },
              },
              {
                label: "random_number",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetIdInSessionByRandomNumberAndIndexInput2",
                  ],
                  type: 4,
                },
              },
              {
                label: "index",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetIdInSessionByRandomNumberAndIndexInput3",
                  ],
                  type: 8,
                },
              },
            ],
            default: false,
            docs: [" get Id in session by random number"],
            label:
              "PandoraPoolTraits::get_id_in_session_by_random_number_and_index",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0x1c7b8061",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "WithdrawFeeInput1",
                  ],
                  type: 0,
                },
              },
              {
                label: "value",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "WithdrawFeeInput2",
                  ],
                  type: 8,
                },
              },
            ],
            default: false,
            docs: [" Withdraw fee"],
            label: "PandoraPoolTraits::withdraw_fee",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x1a9f91ea",
          },
          {
            args: [
              {
                label: "state",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "ChangeStateInput1",
                  ],
                  type: 3,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::change_state",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0xf360cf77",
          },
          {
            args: [
              {
                label: "max_bet_number",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "SetMaxBetNumberInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [" set max_bet_number"],
            label: "PandoraPoolTraits::set_max_bet_number",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x7c4f1539",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetChainlinkRequestIdBySessionIdInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [" get chainlink request id by session id"],
            label: "PandoraPoolTraits::get_chainlink_request_id_by_session_id",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 26,
            },
            selector: "0x9e02d145",
          },
          {
            args: [
              {
                label: "is_locked",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "UpdateIsLockedInput1",
                  ],
                  type: 3,
                },
              },
            ],
            default: false,
            docs: [" update is locked"],
            label: "PandoraPoolTraits::update_is_locked",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x430c53c5",
          },
          {
            args: [],
            default: false,
            docs: [" get psp34 address"],
            label: "PandoraPoolTraits::get_psp34_contract_address",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 28,
            },
            selector: "0xf4147bca",
          },
          {
            args: [
              {
                label: "address",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetHoldAmountPlayersInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [" Get hold amount players"],
            label: "PandoraPoolTraits::get_hold_amount_players",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 29,
            },
            selector: "0x045c951e",
          },
          {
            args: [],
            default: false,
            docs: [" get total win amount"],
            label: "PandoraPoolTraits::get_total_win_amount",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 31,
            },
            selector: "0x9c52f857",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "HandleFindWinnerInput1",
                  ],
                  type: 4,
                },
              },
              {
                label: "index",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "HandleFindWinnerInput2",
                  ],
                  type: 8,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::handle_find_winner",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x68437b43",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "SessionTotalTicketAmountInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [" get total ticket in session"],
            label: "PandoraPoolTraits::session_total_ticket_amount",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 31,
            },
            selector: "0x15d02921",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "SetPsp34ContractAddressInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::set_psp34_contract_address",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x2138d28f",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "AddChainlinkRequestIdInput1",
                  ],
                  type: 4,
                },
              },
              {
                label: "chainlink_request_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "AddChainlinkRequestIdInput2",
                  ],
                  type: 10,
                },
              },
            ],
            default: false,
            docs: [" add chainlink request id"],
            label: "PandoraPoolTraits::add_chainlink_request_id",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x94a4200b",
          },
          {
            args: [],
            default: false,
            docs: [" Get Hold Player Count"],
            label: "PandoraPoolTraits::get_hold_player_count",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 32,
            },
            selector: "0x1d19d9b8",
          },
          {
            args: [],
            default: false,
            docs: [" get total hold amount"],
            label: "PandoraPoolTraits::get_total_hold_amount",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 31,
            },
            selector: "0x3cf6a1f8",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: ["pandorapooltraits_external", "FinalizeInput1"],
                  type: 4,
                },
              },
              {
                label: "random_number",
                type: {
                  displayName: ["pandorapooltraits_external", "FinalizeInput2"],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::finalize",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x5f2b6996",
          },
          {
            args: [
              {
                label: "receiver",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "WithdrawHoldAmountInput1",
                  ],
                  type: 0,
                },
              },
              {
                label: "amount",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "WithdrawHoldAmountInput2",
                  ],
                  type: 8,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::withdraw_hold_amount",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x8b9f4bfe",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::add_new_bet_session",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x6e8baa4d",
          },
          {
            args: [],
            default: false,
            docs: [" get max_bet_number"],
            label: "PandoraPoolTraits::get_max_bet_number",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 33,
            },
            selector: "0xa0bd542e",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "TotalTicketsWinInput1",
                  ],
                  type: 4,
                },
              },
              {
                label: "random_number",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "TotalTicketsWinInput2",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::total_tickets_win",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 31,
            },
            selector: "0x8ad46672",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: ["pandorapooltraits_external", "PlayInput1"],
                  type: 4,
                },
              },
              {
                label: "bet_number",
                type: {
                  displayName: ["pandorapooltraits_external", "PlayInput2"],
                  type: 4,
                },
              },
              {
                label: "token_id",
                type: {
                  displayName: ["pandorapooltraits_external", "PlayInput3"],
                  type: 25,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::play",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x63eb22f9",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetIdInSessionByIndexInput1",
                  ],
                  type: 4,
                },
              },
              {
                label: "index",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetIdInSessionByIndexInput2",
                  ],
                  type: 8,
                },
              },
            ],
            default: false,
            docs: [" get Id in session"],
            label: "PandoraPoolTraits::get_id_in_session_by_index",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0xcc5dbd65",
          },
          {
            args: [
              {
                label: "token_ids",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "BurnTicketUsedInput1",
                  ],
                  type: 34,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::burn_ticket_used",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x84dd0f1b",
          },
          {
            args: [],
            default: false,
            docs: [" get last session id"],
            label: "PandoraPoolTraits::get_last_session_id",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 33,
            },
            selector: "0xaadab449",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "TotalPlayersInSessionInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::total_players_in_session",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 31,
            },
            selector: "0x4dce7946",
          },
          {
            args: [
              {
                label: "token_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetPlayerByNftIdInput1",
                  ],
                  type: 25,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::get_player_by_nft_id",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 35,
            },
            selector: "0x5d742f27",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetPlayersInSessionByIndexInput1",
                  ],
                  type: 4,
                },
              },
              {
                label: "index",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetPlayersInSessionByIndexInput2",
                  ],
                  type: 8,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::get_players_in_session_by_index",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 35,
            },
            selector: "0xd130f5ed",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetPlayerWinAmountInput1",
                  ],
                  type: 4,
                },
              },
              {
                label: "account",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetPlayerWinAmountInput2",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::get_player_win_amount",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 29,
            },
            selector: "0xce2766b7",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::get_player_not_yet_processed",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 31,
            },
            selector: "0xc1dde424",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::get_owner",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 35,
            },
            selector: "0x4a992a16",
          },
          {
            args: [
              {
                label: "token_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetNftInfoInput1",
                  ],
                  type: 25,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::get_nft_info",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 37,
            },
            selector: "0x63a8ad62",
          },
          {
            args: [
              {
                label: "index",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetHoldPlayersByIndexInput1",
                  ],
                  type: 7,
                },
              },
            ],
            default: false,
            docs: [" Get hold players by index"],
            label: "PandoraPoolTraits::get_hold_players_by_index",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 35,
            },
            selector: "0x00878623",
          },
          {
            args: [],
            default: false,
            docs: [" get is locked"],
            label: "PandoraPoolTraits::get_is_locked",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 40,
            },
            selector: "0x225447fa",
          },
          {
            args: [
              {
                label: "session_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetBetSessionInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [" get bet session"],
            label: "PandoraPoolTraits::get_bet_session",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 41,
            },
            selector: "0x7c4dc868",
          },
          {
            args: [
              {
                label: "new_owner",
                type: {
                  displayName: ["ownable_external", "TransferOwnershipInput1"],
                  type: 36,
                },
              },
            ],
            default: false,
            docs: [],
            label: "Ownable::transfer_ownership",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 44,
            },
            selector: "0x11f43efd",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "Ownable::renounce_ownership",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 44,
            },
            selector: "0x5e228753",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "Ownable::owner",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 35,
            },
            selector: "0x4fa43c8c",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "Pausable::paused",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 40,
            },
            selector: "0xd123ce11",
          },
          {
            args: [
              {
                label: "new_code_hash",
                type: {
                  displayName: ["upgradeable_external", "SetCodeHashInput1"],
                  type: 46,
                },
              },
            ],
            default: false,
            docs: [],
            label: "Upgradeable::set_code_hash",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 47,
            },
            selector: "0x1700ae80",
          },
          {
            args: [
              {
                label: "role",
                type: {
                  displayName: ["accesscontrol_external", "RevokeRoleInput1"],
                  type: 4,
                },
              },
              {
                label: "account",
                type: {
                  displayName: ["accesscontrol_external", "RevokeRoleInput2"],
                  type: 36,
                },
              },
            ],
            default: false,
            docs: [],
            label: "AccessControl::revoke_role",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 50,
            },
            selector: "0x6e4f0991",
          },
          {
            args: [
              {
                label: "role",
                type: {
                  displayName: ["accesscontrol_external", "RenounceRoleInput1"],
                  type: 4,
                },
              },
              {
                label: "account",
                type: {
                  displayName: ["accesscontrol_external", "RenounceRoleInput2"],
                  type: 36,
                },
              },
            ],
            default: false,
            docs: [],
            label: "AccessControl::renounce_role",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 50,
            },
            selector: "0xeaf1248a",
          },
          {
            args: [
              {
                label: "role",
                type: {
                  displayName: ["accesscontrol_external", "GetRoleAdminInput1"],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [],
            label: "AccessControl::get_role_admin",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 33,
            },
            selector: "0x83da3bb2",
          },
          {
            args: [
              {
                label: "role",
                type: {
                  displayName: ["accesscontrol_external", "GrantRoleInput1"],
                  type: 4,
                },
              },
              {
                label: "account",
                type: {
                  displayName: ["accesscontrol_external", "GrantRoleInput2"],
                  type: 36,
                },
              },
            ],
            default: false,
            docs: [],
            label: "AccessControl::grant_role",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 50,
            },
            selector: "0x4ac062fd",
          },
          {
            args: [
              {
                label: "role",
                type: {
                  displayName: ["accesscontrol_external", "HasRoleInput1"],
                  type: 4,
                },
              },
              {
                label: "address",
                type: {
                  displayName: ["accesscontrol_external", "HasRoleInput2"],
                  type: 36,
                },
              },
            ],
            default: false,
            docs: [],
            label: "AccessControl::has_role",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 40,
            },
            selector: "0xc1d9ac18",
          },
          {
            args: [
              {
                label: "role",
                type: {
                  displayName: [
                    "accesscontrolenumerable_external",
                    "GetRoleMemberInput1",
                  ],
                  type: 4,
                },
              },
              {
                label: "index",
                type: {
                  displayName: [
                    "accesscontrolenumerable_external",
                    "GetRoleMemberInput2",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [],
            label: "AccessControlEnumerable::get_role_member",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 35,
            },
            selector: "0x163469e0",
          },
          {
            args: [
              {
                label: "role",
                type: {
                  displayName: [
                    "accesscontrolenumerable_external",
                    "GetRoleMemberCountInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [],
            label: "AccessControlEnumerable::get_role_member_count",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 33,
            },
            selector: "0xf1b1a9d7",
          },
        ],
      },
      storage: {
        root: {
          layout: {
            struct: {
              fields: [
                {
                  layout: {
                    struct: {
                      fields: [
                        {
                          layout: {
                            root: {
                              layout: {
                                enum: {
                                  dispatchKey: "0x6f713913",
                                  name: "Option",
                                  variants: {
                                    0: {
                                      fields: [],
                                      name: "None",
                                    },
                                    1: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0x6f713913",
                                              ty: 0,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "Some",
                                    },
                                  },
                                },
                              },
                              root_key: "0x6f713913",
                            },
                          },
                          name: "owner",
                        },
                      ],
                      name: "Data",
                    },
                  },
                  name: "ownable",
                },
                {
                  layout: {
                    struct: {
                      fields: [
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0xec3485f7",
                                  ty: 3,
                                },
                              },
                              root_key: "0xec3485f7",
                            },
                          },
                          name: "paused",
                        },
                      ],
                      name: "Data",
                    },
                  },
                  name: "pausable",
                },
                {
                  layout: {
                    struct: {
                      fields: [
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x1f2cf4ac",
                                  ty: 4,
                                },
                              },
                              root_key: "0x1f2cf4ac",
                            },
                          },
                          name: "admin_roles",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x8150f558",
                                  ty: 5,
                                },
                              },
                              root_key: "0x8150f558",
                            },
                          },
                          name: "members",
                        },
                      ],
                      name: "Data",
                    },
                  },
                  name: "access",
                },
                {
                  layout: {
                    struct: {
                      fields: [
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 0,
                            },
                          },
                          name: "psp34_contract_address",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 3,
                            },
                          },
                          name: "is_locked",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 4,
                            },
                          },
                          name: "max_bet_number",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                enum: {
                                  dispatchKey: "0x3e46dd4a",
                                  name: "Id",
                                  variants: {
                                    0: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0x3e46dd4a",
                                              ty: 2,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "U8",
                                    },
                                    1: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0x3e46dd4a",
                                              ty: 6,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "U16",
                                    },
                                    2: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0x3e46dd4a",
                                              ty: 4,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "U32",
                                    },
                                    3: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0x3e46dd4a",
                                              ty: 7,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "U64",
                                    },
                                    4: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0x3e46dd4a",
                                              ty: 8,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "U128",
                                    },
                                    5: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0x3e46dd4a",
                                              ty: 9,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "Bytes",
                                    },
                                  },
                                },
                              },
                              root_key: "0x3e46dd4a",
                            },
                          },
                          name: "ticket_in_session",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 8,
                            },
                          },
                          name: "total_win_amounts",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                struct: {
                                  fields: [
                                    {
                                      layout: {
                                        leaf: {
                                          key: "0x806a82b1",
                                          ty: 4,
                                        },
                                      },
                                      name: "session_id",
                                    },
                                    {
                                      layout: {
                                        leaf: {
                                          key: "0x806a82b1",
                                          ty: 4,
                                        },
                                      },
                                      name: "bet_number",
                                    },
                                    {
                                      layout: {
                                        leaf: {
                                          key: "0x806a82b1",
                                          ty: 7,
                                        },
                                      },
                                      name: "time",
                                    },
                                    {
                                      layout: {
                                        leaf: {
                                          key: "0x806a82b1",
                                          ty: 3,
                                        },
                                      },
                                      name: "used",
                                    },
                                  ],
                                  name: "NFTInfomation",
                                },
                              },
                              root_key: "0x806a82b1",
                            },
                          },
                          name: "nft_infor",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 4,
                            },
                          },
                          name: "last_session_id",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                struct: {
                                  fields: [
                                    {
                                      layout: {
                                        leaf: {
                                          key: "0x76829ac5",
                                          ty: 4,
                                        },
                                      },
                                      name: "random_number",
                                    },
                                    {
                                      layout: {
                                        enum: {
                                          dispatchKey: "0x76829ac5",
                                          name: "SessionsStatusType",
                                          variants: {
                                            0: {
                                              fields: [],
                                              name: "Processing",
                                            },
                                            1: {
                                              fields: [],
                                              name: "Finalized",
                                            },
                                            2: {
                                              fields: [],
                                              name: "Completed",
                                            },
                                          },
                                        },
                                      },
                                      name: "status",
                                    },
                                  ],
                                  name: "SessionInfo",
                                },
                              },
                              root_key: "0x76829ac5",
                            },
                          },
                          name: "sessions",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0xcba05418",
                                  ty: 0,
                                },
                              },
                              root_key: "0xcba05418",
                            },
                          },
                          name: "players_in_session",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x00ae2bdd",
                                  ty: 8,
                                },
                              },
                              root_key: "0x00ae2bdd",
                            },
                          },
                          name: "player_win_amount",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                enum: {
                                  dispatchKey: "0xe67269eb",
                                  name: "Id",
                                  variants: {
                                    0: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0xe67269eb",
                                              ty: 2,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "U8",
                                    },
                                    1: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0xe67269eb",
                                              ty: 6,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "U16",
                                    },
                                    2: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0xe67269eb",
                                              ty: 4,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "U32",
                                    },
                                    3: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0xe67269eb",
                                              ty: 7,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "U64",
                                    },
                                    4: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0xe67269eb",
                                              ty: 8,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "U128",
                                    },
                                    5: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0xe67269eb",
                                              ty: 9,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "Bytes",
                                    },
                                  },
                                },
                              },
                              root_key: "0xe67269eb",
                            },
                          },
                          name: "ticket_player_link",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x2715199f",
                                  ty: 0,
                                },
                              },
                              root_key: "0x2715199f",
                            },
                          },
                          name: "player_nfts",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x7180a2ac",
                                  ty: 10,
                                },
                              },
                              root_key: "0x7180a2ac",
                            },
                          },
                          name: "chainlink_request_id_session_link",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x2443cbd6",
                                  ty: 8,
                                },
                              },
                              root_key: "0x2443cbd6",
                            },
                          },
                          name: "hold_amount_players",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x57ecaff6",
                                  ty: 0,
                                },
                              },
                              root_key: "0x57ecaff6",
                            },
                          },
                          name: "hold_players",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 8,
                            },
                          },
                          name: "total_tickets_win",
                        },
                        {
                          layout: {
                            enum: {
                              dispatchKey: "0x00000000",
                              name: "Option",
                              variants: {
                                0: {
                                  fields: [],
                                  name: "None",
                                },
                                1: {
                                  fields: [
                                    {
                                      layout: {
                                        leaf: {
                                          key: "0x00000000",
                                          ty: 5,
                                        },
                                      },
                                      name: "0",
                                    },
                                  ],
                                  name: "Some",
                                },
                              },
                            },
                          },
                          name: "_reserved",
                        },
                      ],
                      name: "Manager",
                    },
                  },
                  name: "manager",
                },
                {
                  layout: {
                    struct: {
                      fields: [
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x1eb9f2a8",
                                  ty: 4,
                                },
                              },
                              root_key: "0x1eb9f2a8",
                            },
                          },
                          name: "admin_roles",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                enum: {
                                  dispatchKey: "0x869d6fc0",
                                  name: "Option",
                                  variants: {
                                    0: {
                                      fields: [],
                                      name: "None",
                                    },
                                    1: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0x869d6fc0",
                                              ty: 0,
                                            },
                                          },
                                          name: "0",
                                        },
                                      ],
                                      name: "Some",
                                    },
                                  },
                                },
                              },
                              root_key: "0x869d6fc0",
                            },
                          },
                          name: "role_members",
                        },
                      ],
                      name: "Data",
                    },
                  },
                  name: "enumerable",
                },
                {
                  layout: {
                    struct: {
                      fields: [
                        {
                          layout: {
                            enum: {
                              dispatchKey: "0x00000000",
                              name: "Option",
                              variants: {
                                0: {
                                  fields: [],
                                  name: "None",
                                },
                                1: {
                                  fields: [
                                    {
                                      layout: {
                                        leaf: {
                                          key: "0x00000000",
                                          ty: 5,
                                        },
                                      },
                                      name: "0",
                                    },
                                  ],
                                  name: "Some",
                                },
                              },
                            },
                          },
                          name: "_reserved",
                        },
                      ],
                      name: "Data",
                    },
                  },
                  name: "admin",
                },
              ],
              name: "PandoraPoolContract",
            },
          },
          root_key: "0x00000000",
        },
      },
      types: [
        {
          id: 0,
          type: {
            def: {
              composite: {
                fields: [
                  {
                    type: 1,
                    typeName: "[u8; 32]",
                  },
                ],
              },
            },
            path: ["ink_primitives", "types", "AccountId"],
          },
        },
        {
          id: 1,
          type: {
            def: {
              array: {
                len: 32,
                type: 2,
              },
            },
          },
        },
        {
          id: 2,
          type: {
            def: {
              primitive: "u8",
            },
          },
        },
        {
          id: 3,
          type: {
            def: {
              primitive: "bool",
            },
          },
        },
        {
          id: 4,
          type: {
            def: {
              primitive: "u32",
            },
          },
        },
        {
          id: 5,
          type: {
            def: {
              tuple: [],
            },
          },
        },
        {
          id: 6,
          type: {
            def: {
              primitive: "u16",
            },
          },
        },
        {
          id: 7,
          type: {
            def: {
              primitive: "u64",
            },
          },
        },
        {
          id: 8,
          type: {
            def: {
              primitive: "u128",
            },
          },
        },
        {
          id: 9,
          type: {
            def: {
              sequence: {
                type: 2,
              },
            },
          },
        },
        {
          id: 10,
          type: {
            def: {
              primitive: "str",
            },
          },
        },
        {
          id: 11,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 5,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 5,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 12,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    index: 1,
                    name: "CouldNotReadInput",
                  },
                ],
              },
            },
            path: ["ink_primitives", "LangError"],
          },
        },
        {
          id: 13,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 14,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 14,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 14,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 5,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 15,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 5,
              },
              {
                name: "E",
                type: 15,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 15,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 10,
                        typeName: "String",
                      },
                    ],
                    index: 0,
                    name: "Custom",
                  },
                  {
                    index: 1,
                    name: "OnlyOwner",
                  },
                  {
                    index: 2,
                    name: "OnlyAdmin",
                  },
                  {
                    index: 3,
                    name: "InvalidCaller",
                  },
                  {
                    index: 4,
                    name: "OnlyMinterCanMint",
                  },
                  {
                    index: 5,
                    name: "NotApproved",
                  },
                  {
                    index: 6,
                    name: "CannotTransfer",
                  },
                  {
                    index: 7,
                    name: "CannotMint",
                  },
                  {
                    index: 8,
                    name: "InvalidBuyTokensStatus",
                  },
                  {
                    index: 9,
                    name: "InvalidRewardTokensStatus",
                  },
                  {
                    index: 10,
                    name: "InsufficientAllowanceToLend",
                  },
                  {
                    index: 11,
                    name: "NotEnoughBalance",
                  },
                  {
                    index: 12,
                    name: "WithdrawFeeError",
                  },
                  {
                    index: 13,
                    name: "MaxBuyTokenAmount",
                  },
                  {
                    index: 14,
                    name: "TokensCanNotPurchased",
                  },
                  {
                    index: 15,
                    name: "TransferFailed",
                  },
                  {
                    index: 16,
                    name: "AlreadyInit",
                  },
                  {
                    index: 17,
                    name: "NotOwner",
                  },
                  {
                    index: 18,
                    name: "BetNotFinalized",
                  },
                  {
                    index: 19,
                    name: "CallerIsNotAdmin",
                  },
                  {
                    index: 20,
                    name: "InvalidInput",
                  },
                  {
                    index: 21,
                    name: "BetNotExist",
                  },
                  {
                    index: 22,
                    name: "HoldAmountPlayerNotExist",
                  },
                  {
                    index: 23,
                    name: "NoAmount",
                  },
                  {
                    index: 24,
                    name: "InvalidBalanceAndAllowance",
                  },
                  {
                    index: 25,
                    name: "InvalidUnstakedAmount",
                  },
                  {
                    index: 26,
                    name: "NotTimeToUnstaked",
                  },
                  {
                    index: 27,
                    name: "NoStakerFound",
                  },
                  {
                    index: 28,
                    name: "NotStaked",
                  },
                  {
                    index: 29,
                    name: "InvalidTotalStake",
                  },
                  {
                    index: 30,
                    name: "CallerNotRequestUnstake",
                  },
                  {
                    index: 31,
                    name: "ClaimMustBeFalse",
                  },
                  {
                    index: 32,
                    name: "RewardStarted",
                  },
                  {
                    index: 33,
                    name: "RewardNotStarted",
                  },
                  {
                    index: 34,
                    name: "InvalidInputRatio",
                  },
                  {
                    index: 35,
                    name: "NotTimeBuyToken",
                  },
                  {
                    index: 36,
                    name: "CannotBuyAtThisTime",
                  },
                  {
                    index: 37,
                    name: "NotTimeToFinalize",
                  },
                  {
                    index: 38,
                    name: "WhitelistNotExists",
                  },
                  {
                    index: 39,
                    name: "PoolNotExists",
                  },
                  {
                    index: 40,
                    name: "InvalidWhitelistData",
                  },
                  {
                    index: 41,
                    name: "WhitelistInfoExist",
                  },
                  {
                    index: 42,
                    name: "WhitelistBuyerPurchased",
                  },
                  {
                    index: 43,
                    name: "SalePoolPrurchased",
                  },
                  {
                    index: 44,
                    name: "PoolPrurchased",
                  },
                  {
                    index: 45,
                    name: "InvalidEndTime",
                  },
                  {
                    index: 46,
                    name: "NotTokenOwner",
                  },
                  {
                    index: 47,
                    name: "CannotIncreaseLastTokenId",
                  },
                  {
                    index: 48,
                    name: "CannotSetAttributes",
                  },
                  {
                    index: 49,
                    name: "SessionNotExists",
                  },
                  {
                    index: 50,
                    name: "SessionIsExists",
                  },
                  {
                    index: 51,
                    name: "BetIsExists",
                  },
                  {
                    index: 52,
                    name: "SessionNotCompleted",
                  },
                  {
                    index: 53,
                    name: "SessionNotFinished",
                  },
                  {
                    index: 54,
                    name: "SessionNotProcessed",
                  },
                  {
                    index: 55,
                    name: "YouAreNotWinner",
                  },
                  {
                    index: 56,
                    name: "InvalidState",
                  },
                  {
                    index: 57,
                    name: "SessionNotTicketWin",
                  },
                  {
                    index: 58,
                    name: "NftIsUsed",
                  },
                  {
                    index: 59,
                    name: "NftIsNotUsed",
                  },
                  {
                    index: 60,
                    name: "CannotBurn",
                  },
                  {
                    index: 61,
                    name: "NextSessionsNotExists",
                  },
                  {
                    index: 62,
                    name: "AddSessionFailed",
                  },
                  {
                    index: 63,
                    name: "InvalidFee",
                  },
                  {
                    index: 64,
                    name: "PoolIsExists",
                  },
                  {
                    index: 65,
                    name: "InvalidTotalPurchasedAmount",
                  },
                  {
                    index: 66,
                    name: "TicketAmountLimitReached",
                  },
                  {
                    index: 67,
                    name: "NotTimeToFinalized",
                  },
                  {
                    index: 68,
                    name: "CallerDoNotHaveVoting",
                  },
                  {
                    index: 69,
                    name: "SetPoolRationFailed",
                  },
                  {
                    index: 70,
                    name: "FailToDecreaseClaimableReward",
                  },
                  {
                    index: 71,
                    name: "RewardNotAdded",
                  },
                  {
                    index: 72,
                    name: "ChainlinkRequestIdIsExists",
                  },
                  {
                    index: 73,
                    name: "CannotUpdateSession",
                  },
                  {
                    fields: [
                      {
                        type: 16,
                        typeName: "OwnableError",
                      },
                    ],
                    index: 74,
                    name: "OwnableError",
                  },
                  {
                    fields: [
                      {
                        type: 17,
                        typeName: "AccessControlError",
                      },
                    ],
                    index: 75,
                    name: "AccessControlError",
                  },
                  {
                    fields: [
                      {
                        type: 18,
                        typeName: "PSP22Error",
                      },
                    ],
                    index: 76,
                    name: "PSP22Error",
                  },
                  {
                    fields: [
                      {
                        type: 20,
                        typeName: "PSP34Error",
                      },
                    ],
                    index: 77,
                    name: "PSP34Error",
                  },
                  {
                    fields: [
                      {
                        type: 21,
                        typeName: "PausableError",
                      },
                    ],
                    index: 78,
                    name: "PausableError",
                  },
                  {
                    index: 79,
                    name: "CheckedOperations",
                  },
                ],
              },
            },
            path: ["bet_a0", "traits", "error", "Error"],
          },
        },
        {
          id: 16,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    index: 0,
                    name: "CallerIsNotOwner",
                  },
                  {
                    index: 1,
                    name: "NewOwnerIsNotSet",
                  },
                ],
              },
            },
            path: [
              "openbrush_contracts",
              "traits",
              "errors",
              "ownable",
              "OwnableError",
            ],
          },
        },
        {
          id: 17,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    index: 0,
                    name: "InvalidCaller",
                  },
                  {
                    index: 1,
                    name: "MissingRole",
                  },
                  {
                    index: 2,
                    name: "RoleRedundant",
                  },
                ],
              },
            },
            path: [
              "openbrush_contracts",
              "traits",
              "errors",
              "access_control",
              "AccessControlError",
            ],
          },
        },
        {
          id: 18,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 10,
                        typeName: "String",
                      },
                    ],
                    index: 0,
                    name: "Custom",
                  },
                  {
                    index: 1,
                    name: "InsufficientBalance",
                  },
                  {
                    index: 2,
                    name: "InsufficientAllowance",
                  },
                  {
                    index: 3,
                    name: "RecipientIsNotSet",
                  },
                  {
                    index: 4,
                    name: "SenderIsNotSet",
                  },
                  {
                    fields: [
                      {
                        type: 10,
                        typeName: "String",
                      },
                    ],
                    index: 5,
                    name: "SafeTransferCheckFailed",
                  },
                  {
                    index: 6,
                    name: "PermitInvalidSignature",
                  },
                  {
                    index: 7,
                    name: "PermitExpired",
                  },
                  {
                    fields: [
                      {
                        type: 19,
                        typeName: "NoncesError",
                      },
                    ],
                    index: 8,
                    name: "NoncesError",
                  },
                ],
              },
            },
            path: [
              "openbrush_contracts",
              "traits",
              "errors",
              "psp22",
              "PSP22Error",
            ],
          },
        },
        {
          id: 19,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 0,
                        typeName: "AccountId",
                      },
                      {
                        type: 7,
                        typeName: "u64",
                      },
                    ],
                    index: 0,
                    name: "InvalidAccountNonce",
                  },
                  {
                    index: 1,
                    name: "NonceOverflow",
                  },
                ],
              },
            },
            path: [
              "openbrush_contracts",
              "traits",
              "errors",
              "nonces",
              "NoncesError",
            ],
          },
        },
        {
          id: 20,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 10,
                        typeName: "String",
                      },
                    ],
                    index: 0,
                    name: "Custom",
                  },
                  {
                    index: 1,
                    name: "SelfApprove",
                  },
                  {
                    index: 2,
                    name: "NotApproved",
                  },
                  {
                    index: 3,
                    name: "TokenExists",
                  },
                  {
                    index: 4,
                    name: "TokenNotExists",
                  },
                  {
                    fields: [
                      {
                        type: 10,
                        typeName: "String",
                      },
                    ],
                    index: 5,
                    name: "SafeTransferCheckFailed",
                  },
                ],
              },
            },
            path: [
              "openbrush_contracts",
              "traits",
              "errors",
              "psp34",
              "PSP34Error",
            ],
          },
        },
        {
          id: 21,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    index: 0,
                    name: "Paused",
                  },
                  {
                    index: 1,
                    name: "NotPaused",
                  },
                ],
              },
            },
            path: [
              "openbrush_contracts",
              "traits",
              "errors",
              "pausable",
              "PausableError",
            ],
          },
        },
        {
          id: 22,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    index: 0,
                    name: "Processing",
                  },
                  {
                    index: 1,
                    name: "Finalized",
                  },
                  {
                    index: 2,
                    name: "Completed",
                  },
                ],
              },
            },
            path: ["bet_a0", "impls", "pandora", "data", "SessionsStatusType"],
          },
        },
        {
          id: 23,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 24,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 24,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 24,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    index: 0,
                    name: "None",
                  },
                  {
                    fields: [
                      {
                        type: 25,
                      },
                    ],
                    index: 1,
                    name: "Some",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 25,
              },
            ],
            path: ["Option"],
          },
        },
        {
          id: 25,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 2,
                        typeName: "u8",
                      },
                    ],
                    index: 0,
                    name: "U8",
                  },
                  {
                    fields: [
                      {
                        type: 6,
                        typeName: "u16",
                      },
                    ],
                    index: 1,
                    name: "U16",
                  },
                  {
                    fields: [
                      {
                        type: 4,
                        typeName: "u32",
                      },
                    ],
                    index: 2,
                    name: "U32",
                  },
                  {
                    fields: [
                      {
                        type: 7,
                        typeName: "u64",
                      },
                    ],
                    index: 3,
                    name: "U64",
                  },
                  {
                    fields: [
                      {
                        type: 8,
                        typeName: "u128",
                      },
                    ],
                    index: 4,
                    name: "U128",
                  },
                  {
                    fields: [
                      {
                        type: 9,
                        typeName: "Vec<u8>",
                      },
                    ],
                    index: 5,
                    name: "Bytes",
                  },
                ],
              },
            },
            path: ["openbrush_contracts", "traits", "types", "Id"],
          },
        },
        {
          id: 26,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 27,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 27,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 27,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    index: 0,
                    name: "None",
                  },
                  {
                    fields: [
                      {
                        type: 10,
                      },
                    ],
                    index: 1,
                    name: "Some",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 10,
              },
            ],
            path: ["Option"],
          },
        },
        {
          id: 28,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 0,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 0,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 29,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 30,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 30,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 30,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    index: 0,
                    name: "None",
                  },
                  {
                    fields: [
                      {
                        type: 8,
                      },
                    ],
                    index: 1,
                    name: "Some",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 8,
              },
            ],
            path: ["Option"],
          },
        },
        {
          id: 31,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 8,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 8,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 32,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 7,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 7,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 33,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 4,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 4,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 34,
          type: {
            def: {
              sequence: {
                type: 25,
              },
            },
          },
        },
        {
          id: 35,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 36,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 36,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 36,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    index: 0,
                    name: "None",
                  },
                  {
                    fields: [
                      {
                        type: 0,
                      },
                    ],
                    index: 1,
                    name: "Some",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 0,
              },
            ],
            path: ["Option"],
          },
        },
        {
          id: 37,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 38,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 38,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 38,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    index: 0,
                    name: "None",
                  },
                  {
                    fields: [
                      {
                        type: 39,
                      },
                    ],
                    index: 1,
                    name: "Some",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 39,
              },
            ],
            path: ["Option"],
          },
        },
        {
          id: 39,
          type: {
            def: {
              composite: {
                fields: [
                  {
                    name: "session_id",
                    type: 4,
                    typeName: "u32",
                  },
                  {
                    name: "bet_number",
                    type: 4,
                    typeName: "u32",
                  },
                  {
                    name: "time",
                    type: 7,
                    typeName: "Timestamp",
                  },
                  {
                    name: "used",
                    type: 3,
                    typeName: "bool",
                  },
                ],
              },
            },
            path: ["bet_a0", "impls", "pandora", "data", "NFTInfomation"],
          },
        },
        {
          id: 40,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 3,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 3,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 41,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 42,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 42,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 42,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    index: 0,
                    name: "None",
                  },
                  {
                    fields: [
                      {
                        type: 43,
                      },
                    ],
                    index: 1,
                    name: "Some",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 43,
              },
            ],
            path: ["Option"],
          },
        },
        {
          id: 43,
          type: {
            def: {
              composite: {
                fields: [
                  {
                    name: "random_number",
                    type: 4,
                    typeName: "u32",
                  },
                  {
                    name: "status",
                    type: 22,
                    typeName: "SessionsStatusType",
                  },
                ],
              },
            },
            path: ["bet_a0", "impls", "pandora", "data", "SessionInfo"],
          },
        },
        {
          id: 44,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 45,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 45,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 45,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 5,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 16,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 5,
              },
              {
                name: "E",
                type: 16,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 46,
          type: {
            def: {
              composite: {
                fields: [
                  {
                    type: 1,
                    typeName: "[u8; 32]",
                  },
                ],
              },
            },
            path: ["ink_primitives", "types", "Hash"],
          },
        },
        {
          id: 47,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 48,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 48,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 48,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 5,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 49,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 5,
              },
              {
                name: "E",
                type: 49,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 49,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 10,
                        typeName: "String",
                      },
                    ],
                    index: 0,
                    name: "Custom",
                  },
                  {
                    index: 1,
                    name: "SetCodeHashFailed",
                  },
                  {
                    fields: [
                      {
                        type: 16,
                        typeName: "OwnableError",
                      },
                    ],
                    index: 2,
                    name: "OwnableError",
                  },
                  {
                    fields: [
                      {
                        type: 17,
                        typeName: "AccessControlError",
                      },
                    ],
                    index: 3,
                    name: "AccessControlError",
                  },
                ],
              },
            },
            path: [
              "openbrush_contracts",
              "traits",
              "errors",
              "upgradeable",
              "UpgradeableError",
            ],
          },
        },
        {
          id: 50,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 51,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 51,
              },
              {
                name: "E",
                type: 12,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 51,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 5,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 17,
                      },
                    ],
                    index: 1,
                    name: "Err",
                  },
                ],
              },
            },
            params: [
              {
                name: "T",
                type: 5,
              },
              {
                name: "E",
                type: 17,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 52,
          type: {
            def: {
              variant: {},
            },
            path: ["ink_env", "types", "NoChainExtension"],
          },
        },
      ],
      version: "4",
    },
  },
};

module.exports = {
  pandora_contract: contract[process.env.NODE_ENV],
};
