(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{530:function(e,t,o){"use strict";o.r(t);var n=o(1),s=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"query-balances"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-balances"}},[e._v("#")]),e._v(" Query Balances")]),e._v(" "),t("p",{attrs:{synopsis:""}},[e._v("Learn how to query balances of IBC Cosmos Coins and ERC-20s on Evmos.")]),e._v(" "),t("p",[e._v("This guide will cover the following query methods:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#qomd--tendermint-rpc"}},[t("code",[e._v("qomd")]),e._v(" & Tendermint RPC")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#json-rpc"}},[e._v("JSON-RPC")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#grpc"}},[e._v("gRPC")])])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",[t("strong",[e._v("Note")]),e._v(": In this document, the command line is used to interact with endpoints. For dApp developers, using libraries such as "),t("a",{attrs:{href:"https://github.com/cosmos/cosmjs",target:"_blank",rel:"noopener noreferrer"}},[e._v("cosmjs"),t("OutboundLink")],1),e._v(" and "),t("RouterLink",{attrs:{to:"/developers/libraries/evmosjs.html"}},[e._v("evmosjs")]),e._v(" is recommended instead.")],1)]),e._v(" "),t("h2",{attrs:{id:"qomd-tendermint-rpc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qomd-tendermint-rpc"}},[e._v("#")]),e._v(" "),t("code",[e._v("qomd")]),e._v(" & Tendermint RPC")]),e._v(" "),t("p",[e._v("Upon "),t("RouterLink",{attrs:{to:"/validators/quickstart/installation.html"}},[e._v("installation")]),e._v(" and "),t("RouterLink",{attrs:{to:"/validators/quickstart/binary.html"}},[e._v("configuration")]),e._v(" of the Evmos Daemon, developers can query account balances using "),t("code",[e._v("qod")]),e._v(" with the following CLI command:")],1),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBxb21kIHF1ZXJ5IGJhbmsgYmFsYW5jZXMgJEVWTU9TQUREUkVTUyAtLWNvdW50LXRvdGFsPSRDT1VOVFRPVEFMIC0taGVpZ2h0PSRIRUlHSFQgLS1vdXRwdXQ9JE9VVFBVVCAtLW5vZGU9JE5PREUKYmFsYW5jZXM6Ci0gYW1vdW50OiAmcXVvdDsxMDAwMDAwMDAwMDAwMDAwMDAwJnF1b3Q7CiAgZGVub206IGFldm1vcwotIGFtb3VudDogJnF1b3Q7MTAwMDAwJnF1b3Q7CiAgZGVub206IGliYy9FRDA3QTMzOTFBMTEyQjE3NTkxNUNEOEZBRjQzQTJEQThFNDc5MEVERTEyNTY2NjQ5RDBDMkY5NzcxNkI4NTE4CnBhZ2luYXRpb246CiAgbmV4dF9rZXk6IG51bGwKICB0b3RhbDogJnF1b3Q7MCZxdW90Owo="}}),e._v(" "),t("p",[e._v("where:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("$EVMOSADDRESS")]),e._v(" is the Evmos address with balances of interest (eg. "),t("code",[e._v("evmos1...")]),e._v(").")]),e._v(" "),t("li",[e._v("(optional) "),t("code",[e._v("$COUNTTOTAL")]),e._v(" counts the total number of records in all balances to query for.")]),e._v(" "),t("li",[e._v("(optional) "),t("code",[e._v("$HEIGHT")]),e._v(" is the specific height to query state at (can error if node is pruning state).")]),e._v(" "),t("li",[e._v("(optional) "),t("code",[e._v("$OUTPUT")]),e._v(" is the output format (eg. "),t("code",[e._v("text")]),e._v(").")]),e._v(" "),t("li",[e._v("(optional if running local node) "),t("code",[e._v("$NODE")]),e._v(" is the Tendermint RPC node information is requested from (eg. "),t("code",[e._v("https://tendermint.bd.evmos.org:26657")]),e._v(").")])]),e._v(" "),t("p",[e._v("Details of non-native currencies (ie. not "),t("code",[e._v("aevmos")]),e._v(") can be queried with the following CLI command:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBxb21kIHF1ZXJ5IGVyYzIwIHRva2VuLXBhaXIgJERFTk9NIC0tbm9kZT0kTk9ERSAtLWhlaWdodD0kSEVJR0hUIC0tb3V0cHV0PSRPVVRQVVQKdG9rZW5fcGFpcjoKICBjb250cmFjdF9vd25lcjogT1dORVJfTU9EVUxFCiAgZGVub206IGliYy9FRDA3QTMzOTFBMTEyQjE3NTkxNUNEOEZBRjQzQTJEQThFNDc5MEVERTEyNTY2NjQ5RDBDMkY5NzcxNkI4NTE4CiAgZW5hYmxlZDogdHJ1ZQogIGVyYzIwX2FkZHJlc3M6IDB4RkEzQzIyQzA2OUI5NTU2QTRCMmY3RWNFMUVlM0I0Njc5MDlmNDg2NAo="}}),e._v(" "),t("p",[e._v("where "),t("code",[e._v("$DENOM")]),e._v(" is the denomination of the coin (eg. "),t("code",[e._v("ibc/ED07A3391A1...")]),e._v(").")]),e._v(" "),t("h2",{attrs:{id:"json-rpc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json-rpc"}},[e._v("#")]),e._v(" JSON-RPC")]),e._v(" "),t("p",[e._v("Developers can query account balances of "),t("code",[e._v("aevmos")]),e._v(" using the "),t("RouterLink",{attrs:{to:"/developers/json-rpc/endpoints.html#ethgetbalance"}},[t("code",[e._v("eth_getBalance")])]),e._v(" JSON-RPC method in conjunction with "),t("a",{attrs:{href:"https://curl.se/",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("curl")]),t("OutboundLink")],1),e._v(":")],1),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBSZXF1ZXN0CmN1cmwgLVggUE9TVCAtLWRhdGEgJ3smcXVvdDtqc29ucnBjJnF1b3Q7OiZxdW90OzIuMCZxdW90OywmcXVvdDttZXRob2QmcXVvdDs6JnF1b3Q7ZXRoX2dldEJhbGFuY2UmcXVvdDssJnF1b3Q7cGFyYW1zJnF1b3Q7OltgJEVUSEFERFJFU1NgLCBgJEJMT0NLYF0sJnF1b3Q7aWQmcXVvdDs6MX0nIC1IICZxdW90O0NvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvbiZxdW90OyAkTk9ERQoKIyBSZXN1bHQKeyZxdW90O2pzb25ycGMmcXVvdDs6JnF1b3Q7Mi4wJnF1b3Q7LCZxdW90O2lkJnF1b3Q7OjEsJnF1b3Q7cmVzdWx0JnF1b3Q7OiZxdW90OzB4MzYzNTRkNTU3NTU3N2M4MDAwJnF1b3Q7fQo="}}),e._v(" "),t("p",[e._v("where:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("$ETHADDRESS")]),e._v(" is the Etherum hex-address the balance is to be queried from.\nNote that Evmos addresses (those beginning with "),t("code",[e._v("evmos1...")]),e._v(") can be converte.d to Ethereum addresses using libraries such as "),t("RouterLink",{attrs:{to:"/developers/libraries/evmosjs.html"}},[e._v("evmosjs")]),e._v(".")],1),e._v(" "),t("li",[t("code",[e._v("$BLOCK")]),e._v(" is the block number or block hash (eg. "),t("code",[e._v('"0x0"')]),e._v(").\nThe reasoning for this parameter is due to "),t("a",{attrs:{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1898.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP-1898"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("(optional if running local node) "),t("code",[e._v("$NODE")]),e._v(" is the JSON-RPC node information is requested from (eg. "),t("code",[e._v("https://eth.bd.evmos.org:8545")]),e._v(").")])]),e._v(" "),t("p",[e._v("Developers can also query account balances of "),t("code",[e._v("x/erc20")]),e._v("-module registered coins using the "),t("RouterLink",{attrs:{to:"/developers/json-rpc/endpoints.html#ethcall"}},[t("code",[e._v("eth_call")])]),e._v(" JSON-RPC method in conjunction with "),t("a",{attrs:{href:"https://curl.se/",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("curl")]),t("OutboundLink")],1),e._v(":")],1),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBSZXF1ZXN0CmN1cmwgLVggUE9TVCAtLWRhdGEgJ3smcXVvdDtqc29ucnBjJnF1b3Q7OiZxdW90OzIuMCZxdW90OywmcXVvdDttZXRob2QmcXVvdDs6JnF1b3Q7ZXRoX2NhbGwmcXVvdDssJnF1b3Q7cGFyYW1zJnF1b3Q7Olt7JnF1b3Q7ZnJvbSZxdW90OzpgU0VOREVSQ09OVFJBQ1RBRERSRVNTYCwgJnF1b3Q7dG8mcXVvdDs6YEVSQ0NPTlRSQUNUQUREUkVTU2AsICZxdW90O2RhdGEmcXVvdDs6YCREQVRBYH0sIGAkQkxPQ0tgXSwmcXVvdDtpZCZxdW90OzoxfScgIC1IICZxdW90O0NvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvbiZxdW90OyAkTk9ERQoKIyBSZXN1bHQKeyZxdW90O2pzb25ycGMmcXVvdDs6JnF1b3Q7Mi4wJnF1b3Q7LCZxdW90O2lkJnF1b3Q7OjEsJnF1b3Q7cmVzdWx0JnF1b3Q7OiZxdW90OzB4JnF1b3Q7fQo="}}),e._v(" "),t("p",[e._v("where:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("$SENDERCONTRACTADDRESS")]),e._v(" is the Ethereum hex-address this smart contract call is sent from.")]),e._v(" "),t("li",[t("code",[e._v("$ERCCONTRACTADDRESS")]),e._v(" is the Ethereum hex-address of the ERC-20 contract corresponding to the coin denomination being queried.")]),e._v(" "),t("li",[t("code",[e._v("$DATA")]),e._v(" is the hash of the "),t("a",{attrs:{href:"https://docs.openzeppelin.com/contracts/2.x/api/token/erc20#ERC20",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("balanceof")]),t("OutboundLink")],1),e._v(" method signature and encoded parameters.\n"),t("code",[e._v("balanceOf")]),e._v(" is a required method in every ERC-20 contract, and the encoded parameter is the address which is having its balance queried. For additional information, see the "),t("a",{attrs:{href:"https://docs.soliditylang.org/en/v0.8.13/abi-spec.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ethereum Contract ABI"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("$BLOCK")]),e._v(" is the block number or block hash (eg. "),t("code",[e._v('"0x0"')]),e._v(").\nThe reasoning for this parameter is due to "),t("a",{attrs:{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1898.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP-1898"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("(optional if running local node) "),t("code",[e._v("$NODE")]),e._v(" is the JSON-RPC node information is requested from (eg. "),t("code",[e._v("https://eth.bd.evmos.org:8545")]),e._v(").")])]),e._v(" "),t("h2",{attrs:{id:"grpc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grpc"}},[e._v("#")]),e._v(" gRPC")]),e._v(" "),t("p",[e._v("Developers can use "),t("a",{attrs:{href:"https://github.com/fullstorydev/grpcurl",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("grpcurl")]),t("OutboundLink")],1),e._v(" with the "),t("code",[e._v("AllBalances")]),e._v(" endpoint to query account balance by address for all denominations:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBSZXF1ZXN0CmdycGN1cmwgJE9VVFBVVCAtZCAneyZxdW90O2FkZHJlc3MmcXVvdDs6YCRFVk1PU0FERFJFU1NgfScgJE5PREUgY29zbW9zLmJhbmsudjFiZXRhMS5RdWVyeS9BbGxCYWxhbmNlcwoKIyBSZXN1bHQKewogICZxdW90O2JhbGFuY2VzJnF1b3Q7OiBbCiAgICB7CiAgICAgICZxdW90O2Rlbm9tJnF1b3Q7OiAmcXVvdDtzdGFrZSZxdW90OywKICAgICAgJnF1b3Q7YW1vdW50JnF1b3Q7OiAmcXVvdDsxMDAwMDAwMDAwJnF1b3Q7CiAgICB9CiAgXSwKICAmcXVvdDtwYWdpbmF0aW9uJnF1b3Q7OiB7CiAgICAmcXVvdDt0b3RhbCZxdW90OzogJnF1b3Q7MSZxdW90OwogIH0KfQo="}}),e._v(" "),t("p",[e._v("where:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("$EVMOSADDRESS")]),e._v(" is the Evmos address with balances of interest (eg. "),t("code",[e._v('"evmos1..."')]),e._v(").")]),e._v(" "),t("li",[t("code",[e._v("$NODE")]),e._v(" is the Cosmos gRPC node information is requested from (eg. "),t("code",[e._v("https://grpc.bd.evmos.org:9090")]),e._v(").")]),e._v(" "),t("li",[e._v("(optional) "),t("code",[e._v("$OUTPUT")]),e._v(" is the output format (eg. "),t("code",[e._v("plaintext")]),e._v(").")])]),e._v(" "),t("p",[e._v("State can also be queried using gRPC within a Go program. The idea is to create a gRPC connection, then use the "),t("a",{attrs:{href:"https://developers.google.com/protocol-buffers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protobuf"),t("OutboundLink")],1),e._v("-generated client code to query the gRPC server.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICgKICAgICZxdW90O2NvbnRleHQmcXVvdDsKICAgICZxdW90O2ZtdCZxdW90OwoKICAmcXVvdDtnb29nbGUuZ29sYW5nLm9yZy9ncnBjJnF1b3Q7CgogICAgc2RrICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMmcXVvdDsKICAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzL3R4JnF1b3Q7CikKCmZ1bmMgcXVlcnlTdGF0ZSgpIGVycm9yIHsKICAgIG15QWRkcmVzcywgZXJyIDo9IEdldEV2bW9zQWRkcmVzc0Zyb21CZWNoMzIoJnF1b3Q7ZXZtb3MxLi4uJnF1b3Q7KSAvLyBldm1vcyBhZGRyZXNzIHdpdGggYmFsYW5jZXMgb2YgaW50ZXJlc3QuCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gZXJyCiAgICB9CgogICAgLy8gQ3JlYXRlIGEgY29ubmVjdGlvbiB0byB0aGUgZ1JQQyBzZXJ2ZXIuCiAgICBncnBjQ29ubiA6PSBncnBjLkRpYWwoCiAgICAgICAgJnF1b3Q7aHR0cHM6Ly9ncnBjLmJkLmV2bW9zLm9yZzo5MDkwJnF1b3Q7LCAvLyB5b3VyIGdSUEMgc2VydmVyIGFkZHJlc3MuCiAgICAgICAgZ3JwYy5XaXRoSW5zZWN1cmUoKSwgLy8gdGhlIFNESyBkb2Vzbid0IHN1cHBvcnQgYW55IHRyYW5zcG9ydCBzZWN1cml0eSBtZWNoYW5pc20uCiAgICApCiAgICBkZWZlciBncnBjQ29ubi5DbG9zZSgpCgogICAgLy8gVGhpcyBjcmVhdGVzIGEgZ1JQQyBjbGllbnQgdG8gcXVlcnkgdGhlIHgvYmFuayBzZXJ2aWNlLgogICAgYmFua0NsaWVudCA6PSBiYW5rdHlwZXMuTmV3UXVlcnlDbGllbnQoZ3JwY0Nvbm4pCiAgICBiYW5rUmVzLCBlcnIgOj0gYmFua0NsaWVudC5BbGxCYWxhbmNlcygKICAgICAgICBjb250ZXh0LkJhY2tncm91bmQoKSwKICAgICAgICAmYW1wO2Jhbmt0eXBlcy5RdWVyeUFsbEJhbGFuY2VzUmVxdWVzdHtBZGRyZXNzOiBteUFkZHJlc3N9LAogICAgKQogICAgaWYgZXJyICE9IG5pbCB7CiAgICAgICAgcmV0dXJuIGVycgogICAgfQoKICAgIGZtdC5QcmludGxuKGJhbmtSZXMuR2V0QmFsYW5jZXMoKSkgLy8gcHJpbnRzIHRoZSBhY2NvdW50IGJhbGFuY2VzLgoKICAgIHJldHVybiBuaWwKfQoKLy8gZXZtb3NqcyBhZGRyZXNzIGNvbnZlcnRlci4KZnVuYyBHZXRFdm1vc0FkZHJlc3NGcm9tQmVjaDMyKGFkZHJlc3Mgc3RyaW5nKSAoc3RyaW5nLCBlcnJvcikgey4uLn0K"}}),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[t("strong",[e._v("Note")]),e._v(": The following tools will be useful when using gRPC:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://api.evmos.dev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Evmos Swagger API"),t("OutboundLink")],1),e._v(": a comprehensive description of all gRPC endpoints")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://pkg.go.dev/github.com/cosmos/cosmos-sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK Go API"),t("OutboundLink")],1),e._v(" & "),t("a",{attrs:{href:"https://pkg.go.dev/github.com/tharsis/evmos",target:"_blank",rel:"noopener noreferrer"}},[e._v("Evmos Go API"),t("OutboundLink")],1),e._v(": packages to implement queries in Go scripts")])])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);