(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{569:function(e,t,o){"use strict";o.r(t);var a=o(1),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"concepts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[e._v("#")]),e._v(" Concepts")]),e._v(" "),t("h2",{attrs:{id:"token-pair"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#token-pair"}},[e._v("#")]),e._v(" Token Pair")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("x/erc20")]),e._v(" module maintains a canonical one-to-one mapping of native Cosmos Coin denomination to ERC20 Token contract addresses (i.e "),t("code",[e._v("sdk.Coin")]),e._v(" ←→ ERC20), called "),t("code",[e._v("TokenPair")]),e._v(".  The conversion of the ERC20 tokens ←→ Coin of a given pair can be enabled or disabled via governance.")]),e._v(" "),t("h2",{attrs:{id:"token-pair-registration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#token-pair-registration"}},[e._v("#")]),e._v(" Token Pair Registration")]),e._v(" "),t("p",[e._v("Users can register a new token pair proposal through the governance module and initiate a vote to include the token pair in the module. Depending on which exists first, the coin or the token, you can either register a Cosmos Coin or a ERC20 Token to create a token pair. One proposal can inculde several token pairs.")]),e._v(" "),t("p",[e._v("When the proposal passes, the erc20 module registers the Cosmos Coin and ERC20 Token mapping on the application's store.")]),e._v(" "),t("h3",{attrs:{id:"registration-of-a-cosmos-coin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#registration-of-a-cosmos-coin"}},[e._v("#")]),e._v(" Registration of a Cosmos Coin")]),e._v(" "),t("p",[e._v("A native Cosmos Coin corresponds to an "),t("code",[e._v("sdk.Coin")]),e._v(" that is native to the bank module. It can be either the native staking/gas denomination (eg: EVMOS, ATOM, etc) or an IBC fungible token voucher (i.e with denom format of "),t("code",[e._v("ibc/{hash}")]),e._v(").")]),e._v(" "),t("p",[e._v("When a proposal is initiated for an existing native Cosmos Coin, the erc20 module will deploy a factory ERC20 contract, representing the ERC20 token for the token pair, giving the module ownership of that contract.")]),e._v(" "),t("h3",{attrs:{id:"registration-of-an-erc20-token"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#registration-of-an-erc20-token"}},[e._v("#")]),e._v(" Registration of an ERC20 token")]),e._v(" "),t("p",[e._v("A proposal for an existing (i.e already deployed) ERC20 contract can be initiated too. In this case, the ERC20 maintains the original owner of the contract and uses an escrow & mint / burn & unescrow mechanism similar to the one defined by the "),t("a",{attrs:{href:"https://github.com/cosmos/ibc/blob/master/spec/app/ics-020-fungible-token-transfer",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS20 - Fungible Token Transfer"),t("OutboundLink")],1),e._v(" specification. The token pair is composed of the original ERC20 token and a corresponding native Cosmos coin denomination.")]),e._v(" "),t("h3",{attrs:{id:"token-details-and-metadata"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#token-details-and-metadata"}},[e._v("#")]),e._v(" Token details and metadata")]),e._v(" "),t("p",[e._v("Coin metadata is derived from the ERC20 token details (name, symbol, decimals) and vice versa. A special case is also described below that for the ERC20 representation of IBC fungible token (ICS20) vouchers.")]),e._v(" "),t("h4",{attrs:{id:"coin-metadata-to-erc20-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coin-metadata-to-erc20-details"}},[e._v("#")]),e._v(" Coin Metadata to ERC20 details")]),e._v(" "),t("p",[e._v("During the registration of a Cosmos Coin the following bank "),t("code",[e._v("Metadata")]),e._v(" is used to deploy a ERC20 contract:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Name")])]),e._v(" "),t("li",[t("strong",[e._v("Symbol")])]),e._v(" "),t("li",[t("strong",[e._v("Decimals")])])]),e._v(" "),t("p",[e._v("The native Cosmos Coin contains a more extensive metadata than the ERC20 and includes all necessary details for the conversion into a ERC20 Token, which requires no additional population of data.")]),e._v(" "),t("h4",{attrs:{id:"ibc-voucher-metadata-to-erc20-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ibc-voucher-metadata-to-erc20-details"}},[e._v("#")]),e._v(" IBC voucher Metadata to ERC20 details")]),e._v(" "),t("p",[e._v("IBC vouchers should comply to the following standard:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Name")]),e._v(": "),t("code",[e._v("{NAME} channel-{channel}")])]),e._v(" "),t("li",[t("strong",[e._v("Symbol")]),e._v(":  "),t("code",[e._v("ibc{NAME}-{channel}")])]),e._v(" "),t("li",[t("strong",[e._v("Decimals")]),e._v(":  derived from bank "),t("code",[e._v("Metadata")])])]),e._v(" "),t("h4",{attrs:{id:"erc20-details-to-coin-metadata"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#erc20-details-to-coin-metadata"}},[e._v("#")]),e._v(" ERC20 details to Coin Metadata")]),e._v(" "),t("p",[e._v("During the Registration of an ERC20 Token the Coin metadata is derived from the ERC20 metadata and the bank metadata:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Description")]),e._v(": "),t("code",[e._v("Cosmos coin token representation of {contractAddress}")])]),e._v(" "),t("li",[t("strong",[e._v("DenomUnits")]),e._v(":\n"),t("ul",[t("li",[e._v("Coin: "),t("code",[e._v("0")])]),e._v(" "),t("li",[e._v("ERC20: "),t("code",[e._v("{uint32(erc20Data.Decimals)}")])])])]),e._v(" "),t("li",[t("strong",[e._v("Base")]),e._v(": "),t("code",[e._v('{"erc20/%s", address}')])]),e._v(" "),t("li",[t("strong",[e._v("Display")]),e._v(": "),t("code",[e._v("{erc20Data.Name}")])]),e._v(" "),t("li",[t("strong",[e._v("Name")]),e._v(": "),t("code",[e._v("{types.CreateDenom(strContract)}")])]),e._v(" "),t("li",[t("strong",[e._v("Symbol:")]),e._v(" "),t("code",[e._v("{erc20Data.Symbol}")])])]),e._v(" "),t("h2",{attrs:{id:"token-pair-modifiers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#token-pair-modifiers"}},[e._v("#")]),e._v(" Token Pair Modifiers")]),e._v(" "),t("p",[e._v("A valid token pair can be modified through several governance proposals. The internal conversion of a token pair can be toggled with "),t("code",[e._v("ToggleTokenConversionProposal")]),e._v(", so that the conversions between the token pair's tokens can be enabled or disabled.")]),e._v(" "),t("h2",{attrs:{id:"token-conversion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#token-conversion"}},[e._v("#")]),e._v(" Token Conversion")]),e._v(" "),t("p",[e._v("Once a token pair proposal passes, the module allows for the conversion of that token pair. Holders of native Cosmos coins and IBC vouchers on the Evmos chain can convert their Coin into ERC20 Tokens, which can then be used in Evmos EVM, by creating a "),t("code",[e._v("ConvertCoin")]),e._v(" Tx. Vice versa, the "),t("code",[e._v("ConvertERC20")]),e._v(" Tx allows holders of ERC20 tokens on the Evmos chain to convert ERC-20 tokens back to their native Cosmos Coin representation.")]),e._v(" "),t("p",[e._v("Depending on the ownership of the ERC20 contract, the ERC20 tokens either follow a burn/mint or a transfer/escrow mechanism during conversion.")]),e._v(" "),t("h2",{attrs:{id:"malicious-contracts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#malicious-contracts"}},[e._v("#")]),e._v(" Malicious Contracts")]),e._v(" "),t("p",[e._v("The ERC20 standard is an interface that defines a set of method signatures (name, arguments and output) without defining its methods' internal logic. Therefore it is possible for developers to deploy contracts that contain hidden malicious behaviour within those methods. For instance, the ERC20 "),t("code",[e._v("transfer")]),e._v(" method, which is responsible for sending an "),t("code",[e._v("amount")]),e._v(" of tokens to a given "),t("code",[e._v("recipient")]),e._v(" could include code to siphon some amount of tokens intended for the recipient into a different predefined account, which is owned by the malicious contract deployer.")]),e._v(" "),t("p",[e._v("More sophisticated malicious implementations might also inherit code from customized ERC20 contracts that include malicous behaviour. For an overview of more extensive examples, plese review the x/erc20 audit, section "),t("code",[e._v("IF-EVMOS-06: IERC20 Contracts may execute arbitrary code")]),e._v(".")]),e._v(" "),t("p",[e._v("As the "),t("code",[e._v("x/erc20")]),e._v(" module allows any arbitrary ERC20 contract to be registered through governance, it is essential that the proposer or the voters manually verify during voting phase that the proposed contract uses the default ERC20.sol implementation.")]),e._v(" "),t("p",[e._v("Here are our recommendations for the reviewing process:")]),e._v(" "),t("ul",[t("li",[e._v("contract solidity code should be verified and accessable (e.g. using an explorer)")]),e._v(" "),t("li",[e._v("contract should be audited by a reputabele auditor")]),e._v(" "),t("li",[e._v("inherited contracts need to be verified for correctness")])])])}),[],!1,null,null,null);t.default=n.exports}}]);