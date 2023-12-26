require("dotenv").config();

const contract = {
  testnet: {
    CONTRACT_ADDRESS: "5CsoBRt6pRLyVx4wPHhhLMYzVLjsYRukZFTQdtKAWdh22Ees",
    CONTRACT_ABI: {
      source: {
        hash: "0xa4150bd1ccc39a07d9986bcc02d7465339a2d0895ee7789ea0774ca3b1055037",
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
        name: "staking",
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
                label: "betaz_token_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "limit_unstake_time",
                type: {
                  displayName: ["Timestamp"],
                  type: 7,
                },
              },
            ],
            default: false,
            docs: [],
            label: "new",
            payable: false,
            returnType: {
              displayName: ["ink_primitives", "ConstructorResult"],
              type: 8,
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
            type: 6,
          },
          blockNumber: {
            displayName: ["BlockNumber"],
            type: 4,
          },
          chainExtension: {
            displayName: ["ChainExtension"],
            type: 39,
          },
          hash: {
            displayName: ["Hash"],
            type: 32,
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
                label: "pool_staking_contract",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "token_contract",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "staker",
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
                  type: 6,
                },
              },
            ],
            docs: [],
            label: "StakeEvent",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "pool_staking_contract",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "token_contract",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "staker",
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
                  type: 6,
                },
              },
            ],
            docs: [],
            label: "UnstakeEvent",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "pool_staking_contract",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "token_contract",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "staker",
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
                  type: 6,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "time_request",
                type: {
                  displayName: ["Timestamp"],
                  type: 7,
                },
              },
            ],
            docs: [],
            label: "RequestUnstakeEvent",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "pool_staking_contract",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "token_contract",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "staker",
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
                  type: 6,
                },
              },
            ],
            docs: [],
            label: "CancelRequestUnstakeEvent",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "pool_staking_contract",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "token_contract",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "staker",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "staked_amount",
                type: {
                  displayName: ["Balance"],
                  type: 6,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "reward_amount",
                type: {
                  displayName: ["Balance"],
                  type: 6,
                },
              },
            ],
            docs: [],
            label: "ClaimEvent",
          },
        ],
        lang_error: {
          displayName: ["ink", "LangError"],
          type: 9,
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
                label: "betaz_token_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "limit_unstake_time",
                type: {
                  displayName: ["Timestamp"],
                  type: 7,
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
              type: 10,
            },
            selector: "0xf2f6dba3",
          },
          {
            args: [
              {
                label: "amount",
                type: {
                  displayName: ["Balance"],
                  type: 6,
                },
              },
            ],
            default: false,
            docs: [" Stake"],
            label: "stake",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 10,
            },
            selector: "0x5adb38de",
          },
          {
            args: [
              {
                label: "amount",
                type: {
                  displayName: ["Balance"],
                  type: 6,
                },
              },
            ],
            default: false,
            docs: [],
            label: "request_unstake",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 10,
            },
            selector: "0xfd83c46b",
          },
          {
            args: [
              {
                label: "index",
                type: {
                  displayName: ["u128"],
                  type: 6,
                },
              },
            ],
            default: false,
            docs: [],
            label: "cancel_request_unstake",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 10,
            },
            selector: "0xc5bd017e",
          },
          {
            args: [
              {
                label: "index",
                type: {
                  displayName: ["u128"],
                  type: 6,
                },
              },
            ],
            default: false,
            docs: [],
            label: "unstake",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 10,
            },
            selector: "0x82364901",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [" Claim Reward"],
            label: "claim_reward",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 10,
            },
            selector: "0x9a8353a7",
          },
          {
            args: [
              {
                label: "reward",
                type: {
                  displayName: ["Balance"],
                  type: 6,
                },
              },
            ],
            default: false,
            docs: [" Add reward to reward_pool"],
            label: "add_reward",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 10,
            },
            selector: "0x1b146ead",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_is_locked",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 20,
            },
            selector: "0x73337e40",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "GetPendingUnstakingAmountInput1",
                  ],
                  type: 0,
                },
              },
              {
                label: "index",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "GetPendingUnstakingAmountInput2",
                  ],
                  type: 6,
                },
              },
            ],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_pending_unstaking_amount",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 21,
            },
            selector: "0x3f807ae3",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "GetRequestUnstakeAccountsIndexByAccountInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [],
            label:
              "StakingPoolTrait::get_request_unstake_accounts_index_by_account",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 21,
            },
            selector: "0x31bf579a",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_reward_started",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 20,
            },
            selector: "0x88b8fc3f",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_request_unstake_accounts_last_index",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0x568cb8ae",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "GetPendingUnstakingIndexInput1",
                  ],
                  type: 0,
                },
              },
              {
                label: "amount",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "GetPendingUnstakingIndexInput2",
                  ],
                  type: 6,
                },
              },
              {
                label: "time",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "GetPendingUnstakingIndexInput3",
                  ],
                  type: 7,
                },
              },
            ],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_pending_unstaking_index",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 21,
            },
            selector: "0x11b89e42",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_reward_pool",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 24,
            },
            selector: "0x5f760efc",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_claimable_reward",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 24,
            },
            selector: "0x4bb94b06",
          },
          {
            args: [
              {
                label: "staker",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "SetClaimedStatusInput1",
                  ],
                  type: 0,
                },
              },
              {
                label: "status",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "SetClaimedStatusInput2",
                  ],
                  type: 3,
                },
              },
            ],
            default: false,
            docs: [],
            label: "StakingPoolTrait::set_claimed_status",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 10,
            },
            selector: "0x3d2b0f01",
          },
          {
            args: [
              {
                label: "index",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "GetStakedAccountsByIndexInput1",
                  ],
                  type: 7,
                },
              },
            ],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_staked_accounts_by_index",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 25,
            },
            selector: "0x6b05ac17",
          },
          {
            args: [
              {
                label: "betaz_token_address",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "SetBetazTokenAddressInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [],
            label: "StakingPoolTrait::set_betaz_token_address",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 10,
            },
            selector: "0xe181b800",
          },
          {
            args: [],
            default: false,
            docs: [" Function changes state"],
            label: "StakingPoolTrait::change_state",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 10,
            },
            selector: "0x967d6443",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "GetStakedAccountsIndexByAccountInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_staked_accounts_index_by_account",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 21,
            },
            selector: "0x7464d327",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_staked_accounts_last_index",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0xa2979b02",
          },
          {
            args: [
              {
                label: "limit_unstake_time",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "SetLimitUnstakeTimeInput1",
                  ],
                  type: 7,
                },
              },
            ],
            default: false,
            docs: [" Set bet az token contract"],
            label: "StakingPoolTrait::set_limit_unstake_time",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 10,
            },
            selector: "0x1fa344e5",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: ["stakingpooltrait_external", "IsClaimedInput1"],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [],
            label: "StakingPoolTrait::is_claimed",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 20,
            },
            selector: "0x3680489f",
          },
          {
            args: [
              {
                label: "is_locked",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "UpdateIsLockedInput1",
                  ],
                  type: 3,
                },
              },
            ],
            default: false,
            docs: [],
            label: "StakingPoolTrait::update_is_locked",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 10,
            },
            selector: "0x519ef310",
          },
          {
            args: [
              {
                label: "start",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "UpdateStatusRewardDistributionInput1",
                  ],
                  type: 3,
                },
              },
            ],
            default: false,
            docs: [],
            label: "StakingPoolTrait::update_status_reward_distribution",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 10,
            },
            selector: "0xcf1d86fb",
          },
          {
            args: [],
            default: false,
            docs: [" Get bet az token contract"],
            label: "StakingPoolTrait::get_betaz_token_address",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 27,
            },
            selector: "0xa42e6b54",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "GetStakeAmountByAccountInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_stake_amount_by_account",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 24,
            },
            selector: "0x77b44ad5",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "WithdrawFeeInput1",
                  ],
                  type: 0,
                },
              },
              {
                label: "value",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "WithdrawFeeInput2",
                  ],
                  type: 6,
                },
              },
            ],
            default: false,
            docs: [" Withdraw fee"],
            label: "StakingPoolTrait::withdraw_fee",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 10,
            },
            selector: "0x57e5d307",
          },
          {
            args: [],
            default: false,
            docs: [" Get bet az token contract"],
            label: "StakingPoolTrait::get_limit_unstake_time",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0x69579f16",
          },
          {
            args: [
              {
                label: "index",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "GetRequestUnstakeAccountsByIndexInput1",
                  ],
                  type: 7,
                },
              },
            ],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_request_unstake_accounts_by_index",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 25,
            },
            selector: "0x8ea42355",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_total_staked",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 24,
            },
            selector: "0x5a8746ad",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "GetRequestUnstakeTimeInput1",
                  ],
                  type: 0,
                },
              },
              {
                label: "index",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "GetRequestUnstakeTimeInput2",
                  ],
                  type: 6,
                },
              },
            ],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_request_unstake_time",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 28,
            },
            selector: "0x855244fb",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "GetTotalPendingUnstakedByAccountInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_total_pending_unstaked_by_account",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0x5eb55335",
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
              type: 30,
            },
            selector: "0x5e228753",
          },
          {
            args: [
              {
                label: "new_owner",
                type: {
                  displayName: ["ownable_external", "TransferOwnershipInput1"],
                  type: 26,
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
              type: 30,
            },
            selector: "0x11f43efd",
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
              type: 25,
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
              type: 20,
            },
            selector: "0xd123ce11",
          },
          {
            args: [
              {
                label: "new_code_hash",
                type: {
                  displayName: ["upgradeable_external", "SetCodeHashInput1"],
                  type: 32,
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
              type: 33,
            },
            selector: "0x1700ae80",
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
                  type: 26,
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
              type: 36,
            },
            selector: "0xeaf1248a",
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
                  type: 26,
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
              type: 20,
            },
            selector: "0xc1d9ac18",
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
                  type: 26,
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
              type: 36,
            },
            selector: "0x4ac062fd",
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
              type: 38,
            },
            selector: "0x83da3bb2",
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
                  type: 26,
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
              type: 36,
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
              type: 25,
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
              type: 38,
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
                          name: "admin_address",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 0,
                            },
                          },
                          name: "betaz_token_address",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x89e522bf",
                                  ty: 0,
                                },
                              },
                              root_key: "0x89e522bf",
                            },
                          },
                          name: "staked_accounts",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x62eb5688",
                                  ty: 6,
                                },
                              },
                              root_key: "0x62eb5688",
                            },
                          },
                          name: "staking_list",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 7,
                            },
                          },
                          name: "limit_unstake_time",
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
                                          key: "0xd3960fdb",
                                          ty: 6,
                                        },
                                      },
                                      name: "amount",
                                    },
                                    {
                                      layout: {
                                        leaf: {
                                          key: "0xd3960fdb",
                                          ty: 7,
                                        },
                                      },
                                      name: "time",
                                    },
                                  ],
                                  name: "PendingUnstakeInformation",
                                },
                              },
                              root_key: "0xd3960fdb",
                            },
                          },
                          name: "pending_unstaking_list",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 6,
                            },
                          },
                          name: "total_staked",
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
                              ty: 3,
                            },
                          },
                          name: "reward_started",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x212e7f5d",
                                  ty: 3,
                                },
                              },
                              root_key: "0x212e7f5d",
                            },
                          },
                          name: "is_claimed",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 6,
                            },
                          },
                          name: "reward_pool",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 6,
                            },
                          },
                          name: "claimable_reward",
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
                      name: "Data",
                    },
                  },
                  name: "data",
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
              name: "StakingPoolContract",
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
              primitive: "u128",
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
                        type: 9,
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
                type: 9,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 9,
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
          id: 10,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 11,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 9,
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
                type: 11,
              },
              {
                name: "E",
                type: 9,
              },
            ],
            path: ["Result"],
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
                    fields: [
                      {
                        type: 13,
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
                    fields: [
                      {
                        type: 14,
                        typeName: "OwnableError",
                      },
                    ],
                    index: 73,
                    name: "OwnableError",
                  },
                  {
                    fields: [
                      {
                        type: 15,
                        typeName: "AccessControlError",
                      },
                    ],
                    index: 74,
                    name: "AccessControlError",
                  },
                  {
                    fields: [
                      {
                        type: 16,
                        typeName: "PSP22Error",
                      },
                    ],
                    index: 75,
                    name: "PSP22Error",
                  },
                  {
                    fields: [
                      {
                        type: 18,
                        typeName: "PSP34Error",
                      },
                    ],
                    index: 76,
                    name: "PSP34Error",
                  },
                  {
                    fields: [
                      {
                        type: 19,
                        typeName: "PausableError",
                      },
                    ],
                    index: 77,
                    name: "PausableError",
                  },
                  {
                    index: 78,
                    name: "CheckedOperations",
                  },
                ],
              },
            },
            path: ["bet_a0", "traits", "error", "Error"],
          },
        },
        {
          id: 13,
          type: {
            def: {
              primitive: "str",
            },
          },
        },
        {
          id: 14,
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
          id: 15,
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
          id: 16,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 13,
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
                        type: 13,
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
                        type: 17,
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
          id: 17,
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
          id: 18,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 13,
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
                        type: 13,
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
          id: 19,
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
          id: 20,
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
                        type: 9,
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
                type: 9,
              },
            ],
            path: ["Result"],
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
                        type: 9,
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
                type: 9,
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
                    index: 0,
                    name: "None",
                  },
                  {
                    fields: [
                      {
                        type: 6,
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
                type: 6,
              },
            ],
            path: ["Option"],
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
                        type: 7,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 9,
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
                type: 9,
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
                        type: 6,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 9,
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
                type: 9,
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
                        type: 26,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 9,
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
                type: 26,
              },
              {
                name: "E",
                type: 9,
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
          id: 27,
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
                        type: 9,
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
                type: 9,
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
                        type: 9,
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
                type: 9,
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
          id: 30,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 31,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 9,
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
                type: 31,
              },
              {
                name: "E",
                type: 9,
              },
            ],
            path: ["Result"],
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
                        type: 5,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 14,
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
                type: 14,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 32,
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
                        type: 9,
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
                type: 9,
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
                        type: 5,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 35,
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
                type: 35,
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
                        type: 13,
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
                        type: 14,
                        typeName: "OwnableError",
                      },
                    ],
                    index: 2,
                    name: "OwnableError",
                  },
                  {
                    fields: [
                      {
                        type: 15,
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
                        type: 9,
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
                type: 9,
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
                        type: 9,
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
                type: 9,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 39,
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
    CONTRACT_ADDRESS: "5H9kSnmD6MhfLJ6RtEcrmmnvp2UbS6gRhbMt7ALGQbZWibBY",
    CONTRACT_ABI: {
      source: {
        hash: "0xa4150bd1ccc39a07d9986bcc02d7465339a2d0895ee7789ea0774ca3b1055037",
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
        name: "staking",
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
                label: "betaz_token_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "limit_unstake_time",
                type: {
                  displayName: ["Timestamp"],
                  type: 7,
                },
              },
            ],
            default: false,
            docs: [],
            label: "new",
            payable: false,
            returnType: {
              displayName: ["ink_primitives", "ConstructorResult"],
              type: 8,
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
            type: 6,
          },
          blockNumber: {
            displayName: ["BlockNumber"],
            type: 4,
          },
          chainExtension: {
            displayName: ["ChainExtension"],
            type: 39,
          },
          hash: {
            displayName: ["Hash"],
            type: 32,
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
                label: "pool_staking_contract",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "token_contract",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "staker",
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
                  type: 6,
                },
              },
            ],
            docs: [],
            label: "StakeEvent",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "pool_staking_contract",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "token_contract",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "staker",
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
                  type: 6,
                },
              },
            ],
            docs: [],
            label: "UnstakeEvent",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "pool_staking_contract",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "token_contract",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "staker",
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
                  type: 6,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "time_request",
                type: {
                  displayName: ["Timestamp"],
                  type: 7,
                },
              },
            ],
            docs: [],
            label: "RequestUnstakeEvent",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "pool_staking_contract",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "token_contract",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "staker",
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
                  type: 6,
                },
              },
            ],
            docs: [],
            label: "CancelRequestUnstakeEvent",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "pool_staking_contract",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "token_contract",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "staker",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "staked_amount",
                type: {
                  displayName: ["Balance"],
                  type: 6,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "reward_amount",
                type: {
                  displayName: ["Balance"],
                  type: 6,
                },
              },
            ],
            docs: [],
            label: "ClaimEvent",
          },
        ],
        lang_error: {
          displayName: ["ink", "LangError"],
          type: 9,
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
                label: "betaz_token_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "limit_unstake_time",
                type: {
                  displayName: ["Timestamp"],
                  type: 7,
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
              type: 10,
            },
            selector: "0xf2f6dba3",
          },
          {
            args: [
              {
                label: "amount",
                type: {
                  displayName: ["Balance"],
                  type: 6,
                },
              },
            ],
            default: false,
            docs: [" Stake"],
            label: "stake",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 10,
            },
            selector: "0x5adb38de",
          },
          {
            args: [
              {
                label: "amount",
                type: {
                  displayName: ["Balance"],
                  type: 6,
                },
              },
            ],
            default: false,
            docs: [],
            label: "request_unstake",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 10,
            },
            selector: "0xfd83c46b",
          },
          {
            args: [
              {
                label: "index",
                type: {
                  displayName: ["u128"],
                  type: 6,
                },
              },
            ],
            default: false,
            docs: [],
            label: "cancel_request_unstake",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 10,
            },
            selector: "0xc5bd017e",
          },
          {
            args: [
              {
                label: "index",
                type: {
                  displayName: ["u128"],
                  type: 6,
                },
              },
            ],
            default: false,
            docs: [],
            label: "unstake",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 10,
            },
            selector: "0x82364901",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [" Claim Reward"],
            label: "claim_reward",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 10,
            },
            selector: "0x9a8353a7",
          },
          {
            args: [
              {
                label: "reward",
                type: {
                  displayName: ["Balance"],
                  type: 6,
                },
              },
            ],
            default: false,
            docs: [" Add reward to reward_pool"],
            label: "add_reward",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 10,
            },
            selector: "0x1b146ead",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_is_locked",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 20,
            },
            selector: "0x73337e40",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "GetPendingUnstakingAmountInput1",
                  ],
                  type: 0,
                },
              },
              {
                label: "index",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "GetPendingUnstakingAmountInput2",
                  ],
                  type: 6,
                },
              },
            ],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_pending_unstaking_amount",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 21,
            },
            selector: "0x3f807ae3",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "GetRequestUnstakeAccountsIndexByAccountInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [],
            label:
              "StakingPoolTrait::get_request_unstake_accounts_index_by_account",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 21,
            },
            selector: "0x31bf579a",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_reward_started",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 20,
            },
            selector: "0x88b8fc3f",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_request_unstake_accounts_last_index",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0x568cb8ae",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "GetPendingUnstakingIndexInput1",
                  ],
                  type: 0,
                },
              },
              {
                label: "amount",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "GetPendingUnstakingIndexInput2",
                  ],
                  type: 6,
                },
              },
              {
                label: "time",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "GetPendingUnstakingIndexInput3",
                  ],
                  type: 7,
                },
              },
            ],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_pending_unstaking_index",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 21,
            },
            selector: "0x11b89e42",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_reward_pool",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 24,
            },
            selector: "0x5f760efc",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_claimable_reward",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 24,
            },
            selector: "0x4bb94b06",
          },
          {
            args: [
              {
                label: "staker",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "SetClaimedStatusInput1",
                  ],
                  type: 0,
                },
              },
              {
                label: "status",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "SetClaimedStatusInput2",
                  ],
                  type: 3,
                },
              },
            ],
            default: false,
            docs: [],
            label: "StakingPoolTrait::set_claimed_status",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 10,
            },
            selector: "0x3d2b0f01",
          },
          {
            args: [
              {
                label: "index",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "GetStakedAccountsByIndexInput1",
                  ],
                  type: 7,
                },
              },
            ],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_staked_accounts_by_index",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 25,
            },
            selector: "0x6b05ac17",
          },
          {
            args: [
              {
                label: "betaz_token_address",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "SetBetazTokenAddressInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [],
            label: "StakingPoolTrait::set_betaz_token_address",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 10,
            },
            selector: "0xe181b800",
          },
          {
            args: [],
            default: false,
            docs: [" Function changes state"],
            label: "StakingPoolTrait::change_state",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 10,
            },
            selector: "0x967d6443",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "GetStakedAccountsIndexByAccountInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_staked_accounts_index_by_account",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 21,
            },
            selector: "0x7464d327",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_staked_accounts_last_index",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0xa2979b02",
          },
          {
            args: [
              {
                label: "limit_unstake_time",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "SetLimitUnstakeTimeInput1",
                  ],
                  type: 7,
                },
              },
            ],
            default: false,
            docs: [" Set bet az token contract"],
            label: "StakingPoolTrait::set_limit_unstake_time",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 10,
            },
            selector: "0x1fa344e5",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: ["stakingpooltrait_external", "IsClaimedInput1"],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [],
            label: "StakingPoolTrait::is_claimed",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 20,
            },
            selector: "0x3680489f",
          },
          {
            args: [
              {
                label: "is_locked",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "UpdateIsLockedInput1",
                  ],
                  type: 3,
                },
              },
            ],
            default: false,
            docs: [],
            label: "StakingPoolTrait::update_is_locked",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 10,
            },
            selector: "0x519ef310",
          },
          {
            args: [
              {
                label: "start",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "UpdateStatusRewardDistributionInput1",
                  ],
                  type: 3,
                },
              },
            ],
            default: false,
            docs: [],
            label: "StakingPoolTrait::update_status_reward_distribution",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 10,
            },
            selector: "0xcf1d86fb",
          },
          {
            args: [],
            default: false,
            docs: [" Get bet az token contract"],
            label: "StakingPoolTrait::get_betaz_token_address",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 27,
            },
            selector: "0xa42e6b54",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "GetStakeAmountByAccountInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_stake_amount_by_account",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 24,
            },
            selector: "0x77b44ad5",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "WithdrawFeeInput1",
                  ],
                  type: 0,
                },
              },
              {
                label: "value",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "WithdrawFeeInput2",
                  ],
                  type: 6,
                },
              },
            ],
            default: false,
            docs: [" Withdraw fee"],
            label: "StakingPoolTrait::withdraw_fee",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 10,
            },
            selector: "0x57e5d307",
          },
          {
            args: [],
            default: false,
            docs: [" Get bet az token contract"],
            label: "StakingPoolTrait::get_limit_unstake_time",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0x69579f16",
          },
          {
            args: [
              {
                label: "index",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "GetRequestUnstakeAccountsByIndexInput1",
                  ],
                  type: 7,
                },
              },
            ],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_request_unstake_accounts_by_index",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 25,
            },
            selector: "0x8ea42355",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_total_staked",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 24,
            },
            selector: "0x5a8746ad",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "GetRequestUnstakeTimeInput1",
                  ],
                  type: 0,
                },
              },
              {
                label: "index",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "GetRequestUnstakeTimeInput2",
                  ],
                  type: 6,
                },
              },
            ],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_request_unstake_time",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 28,
            },
            selector: "0x855244fb",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: [
                    "stakingpooltrait_external",
                    "GetTotalPendingUnstakedByAccountInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [],
            label: "StakingPoolTrait::get_total_pending_unstaked_by_account",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 23,
            },
            selector: "0x5eb55335",
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
              type: 30,
            },
            selector: "0x5e228753",
          },
          {
            args: [
              {
                label: "new_owner",
                type: {
                  displayName: ["ownable_external", "TransferOwnershipInput1"],
                  type: 26,
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
              type: 30,
            },
            selector: "0x11f43efd",
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
              type: 25,
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
              type: 20,
            },
            selector: "0xd123ce11",
          },
          {
            args: [
              {
                label: "new_code_hash",
                type: {
                  displayName: ["upgradeable_external", "SetCodeHashInput1"],
                  type: 32,
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
              type: 33,
            },
            selector: "0x1700ae80",
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
                  type: 26,
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
              type: 36,
            },
            selector: "0xeaf1248a",
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
                  type: 26,
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
              type: 20,
            },
            selector: "0xc1d9ac18",
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
                  type: 26,
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
              type: 36,
            },
            selector: "0x4ac062fd",
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
              type: 38,
            },
            selector: "0x83da3bb2",
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
                  type: 26,
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
              type: 36,
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
              type: 25,
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
              type: 38,
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
                          name: "admin_address",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 0,
                            },
                          },
                          name: "betaz_token_address",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x89e522bf",
                                  ty: 0,
                                },
                              },
                              root_key: "0x89e522bf",
                            },
                          },
                          name: "staked_accounts",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x62eb5688",
                                  ty: 6,
                                },
                              },
                              root_key: "0x62eb5688",
                            },
                          },
                          name: "staking_list",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 7,
                            },
                          },
                          name: "limit_unstake_time",
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
                                          key: "0xd3960fdb",
                                          ty: 6,
                                        },
                                      },
                                      name: "amount",
                                    },
                                    {
                                      layout: {
                                        leaf: {
                                          key: "0xd3960fdb",
                                          ty: 7,
                                        },
                                      },
                                      name: "time",
                                    },
                                  ],
                                  name: "PendingUnstakeInformation",
                                },
                              },
                              root_key: "0xd3960fdb",
                            },
                          },
                          name: "pending_unstaking_list",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 6,
                            },
                          },
                          name: "total_staked",
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
                              ty: 3,
                            },
                          },
                          name: "reward_started",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x212e7f5d",
                                  ty: 3,
                                },
                              },
                              root_key: "0x212e7f5d",
                            },
                          },
                          name: "is_claimed",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 6,
                            },
                          },
                          name: "reward_pool",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 6,
                            },
                          },
                          name: "claimable_reward",
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
                      name: "Data",
                    },
                  },
                  name: "data",
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
              name: "StakingPoolContract",
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
              primitive: "u128",
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
                        type: 9,
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
                type: 9,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 9,
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
          id: 10,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 11,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 9,
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
                type: 11,
              },
              {
                name: "E",
                type: 9,
              },
            ],
            path: ["Result"],
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
                    fields: [
                      {
                        type: 13,
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
                    fields: [
                      {
                        type: 14,
                        typeName: "OwnableError",
                      },
                    ],
                    index: 73,
                    name: "OwnableError",
                  },
                  {
                    fields: [
                      {
                        type: 15,
                        typeName: "AccessControlError",
                      },
                    ],
                    index: 74,
                    name: "AccessControlError",
                  },
                  {
                    fields: [
                      {
                        type: 16,
                        typeName: "PSP22Error",
                      },
                    ],
                    index: 75,
                    name: "PSP22Error",
                  },
                  {
                    fields: [
                      {
                        type: 18,
                        typeName: "PSP34Error",
                      },
                    ],
                    index: 76,
                    name: "PSP34Error",
                  },
                  {
                    fields: [
                      {
                        type: 19,
                        typeName: "PausableError",
                      },
                    ],
                    index: 77,
                    name: "PausableError",
                  },
                  {
                    index: 78,
                    name: "CheckedOperations",
                  },
                ],
              },
            },
            path: ["bet_a0", "traits", "error", "Error"],
          },
        },
        {
          id: 13,
          type: {
            def: {
              primitive: "str",
            },
          },
        },
        {
          id: 14,
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
          id: 15,
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
          id: 16,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 13,
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
                        type: 13,
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
                        type: 17,
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
          id: 17,
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
          id: 18,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 13,
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
                        type: 13,
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
          id: 19,
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
          id: 20,
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
                        type: 9,
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
                type: 9,
              },
            ],
            path: ["Result"],
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
                        type: 9,
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
                type: 9,
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
                    index: 0,
                    name: "None",
                  },
                  {
                    fields: [
                      {
                        type: 6,
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
                type: 6,
              },
            ],
            path: ["Option"],
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
                        type: 7,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 9,
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
                type: 9,
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
                        type: 6,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 9,
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
                type: 9,
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
                        type: 26,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 9,
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
                type: 26,
              },
              {
                name: "E",
                type: 9,
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
          id: 27,
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
                        type: 9,
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
                type: 9,
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
                        type: 9,
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
                type: 9,
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
          id: 30,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 31,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 9,
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
                type: 31,
              },
              {
                name: "E",
                type: 9,
              },
            ],
            path: ["Result"],
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
                        type: 5,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 14,
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
                type: 14,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 32,
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
                        type: 9,
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
                type: 9,
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
                        type: 5,
                      },
                    ],
                    index: 0,
                    name: "Ok",
                  },
                  {
                    fields: [
                      {
                        type: 35,
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
                type: 35,
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
                        type: 13,
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
                        type: 14,
                        typeName: "OwnableError",
                      },
                    ],
                    index: 2,
                    name: "OwnableError",
                  },
                  {
                    fields: [
                      {
                        type: 15,
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
                        type: 9,
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
                type: 9,
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
                        type: 9,
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
                type: 9,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 39,
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
  staking_contract: contract[process.env.NODE_ENV],
};
