module.exports = {
    apps: [
      {
        name: 'testnet-app',
        script: './app.js'
      },
      {
        name: 'testnet-scan-player-events',
        script: './src/crons/a0bet_events_collector.js'
      },
      {
        name: 'testnet-scan-staking-events',
        script: './src/crons/betaz_staking_events_collector.js'
      },
      {
        name: 'testnet-scan-pandora-events',
        script: './src/crons/betaz_pandora_events_collector.js'
      },
      {
        name: 'testnet-scan-all-nft',
        script: './src/crons/betaz_nft_scan_all_cronjob.js'
      },
      {
        name: 'testnet-scan-pandora-queue',
        script: './src/crons/betaz_pandora_your_bet_history_queue_scan_cronjob.js'
      },
      {
        name: 'testnet-pandora-find-winner',
        script: './src/crons/betaz_pandora_flow_cronjob.js'
      },
    ]
  };
  