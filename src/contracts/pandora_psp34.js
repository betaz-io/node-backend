require("dotenv").config();

const contract = {
  testnet: {
    CONTRACT_ADDRESS: "5CNuQehfBceWW7sevtKFAbTSg57eGiHm6kMeg8F94KuAam1f",
    CONTRACT_ABI: {
      source: {
        hash: "0x5932c35d1602506d8df581a4b3e69c87be866310a569d3fcc7eacd72e1a4a661",
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
        name: "pandora_psp34_standard",
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
            type: 51,
          },
          hash: {
            displayName: ["Hash"],
            type: 45,
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
                label: "buyer",
                type: {
                  displayName: ["Option"],
                  type: 37,
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
                label: "price",
                type: {
                  displayName: [
                    "psp34traits_external",
                    "SetPublicMintPriceInput1",
                  ],
                  type: 5,
                },
              },
            ],
            default: false,
            docs: [" set public_mint_price"],
            label: "Psp34Traits::set_public_mint_price",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0xdc68474a",
          },
          {
            args: [
              {
                label: "index",
                type: {
                  displayName: [
                    "psp34traits_external",
                    "GetAttributeNameInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [],
            label: "Psp34Traits::get_attribute_name",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 27,
            },
            selector: "0xfcfe34de",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "Psp34Traits::get_attribute_count",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 28,
            },
            selector: "0x61c50d69",
          },
          {
            args: [
              {
                label: "uri",
                type: {
                  displayName: ["psp34traits_external", "SetBaseUriInput1"],
                  type: 7,
                },
              },
            ],
            default: false,
            docs: [],
            label: "Psp34Traits::set_base_uri",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x4de6850b",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "Psp34Traits::get_locked_token_count",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 29,
            },
            selector: "0x8fe2ce73",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "Psp34Traits::get_last_token_id",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 29,
            },
            selector: "0x6f315836",
          },
          {
            args: [
              {
                label: "token_id",
                type: {
                  displayName: ["psp34traits_external", "GetAttributesInput1"],
                  type: 24,
                },
              },
              {
                label: "attributes",
                type: {
                  displayName: ["psp34traits_external", "GetAttributesInput2"],
                  type: 30,
                },
              },
            ],
            default: false,
            docs: [],
            label: "Psp34Traits::get_attributes",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 31,
            },
            selector: "0x18209102",
          },
          {
            args: [],
            default: false,
            docs: [" get betaz address"],
            label: "Psp34Traits::get_betaz_token_address",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 32,
            },
            selector: "0x2e2ec730",
          },
          {
            args: [
              {
                label: "state",
                type: {
                  displayName: ["psp34traits_external", "ChangeStateInput1"],
                  type: 6,
                },
              },
            ],
            default: false,
            docs: [],
            label: "Psp34Traits::change_state",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x1a6ca1a3",
          },
          {
            args: [
              {
                label: "amounts",
                type: {
                  displayName: ["psp34traits_external", "PublicBuyInput1"],
                  type: 9,
                },
              },
            ],
            default: false,
            docs: [],
            label: "Psp34Traits::public_buy",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0xdbce2be7",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: [
                    "psp34traits_external",
                    "SetBetazTokenAddressInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [],
            label: "Psp34Traits::set_betaz_token_address",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0xf33ef53a",
          },
          {
            args: [
              {
                label: "token_id",
                type: {
                  displayName: [
                    "psp34traits_external",
                    "SetMultipleAttributesInput1",
                  ],
                  type: 24,
                },
              },
              {
                label: "metadata",
                type: {
                  displayName: [
                    "psp34traits_external",
                    "SetMultipleAttributesInput2",
                  ],
                  type: 22,
                },
              },
            ],
            default: false,
            docs: [],
            label: "Psp34Traits::set_multiple_attributes",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x5bf8416b",
          },
          {
            args: [
              {
                label: "token_id",
                type: {
                  displayName: ["psp34traits_external", "LockInput1"],
                  type: 24,
                },
              },
            ],
            default: false,
            docs: [],
            label: "Psp34Traits::lock",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0xa7245b9b",
          },
          {
            args: [],
            default: false,
            docs: [" get public_mint_price"],
            label: "Psp34Traits::get_public_mint_price",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 33,
            },
            selector: "0x9f45ff03",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "Psp34Traits::burn_betaz_token",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0xb380a3e4",
          },
          {
            args: [
              {
                label: "token_id",
                type: {
                  displayName: ["psp34traits_external", "TokenUriInput1"],
                  type: 9,
                },
              },
            ],
            default: false,
            docs: [],
            label: "Psp34Traits::token_uri",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 27,
            },
            selector: "0x249dfd4f",
          },
          {
            args: [
              {
                label: "token_id",
                type: {
                  displayName: ["psp34traits_external", "IsLockedNftInput1"],
                  type: 24,
                },
              },
            ],
            default: false,
            docs: [],
            label: "Psp34Traits::is_locked_nft",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 34,
            },
            selector: "0x59271420",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "Psp34Traits::get_owner",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 32,
            },
            selector: "0x8e1d8d71",
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
                  type: 35,
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
              type: 36,
            },
            selector: "0x1168624d",
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
              type: 33,
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
              type: 28,
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
              type: 38,
            },
            selector: "0xffa27a5f",
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
                  type: 35,
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
              type: 34,
            },
            selector: "0x4790f55a",
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
              type: 39,
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
              type: 41,
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
              type: 41,
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
              type: 36,
            },
            selector: "0x4fa43c8c",
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
              type: 43,
            },
            selector: "0x5e228753",
          },
          {
            args: [
              {
                label: "new_owner",
                type: {
                  displayName: ["ownable_external", "TransferOwnershipInput1"],
                  type: 37,
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
              type: 43,
            },
            selector: "0x11f43efd",
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
              type: 34,
            },
            selector: "0xd123ce11",
          },
          {
            args: [
              {
                label: "new_code_hash",
                type: {
                  displayName: ["upgradeable_external", "SetCodeHashInput1"],
                  type: 45,
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
              type: 46,
            },
            selector: "0x1700ae80",
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
                  type: 37,
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
              type: 49,
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
                  type: 37,
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
              type: 49,
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
                  type: 37,
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
              type: 49,
            },
            selector: "0x6e4f0991",
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
              type: 28,
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
                  type: 37,
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
              type: 34,
            },
            selector: "0xc1d9ac18",
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
                                  key: "0x7a261482",
                                  ty: 8,
                                },
                              },
                              root_key: "0x7a261482",
                            },
                          },
                          name: "attribute_names",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x8f3b6e76",
                                  ty: 6,
                                },
                              },
                              root_key: "0x8f3b6e76",
                            },
                          },
                          name: "is_attribute",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0xc9a215c9",
                                  ty: 6,
                                },
                              },
                              root_key: "0xc9a215c9",
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
                              ty: 5,
                            },
                          },
                          name: "public_mint_price",
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
              name: "PandoraPsp34StandardContract",
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
                    index: 72,
                    name: "ChainlinkRequestIdIsExists",
                  },
                  {
                    fields: [
                      {
                        type: 16,
                        typeName: "OwnableError",
                      },
                    ],
                    index: 73,
                    name: "OwnableError",
                  },
                  {
                    fields: [
                      {
                        type: 17,
                        typeName: "AccessControlError",
                      },
                    ],
                    index: 74,
                    name: "AccessControlError",
                  },
                  {
                    fields: [
                      {
                        type: 18,
                        typeName: "PSP22Error",
                      },
                    ],
                    index: 75,
                    name: "PSP22Error",
                  },
                  {
                    fields: [
                      {
                        type: 20,
                        typeName: "PSP34Error",
                      },
                    ],
                    index: 76,
                    name: "PSP34Error",
                  },
                  {
                    fields: [
                      {
                        type: 21,
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
          id: 28,
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
          id: 29,
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
          id: 30,
          type: {
            def: {
              sequence: {
                type: 7,
              },
            },
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
          id: 32,
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
          id: 33,
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
          id: 34,
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
          id: 35,
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
                type: 37,
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
          id: 37,
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
          id: 38,
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
          id: 43,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 44,
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
                type: 44,
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
          id: 44,
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
          id: 45,
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
          id: 46,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 47,
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
                type: 47,
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
          id: 47,
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
                        type: 48,
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
                type: 48,
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
          id: 51,
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
    CONTRACT_ADDRESS: "5GSQJWgt4jTkBqZZfvF6ARCoxYZ9XygmYNLLautZLaBqx8kc",
    CONTRACT_ABI: {
      source: {
        hash: "0x85d38c0d3604118f728c2f2688d57f167e38342459be878c8afa521b8a8a5856",
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
        name: "pandora_psp34_standard",
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
            type: 51,
          },
          hash: {
            displayName: ["Hash"],
            type: 45,
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
                label: "buyer",
                type: {
                  displayName: ["Option"],
                  type: 36,
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
                label: "receiver",
                type: {
                  displayName: ["AccountId"],
                  type: 0,
                },
              },
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
                label: "psp22_contract_address",
                type: {
                  displayName: ["admintrait_external", "TranferPsp22Input1"],
                  type: 0,
                },
              },
              {
                label: "amount",
                type: {
                  displayName: ["admintrait_external", "TranferPsp22Input2"],
                  type: 5,
                },
              },
              {
                label: "receiver",
                type: {
                  displayName: ["admintrait_external", "TranferPsp22Input3"],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [
              " This function allow contract owner withdraw PSP22 to an account in case there is any token sent to contract by mistake",
            ],
            label: "AdminTrait::tranfer_psp22",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0xd9aad284",
          },
          {
            args: [
              {
                label: "value",
                type: {
                  displayName: ["admintrait_external", "WithdrawFeeInput1"],
                  type: 5,
                },
              },
              {
                label: "receiver",
                type: {
                  displayName: ["admintrait_external", "WithdrawFeeInput2"],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [
              " This function allows contract owner to withdraw contract balance to his account.",
            ],
            label: "AdminTrait::withdraw_fee",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x07573e99",
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
                label: "token_id",
                type: {
                  displayName: ["psp34traits_external", "TokenUriInput1"],
                  type: 9,
                },
              },
            ],
            default: false,
            docs: [],
            label: "Psp34Traits::token_uri",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 27,
            },
            selector: "0x249dfd4f",
          },
          {
            args: [
              {
                label: "state",
                type: {
                  displayName: ["psp34traits_external", "ChangeStateInput1"],
                  type: 6,
                },
              },
            ],
            default: false,
            docs: [],
            label: "Psp34Traits::change_state",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x1a6ca1a3",
          },
          {
            args: [
              {
                label: "token_id",
                type: {
                  displayName: ["psp34traits_external", "LockInput1"],
                  type: 24,
                },
              },
            ],
            default: false,
            docs: [],
            label: "Psp34Traits::lock",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0xa7245b9b",
          },
          {
            args: [
              {
                label: "price",
                type: {
                  displayName: [
                    "psp34traits_external",
                    "SetPublicMintPriceInput1",
                  ],
                  type: 5,
                },
              },
            ],
            default: false,
            docs: [" set public_mint_price"],
            label: "Psp34Traits::set_public_mint_price",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0xdc68474a",
          },
          {
            args: [
              {
                label: "index",
                type: {
                  displayName: [
                    "psp34traits_external",
                    "GetAttributeNameInput1",
                  ],
                  type: 4,
                },
              },
            ],
            default: false,
            docs: [],
            label: "Psp34Traits::get_attribute_name",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 27,
            },
            selector: "0xfcfe34de",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "Psp34Traits::burn_betaz_token",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0xb380a3e4",
          },
          {
            args: [
              {
                label: "token_id",
                type: {
                  displayName: ["psp34traits_external", "IsLockedNftInput1"],
                  type: 24,
                },
              },
            ],
            default: false,
            docs: [],
            label: "Psp34Traits::is_locked_nft",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 28,
            },
            selector: "0x59271420",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "Psp34Traits::get_attribute_count",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 29,
            },
            selector: "0x61c50d69",
          },
          {
            args: [],
            default: false,
            docs: [" get betaz address"],
            label: "Psp34Traits::get_betaz_token_address",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 30,
            },
            selector: "0x2e2ec730",
          },
          {
            args: [],
            default: false,
            docs: [" get public_mint_price"],
            label: "Psp34Traits::get_public_mint_price",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 31,
            },
            selector: "0x9f45ff03",
          },
          {
            args: [
              {
                label: "uri",
                type: {
                  displayName: ["psp34traits_external", "SetBaseUriInput1"],
                  type: 7,
                },
              },
            ],
            default: false,
            docs: [],
            label: "Psp34Traits::set_base_uri",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x4de6850b",
          },
          {
            args: [
              {
                label: "amounts",
                type: {
                  displayName: ["psp34traits_external", "PublicBuyInput1"],
                  type: 9,
                },
              },
            ],
            default: false,
            docs: [],
            label: "Psp34Traits::public_buy",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0xdbce2be7",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "Psp34Traits::get_owner",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 30,
            },
            selector: "0x8e1d8d71",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "Psp34Traits::get_locked_token_count",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 32,
            },
            selector: "0x8fe2ce73",
          },
          {
            args: [
              {
                label: "token_id",
                type: {
                  displayName: [
                    "psp34traits_external",
                    "SetMultipleAttributesInput1",
                  ],
                  type: 24,
                },
              },
              {
                label: "metadata",
                type: {
                  displayName: [
                    "psp34traits_external",
                    "SetMultipleAttributesInput2",
                  ],
                  type: 22,
                },
              },
            ],
            default: false,
            docs: [],
            label: "Psp34Traits::set_multiple_attributes",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0x5bf8416b",
          },
          {
            args: [
              {
                label: "token_id",
                type: {
                  displayName: ["psp34traits_external", "GetAttributesInput1"],
                  type: 24,
                },
              },
              {
                label: "attributes",
                type: {
                  displayName: ["psp34traits_external", "GetAttributesInput2"],
                  type: 33,
                },
              },
            ],
            default: false,
            docs: [],
            label: "Psp34Traits::get_attributes",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 34,
            },
            selector: "0x18209102",
          },
          {
            args: [
              {
                label: "account",
                type: {
                  displayName: [
                    "psp34traits_external",
                    "SetBetazTokenAddressInput1",
                  ],
                  type: 0,
                },
              },
            ],
            default: false,
            docs: [],
            label: "Psp34Traits::set_betaz_token_address",
            mutates: true,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 13,
            },
            selector: "0xf33ef53a",
          },
          {
            args: [],
            default: false,
            docs: [],
            label: "Psp34Traits::get_last_token_id",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 32,
            },
            selector: "0x6f315836",
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
              type: 29,
            },
            selector: "0xcde7e55f",
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
              type: 35,
            },
            selector: "0x1168624d",
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
                  type: 37,
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
              type: 28,
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
                  type: 37,
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
            args: [],
            default: false,
            docs: [],
            label: "PSP34::collection_id",
            mutates: false,
            payable: false,
            returnType: {
              displayName: ["ink", "MessageResult"],
              type: 38,
            },
            selector: "0xffa27a5f",
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
              type: 31,
            },
            selector: "0x628413fe",
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
              type: 39,
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
              type: 41,
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
              type: 41,
            },
            selector: "0xcd0340d0",
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
              type: 43,
            },
            selector: "0x5e228753",
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
              type: 43,
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
              type: 28,
            },
            selector: "0xd123ce11",
          },
          {
            args: [
              {
                label: "new_code_hash",
                type: {
                  displayName: ["upgradeable_external", "SetCodeHashInput1"],
                  type: 45,
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
              type: 46,
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
              type: 29,
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
              type: 49,
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
              type: 28,
            },
            selector: "0xc1d9ac18",
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
              type: 49,
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
              type: 49,
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
                                  key: "0x7a261482",
                                  ty: 8,
                                },
                              },
                              root_key: "0x7a261482",
                            },
                          },
                          name: "attribute_names",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0x8f3b6e76",
                                  ty: 6,
                                },
                              },
                              root_key: "0x8f3b6e76",
                            },
                          },
                          name: "is_attribute",
                        },
                        {
                          layout: {
                            root: {
                              layout: {
                                leaf: {
                                  key: "0xc9a215c9",
                                  ty: 6,
                                },
                              },
                              root_key: "0xc9a215c9",
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
                              ty: 5,
                            },
                          },
                          name: "public_mint_price",
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
              ],
              name: "PandoraPsp34StandardContract",
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
                  {
                    index: 80,
                    name: "CannotRandomAmounts",
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
          id: 28,
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
          id: 29,
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
          id: 30,
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
          id: 32,
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
          id: 33,
          type: {
            def: {
              sequence: {
                type: 7,
              },
            },
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
                        type: 33,
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
                type: 33,
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
          id: 38,
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
          id: 43,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 44,
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
                type: 44,
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
          id: 44,
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
          id: 45,
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
          id: 46,
          type: {
            def: {
              variant: {
                variants: [
                  {
                    fields: [
                      {
                        type: 47,
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
                type: 47,
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
          id: 47,
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
                        type: 48,
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
                type: 48,
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
          id: 51,
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
  pandora_psp34_contract: contract[process.env.NODE_ENV],
};
