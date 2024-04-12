require("dotenv").config();

const contract = {
  testnet: {
    CONTRACT_ADDRESS: "5F4ntPqU21hZ5qFwP96s8NABfsaYCpit81ZMYU4AXVp8rfd7",
    CONTRACT_ABI: {
      source: {
        hash: "0xdb0746a0efc4edc5887c64b00fa9beb25269961111b1f398be65970719e88a2c",
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
        name: "beta0_core",
        version: "1.0.0",
        authors: ["bet_a0 <admin@betA0.net>"],
      },
      spec: {
        constructors: [
          {
            args: [
              {
                label: "max_bet_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "token_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "min_over_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "max_over_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "min_under_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "max_under_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "core_pool_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "staking_pool_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "treasury_pool_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "pandora_pool_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "admin_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "betaz_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "bet_token_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "staking_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "treasury_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "pandora_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "oracle_randomness_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "dao_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [],
            label: "new",
            payable: false,
            returnType: {
              displayName: ["ink_primitives", "ConstructorResult"],
              type: 9,
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
            type: 7,
          },
          blockNumber: {
            displayName: ["BlockNumber"],
            type: 4,
          },
          chainExtension: {
            displayName: ["ChainExtension"],
            type: 44,
          },
          hash: {
            displayName: ["Hash"],
            type: 38,
          },
          maxEventTopics: 4,
          timestamp: {
            displayName: ["Timestamp"],
            type: 8,
          },
        },
        events: [
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "player",
                type: {
                  displayName: ["Option"],
                  type: 32,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "is_over",
                type: {
                  displayName: ["u8"],
                  type: 2,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "random_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
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
              {
                docs: [],
                indexed: false,
                label: "bet_amount",
                type: {
                  displayName: ["Balance"],
                  type: 7,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "win_amount",
                type: {
                  displayName: ["Balance"],
                  type: 7,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "reward_amount",
                type: {
                  displayName: ["Balance"],
                  type: 7,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "oracle_round",
                type: {
                  displayName: ["u64"],
                  type: 8,
                },
              },
            ],
            docs: [],
            label: "WinEvent",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "player",
                type: {
                  displayName: ["Option"],
                  type: 32,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "is_over",
                type: {
                  displayName: ["u8"],
                  type: 2,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "random_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
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
              {
                docs: [],
                indexed: false,
                label: "bet_amount",
                type: {
                  displayName: ["Balance"],
                  type: 7,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "reward_amount",
                type: {
                  displayName: ["Balance"],
                  type: 7,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "oracle_round",
                type: {
                  displayName: ["u64"],
                  type: 8,
                },
              },
            ],
            docs: [],
            label: "LoseEvent",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "player",
                type: {
                  displayName: ["Option"],
                  type: 32,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "is_over",
                type: {
                  displayName: ["u8"],
                  type: 2,
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
              {
                docs: [],
                indexed: false,
                label: "bet_amount",
                type: {
                  displayName: ["Balance"],
                  type: 7,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "oracle_round",
                type: {
                  displayName: ["u64"],
                  type: 8,
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
                label: "staking_pool_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "amount",
                type: {
                  displayName: ["Balance"],
                  type: 7,
                },
              },
            ],
            docs: [],
            label: "TransferStakingPoolEvent",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "pandora_pool_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "amount",
                type: {
                  displayName: ["Balance"],
                  type: 7,
                },
              },
            ],
            docs: [],
            label: "TransferPandoraPoolEvent",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "treasury_pool_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "amount",
                type: {
                  displayName: ["Balance"],
                  type: 7,
                },
              },
            ],
            docs: [],
            label: "TransferTreasuryPoolEvent",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "contract_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "amount",
                type: {
                  displayName: ["Balance"],
                  type: 7,
                },
              },
            ],
            docs: [],
            label: "MintTokenEvent",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "contract_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "caller",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "from",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "to",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "amount",
                type: {
                  displayName: ["Balance"],
                  type: 7,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "time_stamp",
                type: {
                  displayName: ["Timestamp"],
                  type: 8,
                },
              },
            ],
            docs: [],
            label: "UpdateCorePoolAmount",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "contract_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "caller",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "from",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "to",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "amount",
                type: {
                  displayName: ["Balance"],
                  type: 7,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "time_stamp",
                type: {
                  displayName: ["Timestamp"],
                  type: 8,
                },
              },
            ],
            docs: [],
            label: "UpdateRewardPoolAmount",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "contract_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "caller",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "from",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "to",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "amount",
                type: {
                  displayName: ["Balance"],
                  type: 7,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "time_stamp",
                type: {
                  displayName: ["Timestamp"],
                  type: 8,
                },
              },
            ],
            docs: [],
            label: "UpdatePandoraPoolAmount",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "contract_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "caller",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "from",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "to",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "amount",
                type: {
                  displayName: ["Balance"],
                  type: 7,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "time_stamp",
                type: {
                  displayName: ["Timestamp"],
                  type: 8,
                },
              },
            ],
            docs: [],
            label: "UpdateTreasuryPoolAmount",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "contract_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "caller",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "from",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "to",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "amount",
                type: {
                  displayName: ["Balance"],
                  type: 7,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "time_stamp",
                type: {
                  displayName: ["Timestamp"],
                  type: 8,
                },
              },
            ],
            docs: [],
            label: "UpdateStakingPoolAmount",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "contract_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "caller",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "from",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "to",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "amount",
                type: {
                  displayName: ["Balance"],
                  type: 7,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "time_stamp",
                type: {
                  displayName: ["Timestamp"],
                  type: 8,
                },
              },
            ],
            docs: [],
            label: "UpdatePlatformFeeAmount",
          },
        ],
        lang_error: {
          displayName: ["ink", "LangError"],
          type: 10,
        },
        messages: [
          {
            args: [
              {
                label: "max_bet_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "token_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "min_over_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "max_over_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "min_under_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "max_under_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "core_pool_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "staking_pool_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "treasury_pool_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "pandora_pool_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "admin_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "betaz_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "bet_token_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "staking_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "treasury_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "pandora_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "oracle_randomness_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "dao_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
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
              type: 11,
            },
            selector: "0xf2f6dba3",
          },
          {
            args: [
              {
                label: "bet_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "is_over",
                type: {
                  displayName: ["u8"],
                  type: 2,
                },
              },
            ],
            default: false,
            docs: [" Play"],
            label: "play",
            mutates: true,
            payable: true,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x9963949f",
          },
          {
            args: [],
            default: false,
            docs: [" Finalize Bet"],
            label: "finalize",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 21,
            },
            selector: "0x40656e2b",
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
            ],
            default: false,
            docs: [],
            label: "transfer_and_update_session_pandora_pool",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0xa7d7d970",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "transfer_and_update_staking_pool",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0xb53b2fba",
          },
          {
            args: [
              {
                label: "core_pool_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "staking_pool_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "pandora_pool_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "treasury_pool_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [" Set core pool ratio"],
            label: "set_pool_ratio",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x6275596c",
          },
          {
            args: [
              {
                label: "max_over_number",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetMaxNumberOverRollInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [" Set max number over roll"],
            label: "BetA0CoreTrait::set_max_number_over_roll",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x9943f4b5",
          },
          {
            args: [],
            default: false,
            docs: [" Get token ratio"],
            label: "BetA0CoreTrait::get_token_ratio",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0x5bf4a937",
          },
          {
            args: [
              {
                label: "address",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "GetHoldAmountPlayersInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [" Get hold amount players"],
            label: "BetA0CoreTrait::get_hold_amount_players",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 24,
            },
            selector: "0xcbf00dde",
          },
          {
            args: [],
            default: false,
            docs: [" get max number over roll"],
            label: "BetA0CoreTrait::get_max_number_over_roll",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0x78687252",
          },
          {
            args: [],
            default: false,
            docs: [" Get oracle randomness address"],
            label: "BetA0CoreTrait::get_oracle_randomness_address",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 26,
            },
            selector: "0x8992db8c",
          },
          {
            args: [],
            default: false,
            docs: [" Get treasury pool address"],
            label: "BetA0CoreTrait::get_pandora_address",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 26,
            },
            selector: "0x5a5cbc72",
          },
          {
            args: [],
            default: false,
            docs: [" Get reward pool amount"],
            label: "BetA0CoreTrait::get_reward_pool_amount",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 27,
            },
            selector: "0xfbba99aa",
          },
          {
            args: [
              {
                label: "player",
                type: {
                  displayName: ["beta0coretrait_external", "GetBetInput1"],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [" get bet"],
            label: "BetA0CoreTrait::get_bet",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 28,
            },
            selector: "0x0dc968b3",
          },
          {
            args: [
              {
                label: "over_rates",
                type: {
                  displayName: ["beta0coretrait_external", "SetRatesInput1"],
                  type: 6,
                },
              },
              {
                label: "under_rates",
                type: {
                  displayName: ["beta0coretrait_external", "SetRatesInput2"],
                  type: 6,
                },
              },
            ],
            default: false,
            docs: [
              " Set over_rates and discount rate - Only Owner 2 vectors same size",
            ],
            label: "BetA0CoreTrait::set_rates",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x62500603",
          },
          {
            args: [],
            default: false,
            docs: [" Get staking pool amount"],
            label: "BetA0CoreTrait::get_staking_pool_amount",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 27,
            },
            selector: "0x641fd73d",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "BetA0CoreTrait::transfer_treasury_pool",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x19001c7a",
          },
          {
            args: [
              {
                label: "token_ratio",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetTokenRatioInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [" Set new token ratio"],
            label: "BetA0CoreTrait::set_token_ratio",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x2979f379",
          },
          {
            args: [
              {
                label: "index",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "GetHoldPlayersByIndexInput1",
                  ],
                  type: 8,
                },
              },
            ],
            default: false,
            docs: [" Get hold players by index"],
            label: "BetA0CoreTrait::get_hold_players_by_index",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 31,
            },
            selector: "0x65781383",
          },
          {
            args: [],
            default: false,
            docs: [" Get treasury pool address"],
            label: "BetA0CoreTrait::get_treasury_address",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 26,
            },
            selector: "0x0f6874b2",
          },
          {
            args: [],
            default: false,
            docs: [" Get dao contract address"],
            label: "BetA0CoreTrait::get_dao_address",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 26,
            },
            selector: "0x05d64828",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "BetA0CoreTrait::transfer_staking_pool",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0xda4c83bb",
          },
          {
            args: [
              {
                label: "min_under_number",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetMinNumberUnderRollInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [" Set min number under roll"],
            label: "BetA0CoreTrait::set_min_number_under_roll",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0xfbed57ce",
          },
          {
            args: [],
            default: false,
            docs: [" get min number under roll"],
            label: "BetA0CoreTrait::get_min_number_under_roll",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0xa6185fcb",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: ["beta0coretrait_external", "WithdrawFeeInput1"],
                  type: 0,
                },
              },
              {
                label: "value",
                type: {
                  displayName: ["beta0coretrait_external", "WithdrawFeeInput2"],
                  type: 7,
                },
              },
            ],
            default: false,
            docs: [" Withdraw Fees - only Owner"],
            label: "BetA0CoreTrait::withdraw_fee",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0xb1aed1dc",
          },
          {
            args: [],
            default: false,
            docs: [" Get Under Rates"],
            label: "BetA0CoreTrait::get_under_rates",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 33,
            },
            selector: "0x657dfccb",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "BetA0CoreTrait::get_max_bet",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 27,
            },
            selector: "0x93aa56df",
          },
          {
            args: [],
            default: false,
            docs: [" Update core pool - only owner and admin"],
            label: "BetA0CoreTrait::update_core_pool",
            mutates: true,
            payable: true,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0xf9dc2460",
          },
          {
            args: [
              {
                label: "max_under_number",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetMaxNumberUnderRollInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [" Set max number under roll"],
            label: "BetA0CoreTrait::set_max_number_under_roll",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0xe3879fee",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetBetazAddressInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [" set betaz address"],
            label: "BetA0CoreTrait::set_betaz_address",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0xa4de4df4",
          },
          {
            args: [
              {
                label: "address",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetPandoraAddressInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [" Set pandora pool address"],
            label: "BetA0CoreTrait::set_pandora_address",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x36e66f21",
          },
          {
            args: [],
            default: false,
            docs: [" Get platform fee amount"],
            label: "BetA0CoreTrait::get_platform_fee_amount",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 27,
            },
            selector: "0x6d9d6d05",
          },
          {
            args: [
              {
                label: "round_distance",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetRoundDistanceInput1",
                  ],
                  type: 8,
                },
              },
            ],
            default: false,
            docs: [" Set limit round"],
            label: "BetA0CoreTrait::set_round_distance",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0xbc39f9ba",
          },
          {
            args: [],
            default: false,
            docs: [" Get core pool amout"],
            label: "BetA0CoreTrait::get_core_pool_amout",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 27,
            },
            selector: "0x35014602",
          },
          {
            args: [],
            default: false,
            docs: [" Get Max Bet"],
            label: "BetA0CoreTrait::get_max_bet_ratio",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0xb18a8f89",
          },
          {
            args: [
              {
                label: "amount",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "UpdateRewardPoolInput1",
                  ],
                  type: 7,
                },
              },
            ],
            default: false,
            docs: [],
            label: "BetA0CoreTrait::update_reward_pool",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x60638993",
          },
          {
            args: [],
            default: false,
            docs: [" Get limit round"],
            label: "BetA0CoreTrait::get_round_distance",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 34,
            },
            selector: "0x8251da9c",
          },
          {
            args: [],
            default: false,
            docs: [" Get treasury pool ratio"],
            label: "BetA0CoreTrait::get_treasury_pool_ratio",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0x91e985a3",
          },
          {
            args: [],
            default: false,
            docs: [" get min number over roll"],
            label: "BetA0CoreTrait::get_min_number_over_roll",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0xfc8a4a50",
          },
          {
            args: [],
            default: false,
            docs: [" Get staking pool address"],
            label: "BetA0CoreTrait::get_staking_address",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 26,
            },
            selector: "0x566725c2",
          },
          {
            args: [
              {
                label: "percentage_rates",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetPercentageRatesInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [" set percentage_rates"],
            label: "BetA0CoreTrait::set_percentage_rates",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x10e71e23",
          },
          {
            args: [],
            default: false,
            docs: [" get betaz address"],
            label: "BetA0CoreTrait::get_betaz_address",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 26,
            },
            selector: "0x295d7d0f",
          },
          {
            args: [],
            default: false,
            docs: [" get max number under roll"],
            label: "BetA0CoreTrait::get_max_number_under_roll",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0x9f571242",
          },
          {
            args: [],
            default: false,
            docs: [" get percentage_rates"],
            label: "BetA0CoreTrait::get_percentage_rates",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0x3ab284da",
          },
          {
            args: [],
            default: false,
            docs: [" Function changes state"],
            label: "BetA0CoreTrait::change_state",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x305a2c7c",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "BetA0CoreTrait::transfer_pandora_pool",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0xe6927403",
          },
          {
            args: [
              {
                label: "bet_token_address",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetBetTokenAddressInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [" Set new psp22 address"],
            label: "BetA0CoreTrait::set_bet_token_address",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x7b887113",
          },
          {
            args: [],
            default: false,
            docs: [" Get Over Rates"],
            label: "BetA0CoreTrait::get_over_rates",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 33,
            },
            selector: "0x0712d707",
          },
          {
            args: [
              {
                label: "max_bet_ratio",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetMaxBetRatioInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [" Set max bet ratio"],
            label: "BetA0CoreTrait::set_max_bet_ratio",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x5bc9734b",
          },
          {
            args: [
              {
                label: "receiver",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "WithdrawHoldAmountInput1",
                  ],
                  type: 0,
                },
              },
              {
                label: "amount",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "WithdrawHoldAmountInput2",
                  ],
                  type: 7,
                },
              },
            ],
            default: false,
            docs: [" Withdraw hold amount"],
            label: "BetA0CoreTrait::withdraw_hold_amount",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x167480ff",
          },
          {
            args: [
              {
                label: "min_over_number",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetMinNumberOverRollInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [" Set min number over roll"],
            label: "BetA0CoreTrait::set_min_number_over_roll",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x49094f28",
          },
          {
            args: [],
            default: false,
            docs: [" get contract token balance"],
            label: "BetA0CoreTrait::get_token_balance",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 27,
            },
            selector: "0x9ed23743",
          },
          {
            args: [
              {
                label: "player",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "IsBetAvailableInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [" Is bet exist"],
            label: "BetA0CoreTrait::is_bet_available",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 35,
            },
            selector: "0xd36f536e",
          },
          {
            args: [],
            default: false,
            docs: [" Get core pool ratio"],
            label: "BetA0CoreTrait::get_core_pool_ratio",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0xff43351c",
          },
          {
            args: [],
            default: false,
            docs: [" Get pandora pool ratio"],
            label: "BetA0CoreTrait::get_pandora_pool_ratio",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0x8c3560d0",
          },
          {
            args: [
              {
                label: "address",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetStakingAddressInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [" Set staking pool address"],
            label: "BetA0CoreTrait::set_staking_address",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0xcf79cb2a",
          },
          {
            args: [],
            default: false,
            docs: [" Get staking pool ratio"],
            label: "BetA0CoreTrait::get_staking_pool_ratio",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0xe84e0c62",
          },
          {
            args: [
              {
                label: "address",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetOracleRandomnessAddressInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [" Set oracle randomness address"],
            label: "BetA0CoreTrait::set_oracle_randomness_address",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0xcce4b453",
          },
          {
            args: [
              {
                label: "address",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetTreasuryAddressInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [" Set treasury pool address"],
            label: "BetA0CoreTrait::set_treasury_address",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0xbdb879fd",
          },
          {
            args: [],
            default: false,
            docs: [" Get treasury pool amount"],
            label: "BetA0CoreTrait::get_treasury_pool_amount",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 27,
            },
            selector: "0xf9424e8e",
          },
          {
            args: [],
            default: false,
            docs: [" Get psp22 address"],
            label: "BetA0CoreTrait::bet_token_address",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 26,
            },
            selector: "0x45b373ac",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "WithdrawRewardPoolInput1",
                  ],
                  type: 0,
                },
              },
              {
                label: "amount",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "WithdrawRewardPoolInput2",
                  ],
                  type: 7,
                },
              },
            ],
            default: false,
            docs: [],
            label: "BetA0CoreTrait::withdraw_reward_pool",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x700171be",
          },
          {
            args: [
              {
                label: "address",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetDaoAddressInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [" Set dao contract address"],
            label: "BetA0CoreTrait::set_dao_address",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x464e64b8",
          },
          {
            args: [],
            default: false,
            docs: [" Get Hold Player Count"],
            label: "BetA0CoreTrait::get_hold_player_count",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 34,
            },
            selector: "0xda510802",
          },
          {
            args: [],
            default: false,
            docs: [" Get pandora pool amount"],
            label: "BetA0CoreTrait::get_pandora_pool_amount",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 27,
            },
            selector: "0x27fb539f",
          },
          {
            args: [
              {
                label: "new_owner",
                type: {
                  displayName: ["ownable_external", "TransferOwnershipInput1"],
                  type: 32,
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
              type: 36,
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
              type: 36,
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
              type: 31,
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
              type: 35,
            },
            selector: "0xd123ce11",
          },
          {
            args: [
              {
                label: "new_code_hash",
                type: {
                  displayName: ["upgradeable_external", "SetCodeHashInput1"],
                  type: 38,
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
              type: 39,
            },
            selector: "0x1700ae80",
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
                  type: 32,
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
              type: 35,
            },
            selector: "0xc1d9ac18",
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
              type: 23,
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
                  type: 32,
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
              type: 42,
            },
            selector: "0x4ac062fd",
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
                  type: 32,
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
              type: 42,
            },
            selector: "0xeaf1248a",
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
                  type: 32,
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
              type: 42,
            },
            selector: "0x6e4f0991",
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
              type: 23,
            },
            selector: "0xf1b1a9d7",
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
              type: 31,
            },
            selector: "0x163469e0",
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
                            leaf: {
                              key: "0x00000000",
                              ty: 0,
                            },
                          },
                          name: "betaz_address",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 6,
                            },
                          },
                          name: "over_rates",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 6,
                            },
                          },
                          name: "under_rates",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 4,
                            },
                          },
                          name: "percentage_rates",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 4,
                            },
                          },
                          name: "max_bet_ratio",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 0,
                            },
                          },
                          name: "bet_token_address",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 0,
                            },
                          },
                          name: "staking_address",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 0,
                            },
                          },
                          name: "treasury_address",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 0,
                            },
                          },
                          name: "pandora_pool_address",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 4,
                            },
                          },
                          name: "token_ratio",
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
                                          key: "0xf5c3fa2a",
                                          ty: 2,
                                        },
                                      },
                                      name: "is_over",
                                    },
                                    {
                                      layout: {
                                        leaf: {
                                          key: "0xf5c3fa2a",
                                          ty: 4,
                                        },
                                      },
                                      name: "bet_number",
                                    },
                                    {
                                      layout: {
                                        leaf: {
                                          key: "0xf5c3fa2a",
                                          ty: 7,
                                        },
                                      },
                                      name: "bet_amount",
                                    },
                                    {
                                      layout: {
                                        leaf: {
                                          key: "0xf5c3fa2a",
                                          ty: 8,
                                        },
                                      },
                                      name: "oracle_round",
                                    },
                                  ],
                                  name: "BetInformation",
                                },
                              },
                              root_key: "0xf5c3fa2a",
                            },
                          },
                          name: "bets",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 4,
                            },
                          },
                          name: "min_over_number",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 4,
                            },
                          },
                          name: "max_over_number",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 4,
                            },
                          },
                          name: "min_under_number",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 4,
                            },
                          },
                          name: "max_under_number",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x81d019cc",
                                  ty: 7,
                                },
                              },
                              root_key: "0x81d019cc",
                            },
                          },
                          name: "hold_amount_players",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x03bea4fa",
                                  ty: 0,
                                },
                              },
                              root_key: "0x03bea4fa",
                            },
                          },
                          name: "hold_players",
                        },
                        {
                          layout: {
                            struct: {
                              fields: [
                                {
                                  layout: {
                                    leaf: {
                                      key: "0x00000000",
                                      ty: 4,
                                    },
                                  },
                                  name: "core_pool_ratio",
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: "0x00000000",
                                      ty: 4,
                                    },
                                  },
                                  name: "staking_pool_ratio",
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: "0x00000000",
                                      ty: 4,
                                    },
                                  },
                                  name: "treasury_pool_ratio",
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: "0x00000000",
                                      ty: 4,
                                    },
                                  },
                                  name: "pandora_pool_ratio",
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: "0x00000000",
                                      ty: 7,
                                    },
                                  },
                                  name: "core_pool_amout",
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: "0x00000000",
                                      ty: 7,
                                    },
                                  },
                                  name: "reward_pool_amount",
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: "0x00000000",
                                      ty: 7,
                                    },
                                  },
                                  name: "staking_pool_amount",
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: "0x00000000",
                                      ty: 7,
                                    },
                                  },
                                  name: "treasury_pool_amount",
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: "0x00000000",
                                      ty: 7,
                                    },
                                  },
                                  name: "pandora_pool_amount",
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: "0x00000000",
                                      ty: 7,
                                    },
                                  },
                                  name: "platform_fee_amount",
                                },
                              ],
                              name: "PoolManager",
                            },
                          },
                          name: "pool_manager",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 0,
                            },
                          },
                          name: "oracle_randomness_address",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 8,
                            },
                          },
                          name: "round_distance",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 0,
                            },
                          },
                          name: "dao_address",
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
                  name: "admin_data",
                },
              ],
              name: "BetA0CoreContract",
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
              sequence: {
                type: 4,
              },
            },
          },
        },
        {
          id: 7,
          type: {
            def: {
              primitive: "u128",
            },
          },
        },
        {
          id: 8,
          type: {
            def: {
              primitive: "u64",
            },
          },
        },
        {
          id: 9,
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
                        type: 10,
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
                type: 10,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 10,
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
          id: 11,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 10,
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
                type: 12,
              },
              {
                name: "E",
                type: 10,
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
                        type: 13,
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
                type: 13,
              },
            ],
            path: ["Result"],
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
                        type: 15,
                        typeName: "OwnableError",
                      },
                    ],
                    index: 74,
                    name: "OwnableError",
                  },
                  {
                    fields: [
                      {
                        type: 16,
                        typeName: "AccessControlError",
                      },
                    ],
                    index: 75,
                    name: "AccessControlError",
                  },
                  {
                    fields: [
                      {
                        type: 17,
                        typeName: "PSP22Error",
                      },
                    ],
                    index: 76,
                    name: "PSP22Error",
                  },
                  {
                    fields: [
                      {
                        type: 19,
                        typeName: "PSP34Error",
                      },
                    ],
                    index: 77,
                    name: "PSP34Error",
                  },
                  {
                    fields: [
                      {
                        type: 20,
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
          id: 14,
          type: {
            def: {
              primitive: "str",
            },
          },
        },
        {
          id: 15,
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
          id: 16,
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
          id: 17,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 14,
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
                        type: 14,
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
                        type: 18,
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
          id: 18,
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
                        type: 8,
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
          id: 19,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 14,
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
                        type: 14,
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
          id: 20,
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
          id: 21,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 22,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 10,
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
                type: 22,
              },
              {
                name: "E",
                type: 10,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 22,
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
                        type: 13,
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
                type: 13,
              },
            ],
            path: ["Result"],
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
                        type: 4,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 10,
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
                type: 10,
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
                    fields: [
                      {
                        type: 25,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 10,
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
                type: 25,
              },
              {
                name: "E",
                type: 10,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 25,
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
                        type: 7,
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
                type: 7,
              },
            ],
            path: ["Option"],
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
                        type: 0,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 10,
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
                type: 10,
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
                        type: 10,
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
                type: 10,
              },
            ],
            path: ["Result"],
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
                        type: 29,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 10,
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
                type: 29,
              },
              {
                name: "E",
                type: 10,
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
                    index: 0,
                    name: "None",
                  },
                  {
                    fields: [
                      {
                        type: 30,
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
                type: 30,
              },
            ],
            path: ["Option"],
          },
        },
        {
          id: 30,
          type: {
            def: {
              composite: {
                fields: [
                  {
                    name: "is_over",
                    type: 2,
                    typeName: "u8",
                  },
                  {
                    name: "bet_number",
                    type: 4,
                    typeName: "u32",
                  },
                  {
                    name: "bet_amount",
                    type: 7,
                    typeName: "Balance",
                  },
                  {
                    name: "oracle_round",
                    type: 8,
                    typeName: "u64",
                  },
                ],
              },
            },
            path: ["bet_a0", "impls", "beta0_core", "data", "BetInformation"],
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
                        type: 32,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 10,
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
                type: 32,
              },
              {
                name: "E",
                type: 10,
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
          id: 33,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 6,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 10,
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
                type: 6,
              },
              {
                name: "E",
                type: 10,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 34,
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
                        type: 10,
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
                type: 10,
              },
            ],
            path: ["Result"],
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
                        type: 3,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 10,
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
                type: 10,
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
                    fields: [
                      {
                        type: 37,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 10,
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
                type: 37,
              },
              {
                name: "E",
                type: 10,
              },
            ],
            path: ["Result"],
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
          id: 38,
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
          id: 39,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 40,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 10,
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
                type: 40,
              },
              {
                name: "E",
                type: 10,
              },
            ],
            path: ["Result"],
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
                        type: 5,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 41,
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
                type: 41,
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
                        type: 14,
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
                        type: 15,
                        typeName: "OwnableError",
                      },
                    ],
                    index: 2,
                    name: "OwnableError",
                  },
                  {
                    fields: [
                      {
                        type: 16,
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
          id: 42,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 43,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 10,
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
                type: 43,
              },
              {
                name: "E",
                type: 10,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 43,
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
          id: 44,
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
    CONTRACT_ADDRESS: "5CwSVjYhUzCDvKMhuC8ox3MRjDjBSNe99WAq5SiKuxhFsbnv",
    CONTRACT_ABI: {
      source: {
        hash: "0x58551be34a0d6f5b1aaba390c6e9401d97fca8b3a0f443b1f504bf6245220ebc",
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
        name: "beta0_core",
        version: "1.0.0",
        authors: ["bet_a0 <admin@betA0.net>"],
      },
      spec: {
        constructors: [
          {
            args: [
              {
                label: "max_bet_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "token_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "min_over_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "max_over_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "min_under_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "max_under_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "core_pool_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "staking_pool_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "treasury_pool_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "pandora_pool_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "admin_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "betaz_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "bet_token_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "staking_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "treasury_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "pandora_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "oracle_randomness_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "dao_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [],
            label: "new",
            payable: false,
            returnType: {
              displayName: ["ink_primitives", "ConstructorResult"],
              type: 9,
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
            type: 7,
          },
          blockNumber: {
            displayName: ["BlockNumber"],
            type: 4,
          },
          chainExtension: {
            displayName: ["ChainExtension"],
            type: 44,
          },
          hash: {
            displayName: ["Hash"],
            type: 38,
          },
          maxEventTopics: 4,
          timestamp: {
            displayName: ["Timestamp"],
            type: 8,
          },
        },
        events: [
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "player",
                type: {
                  displayName: ["Option"],
                  type: 34,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "is_over",
                type: {
                  displayName: ["u8"],
                  type: 2,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "random_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
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
              {
                docs: [],
                indexed: false,
                label: "bet_amount",
                type: {
                  displayName: ["Balance"],
                  type: 7,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "win_amount",
                type: {
                  displayName: ["Balance"],
                  type: 7,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "reward_amount",
                type: {
                  displayName: ["Balance"],
                  type: 7,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "oracle_round",
                type: {
                  displayName: ["u64"],
                  type: 8,
                },
              },
            ],
            docs: [],
            label: "WinEvent",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "player",
                type: {
                  displayName: ["Option"],
                  type: 34,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "is_over",
                type: {
                  displayName: ["u8"],
                  type: 2,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "random_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
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
              {
                docs: [],
                indexed: false,
                label: "bet_amount",
                type: {
                  displayName: ["Balance"],
                  type: 7,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "reward_amount",
                type: {
                  displayName: ["Balance"],
                  type: 7,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "oracle_round",
                type: {
                  displayName: ["u64"],
                  type: 8,
                },
              },
            ],
            docs: [],
            label: "LoseEvent",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "player",
                type: {
                  displayName: ["Option"],
                  type: 34,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "is_over",
                type: {
                  displayName: ["u8"],
                  type: 2,
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
              {
                docs: [],
                indexed: false,
                label: "bet_amount",
                type: {
                  displayName: ["Balance"],
                  type: 7,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "oracle_round",
                type: {
                  displayName: ["u64"],
                  type: 8,
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
                label: "staking_pool_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "amount",
                type: {
                  displayName: ["Balance"],
                  type: 7,
                },
              },
            ],
            docs: [],
            label: "TransferStakingPoolEvent",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "pandora_pool_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "amount",
                type: {
                  displayName: ["Balance"],
                  type: 7,
                },
              },
            ],
            docs: [],
            label: "TransferPandoraPoolEvent",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "treasury_pool_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "amount",
                type: {
                  displayName: ["Balance"],
                  type: 7,
                },
              },
            ],
            docs: [],
            label: "TransferTreasuryPoolEvent",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "contract_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "amount",
                type: {
                  displayName: ["Balance"],
                  type: 7,
                },
              },
            ],
            docs: [],
            label: "MintTokenEvent",
          },
        ],
        lang_error: {
          displayName: ["ink", "LangError"],
          type: 10,
        },
        messages: [
          {
            args: [
              {
                label: "max_bet_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "token_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "min_over_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "max_over_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "min_under_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "max_under_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "core_pool_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "staking_pool_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "treasury_pool_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "pandora_pool_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "admin_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "betaz_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "bet_token_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "staking_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "treasury_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "pandora_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "oracle_randomness_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "dao_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
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
              type: 11,
            },
            selector: "0xf2f6dba3",
          },
          {
            args: [
              {
                label: "bet_number",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "is_over",
                type: {
                  displayName: ["u8"],
                  type: 2,
                },
              },
            ],
            default: false,
            docs: [" Play"],
            label: "play",
            mutates: true,
            payable: true,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x9963949f",
          },
          {
            args: [],
            default: false,
            docs: [" Finalize Bet"],
            label: "finalize",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 21,
            },
            selector: "0x40656e2b",
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
            ],
            default: false,
            docs: [],
            label: "transfer_and_update_session_pandora_pool",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0xa7d7d970",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "transfer_and_update_staking_pool",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0xb53b2fba",
          },
          {
            args: [
              {
                label: "core_pool_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "staking_pool_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "pandora_pool_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
              {
                label: "treasury_pool_ratio",
                type: {
                  displayName: ["u32"],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [" Set core pool ratio"],
            label: "set_pool_ratio",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x6275596c",
          },
          {
            args: [
              {
                label: "max_under_number",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetMaxNumberUnderRollInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [" Set max number under roll"],
            label: "BetA0CoreTrait::set_max_number_under_roll",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0xe3879fee",
          },
          {
            args: [
              {
                label: "percentage_rates",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetPercentageRatesInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [" set percentage_rates"],
            label: "BetA0CoreTrait::set_percentage_rates",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x10e71e23",
          },
          {
            args: [],
            default: false,
            docs: [" Get Max Bet"],
            label: "BetA0CoreTrait::get_max_bet_ratio",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0xb18a8f89",
          },
          {
            args: [],
            default: false,
            docs: [" Update core pool - only owner and admin"],
            label: "BetA0CoreTrait::update_core_pool",
            mutates: true,
            payable: true,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0xf9dc2460",
          },
          {
            args: [],
            default: false,
            docs: [" Function changes state"],
            label: "BetA0CoreTrait::change_state",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x305a2c7c",
          },
          {
            args: [],
            default: false,
            docs: [" get max number over roll"],
            label: "BetA0CoreTrait::get_max_number_over_roll",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0x78687252",
          },
          {
            args: [
              {
                label: "min_under_number",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetMinNumberUnderRollInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [" Set min number under roll"],
            label: "BetA0CoreTrait::set_min_number_under_roll",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0xfbed57ce",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "BetA0CoreTrait::get_max_bet",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 24,
            },
            selector: "0x93aa56df",
          },
          {
            args: [],
            default: false,
            docs: [" Get Hold Player Count"],
            label: "BetA0CoreTrait::get_hold_player_count",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 25,
            },
            selector: "0xda510802",
          },
          {
            args: [],
            default: false,
            docs: [" get min number over roll"],
            label: "BetA0CoreTrait::get_min_number_over_roll",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0xfc8a4a50",
          },
          {
            args: [
              {
                label: "player",
                type: {
                  displayName: ["beta0coretrait_external", "GetBetInput1"],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [" get bet"],
            label: "BetA0CoreTrait::get_bet",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 26,
            },
            selector: "0x0dc968b3",
          },
          {
            args: [
              {
                label: "max_over_number",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetMaxNumberOverRollInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [" Set max number over roll"],
            label: "BetA0CoreTrait::set_max_number_over_roll",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x9943f4b5",
          },
          {
            args: [
              {
                label: "address",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "GetHoldAmountPlayersInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [" Get hold amount players"],
            label: "BetA0CoreTrait::get_hold_amount_players",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 29,
            },
            selector: "0xcbf00dde",
          },
          {
            args: [],
            default: false,
            docs: [" get percentage_rates"],
            label: "BetA0CoreTrait::get_percentage_rates",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0x3ab284da",
          },
          {
            args: [],
            default: false,
            docs: [" Get dao contract address"],
            label: "BetA0CoreTrait::get_dao_address",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 31,
            },
            selector: "0x05d64828",
          },
          {
            args: [],
            default: false,
            docs: [" get contract token balance"],
            label: "BetA0CoreTrait::get_token_balance",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 24,
            },
            selector: "0x9ed23743",
          },
          {
            args: [],
            default: false,
            docs: [" Get treasury pool amount"],
            label: "BetA0CoreTrait::get_treasury_pool_amount",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 24,
            },
            selector: "0xf9424e8e",
          },
          {
            args: [],
            default: false,
            docs: [" get betaz address"],
            label: "BetA0CoreTrait::get_betaz_address",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 31,
            },
            selector: "0x295d7d0f",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "BetA0CoreTrait::transfer_pandora_pool",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0xe6927403",
          },
          {
            args: [
              {
                label: "address",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetStakingAddressInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [" Set staking pool address"],
            label: "BetA0CoreTrait::set_staking_address",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0xcf79cb2a",
          },
          {
            args: [],
            default: false,
            docs: [" Get staking pool address"],
            label: "BetA0CoreTrait::get_staking_address",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 31,
            },
            selector: "0x566725c2",
          },
          {
            args: [
              {
                label: "address",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetPandoraAddressInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [" Set pandora pool address"],
            label: "BetA0CoreTrait::set_pandora_address",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x36e66f21",
          },
          {
            args: [],
            default: false,
            docs: [" Get Under Rates"],
            label: "BetA0CoreTrait::get_under_rates",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 32,
            },
            selector: "0x657dfccb",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: ["beta0coretrait_external", "WithdrawFeeInput1"],
                  type: 0,
                },
              },
              {
                label: "value",
                type: {
                  displayName: ["beta0coretrait_external", "WithdrawFeeInput2"],
                  type: 7,
                },
              },
            ],
            default: false,
            docs: [" Withdraw Fees - only Owner"],
            label: "BetA0CoreTrait::withdraw_fee",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0xb1aed1dc",
          },
          {
            args: [],
            default: false,
            docs: [" Get core pool ratio"],
            label: "BetA0CoreTrait::get_core_pool_ratio",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0xff43351c",
          },
          {
            args: [
              {
                label: "address",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetDaoAddressInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [" Set dao contract address"],
            label: "BetA0CoreTrait::set_dao_address",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x464e64b8",
          },
          {
            args: [],
            default: false,
            docs: [" Get pandora pool ratio"],
            label: "BetA0CoreTrait::get_pandora_pool_ratio",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0x8c3560d0",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetBetazAddressInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [" set betaz address"],
            label: "BetA0CoreTrait::set_betaz_address",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0xa4de4df4",
          },
          {
            args: [
              {
                label: "token_ratio",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetTokenRatioInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [" Set new token ratio"],
            label: "BetA0CoreTrait::set_token_ratio",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x2979f379",
          },
          {
            args: [],
            default: false,
            docs: [" get max number under roll"],
            label: "BetA0CoreTrait::get_max_number_under_roll",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0x9f571242",
          },
          {
            args: [
              {
                label: "index",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "GetHoldPlayersByIndexInput1",
                  ],
                  type: 8,
                },
              },
            ],
            default: false,
            docs: [" Get hold players by index"],
            label: "BetA0CoreTrait::get_hold_players_by_index",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 33,
            },
            selector: "0x65781383",
          },
          {
            args: [],
            default: false,
            docs: [" Get Over Rates"],
            label: "BetA0CoreTrait::get_over_rates",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 32,
            },
            selector: "0x0712d707",
          },
          {
            args: [],
            default: false,
            docs: [" Get treasury pool address"],
            label: "BetA0CoreTrait::get_pandora_address",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 31,
            },
            selector: "0x5a5cbc72",
          },
          {
            args: [
              {
                label: "max_bet_ratio",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetMaxBetRatioInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [" Set max bet ratio"],
            label: "BetA0CoreTrait::set_max_bet_ratio",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x5bc9734b",
          },
          {
            args: [],
            default: false,
            docs: [" Get staking pool amount"],
            label: "BetA0CoreTrait::get_staking_pool_amount",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 24,
            },
            selector: "0x641fd73d",
          },
          {
            args: [],
            default: false,
            docs: [" Get platform fee amount"],
            label: "BetA0CoreTrait::get_platform_fee_amount",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 24,
            },
            selector: "0x6d9d6d05",
          },
          {
            args: [],
            default: false,
            docs: [" Get pandora pool amount"],
            label: "BetA0CoreTrait::get_pandora_pool_amount",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 24,
            },
            selector: "0x27fb539f",
          },
          {
            args: [
              {
                label: "amount",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "UpdateRewardPoolInput1",
                  ],
                  type: 7,
                },
              },
            ],
            default: false,
            docs: [],
            label: "BetA0CoreTrait::update_reward_pool",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x60638993",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "BetA0CoreTrait::transfer_treasury_pool",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x19001c7a",
          },
          {
            args: [
              {
                label: "pool",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "TranferTokenToPoolInput1",
                  ],
                  type: 0,
                },
              },
              {
                label: "amount",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "TranferTokenToPoolInput2",
                  ],
                  type: 7,
                },
              },
            ],
            default: false,
            docs: [" tranfer token to pool"],
            label: "BetA0CoreTrait::tranfer_token_to_pool",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0xd455769a",
          },
          {
            args: [
              {
                label: "address",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetOracleRandomnessAddressInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [" Set oracle randomness address"],
            label: "BetA0CoreTrait::set_oracle_randomness_address",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0xcce4b453",
          },
          {
            args: [
              {
                label: "player",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "IsBetAvailableInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [" Is bet exist"],
            label: "BetA0CoreTrait::is_bet_available",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 35,
            },
            selector: "0xd36f536e",
          },
          {
            args: [],
            default: false,
            docs: [" get min number under roll"],
            label: "BetA0CoreTrait::get_min_number_under_roll",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0xa6185fcb",
          },
          {
            args: [
              {
                label: "bet_token_address",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetBetTokenAddressInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [" Set new psp22 address"],
            label: "BetA0CoreTrait::set_bet_token_address",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x7b887113",
          },
          {
            args: [],
            default: false,
            docs: [" Get treasury pool address"],
            label: "BetA0CoreTrait::get_treasury_address",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 31,
            },
            selector: "0x0f6874b2",
          },
          {
            args: [],
            default: false,
            docs: [" Get psp22 address"],
            label: "BetA0CoreTrait::bet_token_address",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 31,
            },
            selector: "0x45b373ac",
          },
          {
            args: [],
            default: false,
            docs: [" Get oracle randomness address"],
            label: "BetA0CoreTrait::get_oracle_randomness_address",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 31,
            },
            selector: "0x8992db8c",
          },
          {
            args: [],
            default: false,
            docs: [" Get limit round"],
            label: "BetA0CoreTrait::get_round_distance",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 25,
            },
            selector: "0x8251da9c",
          },
          {
            args: [],
            default: false,
            docs: [" Get core pool amout"],
            label: "BetA0CoreTrait::get_core_pool_amout",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 24,
            },
            selector: "0x35014602",
          },
          {
            args: [],
            default: false,
            docs: [" Get reward pool amount"],
            label: "BetA0CoreTrait::get_reward_pool_amount",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 24,
            },
            selector: "0xfbba99aa",
          },
          {
            args: [],
            default: false,
            docs: [" Get treasury pool ratio"],
            label: "BetA0CoreTrait::get_treasury_pool_ratio",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0x91e985a3",
          },
          {
            args: [
              {
                label: "receiver",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "WithdrawHoldAmountInput1",
                  ],
                  type: 0,
                },
              },
              {
                label: "amount",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "WithdrawHoldAmountInput2",
                  ],
                  type: 7,
                },
              },
            ],
            default: false,
            docs: [" Withdraw hold amount"],
            label: "BetA0CoreTrait::withdraw_hold_amount",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x167480ff",
          },
          {
            args: [],
            default: false,
            docs: [" Get token ratio"],
            label: "BetA0CoreTrait::get_token_ratio",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0x5bf4a937",
          },
          {
            args: [
              {
                label: "over_rates",
                type: {
                  displayName: ["beta0coretrait_external", "SetRatesInput1"],
                  type: 6,
                },
              },
              {
                label: "under_rates",
                type: {
                  displayName: ["beta0coretrait_external", "SetRatesInput2"],
                  type: 6,
                },
              },
            ],
            default: false,
            docs: [
              " Set over_rates and discount rate - Only Owner 2 vectors same size",
            ],
            label: "BetA0CoreTrait::set_rates",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x62500603",
          },
          {
            args: [
              {
                label: "address",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetTreasuryAddressInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [" Set treasury pool address"],
            label: "BetA0CoreTrait::set_treasury_address",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0xbdb879fd",
          },
          {
            args: [
              {
                label: "round_distance",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetRoundDistanceInput1",
                  ],
                  type: 8,
                },
              },
            ],
            default: false,
            docs: [" Set limit round"],
            label: "BetA0CoreTrait::set_round_distance",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0xbc39f9ba",
          },
          {
            args: [
              {
                label: "min_over_number",
                type: {
                  displayName: [
                    "beta0coretrait_external",
                    "SetMinNumberOverRollInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [" Set min number over roll"],
            label: "BetA0CoreTrait::set_min_number_over_roll",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0x49094f28",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "BetA0CoreTrait::transfer_staking_pool",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 11,
            },
            selector: "0xda4c83bb",
          },
          {
            args: [],
            default: false,
            docs: [" Get staking pool ratio"],
            label: "BetA0CoreTrait::get_staking_pool_ratio",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0xe84e0c62",
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
              type: 33,
            },
            selector: "0x4fa43c8c",
          },
          {
            args: [
              {
                label: "new_owner",
                type: {
                  displayName: ["ownable_external", "TransferOwnershipInput1"],
                  type: 34,
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
              type: 36,
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
              type: 36,
            },
            selector: "0x5e228753",
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
              type: 35,
            },
            selector: "0xd123ce11",
          },
          {
            args: [
              {
                label: "new_code_hash",
                type: {
                  displayName: ["upgradeable_external", "SetCodeHashInput1"],
                  type: 38,
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
              type: 39,
            },
            selector: "0x1700ae80",
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
              type: 23,
            },
            selector: "0x83da3bb2",
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
                  type: 34,
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
              type: 35,
            },
            selector: "0xc1d9ac18",
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
                  type: 34,
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
              type: 42,
            },
            selector: "0xeaf1248a",
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
                  type: 34,
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
              type: 42,
            },
            selector: "0x6e4f0991",
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
                  type: 34,
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
              type: 42,
            },
            selector: "0x4ac062fd",
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
              type: 33,
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
              type: 23,
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
                            leaf: {
                              key: "0x00000000",
                              ty: 0,
                            },
                          },
                          name: "betaz_address",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 6,
                            },
                          },
                          name: "over_rates",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 6,
                            },
                          },
                          name: "under_rates",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 4,
                            },
                          },
                          name: "percentage_rates",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 4,
                            },
                          },
                          name: "max_bet_ratio",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 0,
                            },
                          },
                          name: "bet_token_address",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 0,
                            },
                          },
                          name: "staking_address",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 0,
                            },
                          },
                          name: "treasury_address",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 0,
                            },
                          },
                          name: "pandora_pool_address",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 4,
                            },
                          },
                          name: "token_ratio",
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
                                          key: "0xf5c3fa2a",
                                          ty: 2,
                                        },
                                      },
                                      name: "is_over",
                                    },
                                    {
                                      layout: {
                                        leaf: {
                                          key: "0xf5c3fa2a",
                                          ty: 4,
                                        },
                                      },
                                      name: "bet_number",
                                    },
                                    {
                                      layout: {
                                        leaf: {
                                          key: "0xf5c3fa2a",
                                          ty: 7,
                                        },
                                      },
                                      name: "bet_amount",
                                    },
                                    {
                                      layout: {
                                        leaf: {
                                          key: "0xf5c3fa2a",
                                          ty: 8,
                                        },
                                      },
                                      name: "oracle_round",
                                    },
                                  ],
                                  name: "BetInformation",
                                },
                              },
                              root_key: "0xf5c3fa2a",
                            },
                          },
                          name: "bets",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 4,
                            },
                          },
                          name: "min_over_number",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 4,
                            },
                          },
                          name: "max_over_number",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 4,
                            },
                          },
                          name: "min_under_number",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 4,
                            },
                          },
                          name: "max_under_number",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x81d019cc",
                                  ty: 7,
                                },
                              },
                              root_key: "0x81d019cc",
                            },
                          },
                          name: "hold_amount_players",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x03bea4fa",
                                  ty: 0,
                                },
                              },
                              root_key: "0x03bea4fa",
                            },
                          },
                          name: "hold_players",
                        },
                        {
                          layout: {
                            struct: {
                              fields: [
                                {
                                  layout: {
                                    leaf: {
                                      key: "0x00000000",
                                      ty: 4,
                                    },
                                  },
                                  name: "core_pool_ratio",
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: "0x00000000",
                                      ty: 4,
                                    },
                                  },
                                  name: "staking_pool_ratio",
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: "0x00000000",
                                      ty: 4,
                                    },
                                  },
                                  name: "treasury_pool_ratio",
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: "0x00000000",
                                      ty: 4,
                                    },
                                  },
                                  name: "pandora_pool_ratio",
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: "0x00000000",
                                      ty: 7,
                                    },
                                  },
                                  name: "core_pool_amout",
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: "0x00000000",
                                      ty: 7,
                                    },
                                  },
                                  name: "reward_pool_amount",
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: "0x00000000",
                                      ty: 7,
                                    },
                                  },
                                  name: "staking_pool_amount",
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: "0x00000000",
                                      ty: 7,
                                    },
                                  },
                                  name: "treasury_pool_amount",
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: "0x00000000",
                                      ty: 7,
                                    },
                                  },
                                  name: "pandora_pool_amount",
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: "0x00000000",
                                      ty: 7,
                                    },
                                  },
                                  name: "platform_fee_amount",
                                },
                              ],
                              name: "PoolManager",
                            },
                          },
                          name: "pool_manager",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 0,
                            },
                          },
                          name: "oracle_randomness_address",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 8,
                            },
                          },
                          name: "round_distance",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 0,
                            },
                          },
                          name: "dao_address",
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
                  name: "admin_data",
                },
              ],
              name: "BetA0CoreContract",
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
              sequence: {
                type: 4,
              },
            },
          },
        },
        {
          id: 7,
          type: {
            def: {
              primitive: "u128",
            },
          },
        },
        {
          id: 8,
          type: {
            def: {
              primitive: "u64",
            },
          },
        },
        {
          id: 9,
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
                        type: 10,
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
                type: 10,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 10,
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
          id: 11,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 12,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 10,
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
                type: 12,
              },
              {
                name: "E",
                type: 10,
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
                        type: 13,
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
                type: 13,
              },
            ],
            path: ["Result"],
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
                        type: 15,
                        typeName: "OwnableError",
                      },
                    ],
                    index: 74,
                    name: "OwnableError",
                  },
                  {
                    fields: [
                      {
                        type: 16,
                        typeName: "AccessControlError",
                      },
                    ],
                    index: 75,
                    name: "AccessControlError",
                  },
                  {
                    fields: [
                      {
                        type: 17,
                        typeName: "PSP22Error",
                      },
                    ],
                    index: 76,
                    name: "PSP22Error",
                  },
                  {
                    fields: [
                      {
                        type: 19,
                        typeName: "PSP34Error",
                      },
                    ],
                    index: 77,
                    name: "PSP34Error",
                  },
                  {
                    fields: [
                      {
                        type: 20,
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
          id: 14,
          type: {
            def: {
              primitive: "str",
            },
          },
        },
        {
          id: 15,
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
          id: 16,
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
          id: 17,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 14,
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
                        type: 14,
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
                        type: 18,
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
          id: 18,
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
                        type: 8,
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
          id: 19,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 14,
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
                        type: 14,
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
          id: 20,
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
          id: 21,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 22,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 10,
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
                type: 22,
              },
              {
                name: "E",
                type: 10,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 22,
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
                        type: 13,
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
                type: 13,
              },
            ],
            path: ["Result"],
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
                        type: 4,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 10,
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
                type: 10,
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
                        type: 10,
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
                type: 10,
              },
            ],
            path: ["Result"],
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
                        type: 8,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 10,
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
                type: 10,
              },
            ],
            path: ["Result"],
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
                        type: 10,
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
                type: 10,
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
                        type: 28,
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
                type: 28,
              },
            ],
            path: ["Option"],
          },
        },
        {
          id: 28,
          type: {
            def: {
              composite: {
                fields: [
                  {
                    name: "is_over",
                    type: 2,
                    typeName: "u8",
                  },
                  {
                    name: "bet_number",
                    type: 4,
                    typeName: "u32",
                  },
                  {
                    name: "bet_amount",
                    type: 7,
                    typeName: "Balance",
                  },
                  {
                    name: "oracle_round",
                    type: 8,
                    typeName: "u64",
                  },
                ],
              },
            },
            path: ["bet_a0", "impls", "beta0_core", "data", "BetInformation"],
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
                        type: 10,
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
                type: 10,
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
                        type: 7,
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
                type: 7,
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
                        type: 0,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 10,
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
                type: 10,
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
                        type: 6,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 10,
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
                type: 6,
              },
              {
                name: "E",
                type: 10,
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
                        type: 34,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 10,
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
                type: 34,
              },
              {
                name: "E",
                type: 10,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 34,
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
          id: 35,
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
                        type: 10,
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
                type: 10,
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
                    fields: [
                      {
                        type: 37,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 10,
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
                type: 37,
              },
              {
                name: "E",
                type: 10,
              },
            ],
            path: ["Result"],
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
          id: 38,
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
          id: 39,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 40,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 10,
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
                type: 40,
              },
              {
                name: "E",
                type: 10,
              },
            ],
            path: ["Result"],
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
                        type: 5,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 41,
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
                type: 41,
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
                        type: 14,
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
                        type: 15,
                        typeName: "OwnableError",
                      },
                    ],
                    index: 2,
                    name: "OwnableError",
                  },
                  {
                    fields: [
                      {
                        type: 16,
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
          id: 42,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 43,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 10,
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
                type: 43,
              },
              {
                name: "E",
                type: 10,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 43,
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
          id: 44,
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
  contract: contract[process.env.NODE_ENV],
};
