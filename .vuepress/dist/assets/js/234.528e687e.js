(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{681:function(g,t,C){"use strict";C.r(t);var A=C(1),I=Object(A.a)({},(function(){var g=this,t=g._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":g.$parent.slotKey}},[t("h1",{attrs:{id:"multisig"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multisig"}},[g._v("#")]),g._v(" Multisig")]),g._v(" "),t("p",{attrs:{synopsis:""}},[g._v("Learn how to generate, sign and broadcast a transaction using the keyring multisig")]),g._v(" "),t("p",[g._v("A "),t("strong",[g._v("multisig account")]),g._v(" is an Evmos account with a special key that can require more than one signature to sign transactions. This can be useful for increasing the security of the account or for requiring the consent of multiple parties to make transactions. Multisig accounts can be created by specifying:")]),g._v(" "),t("ul",[t("li",[g._v("threshold number of signatures required")]),g._v(" "),t("li",[g._v("the public keys involved in signing")])]),g._v(" "),t("p",[g._v("To sign with a multisig account, the transaction must be signed individually by the different keys specified for the account. Then, the signatures will be combined into a multisignature which can be used to sign the transaction. If fewer than the threshold number of signatures needed are present, the resultant multisignature is considered invalid.")]),g._v(" "),t("h2",{attrs:{id:"generate-a-multisig-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generate-a-multisig-key"}},[g._v("#")]),g._v(" Generate a Multisig key")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cW9tZCBrZXlzIGFkZCAtLW11bHRpc2lnPW5hbWUxLG5hbWUyLG5hbWUzWy4uLl0gLS1tdWx0aXNpZy10aHJlc2hvbGQ9SyBuZXdfa2V5X25hbWUK"}}),g._v(" "),t("p",[t("code",[g._v("K")]),g._v(" is the minimum number of private keys that must have signed the transactions that carry the public key's address as signer.")]),g._v(" "),t("p",[g._v("The "),t("code",[g._v("--multisig")]),g._v(" flag must contain the name of public keys that will be combined into a public key that will be generated and stored as "),t("code",[g._v("new_key_name")]),g._v(" in the local database. All names supplied through "),t("code",[g._v("--multisig")]),g._v(" must already exist in the local database.")]),g._v(" "),t("p",[g._v("Unless the flag "),t("code",[g._v("--nosort")]),g._v(" is set, the order in which the keys are supplied on the command line does not matter, i.e. the following commands generate two identical keys:")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cW9tZCBrZXlzIGFkZCAtLW11bHRpc2lnPXAxLHAyLHAzIC0tbXVsdGlzaWctdGhyZXNob2xkPTIgbXVsdGlzaWdfYWRkcmVzcwpxb21kIGtleXMgYWRkIC0tbXVsdGlzaWc9cDIscDMscDEgLS1tdWx0aXNpZy10aHJlc2hvbGQ9MiBtdWx0aXNpZ19hZGRyZXNzCg=="}}),g._v(" "),t("p",[g._v("Multisig addresses can also be generated on-the-fly and printed through the which command:")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cW9tZCBrZXlzIHNob3cgLS1tdWx0aXNpZy10aHJlc2hvbGQ9SyBuYW1lMSBuYW1lMiBuYW1lMyBbLi4uXQo="}}),g._v(" "),t("h2",{attrs:{id:"signing-a-transaction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#signing-a-transaction"}},[g._v("#")]),g._v(" Signing a transaction")]),g._v(" "),t("h3",{attrs:{id:"step-1-create-the-multisig-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-create-the-multisig-key"}},[g._v("#")]),g._v(" Step 1: Create the multisig key")]),g._v(" "),t("p",[g._v("Let's assume that you have "),t("code",[g._v("test1")]),g._v(" and "),t("code",[g._v("test2")]),g._v(" want to make a multisig account with "),t("code",[g._v("test3")]),g._v(".")]),g._v(" "),t("p",[g._v("First import the public keys of "),t("code",[g._v("test3")]),g._v(" into your keyring.")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"cW9tZCBrZXlzIGFkZCBcCiAgICB0ZXN0MyBcCiAgICAtLXB1YmtleT1ldm1vc3B1YjFhZGR3bnBlcHFnY3hhem1xNndndDJqNHJkZnVtc2Z3bGEwemZrOGU1c3dzM3Azemc1ZGttOTAwN2htZnlzeGFzMHUyCg=="}}),g._v(" "),t("p",[g._v("Generate the multisig key with 2/3 threshold.")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"cW9tZCBrZXlzIGFkZCBcCiAgICBtdWx0aSBcCiAgICAtLW11bHRpc2lnPXRlc3QxLHRlc3QyLHRlc3QzIFwKICAgIC0tbXVsdGlzaWctdGhyZXNob2xkPTIK"}}),g._v(" "),t("p",[g._v("You can see its address and details:")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"cW9tZCBrZXlzIHNob3cgbXVsdGkKCi0gbmFtZTogbXVsdGkKICB0eXBlOiBtdWx0aQogIGFkZHJlc3M6IGV2bW9zMWUwZngwcTltZWF3cmNxN2ZtbWE5eDYwZ2szNWxwcjR4azM4ODRtCiAgcHVia2V5OiBldm1vc3B1YjF5dHFsMGNzZ3FnZnpkNjY2YXhyanpxM214dzU5eXM2eXFjZDN5ZGp2aGdzMHV6czZrZGs1ZnA0dDczZ21rbDh0NnkwMnlmcTd0dmZ6ZDY2NmF4cmp6cTNzZDY5a3A1dXNrNDkyeDZuZWhxamFsNjd5bnYwbmZxYXB6cnp5M2dtZGsyN2xhMGtqZnFmemQ2NjZheHJqenE2dXRxdDYzOWthMmozeGtuY2drNjVkdXAwNnQyOTdjY2xqbXhodmh1M3JtazkydTNhZmp1eXo5ZGc5CiAgbW5lbW9uaWM6ICZxdW90OyZxdW90OwogIHRocmVzaG9sZDogMAogIHB1YmtleXM6IFtdCg=="}}),g._v(" "),t("p",[g._v("Let's add 10 EVMOS to the multisig wallet:")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cW9tZCB0eCBiYW5rIHNlbmQgXAogICAgdGVzdDEgXAogICAgZXZtb3MxZTBmeDBxOW1lYXdyY3E3Zm1tYTl4NjBnazM1bHByNHhrMzg4NG0gXAogICAgMTAwMDAwMDAwMDAwMDAwMDAwMDBhZXZtb3MgXAogICAgLS1jaGFpbi1pZD1ldm1vc185MDAwLTQgXAogICAgLS1nYXM9YXV0byBcCiAgICAtLWZlZXM9MTAwMDAwMGFldm1vcyBcCiAgICAtLWJyb2FkY2FzdC1tb2RlPWJsb2NrCg=="}}),g._v(" "),t("h3",{attrs:{id:"step-2-create-the-multisig-transaction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2-create-the-multisig-transaction"}},[g._v("#")]),g._v(" Step 2: Create the multisig transaction")]),g._v(" "),t("p",[g._v("We want to send 5 EVMOS from our multisig account to "),t("code",[g._v("evmos1rgjxswhuxhcrhmyxlval0qa70vxwvqn2e0srft")]),g._v(".")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cW9tZCB0eCBiYW5rIHNlbmQgXAogICAgZXZtb3MxcmdqeHN3aHV4aGNyaG15eGx2YWwwcWE3MHZ4d3ZxbjJlMHNyZnQgXAogICAgZXZtb3MxNTdnNnJuNnQ2azVybDBkbDU3emhhMnd4NzJ0NjMzYXhxeXZ2d3EgXAogICAgNTAwMDAwMDAwMDAwMDAwMDAwMGFldm1vcyBcCiAgICAtLWdhcz0yMDAwMDAgXAogICAgLS1mZWVzPTEwMDAwMDBhZXZtb3MgXAogICAgLS1jaGFpbi1pZD1ldm1vc185MDAwLTQgXAogICAgLS1nZW5lcmF0ZS1vbmx5ICZndDsgdW5zaWduZWRUeC5qc29uCg=="}}),g._v(" "),t("p",[g._v("The file "),t("code",[g._v("unsignedTx.json")]),g._v(" contains the unsigned transaction encoded in JSON.")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O2JvZHkmcXVvdDs6IHsKICAgICZxdW90O21lc3NhZ2VzJnF1b3Q7OiBbCiAgICAgIHsKICAgICAgICAmcXVvdDtAdHlwZSZxdW90OzogJnF1b3Q7L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZCZxdW90OywKICAgICAgICAmcXVvdDtmcm9tX2FkZHJlc3MmcXVvdDs6ICZxdW90O2V2bW9zMXJnanhzd2h1eGhjcmhteXhsdmFsMHFhNzB2eHd2cW4yZTBzcmZ0JnF1b3Q7LAogICAgICAgICZxdW90O3RvX2FkZHJlc3MmcXVvdDs6ICZxdW90O2V2bW9zMTU3ZzZybjZ0Nms1cmwwZGw1N3poYTJ3eDcydDYzM2F4cXl2dndxJnF1b3Q7LAogICAgICAgICZxdW90O2Ftb3VudCZxdW90OzogWwogICAgICAgICAgewogICAgICAgICAgICAmcXVvdDtkZW5vbSZxdW90OzogJnF1b3Q7YWV2bW9zJnF1b3Q7LAogICAgICAgICAgICAmcXVvdDthbW91bnQmcXVvdDs6ICZxdW90OzUwMDAwMDAwMDAwMDAwMDAwMDAmcXVvdDsKICAgICAgICAgIH0KICAgICAgICBdCiAgICAgIH0KICAgIF0sCiAgICAmcXVvdDttZW1vJnF1b3Q7OiAmcXVvdDsmcXVvdDssCiAgICAmcXVvdDt0aW1lb3V0X2hlaWdodCZxdW90OzogJnF1b3Q7MCZxdW90OywKICAgICZxdW90O2V4dGVuc2lvbl9vcHRpb25zJnF1b3Q7OiBbXSwKICAgICZxdW90O25vbl9jcml0aWNhbF9leHRlbnNpb25fb3B0aW9ucyZxdW90OzogW10KICB9LAogICZxdW90O2F1dGhfaW5mbyZxdW90OzogewogICAgJnF1b3Q7c2lnbmVyX2luZm9zJnF1b3Q7OiBbXSwKICAgICZxdW90O2ZlZSZxdW90OzogewogICAgICAmcXVvdDthbW91bnQmcXVvdDs6IFsKICAgICAgICB7CiAgICAgICAgICAmcXVvdDtkZW5vbSZxdW90OzogJnF1b3Q7YWV2bW9zJnF1b3Q7LAogICAgICAgICAgJnF1b3Q7YW1vdW50JnF1b3Q7OiAmcXVvdDsxMDAwMDAwJnF1b3Q7CiAgICAgICAgfQogICAgICBdLAogICAgICAmcXVvdDtnYXNfbGltaXQmcXVvdDs6ICZxdW90OzIwMDAwMCZxdW90OywKICAgICAgJnF1b3Q7cGF5ZXImcXVvdDs6ICZxdW90OyZxdW90OywKICAgICAgJnF1b3Q7Z3JhbnRlciZxdW90OzogJnF1b3Q7JnF1b3Q7CiAgICB9CiAgfSwKICAmcXVvdDtzaWduYXR1cmVzJnF1b3Q7OiBbXQp9Cg=="}}),g._v(" "),t("h3",{attrs:{id:"step-3-sign-individually"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-3-sign-individually"}},[g._v("#")]),g._v(" Step 3: Sign individually")]),g._v(" "),t("p",[g._v("Sign with "),t("code",[g._v("test1")]),g._v(" and "),t("code",[g._v("test2")]),g._v(" and create individual signatures.")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"cW9tZCB0eCBzaWduIFwKICAgIHVuc2lnbmVkVHguanNvbiBcCiAgICAtLW11bHRpc2lnPWV2bW9zMWUwZngwcTltZWF3cmNxN2ZtbWE5eDYwZ2szNWxwcjR4azM4ODRtIFwKICAgIC0tZnJvbT10ZXN0MSBcCiAgICAtLW91dHB1dC1kb2N1bWVudD10ZXN0MXNpZy5qc29uIFwKICAgIC0tY2hhaW4taWQ9ZXZtb3NfOTAwMC00Cg=="}}),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"cW9tZCB0eCBzaWduIFwKICAgIHVuc2lnbmVkVHguanNvbiBcCiAgICAtLW11bHRpc2lnPWV2bW9zMWUwZngwcTltZWF3cmNxN2ZtbWE5eDYwZ2szNWxwcjR4azM4ODRtIFwKICAgIC0tZnJvbT10ZXN0MiBcCiAgICAtLW91dHB1dC1kb2N1bWVudD10ZXN0MnNpZy5qc29uIFwKICAgIC0tY2hhaW4taWQ9ZXZtb3NfOTAwMC00Cg=="}}),g._v(" "),t("h3",{attrs:{id:"step-4-create-multisignature"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-4-create-multisignature"}},[g._v("#")]),g._v(" Step 4: Create multisignature")]),g._v(" "),t("p",[g._v("Combine signatures to sign transaction.")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"cW9tZCB0eCBtdWx0aXNpZ24gXAogICAgdW5zaWduZWRUeC5qc29uIFwKICAgIG11bHRpIFwKICAgIHRlc3Qxc2lnLmpzb24gdGVzdDJzaWcuanNvbiBcCiAgICAtLW91dHB1dC1kb2N1bWVudD1zaWduZWRUeC5qc29uIFwKICAgIC0tY2hhaW4taWQ9ZXZtb3NfOTAwMC00Cg=="}}),g._v(" "),t("p",[g._v("The TX is now signed:")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O2JvZHkmcXVvdDs6IHsKICAgICZxdW90O21lc3NhZ2VzJnF1b3Q7OiBbCiAgICAgIHsKICAgICAgICAmcXVvdDtAdHlwZSZxdW90OzogJnF1b3Q7L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZCZxdW90OywKICAgICAgICAmcXVvdDtmcm9tX2FkZHJlc3MmcXVvdDs6ICZxdW90O2V2bW9zMXJnanhzd2h1eGhjcmhteXhsdmFsMHFhNzB2eHd2cW4yZTBzcmZ0JnF1b3Q7LAogICAgICAgICZxdW90O3RvX2FkZHJlc3MmcXVvdDs6ICZxdW90O2V2bW9zMTU3ZzZybjZ0Nms1cmwwZGw1N3poYTJ3eDcydDYzM2F4cXl2dndxJnF1b3Q7LAogICAgICAgICZxdW90O2Ftb3VudCZxdW90OzogWwogICAgICAgICAgewogICAgICAgICAgICAmcXVvdDtkZW5vbSZxdW90OzogJnF1b3Q7YWV2bW9zJnF1b3Q7LAogICAgICAgICAgICAmcXVvdDthbW91bnQmcXVvdDs6ICZxdW90OzUwMDAwMDAwMDAwMDAwMDAwMDAmcXVvdDsKICAgICAgICAgIH0KICAgICAgICBdCiAgICAgIH0KICAgIF0sCiAgICAmcXVvdDttZW1vJnF1b3Q7OiAmcXVvdDsmcXVvdDssCiAgICAmcXVvdDt0aW1lb3V0X2hlaWdodCZxdW90OzogJnF1b3Q7MCZxdW90OywKICAgICZxdW90O2V4dGVuc2lvbl9vcHRpb25zJnF1b3Q7OiBbXSwKICAgICZxdW90O25vbl9jcml0aWNhbF9leHRlbnNpb25fb3B0aW9ucyZxdW90OzogW10KICB9LAogICZxdW90O2F1dGhfaW5mbyZxdW90OzogewogICAgJnF1b3Q7c2lnbmVyX2luZm9zJnF1b3Q7OiBbCiAgICAgIHsKICAgICAgICAmcXVvdDtwdWJsaWNfa2V5JnF1b3Q7OiB7CiAgICAgICAgICAmcXVvdDtAdHlwZSZxdW90OzogJnF1b3Q7L2Nvc21vcy5jcnlwdG8ubXVsdGlzaWcuTGVnYWN5QW1pbm9QdWJLZXkmcXVvdDssCiAgICAgICAgICAmcXVvdDt0aHJlc2hvbGQmcXVvdDs6IDIsCiAgICAgICAgICAmcXVvdDtwdWJsaWNfa2V5cyZxdW90OzogWwogICAgICAgICAgICB7CiAgICAgICAgICAgICAgJnF1b3Q7QHR5cGUmcXVvdDs6ICZxdW90Oy9jb3Ntb3MuY3J5cHRvLnNlY3AyNTZrMS5QdWJLZXkmcXVvdDssCiAgICAgICAgICAgICAgJnF1b3Q7a2V5JnF1b3Q7OiAmcXVvdDtBcEN6U0c4azdUcjRhTTZlNE9KUkV4TjdjTnR2SDIxTDlhemJoK3VScnZ0NCZxdW90OwogICAgICAgICAgICB9LAogICAgICAgICAgICB7CiAgICAgICAgICAgICAgJnF1b3Q7QHR5cGUmcXVvdDs6ICZxdW90Oy9jb3Ntb3MuY3J5cHRvLnNlY3AyNTZrMS5QdWJLZXkmcXVvdDssCiAgICAgICAgICAgICAgJnF1b3Q7a2V5JnF1b3Q7OiAmcXVvdDtBaDkxZXJ6OENoTmFucUxlOWVhOTQ4cnZBaVhNQ1JsUjVLYTdFRS9jMHhVSyZxdW90OwogICAgICAgICAgICB9LAogICAgICAgICAgICB7CiAgICAgICAgICAgICAgJnF1b3Q7QHR5cGUmcXVvdDs6ICZxdW90Oy9jb3Ntb3MuY3J5cHRvLnNlY3AyNTZrMS5QdWJLZXkmcXVvdDssCiAgICAgICAgICAgICAgJnF1b3Q7a2V5JnF1b3Q7OiAmcXVvdDtBME9qdElVQ0ZKTTNBb2JKOUhKVFdLUDlSWlYyK1dQY3dWakxnc0FpZHJaLyZxdW90OwogICAgICAgICAgICB9CiAgICAgICAgICBdCiAgICAgICAgfSwKICAgICAgICAmcXVvdDttb2RlX2luZm8mcXVvdDs6IHsKICAgICAgICAgICZxdW90O211bHRpJnF1b3Q7OiB7CiAgICAgICAgICAgICZxdW90O2JpdGFycmF5JnF1b3Q7OiB7CiAgICAgICAgICAgICAgJnF1b3Q7ZXh0cmFfYml0c19zdG9yZWQmcXVvdDs6IDMsCiAgICAgICAgICAgICAgJnF1b3Q7ZWxlbXMmcXVvdDs6ICZxdW90O3dBPT0mcXVvdDsKICAgICAgICAgICAgfSwKICAgICAgICAgICAgJnF1b3Q7bW9kZV9pbmZvcyZxdW90OzogWwogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICZxdW90O3NpbmdsZSZxdW90OzogewogICAgICAgICAgICAgICAgICAmcXVvdDttb2RlJnF1b3Q7OiAmcXVvdDtTSUdOX01PREVfTEVHQUNZX0FNSU5PX0pTT04mcXVvdDsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICZxdW90O3NpbmdsZSZxdW90OzogewogICAgICAgICAgICAgICAgICAmcXVvdDttb2RlJnF1b3Q7OiAmcXVvdDtTSUdOX01PREVfTEVHQUNZX0FNSU5PX0pTT04mcXVvdDsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICB9CiAgICAgICAgICAgIF0KICAgICAgICAgIH0KICAgICAgICB9LAogICAgICAgICZxdW90O3NlcXVlbmNlJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7CiAgICAgIH0KICAgIF0sCiAgICAmcXVvdDtmZWUmcXVvdDs6IHsKICAgICAgJnF1b3Q7YW1vdW50JnF1b3Q7OiBbCiAgICAgICAgewogICAgICAgICAgJnF1b3Q7ZGVub20mcXVvdDs6ICZxdW90O2Fldm1vcyZxdW90OywKICAgICAgICAgICZxdW90O2Ftb3VudCZxdW90OzogJnF1b3Q7MTAwMDAwMCZxdW90OwogICAgICAgIH0KICAgICAgXSwKICAgICAgJnF1b3Q7Z2FzX2xpbWl0JnF1b3Q7OiAmcXVvdDsyMDAwMDAmcXVvdDssCiAgICAgICZxdW90O3BheWVyJnF1b3Q7OiAmcXVvdDsmcXVvdDssCiAgICAgICZxdW90O2dyYW50ZXImcXVvdDs6ICZxdW90OyZxdW90OwogICAgfQogIH0sCiAgJnF1b3Q7c2lnbmF0dXJlcyZxdW90OzogWwogICAgJnF1b3Q7Q2tDRWVJYmVHYytJMWlwWnVocC8wS2hWTm5XQXYydFRsdmdvNXg2MWx6azFLSG1MUFYzOG0vWUZ1cnJGdDVjbTUrZnFJWHJuK0ZsT2pySnV6Qmh3OG9nWUNrQ2F3bTltcFhzQkhrMENGc0U1NjE4ZlZudlNjRWtmcnpXMGMyakNjanFWOEVQdWozdXQ3NFVXelp5UWt3dEpHeFVXdHJvOUVnbkdzQjdEaTFHeml6c3QmcXVvdDsKICBdCn0K"}}),g._v(" "),t("h3",{attrs:{id:"step-5-broadcast-transaction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-5-broadcast-transaction"}},[g._v("#")]),g._v(" Step 5: Broadcast transaction")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"cW9tZCB0eCBicm9hZGNhc3Qgc2lnbmVkVHguanNvbiBcCiAgICAtLWNoYWluLWlkPWV2bW9zXzkwMDAtNCBcCiAgICAtLWJyb2FkY2FzdC1tb2RlPWJsb2NrCg=="}})],1)}),[],!1,null,null,null);t.default=I.exports}}]);