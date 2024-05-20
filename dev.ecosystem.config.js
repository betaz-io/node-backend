module.exports = {
    apps: [
      {
        name: 'dev-app',
        script: './app.js'
      },
      {
        name: 'dev-scan-player-events',
        script: './src/crons/a0bet_events_collector.js'
      },
      {
        name: 'dev-scan-staking-events',
        script: './src/crons/betaz_staking_events_collector.js'
      },
      {
        name: 'dev-scan-pandora-events',
        script: './src/crons/betaz_pandora_events_collector.js'
      },
      {
        name: 'dev-scan-all-nft',
        script: './src/crons/betaz_nft_scan_all_cronjob.js'
      },
      {
        name: 'dev-scan-pandora-queue',
        script: './src/crons/betaz_pandora_your_bet_history_queue_scan_cronjob.js'
      },
      {
        name: 'dev-pandora-find-winner',
        script: './src/crons/betaz_pandora_flow_cronjob.js'
      },
    ]
  };
  