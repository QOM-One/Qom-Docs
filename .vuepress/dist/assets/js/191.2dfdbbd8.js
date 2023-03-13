(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{633:function(e,t,s){"use strict";s.r(t);var r=s(1),a=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"state-transitions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#state-transitions"}},[e._v("#")]),e._v(" State Transitions")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("x/revenue")]),e._v(" module allows for three types of state transitions: "),t("code",[e._v("RegisterRevenue")]),e._v(", "),t("code",[e._v("UpdateRevenue")]),e._v(" and "),t("code",[e._v("CancelRevenue")]),e._v(". The logic for distributing transaction fees is handled through "),t("RouterLink",{attrs:{to:"/modules/revenue/05_hooks.html"}},[e._v("Hooks")]),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"register-fee-split"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#register-fee-split"}},[e._v("#")]),e._v(" Register Fee Split")]),e._v(" "),t("p",[e._v("A developer registers a contract for receiving transaction fees, defining the contract address, an array of nonces for "),t("RouterLink",{attrs:{to:"/modules/revenue/01_concepts.html#address-derivation"}},[e._v("address deriviation")]),e._v(" and an optional withdraw address for receiving fees. If the withdraw address is not set, the fees are sent to the deployer address by default.")],1),e._v(" "),t("ol",[t("li",[e._v("User submits a "),t("code",[e._v("RegisterRevenue")]),e._v(" to register a contract address, along with a withdraw address that they would like to receive the fees to")]),e._v(" "),t("li",[e._v("Check if the following conditions pass:\n"),t("ol",[t("li",[t("code",[e._v("x/revenue")]),e._v(" module is enabled")]),e._v(" "),t("li",[e._v("the contract was not previously registered")]),e._v(" "),t("li",[e._v("deployer has a valid account (it has done at least one transaction) and is not a smart contract")]),e._v(" "),t("li",[e._v("an account corresponding to the contract address exists, with a non-empty bytecode")]),e._v(" "),t("li",[e._v("contract address can be derived from the deployer’s address and provided nonces using the "),t("code",[e._v("CREATE")]),e._v(" operation")]),e._v(" "),t("li",[e._v("contract is already deployed")])])]),e._v(" "),t("li",[e._v("Store an instance of the provided fee.")])]),e._v(" "),t("p",[e._v("All transactions sent to the registered contract occurring after registration will have their fees distributed to the developer, according to the global "),t("code",[e._v("DeveloperShares")]),e._v(" parameter.")]),e._v(" "),t("h3",{attrs:{id:"update-fee-split"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-fee-split"}},[e._v("#")]),e._v(" Update Fee Split")]),e._v(" "),t("p",[e._v("A developer updates the withdraw address for a registered contract, defining the contract address and the new withdraw address.")]),e._v(" "),t("ol",[t("li",[e._v("User submits a "),t("code",[e._v("UpdateRevenue")])]),e._v(" "),t("li",[e._v("Check if the following conditions pass:\n"),t("ol",[t("li",[t("code",[e._v("x/revenue")]),e._v(" module is enabled")]),e._v(" "),t("li",[e._v("the contract is registered")]),e._v(" "),t("li",[e._v("the signer of the transaction is the same as the contract deployer")])])]),e._v(" "),t("li",[e._v("Update the fee with the new withdraw address. Note that if withdraw address is empty or the same as deployer address, then the withdraw address is set to "),t("code",[e._v('""')]),e._v(".")])]),e._v(" "),t("p",[e._v("After this update, the developer receives the fees on the new withdraw address.")]),e._v(" "),t("h3",{attrs:{id:"cancel-fee-split"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cancel-fee-split"}},[e._v("#")]),e._v(" Cancel Fee Split")]),e._v(" "),t("p",[e._v("A developer cancels receiving fees for a registered contract, defining the contract address.")]),e._v(" "),t("ol",[t("li",[e._v("User submits a "),t("code",[e._v("CancelRevenue")])]),e._v(" "),t("li",[e._v("Check if the following conditions pass:\n"),t("ol",[t("li",[t("code",[e._v("x/revenue")]),e._v(" module is enabled")]),e._v(" "),t("li",[e._v("the contract is registered")]),e._v(" "),t("li",[e._v("the signer of the transaction is the same as the contract deployer")])])]),e._v(" "),t("li",[e._v("Remove fee from storage")])]),e._v(" "),t("p",[e._v("The developer no longer receives fees from transactions sent to this contract.")])])}),[],!1,null,null,null);t.default=a.exports}}]);