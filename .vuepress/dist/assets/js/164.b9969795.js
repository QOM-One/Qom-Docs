(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{609:function(e,t,o){"use strict";o.r(t);var a=o(1),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"hooks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[e._v("#")]),e._v(" Hooks")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("x/incentives")]),e._v(" module implements two transaction hooks from the "),t("code",[e._v("x/evm")]),e._v(" and "),t("code",[e._v("x/epoch")]),e._v(" modules.")]),e._v(" "),t("h2",{attrs:{id:"evm-hook-gas-metering"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#evm-hook-gas-metering"}},[e._v("#")]),e._v(" EVM Hook - Gas Metering")]),e._v(" "),t("p",[e._v("The EVM hook updates the logs that keep track of much gas was used for interacting with an incentived contract during one epoch. An "),t("a",{attrs:{href:"https://docs.evmos.org/modules/evm/06_hooks.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("EVM hook"),t("OutboundLink")],1),e._v(" executes custom logic after each successful evm transaction. In this case it updates the incentive’s total gas count and the participant's own gas count.")]),e._v(" "),t("ol",[t("li",[e._v("User submits an EVM transaction to an incentivized smart contract and the transaction is finished successfully.")]),e._v(" "),t("li",[e._v("The EVM hook’s "),t("code",[e._v("PostTxProcessing")]),e._v(" method is called on the incentives module. It is passed a transaction receipt that includes the cumulative gas used by the transaction sender to pay for the gas fees. The hook\n"),t("ol",[t("li",[e._v("adds "),t("code",[e._v("gasUsed")]),e._v(" to an incentive's cumulated "),t("code",[e._v("totalGas")]),e._v(" and")]),e._v(" "),t("li",[e._v("adds "),t("code",[e._v("gasUsed")]),e._v(" to a participant's gas meter's cumulative gas used.")])])])]),e._v(" "),t("h2",{attrs:{id:"epoch-hook-distribution-of-rewards"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#epoch-hook-distribution-of-rewards"}},[e._v("#")]),e._v(" Epoch Hook - Distribution of Rewards")]),e._v(" "),t("p",[e._v("The Epoch hook triggers the distribution of usage rewards for all registered incentives at the end of each epoch (one day or one week). This distribution process first 1) allocates the rewards for each incentive from the allocation pool and then 2) distributes these rewards to all partticipants of each incentive.")]),e._v(" "),t("ol",[t("li",[e._v("A "),t("code",[e._v("RegisterIncentiveProposal")]),e._v(" passes and an "),t("code",[e._v("incentive")]),e._v(" for the proposed contract is created.")]),e._v(" "),t("li",[e._v("An "),t("code",[e._v("epoch")]),e._v(" begins and "),t("code",[e._v("rewards")]),e._v(" ($EVMOS and other denoms) that are minted on every block for inflation are added to the inflation pool every block.")]),e._v(" "),t("li",[e._v("Users submit transactions and call functions on the incentivized smart contracts to interact and gas gets logged through the EVM Hook.")]),e._v(" "),t("li",[e._v("A block, which signalizes the end of an "),t("code",[e._v("epoch")]),e._v(", is proposed and the "),t("code",[e._v("DistributeIncentives")]),e._v(" method is called through "),t("code",[e._v("AfterEpochEnd")]),e._v(" hook. This method:\n"),t("ol",[t("li",[e._v("Allocates the amount to be distributed from the inflation pool")]),e._v(" "),t("li",[e._v("Distributes the rewards to all participants. The rewards of each participant are limited by the amount of gas they spent on transaction fees during the current epoch and the reward scaler parameter.")]),e._v(" "),t("li",[e._v("Deletes all gas meters for the contract")]),e._v(" "),t("li",[e._v("Updates the remaining epochs of each incentive. If an incentive’s remaining epochs equals to zero, the incentive is removed and the allocation meters are updated.")]),e._v(" "),t("li",[e._v("Sets the cumulative totalGas to zero for the next epoch")])])]),e._v(" "),t("li",[e._v("Rewards for a given denomination accumulate in the inflation pool if the denomination’s allocation capacity is not fully exhaused and the sum of all active incentivized contracts' allocation is < 100%. The accumulated rewards are added to the allocation in the following epoch.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);