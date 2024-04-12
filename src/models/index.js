const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.email = require("./email.model");
db.scannedBlocks = require("./scannedBlocks.model");
db.winEvent = require("./winEvent.model");
db.loseEvent = require("./loseEvent.model");
db.claimEvent = require("./claimEvent.model");
db.stakeManager = require("./stakeManager.model");
db.historyStaking = require("./historyStaking.model");
db.whitelistManager = require("./whitelistManager.model");
db.corePoolManager = require("./corePoolManager.model");
db.stakingPoolManager = require("./stakingPoolManager.model");
db.pandoraPoolManager = require("./pandoraPoolManager.model");
db.treasuryPoolManager = require("./treasuryPoolManager.model");
db.rewardPoolManager = require("./rewardPoolManager.model");
db.platformFeeManager = require("./platformFeeManager.model");

module.exports = db;
