(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{364:function(t,a,e){"use strict";e.r(a);var s=e(45),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[t._v("#")]),t._v(" Commands")]),t._v(" "),e("p",[t._v("A CLI is provided to support building and managing an Anchor workspace.\nFor a comprehensive list of commands and options, run "),e("code",[t._v("anchor -h")]),t._v(" on any\nof the following subcommands.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("anchor-cli\n\nUSAGE:\n    anchor <SUBCOMMAND>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nSUBCOMMANDS:\n    build      Builds the workspace\n    cluster    Cluster commands\n    deploy     Deploys each program in the workspace\n    help       Prints this message or the help of the given subcommand(s)\n    idl        Commands for interacting with interface definitions\n    init       Initializes a workspace\n    launch     Deploys, initializes an IDL, and migrates all in one command\n    migrate    Runs the deploy migration script\n    new        Creates a new program\n    test       Runs integration tests against a localnetwork\n    upgrade    Upgrades a single program. The configured wallet must be the upgrade authority\n    verify     Verifies the on-chain bytecode matches the locally compiled artifact. Run this\n               command inside a program subdirectory, i.e., in the dir containing the program's\n               Cargo.toml\n")])])]),e("h2",{attrs:{id:"init"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#init"}},[t._v("#")]),t._v(" Init")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("anchor init\n")])])]),e("p",[t._v("Initializes a project workspace wit the following structure.")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("Anchor.toml")]),t._v(": Anchor configuration file.")]),t._v(" "),e("li",[e("code",[t._v("Cargo.toml")]),t._v(": Rust workspace configuration file.")]),t._v(" "),e("li",[e("code",[t._v("programs/")]),t._v(": Directory for Solana program crates.")]),t._v(" "),e("li",[e("code",[t._v("app/")]),t._v(": Directory for your application frontend.")]),t._v(" "),e("li",[e("code",[t._v("tests/")]),t._v(": Directory for JavaScript integration tests.")]),t._v(" "),e("li",[e("code",[t._v("migrations/deploy.js")]),t._v(": Deploy script.")])]),t._v(" "),e("h2",{attrs:{id:"build"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[t._v("#")]),t._v(" Build")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("anchor build\n")])])]),e("p",[t._v("Builds programs in the workspace targeting Solana's BPF runtime and emitting IDLs in the "),e("code",[t._v("target/idl")]),t._v(" directory.")]),t._v(" "),e("h2",{attrs:{id:"deploy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploy"}},[t._v("#")]),t._v(" Deploy")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("anchor deploy\n")])])]),e("p",[t._v("Deploys all programs in the workspace to the configured cluster.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("This is different from the "),e("code",[t._v("solana program deploy")]),t._v(" command, because everytime it's run\nit will generate a "),e("em",[t._v("new")]),t._v(" program address.")])]),t._v(" "),e("h2",{attrs:{id:"upgrade"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upgrade"}},[t._v("#")]),t._v(" Upgrade")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("anchor upgrade <target/deploy/program.so> --program-id <program-id>\n")])])]),e("p",[t._v("Uses Solana's upgradeable BPF loader to upgrade the on chain program code.")]),t._v(" "),e("h2",{attrs:{id:"test"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[t._v("#")]),t._v(" Test")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("anchor test\n")])])]),e("p",[t._v("Run an integration test suit against the configured cluster, deploying new versions\nof all workspace programs before running them.")]),t._v(" "),e("p",[t._v("If the configured network is a localnet, then automatically starts the localnetwork and runs\nthe test.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("The Anchor workflow "),e("a",{attrs:{href:"https://www.parity.io/paritys-checklist-for-secure-smart-contract-development/",target:"_blank",rel:"noopener noreferrer"}},[t._v("recommends"),e("OutboundLink")],1),t._v("\nto test your program using integration tests in a language other\nthan Rust to make sure that bugs related to syntax misunderstandings\nare coverable with tests and not just replicated in tests.")])]),t._v(" "),e("h2",{attrs:{id:"migrate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#migrate"}},[t._v("#")]),t._v(" Migrate")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("anchor migrate\n")])])]),e("p",[t._v("Runs the deploy script located at "),e("code",[t._v("migrations/deploy.js")]),t._v(", injecting a provider configured\nform the workspace's "),e("code",[t._v("Anchor.toml")]),t._v(". For example,")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// File: migrations/deploys.js")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" anchor "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@project-serum/anchor"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("provider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  anchor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setProvider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("provider"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add your deploy script here.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Migrations are a new feature\nand only support this simple deploy script at the moment.")]),t._v(" "),e("h2",{attrs:{id:"idl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#idl"}},[t._v("#")]),t._v(" Idl")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("idl")]),t._v(" subcommand provides commands for interacting with interface definition files.\nIt's recommended to use these commands to store an IDL on chain, at a deterministic\naddress, as a function of nothing but the the program's ID. This\nallow us to generate clients for a program using nothing but the program ID.")]),t._v(" "),e("h3",{attrs:{id:"idl-init"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#idl-init"}},[t._v("#")]),t._v(" Idl Init")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("anchor idl init -f <target/idl/program.json> <program-id>\n")])])]),e("p",[t._v("Creates an idl account, writing the given "),e("code",[t._v("<target/idl/program.json>")]),t._v(" file into a program owned account. By default, the size of the account is double the size of the IDL,\nallowing room for growth in case the idl needs to be upgraded in the future.")]),t._v(" "),e("h3",{attrs:{id:"idl-fetch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#idl-fetch"}},[t._v("#")]),t._v(" Idl Fetch")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("anchor idl fetch -o <out-file.json> <program-id>\n")])])]),e("p",[t._v("Fetches an IDL from the configured blockchain. For example, make sure\nyour "),e("code",[t._v("Anchor.toml")]),t._v(" is pointing to the "),e("code",[t._v("mainnet")]),t._v(" cluster and run")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("anchor idl fetch GrAkKfEpTKQuVHG2Y97Y2FF4i7y7Q5AHLK94JBy7Y5yv\n")])])]),e("h3",{attrs:{id:"idl-authority"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#idl-authority"}},[t._v("#")]),t._v(" Idl Authority")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("anchor idl authority <program-id>\n")])])]),e("p",[t._v("Outputs the IDL account's authority. This is the wallet that has the ability to\nupdate the IDL.")]),t._v(" "),e("h3",{attrs:{id:"idl-erase-authority"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#idl-erase-authority"}},[t._v("#")]),t._v(" Idl Erase Authority")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("anchor idl erase-authority -p <program-id>\n")])])]),e("p",[t._v("Erases the IDL account's authority so that upgrades can no longer occur. The\nconfigured wallet must be the current authority.")]),t._v(" "),e("h3",{attrs:{id:"idl-upgrade"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#idl-upgrade"}},[t._v("#")]),t._v(" Idl Upgrade")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("anchor idl upgrade <program-id> -f <target/idl/program.json>\n")])])]),e("p",[t._v("Upgrades the IDL file on chain to the new "),e("code",[t._v("target/idl/program.json")]),t._v(" idl.\nThe configured wallet must be the current authority.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("anchor idl set-authority -n <new-authority> -p <program-id>\n")])])]),e("p",[t._v("Sets a new authority on the IDL account. Both the "),e("code",[t._v("new-authority")]),t._v(" and "),e("code",[t._v("program-id")]),t._v("\nmust be encoded in base 58.")]),t._v(" "),e("h2",{attrs:{id:"launch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#launch"}},[t._v("#")]),t._v(" Launch")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("anchor launch\n")])])]),e("p",[t._v("Builds, deploys and migrates, all in one command. This is particularly\nuseful when simultaneously developing an app against a Localnet or Devnet. For mainnet, it's\nrecommended to run each command separately, since transactions can sometimes be\nunreliable depending on the Solana RPC node being used.")]),t._v(" "),e("h2",{attrs:{id:"new"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#new"}},[t._v("#")]),t._v(" New")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("anchor new <program-name>\n")])])]),e("p",[t._v("Creates a new program in the workspace's "),e("code",[t._v("programs/")]),t._v(" directory initialized with boilerplate.")]),t._v(" "),e("h2",{attrs:{id:"cluster"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cluster"}},[t._v("#")]),t._v(" Cluster")]),t._v(" "),e("h3",{attrs:{id:"cluster-list"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cluster-list"}},[t._v("#")]),t._v(" Cluster list")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("anchor cluster list\n")])])]),e("p",[t._v("This lists cluster endpoints:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Cluster Endpoints:\n\n* Mainnet - https://solana-api.projectserum.com\n* Mainnet - https://api.mainnet-beta.solana.com\n* Devnet  - https://devnet.solana.com\n* Testnet - https://testnet.solana.com\n")])])]),e("h2",{attrs:{id:"verify"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verify"}},[t._v("#")]),t._v(" Verify")]),t._v(" "),e("p",[t._v("Verifies the on-chain bytecode matches the locally compiled artifact.")])])}),[],!1,null,null,null);a.default=r.exports}}]);