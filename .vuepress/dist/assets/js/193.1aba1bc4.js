(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{640:function(e,t,o){"use strict";o.r(t);var r=o(1),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"hooks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[e._v("#")]),e._v(" Hooks")]),e._v(" "),t("p",[e._v("The fees module implements one transaction hook from the "),t("code",[e._v("x/evm")]),e._v(" module in order to distribute fees between developers and validators.")]),e._v(" "),t("h2",{attrs:{id:"evm-hook"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#evm-hook"}},[e._v("#")]),e._v(" EVM Hook")]),e._v(" "),t("p",[e._v("A "),t("a",{attrs:{href:"https://docs.evmos.org/modules/evm/06_hooks.html",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("PostTxProcessing")]),e._v(" EVM hook"),t("OutboundLink")],1),e._v(" executes custom logic after each successful EVM transaction. All fees paid by a user for transaction execution are sent to the "),t("code",[e._v("FeeCollector")]),e._v(" module account during the "),t("code",[e._v("AnteHandler")]),e._v(" execution before being distributed to developers and validators.")]),e._v(" "),t("p",[e._v("If the "),t("code",[e._v("x/revenue")]),e._v(" module is disabled or the EVM transaction targets an unregistered contract, the EVM hook returns "),t("code",[e._v("nil")]),e._v(", without performing any actions. In this case, 100% of the transaction fees remain in the "),t("code",[e._v("FeeCollector")]),e._v(" module, to be distributed to the block proposer.")]),e._v(" "),t("p",[e._v("If the "),t("code",[e._v("x/revenue")]),e._v(" module is enabled and a EVM transaction targets a registered contract, the EVM hook sends a percentage of the transaction fees (paid by the user) to the withdraw address set for that contract, or to the contract deployer.")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("User submits EVM transaction ("),t("code",[e._v("MsgEthereumTx")]),e._v(") to a smart contract and transaction is executed successfully")])]),e._v(" "),t("li",[t("p",[e._v("Check if")]),e._v(" "),t("ul",[t("li",[e._v("fees module is enabled")]),e._v(" "),t("li",[e._v("smart contract is registered to receive fees")])])]),e._v(" "),t("li",[t("p",[e._v("Calculate developer fees according to the "),t("code",[e._v("DeveloperShares")]),e._v(" parameter. The initial transaction message includes the gas price paid by the user and the transaction receipt, which includes the gas used by the transaction.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"IGRldkZlZXMgOj0gcmVjZWlwdC5HYXNVc2VkICogbXNnLkdhc1ByaWNlICogcGFyYW1zLkRldmVsb3BlclNoYXJlcwo="}})],1),e._v(" "),t("li",[t("p",[e._v("Transfer developer fee from the "),t("code",[e._v("FeeCollector")]),e._v(" (Cosmos SDK "),t("code",[e._v("auth")]),e._v(" module account) to the registered withdraw address for that contract. If there is no withdraw address, fees are sent to contract deployer's address.")])]),e._v(" "),t("li",[t("p",[e._v("Distribute the remaining amount in the "),t("code",[e._v("FeeCollector")]),e._v(" to validators according to the "),t("a",{attrs:{href:"https://docs.cosmos.network/main/modules/distribution#the-distribution-scheme",target:"_blank",rel:"noopener noreferrer"}},[e._v("SDK  Distribution Scheme"),t("OutboundLink")],1),e._v(".")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);