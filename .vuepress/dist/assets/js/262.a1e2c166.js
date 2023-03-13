(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{711:function(e,t,a){"use strict";a.r(t);var s=a(1),o=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"manual-upgrades"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manual-upgrades"}},[e._v("#")]),e._v(" Manual Upgrades")]),e._v(" "),t("p",{attrs:{synopsis:""}},[e._v("Learn how to manually upgrade your node.")]),e._v(" "),t("h2",{attrs:{id:"pre-requisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisites"}},[e._v("#")]),e._v(" Pre-requisites")]),e._v(" "),t("ul",[t("li",{attrs:{prereq:""}},[t("RouterLink",{attrs:{to:"/validators/quickstart/installation.html"}},[e._v("Install Qom")])],1)]),e._v(" "),t("h2",{attrs:{id:"_1-upgrade-the-qom-one-version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-upgrade-the-qom-one-version"}},[e._v("#")]),e._v(" 1. Upgrade the Qom One version")]),e._v(" "),t("p",[e._v("Before upgrading the Qom version. Stop your instance of "),t("code",[e._v("qomd")]),e._v(" using "),t("code",[e._v("Ctrl/Cmd+C")]),e._v(".")]),e._v(" "),t("p",[e._v("Next, upgrade the software to the desired release version. Check the QOM "),t("a",{attrs:{href:"https://github.com/qom/qomapp/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("releases page"),t("OutboundLink")],1),e._v(" for details on each release.")]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",[e._v("Ensure that the version installed matches the one needed for the network you are running (mainnet or testnet).")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2QgcW9tCmdpdCBmZXRjaCAtLWFsbCAmYW1wOyZhbXA7IGdpdCBjaGVja291dCAmbHQ7bmV3X3ZlcnNpb24mZ3Q7Cm1ha2UgaW5zdGFsbAo="}}),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[e._v("If you have issues at this step, please check that you have the latest stable version of "),t("a",{attrs:{href:"https://golang.org/dl/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Golang"),t("OutboundLink")],1),e._v(" installed.")])]),e._v(" "),t("p",[e._v("Verify that you've successfully installed Qomd on your system by using the "),t("code",[e._v("version")]),e._v(" command:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBxb21kIHZlcnNpb24gLS1sb25nCgpuYW1lOiBxb20Kc2VydmVyX25hbWU6IHFvbWQKdmVyc2lvbjogMy4wLjAKY29tbWl0OiBmZTlkZjQzMzMyODAwYTc0YTE2M2MwMTRjNjllNjI3NjVkODIwNmUzCmJ1aWxkX3RhZ3M6IG5ldGdvLGxlZGdlcgpnbzogZ28gdmVyc2lvbiBnbzEuMTkgZGFyd2luL2FtZDY0Ci4uLgo="}}),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[e._v("If the software version does not match, then please check your "),t("code",[e._v("$PATH")]),e._v(" to ensure the correct "),t("code",[e._v("qomd")]),e._v(" is running.")])]),e._v(" "),t("h2",{attrs:{id:"_2-replace-genesis-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-replace-genesis-file"}},[e._v("#")]),e._v(" 2. Replace Genesis file")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[e._v("You can find the latest "),t("code",[e._v("genesis.json")]),e._v(" file for mainnet or testnet in the following repositories:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Mainnet")]),e._v(": "),t("a",{attrs:{href:"https://github.com/qom/mainnet",target:"_blank",rel:"noopener noreferrer"}},[e._v("github.com/qom/mainnet"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("strong",[e._v("Testnet")]),e._v(": "),t("a",{attrs:{href:"https://github.com/qom/testnets",target:"_blank",rel:"noopener noreferrer"}},[e._v("github.com/qom/testnets"),t("OutboundLink")],1)])])]),e._v(" "),t("p",[e._v("Save the new genesis as "),t("code",[e._v("new_genesis.json")]),e._v(". Then, replace the old "),t("code",[e._v("genesis.json")]),e._v(" located in your "),t("code",[e._v("config/")]),e._v(" directory with "),t("code",[e._v("new_genesis.json")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2QgJEhPTUUvLnFvbWQvY29uZmlnCmNwIC1mIGdlbmVzaXMuanNvbiBuZXdfZ2VuZXNpcy5qc29uCm12IG5ld19nZW5lc2lzLmpzb24gZ2VuZXNpcy5qc29uCg=="}}),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[e._v("We recommend using "),t("code",[e._v("sha256sum")]),e._v(" to check the hash of the downloaded genesis against the expected genesis.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2Qgfi8ucW9tZC9jb25maWcKZWNobyAmcXVvdDsmbHQ7ZXhwZWN0ZWRfaGFzaCZndDsgIGdlbmVzaXMuanNvbiZxdW90OyB8IHNoYTI1NnN1bSAtYwo="}})],1),e._v(" "),t("h2",{attrs:{id:"_3-data-reset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-data-reset"}},[e._v("#")]),e._v(" 3. Data Reset")]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",[e._v("Check "),t("RouterLink",{attrs:{to:"/validators/upgrades/upgrades.html"}},[e._v("here")]),e._v(" if the version you are upgrading require a data reset (hard fork). If this is not the case, you can skip to "),t("a",{attrs:{href:"https://docs.qom.one/validators/upgrades/manual.html#_4-restart-node",target:"_blank",rel:"noopener noreferrer"}},[e._v("Restart"),t("OutboundLink")],1),e._v(".")],1)]),e._v(" "),t("p",[e._v("Remove the outdated files and reset the data:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cm0gJEhPTUUvLnFvbWQvY29uZmlnL2FkZHJib29rLmpzb24KcW9tZCB0ZW5kZXJtaW50IHVuc2FmZS1yZXNldC1hbGwgLS1ob21lICRIT01FLy5xb21kCg=="}}),e._v(" "),t("p",[e._v("Your node is now in a pristine state while keeping the original "),t("code",[e._v("priv_validator.json")]),e._v(" and "),t("code",[e._v("config.toml")]),e._v(". If you had any sentry nodes or full nodes setup before,\nyour node will still try to connect to them, but may fail if they haven't also\nbeen upgraded.")]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",[e._v("🚨 "),t("strong",[e._v("IMPORTANT")]),e._v(" 🚨")]),e._v(" "),t("p",[e._v("Make sure that every node has a unique "),t("code",[e._v("priv_validator.json")]),e._v(". "),t("strong",[e._v("DO NOT")]),e._v(" copy the "),t("code",[e._v("priv_validator.json")]),e._v(" from an old node to multiple new nodes. Running two nodes with the same "),t("code",[e._v("priv_validator.json")]),e._v(" will cause you to "),t("a",{attrs:{href:"https://docs.tendermint.com/master/spec/consensus/signing.html#double-signing",target:"_blank",rel:"noopener noreferrer"}},[e._v("double sign"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"_4-restart-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-restart-node"}},[e._v("#")]),e._v(" 4. Restart Node")]),e._v(" "),t("p",[e._v("To restart your node once the new genesis has been updated, use the "),t("code",[e._v("start")]),e._v(" command:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cW9tZCBzdGFydAo="}})],1)}),[],!1,null,null,null);t.default=o.exports}}]);