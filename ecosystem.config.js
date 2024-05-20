module.exports = {
    apps: [
      {
        name: 'main-app',
        script: './app.js'
      },
      {
        name: 'main-scan-player-events',
        script: './src/crons/a0bet_events_collector.js'
      },
      {
        name: 'main-scan-staking-events',
        script: './src/crons/betaz_staking_events_collector.js'
      },
      {
        name: 'main-scan-pandora-events',
        script: './src/crons/betaz_pandora_events_collector.js'
      },
      {
        name: 'main-scan-all-nft',
        script: './src/crons/betaz_nft_scan_all_cronjob.js'
      },
      {
        name: 'main-scan-pandora-queue',
        script: './src/crons/betaz_pandora_your_bet_history_queue_scan_cronjob.js'
      },
      {
        name: 'main-pandora-find-winner',
        script: './src/crons/betaz_pandora_flow_cronjob.js'
      },
    ]
  };
  