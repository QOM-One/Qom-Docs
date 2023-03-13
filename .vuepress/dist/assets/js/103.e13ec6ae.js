(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{547:function(t,a,g){"use strict";g.r(a);var e=g(1),o=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"hardhat-deploying-a-smart-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardhat-deploying-a-smart-contract"}},[t._v("#")]),t._v(" Hardhat: Deploying a Smart Contract")]),t._v(" "),a("p",{attrs:{synopsis:""}},[t._v("Learn how to deploy a simple Solidity-based smart contract to Qom One using the Hardhat environment")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://hardhat.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hardhat"),a("OutboundLink")],1),t._v(" is a flexible development environment for building Ethereum-based smart contracts. It is designed with integrations and extensibility in mind")]),t._v(" "),a("h2",{attrs:{id:"install-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-dependencies"}},[t._v("#")]),t._v(" Install Dependencies")]),t._v(" "),a("p",[t._v("Before proceeding, you need to install Node.js (we'll use v16.x) and the npm package manager. You can download directly from "),a("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),a("OutboundLink")],1),t._v(" or in your terminal:")]),t._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Ubuntu"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCAtc0wgaHR0cHM6Ly9kZWIubm9kZXNvdXJjZS5jb20vc2V0dXBfMTYueCB8IHN1ZG8gLUUgYmFzaCAtCgpzdWRvIGFwdCBpbnN0YWxsIC15IG5vZGVqcwo="}})],1),t._v(" "),a("CodeGroupItem",{attrs:{title:"MacOS"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBZb3UgY2FuIHVzZSBob21lYnJldyAoaHR0cHM6Ly9kb2NzLmJyZXcuc2gvSW5zdGFsbGF0aW9uKQokIGJyZXcgaW5zdGFsbCBub2RlCgojIE9yIHlvdSBjYW4gdXNlIG52bSAoaHR0cHM6Ly9naXRodWIuY29tL252bS1zaC9udm0pCiQgbnZtIGluc3RhbGwgbm9kZQo="}})],1)],1),t._v(" "),a("p",[t._v("You can verify that everything is installed correctly by querying the version for each package:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBub2RlIC12Ci4uLgoKJCBucG0gLXYKLi4uCg=="}}),t._v(" "),a("h2",{attrs:{id:"create-hardhat-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-hardhat-project"}},[t._v("#")]),t._v(" Create Hardhat Project")]),t._v(" "),a("p",[t._v("To create a new project, navigate to your project directory and run:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBucHggaGFyZGhhdAoKODg4ICAgIDg4OCAgICAgICAgICAgICAgICAgICAgICA4ODggODg4ICAgICAgICAgICAgICAgODg4Cjg4OCAgICA4ODggICAgICAgICAgICAgICAgICAgICAgODg4IDg4OCAgICAgICAgICAgICAgIDg4OAo4ODggICAgODg4ICAgICAgICAgICAgICAgICAgICAgIDg4OCA4ODggICAgICAgICAgICAgICA4ODgKODg4ODg4ODg4OCAgODg4OGIuICA4ODhkODg4IC5kODg4ODggODg4ODhiLiAgIDg4ODhiLiAgODg4ODg4Cjg4OCAgICA4ODggICAgICZxdW90Ozg4YiA4ODhQJnF1b3Q7ICBkODgmcXVvdDsgODg4IDg4OCAmcXVvdDs4OGIgICAgICZxdW90Ozg4YiA4ODgKODg4ICAgIDg4OCAuZDg4ODg4OCA4ODggICAgODg4ICA4ODggODg4ICA4ODggLmQ4ODg4ODggODg4Cjg4OCAgICA4ODggODg4ICA4ODggODg4ICAgIFk4OGIgODg4IDg4OCAgODg4IDg4OCAgODg4IFk4OGIuCjg4OCAgICA4ODggJnF1b3Q7WTg4ODg4OCA4ODggICAgICZxdW90O1k4ODg4OCA4ODggIDg4OCAmcXVvdDtZODg4ODg4ICAmcXVvdDtZODg4Cgrwn5G3IFdlbGNvbWUgdG8gSGFyZGhhdCB2Mi45LjMg8J+Rt+KAjQoKPyBXaGF0IGRvIHlvdSB3YW50IHRvIGRvPyDigKYKICBDcmVhdGUgYSBiYXNpYyBzYW1wbGUgcHJvamVjdArina8gQ3JlYXRlIGFuIGFkdmFuY2VkIHNhbXBsZSBwcm9qZWN0CiAgQ3JlYXRlIGFuIGFkdmFuY2VkIHNhbXBsZSBwcm9qZWN0IHRoYXQgdXNlcyBUeXBlU2NyaXB0CiAgQ3JlYXRlIGFuIGVtcHR5IGhhcmRoYXQuY29uZmlnLmpzCiAgUXVpdAo="}}),t._v(" "),a("p",[t._v("Following the prompts should create a new project structure in your directory. Consult the "),a("a",{attrs:{href:"https://hardhat.org/config/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hardhat config page"),a("OutboundLink")],1),t._v(" for a list of configuration options to specify in "),a("code",[t._v("hardhat.config.js")]),t._v(". Most importantly, you should set the "),a("code",[t._v("defaultNetwork")]),t._v(" entry to point to your desired JSON-RPC network:")]),t._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local Node"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"bW9kdWxlLmV4cG9ydHMgPSB7CiAgZGVmYXVsdE5ldHdvcms6ICZxdW90O2xvY2FsJnF1b3Q7LAogIG5ldHdvcmtzOiB7CiAgICBoYXJkaGF0OiB7CiAgICB9LAogICAgbG9jYWw6IHsKICAgICAgdXJsOiAmcXVvdDtodHRwOi8vbG9jYWxob3N0Ojg1NDUvJnF1b3Q7LAogICAgICBhY2NvdW50czogW3ByaXZhdGVLZXkxLCBwcml2YXRlS2V5MiwgLi4uXQogICAgfQogIH0sCiAgLi4uCn0K"}})],1),t._v(" "),a("CodeGroupItem",{attrs:{title:"Testnet"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"bW9kdWxlLmV4cG9ydHMgPSB7CiAgZGVmYXVsdE5ldHdvcms6ICZxdW90O3Rlc3RuZXQmcXVvdDssCiAgbmV0d29ya3M6IHsKICAgIGhhcmRoYXQ6IHsKICAgIH0sCiAgICB0ZXN0bmV0OiB7CiAgICAgIHVybDogJnF1b3Q7aHR0cHM6Ly9ldGguYmQuZXZtb3MuZGV2Ojg1NDUmcXVvdDssCiAgICAgIGFjY291bnRzOiBbcHJpdmF0ZUtleTEsIHByaXZhdGVLZXkyLCAuLi5dCiAgICB9CiAgfSwKICAuLi4KfQo="}})],1)],1),t._v(" "),a("ul",[a("li",[t._v("To get the value for privateKey:\n"),a("ul",[a("li",[t._v("MetaMask -> Account Details -> Export Private Key -> add '0x' as prefix -> "),a("code",[t._v("privateKey1")])])])])]),t._v(" "),a("p",[t._v("To ensure you are targeting the correct network, you can query for a list of accounts available to you from your default network provider:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBucHggaGFyZGhhdCBhY2NvdW50cwoweGYzOUZkNmU1MWFhZDg4RjZGNGNlNmFCODgyNzI3OWNmZkZiOTIyNjYKMHg3MDk5Nzk3MEM1MTgxMmRjM0EwMTBDN2QwMWI1MGUwZDE3ZGM3OUM4CjB4M0M0NENkRGRCNmE5MDBmYTJiNTg1ZGQyOTllMDNkMTJGQTQyOTNCQwoweDkwRjc5YmY2RUIyYzRmODcwMzY1RTc4NTk4MkUxZjEwMUU5M2I5MDYKLi4uCg=="}}),t._v(" "),a("ul",[a("li",[t._v("To make "),a("code",[t._v("accounts")]),t._v(" command work in recent hardhat ("),a("code",[t._v("npx hardhat --version // 2.12.5")]),t._v(")\nadd this to "),a("code",[t._v("hardhat.config.js")])])]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"dGFzaygmcXVvdDthY2NvdW50cyZxdW90OywgJnF1b3Q7UHJpbnRzIHRoZSBsaXN0IG9mIGFjY291bnRzJnF1b3Q7LCBhc3luYyAoKSA9Jmd0OyB7CiAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcnMuZ2V0U2lnbmVycygpOwoKICBmb3IgKGNvbnN0IGFjY291bnQgb2YgYWNjb3VudHMpIHsKICAgIGNvbnNvbGUubG9nKGFjY291bnQuYWRkcmVzcyk7CiAgfQp9KTsK"}}),t._v(" "),a("h2",{attrs:{id:"deploying-a-smart-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploying-a-smart-contract"}},[t._v("#")]),t._v(" Deploying a Smart Contract")]),t._v(" "),a("p",[t._v("You will see that a default smart contract, written in Solidity, has already been provided under "),a("code",[t._v("contracts/Greeter.sol")]),t._v(":")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"cHJhZ21hIHNvbGlkaXR5IF4wLjguMDsKCmltcG9ydCAmcXVvdDtoYXJkaGF0L2NvbnNvbGUuc29sJnF1b3Q7OwoKY29udHJhY3QgR3JlZXRlciB7CiAgICBzdHJpbmcgcHJpdmF0ZSBncmVldGluZzsKCiAgICBjb25zdHJ1Y3RvcihzdHJpbmcgbWVtb3J5IF9ncmVldGluZykgewogICAgICAgIGNvbnNvbGUubG9nKCZxdW90O0RlcGxveWluZyBhIEdyZWV0ZXIgd2l0aCBncmVldGluZzomcXVvdDssIF9ncmVldGluZyk7CiAgICAgICAgZ3JlZXRpbmcgPSBfZ3JlZXRpbmc7CiAgICB9CgogICAgZnVuY3Rpb24gZ3JlZXQoKSBwdWJsaWMgdmlldyByZXR1cm5zIChzdHJpbmcgbWVtb3J5KSB7CiAgICAgICAgcmV0dXJuIGdyZWV0aW5nOwogICAgfQoKICAgIGZ1bmN0aW9uIHNldEdyZWV0aW5nKHN0cmluZyBtZW1vcnkgX2dyZWV0aW5nKSBwdWJsaWMgewogICAgICAgIGNvbnNvbGUubG9nKCZxdW90O0NoYW5naW5nIGdyZWV0aW5nIGZyb20gJyVzJyB0byAnJXMnJnF1b3Q7LCBncmVldGluZywgX2dyZWV0aW5nKTsKICAgICAgICBncmVldGluZyA9IF9ncmVldGluZzsKICAgIH0KfQo="}}),t._v(" "),a("p",[t._v("This contract allows you to set and query a string "),a("code",[t._v("greeting")]),t._v(". Hardhat also provides a script to deploy smart contracts to a target network; this can be invoked via the following command, targeting your default network:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bnB4IGhhcmRoYXQgcnVuIHNjcmlwdHMvZGVwbG95LmpzCg=="}}),t._v(" "),a("p",[t._v("Hardhat also lets you manually specify a target network via the "),a("code",[t._v("--network <your-network>")]),t._v(" flag:")]),t._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local Node"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bnB4IGhhcmRoYXQgcnVuIC0tbmV0d29yayB7eyAkdGhlbWVDb25maWcucHJvamVjdC5ycGNfdXJsX2xvY2FsIH19IHNjcmlwdHMvZGVwbG95LmpzCg=="}})],1),t._v(" "),a("CodeGroupItem",{attrs:{title:"Testnet"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bnB4IGhhcmRoYXQgcnVuIC0tbmV0d29yayB7eyAkdGhlbWVDb25maWcucHJvamVjdC5ycGNfdXJsX3Rlc3RuZXQgfX0gc2NyaXB0cy9kZXBsb3kuanMK"}})],1)],1),t._v(" "),a("p",[t._v("Finally, try running a Hardhat test:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBucHggaGFyZGhhdCB0ZXN0CkNvbXBpbGluZyAxIGZpbGUgd2l0aCAwLjguNApDb21waWxhdGlvbiBmaW5pc2hlZCBzdWNjZXNzZnVsbHkKCgogIEdyZWV0ZXIKRGVwbG95aW5nIGEgR3JlZXRlciB3aXRoIGdyZWV0aW5nOiBIZWxsbywgd29ybGQhCkNoYW5naW5nIGdyZWV0aW5nIGZyb20gJ0hlbGxvLCB3b3JsZCEnIHRvICdIb2xhLCBtdW5kbyEnCiAgICDinJMgU2hvdWxkIHJldHVybiB0aGUgbmV3IGdyZWV0aW5nIG9uY2UgaXQncyBjaGFuZ2VkICg4MDNtcykKCgogIDEgcGFzc2luZyAoODA1bXMpCg=="}})],1)}),[],!1,null,null,null);a.default=o.exports}}]);