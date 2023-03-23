(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{522:function(t,e,a){"use strict";a.r(e);var s=a(1),o=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"adr-002-evm-hooks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adr-002-evm-hooks"}},[t._v("#")]),t._v(" ADR 002: EVM Hooks")]),t._v(" "),e("h2",{attrs:{id:"changelog"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[t._v("#")]),t._v(" Changelog")]),t._v(" "),e("ul",[e("li",[t._v("2021-08-11: first draft")])]),t._v(" "),e("h2",{attrs:{id:"status"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[t._v("#")]),t._v(" Status")]),t._v(" "),e("p",[t._v("PROPOSED")]),t._v(" "),e("h2",{attrs:{id:"abstract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),e("p",[t._v("The current ADR proposes a hook interface to the EVM module, to extend the tx processing logic externally,\nspecifically to support EVM contract calling native modules through logs.")]),t._v(" "),e("h2",{attrs:{id:"context"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" Context")]),t._v(" "),e("p",[t._v("Currently, there are no way for EVM smart contracts to call cosmos native modules, one way to do this is by emitting\nspecific logs from the contract, and recognize those logs in tx processing code and convert them to native module calls.")]),t._v(" "),e("p",[t._v("To do this in an extensible way, we can add a post tx processing hook into the EVM module, which allows third-party to\nadd custom logic to process transaction logs.")]),t._v(" "),e("h2",{attrs:{id:"decision"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[t._v("#")]),t._v(" Decision")]),t._v(" "),e("p",[t._v("This ADR proposes to add an "),e("code",[t._v("EvmHooks")]),t._v(" interface and a method to register hooks in the "),e("code",[t._v("EvmKeeper")]),t._v(":")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBFdm1Ib29rcyBpbnRlcmZhY2UgewogIFBvc3RUeFByb2Nlc3NpbmcoY3R4IHNkay5Db250ZXh0LCB0eEhhc2ggY29tbW9uLkhhc2gsIGxvZ3MgW10qZXRodHlwZXMuTG9nKSBlcnJvcgp9CgpmdW5jIChrICpFdm1LZWVwZXIpIFNldEhvb2tzKGVoIHR5cGVzLkV2bUhvb2tzKSAqS2VlcGVyOwo="}}),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("PostTxProcessing")]),t._v(" is only called after the EVM transaction finished successfully, it's executed in the same cache context\nas the EVM transaction, if it returns an error, the whole EVM transaction is reverted, if the hook implementor doesn't\nwant to revert the tx, he can always return nil instead.")]),t._v(" "),e("p",[t._v("The error returned by the hooks is translated to a VM error "),e("code",[t._v("failed to process native logs")]),t._v(", the detailed error\nmessage is stored in the return value.")]),t._v(" "),e("p",[t._v("The message is sent to native modules asynchronously, there's no way for the caller to catch and recover the error.")])])]),t._v(" "),e("p",[t._v("The EVM state transition method "),e("code",[t._v("ApplyTransaction")]),t._v(" should be changed like this:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTmVlZCB0byBjcmVhdGUgYSBzbmFwc2hvdCBleHBsaWNpdGx5IHRvIGNvdmVyIGJvdGggdHggcHJvY2Vzc2luZyBhbmQgcG9zdCBwcm9jZXNzaW5nIGxvZ2ljCnZhciByZXZpc2lvbiBpbnQKaWYgay5ob29rcyAhPSBuaWwgewogIHJldmlzaW9uID0gay5TbmFwc2hvdCgpCn0KCgpyZXMsIGVyciA6PSBrLkFwcGx5TWVzc2FnZShldm0sIG1zZywgZXRoQ2ZnLCBmYWxzZSkKaWYgZXJyICE9IG5pbCB7CiAgcmV0dXJuIGVycgp9CgouLi4KCmlmICFyZXMuRmFpbGVkKCkgewogIC8vIE9ubHkgY2FsbCBob29rcyBpZiB0eCBleGVjdXRlZCBzdWNjZXNzZnVsbHkuCiAgZXJyID0gay5ob29rcy5Qb3N0VHhQcm9jZXNzaW5nKGsuY3R4LCB0eEhhc2gsIGxvZ3MpCiAgaWYgZXJyICE9IG5pbCB7CiAgICAvLyBJZiBob29rcyByZXR1cm4gZXJyb3IsIHJldmVydCB0aGUgd2hvbGUgdHguCiAgICBrLlJldmVydFRvU25hcHNob3QocmV2aXNpb24pCiAgICByZXMuVm1FcnJvciA9ICZxdW90O2ZhaWxlZCB0byBwcm9jZXNzIG5hdGl2ZSBsb2dzJnF1b3Q7CiAgICByZXMuUmV0ID0gW11ieXRlKGVyci5FcnJvcigpKQogIH0KfQo="}}),t._v(" "),e("p",[t._v("There are no default hooks implemented in the EVM module, so the proposal is backward compatible, only opens extra\nextensibility for certain use cases.")]),t._v(" "),e("h3",{attrs:{id:"use-case-call-native-module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-case-call-native-module"}},[t._v("#")]),t._v(" Use Case: Call Native Module")]),t._v(" "),e("p",[t._v("To support contract calling native module with this proposal, one can define a log signature and emits the specific log\nfrom the smart contract, native logic registers a "),e("code",[t._v("PostTxProcessing")]),t._v(" hook which recognizes the log and does the native module\ncall.")]),t._v(" "),e("p",[t._v("For example, to support smart contract to transfer native tokens, one can define and emit a "),e("code",[t._v("__CosmosNativeBankSend")]),t._v(" log\nsignature in the smart contract like this:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"solidity",base64:"ZXZlbnQgX19Db3Ntb3NOYXRpdmVCYW5rU2VuZChhZGRyZXNzIHJlY2lwaWVudCwgdWludDI1NiBhbW91bnQsIHN0cmluZyBkZW5vbSk7CgpmdW5jdGlvbiB3aXRoZHJhd190b19uYXRpdmVfdG9rZW4oYW1vdW50IHVpbnQyNTYpIHB1YmxpYyB7CiAgICBfYmFsYW5jZXNbbXNnLnNlbmRlcl0gLT0gYW1vdW50OwogICAgLy8gc2VuZCBuYXRpdmUgdG9rZW5zIGZyb20gY29udHJhY3QgYWRkcmVzcyB0byBtc2cuc2VuZGVyLgogICAgZW1pdCBfX0Nvc21vc05hdGl2ZUJhbmtTZW5kKG1zZy5zZW5kZXIsIGFtb3VudCwgJnF1b3Q7bmF0aXZlX2Rlbm9tJnF1b3Q7KTsKfQo="}}),t._v(" "),e("p",[t._v("And the application registers a "),e("code",[t._v("BankSendHook")]),t._v(" to "),e("code",[t._v("EvmKeeper")]),t._v(", it recognizes the log and converts it to a call to the bank\nmodule's "),e("code",[t._v("SendCoinsFromAccountToAccount")]),t._v(" method:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dmFyICgKICAvLyBCYW5rU2VuZEV2ZW50IHJlcHJlc2VudCB0aGUgc2lnbmF0dXJlIG9mCiAgLy8gYGV2ZW50IF9fQ29zbW9zTmF0aXZlQmFua1NlbmQoYWRkcmVzcyByZWNpcGllbnQsIHVpbnQyNTYgYW1vdW50LCBzdHJpbmcgZGVub20pYAogIEJhbmtTZW5kRXZlbnQgYWJpLkV2ZW50CikKCmZ1bmMgaW5pdCgpIHsKICBhZGRyZXNzVHlwZSwgXyA6PSBhYmkuTmV3VHlwZSgmcXVvdDthZGRyZXNzJnF1b3Q7LCAmcXVvdDsmcXVvdDssIG5pbCkKICB1aW50MjU2VHlwZSwgXyA6PSBhYmkuTmV3VHlwZSgmcXVvdDt1aW50MjU2JnF1b3Q7LCAmcXVvdDsmcXVvdDssIG5pbCkKICBzdHJpbmdUeXBlLCBfIDo9IGFiaS5OZXdUeXBlKCZxdW90O3N0cmluZyZxdW90OywgJnF1b3Q7JnF1b3Q7LCBuaWwpCiAgQmFua1NlbmRFdmVudCA9IGFiaS5OZXdFdmVudCgKICAgICZxdW90O19fQ29zbW9zTmF0aXZlQmFua1NlbmQmcXVvdDssCiAgICAmcXVvdDtfX0Nvc21vc05hdGl2ZUJhbmtTZW5kJnF1b3Q7LAogICAgZmFsc2UsCiAgICBhYmkuQXJndW1lbnRze2FiaS5Bcmd1bWVudHsKICAgICAgTmFtZTogICAgJnF1b3Q7cmVjaXBpZW50JnF1b3Q7LAogICAgICBUeXBlOiAgICBhZGRyZXNzVHlwZSwKICAgICAgSW5kZXhlZDogZmFsc2UsCiAgICB9LCBhYmkuQXJndW1lbnR7CiAgICAgIE5hbWU6ICAgICZxdW90O2Ftb3VudCZxdW90OywKICAgICAgVHlwZTogICAgdWludDI1NlR5cGUsCiAgICAgIEluZGV4ZWQ6IGZhbHNlLAogICAgfSwgYWJpLkFyZ3VtZW50ewogICAgICBOYW1lOiAgICAmcXVvdDtkZW5vbSZxdW90OywKICAgICAgVHlwZTogICAgc3RyaW5nVHlwZSwKICAgICAgSW5kZXhlZDogZmFsc2UsCiAgICB9fSwKICApCn0KCnR5cGUgQmFua1NlbmRIb29rIHN0cnVjdCB7CiAgYmFua0tlZXBlciBiYW5ra2VlcGVyLktlZXBlcgp9CgpmdW5jIE5ld0JhbmtTZW5kSG9vayhiYW5rS2VlcGVyIGJhbmtrZWVwZXIuS2VlcGVyKSAqQmFua1NlbmRIb29rIHsKICByZXR1cm4gJmFtcDtCYW5rU2VuZEhvb2t7CiAgICBiYW5rS2VlcGVyOiBiYW5rS2VlcGVyLAogIH0KfQoKZnVuYyAoaCBCYW5rU2VuZEhvb2spIFBvc3RUeFByb2Nlc3NpbmcoY3R4IHNkay5Db250ZXh0LCB0eEhhc2ggY29tbW9uLkhhc2gsIGxvZ3MgW10qZXRodHlwZXMuTG9nKSBlcnJvciB7CiAgZm9yIF8sIGxvZyA6PSByYW5nZSBsb2dzIHsKICAgIGlmIGxlbihsb2cuVG9waWNzKSA9PSAwIHx8IGxvZy5Ub3BpY3NbMF0gIT0gQmFua1NlbmRFdmVudC5JRCB7CiAgICAgIGNvbnRpbnVlCiAgICB9CiAgICBpZiAhQ29udHJhY3RBbGxvd2VkKGxvZy5BZGRyZXNzKSB7CiAgICAgIC8vIENoZWNrIHRoZSBjb250cmFjdCB3aGl0ZWxpc3QgdG8gcHJldmVudCBhY2NpZGVudGFsIG5hdGl2ZSBjYWxsLgogICAgICBjb250aW51ZQogICAgfQogICAgdW5wYWNrZWQsIGVyciA6PSBCYW5rU2VuZEV2ZW50LklucHV0cy5VbnBhY2sobG9nLkRhdGEpCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgbG9nLldhcm4oJnF1b3Q7bG9nIHNpZ25hdHVyZSBtYXRjaGVzIGJ1dCBmYWlsZWQgdG8gZGVjb2RlJnF1b3Q7KQogICAgICBjb250aW51ZQogICAgfQogICAgY29udHJhY3QgOj0gc2RrLkFjY0FkZHJlc3MobG9nLkFkZHJlc3MuQnl0ZXMoKSkKICAgIHJlY2lwaWVudCA6PSBzZGsuQWNjQWRkcmVzcyh1bnBhY2tlZFswXS4oY29tbW9uLkFkZHJlc3MpLkJ5dGVzKCkpCiAgICBjb2lucyA6PSBzZGsuTmV3Q29pbnMoc2RrLk5ld0NvaW4odW5wYWNrZWRbMl0uKHN0cmluZyksIHNkay5OZXdJbnRGcm9tQmlnSW50KHVucGFja2VkWzFdLigqYmlnLkludCkpKSkKICAgIGVyciA9IGguYmFua0tlZXBlci5TZW5kQ29pbnMoY3R4LCBjb250cmFjdCwgcmVjaXBpZW50LCBjb2lucykKICAgIGlmIGVyciAhPSBuaWwgewogICAgICByZXR1cm4gZXJyCiAgICB9CiAgICB9CiAgfQogIHJldHVybiBuaWwKfQo="}}),t._v(" "),e("p",[t._v("Register the hook in "),e("code",[t._v("app.go")]),t._v(":")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZXZtS2VlcGVyLlNldEhvb2tzKE5ld0JhbmtTZW5kSG9vayhiYW5rS2VlcGVyKSk7Cg=="}}),t._v(" "),e("h2",{attrs:{id:"consequences"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[t._v("#")]),t._v(" Consequences")]),t._v(" "),e("h3",{attrs:{id:"backwards-compatibility"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[t._v("#")]),t._v(" Backwards Compatibility")]),t._v(" "),e("p",[t._v("The proposed ADR is backward compatible.")]),t._v(" "),e("h3",{attrs:{id:"positive"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[t._v("#")]),t._v(" Positive")]),t._v(" "),e("ul",[e("li",[t._v("Improve extensibility of EVM module")])]),t._v(" "),e("h3",{attrs:{id:"negative"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[t._v("#")]),t._v(" Negative")]),t._v(" "),e("ul",[e("li",[t._v("On the use case of native call: It's possible that some contracts accidentally define a log with the same signature and cause an unintentional result.\nTo mitigate this, the implementor could whitelist contracts that are allowed to invoke native calls.")])]),t._v(" "),e("h3",{attrs:{id:"neutral"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[t._v("#")]),t._v(" Neutral")]),t._v(" "),e("ul",[e("li",[t._v("On the use case of native call: The contract can only call native modules asynchronously, which means it can neither get the result nor handle the error.")])]),t._v(" "),e("h2",{attrs:{id:"further-discussions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#further-discussions"}},[t._v("#")]),t._v(" Further Discussions")]),t._v(" "),e("h2",{attrs:{id:"test-cases-optional"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-cases-optional"}},[t._v("#")]),t._v(" Test Cases [optional]")]),t._v(" "),e("h2",{attrs:{id:"references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://docs.cosmos.network/main/modules/staking#hooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hooks in staking module"),e("OutboundLink")],1)])])],1)}),[],!1,null,null,null);e.default=o.exports}}]);