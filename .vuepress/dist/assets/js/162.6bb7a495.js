(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{607:function(e,t,o){"use strict";o.r(t);var n=o(1),i=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"state-transitions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#state-transitions"}},[e._v("#")]),e._v(" State Transitions")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("x/incentive")]),e._v(" module allows for two types of registration state transitions:  "),t("code",[e._v("RegisterIncentiveProposal")]),e._v(" and "),t("code",[e._v("CancelIncentiveProposal")]),e._v(". The logic for "),t("em",[e._v("gas metering")]),e._v(" and "),t("em",[e._v("distributing rewards")]),e._v(", is handled through "),t("RouterLink",{attrs:{to:"/modules/incentives/05_hooks.html"}},[e._v("Hooks")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"incentive-registration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#incentive-registration"}},[e._v("#")]),e._v(" Incentive Registration")]),e._v(" "),t("p",[e._v("A user registers an incentive defining the contract, allocations, and number of epochs. Once the proposal passes (i.e is approved by governance), the incentive module creates the incentive and distributes rewards.")]),e._v(" "),t("ol",[t("li",[e._v("User submits a "),t("code",[e._v("RegisterIncentiveProposal")]),e._v(".")]),e._v(" "),t("li",[e._v("Validators of the Evmos Hub vote on the proposal using "),t("code",[e._v("MsgVote")]),e._v(" and proposal passes.")]),e._v(" "),t("li",[e._v("Create incentive for the contract with a "),t("code",[e._v("TotalGas = 0")]),e._v(" and set its "),t("code",[e._v("startTime")]),e._v(" to "),t("code",[e._v("ctx.Blocktime")]),e._v(" if the following conditions are met:\n"),t("ol",[t("li",[e._v("Incentives param is globally enabled")]),e._v(" "),t("li",[e._v("Incentive is not yet registered")]),e._v(" "),t("li",[e._v("Balance in the inflation pool is > 0 for each allocation denom except for the mint denomination. We know that the amount of the minting denom (eg: EVMOS) will be added to every block but for other denoms (IBC vouchers, ERC20 tokens using the "),t("code",[e._v("x/erc20")]),e._v(" module) the module account needs to have a positive amount to distribute the incentives")]),e._v(" "),t("li",[e._v("The sum of all registered allocations for each denom (current + proposed) is < 100%")])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);