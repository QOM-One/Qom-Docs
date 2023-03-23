(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{583:function(e,t,a){"use strict";a.r(t);var n=a(1),o=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"state-transitions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#state-transitions"}},[e._v("#")]),e._v(" State Transitions")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("x/evm")]),e._v(" module allows for users to submit Ethereum transactions ("),t("code",[e._v("Tx")]),e._v(") and execute their containing messages to evoke state transitions on the given state.")]),e._v(" "),t("p",[e._v("Users submit transactions client-side to broadcast it to the network. When the transaction is included in a block during consensus, it is executed server-side. We highly recommend to understand the basics of the "),t("a",{attrs:{href:"https://docs.tendermint.com/master/introduction/what-is-tendermint.html#intro-to-abci",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint consensus engine"),t("OutboundLink")],1),e._v(" to understand the State Transitions in detail.")]),e._v(" "),t("h2",{attrs:{id:"client-side"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#client-side"}},[e._v("#")]),e._v(" Client-Side")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[e._v("👉 This is based on the "),t("code",[e._v("eth_sendTransaction")]),e._v(" JSON-RPC")])]),e._v(" "),t("ol",[t("li",[e._v("A user submits a transaction via one of the available JSON-RPC endpoints using an Ethereum-compatible client or wallet (eg Metamask, WalletConnect, Ledger, etc):\na. eth (public) namespace:\n"),t("ul",[t("li",[t("code",[e._v("eth_sendTransaction")])]),e._v(" "),t("li",[t("code",[e._v("eth_sendRawTransaction")]),e._v("\nb. personal (private) namespace:")]),e._v(" "),t("li",[t("code",[e._v("personal_sendTransaction")])])])]),e._v(" "),t("li",[e._v("An instance of "),t("code",[e._v("MsgEthereumTx")]),e._v(" is created after populating the RPC transaction using "),t("code",[e._v("SetTxDefaults")]),e._v(" to fill missing tx arguments with  default values")]),e._v(" "),t("li",[e._v("The "),t("code",[e._v("Tx")]),e._v(" fields are validated (stateless) using "),t("code",[e._v("ValidateBasic()")])]),e._v(" "),t("li",[e._v("The "),t("code",[e._v("Tx")]),e._v(" is "),t("strong",[e._v("signed")]),e._v(" using the key associated with the sender address and the latest ethereum hard fork ("),t("code",[e._v("London")]),e._v(", "),t("code",[e._v("Berlin")]),e._v(", etc) from the "),t("code",[e._v("ChainConfig")])]),e._v(" "),t("li",[e._v("The "),t("code",[e._v("Tx")]),e._v(" is "),t("strong",[e._v("built")]),e._v(" from the msg fields using the Cosmos Config builder")]),e._v(" "),t("li",[e._v("The "),t("code",[e._v("Tx")]),e._v(" is "),t("strong",[e._v("broadcasted")]),e._v(" in "),t("a",{attrs:{href:"https://docs.cosmos.network/master/run-node/txs.html#broadcasting-a-transaction",target:"_blank",rel:"noopener noreferrer"}},[e._v("sync mode"),t("OutboundLink")],1),e._v(" to ensure to wait for a "),t("a",{attrs:{href:"https://docs.tendermint.com/master/introduction/what-is-tendermint.html#intro-to-abci",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("CheckTx")]),t("OutboundLink")],1),e._v(" execution response. Transactions are validated by the application using "),t("code",[e._v("CheckTx()")]),e._v(", before being added to the mempool of the consensus engine.")]),e._v(" "),t("li",[e._v("JSON-RPC user receives a response with the "),t("a",{attrs:{href:"https://eth.wiki/en/fundamentals/rlp",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("RLP")]),t("OutboundLink")],1),e._v(" hash of the transaction fields. This hash is different from the default hash used by SDK Transactions that calculates the "),t("code",[e._v("sha256")]),e._v(" hash of the transaction bytes.")])]),e._v(" "),t("h2",{attrs:{id:"server-side"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-side"}},[e._v("#")]),e._v(" Server-Side")]),e._v(" "),t("p",[e._v("Once a block (containing the "),t("code",[e._v("Tx")]),e._v(") has been committed during consensus, it is applied to the application in a series of ABCI msgs server-side.")]),e._v(" "),t("p",[e._v("Each "),t("code",[e._v("Tx")]),e._v(" is handled by the application by calling "),t("a",{attrs:{href:"https://docs.cosmos.network/master/core/baseapp.html#runtx",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("RunTx")]),t("OutboundLink")],1),e._v(". After a stateless validation on each "),t("code",[e._v("sdk.Msg")]),e._v(" in the "),t("code",[e._v("Tx")]),e._v(", the "),t("code",[e._v("AnteHandler")]),e._v(" confirms whether the "),t("code",[e._v("Tx")]),e._v(" is an Ethereum or SDK transaction. As an Ethereum transaction it's containing msgs are then handled by the "),t("code",[e._v("x/evm")]),e._v(" module to update the application's state.")]),e._v(" "),t("h3",{attrs:{id:"antehandler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#antehandler"}},[e._v("#")]),e._v(" AnteHandler")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("anteHandler")]),e._v(" is run for every transaction. It checks if the "),t("code",[e._v("Tx")]),e._v(" is an Ethereum transaction and routes it to an internal ante handler. Here, "),t("code",[e._v("Tx")]),e._v("s are handled using EthereumTx extension options to process them differently than normal Cosmos SDK transactions. The "),t("code",[e._v("antehandler")]),e._v(" runs through a series of options and their "),t("code",[e._v("AnteHandle")]),e._v(" functions for each "),t("code",[e._v("Tx")]),e._v(":")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("EthSetUpContextDecorator()")]),e._v(" is adapted from SetUpContextDecorator from cosmos-sdk, it ignores gas consumption by setting the gas meter to infinite")]),e._v(" "),t("li",[t("code",[e._v("EthValidateBasicDecorator(evmKeeper)")]),e._v(" validates the fields of a Ethereum type Cosmos "),t("code",[e._v("Tx")]),e._v(" msg")]),e._v(" "),t("li",[t("code",[e._v("EthSigVerificationDecorator(evmKeeper)")]),e._v(" validates that the registered chain id is the same as the one on the message, and that the signer address matches the one defined on the message. It's not skipped for RecheckTx, because it set "),t("code",[e._v("From")]),e._v(" address which is critical from other ante handler to work. Failure in RecheckTx will prevent tx to be included into block, especially when CheckTx succeed, in which case user won't see the error message.")]),e._v(" "),t("li",[t("code",[e._v("EthAccountVerificationDecorator(ak, bankKeeper, evmKeeper)")]),e._v(" that the sender balance is greater than the total transaction cost. The account will be set to store if it doesn't exist, i.e cannot be found on store. This AnteHandler decorator will fail if:\n"),t("ul",[t("li",[e._v("any of the msgs is not a MsgEthereumTx")]),e._v(" "),t("li",[e._v("from address is empty")]),e._v(" "),t("li",[e._v("account balance is lower than the transaction cost")])])]),e._v(" "),t("li",[t("code",[e._v("EthNonceVerificationDecorator(ak)")]),e._v(" validates that the transaction nonces are valid and equivalent to the sender account’s current nonce.")]),e._v(" "),t("li",[t("code",[e._v("EthGasConsumeDecorator(evmKeeper)")]),e._v(" validates that the Ethereum tx message has enough to cover intrinsic gas (during CheckTx only) and that the sender has enough balance to pay for the gas cost. Intrinsic gas for a transaction is the amount of gas that the transaction uses before the transaction is executed. The gas is a constant value plus any cost incurred by additional bytes of data supplied with the transaction. This AnteHandler decorator will fail if:\n"),t("ul",[t("li",[e._v("the transaction contains more than one message")]),e._v(" "),t("li",[e._v("the message is not a MsgEthereumTx")]),e._v(" "),t("li",[e._v("sender account cannot be found")]),e._v(" "),t("li",[e._v("transaction's gas limit is lower than the intrinsic gas")]),e._v(" "),t("li",[e._v("user doesn't have enough balance to deduct the transaction fees (gas_limit * gas_price)")]),e._v(" "),t("li",[e._v("transaction or block gas meter runs out of gas")])])]),e._v(" "),t("li",[t("code",[e._v("CanTransferDecorator(evmKeeper, feeMarketKeeper)")]),e._v(" creates an EVM from the message and calls the BlockContext CanTransfer function to see if the address can execute the transaction.")]),e._v(" "),t("li",[t("code",[e._v("EthIncrementSenderSequenceDecorator(ak)")]),e._v("  handles incrementing the sequence of the signer (i.e sender). If the transaction is a contract creation, the nonce will be incremented during the transaction execution and not within this AnteHandler decorator.")])]),e._v(" "),t("p",[e._v("The options "),t("code",[e._v("authante.NewMempoolFeeDecorator()")]),e._v(", "),t("code",[e._v("authante.NewTxTimeoutHeightDecorator()")]),e._v(" and "),t("code",[e._v("authante.NewValidateMemoDecorator(ak)")]),e._v(" are the same as for a Cosmos "),t("code",[e._v("Tx")]),e._v(". Click "),t("a",{attrs:{href:"https://docs.cosmos.network/master/basics/gas-fees.html#antehandler",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" for more on the "),t("code",[e._v("anteHandler")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"evm-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#evm-module"}},[e._v("#")]),e._v(" EVM module")]),e._v(" "),t("p",[e._v("After authentication through the "),t("code",[e._v("antehandler")]),e._v(", each "),t("code",[e._v("sdk.Msg")]),e._v(" (in this case "),t("code",[e._v("MsgEthereumTx")]),e._v(") in the "),t("code",[e._v("Tx")]),e._v(" is delivered to the Msg Handler in the "),t("code",[e._v("x/evm")]),e._v(" module and runs through the following the steps:")]),e._v(" "),t("ol",[t("li",[e._v("Convert "),t("code",[e._v("Msg")]),e._v(" to an ethereum "),t("code",[e._v("Tx")]),e._v(" type")]),e._v(" "),t("li",[e._v("Apply "),t("code",[e._v("Tx")]),e._v(" with "),t("code",[e._v("EVMConfig")]),e._v(" and attempt to perform a state transition, that will only be persisted (committed) to the underlying KVStore if the transaction does not fail:\n"),t("ol",[t("li",[e._v("Confirm that "),t("code",[e._v("EVMConfig")]),e._v(" is created")]),e._v(" "),t("li",[e._v("Create the ethereum signer using chain config value from "),t("code",[e._v("EVMConfig")])]),e._v(" "),t("li",[e._v("Set the ethereum transaction hash to the (impermanent) transient store so that it's also available on the StateDB functions")]),e._v(" "),t("li",[e._v("Generate a new EVM instance")]),e._v(" "),t("li",[e._v("Confirm that EVM params for contract creation ("),t("code",[e._v("EnableCreate")]),e._v(") and contract execution ("),t("code",[e._v("EnableCall")]),e._v(") are enabled")]),e._v(" "),t("li",[e._v("Apply message. If "),t("code",[e._v("To")]),e._v(" address is "),t("code",[e._v("nil")]),e._v(", create new contract using code as deployment code. Else call contract at given address with the given input as parameters")]),e._v(" "),t("li",[e._v("Calculate gas used by the evm operation")])])]),e._v(" "),t("li",[e._v("If "),t("code",[e._v("Tx")]),e._v(" applied sucessfully\n"),t("ol",[t("li",[e._v("Execute EVM "),t("code",[e._v("Tx")]),e._v(" postprocessing hooks. If hooks return error, revert the whole "),t("code",[e._v("Tx")])]),e._v(" "),t("li",[e._v("Refund gas according to Ethereum gas accounting rules")]),e._v(" "),t("li",[e._v("Update block bloom filter value using the logs generated from the tx")]),e._v(" "),t("li",[e._v("Emit SDK events for the transaction fields and tx logs")])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);