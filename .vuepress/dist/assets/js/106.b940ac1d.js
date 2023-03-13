(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{549:function(t,e,a){"use strict";a.r(e);var c=a(1),s=Object(c.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"auth"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#auth"}},[t._v("#")]),t._v(" "),e("code",[t._v("auth")])]),t._v(" "),e("h2",{attrs:{id:"abstract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),e("p",[t._v("This document specifies the auth module of the Cosmos SDK.")]),t._v(" "),e("p",[t._v("The auth module is responsible for specifying the base transaction and account types\nfor an application, since the SDK itself is agnostic to these particulars. It contains\nthe middlewares, where all basic transaction validity checks (signatures, nonces, auxiliary fields)\nare performed, and exposes the account keeper, which allows other modules to read, write, and modify accounts.")]),t._v(" "),e("p",[t._v("This module is used in the Cosmos Hub.")]),t._v(" "),e("h2",{attrs:{id:"contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#concepts"}},[t._v("Concepts")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#gas--fees"}},[t._v("Gas & Fees")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#state"}},[t._v("State")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#accounts"}},[t._v("Accounts")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#antehandlers"}},[t._v("AnteHandlers")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#keepers"}},[t._v("Keepers")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#account-keeper"}},[t._v("Account Keeper")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#parameters"}},[t._v("Parameters")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#client"}},[t._v("Client")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#cli"}},[t._v("CLI")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#grpc"}},[t._v("gRPC")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#rest"}},[t._v("REST")])])])])]),t._v(" "),e("h2",{attrs:{id:"concepts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[t._v("#")]),t._v(" Concepts")]),t._v(" "),e("p",[e("strong",[t._v("Note:")]),t._v(" The auth module is different from the "),e("RouterLink",{attrs:{to:"/modules/modules/authz/"}},[t._v("authz module")]),t._v(".")],1),t._v(" "),e("p",[t._v("The differences are:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("auth")]),t._v(" - authentication of accounts and transactions for Cosmos SDK applications and is responsible for specifying the base transaction and account types.")]),t._v(" "),e("li",[e("code",[t._v("authz")]),t._v(" - authorization for accounts to perform actions on behalf of other accounts and enables a granter to grant authorizations to a grantee that allows the grantee to execute messages on behalf of the granter.")])]),t._v(" "),e("h3",{attrs:{id:"gas-fees"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gas-fees"}},[t._v("#")]),t._v(" Gas & Fees")]),t._v(" "),e("p",[t._v("Fees serve two purposes for an operator of the network.")]),t._v(" "),e("p",[t._v("Fees limit the growth of the state stored by every full node and allow for\ngeneral purpose censorship of transactions of little economic value. Fees\nare best suited as an anti-spam mechanism where validators are disinterested in\nthe use of the network and identities of users.")]),t._v(" "),e("p",[t._v("Fees are determined by the gas limits and gas prices transactions provide, where\n"),e("code",[t._v("fees = ceil(gasLimit * gasPrices)")]),t._v(". Txs incur gas costs for all state reads/writes,\nsignature verification, as well as costs proportional to the tx size. Operators\nshould set minimum gas prices when starting their nodes. They must set the unit\ncosts of gas in each token denomination they wish to support:")]),t._v(" "),e("p",[e("code",[t._v("simd start ... --minimum-gas-prices=0.00001stake;0.05photinos")])]),t._v(" "),e("p",[t._v("When adding transactions to mempool or gossipping transactions, validators check\nif the transaction's gas prices, which are determined by the provided fees, meet\nany of the validator's minimum gas prices. In other words, a transaction must\nprovide a fee of at least one denomination that matches a validator's minimum\ngas price.")]),t._v(" "),e("p",[t._v("Tendermint does not currently provide fee based mempool prioritization, and fee\nbased mempool filtering is local to node and not part of consensus. But with\nminimum gas prices set, such a mechanism could be implemented by node operators.")]),t._v(" "),e("p",[t._v("Because the market value for tokens will fluctuate, validators are expected to\ndynamically adjust their minimum gas prices to a level that would encourage the\nuse of the network.")]),t._v(" "),e("h2",{attrs:{id:"state"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" State")]),t._v(" "),e("h3",{attrs:{id:"accounts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#accounts"}},[t._v("#")]),t._v(" Accounts")]),t._v(" "),e("p",[t._v("Accounts contain authentication information for a uniquely identified external user of an SDK blockchain,\nincluding public key, address, and account number / sequence number for replay protection. For efficiency,\nsince account balances must also be fetched to pay fees, account structs also store the balance of a user\nas "),e("code",[t._v("sdk.Coins")]),t._v(".")]),t._v(" "),e("p",[t._v("Accounts are exposed externally as an interface, and stored internally as\neither a base account or vesting account. Module clients wishing to add more\naccount types may do so.")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("0x01 | Address -> ProtocolBuffer(account)")])])]),t._v(" "),e("h4",{attrs:{id:"account-interface"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#account-interface"}},[t._v("#")]),t._v(" Account Interface")]),t._v(" "),e("p",[t._v("The account interface exposes methods to read and write standard account information.\nNote that all of these methods operate on an account struct conforming to the\ninterface - in order to write the account to the store, the account keeper will\nneed to be used.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQWNjb3VudEkgaXMgYW4gaW50ZXJmYWNlIHVzZWQgdG8gc3RvcmUgY29pbnMgYXQgYSBnaXZlbiBhZGRyZXNzIHdpdGhpbiBzdGF0ZS4KLy8gSXQgcHJlc3VtZXMgYSBub3Rpb24gb2Ygc2VxdWVuY2UgbnVtYmVycyBmb3IgcmVwbGF5IHByb3RlY3Rpb24sCi8vIGEgbm90aW9uIG9mIGFjY291bnQgbnVtYmVycyBmb3IgcmVwbGF5IHByb3RlY3Rpb24gZm9yIHByZXZpb3VzbHkgcHJ1bmVkIGFjY291bnRzLAovLyBhbmQgYSBwdWJrZXkgZm9yIGF1dGhlbnRpY2F0aW9uIHB1cnBvc2VzLgovLwovLyBNYW55IGNvbXBsZXggY29uZGl0aW9ucyBjYW4gYmUgdXNlZCBpbiB0aGUgY29uY3JldGUgc3RydWN0IHdoaWNoIGltcGxlbWVudHMgQWNjb3VudEkuCnR5cGUgQWNjb3VudEkgaW50ZXJmYWNlIHsKCXByb3RvLk1lc3NhZ2UKCglHZXRBZGRyZXNzKCkgc2RrLkFjY0FkZHJlc3MKCVNldEFkZHJlc3Moc2RrLkFjY0FkZHJlc3MpIGVycm9yIC8vIGVycm9ycyBpZiBhbHJlYWR5IHNldC4KCglHZXRQdWJLZXkoKSBjcnlwdG8uUHViS2V5IC8vIGNhbiByZXR1cm4gbmlsLgoJU2V0UHViS2V5KGNyeXB0by5QdWJLZXkpIGVycm9yCgoJR2V0QWNjb3VudE51bWJlcigpIHVpbnQ2NAoJU2V0QWNjb3VudE51bWJlcih1aW50NjQpIGVycm9yCgoJR2V0U2VxdWVuY2UoKSB1aW50NjQKCVNldFNlcXVlbmNlKHVpbnQ2NCkgZXJyb3IKCgkvLyBFbnN1cmUgdGhhdCBhY2NvdW50IGltcGxlbWVudHMgc3RyaW5nZXIKCVN0cmluZygpIHN0cmluZwp9Cg=="}}),t._v(" "),e("h5",{attrs:{id:"base-account"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#base-account"}},[t._v("#")]),t._v(" Base Account")]),t._v(" "),e("p",[t._v("A base account is the simplest and most common account type, which just stores all requisite\nfields directly in a struct.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"Ly8gQmFzZUFjY291bnQgZGVmaW5lcyBhIGJhc2UgYWNjb3VudCB0eXBlLiBJdCBjb250YWlucyBhbGwgdGhlIG5lY2Vzc2FyeSBmaWVsZHMKLy8gZm9yIGJhc2ljIGFjY291bnQgZnVuY3Rpb25hbGl0eS4gQW55IGN1c3RvbSBhY2NvdW50IHR5cGUgc2hvdWxkIGV4dGVuZCB0aGlzCi8vIHR5cGUgZm9yIGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eSAoZS5nLiB2ZXN0aW5nKS4KbWVzc2FnZSBCYXNlQWNjb3VudCB7CiAgc3RyaW5nIGFkZHJlc3MgPSAxOwogIGdvb2dsZS5wcm90b2J1Zi5BbnkgcHViX2tleSA9IDI7CiAgdWludDY0IGFjY291bnRfbnVtYmVyID0gMzsKICB1aW50NjQgc2VxdWVuY2UgICAgICAgPSA0Owp9Cg=="}}),t._v(" "),e("h3",{attrs:{id:"vesting-account"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vesting-account"}},[t._v("#")]),t._v(" Vesting Account")]),t._v(" "),e("p",[t._v("See "),e("a",{attrs:{href:"https://docs.cosmos.network/main/modules/auth/vesting/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vesting"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"antehandlers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#antehandlers"}},[t._v("#")]),t._v(" AnteHandlers")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("x/auth")]),t._v(" module presently has no transaction handlers of its own, but does expose the special "),e("code",[t._v("AnteHandler")]),t._v(", used for performing basic validity checks on a transaction, such that it could be thrown out of the mempool.\nThe "),e("code",[t._v("AnteHandler")]),t._v(" can be seen as a set of decorators that check transactions within the current context, per "),e("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-010-modular-antehandler.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ADR 010"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("Note that the "),e("code",[t._v("AnteHandler")]),t._v(" is called on both "),e("code",[t._v("CheckTx")]),t._v(" and "),e("code",[t._v("DeliverTx")]),t._v(", as Tendermint proposers presently have the ability to include in their proposed block transactions which fail "),e("code",[t._v("CheckTx")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"decorators"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#decorators"}},[t._v("#")]),t._v(" Decorators")]),t._v(" "),e("p",[t._v("The auth module provides "),e("code",[t._v("AnteDecorator")]),t._v("s that are recursively chained together into a single "),e("code",[t._v("AnteHandler")]),t._v(" in the following order:")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("SetUpContextDecorator")]),t._v(": Sets the "),e("code",[t._v("GasMeter")]),t._v(" in the "),e("code",[t._v("Context")]),t._v(" and wraps the next "),e("code",[t._v("AnteHandler")]),t._v(" with a defer clause to recover from any downstream "),e("code",[t._v("OutOfGas")]),t._v(" panics in the "),e("code",[t._v("AnteHandler")]),t._v(" chain to return an error with information on gas provided and gas used.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("RejectExtensionOptionsDecorator")]),t._v(": Rejects all extension options which can optionally be included in protobuf transactions.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("MempoolFeeDecorator")]),t._v(": Checks if the "),e("code",[t._v("tx")]),t._v(" fee is above local mempool "),e("code",[t._v("minFee")]),t._v(" parameter during "),e("code",[t._v("CheckTx")]),t._v(".")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("ValidateBasicDecorator")]),t._v(": Calls "),e("code",[t._v("tx.ValidateBasic")]),t._v(" and returns any non-nil error.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("TxTimeoutHeightDecorator")]),t._v(": Check for a "),e("code",[t._v("tx")]),t._v(" height timeout.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("ValidateMemoDecorator")]),t._v(": Validates "),e("code",[t._v("tx")]),t._v(" memo with application parameters and returns any non-nil error.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("ConsumeGasTxSizeDecorator")]),t._v(": Consumes gas proportional to the "),e("code",[t._v("tx")]),t._v(" size based on application parameters.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("DeductFeeDecorator")]),t._v(": Deducts the "),e("code",[t._v("FeeAmount")]),t._v(" from first signer of the "),e("code",[t._v("tx")]),t._v(". If the "),e("code",[t._v("x/feegrant")]),t._v(" module is enabled and a fee granter is set, it deducts fees from the fee granter account.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("SetPubKeyDecorator")]),t._v(": Sets the pubkey from a "),e("code",[t._v("tx")]),t._v("'s signers that does not already have its corresponding pubkey saved in the state machine and in the current context.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("ValidateSigCountDecorator")]),t._v(": Validates the number of signatures in "),e("code",[t._v("tx")]),t._v(" based on app-parameters.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("SigGasConsumeDecorator")]),t._v(": Consumes parameter-defined amount of gas for each signature. This requires pubkeys to be set in context for all signers as part of "),e("code",[t._v("SetPubKeyDecorator")]),t._v(".")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("SigVerificationDecorator")]),t._v(": Verifies all signatures are valid. This requires pubkeys to be set in context for all signers as part of "),e("code",[t._v("SetPubKeyDecorator")]),t._v(".")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("IncrementSequenceDecorator")]),t._v(": Increments the account sequence for each signer to prevent replay attacks.")])])]),t._v(" "),e("h2",{attrs:{id:"keepers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keepers"}},[t._v("#")]),t._v(" Keepers")]),t._v(" "),e("p",[t._v("The auth module only exposes one keeper, the account keeper, which can be used to read and write accounts.")]),t._v(" "),e("h3",{attrs:{id:"account-keeper"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#account-keeper"}},[t._v("#")]),t._v(" Account Keeper")]),t._v(" "),e("p",[t._v("Presently only one fully-permissioned account keeper is exposed, which has the ability to both read and write\nall fields of all accounts, and to iterate over all stored accounts.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQWNjb3VudEtlZXBlckkgaXMgdGhlIGludGVyZmFjZSBjb250cmFjdCB0aGF0IHgvYXV0aCdzIGtlZXBlciBpbXBsZW1lbnRzLgp0eXBlIEFjY291bnRLZWVwZXJJIGludGVyZmFjZSB7CgkvLyBSZXR1cm4gYSBuZXcgYWNjb3VudCB3aXRoIHRoZSBuZXh0IGFjY291bnQgbnVtYmVyIGFuZCB0aGUgc3BlY2lmaWVkIGFkZHJlc3MuIERvZXMgbm90IHNhdmUgdGhlIG5ldyBhY2NvdW50IHRvIHRoZSBzdG9yZS4KCU5ld0FjY291bnRXaXRoQWRkcmVzcyhzZGsuQ29udGV4dCwgc2RrLkFjY0FkZHJlc3MpIHR5cGVzLkFjY291bnRJCgoJLy8gUmV0dXJuIGEgbmV3IGFjY291bnQgd2l0aCB0aGUgbmV4dCBhY2NvdW50IG51bWJlci4gRG9lcyBub3Qgc2F2ZSB0aGUgbmV3IGFjY291bnQgdG8gdGhlIHN0b3JlLgoJTmV3QWNjb3VudChzZGsuQ29udGV4dCwgdHlwZXMuQWNjb3VudEkpIHR5cGVzLkFjY291bnRJCgoJLy8gQ2hlY2sgaWYgYW4gYWNjb3VudCBleGlzdHMgaW4gdGhlIHN0b3JlLgoJSGFzQWNjb3VudChzZGsuQ29udGV4dCwgc2RrLkFjY0FkZHJlc3MpIGJvb2wKCgkvLyBSZXRyaWV2ZSBhbiBhY2NvdW50IGZyb20gdGhlIHN0b3JlLgoJR2V0QWNjb3VudChzZGsuQ29udGV4dCwgc2RrLkFjY0FkZHJlc3MpIHR5cGVzLkFjY291bnRJCgoJLy8gU2V0IGFuIGFjY291bnQgaW4gdGhlIHN0b3JlLgoJU2V0QWNjb3VudChzZGsuQ29udGV4dCwgdHlwZXMuQWNjb3VudEkpCgoJLy8gUmVtb3ZlIGFuIGFjY291bnQgZnJvbSB0aGUgc3RvcmUuCglSZW1vdmVBY2NvdW50KHNkay5Db250ZXh0LCB0eXBlcy5BY2NvdW50SSkKCgkvLyBJdGVyYXRlIG92ZXIgYWxsIGFjY291bnRzLCBjYWxsaW5nIHRoZSBwcm92aWRlZCBmdW5jdGlvbi4gU3RvcCBpdGVyYXRpb24gd2hlbiBpdCByZXR1cm5zIHRydWUuCglJdGVyYXRlQWNjb3VudHMoc2RrLkNvbnRleHQsIGZ1bmModHlwZXMuQWNjb3VudEkpIGJvb2wpCgoJLy8gRmV0Y2ggdGhlIHB1YmxpYyBrZXkgb2YgYW4gYWNjb3VudCBhdCBhIHNwZWNpZmllZCBhZGRyZXNzCglHZXRQdWJLZXkoc2RrLkNvbnRleHQsIHNkay5BY2NBZGRyZXNzKSAoY3J5cHRvLlB1YktleSwgZXJyb3IpCgoJLy8gRmV0Y2ggdGhlIHNlcXVlbmNlIG9mIGFuIGFjY291bnQgYXQgYSBzcGVjaWZpZWQgYWRkcmVzcy4KCUdldFNlcXVlbmNlKHNkay5Db250ZXh0LCBzZGsuQWNjQWRkcmVzcykgKHVpbnQ2NCwgZXJyb3IpCgoJLy8gRmV0Y2ggdGhlIG5leHQgYWNjb3VudCBudW1iZXIsIGFuZCBpbmNyZW1lbnQgdGhlIGludGVybmFsIGNvdW50ZXIuCglOZXh0QWNjb3VudE51bWJlcihzZGsuQ29udGV4dCkgdWludDY0Cn0K"}}),t._v(" "),e("h2",{attrs:{id:"parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("p",[t._v("The auth module contains the following parameters:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Key")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Example")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("MaxMemoCharacters")]),t._v(" "),e("td",[t._v("uint64")]),t._v(" "),e("td",[t._v("256")])]),t._v(" "),e("tr",[e("td",[t._v("TxSigLimit")]),t._v(" "),e("td",[t._v("uint64")]),t._v(" "),e("td",[t._v("7")])]),t._v(" "),e("tr",[e("td",[t._v("TxSizeCostPerByte")]),t._v(" "),e("td",[t._v("uint64")]),t._v(" "),e("td",[t._v("10")])]),t._v(" "),e("tr",[e("td",[t._v("SigVerifyCostED25519")]),t._v(" "),e("td",[t._v("uint64")]),t._v(" "),e("td",[t._v("590")])]),t._v(" "),e("tr",[e("td",[t._v("SigVerifyCostSecp256k1")]),t._v(" "),e("td",[t._v("uint64")]),t._v(" "),e("td",[t._v("1000")])])])]),t._v(" "),e("h2",{attrs:{id:"client"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[t._v("#")]),t._v(" Client")]),t._v(" "),e("h3",{attrs:{id:"cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[t._v("#")]),t._v(" CLI")]),t._v(" "),e("p",[t._v("A user can query and interact with the "),e("code",[t._v("auth")]),t._v(" module using the CLI.")]),t._v(" "),e("h3",{attrs:{id:"query"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[t._v("#")]),t._v(" Query")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("query")]),t._v(" commands allow users to query "),e("code",[t._v("auth")]),t._v(" state.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBxdWVyeSBhdXRoIC0taGVscAo="}}),t._v(" "),e("h4",{attrs:{id:"account"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#account"}},[t._v("#")]),t._v(" account")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("account")]),t._v(" command allow users to query for an account by it's address.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBxdWVyeSBhdXRoIGFjY291bnQgW2FkZHJlc3NdIFtmbGFnc10K"}}),t._v(" "),e("p",[t._v("Example:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBxdWVyeSBhdXRoIGFjY291bnQgY29zbW9zMS4uLgo="}}),t._v(" "),e("p",[t._v("Example Output:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"J0B0eXBlJzogL2Nvc21vcy5hdXRoLnYxYmV0YTEuQmFzZUFjY291bnQKYWNjb3VudF9udW1iZXI6ICZxdW90OzAmcXVvdDsKYWRkcmVzczogY29zbW9zMXp3ZzZ0cGw4YXc0cmF3djhzZ2FnOTA4NmxwdzVodjMzdTVjdHIyCnB1Yl9rZXk6CiAgJ0B0eXBlJzogL2Nvc21vcy5jcnlwdG8uc2VjcDI1NmsxLlB1YktleQogIGtleTogQXBEckUzOHpaZGQ3d0xtRlM5WW1xTzY4NHk1REc2ZmpaNHJWZWloRi9BUUQKc2VxdWVuY2U6ICZxdW90OzEmcXVvdDsK"}}),t._v(" "),e("h4",{attrs:{id:"accounts-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#accounts-2"}},[t._v("#")]),t._v(" accounts")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("accounts")]),t._v(" command allow users to query all the available accounts.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBxdWVyeSBhdXRoIGFjY291bnRzIFtmbGFnc10K"}}),t._v(" "),e("p",[t._v("Example:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBxdWVyeSBhdXRoIGFjY291bnRzCg=="}}),t._v(" "),e("p",[t._v("Example Output:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YWNjb3VudHM6Ci0gJ0B0eXBlJzogL2Nvc21vcy5hdXRoLnYxYmV0YTEuQmFzZUFjY291bnQKICBhY2NvdW50X251bWJlcjogJnF1b3Q7MCZxdW90OwogIGFkZHJlc3M6IGNvc21vczF6d2c2dHBsOGF3NHJhd3Y4c2dhZzkwODZscHc1aHYzM3U1Y3RyMgogIHB1Yl9rZXk6CiAgICAnQHR5cGUnOiAvY29zbW9zLmNyeXB0by5zZWNwMjU2azEuUHViS2V5CiAgICBrZXk6IEFwRHJFMzh6WmRkN3dMbUZTOVltcU82ODR5NURHNmZqWjRyVmVpaEYvQVFECiAgc2VxdWVuY2U6ICZxdW90OzEmcXVvdDsKLSAnQHR5cGUnOiAvY29zbW9zLmF1dGgudjFiZXRhMS5Nb2R1bGVBY2NvdW50CiAgYmFzZV9hY2NvdW50OgogICAgYWNjb3VudF9udW1iZXI6ICZxdW90OzgmcXVvdDsKICAgIGFkZHJlc3M6IGNvc21vczF5bDZoZGpobWtmMzc2Mzk3MzBnZmZhbnB6bmR6ZHBtaHdsa2ZocgogICAgcHViX2tleTogbnVsbAogICAgc2VxdWVuY2U6ICZxdW90OzAmcXVvdDsKICBuYW1lOiB0cmFuc2ZlcgogIHBlcm1pc3Npb25zOgogIC0gbWludGVyCiAgLSBidXJuZXIKLSAnQHR5cGUnOiAvY29zbW9zLmF1dGgudjFiZXRhMS5Nb2R1bGVBY2NvdW50CiAgYmFzZV9hY2NvdW50OgogICAgYWNjb3VudF9udW1iZXI6ICZxdW90OzQmcXVvdDsKICAgIGFkZHJlc3M6IGNvc21vczFmbDQ4dnNubXNkemN2ODVxNWQycTR6NWFqZGhhOHl1MzRtZjBlaAogICAgcHViX2tleTogbnVsbAogICAgc2VxdWVuY2U6ICZxdW90OzAmcXVvdDsKICBuYW1lOiBib25kZWRfdG9rZW5zX3Bvb2wKICBwZXJtaXNzaW9uczoKICAtIGJ1cm5lcgogIC0gc3Rha2luZwotICdAdHlwZSc6IC9jb3Ntb3MuYXV0aC52MWJldGExLk1vZHVsZUFjY291bnQKICBiYXNlX2FjY291bnQ6CiAgICBhY2NvdW50X251bWJlcjogJnF1b3Q7NSZxdW90OwogICAgYWRkcmVzczogY29zbW9zMXR5Z21zM3hoaHMzeXY0ODdwaHgzZHc0YTk1am43dDdscG00NzByCiAgICBwdWJfa2V5OiBudWxsCiAgICBzZXF1ZW5jZTogJnF1b3Q7MCZxdW90OwogIG5hbWU6IG5vdF9ib25kZWRfdG9rZW5zX3Bvb2wKICBwZXJtaXNzaW9uczoKICAtIGJ1cm5lcgogIC0gc3Rha2luZwotICdAdHlwZSc6IC9jb3Ntb3MuYXV0aC52MWJldGExLk1vZHVsZUFjY291bnQKICBiYXNlX2FjY291bnQ6CiAgICBhY2NvdW50X251bWJlcjogJnF1b3Q7NiZxdW90OwogICAgYWRkcmVzczogY29zbW9zMTBkMDd5MjY1Z21tdXZ0NHowdzlhdzg4MGpuc3I3MDBqNnpuOWtuCiAgICBwdWJfa2V5OiBudWxsCiAgICBzZXF1ZW5jZTogJnF1b3Q7MCZxdW90OwogIG5hbWU6IGdvdgogIHBlcm1pc3Npb25zOgogIC0gYnVybmVyCi0gJ0B0eXBlJzogL2Nvc21vcy5hdXRoLnYxYmV0YTEuTW9kdWxlQWNjb3VudAogIGJhc2VfYWNjb3VudDoKICAgIGFjY291bnRfbnVtYmVyOiAmcXVvdDszJnF1b3Q7CiAgICBhZGRyZXNzOiBjb3Ntb3MxanY2NXMzZ3JxZjZ2NmpsM2RwNHQ2Yzl0OXJrOTljZDg4bHl1ZmwKICAgIHB1Yl9rZXk6IG51bGwKICAgIHNlcXVlbmNlOiAmcXVvdDswJnF1b3Q7CiAgbmFtZTogZGlzdHJpYnV0aW9uCiAgcGVybWlzc2lvbnM6IFtdCi0gJ0B0eXBlJzogL2Nvc21vcy5hdXRoLnYxYmV0YTEuQmFzZUFjY291bnQKICBhY2NvdW50X251bWJlcjogJnF1b3Q7MSZxdW90OwogIGFkZHJlc3M6IGNvc21vczE0N2szcjd2MnR2d3FoY21heGNmcWw3ajhybWtybHNlbXhzaGQzagogIHB1Yl9rZXk6IG51bGwKICBzZXF1ZW5jZTogJnF1b3Q7MCZxdW90OwotICdAdHlwZSc6IC9jb3Ntb3MuYXV0aC52MWJldGExLk1vZHVsZUFjY291bnQKICBiYXNlX2FjY291bnQ6CiAgICBhY2NvdW50X251bWJlcjogJnF1b3Q7NyZxdW90OwogICAgYWRkcmVzczogY29zbW9zMW0zaDMwd2x2c2Y4bGxydXh0cHVrZHZzeTBrbTJrdW04ZzM4YzhxCiAgICBwdWJfa2V5OiBudWxsCiAgICBzZXF1ZW5jZTogJnF1b3Q7MCZxdW90OwogIG5hbWU6IG1pbnQKICBwZXJtaXNzaW9uczoKICAtIG1pbnRlcgotICdAdHlwZSc6IC9jb3Ntb3MuYXV0aC52MWJldGExLk1vZHVsZUFjY291bnQKICBiYXNlX2FjY291bnQ6CiAgICBhY2NvdW50X251bWJlcjogJnF1b3Q7MiZxdW90OwogICAgYWRkcmVzczogY29zbW9zMTd4cGZ2YWttMmFtZzk2MnlsczZmODR6M2tlbGw4YzVsc2VycXRhCiAgICBwdWJfa2V5OiBudWxsCiAgICBzZXF1ZW5jZTogJnF1b3Q7MCZxdW90OwogIG5hbWU6IGZlZV9jb2xsZWN0b3IKICBwZXJtaXNzaW9uczogW10KcGFnaW5hdGlvbjoKICBuZXh0X2tleTogbnVsbAogIHRvdGFsOiAmcXVvdDswJnF1b3Q7Cg=="}}),t._v(" "),e("h4",{attrs:{id:"params"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#params"}},[t._v("#")]),t._v(" params")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("params")]),t._v(" command allow users to query the current auth parameters.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBxdWVyeSBhdXRoIHBhcmFtcyBbZmxhZ3NdCg=="}}),t._v(" "),e("p",[t._v("Example:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBxdWVyeSBhdXRoIHBhcmFtcwo="}}),t._v(" "),e("p",[t._v("Example Output:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWF4X21lbW9fY2hhcmFjdGVyczogJnF1b3Q7MjU2JnF1b3Q7CnNpZ192ZXJpZnlfY29zdF9lZDI1NTE5OiAmcXVvdDs1OTAmcXVvdDsKc2lnX3ZlcmlmeV9jb3N0X3NlY3AyNTZrMTogJnF1b3Q7MTAwMCZxdW90Owp0eF9zaWdfbGltaXQ6ICZxdW90OzcmcXVvdDsKdHhfc2l6ZV9jb3N0X3Blcl9ieXRlOiAmcXVvdDsxMCZxdW90Owo="}}),t._v(" "),e("h3",{attrs:{id:"transactions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[t._v("#")]),t._v(" Transactions")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("auth")]),t._v(" module supports transactions commands to help you with signing and more. Compared to other modules you can access directly the "),e("code",[t._v("auth")]),t._v(" module transactions commands using the only "),e("code",[t._v("tx")]),t._v(" command.")]),t._v(" "),e("p",[t._v("Use directly the "),e("code",[t._v("--help")]),t._v(" flag to get more information about the "),e("code",[t._v("tx")]),t._v(" command.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCB0eCAtLWhlbHAK"}}),t._v(" "),e("h4",{attrs:{id:"sign"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sign"}},[t._v("#")]),t._v(" "),e("code",[t._v("sign")])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("sign")]),t._v(" command allows users to sign transactions that was generated offline.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCB0eCBzaWduIHR4Lmpzb24gLS1mcm9tICRBTElDRSAmZ3Q7IHR4LnNpZ25lZC5qc29uCg=="}}),t._v(" "),e("p",[t._v("The result is a signed transaction that can be broadcasted to the network thanks to the broadcast command.")]),t._v(" "),e("p",[t._v("More information about the "),e("code",[t._v("sign")]),t._v(" command can be found running "),e("code",[t._v("simd tx sign --help")]),t._v(".")]),t._v(" "),e("h4",{attrs:{id:"sign-batch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sign-batch"}},[t._v("#")]),t._v(" "),e("code",[t._v("sign-batch")])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("sign-batch")]),t._v(" command allows users to sign multiples offline generated transactions.\nThe transactions can be in one file, with one tx per line, or in multiple files.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCB0eCBzaWduIHR4cy5qc29uIC0tZnJvbSAkQUxJQ0UgJmd0OyB0eC5zaWduZWQuanNvbgo="}}),t._v(" "),e("p",[t._v("or")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash ",base64:"c2ltZCB0eCBzaWduIHR4MS5qc29uIHR4Mi5qc29uIHR4My5qc29uIC0tZnJvbSAkQUxJQ0UgJmd0OyB0eC5zaWduZWQuanNvbgo="}}),t._v(" "),e("p",[t._v("The result is multiples signed transactions. For combining the signed transactions into one transactions, use the "),e("code",[t._v("--append")]),t._v(" flag.")]),t._v(" "),e("p",[t._v("More information about the "),e("code",[t._v("sign-batch")]),t._v(" command can be found running "),e("code",[t._v("simd tx sign-batch --help")]),t._v(".")]),t._v(" "),e("h4",{attrs:{id:"multi-sign"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multi-sign"}},[t._v("#")]),t._v(" "),e("code",[t._v("multi-sign")])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("multi-sign")]),t._v(" command allows users to sign transactions that was generated offline by a multisig account.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCB0eCBtdWx0aXNpZ24gdHJhbnNhY3Rpb24uanNvbiBrMWsyazMgazFzaWcuanNvbiBrMnNpZy5qc29uIGszc2lnLmpzb24K"}}),t._v(" "),e("p",[t._v("Where "),e("code",[t._v("k1k2k3")]),t._v(" is the multisig account address, "),e("code",[t._v("k1sig.json")]),t._v(" is the signature of the first signer, "),e("code",[t._v("k2sig.json")]),t._v(" is the signature of the second signer, and "),e("code",[t._v("k3sig.json")]),t._v(" is the signature of the third signer.")]),t._v(" "),e("p",[t._v("More information about the "),e("code",[t._v("multi-sign")]),t._v(" command can be found running "),e("code",[t._v("simd tx multi-sign --help")]),t._v(".")]),t._v(" "),e("h4",{attrs:{id:"multisign-batch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multisign-batch"}},[t._v("#")]),t._v(" "),e("code",[t._v("multisign-batch")])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("multisign-batch")]),t._v(" works the same way as "),e("code",[t._v("sign-batch")]),t._v(", but for multisig accounts.\nWith the difference that the "),e("code",[t._v("multisign-batch")]),t._v(" command requires all transactions to be in one file, and the "),e("code",[t._v("--append")]),t._v(" flag does not exist.")]),t._v(" "),e("p",[t._v("More information about the "),e("code",[t._v("multisign-batch")]),t._v(" command can be found running "),e("code",[t._v("simd tx multisign-batch --help")]),t._v(".")]),t._v(" "),e("h4",{attrs:{id:"validate-signatures"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#validate-signatures"}},[t._v("#")]),t._v(" "),e("code",[t._v("validate-signatures")])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("validate-signatures")]),t._v(" command allows users to validate the signatures of a signed transaction.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBzaW1kIHR4IHZhbGlkYXRlLXNpZ25hdHVyZXMgdHguc2lnbmVkLmpzb24KU2lnbmVyczoKICAwOiBjb3Ntb3MxbDZ2c3FoaDdybndzeXIya3l6M2pqZzNxZHVhejhnd2d5bDgyNzUKClNpZ25hdHVyZXM6CiAgMDogY29zbW9zMWw2dnNxaGg3cm53c3lyMmt5ejNqamczcWR1YXo4Z3dneWw4Mjc1ICAgICAgICAgICAgICAgICAgICAgIFtPS10K"}}),t._v(" "),e("p",[t._v("More information about the "),e("code",[t._v("validate-signatures")]),t._v(" command can be found running "),e("code",[t._v("simd tx validate-signatures --help")]),t._v(".")]),t._v(" "),e("h4",{attrs:{id:"broadcast"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#broadcast"}},[t._v("#")]),t._v(" "),e("code",[t._v("broadcast")])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("broadcast")]),t._v(" command allows users to broadcast a signed transaction to the network.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCB0eCBicm9hZGNhc3QgdHguc2lnbmVkLmpzb24K"}}),t._v(" "),e("p",[t._v("More information about the "),e("code",[t._v("broadcast")]),t._v(" command can be found running "),e("code",[t._v("simd tx broadcast --help")]),t._v(".")]),t._v(" "),e("h4",{attrs:{id:"aux-to-fee"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aux-to-fee"}},[t._v("#")]),t._v(" "),e("code",[t._v("aux-to-fee")])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("aux-to-fee")]),t._v(" comamnds includes the aux signer data in the tx, broadcast the tx, and sends the tip amount to the broadcaster.\n"),e("a",{attrs:{href:"https://docs.cosmos.network/main/core/tips",target:"_blank",rel:"noopener noreferrer"}},[t._v("Learn more about tip transaction"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBgc2ltZGAKc2ltZCB0eCBhdXgtdG8tZmVlIHR4LmF1eC5zaWduZWQuanNvbgo="}}),t._v(" "),e("p",[t._v("More information about the "),e("code",[t._v("aux-to-fee")]),t._v(" command can be found running "),e("code",[t._v("simd tx aux-to-fee --help")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"grpc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grpc"}},[t._v("#")]),t._v(" gRPC")]),t._v(" "),e("p",[t._v("A user can query the "),e("code",[t._v("auth")]),t._v(" module using gRPC endpoints.")]),t._v(" "),e("h4",{attrs:{id:"account-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#account-2"}},[t._v("#")]),t._v(" Account")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("account")]),t._v(" endpoint allow users to query for an account by it's address.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y29zbW9zLmF1dGgudjFiZXRhMS5RdWVyeS9BY2NvdW50Cg=="}}),t._v(" "),e("p",[t._v("Example:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z3JwY3VybCAtcGxhaW50ZXh0IFwKICAgIC1kICd7JnF1b3Q7YWRkcmVzcyZxdW90OzomcXVvdDtjb3Ntb3MxLi4mcXVvdDt9JyBcCiAgICBsb2NhbGhvc3Q6OTA5MCBcCiAgICBjb3Ntb3MuYXV0aC52MWJldGExLlF1ZXJ5L0FjY291bnQK"}}),t._v(" "),e("p",[t._v("Example Output:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ewogICZxdW90O2FjY291bnQmcXVvdDs6ewogICAgJnF1b3Q7QHR5cGUmcXVvdDs6JnF1b3Q7L2Nvc21vcy5hdXRoLnYxYmV0YTEuQmFzZUFjY291bnQmcXVvdDssCiAgICAmcXVvdDthZGRyZXNzJnF1b3Q7OiZxdW90O2Nvc21vczF6d2c2dHBsOGF3NHJhd3Y4c2dhZzkwODZscHc1aHYzM3U1Y3RyMiZxdW90OywKICAgICZxdW90O3B1YktleSZxdW90Ozp7CiAgICAgICZxdW90O0B0eXBlJnF1b3Q7OiZxdW90Oy9jb3Ntb3MuY3J5cHRvLnNlY3AyNTZrMS5QdWJLZXkmcXVvdDssCiAgICAgICZxdW90O2tleSZxdW90OzomcXVvdDtBcERyRTM4elpkZDd3TG1GUzlZbXFPNjg0eTVERzZmalo0clZlaWhGL0FRRCZxdW90OwogICAgfSwKICAgICZxdW90O3NlcXVlbmNlJnF1b3Q7OiZxdW90OzEmcXVvdDsKICB9Cn0K"}}),t._v(" "),e("h4",{attrs:{id:"accounts-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#accounts-3"}},[t._v("#")]),t._v(" Accounts")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("accounts")]),t._v(" endpoint allow users to query all the available accounts.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y29zbW9zLmF1dGgudjFiZXRhMS5RdWVyeS9BY2NvdW50cwo="}}),t._v(" "),e("p",[t._v("Example:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z3JwY3VybCAtcGxhaW50ZXh0IFwKICAgIGxvY2FsaG9zdDo5MDkwIFwKICAgIGNvc21vcy5hdXRoLnYxYmV0YTEuUXVlcnkvQWNjb3VudHMK"}}),t._v(" "),e("p",[t._v("Example Output:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ewogICAmcXVvdDthY2NvdW50cyZxdW90OzpbCiAgICAgIHsKICAgICAgICAgJnF1b3Q7QHR5cGUmcXVvdDs6JnF1b3Q7L2Nvc21vcy5hdXRoLnYxYmV0YTEuQmFzZUFjY291bnQmcXVvdDssCiAgICAgICAgICZxdW90O2FkZHJlc3MmcXVvdDs6JnF1b3Q7Y29zbW9zMXp3ZzZ0cGw4YXc0cmF3djhzZ2FnOTA4NmxwdzVodjMzdTVjdHIyJnF1b3Q7LAogICAgICAgICAmcXVvdDtwdWJLZXkmcXVvdDs6ewogICAgICAgICAgICAmcXVvdDtAdHlwZSZxdW90OzomcXVvdDsvY29zbW9zLmNyeXB0by5zZWNwMjU2azEuUHViS2V5JnF1b3Q7LAogICAgICAgICAgICAmcXVvdDtrZXkmcXVvdDs6JnF1b3Q7QXBEckUzOHpaZGQ3d0xtRlM5WW1xTzY4NHk1REc2ZmpaNHJWZWloRi9BUUQmcXVvdDsKICAgICAgICAgfSwKICAgICAgICAgJnF1b3Q7c2VxdWVuY2UmcXVvdDs6JnF1b3Q7MSZxdW90OwogICAgICB9LAogICAgICB7CiAgICAgICAgICZxdW90O0B0eXBlJnF1b3Q7OiZxdW90Oy9jb3Ntb3MuYXV0aC52MWJldGExLk1vZHVsZUFjY291bnQmcXVvdDssCiAgICAgICAgICZxdW90O2Jhc2VBY2NvdW50JnF1b3Q7OnsKICAgICAgICAgICAgJnF1b3Q7YWRkcmVzcyZxdW90OzomcXVvdDtjb3Ntb3MxeWw2aGRqaG1rZjM3NjM5NzMwZ2ZmYW5wem5kemRwbWh3bGtmaHImcXVvdDssCiAgICAgICAgICAgICZxdW90O2FjY291bnROdW1iZXImcXVvdDs6JnF1b3Q7OCZxdW90OwogICAgICAgICB9LAogICAgICAgICAmcXVvdDtuYW1lJnF1b3Q7OiZxdW90O3RyYW5zZmVyJnF1b3Q7LAogICAgICAgICAmcXVvdDtwZXJtaXNzaW9ucyZxdW90OzpbCiAgICAgICAgICAgICZxdW90O21pbnRlciZxdW90OywKICAgICAgICAgICAgJnF1b3Q7YnVybmVyJnF1b3Q7CiAgICAgICAgIF0KICAgICAgfSwKICAgICAgewogICAgICAgICAmcXVvdDtAdHlwZSZxdW90OzomcXVvdDsvY29zbW9zLmF1dGgudjFiZXRhMS5Nb2R1bGVBY2NvdW50JnF1b3Q7LAogICAgICAgICAmcXVvdDtiYXNlQWNjb3VudCZxdW90Ozp7CiAgICAgICAgICAgICZxdW90O2FkZHJlc3MmcXVvdDs6JnF1b3Q7Y29zbW9zMWZsNDh2c25tc2R6Y3Y4NXE1ZDJxNHo1YWpkaGE4eXUzNG1mMGVoJnF1b3Q7LAogICAgICAgICAgICAmcXVvdDthY2NvdW50TnVtYmVyJnF1b3Q7OiZxdW90OzQmcXVvdDsKICAgICAgICAgfSwKICAgICAgICAgJnF1b3Q7bmFtZSZxdW90OzomcXVvdDtib25kZWRfdG9rZW5zX3Bvb2wmcXVvdDssCiAgICAgICAgICZxdW90O3Blcm1pc3Npb25zJnF1b3Q7OlsKICAgICAgICAgICAgJnF1b3Q7YnVybmVyJnF1b3Q7LAogICAgICAgICAgICAmcXVvdDtzdGFraW5nJnF1b3Q7CiAgICAgICAgIF0KICAgICAgfSwKICAgICAgewogICAgICAgICAmcXVvdDtAdHlwZSZxdW90OzomcXVvdDsvY29zbW9zLmF1dGgudjFiZXRhMS5Nb2R1bGVBY2NvdW50JnF1b3Q7LAogICAgICAgICAmcXVvdDtiYXNlQWNjb3VudCZxdW90Ozp7CiAgICAgICAgICAgICZxdW90O2FkZHJlc3MmcXVvdDs6JnF1b3Q7Y29zbW9zMXR5Z21zM3hoaHMzeXY0ODdwaHgzZHc0YTk1am43dDdscG00NzByJnF1b3Q7LAogICAgICAgICAgICAmcXVvdDthY2NvdW50TnVtYmVyJnF1b3Q7OiZxdW90OzUmcXVvdDsKICAgICAgICAgfSwKICAgICAgICAgJnF1b3Q7bmFtZSZxdW90OzomcXVvdDtub3RfYm9uZGVkX3Rva2Vuc19wb29sJnF1b3Q7LAogICAgICAgICAmcXVvdDtwZXJtaXNzaW9ucyZxdW90OzpbCiAgICAgICAgICAgICZxdW90O2J1cm5lciZxdW90OywKICAgICAgICAgICAgJnF1b3Q7c3Rha2luZyZxdW90OwogICAgICAgICBdCiAgICAgIH0sCiAgICAgIHsKICAgICAgICAgJnF1b3Q7QHR5cGUmcXVvdDs6JnF1b3Q7L2Nvc21vcy5hdXRoLnYxYmV0YTEuTW9kdWxlQWNjb3VudCZxdW90OywKICAgICAgICAgJnF1b3Q7YmFzZUFjY291bnQmcXVvdDs6ewogICAgICAgICAgICAmcXVvdDthZGRyZXNzJnF1b3Q7OiZxdW90O2Nvc21vczEwZDA3eTI2NWdtbXV2dDR6MHc5YXc4ODBqbnNyNzAwajZ6bjlrbiZxdW90OywKICAgICAgICAgICAgJnF1b3Q7YWNjb3VudE51bWJlciZxdW90OzomcXVvdDs2JnF1b3Q7CiAgICAgICAgIH0sCiAgICAgICAgICZxdW90O25hbWUmcXVvdDs6JnF1b3Q7Z292JnF1b3Q7LAogICAgICAgICAmcXVvdDtwZXJtaXNzaW9ucyZxdW90OzpbCiAgICAgICAgICAgICZxdW90O2J1cm5lciZxdW90OwogICAgICAgICBdCiAgICAgIH0sCiAgICAgIHsKICAgICAgICAgJnF1b3Q7QHR5cGUmcXVvdDs6JnF1b3Q7L2Nvc21vcy5hdXRoLnYxYmV0YTEuTW9kdWxlQWNjb3VudCZxdW90OywKICAgICAgICAgJnF1b3Q7YmFzZUFjY291bnQmcXVvdDs6ewogICAgICAgICAgICAmcXVvdDthZGRyZXNzJnF1b3Q7OiZxdW90O2Nvc21vczFqdjY1czNncnFmNnY2amwzZHA0dDZjOXQ5cms5OWNkODhseXVmbCZxdW90OywKICAgICAgICAgICAgJnF1b3Q7YWNjb3VudE51bWJlciZxdW90OzomcXVvdDszJnF1b3Q7CiAgICAgICAgIH0sCiAgICAgICAgICZxdW90O25hbWUmcXVvdDs6JnF1b3Q7ZGlzdHJpYnV0aW9uJnF1b3Q7CiAgICAgIH0sCiAgICAgIHsKICAgICAgICAgJnF1b3Q7QHR5cGUmcXVvdDs6JnF1b3Q7L2Nvc21vcy5hdXRoLnYxYmV0YTEuQmFzZUFjY291bnQmcXVvdDssCiAgICAgICAgICZxdW90O2FjY291bnROdW1iZXImcXVvdDs6JnF1b3Q7MSZxdW90OywKICAgICAgICAgJnF1b3Q7YWRkcmVzcyZxdW90OzomcXVvdDtjb3Ntb3MxNDdrM3I3djJ0dndxaGNtYXhjZnFsN2o4cm1rcmxzZW14c2hkM2omcXVvdDsKICAgICAgfSwKICAgICAgewogICAgICAgICAmcXVvdDtAdHlwZSZxdW90OzomcXVvdDsvY29zbW9zLmF1dGgudjFiZXRhMS5Nb2R1bGVBY2NvdW50JnF1b3Q7LAogICAgICAgICAmcXVvdDtiYXNlQWNjb3VudCZxdW90Ozp7CiAgICAgICAgICAgICZxdW90O2FkZHJlc3MmcXVvdDs6JnF1b3Q7Y29zbW9zMW0zaDMwd2x2c2Y4bGxydXh0cHVrZHZzeTBrbTJrdW04ZzM4YzhxJnF1b3Q7LAogICAgICAgICAgICAmcXVvdDthY2NvdW50TnVtYmVyJnF1b3Q7OiZxdW90OzcmcXVvdDsKICAgICAgICAgfSwKICAgICAgICAgJnF1b3Q7bmFtZSZxdW90OzomcXVvdDttaW50JnF1b3Q7LAogICAgICAgICAmcXVvdDtwZXJtaXNzaW9ucyZxdW90OzpbCiAgICAgICAgICAgICZxdW90O21pbnRlciZxdW90OwogICAgICAgICBdCiAgICAgIH0sCiAgICAgIHsKICAgICAgICAgJnF1b3Q7QHR5cGUmcXVvdDs6JnF1b3Q7L2Nvc21vcy5hdXRoLnYxYmV0YTEuTW9kdWxlQWNjb3VudCZxdW90OywKICAgICAgICAgJnF1b3Q7YmFzZUFjY291bnQmcXVvdDs6ewogICAgICAgICAgICAmcXVvdDthZGRyZXNzJnF1b3Q7OiZxdW90O2Nvc21vczE3eHBmdmFrbTJhbWc5NjJ5bHM2Zjg0ejNrZWxsOGM1bHNlcnF0YSZxdW90OywKICAgICAgICAgICAgJnF1b3Q7YWNjb3VudE51bWJlciZxdW90OzomcXVvdDsyJnF1b3Q7CiAgICAgICAgIH0sCiAgICAgICAgICZxdW90O25hbWUmcXVvdDs6JnF1b3Q7ZmVlX2NvbGxlY3RvciZxdW90OwogICAgICB9CiAgIF0sCiAgICZxdW90O3BhZ2luYXRpb24mcXVvdDs6ewogICAgICAmcXVvdDt0b3RhbCZxdW90OzomcXVvdDs5JnF1b3Q7CiAgIH0KfQo="}}),t._v(" "),e("h4",{attrs:{id:"params-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#params-2"}},[t._v("#")]),t._v(" Params")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("params")]),t._v(" endpoint allow users to query the current auth parameters.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y29zbW9zLmF1dGgudjFiZXRhMS5RdWVyeS9QYXJhbXMK"}}),t._v(" "),e("p",[t._v("Example:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z3JwY3VybCAtcGxhaW50ZXh0IFwKICAgIGxvY2FsaG9zdDo5MDkwIFwKICAgIGNvc21vcy5hdXRoLnYxYmV0YTEuUXVlcnkvUGFyYW1zCg=="}}),t._v(" "),e("p",[t._v("Example Output:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ewogICZxdW90O3BhcmFtcyZxdW90OzogewogICAgJnF1b3Q7bWF4TWVtb0NoYXJhY3RlcnMmcXVvdDs6ICZxdW90OzI1NiZxdW90OywKICAgICZxdW90O3R4U2lnTGltaXQmcXVvdDs6ICZxdW90OzcmcXVvdDssCiAgICAmcXVvdDt0eFNpemVDb3N0UGVyQnl0ZSZxdW90OzogJnF1b3Q7MTAmcXVvdDssCiAgICAmcXVvdDtzaWdWZXJpZnlDb3N0RWQyNTUxOSZxdW90OzogJnF1b3Q7NTkwJnF1b3Q7LAogICAgJnF1b3Q7c2lnVmVyaWZ5Q29zdFNlY3AyNTZrMSZxdW90OzogJnF1b3Q7MTAwMCZxdW90OwogIH0KfQo="}}),t._v(" "),e("h3",{attrs:{id:"rest"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rest"}},[t._v("#")]),t._v(" REST")]),t._v(" "),e("p",[t._v("A user can query the "),e("code",[t._v("auth")]),t._v(" module using REST endpoints.")]),t._v(" "),e("h4",{attrs:{id:"account-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#account-3"}},[t._v("#")]),t._v(" Account")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("account")]),t._v(" endpoint allow users to query for an account by it's address.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"L2Nvc21vcy9hdXRoL3YxYmV0YTEvYWNjb3VudD9hZGRyZXNzPXthZGRyZXNzfQo="}}),t._v(" "),e("h4",{attrs:{id:"accounts-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#accounts-4"}},[t._v("#")]),t._v(" Accounts")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("accounts")]),t._v(" endpoint allow users to query all the available accounts.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"L2Nvc21vcy9hdXRoL3YxYmV0YTEvYWNjb3VudHMK"}}),t._v(" "),e("h4",{attrs:{id:"params-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#params-3"}},[t._v("#")]),t._v(" Params")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("params")]),t._v(" endpoint allow users to query the current auth parameters.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"L2Nvc21vcy9hdXRoL3YxYmV0YTEvcGFyYW1zCg=="}})],1)}),[],!1,null,null,null);e.default=s.exports}}]);