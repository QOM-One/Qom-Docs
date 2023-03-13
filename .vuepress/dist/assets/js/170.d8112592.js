(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{616:function(t,e,c){"use strict";c.r(e);var d=c(1),v=Object(d.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"state"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" State")]),t._v(" "),e("h2",{attrs:{id:"state-objects"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#state-objects"}},[t._v("#")]),t._v(" State Objects")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("x/inflation")]),t._v(" module keeps the following objects in state:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("State Object")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Key")]),t._v(" "),e("th",[t._v("Value")]),t._v(" "),e("th",[t._v("Store")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Period")]),t._v(" "),e("td",[t._v("Period Counter")]),t._v(" "),e("td",[e("code",[t._v("[]byte{1}")])]),t._v(" "),e("td",[e("code",[t._v("[]byte{period}")])]),t._v(" "),e("td",[t._v("KV")])]),t._v(" "),e("tr",[e("td",[t._v("EpochIdentifier")]),t._v(" "),e("td",[t._v("Epoch identifier bytes")]),t._v(" "),e("td",[e("code",[t._v("[]byte{3}")])]),t._v(" "),e("td",[e("code",[t._v("[]byte{epochIdentifier}")])]),t._v(" "),e("td",[t._v("KV")])]),t._v(" "),e("tr",[e("td",[t._v("EpochsPerPeriod")]),t._v(" "),e("td",[t._v("Epochs per period bytes")]),t._v(" "),e("td",[e("code",[t._v("[]byte{4}")])]),t._v(" "),e("td",[e("code",[t._v("[]byte{epochsPerPeriod}")])]),t._v(" "),e("td",[t._v("KV")])]),t._v(" "),e("tr",[e("td",[t._v("SkippedEpochs")]),t._v(" "),e("td",[t._v("Number of skipped epochs bytes")]),t._v(" "),e("td",[e("code",[t._v("[]byte{5}")])]),t._v(" "),e("td",[e("code",[t._v("[]byte{skippedEpochs}")])]),t._v(" "),e("td",[t._v("KV")])])])]),t._v(" "),e("h3",{attrs:{id:"period"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#period"}},[t._v("#")]),t._v(" Period")]),t._v(" "),e("p",[t._v("Counter to keep track of amount of past periods, based on the epochs per period.")]),t._v(" "),e("h3",{attrs:{id:"epochidentifier"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#epochidentifier"}},[t._v("#")]),t._v(" EpochIdentifier")]),t._v(" "),e("p",[t._v("Identifier to trigger epoch hooks.")]),t._v(" "),e("h3",{attrs:{id:"epochsperperiod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#epochsperperiod"}},[t._v("#")]),t._v(" EpochsPerPeriod")]),t._v(" "),e("p",[t._v("Amount of epochs in one period")]),t._v(" "),e("h2",{attrs:{id:"genesis-state"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#genesis-state"}},[t._v("#")]),t._v(" Genesis State")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("x/inflation")]),t._v(" module's "),e("code",[t._v("GenesisState")]),t._v(" defines the state necessary for\ninitializing the chain from a previously exported height. It contains the module\nparameters and the list of active incentives and their corresponding gas meters\n:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBHZW5lc2lzU3RhdGUgc3RydWN0IHsKCS8vIHBhcmFtcyBkZWZpbmVzIGFsbCB0aGUgcGFyYW1ldGVycyBvZiB0aGUgbW9kdWxlLgoJUGFyYW1zIFBhcmFtcyBgcHJvdG9idWY6JnF1b3Q7Ynl0ZXMsMSxvcHQsbmFtZT1wYXJhbXMscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7cGFyYW1zJnF1b3Q7YAoJLy8gYW1vdW50IG9mIHBhc3QgcGVyaW9kcywgYmFzZWQgb24gdGhlIGVwb2NocyBwZXIgcGVyaW9kIHBhcmFtCglQZXJpb2QgdWludDY0IGBwcm90b2J1ZjomcXVvdDt2YXJpbnQsMixvcHQsbmFtZT1wZXJpb2QscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7cGVyaW9kLG9taXRlbXB0eSZxdW90O2AKCS8vIGluZmxhdGlvbiBlcG9jaCBpZGVudGlmaWVyCglFcG9jaElkZW50aWZpZXIgc3RyaW5nIGBwcm90b2J1ZjomcXVvdDtieXRlcywzLG9wdCxuYW1lPWVwb2NoX2lkZW50aWZpZXIsanNvbj1lcG9jaElkZW50aWZpZXIscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7ZXBvY2hfaWRlbnRpZmllcixvbWl0ZW1wdHkmcXVvdDtgCgkvLyBudW1iZXIgb2YgZXBvY2hzIGFmdGVyIHdoaWNoIGluZmxhdGlvbiBpcyByZWNhbGN1bGF0ZWQKCUVwb2Noc1BlclBlcmlvZCBpbnQ2NCBgcHJvdG9idWY6JnF1b3Q7dmFyaW50LDQsb3B0LG5hbWU9ZXBvY2hzX3Blcl9wZXJpb2QsanNvbj1lcG9jaHNQZXJQZXJpb2QscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7ZXBvY2hzX3Blcl9wZXJpb2Qsb21pdGVtcHR5JnF1b3Q7YAoJLy8gbnVtYmVyIG9mIGVwb2NocyB0aGF0IGhhdmUgcGFzc2VkIHdoaWxlIGluZmxhdGlvbiBpcyBkaXNhYmxlZAoJU2tpcHBlZEVwb2NocyB1aW50NjQgYHByb3RvYnVmOiZxdW90O3ZhcmludCw1LG9wdCxuYW1lPXNraXBwZWRfZXBvY2hzLGpzb249c2tpcHBlZEVwb2Nocyxwcm90bzMmcXVvdDsganNvbjomcXVvdDtza2lwcGVkX2Vwb2NocyxvbWl0ZW1wdHkmcXVvdDtgCn0K"}})],1)}),[],!1,null,null,null);e.default=v.exports}}]);