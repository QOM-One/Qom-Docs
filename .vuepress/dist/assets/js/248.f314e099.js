(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{702:function(e,t,a){"use strict";a.r(t);var c=a(1),o=Object(c.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"run-an-ibc-relayer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-an-ibc-relayer"}},[e._v("#")]),e._v(" Run an IBC Relayer")]),e._v(" "),t("p",{attrs:{synopsis:""}},[e._v("Learn how to run an IBC Relayer for Qom.")]),e._v(" "),t("h2",{attrs:{id:"minimum-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minimum-requirements"}},[e._v("#")]),e._v(" Minimum Requirements")]),e._v(" "),t("ul",[t("li",[e._v("8 core (4 physical core), x86_64 architecture processor")]),e._v(" "),t("li",[e._v("32 GB RAM (or equivalent swap file set up)")]),e._v(" "),t("li",[e._v("1 TB+ nVME drives")])]),e._v(" "),t("p",[e._v("If running many nodes on a single VM, "),t("a",{attrs:{href:"https://tecadmin.net/increase-open-files-limit-ubuntu/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ensure your open files limit is increased"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("p",[e._v("Before beginning, ensure you have an Qom node running in the background of the same machine that you intend to relay on. Follow "),t("RouterLink",{attrs:{to:"/validators/quickstart/run_node.html"}},[e._v("this guide")]),e._v(" to set up an Qom node if you have not already.\n")],1),e._v(" "),t("p",[e._v("In this guide, we will be relaying between "),t("a",{attrs:{href:"https://www.mintscan.io/qom/relayers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Qom (channel-3) and Cosmos Hub (channel-292)"),t("OutboundLink")],1),e._v(". When setting up your Qom and Cosmos full nodes, be sure to offset the ports being used in both the "),t("code",[e._v("app.toml")]),e._v(" and "),t("code",[e._v("config.toml")]),e._v(" files of the respective chains (this process will be shown below).")]),e._v(" "),t("p",[e._v("In this example, the default ports for Qom will be used, and the ports of the Cosmos Hub node will be manually changed.\n")]),e._v(" "),t("h2",{attrs:{id:"qom-daemon-settings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qom-daemon-settings"}},[e._v("#")]),e._v(" Qom Daemon Settings")]),e._v(" "),t("p",[e._v("First, set "),t("code",[e._v("grpc server")]),e._v(" on port "),t("code",[e._v("9090")]),e._v(" in the "),t("code",[e._v("app.toml")]),e._v(" file from the "),t("code",[e._v("$HOME/.qomd/config")]),e._v(" directory:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"dmltICRIT01FLy5xb21kL2NvbmZpZy9hcHAudG9tbAo="}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"W2dycGNdCgojIEVuYWJsZSBkZWZpbmVzIGlmIHRoZSBnUlBDIHNlcnZlciBzaG91bGQgYmUgZW5hYmxlZC4KZW5hYmxlID0gdHJ1ZQoKIyBBZGRyZXNzIGRlZmluZXMgdGhlIGdSUEMgc2VydmVyIGFkZHJlc3MgdG8gYmluZCB0by4KYWRkcmVzcyA9ICZxdW90OzAuMC4wLjA6OTA5MCZxdW90Owo="}}),e._v(" "),t("p",[e._v("Then, set the "),t("code",[e._v("pprof_laddr")]),e._v(" to port "),t("code",[e._v("6060")]),e._v(", "),t("code",[e._v("rpc laddr")]),e._v(" to port "),t("code",[e._v("26657")]),e._v(", and "),t("code",[e._v("prp laddr")]),e._v(" to "),t("code",[e._v("26656")]),e._v(" in the "),t("code",[e._v("config.toml")]),e._v(" file from the "),t("code",[e._v("$HOME/.qomd/config")]),e._v(" directory:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"dmltICRIT01FLy5xb21kL2NvbmZpZy9jb25maWcudG9tbAo="}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBwcHJvZiBsaXN0ZW4gYWRkcmVzcyAoaHR0cHM6Ly9nb2xhbmcub3JnL3BrZy9uZXQvaHR0cC9wcHJvZikKcHByb2ZfbGFkZHIgPSAmcXVvdDtsb2NhbGhvc3Q6NjA2MCZxdW90Owo="}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"W3JwY10KCiMgVENQIG9yIFVOSVggc29ja2V0IGFkZHJlc3MgZm9yIHRoZSBSUEMgc2VydmVyIHRvIGxpc3RlbiBvbgpsYWRkciA9ICZxdW90O3RjcDovLzEyNy4wLjAuMToyNjY1NyZxdW90Owo="}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"W3AycF0KCiMgQWRkcmVzcyB0byBsaXN0ZW4gZm9yIGluY29taW5nIGNvbm5lY3Rpb25zCmxhZGRyID0gJnF1b3Q7dGNwOi8vMC4wLjAuMDoyNjY1NiZxdW90Owo="}}),e._v(" "),t("h2",{attrs:{id:"cosmos-daemon-settings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cosmos-daemon-settings"}},[e._v("#")]),e._v(" Cosmos Daemon Settings")]),e._v(" "),t("p",[e._v("First, set "),t("code",[e._v("grpc server")]),e._v(" to port "),t("code",[e._v("9090")]),e._v(" in the "),t("code",[e._v("app.toml")]),e._v(" file from the "),t("code",[e._v("$HOME/.gaiad/config")]),e._v(" directory:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"dmltICRIT01FLy5nYWlhZC9jb25maWcvYXBwLnRvbWwK"}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"W2dycGNdCgojIEVuYWJsZSBkZWZpbmVzIGlmIHRoZSBnUlBDIHNlcnZlciBzaG91bGQgYmUgZW5hYmxlZC4KZW5hYmxlID0gdHJ1ZQoKIyBBZGRyZXNzIGRlZmluZXMgdGhlIGdSUEMgc2VydmVyIGFkZHJlc3MgdG8gYmluZCB0by4KYWRkcmVzcyA9ICZxdW90OzAuMC4wLjA6OTA5MiZxdW90Owo="}}),e._v(" "),t("p",[e._v("Then, set the "),t("code",[e._v("pprof_laddr")]),e._v(" to port "),t("code",[e._v("6062")]),e._v(", "),t("code",[e._v("rpc laddr")]),e._v(" to port "),t("code",[e._v("26757")]),e._v(", and "),t("code",[e._v("prp laddr")]),e._v(" to "),t("code",[e._v("26756")]),e._v(" in the "),t("code",[e._v("config.toml")]),e._v(" file from the "),t("code",[e._v("$HOME/.gaiad/config")]),e._v(" directory:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"dmltICRIT01FLy5nYWlhZC9jb25maWcvYXBwLnRvbWwK"}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBwcHJvZiBsaXN0ZW4gYWRkcmVzcyAoaHR0cHM6Ly9nb2xhbmcub3JnL3BrZy9uZXQvaHR0cC9wcHJvZikKcHByb2ZfbGFkZHIgPSAmcXVvdDtsb2NhbGhvc3Q6NjA2MiZxdW90Owo="}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"W3JwY10KCiMgVENQIG9yIFVOSVggc29ja2V0IGFkZHJlc3MgZm9yIHRoZSBSUEMgc2VydmVyIHRvIGxpc3RlbiBvbgpsYWRkciA9ICZxdW90O3RjcDovLzEyNy4wLjAuMToyNjc1NyZxdW90Owo="}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"W3AycF0KCiMgQWRkcmVzcyB0byBsaXN0ZW4gZm9yIGluY29taW5nIGNvbm5lY3Rpb25zCmxhZGRyID0gJnF1b3Q7dGNwOi8vMC4wLjAuMDoyNjc1NiZxdW90Owo="}}),e._v(" "),t("h2",{attrs:{id:"install-rust-dependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-rust-dependencies"}},[e._v("#")]),e._v(" Install Rust Dependencies")]),e._v(" "),t("p",[e._v("Install the following rust dependencies:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCAtLXByb3RvICc9aHR0cHMnIC0tdGxzdjEuMiAtc1NmIGh0dHBzOi8vc2gucnVzdHVwLnJzIHwgc2gK"}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c291cmNlICRIT01FLy5jYXJnby9lbnYKc3VkbyBhcHQtZ2V0IGluc3RhbGwgcGtnLWNvbmZpZyBsaWJzc2wtZGV2Cg=="}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c3VkbyBhcHQgaW5zdGFsbCBsaWJydXN0LW9wZW5zc2wtZGV2IGJ1aWxkLWVzc2VudGlhbCBnaXQK"}}),e._v(" "),t("h2",{attrs:{id:"build-setup-hermes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-setup-hermes"}},[e._v("#")]),e._v(" Build & Setup Hermes")]),e._v(" "),t("p",[e._v("Create the directory where the binary will be placed, clone the hermes source repository, and build it using the latest release.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWtkaXIgLXAgJEhPTUUvaGVybWVzCmdpdCBjbG9uZSBodHRwczovL2dpdGh1Yi5jb20vaW5mb3JtYWxzeXN0ZW1zL2liYy1ycy5naXQgaGVybWVzCmNkIGhlcm1lcwpnaXQgY2hlY2tvdXQgdjAuMTIuMApjYXJnbyBpbnN0YWxsIGliYy1yZWxheWVyLWNsaSAtLWJpbiBoZXJtZXMgLS1sb2NrZWQK"}}),e._v(" "),t("p",[e._v("Make the hermes "),t("code",[e._v("config")]),e._v(" and "),t("code",[e._v("keys")]),e._v(" directory, and copy "),t("code",[e._v("config.toml")]),e._v(" to the config directory:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWtkaXIgLXAgJEhPTUUvLmhlcm1lcwpta2RpciAtcCAkSE9NRS8uaGVybWVzL2tleXMKY3AgY29uZmlnLnRvbWwgJEhPTUUvLmhlcm1lcwo="}}),e._v(" "),t("p",[e._v("Check the hermes version and configuration directory setup:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBoZXJtZXMgdmVyc2lvbgpJTkZPIFRocmVhZElkKDAxKSB1c2luZyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gZnJvbSAnL2hvbWUvcmVsYXkvLmhlcm1lcy9jb25maWcudG9tbCcKaGVybWVzIDAuMTIuMAo="}}),e._v(" "),t("p",[e._v("Edit the hermes configuration (use ports according the port configuration set above, adding only chains that will be relayed):")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"dmltICRIT01FLy5oZXJtZXMvY29uZmlnL2NvbmZpZy50b21sCg=="}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBJbiB0aGlzIGV4YW1wbGUsIHdlIHdpbGwgc2V0IGNoYW5uZWwtMjkyIG9uIHRoZSBjb3Ntb3NodWItNCBjaGFpbiBzZXR0aW5ncyBhbmQgY2hhbm5lbC0zIG9uIHRoZSBxb21fNzY2ODM3OCBjaGFpbiBzZXR0aW5nczoKW1tjaGFpbnNdXQppZCA9ICdjb3Ntb3NodWItNCcKcnBjX2FkZHIgPSAnaHR0cDovLzEyNy4wLjAuMToyNjc1NycKZ3JwY19hZGRyID0gJ2h0dHA6Ly8xMjcuMC4wLjE6OTA5MicKd2Vic29ja2V0X2FkZHIgPSAnd3M6Ly8xMjcuMC4wLjE6MjY3NTcvd2Vic29ja2V0JwouLi4KW2NoYWlucy5wYWNrZXRfZmlsdGVyXQpwb2xpY3kgPSAnYWxsb3cnCmxpc3QgPSBbCiAgIFsndHJhbnNmZXInLCAnY2hhbm5lbC0yOTInXSwgIyBxb21fNzY2ODM3OApdCgpbW2NoYWluc11dCmlkID0gJ3FvbV83NjY4Mzc4JwpycGNfYWRkciA9ICdodHRwOi8vMTI3LjAuMC4xOjI2NjU3JwpncnBjX2FkZHIgPSAnaHR0cDovLzEyNy4wLjAuMTo5MDkwJwp3ZWJzb2NrZXRfYWRkciA9ICd3czovLzEyNy4wLjAuMToyNjY1Ny93ZWJzb2NrZXQnCi4uLgphZGRyZXNzX3R5cGUgPSB7IGRlcml2YXRpb24gPSAnZXRoZXJtaW50JywgcHJvdG9fdHlwZSA9IHsgcGtfdHlwZSA9ICcvZXRoZXJtaW50LmNyeXB0by52MS5ldGhzZWNwMjU2azEuUHViS2V5JyB9IH0KW2NoYWlucy5wYWNrZXRfZmlsdGVyXQpwb2xpY3kgPSAnYWxsb3cnCmxpc3QgPSBbCiAgWyd0cmFuc2ZlcicsICdjaGFubmVsLTMnXSwgIyBjb3Ntb3NodWItNApdCg=="}}),e._v(" "),t("p",[e._v("Add your relayer wallet to Hermes' keyring (located in "),t("code",[e._v("$HOME/.hermes/keys")]),e._v(")")]),e._v(" "),t("p",[e._v("The best practice is to use the same mnemonic over all networks. Do not use your relaying-addresses for anything else, because it will lead to account sequence errors.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGVybWVzIGtleXMgcmVzdG9yZSBjb3Ntb3NodWItNCAtbSAmcXVvdDsyNC13b3JkIG1uZW1vbmljIHNlZWQmcXVvdDsKaGVybWVzIGtleXMgcmVzdG9yZSBxb21fNzY2ODM3OCAtbSAmcXVvdDsyNC13b3JkIG1uZW1vbmljIHNlZWQmcXVvdDsK"}}),e._v(" "),t("p",[e._v("Ensure this wallet has funds in both Qom and ATOM in order to pay the fees required to relay.")]),e._v(" "),t("h2",{attrs:{id:"final-checks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#final-checks"}},[e._v("#")]),e._v(" Final Checks")]),e._v(" "),t("p",[e._v("Validate your hermes configuration file:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBoZXJtZXMgY29uZmlnIHZhbGlkYXRlCklORk8gVGhyZWFkSWQoMDEpIHVzaW5nIGRlZmF1bHQgY29uZmlndXJhdGlvbiBmcm9tICcvaG9tZS9yZWxheS8uaGVybWVzL2NvbmZpZy50b21sJwpTdWNjZXNzOiAmcXVvdDt2YWxpZGF0aW9uIHBhc3NlZCBzdWNjZXNzZnVsbHkmcXVvdDsK"}}),e._v(" "),t("p",[e._v("Perform the hermes "),t("code",[e._v("health-check")]),e._v(" to see if all connected nodes are up and synced:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBoZXJtZXMgaGVhbHRoLWNoZWNrCklORk8gVGhyZWFkSWQoMDEpIHVzaW5nIGRlZmF1bHQgY29uZmlndXJhdGlvbiBmcm9tICcvaG9tZS9yZWxheS8uaGVybWVzL2NvbmZpZy50b21sJwpJTkZPIFRocmVhZElkKDAxKSB0ZWxlbWV0cnkgc2VydmljZSBydW5uaW5nLCBleHBvc2luZyBtZXRyaWNzIGF0IGh0dHA6Ly8wLjAuMC4wOjMwMDEvbWV0cmljcwpJTkZPIFRocmVhZElkKDAxKSBzdGFydGluZyBSRVNUIEFQSSBzZXJ2ZXIgbGlzdGVuaW5nIGF0IGh0dHA6Ly8xMjcuMC4wLjE6MzAwMApJTkZPIFRocmVhZElkKDAxKSBbY29zbW9zaHViLTRdIGNoYWluIGlzIGhlYWx0aHkKSU5GTyBUaHJlYWRJZCgwMSkgW3FvbV83NjY4Mzc4XSBjaGFpbiBpcyBoZWFsdGh5Cg=="}}),e._v(" "),t("p",[e._v("When your nodes are fully synced, you can start the hermes daemon:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGVybWVzIHN0YXJ0Cg=="}}),e._v(" "),t("p",[e._v("Watch hermes' output for successfully relayed packets, or any errors. It will try and clear any unrecieved packets after startup has completed.")]),e._v(" "),t("h2",{attrs:{id:"helpful-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#helpful-commands"}},[e._v("#")]),e._v(" Helpful Commands")]),e._v(" "),t("p",[e._v('Query hermes for unrecieved packets and acknowledgements (ie. check if channels are "clear") with the following:')]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGVybWVzIHF1ZXJ5IHBhY2tldCB1bnJlY2VpdmVkLXBhY2tldHMgY29zbW9zaHViLTQgdHJhbnNmZXIgY2hhbm5lbC0yOTIKaGVybWVzIHF1ZXJ5IHBhY2tldCB1bnJlY2VpdmVkLWFja3MgY29zbW9zaHViLTQgdHJhbnNmZXIgY2hhbm5lbC0yOTIK"}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGVybWVzIHF1ZXJ5IHBhY2tldCB1bnJlY2VpdmVkLXBhY2tldHMgcW9tXzc2NjgzNzggdHJhbnNmZXIgY2hhbm5lbC0zCmhlcm1lcyBxdWVyeSBwYWNrZXQgdW5yZWNlaXZlZC1hY2tzIHFvbV83NjY4Mzc4IHRyYW5zZmVyIGNoYW5uZWwtMwo="}}),e._v(" "),t("p",[e._v("Query hermes for packet commitments with the following:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGVybWVzIHF1ZXJ5IHBhY2tldCBjb21taXRtZW50cyBjb3Ntb3NodWItNCB0cmFuc2ZlciBjaGFubmVsLTI5MgpoZXJtZXMgcXVlcnkgcGFja2V0IGNvbW1pdG1lbnRzIHFvbV83NjY4Mzc4IHRyYW5zZmVyIGNoYW5uZWwtMwo="}}),e._v(" "),t("p",[e._v("Clear the channel (only works on hermes "),t("code",[e._v("v0.12.0")]),e._v(" and higher) with the following:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGVybWVzIGNsZWFyIHBhY2tldHMgY29zbW9zaHViLTQgdHJhbnNmZXIgY2hhbm5lbC0yOTIKaGVybWVzIGNsZWFyIHBhY2tldHMgcW9tXzc2NjgzNzggdHJhbnNmZXIgY2hhbm5lbC0zCg=="}}),e._v(" "),t("p",[e._v("Clear unrecieved packets manually (experimental, will need to stop hermes daemon to prevent confusion with account sequences) with the following:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGVybWVzIHR4IHJhdyBwYWNrZXQtcmVjdiBxb21fNzY2ODM3OCBjb3Ntb3NodWItNCB0cmFuc2ZlciBjaGFubmVsLTI5MgpoZXJtZXMgdHggcmF3IHBhY2tldC1hY2sgcW9tXzc2NjgzNzggY29zbW9zaHViLTQgdHJhbnNmZXIgY2hhbm5lbC0yOTIKaGVybWVzIHR4IHJhdyBwYWNrZXQtcmVjdiBjb3Ntb3NodWItNCBxb21fNzY2ODM3OCB0cmFuc2ZlciBjaGFubmVsLTMKaGVybWVzIHR4IHJhdyBwYWNrZXQtYWNrIGNvc21vc2h1Yi00IHFvbV83NjY4Mzc4IHRyYW5zZmVyIGNoYW5uZWwtMwo="}})],1)}),[],!1,null,null,null);t.default=o.exports}}]);