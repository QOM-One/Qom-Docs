(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{654:function(t,e,a){"use strict";a.r(e);var n=a(1),s=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"concepts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[t._v("#")]),t._v(" Concepts")]),t._v(" "),e("h2",{attrs:{id:"vesting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vesting"}},[t._v("#")]),t._v(" Vesting")]),t._v(" "),e("p",[t._v("Vesting describes the process of converting "),e("code",[t._v("unvested")]),t._v(" into "),e("code",[t._v("vested")]),t._v(" tokens without transferring the ownership of those tokens. In an unvested state, tokens cannot be transferred to other accounts, delegated to validators, or used for governance. A vesting schedule describes the amount and time at which tokens are vested. The duration until which the first tokens are vested is called the "),e("code",[t._v("cliff")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"lockup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lockup"}},[t._v("#")]),t._v(" Lockup")]),t._v(" "),e("p",[t._v("The lockup describes the schedule by which tokens are converted from a  "),e("code",[t._v("locked")]),t._v(" to an "),e("code",[t._v("unlocked")]),t._v(" state. As long as all tokens are locked, the account cannot perform any Ethereum transactions using the "),e("code",[t._v("x/evm")]),t._v(" module. Additionally, locked tokens cannot be transferred to other accounts. In the case in which tokens are both locked and vested at the same time, it is possible to delegate them to validators, but not transfer them to other accounts.")]),t._v(" "),e("p",[t._v("The following table summarizes the actions that are allowed for tokens that are subject to the combination of vesting and lockup:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Token Status")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Transfer")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Delegate")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Vote")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Eth Txs")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("locked")]),t._v(" & "),e("code",[t._v("unvested")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("locked")]),t._v(" & "),e("code",[t._v("vested")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("unlocked")]),t._v(" & "),e("code",[t._v("unvested")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("unlocked")]),t._v(" & "),e("code",[t._v("vested")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])])])]),t._v(" "),e("h2",{attrs:{id:"schedules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#schedules"}},[t._v("#")]),t._v(" Schedules")]),t._v(" "),e("p",[t._v("Vesting and lockup schedules specify the amount and time at which tokens are vested or unlocked. They are defined as "),e("a",{attrs:{href:"https://docs.cosmos.network/main/modules/auth/vesting#period",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("periods")]),e("OutboundLink")],1),t._v(" where each period has its own length and amount. A typical vesting schedule for instance would be defined starting with a one-year period to represent the vesting cliff, followed by several monthly vesting periods until the total allocated vesting amount is vested.")]),t._v(" "),e("p",[t._v("Vesting or lockup schedules can be easily created with Agoric’s "),e("a",{attrs:{href:"https://github.com/agoric-labs/cosmos-sdk/tree/Agoric/x/auth/vesting/cmd/vestcalc",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("vestcalc")]),e("OutboundLink")],1),t._v(" tool. E.g. to calculate a four-year vesting schedule with a one year cliff, starting in January 2022, you can run vestcalc with:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"dmVzdGNhbGMgLS13cml0ZSAtLXN0YXJ0PTIwMjItMDEtMDEgLS1jb2lucz0yMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBhZXZtb3MgLS1tb250aHM9NDggLS1jbGlmZnM9MjAyMy0wMS0wMQo="}}),t._v(" "),e("h2",{attrs:{id:"clawback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clawback"}},[t._v("#")]),t._v(" Clawback")]),t._v(" "),e("p",[t._v("In case a "),e("code",[t._v("ClawbackVestingAccount")]),t._v("'s underlying commitment or contract is breached, the clawback provides a mechanism to return unvested funds to the original funder. The funder of the "),e("code",[t._v("ClawbackVestingAccount")]),t._v(" is the address that sends tokens to the account at account creation. Only the funder can perform the clawback to return the funds to their account. Alternatively, they can specify a destination address to send unvested funds to.")])],1)}),[],!1,null,null,null);e.default=s.exports}}]);