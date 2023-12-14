require("dotenv").config();

const contract = {
  testnet: {
    CONTRACT_ADDRESS: "5CmcPEczFP7bnKZPWUzwtvQyDhyNJebNeQUUEP996AdZ8RCg",
    CONTRACT_ABI: {
      source: {
        hash: "0x8ed4814727da2acdb32b0942ae52703d6b38435b8854f0fbabdbdadc89ea366f",
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
                label: "name",
                type: {
                  displayName: ["String"],
                  type: 7,
                },
              },
              {
                label: "symbol",
                type: {
                  displayName: ["String"],
                  type: 7,
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
                label: "betaz_token_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "public_mint_price",
                type: {
                  displayName: ["Balance"],
                  type: 5,
                },
              },
              {
                label: "session_total_ticket_amount",
                type: {
                  displayName: ["u128"],
                  type: 5,
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
            type: 5,
          },
          blockNumber: {
            displayName: ["BlockNumber"],
            type: 4,
          },
          chainExtension: {
            displayName: ["ChainExtension"],
            type: 61,
          },
          hash: {
            displayName: ["Hash"],
            type: 55,
          },
          maxEventTopics: 4,
          timestamp: {
            displayName: ["Timestamp"],
            type: 9,
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
                  type: 38,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "token_id",
                type: {
                  displayName: ["Id"],
                  type: 24,
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
                  type: 38,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "win_amount",
                type: {
                  displayName: ["Balance"],
                  type: 5,
                },
              },
            ],
            docs: [],
            label: "WithdrawWinAmountEvent",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "buyer",
                type: {
                  displayName: ["Option"],
                  type: 38,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "amounts",
                type: {
                  displayName: ["u64"],
                  type: 9,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "betaz_price",
                type: {
                  displayName: ["Balance"],
                  type: 5,
                },
              },
            ],
            docs: [],
            label: "PublicBuyEvent",
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
                label: "betaz_token_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "public_mint_price",
                type: {
                  displayName: ["Balance"],
                  type: 5,
                },
              },
              {
                label: "session_total_ticket_amount",
                type: {
                  displayName: ["u128"],
                  type: 5,
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
            args: [],
            default: false,
            docs: [],
            label: "mint",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0xcfdd9aa2",
          },
          {
            args: [
              {
                label: "amounts",
                type: {
                  displayName: ["u64"],
                  type: 9,
                },
              },
            ],
            default: false,
            docs: [],
            label: "multiple_mint_ticket",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x8108e407",
          },
          {
            args: [
              {
                label: "metadata",
                type: {
                  displayName: ["Vec"],
                  type: 22,
                },
              },
            ],
            default: false,
            docs: [],
            label: "mint_with_attributes",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0xf90b8f61",
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
                label: "win_amount",
                type: {
                  displayName: ["Balance"],
                  type: 5,
                },
              },
            ],
            default: false,
            docs: [],
            label: "update_win_amount_and_session_status",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x43ba3561",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: ["psp34burnable_external", "BurnInput1"],
                  type: 0,
                },
              },
              {
                label: "id",
                type: {
                  displayName: ["psp34burnable_external", "BurnInput2"],
                  type: 24,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PSP34Burnable::burn",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 25,
            },
            selector: "0x63c9877a",
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
                  type: 6,
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
              type: 27,
            },
            selector: "0x4dce7946",
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
                  type: 5,
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
                label: "token_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetAttributesInput1",
                  ],
                  type: 24,
                },
              },
              {
                label: "attributes",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetAttributesInput2",
                  ],
                  type: 28,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::get_attributes",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 29,
            },
            selector: "0x6fd81de8",
          },
          {
            args: [
              {
                label: "index",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetAttributeNameInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::get_attribute_name",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 30,
            },
            selector: "0xe4c75a10",
          },
          {
            args: [
              {
                label: "token_id",
                type: {
                  displayName: ["pandorapooltraits_external", "TokenUriInput1"],
                  type: 9,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::token_uri",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 30,
            },
            selector: "0x61f220f9",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::get_last_token_id",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 31,
            },
            selector: "0xa1688e52",
          },
          {
            args: [
              {
                label: "token_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "IsLockedNftInput1",
                  ],
                  type: 24,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::is_locked_nft",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 32,
            },
            selector: "0xd93bc3ea",
          },
          {
            args: [],
            default: false,
            docs: [" get ticket_amount_ratio"],
            label: "PandoraPoolTraits::get_session_total_ticket_amount",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 27,
            },
            selector: "0xe23d8b94",
          },
          {
            args: [
              {
                label: "uri",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "SetBaseUriInput1",
                  ],
                  type: 7,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::set_base_uri",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x316cfcc6",
          },
          {
            args: [],
            default: false,
            docs: [" get betaz address"],
            label: "PandoraPoolTraits::get_betaz_token_address",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 33,
            },
            selector: "0x121f4211",
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
              type: 34,
            },
            selector: "0xaadab449",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::get_attribute_count",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 34,
            },
            selector: "0x8c49ee28",
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
            docs: [],
            label: "PandoraPoolTraits::burn_betaz_token",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x6e6c7a17",
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
              type: 34,
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
              type: 35,
            },
            selector: "0xce2766b7",
          },
          {
            args: [
              {
                label: "token_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "UpdateNftInfoInput1",
                  ],
                  type: 24,
                },
              },
              {
                label: "session_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "UpdateNftInfoInput2",
                  ],
                  type: 4,
                },
              },
              {
                label: "bet_number",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "UpdateNftInfoInput3",
                  ],
                  type: 4,
                },
              },
              {
                label: "status",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "UpdateNftInfoInput4",
                  ],
                  type: 6,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::update_nft_info",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x02b4d724",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "SetBetazTokenAddressInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::set_betaz_token_address",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0xa292d613",
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
                  type: 24,
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
              type: 37,
            },
            selector: "0x5d742f27",
          },
          {
            args: [
              {
                label: "ticket_amount_ratio",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "SetSessionTotalTicketAmountInput1",
                  ],
                  type: 5,
                },
              },
            ],
            default: false,
            docs: [" set ticket_amount_ratio"],
            label: "PandoraPoolTraits::set_session_total_ticket_amount",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x5a776234",
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
                  type: 24,
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
                label: "amounts",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "PublicBuyInput1",
                  ],
                  type: 9,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::public_buy",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x1f9a66b6",
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
              type: 39,
            },
            selector: "0x7c4dc868",
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
                  type: 43,
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
              type: 27,
            },
            selector: "0x8ad46672",
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
                  type: 24,
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
              type: 44,
            },
            selector: "0x63a8ad62",
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
              type: 37,
            },
            selector: "0x4a992a16",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::get_locked_token_count",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 31,
            },
            selector: "0x8e3df689",
          },
          {
            args: [],
            default: false,
            docs: [" get public_mint_price"],
            label: "PandoraPoolTraits::get_public_mint_price",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 27,
            },
            selector: "0x055405b3",
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
              type: 27,
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
                    "UpdateBetSessionInput1",
                  ],
                  type: 4,
                },
              },
              {
                label: "random_number",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "UpdateBetSessionInput2",
                  ],
                  type: 4,
                },
              },
              {
                label: "status_type",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "UpdateBetSessionInput3",
                  ],
                  type: 42,
                },
              },
            ],
            default: false,
            docs: [" update bet session"],
            label: "PandoraPoolTraits::update_bet_session",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x09c6bb92",
          },
          {
            args: [
              {
                label: "token_id",
                type: {
                  displayName: ["pandorapooltraits_external", "LockInput1"],
                  type: 24,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::lock",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x3b9f811d",
          },
          {
            args: [
              {
                label: "price",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "SetPublicMintPriceInput1",
                  ],
                  type: 5,
                },
              },
            ],
            default: false,
            docs: [" set public_mint_price"],
            label: "PandoraPoolTraits::set_public_mint_price",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0xb583898c",
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
                  type: 6,
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
            args: [],
            default: false,
            docs: [" get is locked"],
            label: "PandoraPoolTraits::get_is_locked",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 32,
            },
            selector: "0x225447fa",
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
                label: "winner",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "WithdrawWinAmountInput1",
                  ],
                  type: 0,
                },
              },
              {
                label: "session_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "WithdrawWinAmountInput2",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::withdraw_win_amount",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x0ec48697",
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
              type: 27,
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
                  type: 5,
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
                label: "token_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "SetMultipleAttributesInput1",
                  ],
                  type: 24,
                },
              },
              {
                label: "metadata",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "SetMultipleAttributesInput2",
                  ],
                  type: 22,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::set_multiple_attributes",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x86f07c5e",
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
                  type: 5,
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
              type: 37,
            },
            selector: "0xd130f5ed",
          },
          {
            args: [
              {
                label: "owner",
                type: {
                  displayName: ["psp34_external", "AllowanceInput1"],
                  type: 0,
                },
              },
              {
                label: "operator",
                type: {
                  displayName: ["psp34_external", "AllowanceInput2"],
                  type: 0,
                },
              },
              {
                label: "id",
                type: {
                  displayName: ["psp34_external", "AllowanceInput3"],
                  type: 47,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PSP34::allowance",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 32,
            },
            selector: "0x4790f55a",
          },
          {
            args: [
              {
                label: "operator",
                type: {
                  displayName: ["psp34_external", "ApproveInput1"],
                  type: 0,
                },
              },
              {
                label: "id",
                type: {
                  displayName: ["psp34_external", "ApproveInput2"],
                  type: 47,
                },
              },
              {
                label: "approved",
                type: {
                  displayName: ["psp34_external", "ApproveInput3"],
                  type: 6,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PSP34::approve",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 25,
            },
            selector: "0x1932a8b0",
          },
          {
            args: [
              {
                label: "to",
                type: {
                  displayName: ["psp34_external", "TransferInput1"],
                  type: 0,
                },
              },
              {
                label: "id",
                type: {
                  displayName: ["psp34_external", "TransferInput2"],
                  type: 24,
                },
              },
              {
                label: "data",
                type: {
                  displayName: ["psp34_external", "TransferInput3"],
                  type: 8,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PSP34::transfer",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 25,
            },
            selector: "0x3128d61b",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "PSP34::total_supply",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 27,
            },
            selector: "0x628413fe",
          },
          {
            args: [
              {
                label: "owner",
                type: {
                  displayName: ["psp34_external", "BalanceOfInput1"],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PSP34::balance_of",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 34,
            },
            selector: "0xcde7e55f",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "PSP34::collection_id",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 48,
            },
            selector: "0xffa27a5f",
          },
          {
            args: [
              {
                label: "id",
                type: {
                  displayName: ["psp34_external", "OwnerOfInput1"],
                  type: 24,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PSP34::owner_of",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 37,
            },
            selector: "0x1168624d",
          },
          {
            args: [
              {
                label: "id",
                type: {
                  displayName: ["psp34metadata_external", "GetAttributeInput1"],
                  type: 24,
                },
              },
              {
                label: "key",
                type: {
                  displayName: ["psp34metadata_external", "GetAttributeInput2"],
                  type: 7,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PSP34Metadata::get_attribute",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 49,
            },
            selector: "0xf19d48d1",
          },
          {
            args: [
              {
                label: "owner",
                type: {
                  displayName: [
                    "psp34enumerable_external",
                    "OwnersTokenByIndexInput1",
                  ],
                  type: 0,
                },
              },
              {
                label: "index",
                type: {
                  displayName: [
                    "psp34enumerable_external",
                    "OwnersTokenByIndexInput2",
                  ],
                  type: 5,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PSP34Enumerable::owners_token_by_index",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 51,
            },
            selector: "0x3bcfb511",
          },
          {
            args: [
              {
                label: "index",
                type: {
                  displayName: [
                    "psp34enumerable_external",
                    "TokenByIndexInput1",
                  ],
                  type: 5,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PSP34Enumerable::token_by_index",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 51,
            },
            selector: "0xcd0340d0",
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
              type: 37,
            },
            selector: "0x4fa43c8c",
          },
          {
            args: [
              {
                label: "new_owner",
                type: {
                  displayName: ["ownable_external", "TransferOwnershipInput1"],
                  type: 38,
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
              type: 53,
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
              type: 53,
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
              type: 32,
            },
            selector: "0xd123ce11",
          },
          {
            args: [
              {
                label: "new_code_hash",
                type: {
                  displayName: ["upgradeable_external", "SetCodeHashInput1"],
                  type: 55,
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
              type: 56,
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
              type: 34,
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
                  type: 38,
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
              type: 32,
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
                  type: 38,
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
              type: 59,
            },
            selector: "0x4ac062fd",
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
                  type: 38,
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
              type: 59,
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
                  type: 38,
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
              type: 59,
            },
            selector: "0xeaf1248a",
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
                                leaf: {
                                  key: "0x252d8eda",
                                  ty: 0,
                                },
                              },
                              root_key: "0x252d8eda",
                            },
                          },
                          name: "token_owner",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0xcb1393da",
                                  ty: 3,
                                },
                              },
                              root_key: "0xcb1393da",
                            },
                          },
                          name: "operator_approvals",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0xf957bbd8",
                                  ty: 4,
                                },
                              },
                              root_key: "0xf957bbd8",
                            },
                          },
                          name: "owned_tokens_count",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0xe3d7d04e",
                                  ty: 5,
                                },
                              },
                              root_key: "0xe3d7d04e",
                            },
                          },
                          name: "total_supply",
                        },
                      ],
                      name: "Data",
                    },
                  },
                  name: "psp34",
                },
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
                                  ty: 6,
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
                                  ty: 3,
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
                                  key: "0xdc803caf",
                                  ty: 7,
                                },
                              },
                              root_key: "0xdc803caf",
                            },
                          },
                          name: "attributes",
                        },
                      ],
                      name: "Data",
                    },
                  },
                  name: "metadata",
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
                                  key: "0x19faf13f",
                                  ty: 8,
                                },
                              },
                              root_key: "0x19faf13f",
                            },
                          },
                          name: "attribute_names",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x0636c76a",
                                  ty: 6,
                                },
                              },
                              root_key: "0x0636c76a",
                            },
                          },
                          name: "is_attribute",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0xb38e56fe",
                                  ty: 6,
                                },
                              },
                              root_key: "0xb38e56fe",
                            },
                          },
                          name: "locked_tokens",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 9,
                            },
                          },
                          name: "last_token_id",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 4,
                            },
                          },
                          name: "attribute_count",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 9,
                            },
                          },
                          name: "locked_token_count",
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
                            leaf: {
                              key: "0x00000000",
                              ty: 6,
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
                            leaf: {
                              key: "0x00000000",
                              ty: 5,
                            },
                          },
                          name: "session_total_ticket_amount",
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
                                              ty: 10,
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
                                              ty: 9,
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
                                              ty: 5,
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
                                              ty: 8,
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
                              ty: 5,
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
                                          ty: 9,
                                        },
                                      },
                                      name: "time",
                                    },
                                    {
                                      layout: {
                                        leaf: {
                                          key: "0x806a82b1",
                                          ty: 6,
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
                            leaf: {
                              key: "0x00000000",
                              ty: 5,
                            },
                          },
                          name: "public_mint_price",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x00ae2bdd",
                                  ty: 5,
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
                                              ty: 10,
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
                                              ty: 9,
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
                                              ty: 5,
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
                                              ty: 8,
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
                                          ty: 3,
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
                                  key: "0x2d2b79f3",
                                  ty: 0,
                                },
                              },
                              root_key: "0x2d2b79f3",
                            },
                          },
                          name: "token_owner",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x5b0030d8",
                                  ty: 3,
                                },
                              },
                              root_key: "0x5b0030d8",
                            },
                          },
                          name: "operator_approvals",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                enum: {
                                  dispatchKey: "0x1bd7db1e",
                                  name: "Id",
                                  variants: {
                                    0: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0x1bd7db1e",
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
                                              key: "0x1bd7db1e",
                                              ty: 10,
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
                                              key: "0x1bd7db1e",
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
                                              key: "0x1bd7db1e",
                                              ty: 9,
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
                                              key: "0x1bd7db1e",
                                              ty: 5,
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
                                              key: "0x1bd7db1e",
                                              ty: 8,
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
                              root_key: "0x1bd7db1e",
                            },
                          },
                          name: "balances",
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
                                          ty: 3,
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
              tuple: [],
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
              primitive: "u128",
            },
          },
        },
        {
          id: 6,
          type: {
            def: {
              primitive: "bool",
            },
          },
        },
        {
          id: 7,
          type: {
            def: {
              primitive: "str",
            },
          },
        },
        {
          id: 8,
          type: {
            def: {
              sequence: {
                type: 2,
              },
            },
          },
        },
        {
          id: 9,
          type: {
            def: {
              primitive: "u64",
            },
          },
        },
        {
          id: 10,
          type: {
            def: {
              primitive: "u16",
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
                        type: 3,
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
                type: 3,
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
                        type: 7,
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
                    fields: [
                      {
                        type: 16,
                        typeName: "OwnableError",
                      },
                    ],
                    index: 72,
                    name: "OwnableError",
                  },
                  {
                    fields: [
                      {
                        type: 17,
                        typeName: "AccessControlError",
                      },
                    ],
                    index: 73,
                    name: "AccessControlError",
                  },
                  {
                    fields: [
                      {
                        type: 18,
                        typeName: "PSP22Error",
                      },
                    ],
                    index: 74,
                    name: "PSP22Error",
                  },
                  {
                    fields: [
                      {
                        type: 20,
                        typeName: "PSP34Error",
                      },
                    ],
                    index: 75,
                    name: "PSP34Error",
                  },
                  {
                    fields: [
                      {
                        type: 21,
                        typeName: "PausableError",
                      },
                    ],
                    index: 76,
                    name: "PausableError",
                  },
                  {
                    index: 77,
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
                        type: 7,
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
                        type: 7,
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
                        type: 9,
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
                        type: 7,
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
                        type: 7,
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
              sequence: {
                type: 23,
              },
            },
          },
        },
        {
          id: 23,
          type: {
            def: {
              tuple: [7, 7],
            },
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
                        type: 10,
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
                        type: 9,
                        typeName: "u64",
                      },
                    ],
                    index: 3,
                    name: "U64",
                  },
                  {
                    fields: [
                      {
                        type: 5,
                        typeName: "u128",
                      },
                    ],
                    index: 4,
                    name: "U128",
                  },
                  {
                    fields: [
                      {
                        type: 8,
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
                type: 26,
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
          id: 26,
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
                        type: 20,
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
                type: 20,
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
          id: 28,
          type: {
            def: {
              sequence: {
                type: 7,
              },
            },
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
                        type: 28,
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
                type: 28,
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
          id: 31,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 9,
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
                type: 9,
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
                        type: 6,
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
                type: 6,
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
          id: 34,
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
                        type: 5,
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
                type: 5,
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
                type: 40,
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
          id: 40,
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
                        type: 41,
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
                type: 41,
              },
            ],
            path: ["Option"],
          },
        },
        {
          id: 41,
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
                    type: 42,
                    typeName: "SessionsStatusType",
                  },
                ],
              },
            },
            path: ["bet_a0", "impls", "pandora", "data", "SessionInfo"],
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
          id: 43,
          type: {
            def: {
              sequence: {
                type: 24,
              },
            },
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
                    index: 0,
                    name: "None",
                  },
                  {
                    fields: [
                      {
                        type: 46,
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
                type: 46,
              },
            ],
            path: ["Option"],
          },
        },
        {
          id: 46,
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
                    type: 9,
                    typeName: "Timestamp",
                  },
                  {
                    name: "used",
                    type: 6,
                    typeName: "bool",
                  },
                ],
              },
            },
            path: ["bet_a0", "impls", "pandora", "data", "NFTInfomation"],
          },
        },
        {
          id: 47,
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
                        type: 24,
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
                type: 24,
              },
            ],
            path: ["Option"],
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
          id: 49,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 50,
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
                type: 50,
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
          id: 50,
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
          id: 51,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 52,
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
                type: 52,
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
          id: 52,
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
                        type: 20,
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
                type: 20,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 53,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 54,
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
                type: 54,
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
          id: 54,
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
                type: 3,
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
          id: 55,
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
          id: 56,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 57,
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
                type: 57,
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
          id: 57,
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
                        type: 58,
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
                type: 58,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 58,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 7,
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
          id: 59,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 60,
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
                type: 60,
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
          id: 60,
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
                type: 3,
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
          id: 61,
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
    CONTRACT_ADDRESS: "5H7azQyF4jNVwynYi3mv8qmQ3Cdq6wHNqoyL5DFTb7j7emaP",
    CONTRACT_ABI: {
      source: {
        hash: "0x8ed4814727da2acdb32b0942ae52703d6b38435b8854f0fbabdbdadc89ea366f",
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
                label: "name",
                type: {
                  displayName: ["String"],
                  type: 7,
                },
              },
              {
                label: "symbol",
                type: {
                  displayName: ["String"],
                  type: 7,
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
                label: "betaz_token_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "public_mint_price",
                type: {
                  displayName: ["Balance"],
                  type: 5,
                },
              },
              {
                label: "session_total_ticket_amount",
                type: {
                  displayName: ["u128"],
                  type: 5,
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
            type: 5,
          },
          blockNumber: {
            displayName: ["BlockNumber"],
            type: 4,
          },
          chainExtension: {
            displayName: ["ChainExtension"],
            type: 61,
          },
          hash: {
            displayName: ["Hash"],
            type: 55,
          },
          maxEventTopics: 4,
          timestamp: {
            displayName: ["Timestamp"],
            type: 9,
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
                  type: 38,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "token_id",
                type: {
                  displayName: ["Id"],
                  type: 24,
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
                  type: 38,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "win_amount",
                type: {
                  displayName: ["Balance"],
                  type: 5,
                },
              },
            ],
            docs: [],
            label: "WithdrawWinAmountEvent",
          },
          {
            args: [
              {
                docs: [],
                indexed: false,
                label: "buyer",
                type: {
                  displayName: ["Option"],
                  type: 38,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "amounts",
                type: {
                  displayName: ["u64"],
                  type: 9,
                },
              },
              {
                docs: [],
                indexed: false,
                label: "betaz_price",
                type: {
                  displayName: ["Balance"],
                  type: 5,
                },
              },
            ],
            docs: [],
            label: "PublicBuyEvent",
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
                label: "betaz_token_address",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
              {
                label: "public_mint_price",
                type: {
                  displayName: ["Balance"],
                  type: 5,
                },
              },
              {
                label: "session_total_ticket_amount",
                type: {
                  displayName: ["u128"],
                  type: 5,
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
            args: [],
            default: false,
            docs: [],
            label: "mint",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0xcfdd9aa2",
          },
          {
            args: [
              {
                label: "amounts",
                type: {
                  displayName: ["u64"],
                  type: 9,
                },
              },
            ],
            default: false,
            docs: [],
            label: "multiple_mint_ticket",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x8108e407",
          },
          {
            args: [
              {
                label: "metadata",
                type: {
                  displayName: ["Vec"],
                  type: 22,
                },
              },
            ],
            default: false,
            docs: [],
            label: "mint_with_attributes",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0xf90b8f61",
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
                label: "win_amount",
                type: {
                  displayName: ["Balance"],
                  type: 5,
                },
              },
            ],
            default: false,
            docs: [],
            label: "update_win_amount_and_session_status",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x43ba3561",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: ["psp34burnable_external", "BurnInput1"],
                  type: 0,
                },
              },
              {
                label: "id",
                type: {
                  displayName: ["psp34burnable_external", "BurnInput2"],
                  type: 24,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PSP34Burnable::burn",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 25,
            },
            selector: "0x63c9877a",
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
                  type: 6,
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
              type: 27,
            },
            selector: "0x4dce7946",
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
                  type: 5,
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
                label: "token_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetAttributesInput1",
                  ],
                  type: 24,
                },
              },
              {
                label: "attributes",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetAttributesInput2",
                  ],
                  type: 28,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::get_attributes",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 29,
            },
            selector: "0x6fd81de8",
          },
          {
            args: [
              {
                label: "index",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "GetAttributeNameInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::get_attribute_name",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 30,
            },
            selector: "0xe4c75a10",
          },
          {
            args: [
              {
                label: "token_id",
                type: {
                  displayName: ["pandorapooltraits_external", "TokenUriInput1"],
                  type: 9,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::token_uri",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 30,
            },
            selector: "0x61f220f9",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::get_last_token_id",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 31,
            },
            selector: "0xa1688e52",
          },
          {
            args: [
              {
                label: "token_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "IsLockedNftInput1",
                  ],
                  type: 24,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::is_locked_nft",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 32,
            },
            selector: "0xd93bc3ea",
          },
          {
            args: [],
            default: false,
            docs: [" get ticket_amount_ratio"],
            label: "PandoraPoolTraits::get_session_total_ticket_amount",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 27,
            },
            selector: "0xe23d8b94",
          },
          {
            args: [
              {
                label: "uri",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "SetBaseUriInput1",
                  ],
                  type: 7,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::set_base_uri",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x316cfcc6",
          },
          {
            args: [],
            default: false,
            docs: [" get betaz address"],
            label: "PandoraPoolTraits::get_betaz_token_address",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 33,
            },
            selector: "0x121f4211",
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
              type: 34,
            },
            selector: "0xaadab449",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::get_attribute_count",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 34,
            },
            selector: "0x8c49ee28",
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
            docs: [],
            label: "PandoraPoolTraits::burn_betaz_token",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x6e6c7a17",
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
              type: 34,
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
              type: 35,
            },
            selector: "0xce2766b7",
          },
          {
            args: [
              {
                label: "token_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "UpdateNftInfoInput1",
                  ],
                  type: 24,
                },
              },
              {
                label: "session_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "UpdateNftInfoInput2",
                  ],
                  type: 4,
                },
              },
              {
                label: "bet_number",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "UpdateNftInfoInput3",
                  ],
                  type: 4,
                },
              },
              {
                label: "status",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "UpdateNftInfoInput4",
                  ],
                  type: 6,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::update_nft_info",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x02b4d724",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "SetBetazTokenAddressInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::set_betaz_token_address",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0xa292d613",
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
                  type: 24,
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
              type: 37,
            },
            selector: "0x5d742f27",
          },
          {
            args: [
              {
                label: "ticket_amount_ratio",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "SetSessionTotalTicketAmountInput1",
                  ],
                  type: 5,
                },
              },
            ],
            default: false,
            docs: [" set ticket_amount_ratio"],
            label: "PandoraPoolTraits::set_session_total_ticket_amount",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x5a776234",
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
                  type: 24,
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
                label: "amounts",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "PublicBuyInput1",
                  ],
                  type: 9,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::public_buy",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x1f9a66b6",
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
              type: 39,
            },
            selector: "0x7c4dc868",
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
                  type: 43,
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
              type: 27,
            },
            selector: "0x8ad46672",
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
                  type: 24,
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
              type: 44,
            },
            selector: "0x63a8ad62",
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
              type: 37,
            },
            selector: "0x4a992a16",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::get_locked_token_count",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 31,
            },
            selector: "0x8e3df689",
          },
          {
            args: [],
            default: false,
            docs: [" get public_mint_price"],
            label: "PandoraPoolTraits::get_public_mint_price",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 27,
            },
            selector: "0x055405b3",
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
              type: 27,
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
                    "UpdateBetSessionInput1",
                  ],
                  type: 4,
                },
              },
              {
                label: "random_number",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "UpdateBetSessionInput2",
                  ],
                  type: 4,
                },
              },
              {
                label: "status_type",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "UpdateBetSessionInput3",
                  ],
                  type: 42,
                },
              },
            ],
            default: false,
            docs: [" update bet session"],
            label: "PandoraPoolTraits::update_bet_session",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x09c6bb92",
          },
          {
            args: [
              {
                label: "token_id",
                type: {
                  displayName: ["pandorapooltraits_external", "LockInput1"],
                  type: 24,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::lock",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x3b9f811d",
          },
          {
            args: [
              {
                label: "price",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "SetPublicMintPriceInput1",
                  ],
                  type: 5,
                },
              },
            ],
            default: false,
            docs: [" set public_mint_price"],
            label: "PandoraPoolTraits::set_public_mint_price",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0xb583898c",
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
                  type: 6,
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
            args: [],
            default: false,
            docs: [" get is locked"],
            label: "PandoraPoolTraits::get_is_locked",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 32,
            },
            selector: "0x225447fa",
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
                label: "winner",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "WithdrawWinAmountInput1",
                  ],
                  type: 0,
                },
              },
              {
                label: "session_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "WithdrawWinAmountInput2",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::withdraw_win_amount",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x0ec48697",
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
              type: 27,
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
                  type: 5,
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
                label: "token_id",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "SetMultipleAttributesInput1",
                  ],
                  type: 24,
                },
              },
              {
                label: "metadata",
                type: {
                  displayName: [
                    "pandorapooltraits_external",
                    "SetMultipleAttributesInput2",
                  ],
                  type: 22,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PandoraPoolTraits::set_multiple_attributes",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x86f07c5e",
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
                  type: 5,
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
              type: 37,
            },
            selector: "0xd130f5ed",
          },
          {
            args: [
              {
                label: "owner",
                type: {
                  displayName: ["psp34_external", "AllowanceInput1"],
                  type: 0,
                },
              },
              {
                label: "operator",
                type: {
                  displayName: ["psp34_external", "AllowanceInput2"],
                  type: 0,
                },
              },
              {
                label: "id",
                type: {
                  displayName: ["psp34_external", "AllowanceInput3"],
                  type: 47,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PSP34::allowance",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 32,
            },
            selector: "0x4790f55a",
          },
          {
            args: [
              {
                label: "operator",
                type: {
                  displayName: ["psp34_external", "ApproveInput1"],
                  type: 0,
                },
              },
              {
                label: "id",
                type: {
                  displayName: ["psp34_external", "ApproveInput2"],
                  type: 47,
                },
              },
              {
                label: "approved",
                type: {
                  displayName: ["psp34_external", "ApproveInput3"],
                  type: 6,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PSP34::approve",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 25,
            },
            selector: "0x1932a8b0",
          },
          {
            args: [
              {
                label: "to",
                type: {
                  displayName: ["psp34_external", "TransferInput1"],
                  type: 0,
                },
              },
              {
                label: "id",
                type: {
                  displayName: ["psp34_external", "TransferInput2"],
                  type: 24,
                },
              },
              {
                label: "data",
                type: {
                  displayName: ["psp34_external", "TransferInput3"],
                  type: 8,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PSP34::transfer",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 25,
            },
            selector: "0x3128d61b",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "PSP34::total_supply",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 27,
            },
            selector: "0x628413fe",
          },
          {
            args: [
              {
                label: "owner",
                type: {
                  displayName: ["psp34_external", "BalanceOfInput1"],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PSP34::balance_of",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 34,
            },
            selector: "0xcde7e55f",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "PSP34::collection_id",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 48,
            },
            selector: "0xffa27a5f",
          },
          {
            args: [
              {
                label: "id",
                type: {
                  displayName: ["psp34_external", "OwnerOfInput1"],
                  type: 24,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PSP34::owner_of",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 37,
            },
            selector: "0x1168624d",
          },
          {
            args: [
              {
                label: "id",
                type: {
                  displayName: ["psp34metadata_external", "GetAttributeInput1"],
                  type: 24,
                },
              },
              {
                label: "key",
                type: {
                  displayName: ["psp34metadata_external", "GetAttributeInput2"],
                  type: 7,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PSP34Metadata::get_attribute",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 49,
            },
            selector: "0xf19d48d1",
          },
          {
            args: [
              {
                label: "owner",
                type: {
                  displayName: [
                    "psp34enumerable_external",
                    "OwnersTokenByIndexInput1",
                  ],
                  type: 0,
                },
              },
              {
                label: "index",
                type: {
                  displayName: [
                    "psp34enumerable_external",
                    "OwnersTokenByIndexInput2",
                  ],
                  type: 5,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PSP34Enumerable::owners_token_by_index",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 51,
            },
            selector: "0x3bcfb511",
          },
          {
            args: [
              {
                label: "index",
                type: {
                  displayName: [
                    "psp34enumerable_external",
                    "TokenByIndexInput1",
                  ],
                  type: 5,
                },
              },
            ],
            default: false,
            docs: [],
            label: "PSP34Enumerable::token_by_index",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 51,
            },
            selector: "0xcd0340d0",
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
              type: 37,
            },
            selector: "0x4fa43c8c",
          },
          {
            args: [
              {
                label: "new_owner",
                type: {
                  displayName: ["ownable_external", "TransferOwnershipInput1"],
                  type: 38,
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
              type: 53,
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
              type: 53,
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
              type: 32,
            },
            selector: "0xd123ce11",
          },
          {
            args: [
              {
                label: "new_code_hash",
                type: {
                  displayName: ["upgradeable_external", "SetCodeHashInput1"],
                  type: 55,
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
              type: 56,
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
              type: 34,
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
                  type: 38,
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
              type: 32,
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
                  type: 38,
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
              type: 59,
            },
            selector: "0x4ac062fd",
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
                  type: 38,
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
              type: 59,
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
                  type: 38,
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
              type: 59,
            },
            selector: "0xeaf1248a",
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
                                leaf: {
                                  key: "0x252d8eda",
                                  ty: 0,
                                },
                              },
                              root_key: "0x252d8eda",
                            },
                          },
                          name: "token_owner",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0xcb1393da",
                                  ty: 3,
                                },
                              },
                              root_key: "0xcb1393da",
                            },
                          },
                          name: "operator_approvals",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0xf957bbd8",
                                  ty: 4,
                                },
                              },
                              root_key: "0xf957bbd8",
                            },
                          },
                          name: "owned_tokens_count",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0xe3d7d04e",
                                  ty: 5,
                                },
                              },
                              root_key: "0xe3d7d04e",
                            },
                          },
                          name: "total_supply",
                        },
                      ],
                      name: "Data",
                    },
                  },
                  name: "psp34",
                },
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
                                  ty: 6,
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
                                  ty: 3,
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
                                  key: "0xdc803caf",
                                  ty: 7,
                                },
                              },
                              root_key: "0xdc803caf",
                            },
                          },
                          name: "attributes",
                        },
                      ],
                      name: "Data",
                    },
                  },
                  name: "metadata",
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
                                  key: "0x19faf13f",
                                  ty: 8,
                                },
                              },
                              root_key: "0x19faf13f",
                            },
                          },
                          name: "attribute_names",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x0636c76a",
                                  ty: 6,
                                },
                              },
                              root_key: "0x0636c76a",
                            },
                          },
                          name: "is_attribute",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0xb38e56fe",
                                  ty: 6,
                                },
                              },
                              root_key: "0xb38e56fe",
                            },
                          },
                          name: "locked_tokens",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 9,
                            },
                          },
                          name: "last_token_id",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 4,
                            },
                          },
                          name: "attribute_count",
                        },
                        {
                          layout: {
                            leaf: {
                              key: "0x00000000",
                              ty: 9,
                            },
                          },
                          name: "locked_token_count",
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
                            leaf: {
                              key: "0x00000000",
                              ty: 6,
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
                            leaf: {
                              key: "0x00000000",
                              ty: 5,
                            },
                          },
                          name: "session_total_ticket_amount",
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
                                              ty: 10,
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
                                              ty: 9,
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
                                              ty: 5,
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
                                              ty: 8,
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
                              ty: 5,
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
                                          ty: 9,
                                        },
                                      },
                                      name: "time",
                                    },
                                    {
                                      layout: {
                                        leaf: {
                                          key: "0x806a82b1",
                                          ty: 6,
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
                            leaf: {
                              key: "0x00000000",
                              ty: 5,
                            },
                          },
                          name: "public_mint_price",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x00ae2bdd",
                                  ty: 5,
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
                                              ty: 10,
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
                                              ty: 9,
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
                                              ty: 5,
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
                                              ty: 8,
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
                                          ty: 3,
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
                                  key: "0x2d2b79f3",
                                  ty: 0,
                                },
                              },
                              root_key: "0x2d2b79f3",
                            },
                          },
                          name: "token_owner",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x5b0030d8",
                                  ty: 3,
                                },
                              },
                              root_key: "0x5b0030d8",
                            },
                          },
                          name: "operator_approvals",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                enum: {
                                  dispatchKey: "0x1bd7db1e",
                                  name: "Id",
                                  variants: {
                                    0: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: "0x1bd7db1e",
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
                                              key: "0x1bd7db1e",
                                              ty: 10,
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
                                              key: "0x1bd7db1e",
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
                                              key: "0x1bd7db1e",
                                              ty: 9,
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
                                              key: "0x1bd7db1e",
                                              ty: 5,
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
                                              key: "0x1bd7db1e",
                                              ty: 8,
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
                              root_key: "0x1bd7db1e",
                            },
                          },
                          name: "balances",
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
                                          ty: 3,
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
              tuple: [],
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
              primitive: "u128",
            },
          },
        },
        {
          id: 6,
          type: {
            def: {
              primitive: "bool",
            },
          },
        },
        {
          id: 7,
          type: {
            def: {
              primitive: "str",
            },
          },
        },
        {
          id: 8,
          type: {
            def: {
              sequence: {
                type: 2,
              },
            },
          },
        },
        {
          id: 9,
          type: {
            def: {
              primitive: "u64",
            },
          },
        },
        {
          id: 10,
          type: {
            def: {
              primitive: "u16",
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
                        type: 3,
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
                type: 3,
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
                        type: 7,
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
                    fields: [
                      {
                        type: 16,
                        typeName: "OwnableError",
                      },
                    ],
                    index: 72,
                    name: "OwnableError",
                  },
                  {
                    fields: [
                      {
                        type: 17,
                        typeName: "AccessControlError",
                      },
                    ],
                    index: 73,
                    name: "AccessControlError",
                  },
                  {
                    fields: [
                      {
                        type: 18,
                        typeName: "PSP22Error",
                      },
                    ],
                    index: 74,
                    name: "PSP22Error",
                  },
                  {
                    fields: [
                      {
                        type: 20,
                        typeName: "PSP34Error",
                      },
                    ],
                    index: 75,
                    name: "PSP34Error",
                  },
                  {
                    fields: [
                      {
                        type: 21,
                        typeName: "PausableError",
                      },
                    ],
                    index: 76,
                    name: "PausableError",
                  },
                  {
                    index: 77,
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
                        type: 7,
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
                        type: 7,
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
                        type: 9,
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
                        type: 7,
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
                        type: 7,
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
              sequence: {
                type: 23,
              },
            },
          },
        },
        {
          id: 23,
          type: {
            def: {
              tuple: [7, 7],
            },
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
                        type: 10,
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
                        type: 9,
                        typeName: "u64",
                      },
                    ],
                    index: 3,
                    name: "U64",
                  },
                  {
                    fields: [
                      {
                        type: 5,
                        typeName: "u128",
                      },
                    ],
                    index: 4,
                    name: "U128",
                  },
                  {
                    fields: [
                      {
                        type: 8,
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
                type: 26,
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
          id: 26,
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
                        type: 20,
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
                type: 20,
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
          id: 28,
          type: {
            def: {
              sequence: {
                type: 7,
              },
            },
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
                        type: 28,
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
                type: 28,
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
          id: 31,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 9,
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
                type: 9,
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
                        type: 6,
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
                type: 6,
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
          id: 34,
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
                        type: 5,
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
                type: 5,
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
                type: 40,
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
          id: 40,
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
                        type: 41,
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
                type: 41,
              },
            ],
            path: ["Option"],
          },
        },
        {
          id: 41,
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
                    type: 42,
                    typeName: "SessionsStatusType",
                  },
                ],
              },
            },
            path: ["bet_a0", "impls", "pandora", "data", "SessionInfo"],
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
          id: 43,
          type: {
            def: {
              sequence: {
                type: 24,
              },
            },
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
                    index: 0,
                    name: "None",
                  },
                  {
                    fields: [
                      {
                        type: 46,
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
                type: 46,
              },
            ],
            path: ["Option"],
          },
        },
        {
          id: 46,
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
                    type: 9,
                    typeName: "Timestamp",
                  },
                  {
                    name: "used",
                    type: 6,
                    typeName: "bool",
                  },
                ],
              },
            },
            path: ["bet_a0", "impls", "pandora", "data", "NFTInfomation"],
          },
        },
        {
          id: 47,
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
                        type: 24,
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
                type: 24,
              },
            ],
            path: ["Option"],
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
          id: 49,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 50,
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
                type: 50,
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
          id: 50,
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
          id: 51,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 52,
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
                type: 52,
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
          id: 52,
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
                        type: 20,
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
                type: 20,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 53,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 54,
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
                type: 54,
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
          id: 54,
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
                type: 3,
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
          id: 55,
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
          id: 56,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 57,
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
                type: 57,
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
          id: 57,
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
                        type: 58,
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
                type: 58,
              },
            ],
            path: ["Result"],
          },
        },
        {
          id: 58,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 7,
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
          id: 59,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 60,
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
                type: 60,
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
          id: 60,
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
                type: 3,
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
          id: 61,
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
