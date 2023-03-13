(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{705:function(e,t,o){"use strict";o.r(t);var r=o(1),n=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"mempool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mempool"}},[e._v("#")]),e._v(" Mempool")]),e._v(" "),t("p",{attrs:{synopsis:""}},[e._v("Learn about the available mempool options in Tendermint.")]),e._v(" "),t("h2",{attrs:{id:"fifo-mempool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fifo-mempool"}},[e._v("#")]),e._v(" FIFO Mempool")]),e._v(" "),t("p",[e._v("The mempool holds uncommitted transactions, which are not yet included in a block.\nThe default mempool implementation for Tendermint blockchains follows a first-in-first-out (FIFO) principle,\nwhich means the ordering of transactions depends solely on the order in which they arrive at the node.\nThe first transaction to be received will be the first transaction to be processed.\nThis is true for gossiping the received transactions to the rest of the peers as well as including them in a block.")]),e._v(" "),t("h2",{attrs:{id:"prioritized-mempool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prioritized-mempool"}},[e._v("#")]),e._v(" Prioritized Mempool")]),e._v(" "),t("p",[e._v("Starting with "),t("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.35.0/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint v0.35"),t("OutboundLink")],1),e._v("\n(has also been backported to "),t("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/17c94bb0dcb354c57f49cdcd1e62f4742752c803/UPGRADING.md?plain=1#L54",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.34.20"),t("OutboundLink")],1),e._v(")\nit is possible to use a prioritized mempool implementation.\nThis allows validators to choose transactions based on the associated fees or other incentive mechanisms.\nIt is achieved by passing a "),t("code",[e._v("priority")]),e._v(" field with each "),t("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/17c94bb0dcb354c57f49cdcd1e62f4742752c803/proto/tendermint/abci/types.proto#L234",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("CheckTx")]),e._v(" response"),t("OutboundLink")],1),e._v(",\nwhich is run on any transaction trying to enter the mempool.")]),e._v(" "),t("p",[e._v("QOM One supports "),t("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-1559#simple-summary",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP-1559"),t("OutboundLink")],1),e._v(" EVM transactions through its\n"),e._v(" "),t("RouterLink",{attrs:{to:"/modules/feemarket/01_concepts.html"}},[e._v("feemarket")]),e._v(" module.\nThis transaction type uses a base fee and a selectable priority tip that add up to the total transaction fees.\nThe prioritized mempool presents an option to automatically make use of this mechanism regarding block generation.")],1),e._v(" "),t("p",[e._v("When using the prioritized mempool, transactions for the next produced block are chosen\nby order of their priority (i.e. their fees) from highest to lowest.\nShould the mempool be full, the prioritized implementation allows\nto remove the transactions with the lowest priority until enough disk space is available for\nan incoming, higher-priority transaction (see "),t("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/17c94bb0dcb354c57f49cdcd1e62f4742752c803/mempool/v1/mempool.go#L505C2-L576",target:"_blank",rel:"noopener noreferrer"}},[e._v("v1/mempool.go"),t("OutboundLink")],1),e._v(" implementation for more details).")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[e._v("Even though the transaction processing can be ordered by priority, the gossiping of transactions will always be according to FIFO.")])]),e._v(" "),t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),t("p",[e._v("To use the a prioritized mempool, adjust "),t("code",[e._v('version = "v1"')]),e._v(" in the node configuration at "),t("code",[e._v("~/.qomd/config/config.toml")]),e._v(".\nThe default value "),t("code",[e._v('"v0"')]),e._v(" indicates the traditional FIFO mempool.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[e._v("Remember to "),t("strong",[e._v("restart")]),e._v(" the node for the changes to take effect.")])]),e._v(" "),t("p",[e._v("See the relevant excerpt from "),t("code",[e._v("config.toml")]),e._v(" here:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIwojIyMgICAgICAgICAgTWVtcG9vbCBDb25maWd1cmF0aW9uIE9wdGlvbiAgICAgICAgICAjIyMKIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIwpbbWVtcG9vbF0KCiMgTWVtcG9vbCB2ZXJzaW9uIHRvIHVzZToKIyAgIDEpICZxdW90O3YwJnF1b3Q7IC0gKGRlZmF1bHQpIEZJRk8gbWVtcG9vbC4KIyAgIDIpICZxdW90O3YxJnF1b3Q7IC0gcHJpb3JpdGl6ZWQgbWVtcG9vbC4KdmVyc2lvbiA9ICZxdW90O3YxJnF1b3Q7Cg=="}}),e._v(" "),t("h2",{attrs:{id:"resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),t("p",[e._v("More detailed information can be found here:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/main/docs/architecture/adr-067-mempool-refactor.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint ADR-067 - Mempool Refactor"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://medium.com/tendermint/tendermint-v0-35-introduces-prioritized-mempool-a-makeover-to-the-peer-to-peer-network-more-61eea6ec572d",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blogpost: Tendermint v0.35 Announcement"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-1559",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP-1559: Fee market change for ETH 1.0 chain"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://notes.ethereum.org/@vbuterin/eip-1559-faq",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP-1559 FAQ"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://consensys.net/blog/quorum/what-is-eip-1559-how-will-it-change-ethereum/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blogpost: What is EIP-1559? How will it change Ethereum?"),t("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);