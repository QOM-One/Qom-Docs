(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{655:function(e,a,s){"use strict";s.r(a);var t=s(1),d=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"upgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade"}},[e._v("#")]),e._v(" "),a("code",[e._v("upgrade")])]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[a("code",[e._v("x/upgrade")]),e._v(" is an implementation of a Cosmos SDK module that facilitates smoothly\nupgrading a live Cosmos chain to a new (breaking) software version. It accomplishes this by\nproviding a "),a("code",[e._v("BeginBlocker")]),e._v(" hook that prevents the blockchain state machine from\nproceeding once a pre-defined upgrade block height has been reached.")]),e._v(" "),a("p",[e._v("The module does not prescribe anything regarding how governance decides to do an\nupgrade, but just the mechanism for coordinating the upgrade safely. Without software\nsupport for upgrades, upgrading a live chain is risky because all of the validators\nneed to pause their state machines at exactly the same point in the process. If\nthis is not done correctly, there can be state inconsistencies which are hard to\nrecover from.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#concepts"}},[e._v("Concepts")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#state"}},[e._v("State")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#events"}},[e._v("Events")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#client"}},[e._v("Client")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#cli"}},[e._v("CLI")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#rest"}},[e._v("REST")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#grpc"}},[e._v("gRPC")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#resources"}},[e._v("Resources")])])]),e._v(" "),a("h2",{attrs:{id:"concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[e._v("#")]),e._v(" Concepts")]),e._v(" "),a("h3",{attrs:{id:"plan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plan"}},[e._v("#")]),e._v(" Plan")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("x/upgrade")]),e._v(" module defines a "),a("code",[e._v("Plan")]),e._v(" type in which a live upgrade is scheduled\nto occur. A "),a("code",[e._v("Plan")]),e._v(" can be scheduled at a specific block height.\nA "),a("code",[e._v("Plan")]),e._v(" is created once a (frozen) release candidate along with an appropriate upgrade\n"),a("code",[e._v("Handler")]),e._v(" (see below) is agreed upon, where the "),a("code",[e._v("Name")]),e._v(" of a "),a("code",[e._v("Plan")]),e._v(" corresponds to a\nspecific "),a("code",[e._v("Handler")]),e._v(". Typically, a "),a("code",[e._v("Plan")]),e._v(" is created through a governance proposal\nprocess, where if voted upon and passed, will be scheduled. The "),a("code",[e._v("Info")]),e._v(" of a "),a("code",[e._v("Plan")]),e._v("\nmay contain various metadata about the upgrade, typically application specific\nupgrade info to be included on-chain such as a git commit that validators could\nautomatically upgrade to.")]),e._v(" "),a("h4",{attrs:{id:"sidecar-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sidecar-process"}},[e._v("#")]),e._v(" Sidecar Process")]),e._v(" "),a("p",[e._v("If an operator running the application binary also runs a sidecar process to assist\nin the automatic download and upgrade of a binary, the "),a("code",[e._v("Info")]),e._v(" allows this process to\nbe seamless. This tool is "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/main/tools/cosmovisor#readme",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmovisor"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBQbGFuIHN0cnVjdCB7CiAgTmFtZSAgIHN0cmluZwogIEhlaWdodCBpbnQ2NAogIEluZm8gICBzdHJpbmcKfQo="}}),e._v(" "),a("h3",{attrs:{id:"handler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handler"}},[e._v("#")]),e._v(" Handler")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("x/upgrade")]),e._v(" module facilitates upgrading from major version X to major version Y. To\naccomplish this, node operators must first upgrade their current binary to a new\nbinary that has a corresponding "),a("code",[e._v("Handler")]),e._v(" for the new version Y. It is assumed that\nthis version has fully been tested and approved by the community at large. This\n"),a("code",[e._v("Handler")]),e._v(" defines what state migrations need to occur before the new binary Y\ncan successfully run the chain. Naturally, this "),a("code",[e._v("Handler")]),e._v(" is application specific\nand not defined on a per-module basis. Registering a "),a("code",[e._v("Handler")]),e._v(" is done via\n"),a("code",[e._v("Keeper#SetUpgradeHandler")]),e._v(" in the application.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBVcGdyYWRlSGFuZGxlciBmdW5jKENvbnRleHQsIFBsYW4sIFZlcnNpb25NYXApIChWZXJzaW9uTWFwLCBlcnJvcikK"}}),e._v(" "),a("p",[e._v("During each "),a("code",[e._v("EndBlock")]),e._v(" execution, the "),a("code",[e._v("x/upgrade")]),e._v(" module checks if there exists a\n"),a("code",[e._v("Plan")]),e._v(" that should execute (is scheduled at that height). If so, the corresponding\n"),a("code",[e._v("Handler")]),e._v(" is executed. If the "),a("code",[e._v("Plan")]),e._v(" is expected to execute but no "),a("code",[e._v("Handler")]),e._v(" is registered\nor if the binary was upgraded too early, the node will gracefully panic and exit.")]),e._v(" "),a("h3",{attrs:{id:"storeloader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storeloader"}},[e._v("#")]),e._v(" StoreLoader")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("x/upgrade")]),e._v(" module also facilitates store migrations as part of the upgrade. The\n"),a("code",[e._v("StoreLoader")]),e._v(" sets the migrations that need to occur before the new binary can\nsuccessfully run the chain. This "),a("code",[e._v("StoreLoader")]),e._v(" is also application specific and\nnot defined on a per-module basis. Registering this "),a("code",[e._v("StoreLoader")]),e._v(" is done via\n"),a("code",[e._v("app#SetStoreLoader")]),e._v(" in the application.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBVcGdyYWRlU3RvcmVMb2FkZXIgKHVwZ3JhZGVIZWlnaHQgaW50NjQsIHN0b3JlVXBncmFkZXMgKnN0b3JlLlN0b3JlVXBncmFkZXMpIGJhc2VhcHAuU3RvcmVMb2FkZXIK"}}),e._v(" "),a("p",[e._v("If there's a planned upgrade and the upgrade height is reached, the old binary writes "),a("code",[e._v("Plan")]),e._v(" to the disk before panicking.")]),e._v(" "),a("p",[e._v("This information is critical to ensure the "),a("code",[e._v("StoreUpgrades")]),e._v(" happens smoothly at correct height and\nexpected upgrade. It eliminiates the chances for the new binary to execute "),a("code",[e._v("StoreUpgrades")]),e._v(" multiple\ntimes everytime on restart. Also if there are multiple upgrades planned on same height, the "),a("code",[e._v("Name")]),e._v("\nwill ensure these "),a("code",[e._v("StoreUpgrades")]),e._v(" takes place only in planned upgrade handler.")]),e._v(" "),a("h3",{attrs:{id:"proposal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proposal"}},[e._v("#")]),e._v(" Proposal")]),e._v(" "),a("p",[e._v("Typically, a "),a("code",[e._v("Plan")]),e._v(" is proposed and submitted through governance via a proposal\ncontaining a "),a("code",[e._v("MsgSoftwareUpgrade")]),e._v(" message.\nThis proposal prescribes to the standard governance process. If the proposal passes,\nthe "),a("code",[e._v("Plan")]),e._v(", which targets a specific "),a("code",[e._v("Handler")]),e._v(", is persisted and scheduled. The\nupgrade can be delayed or hastened by updating the "),a("code",[e._v("Plan.Height")]),e._v(" in a new proposal.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf reference",base64:"aHR0cHM6Ly9naXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2Jsb2IvdjAuNDcuMC1yYzEvcHJvdG8vY29zbW9zL3VwZ3JhZGUvdjFiZXRhMS90eC5wcm90byNMMjktTDQxCg=="}}),e._v(" "),a("h4",{attrs:{id:"cancelling-upgrade-proposals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cancelling-upgrade-proposals"}},[e._v("#")]),e._v(" Cancelling Upgrade Proposals")]),e._v(" "),a("p",[e._v("Upgrade proposals can be cancelled. There exists a gov-enabled "),a("code",[e._v("MsgCancelUpgrade")]),e._v("\nmessage type, which can be embedded in a proposal, voted on and, if passed, will\nremove the scheduled upgrade "),a("code",[e._v("Plan")]),e._v(".\nOf course this requires that the upgrade was known to be a bad idea well before the\nupgrade itself, to allow time for a vote.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf reference",base64:"aHR0cHM6Ly9naXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2Jsb2IvdjAuNDcuMC1yYzEvcHJvdG8vY29zbW9zL3VwZ3JhZGUvdjFiZXRhMS90eC5wcm90byNMNDgtTDU3Cg=="}}),e._v(" "),a("p",[e._v("If such a possibility is desired, the upgrade height is to be\n"),a("code",[e._v("2 * (VotingPeriod + DepositPeriod) + (SafetyDelta)")]),e._v(" from the beginning of the\nupgrade proposal. The "),a("code",[e._v("SafetyDelta")]),e._v(" is the time available from the success of an\nupgrade proposal and the realization it was a bad idea (due to external social consensus).")]),e._v(" "),a("p",[e._v("A "),a("code",[e._v("MsgCancelUpgrade")]),e._v(" proposal can also be made while the original\n"),a("code",[e._v("MsgSoftwareUpgrade")]),e._v(" proposal is still being voted upon, as long as the "),a("code",[e._v("VotingPeriod")]),e._v("\nends after the "),a("code",[e._v("MsgSoftwareUpgrade")]),e._v(" proposal.")]),e._v(" "),a("h2",{attrs:{id:"state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" State")]),e._v(" "),a("p",[e._v("The internal state of the "),a("code",[e._v("x/upgrade")]),e._v(" module is relatively minimal and simple. The\nstate contains the currently active upgrade "),a("code",[e._v("Plan")]),e._v(" (if one exists) by key\n"),a("code",[e._v("0x0")]),e._v(" and if a "),a("code",[e._v("Plan")]),e._v(' is marked as "done" by key '),a("code",[e._v("0x1")]),e._v(". The state\ncontains the consensus versions of all app modules in the application. The versions\nare stored as big endian "),a("code",[e._v("uint64")]),e._v(", and can be accessed with prefix "),a("code",[e._v("0x2")]),e._v(" appended\nby the corresponding module name of type "),a("code",[e._v("string")]),e._v(". The state maintains a\n"),a("code",[e._v("Protocol Version")]),e._v(" which can be accessed by key "),a("code",[e._v("0x3")]),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("Plan: "),a("code",[e._v("0x0 -> Plan")])]),e._v(" "),a("li",[e._v("Done: "),a("code",[e._v("0x1 | byte(plan name) -> BigEndian(Block Height)")])]),e._v(" "),a("li",[e._v("ConsensusVersion: "),a("code",[e._v("0x2 | byte(module name) -> BigEndian(Module Consensus Version)")])]),e._v(" "),a("li",[e._v("ProtocolVersion: "),a("code",[e._v("0x3 -> BigEndian(Protocol Version)")])])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("x/upgrade")]),e._v(" module contains no genesis state.")]),e._v(" "),a("h2",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("x/upgrade")]),e._v(" does not emit any events by itself. Any and all proposal related\nevents are emitted through the "),a("code",[e._v("x/gov")]),e._v(" module.")]),e._v(" "),a("h2",{attrs:{id:"client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[e._v("#")]),e._v(" Client")]),e._v(" "),a("h3",{attrs:{id:"cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[e._v("#")]),e._v(" CLI")]),e._v(" "),a("p",[e._v("A user can query and interact with the "),a("code",[e._v("upgrade")]),e._v(" module using the CLI.")]),e._v(" "),a("h4",{attrs:{id:"query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[e._v("#")]),e._v(" Query")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("query")]),e._v(" commands allow users to query "),a("code",[e._v("upgrade")]),e._v(" state.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBxdWVyeSB1cGdyYWRlIC0taGVscAo="}}),e._v(" "),a("h5",{attrs:{id:"applied"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#applied"}},[e._v("#")]),e._v(" applied")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("applied")]),e._v(" command allows users to query the block header for height at which a completed upgrade was applied.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBxdWVyeSB1cGdyYWRlIGFwcGxpZWQgW3VwZ3JhZGUtbmFtZV0gW2ZsYWdzXQo="}}),e._v(" "),a("p",[e._v("If upgrade-name was previously executed on the chain, this returns the header for the block at which it was applied.\nThis helps a client determine which binary was valid over a given range of blocks, as well as more context to understand past migrations.")]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBxdWVyeSB1cGdyYWRlIGFwcGxpZWQgJnF1b3Q7dGVzdC11cGdyYWRlJnF1b3Q7Cg=="}}),e._v(" "),a("p",[e._v("Example Output:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JnF1b3Q7YmxvY2tfaWQmcXVvdDs6IHsKICAgICZxdW90O2hhc2gmcXVvdDs6ICZxdW90O0E3NjkxMzYzNTE3ODZCOTAzNEE1RjE5NkRDNTNGN0U1MEZDRUI1M0I0OEZBMDc4NkUxQkZDNDVBMEJCNjQ2QjUmcXVvdDssCiAgICAmcXVvdDtwYXJ0cyZxdW90OzogewogICAgICAmcXVvdDt0b3RhbCZxdW90OzogMSwKICAgICAgJnF1b3Q7aGFzaCZxdW90OzogJnF1b3Q7QjEzQ0JEMjMwMTFDNzQ4MEU2RjExQkU0NTk0RUUzMTY1NDg2NDhFNkE2NjZCMzU3NTQwOUY4RjE2RUM2OTM5RSZxdW90OwogICAgfQogIH0sCiAgJnF1b3Q7YmxvY2tfc2l6ZSZxdW90OzogJnF1b3Q7NzIxMyZxdW90OywKICAmcXVvdDtoZWFkZXImcXVvdDs6IHsKICAgICZxdW90O3ZlcnNpb24mcXVvdDs6IHsKICAgICAgJnF1b3Q7YmxvY2smcXVvdDs6ICZxdW90OzExJnF1b3Q7CiAgICB9LAogICAgJnF1b3Q7Y2hhaW5faWQmcXVvdDs6ICZxdW90O3Rlc3RuZXQtMiZxdW90OywKICAgICZxdW90O2hlaWdodCZxdW90OzogJnF1b3Q7NDU1MjAwJnF1b3Q7LAogICAgJnF1b3Q7dGltZSZxdW90OzogJnF1b3Q7MjAyMS0wNC0xMFQwNDozNzo1Ny4wODU0OTM4MzhaJnF1b3Q7LAogICAgJnF1b3Q7bGFzdF9ibG9ja19pZCZxdW90OzogewogICAgICAmcXVvdDtoYXNoJnF1b3Q7OiAmcXVvdDswRThBRDkzMDlDMkRDNDExREY5ODIxN0FGNTlFMDQ0QTBFMUNDRUFFN0MwMzM4NDE3QTcwMzM4REY1MEY0NzgzJnF1b3Q7LAogICAgICAmcXVvdDtwYXJ0cyZxdW90OzogewogICAgICAgICZxdW90O3RvdGFsJnF1b3Q7OiAxLAogICAgICAgICZxdW90O2hhc2gmcXVvdDs6ICZxdW90OzhGRTU3MkE0OENEMTBCQzJDQkIwMjY1M0NBMDRDQTI0N0EwRjY4MzBGRjE5REM5NzJGNjREMzM5QTM1NUU3N0QmcXVvdDsKICAgICAgfQogICAgfSwKICAgICZxdW90O2xhc3RfY29tbWl0X2hhc2gmcXVvdDs6ICZxdW90O0RFODkwMjM5NDE2QTE5RTYxNjRDMjA3NkI4MzdDQzFEN0Y3ODIyRkMyMTRGMzA1NjE2NzI1RjExRDI1MzMxNDAmcXVvdDssCiAgICAmcXVvdDtkYXRhX2hhc2gmcXVvdDs6ICZxdW90O0UzQjBDNDQyOThGQzFDMTQ5QUZCRjRDODk5NkZCOTI0MjdBRTQxRTQ2NDlCOTM0Q0E0OTU5OTFCNzg1MkI4NTUmcXVvdDssCiAgICAmcXVvdDt2YWxpZGF0b3JzX2hhc2gmcXVvdDs6ICZxdW90O0EzMTA0N0FERTU0QUU5MDcyRUUyQTEyRkYyNjBBODk5MEJBNEMzOUY5MDNFQUY1NjM2QjUwRDU4REJBNzI1ODImcXVvdDssCiAgICAmcXVvdDtuZXh0X3ZhbGlkYXRvcnNfaGFzaCZxdW90OzogJnF1b3Q7QTMxMDQ3QURFNTRBRTkwNzJFRTJBMTJGRjI2MEE4OTkwQkE0QzM5RjkwM0VBRjU2MzZCNTBENThEQkE3MjU4MiZxdW90OywKICAgICZxdW90O2NvbnNlbnN1c19oYXNoJnF1b3Q7OiAmcXVvdDswNDgwOTFCQzdEREMyODNGNzdCRkJGOTFENzNDNDREQTU4QzNERjhBOUNCQzg2NzQwNUQ4QjdGM0RBQURBMjJGJnF1b3Q7LAogICAgJnF1b3Q7YXBwX2hhc2gmcXVvdDs6ICZxdW90OzI4RUNDNDg2QUZDMzMyQkE2Q0M5NzY3MDZEQkRFODdFN0QzMjQ0MTM3NUUzRjEwRkQwODRDRDRCQUYwREEwMjEmcXVvdDssCiAgICAmcXVvdDtsYXN0X3Jlc3VsdHNfaGFzaCZxdW90OzogJnF1b3Q7RTNCMEM0NDI5OEZDMUMxNDlBRkJGNEM4OTk2RkI5MjQyN0FFNDFFNDY0OUI5MzRDQTQ5NTk5MUI3ODUyQjg1NSZxdW90OywKICAgICZxdW90O2V2aWRlbmNlX2hhc2gmcXVvdDs6ICZxdW90O0UzQjBDNDQyOThGQzFDMTQ5QUZCRjRDODk5NkZCOTI0MjdBRTQxRTQ2NDlCOTM0Q0E0OTU5OTFCNzg1MkI4NTUmcXVvdDssCiAgICAmcXVvdDtwcm9wb3Nlcl9hZGRyZXNzJnF1b3Q7OiAmcXVvdDsyQUJDNDg1NEIxQTFDNUFBODQwM0M0RUE4NTNBODFBQ0E5MDFDQzc2JnF1b3Q7CiAgfSwKICAmcXVvdDtudW1fdHhzJnF1b3Q7OiAmcXVvdDswJnF1b3Q7Cn0K"}}),e._v(" "),a("h5",{attrs:{id:"module-versions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-versions"}},[e._v("#")]),e._v(" module versions")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("module_versions")]),e._v(" command gets a list of module names and their respective consensus versions.")]),e._v(" "),a("p",[e._v("Following the command with a specific module name will return only\nthat module's information.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBxdWVyeSB1cGdyYWRlIG1vZHVsZV92ZXJzaW9ucyBbb3B0aW9uYWwgbW9kdWxlX25hbWVdIFtmbGFnc10K"}}),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBxdWVyeSB1cGdyYWRlIG1vZHVsZV92ZXJzaW9ucwo="}}),e._v(" "),a("p",[e._v("Example Output:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bW9kdWxlX3ZlcnNpb25zOgotIG5hbWU6IGF1dGgKICB2ZXJzaW9uOiAmcXVvdDsyJnF1b3Q7Ci0gbmFtZTogYXV0aHoKICB2ZXJzaW9uOiAmcXVvdDsxJnF1b3Q7Ci0gbmFtZTogYmFuawogIHZlcnNpb246ICZxdW90OzImcXVvdDsKLSBuYW1lOiBjYXBhYmlsaXR5CiAgdmVyc2lvbjogJnF1b3Q7MSZxdW90OwotIG5hbWU6IGNyaXNpcwogIHZlcnNpb246ICZxdW90OzEmcXVvdDsKLSBuYW1lOiBkaXN0cmlidXRpb24KICB2ZXJzaW9uOiAmcXVvdDsyJnF1b3Q7Ci0gbmFtZTogZXZpZGVuY2UKICB2ZXJzaW9uOiAmcXVvdDsxJnF1b3Q7Ci0gbmFtZTogZmVlZ3JhbnQKICB2ZXJzaW9uOiAmcXVvdDsxJnF1b3Q7Ci0gbmFtZTogZ2VudXRpbAogIHZlcnNpb246ICZxdW90OzEmcXVvdDsKLSBuYW1lOiBnb3YKICB2ZXJzaW9uOiAmcXVvdDsyJnF1b3Q7Ci0gbmFtZTogaWJjCiAgdmVyc2lvbjogJnF1b3Q7MiZxdW90OwotIG5hbWU6IG1pbnQKICB2ZXJzaW9uOiAmcXVvdDsxJnF1b3Q7Ci0gbmFtZTogcGFyYW1zCiAgdmVyc2lvbjogJnF1b3Q7MSZxdW90OwotIG5hbWU6IHNsYXNoaW5nCiAgdmVyc2lvbjogJnF1b3Q7MiZxdW90OwotIG5hbWU6IHN0YWtpbmcKICB2ZXJzaW9uOiAmcXVvdDsyJnF1b3Q7Ci0gbmFtZTogdHJhbnNmZXIKICB2ZXJzaW9uOiAmcXVvdDsxJnF1b3Q7Ci0gbmFtZTogdXBncmFkZQogIHZlcnNpb246ICZxdW90OzEmcXVvdDsKLSBuYW1lOiB2ZXN0aW5nCiAgdmVyc2lvbjogJnF1b3Q7MSZxdW90Owo="}}),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cmVnZW4gcXVlcnkgdXBncmFkZSBtb2R1bGVfdmVyc2lvbnMgaWJjCg=="}}),e._v(" "),a("p",[e._v("Example Output:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bW9kdWxlX3ZlcnNpb25zOgotIG5hbWU6IGliYwogIHZlcnNpb246ICZxdW90OzImcXVvdDsK"}}),e._v(" "),a("h5",{attrs:{id:"plan-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plan-2"}},[e._v("#")]),e._v(" plan")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("plan")]),e._v(" command gets the currently scheduled upgrade plan, if one exists.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cmVnZW4gcXVlcnkgdXBncmFkZSBwbGFuIFtmbGFnc10K"}}),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBxdWVyeSB1cGdyYWRlIHBsYW4K"}}),e._v(" "),a("p",[e._v("Example Output:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGVpZ2h0OiAmcXVvdDsxMzAmcXVvdDsKaW5mbzogJnF1b3Q7JnF1b3Q7Cm5hbWU6IHRlc3QtdXBncmFkZQp0aW1lOiAmcXVvdDswMDAxLTAxLTAxVDAwOjAwOjAwWiZxdW90Owp1cGdyYWRlZF9jbGllbnRfc3RhdGU6IG51bGwK"}}),e._v(" "),a("h4",{attrs:{id:"transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[e._v("#")]),e._v(" Transactions")]),e._v(" "),a("p",[e._v("The upgrade module supports the following transactions:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("software-proposal")]),e._v(" - submits an upgrade proposal:")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCB0eCB1cGdyYWRlIHNvZnR3YXJlLXVwZ3JhZGUgdjIgLS10aXRsZT0mcXVvdDtUZXN0IFByb3Bvc2FsJnF1b3Q7IC0tc3VtbWFyeT0mcXVvdDt0ZXN0aW5nJnF1b3Q7IC0tZGVwb3NpdD0mcXVvdDsxMDAwMDAwMDBzdGFrZSZxdW90OyAtLXVwZ3JhZGUtaGVpZ2h0IDEwMDAwMDAgXAotLXVwZ3JhZGUtaW5mbyAneyAmcXVvdDtiaW5hcmllcyZxdW90OzogeyAmcXVvdDtsaW51eC9hbWQ2NCZxdW90OzomcXVvdDtodHRwczovL2V4YW1wbGUuY29tL3NpbWQuemlwP2NoZWNrc3VtPXNoYTI1NjphZWMwNzA2NDVmZTUzZWUzYjM3NjMwNTkzNzYxMzRmMDU4Y2MzMzcyNDdjOTc4YWRkMTc4YjZjY2RmYjAwMTlmJnF1b3Q7IH0gfScgLS1mcm9tIGNvc21vczEuLgo="}}),e._v(" "),a("ul",[a("li",[a("code",[e._v("cancel-software-upgrade")]),e._v(" - cancels a previously submitted upgrade proposal:")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCB0eCB1cGdyYWRlIGNhbmNlbC1zb2Z0d2FyZS11cGdyYWRlIC0tdGl0bGU9JnF1b3Q7VGVzdCBQcm9wb3NhbCZxdW90OyAtLXN1bW1hcnk9JnF1b3Q7dGVzdGluZyZxdW90OyAtLWRlcG9zaXQ9JnF1b3Q7MTAwMDAwMDAwc3Rha2UmcXVvdDsgLS1mcm9tIGNvc21vczEuLgo="}}),e._v(" "),a("h3",{attrs:{id:"rest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rest"}},[e._v("#")]),e._v(" REST")]),e._v(" "),a("p",[e._v("A user can query the "),a("code",[e._v("upgrade")]),e._v(" module using REST endpoints.")]),e._v(" "),a("h4",{attrs:{id:"applied-plan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#applied-plan"}},[e._v("#")]),e._v(" Applied Plan")]),e._v(" "),a("p",[a("code",[e._v("AppliedPlan")]),e._v(" queries a previously applied upgrade plan by its name.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"L2Nvc21vcy91cGdyYWRlL3YxYmV0YTEvYXBwbGllZF9wbGFuL3tuYW1lfQo="}}),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCAtWCBHRVQgJnF1b3Q7aHR0cDovL2xvY2FsaG9zdDoxMzE3L2Nvc21vcy91cGdyYWRlL3YxYmV0YTEvYXBwbGllZF9wbGFuL3YyLjAtdXBncmFkZSZxdW90OyAtSCAmcXVvdDthY2NlcHQ6IGFwcGxpY2F0aW9uL2pzb24mcXVvdDsK"}}),e._v(" "),a("p",[e._v("Example Output:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ewogICZxdW90O2hlaWdodCZxdW90OzogJnF1b3Q7MzAmcXVvdDsKfQo="}}),e._v(" "),a("h4",{attrs:{id:"current-plan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#current-plan"}},[e._v("#")]),e._v(" Current Plan")]),e._v(" "),a("p",[a("code",[e._v("CurrentPlan")]),e._v(" queries the current upgrade plan.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"L2Nvc21vcy91cGdyYWRlL3YxYmV0YTEvY3VycmVudF9wbGFuCg=="}}),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCAtWCBHRVQgJnF1b3Q7aHR0cDovL2xvY2FsaG9zdDoxMzE3L2Nvc21vcy91cGdyYWRlL3YxYmV0YTEvY3VycmVudF9wbGFuJnF1b3Q7IC1IICZxdW90O2FjY2VwdDogYXBwbGljYXRpb24vanNvbiZxdW90Owo="}}),e._v(" "),a("p",[e._v("Example Output:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ewogICZxdW90O3BsYW4mcXVvdDs6ICZxdW90O3YyLjEtdXBncmFkZSZxdW90Owp9Cg=="}}),e._v(" "),a("h4",{attrs:{id:"module-versions-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-versions-2"}},[e._v("#")]),e._v(" Module versions")]),e._v(" "),a("p",[a("code",[e._v("ModuleVersions")]),e._v(" queries the list of module versions from state.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"L2Nvc21vcy91cGdyYWRlL3YxYmV0YTEvbW9kdWxlX3ZlcnNpb25zCg=="}}),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCAtWCBHRVQgJnF1b3Q7aHR0cDovL2xvY2FsaG9zdDoxMzE3L2Nvc21vcy91cGdyYWRlL3YxYmV0YTEvbW9kdWxlX3ZlcnNpb25zJnF1b3Q7IC1IICZxdW90O2FjY2VwdDogYXBwbGljYXRpb24vanNvbiZxdW90Owo="}}),e._v(" "),a("p",[e._v("Example Output:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ewogICZxdW90O21vZHVsZV92ZXJzaW9ucyZxdW90OzogWwogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDthdXRoJnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsyJnF1b3Q7CiAgICB9LAogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDthdXRoeiZxdW90OywKICAgICAgJnF1b3Q7dmVyc2lvbiZxdW90OzogJnF1b3Q7MSZxdW90OwogICAgfSwKICAgIHsKICAgICAgJnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7YmFuayZxdW90OywKICAgICAgJnF1b3Q7dmVyc2lvbiZxdW90OzogJnF1b3Q7MiZxdW90OwogICAgfSwKICAgIHsKICAgICAgJnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7Y2FwYWJpbGl0eSZxdW90OywKICAgICAgJnF1b3Q7dmVyc2lvbiZxdW90OzogJnF1b3Q7MSZxdW90OwogICAgfSwKICAgIHsKICAgICAgJnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7Y3Jpc2lzJnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7CiAgICB9LAogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDtkaXN0cmlidXRpb24mcXVvdDssCiAgICAgICZxdW90O3ZlcnNpb24mcXVvdDs6ICZxdW90OzImcXVvdDsKICAgIH0sCiAgICB7CiAgICAgICZxdW90O25hbWUmcXVvdDs6ICZxdW90O2V2aWRlbmNlJnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7CiAgICB9LAogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDtmZWVncmFudCZxdW90OywKICAgICAgJnF1b3Q7dmVyc2lvbiZxdW90OzogJnF1b3Q7MSZxdW90OwogICAgfSwKICAgIHsKICAgICAgJnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7Z2VudXRpbCZxdW90OywKICAgICAgJnF1b3Q7dmVyc2lvbiZxdW90OzogJnF1b3Q7MSZxdW90OwogICAgfSwKICAgIHsKICAgICAgJnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7Z292JnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsyJnF1b3Q7CiAgICB9LAogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDtpYmMmcXVvdDssCiAgICAgICZxdW90O3ZlcnNpb24mcXVvdDs6ICZxdW90OzImcXVvdDsKICAgIH0sCiAgICB7CiAgICAgICZxdW90O25hbWUmcXVvdDs6ICZxdW90O21pbnQmcXVvdDssCiAgICAgICZxdW90O3ZlcnNpb24mcXVvdDs6ICZxdW90OzEmcXVvdDsKICAgIH0sCiAgICB7CiAgICAgICZxdW90O25hbWUmcXVvdDs6ICZxdW90O3BhcmFtcyZxdW90OywKICAgICAgJnF1b3Q7dmVyc2lvbiZxdW90OzogJnF1b3Q7MSZxdW90OwogICAgfSwKICAgIHsKICAgICAgJnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7c2xhc2hpbmcmcXVvdDssCiAgICAgICZxdW90O3ZlcnNpb24mcXVvdDs6ICZxdW90OzImcXVvdDsKICAgIH0sCiAgICB7CiAgICAgICZxdW90O25hbWUmcXVvdDs6ICZxdW90O3N0YWtpbmcmcXVvdDssCiAgICAgICZxdW90O3ZlcnNpb24mcXVvdDs6ICZxdW90OzImcXVvdDsKICAgIH0sCiAgICB7CiAgICAgICZxdW90O25hbWUmcXVvdDs6ICZxdW90O3RyYW5zZmVyJnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7CiAgICB9LAogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDt1cGdyYWRlJnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7CiAgICB9LAogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDt2ZXN0aW5nJnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7CiAgICB9CiAgXQp9Cg=="}}),e._v(" "),a("h3",{attrs:{id:"grpc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grpc"}},[e._v("#")]),e._v(" gRPC")]),e._v(" "),a("p",[e._v("A user can query the "),a("code",[e._v("upgrade")]),e._v(" module using gRPC endpoints.")]),e._v(" "),a("h4",{attrs:{id:"applied-plan-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#applied-plan-2"}},[e._v("#")]),e._v(" Applied Plan")]),e._v(" "),a("p",[a("code",[e._v("AppliedPlan")]),e._v(" queries a previously applied upgrade plan by its name.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y29zbW9zLnVwZ3JhZGUudjFiZXRhMS5RdWVyeS9BcHBsaWVkUGxhbgo="}}),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z3JwY3VybCAtcGxhaW50ZXh0IFwKICAgIC1kICd7JnF1b3Q7bmFtZSZxdW90OzomcXVvdDt2Mi4wLXVwZ3JhZGUmcXVvdDt9JyBcCiAgICBsb2NhbGhvc3Q6OTA5MCBcCiAgICBjb3Ntb3MudXBncmFkZS52MWJldGExLlF1ZXJ5L0FwcGxpZWRQbGFuCg=="}}),e._v(" "),a("p",[e._v("Example Output:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ewogICZxdW90O2hlaWdodCZxdW90OzogJnF1b3Q7MzAmcXVvdDsKfQo="}}),e._v(" "),a("h4",{attrs:{id:"current-plan-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#current-plan-2"}},[e._v("#")]),e._v(" Current Plan")]),e._v(" "),a("p",[a("code",[e._v("CurrentPlan")]),e._v(" queries the current upgrade plan.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y29zbW9zLnVwZ3JhZGUudjFiZXRhMS5RdWVyeS9DdXJyZW50UGxhbgo="}}),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z3JwY3VybCAtcGxhaW50ZXh0IGxvY2FsaG9zdDo5MDkwIGNvc21vcy5zbGFzaGluZy52MWJldGExLlF1ZXJ5L0N1cnJlbnRQbGFuCg=="}}),e._v(" "),a("p",[e._v("Example Output:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ewogICZxdW90O3BsYW4mcXVvdDs6ICZxdW90O3YyLjEtdXBncmFkZSZxdW90Owp9Cg=="}}),e._v(" "),a("h4",{attrs:{id:"module-versions-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-versions-3"}},[e._v("#")]),e._v(" Module versions")]),e._v(" "),a("p",[a("code",[e._v("ModuleVersions")]),e._v(" queries the list of module versions from state.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y29zbW9zLnVwZ3JhZGUudjFiZXRhMS5RdWVyeS9Nb2R1bGVWZXJzaW9ucwo="}}),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z3JwY3VybCAtcGxhaW50ZXh0IGxvY2FsaG9zdDo5MDkwIGNvc21vcy5zbGFzaGluZy52MWJldGExLlF1ZXJ5L01vZHVsZVZlcnNpb25zCg=="}}),e._v(" "),a("p",[e._v("Example Output:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ewogICZxdW90O21vZHVsZV92ZXJzaW9ucyZxdW90OzogWwogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDthdXRoJnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsyJnF1b3Q7CiAgICB9LAogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDthdXRoeiZxdW90OywKICAgICAgJnF1b3Q7dmVyc2lvbiZxdW90OzogJnF1b3Q7MSZxdW90OwogICAgfSwKICAgIHsKICAgICAgJnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7YmFuayZxdW90OywKICAgICAgJnF1b3Q7dmVyc2lvbiZxdW90OzogJnF1b3Q7MiZxdW90OwogICAgfSwKICAgIHsKICAgICAgJnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7Y2FwYWJpbGl0eSZxdW90OywKICAgICAgJnF1b3Q7dmVyc2lvbiZxdW90OzogJnF1b3Q7MSZxdW90OwogICAgfSwKICAgIHsKICAgICAgJnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7Y3Jpc2lzJnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7CiAgICB9LAogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDtkaXN0cmlidXRpb24mcXVvdDssCiAgICAgICZxdW90O3ZlcnNpb24mcXVvdDs6ICZxdW90OzImcXVvdDsKICAgIH0sCiAgICB7CiAgICAgICZxdW90O25hbWUmcXVvdDs6ICZxdW90O2V2aWRlbmNlJnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7CiAgICB9LAogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDtmZWVncmFudCZxdW90OywKICAgICAgJnF1b3Q7dmVyc2lvbiZxdW90OzogJnF1b3Q7MSZxdW90OwogICAgfSwKICAgIHsKICAgICAgJnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7Z2VudXRpbCZxdW90OywKICAgICAgJnF1b3Q7dmVyc2lvbiZxdW90OzogJnF1b3Q7MSZxdW90OwogICAgfSwKICAgIHsKICAgICAgJnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7Z292JnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsyJnF1b3Q7CiAgICB9LAogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDtpYmMmcXVvdDssCiAgICAgICZxdW90O3ZlcnNpb24mcXVvdDs6ICZxdW90OzImcXVvdDsKICAgIH0sCiAgICB7CiAgICAgICZxdW90O25hbWUmcXVvdDs6ICZxdW90O21pbnQmcXVvdDssCiAgICAgICZxdW90O3ZlcnNpb24mcXVvdDs6ICZxdW90OzEmcXVvdDsKICAgIH0sCiAgICB7CiAgICAgICZxdW90O25hbWUmcXVvdDs6ICZxdW90O3BhcmFtcyZxdW90OywKICAgICAgJnF1b3Q7dmVyc2lvbiZxdW90OzogJnF1b3Q7MSZxdW90OwogICAgfSwKICAgIHsKICAgICAgJnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7c2xhc2hpbmcmcXVvdDssCiAgICAgICZxdW90O3ZlcnNpb24mcXVvdDs6ICZxdW90OzImcXVvdDsKICAgIH0sCiAgICB7CiAgICAgICZxdW90O25hbWUmcXVvdDs6ICZxdW90O3N0YWtpbmcmcXVvdDssCiAgICAgICZxdW90O3ZlcnNpb24mcXVvdDs6ICZxdW90OzImcXVvdDsKICAgIH0sCiAgICB7CiAgICAgICZxdW90O25hbWUmcXVvdDs6ICZxdW90O3RyYW5zZmVyJnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7CiAgICB9LAogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDt1cGdyYWRlJnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7CiAgICB9LAogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDt2ZXN0aW5nJnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7CiAgICB9CiAgXQp9Cg=="}}),e._v(" "),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),a("p",[e._v("A list of (external) resources to learn more about the "),a("code",[e._v("x/upgrade")]),e._v(" module.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://medium.com/web3-surfers/cosmos-dev-series-cosmos-sdk-based-blockchain-upgrade-b5e99181554c",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos Dev Series: Cosmos Blockchain Upgrade"),a("OutboundLink")],1),e._v(" - The blog post that explains how software upgrades work in detail.")])])],1)}),[],!1,null,null,null);a.default=d.exports}}]);