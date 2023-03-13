(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{553:function(e,t,a){"use strict";a.r(t);var n=a(1),o=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"auth-vesting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#auth-vesting"}},[e._v("#")]),e._v(" "),t("code",[e._v("auth/vesting")])]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#intro-and-requirements"}},[e._v("Intro and Requirements")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#note"}},[e._v("Note")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#vesting-account-types"}},[e._v("Vesting Account Types")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#basevestingaccount"}},[e._v("BaseVestingAccount")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#continuousvestingaccount"}},[e._v("ContinuousVestingAccount")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#delayedvestingaccount"}},[e._v("DelayedVestingAccount")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#period"}},[e._v("Period")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#periodicvestingaccount"}},[e._v("PeriodicVestingAccount")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#permanentlockedaccount"}},[e._v("PermanentLockedAccount")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#vesting-account-specification"}},[e._v("Vesting Account Specification")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#determining-vesting--vested-amounts"}},[e._v("Determining Vesting & Vested Amounts")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#periodic-vesting-accounts"}},[e._v("Periodic Vesting Accounts")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#transferringsending"}},[e._v("Transferring/Sending")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#delegating"}},[e._v("Delegating")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#undelegating"}},[e._v("Undelegating")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#keepers--handlers"}},[e._v("Keepers & Handlers")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#genesis-initialization"}},[e._v("Genesis Initialization")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#examples"}},[e._v("Examples")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#simple"}},[e._v("Simple")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#slashing"}},[e._v("Slashing")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#periodic-vesting"}},[e._v("Periodic Vesting")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#glossary"}},[e._v("Glossary")])])]),e._v(" "),t("h2",{attrs:{id:"intro-and-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#intro-and-requirements"}},[e._v("#")]),e._v(" Intro and Requirements")]),e._v(" "),t("p",[e._v("This specification defines the vesting account implementation that is used by the Cosmos Hub. The requirements for this vesting account is that it should be initialized during genesis with a starting balance "),t("code",[e._v("X")]),e._v(" and a vesting end time "),t("code",[e._v("ET")]),e._v(". A vesting account may be initialized with a vesting start time "),t("code",[e._v("ST")]),e._v(" and a number of vesting periods "),t("code",[e._v("P")]),e._v(". If a vesting start time is included, the vesting period does not begin until start time is reached. If vesting periods are included, the vesting occurs over the specified number of periods.")]),e._v(" "),t("p",[e._v("For all vesting accounts, the owner of the vesting account is able to delegate and undelegate from validators, however they cannot transfer coins to another account until those coins are vested. This specification allows for four different kinds of vesting:")]),e._v(" "),t("ul",[t("li",[e._v("Delayed vesting, where all coins are vested once "),t("code",[e._v("ET")]),e._v(" is reached.")]),e._v(" "),t("li",[e._v("Continous vesting, where coins begin to vest at "),t("code",[e._v("ST")]),e._v(" and vest linearly with respect to time until "),t("code",[e._v("ET")]),e._v(" is reached")]),e._v(" "),t("li",[e._v("Periodic vesting, where coins begin to vest at "),t("code",[e._v("ST")]),e._v(" and vest periodically according to number of periods and the vesting amount per period. The number of periods, length per period, and amount per period are configurable. A periodic vesting account is distinguished from a continuous vesting account in that coins can be released in staggered tranches. For example, a periodic vesting account could be used for vesting arrangements where coins are relased quarterly, yearly, or over any other function of tokens over time.")]),e._v(" "),t("li",[e._v("Permanent locked vesting, where coins are locked forever. Coins in this account can still be used for delegating and for governance votes even while locked.")])]),e._v(" "),t("h2",{attrs:{id:"note"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[e._v("#")]),e._v(" Note")]),e._v(" "),t("p",[e._v("Vesting accounts can be initialized with some vesting and non-vesting coins. The non-vesting coins would be immediately transferable. DelayedVesting ContinuousVesting, PeriodicVesting and PermenantVesting accounts can be created with normal messages after genesis. Other types of vesting accounts must be created at genesis, or as part of a manual network upgrade. The current specification only allows for "),t("em",[e._v("unconditional")]),e._v(" vesting (ie. there is no possibility of reaching "),t("code",[e._v("ET")]),e._v(" and\nhaving coins fail to vest).")]),e._v(" "),t("h2",{attrs:{id:"vesting-account-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vesting-account-types"}},[e._v("#")]),e._v(" Vesting Account Types")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVmVzdGluZ0FjY291bnQgZGVmaW5lcyBhbiBpbnRlcmZhY2UgdGhhdCBhbnkgdmVzdGluZyBhY2NvdW50IHR5cGUgbXVzdAovLyBpbXBsZW1lbnQuCnR5cGUgVmVzdGluZ0FjY291bnQgaW50ZXJmYWNlIHsKICBBY2NvdW50CgogIEdldFZlc3RlZENvaW5zKFRpbWUpICBDb2lucwogIEdldFZlc3RpbmdDb2lucyhUaW1lKSBDb2lucwoKICAvLyBUcmFja0RlbGVnYXRpb24gcGVyZm9ybXMgaW50ZXJuYWwgdmVzdGluZyBhY2NvdW50aW5nIG5lY2Vzc2FyeSB3aGVuCiAgLy8gZGVsZWdhdGluZyBmcm9tIGEgdmVzdGluZyBhY2NvdW50LiBJdCBhY2NlcHRzIHRoZSBjdXJyZW50IGJsb2NrIHRpbWUsIHRoZQogIC8vIGRlbGVnYXRpb24gYW1vdW50IGFuZCBiYWxhbmNlIG9mIGFsbCBjb2lucyB3aG9zZSBkZW5vbWluYXRpb24gZXhpc3RzIGluCiAgLy8gdGhlIGFjY291bnQncyBvcmlnaW5hbCB2ZXN0aW5nIGJhbGFuY2UuCiAgVHJhY2tEZWxlZ2F0aW9uKFRpbWUsIENvaW5zLCBDb2lucykKCiAgLy8gVHJhY2tVbmRlbGVnYXRpb24gcGVyZm9ybXMgaW50ZXJuYWwgdmVzdGluZyBhY2NvdW50aW5nIG5lY2Vzc2FyeSB3aGVuIGEKICAvLyB2ZXN0aW5nIGFjY291bnQgcGVyZm9ybXMgYW4gdW5kZWxlZ2F0aW9uLgogIFRyYWNrVW5kZWxlZ2F0aW9uKENvaW5zKQoKICBHZXRTdGFydFRpbWUoKSBpbnQ2NAogIEdldEVuZFRpbWUoKSAgIGludDY0Cn0K"}}),e._v(" "),t("h3",{attrs:{id:"basevestingaccount"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basevestingaccount"}},[e._v("#")]),e._v(" BaseVestingAccount")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf reference",base64:"aHR0cHM6Ly9naXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2Jsb2IvdjAuNDcuMC1yYzEvcHJvdG8vY29zbW9zL3Zlc3RpbmcvdjFiZXRhMS92ZXN0aW5nLnByb3RvI0wxMS1MMzUK"}}),e._v(" "),t("h3",{attrs:{id:"continuousvestingaccount"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#continuousvestingaccount"}},[e._v("#")]),e._v(" ContinuousVestingAccount")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf reference",base64:"aHR0cHM6Ly9naXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2Jsb2IvdjAuNDcuMC1yYzEvcHJvdG8vY29zbW9zL3Zlc3RpbmcvdjFiZXRhMS92ZXN0aW5nLnByb3RvI0wzNy1MNDYK"}}),e._v(" "),t("h3",{attrs:{id:"delayedvestingaccount"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delayedvestingaccount"}},[e._v("#")]),e._v(" DelayedVestingAccount")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf reference",base64:"aHR0cHM6Ly9naXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2Jsb2IvdjAuNDcuMC1yYzEvcHJvdG8vY29zbW9zL3Zlc3RpbmcvdjFiZXRhMS92ZXN0aW5nLnByb3RvI0w0OC1MNTcK"}}),e._v(" "),t("h3",{attrs:{id:"period"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#period"}},[e._v("#")]),e._v(" Period")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf reference",base64:"aHR0cHM6Ly9naXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2Jsb2IvdjAuNDcuMC1yYzEvcHJvdG8vY29zbW9zL3Zlc3RpbmcvdjFiZXRhMS92ZXN0aW5nLnByb3RvI0w1OS1MNjkK"}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU3RvcmVzIGFsbCB2ZXN0aW5nIHBlcmlvZHMgcGFzc2VkIGFzIHBhcnQgb2YgYSBQZXJpb2RpY1Zlc3RpbmdBY2NvdW50CnR5cGUgUGVyaW9kcyBbXVBlcmlvZAoK"}}),e._v(" "),t("h3",{attrs:{id:"periodicvestingaccount"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#periodicvestingaccount"}},[e._v("#")]),e._v(" PeriodicVestingAccount")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf reference",base64:"aHR0cHM6Ly9naXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2Jsb2IvdjAuNDcuMC1yYzEvcHJvdG8vY29zbW9zL3Zlc3RpbmcvdjFiZXRhMS92ZXN0aW5nLnByb3RvI0w3MS1MODEK"}}),e._v(" "),t("p",[e._v("In order to facilitate less ad-hoc type checking and assertions and to support flexibility in account balance usage, the existing "),t("code",[e._v("x/bank")]),e._v(" "),t("code",[e._v("ViewKeeper")]),e._v(" interface is updated to contain the following:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBWaWV3S2VlcGVyIGludGVyZmFjZSB7CiAgLy8gLi4uCgogIC8vIENhbGN1bGF0ZXMgdGhlIHRvdGFsIGxvY2tlZCBhY2NvdW50IGJhbGFuY2UuCiAgTG9ja2VkQ29pbnMoY3R4IHNkay5Db250ZXh0LCBhZGRyIHNkay5BY2NBZGRyZXNzKSBzZGsuQ29pbnMKCiAgLy8gQ2FsY3VsYXRlcyB0aGUgdG90YWwgc3BlbmRhYmxlIGJhbGFuY2UgdGhhdCBjYW4gYmUgc2VudCB0byBvdGhlciBhY2NvdW50cy4KICBTcGVuZGFibGVDb2lucyhjdHggc2RrLkNvbnRleHQsIGFkZHIgc2RrLkFjY0FkZHJlc3MpIHNkay5Db2lucwp9Cg=="}}),e._v(" "),t("h3",{attrs:{id:"permanentlockedaccount"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#permanentlockedaccount"}},[e._v("#")]),e._v(" PermanentLockedAccount")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf reference",base64:"aHR0cHM6Ly9naXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2Jsb2IvdjAuNDcuMC1yYzEvcHJvdG8vY29zbW9zL3Zlc3RpbmcvdjFiZXRhMS92ZXN0aW5nLnByb3RvI0w4My1MOTQK"}}),e._v(" "),t("h2",{attrs:{id:"vesting-account-specification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vesting-account-specification"}},[e._v("#")]),e._v(" Vesting Account Specification")]),e._v(" "),t("p",[e._v("Given a vesting account, we define the following in the proceeding operations:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("OV")]),e._v(": The original vesting coin amount. It is a constant value.")]),e._v(" "),t("li",[t("code",[e._v("V")]),e._v(": The number of "),t("code",[e._v("OV")]),e._v(" coins that are still "),t("em",[e._v("vesting")]),e._v(". It is derived by\n"),t("code",[e._v("OV")]),e._v(", "),t("code",[e._v("StartTime")]),e._v(" and "),t("code",[e._v("EndTime")]),e._v(". This value is computed on demand and not on a per-block basis.")]),e._v(" "),t("li",[t("code",[e._v("V'")]),e._v(": The number of "),t("code",[e._v("OV")]),e._v(" coins that are "),t("em",[e._v("vested")]),e._v(" (unlocked). This value is computed on demand and not a per-block basis.")]),e._v(" "),t("li",[t("code",[e._v("DV")]),e._v(": The number of delegated "),t("em",[e._v("vesting")]),e._v(" coins. It is a variable value. It is stored and modified directly in the vesting account.")]),e._v(" "),t("li",[t("code",[e._v("DF")]),e._v(": The number of delegated "),t("em",[e._v("vested")]),e._v(" (unlocked) coins. It is a variable value. It is stored and modified directly in the vesting account.")]),e._v(" "),t("li",[t("code",[e._v("BC")]),e._v(": The number of "),t("code",[e._v("OV")]),e._v(" coins less any coins that are transferred\n(which can be negative or delegated). It is considered to be balance of the embedded base account. It is stored and modified directly in the vesting account.")])]),e._v(" "),t("h3",{attrs:{id:"determining-vesting-vested-amounts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#determining-vesting-vested-amounts"}},[e._v("#")]),e._v(" Determining Vesting & Vested Amounts")]),e._v(" "),t("p",[e._v("It is important to note that these values are computed on demand and not on a mandatory per-block basis (e.g. "),t("code",[e._v("BeginBlocker")]),e._v(" or "),t("code",[e._v("EndBlocker")]),e._v(").")]),e._v(" "),t("h4",{attrs:{id:"continuously-vesting-accounts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#continuously-vesting-accounts"}},[e._v("#")]),e._v(" Continuously Vesting Accounts")]),e._v(" "),t("p",[e._v("To determine the amount of coins that are vested for a given block time "),t("code",[e._v("T")]),e._v(", the\nfollowing is performed:")]),e._v(" "),t("ol",[t("li",[e._v("Compute "),t("code",[e._v("X := T - StartTime")])]),e._v(" "),t("li",[e._v("Compute "),t("code",[e._v("Y := EndTime - StartTime")])]),e._v(" "),t("li",[e._v("Compute "),t("code",[e._v("V' := OV * (X / Y)")])]),e._v(" "),t("li",[e._v("Compute "),t("code",[e._v("V := OV - V'")])])]),e._v(" "),t("p",[e._v("Thus, the total amount of "),t("em",[e._v("vested")]),e._v(" coins is "),t("code",[e._v("V'")]),e._v(" and the remaining amount, "),t("code",[e._v("V")]),e._v(",\nis "),t("em",[e._v("vesting")]),e._v(".")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoY3ZhIENvbnRpbnVvdXNWZXN0aW5nQWNjb3VudCkgR2V0VmVzdGVkQ29pbnModCBUaW1lKSBDb2lucyB7CiAgICBpZiB0ICZsdDs9IGN2YS5TdGFydFRpbWUgewogICAgICAgIC8vIFdlIG11c3QgaGFuZGxlIHRoZSBjYXNlIHdoZXJlIHRoZSBzdGFydCB0aW1lIGZvciBhIHZlc3RpbmcgYWNjb3VudCBoYXMKICAgICAgICAvLyBiZWVuIHNldCBpbnRvIHRoZSBmdXR1cmUgb3Igd2hlbiB0aGUgc3RhcnQgb2YgdGhlIGNoYWluIGlzIG5vdCBleGFjdGx5CiAgICAgICAgLy8ga25vd24uCiAgICAgICAgcmV0dXJuIFplcm9Db2lucwogICAgfSBlbHNlIGlmIHQgJmd0Oz0gY3ZhLkVuZFRpbWUgewogICAgICAgIHJldHVybiBjdmEuT3JpZ2luYWxWZXN0aW5nCiAgICB9CgogICAgeCA6PSB0IC0gY3ZhLlN0YXJ0VGltZQogICAgeSA6PSBjdmEuRW5kVGltZSAtIGN2YS5TdGFydFRpbWUKCiAgICByZXR1cm4gY3ZhLk9yaWdpbmFsVmVzdGluZyAqICh4IC8geSkKfQoKZnVuYyAoY3ZhIENvbnRpbnVvdXNWZXN0aW5nQWNjb3VudCkgR2V0VmVzdGluZ0NvaW5zKHQgVGltZSkgQ29pbnMgewogICAgcmV0dXJuIGN2YS5PcmlnaW5hbFZlc3RpbmcgLSBjdmEuR2V0VmVzdGVkQ29pbnModCkKfQo="}}),e._v(" "),t("h3",{attrs:{id:"periodic-vesting-accounts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#periodic-vesting-accounts"}},[e._v("#")]),e._v(" Periodic Vesting Accounts")]),e._v(" "),t("p",[e._v("Periodic vesting accounts require calculating the coins released during each period for a given block time "),t("code",[e._v("T")]),e._v(". Note that multiple periods could have passed when calling "),t("code",[e._v("GetVestedCoins")]),e._v(", so we must iterate over each period until the end of that period is after "),t("code",[e._v("T")]),e._v(".")]),e._v(" "),t("ol",[t("li",[e._v("Set "),t("code",[e._v("CT := StartTime")])]),e._v(" "),t("li",[e._v("Set "),t("code",[e._v("V' := 0")])])]),e._v(" "),t("p",[e._v("For each Period P:")]),e._v(" "),t("ol",[t("li",[e._v("Compute "),t("code",[e._v("X := T - CT")])]),e._v(" "),t("li",[e._v("IF "),t("code",[e._v("X >= P.Length")]),e._v(" "),t("ol",[t("li",[e._v("Compute "),t("code",[e._v("V' += P.Amount")])]),e._v(" "),t("li",[e._v("Compute "),t("code",[e._v("CT += P.Length")])]),e._v(" "),t("li",[e._v("ELSE break")])])]),e._v(" "),t("li",[e._v("Compute "),t("code",[e._v("V := OV - V'")])])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAocHZhIFBlcmlvZGljVmVzdGluZ0FjY291bnQpIEdldFZlc3RlZENvaW5zKHQgVGltZSkgQ29pbnMgewogIGlmIHQgJmx0OyBwdmEuU3RhcnRUaW1lIHsKICAgIHJldHVybiBaZXJvQ29pbnMKICB9CiAgY3QgOj0gcHZhLlN0YXJ0VGltZSAvLyBUaGUgc3RhcnQgb2YgdGhlIHZlc3Rpbmcgc2NoZWR1bGUKICB2ZXN0ZWQgOj0gMAogIHBlcmlvZHMgPSBwdmEuR2V0UGVyaW9kcygpCiAgZm9yIF8sIHBlcmlvZCAgOj0gcmFuZ2UgcGVyaW9kcyB7CiAgICBpZiB0IC0gY3QgJmx0OyBwZXJpb2QuTGVuZ3RoIHsKICAgICAgYnJlYWsKICAgIH0KICAgIHZlc3RlZCArPSBwZXJpb2QuQW1vdW50CiAgICBjdCArPSBwZXJpb2QuTGVuZ3RoIC8vIGluY3JlbWVudCBjdCB0byB0aGUgc3RhcnQgb2YgdGhlIG5leHQgdmVzdGluZyBwZXJpb2QKICB9CiAgcmV0dXJuIHZlc3RlZAp9CgpmdW5jIChwdmEgUGVyaW9kaWNWZXN0aW5nQWNjb3VudCkgR2V0VmVzdGluZ0NvaW5zKHQgVGltZSkgQ29pbnMgewogICAgcmV0dXJuIHB2YS5PcmlnaW5hbFZlc3RpbmcgLSBjdmEuR2V0VmVzdGVkQ29pbnModCkKfQo="}}),e._v(" "),t("h4",{attrs:{id:"delayed-discrete-vesting-accounts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delayed-discrete-vesting-accounts"}},[e._v("#")]),e._v(" Delayed/Discrete Vesting Accounts")]),e._v(" "),t("p",[e._v("Delayed vesting accounts are easier to reason about as they only have the full amount vesting up until a certain time, then all the coins become vested (unlocked). This does not include any unlocked coins the account may have initially.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoZHZhIERlbGF5ZWRWZXN0aW5nQWNjb3VudCkgR2V0VmVzdGVkQ29pbnModCBUaW1lKSBDb2lucyB7CiAgICBpZiB0ICZndDs9IGR2YS5FbmRUaW1lIHsKICAgICAgICByZXR1cm4gZHZhLk9yaWdpbmFsVmVzdGluZwogICAgfQoKICAgIHJldHVybiBaZXJvQ29pbnMKfQoKZnVuYyAoZHZhIERlbGF5ZWRWZXN0aW5nQWNjb3VudCkgR2V0VmVzdGluZ0NvaW5zKHQgVGltZSkgQ29pbnMgewogICAgcmV0dXJuIGR2YS5PcmlnaW5hbFZlc3RpbmcgLSBkdmEuR2V0VmVzdGVkQ29pbnModCkKfQo="}}),e._v(" "),t("h3",{attrs:{id:"transferring-sending"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transferring-sending"}},[e._v("#")]),e._v(" Transferring/Sending")]),e._v(" "),t("p",[e._v("At any given time, a vesting account may transfer: "),t("code",[e._v("min((BC + DV) - V, BC)")]),e._v(".")]),e._v(" "),t("p",[e._v("In other words, a vesting account may transfer the minimum of the base account balance and the base account balance plus the number of currently delegated vesting coins less the number of coins vested so far.")]),e._v(" "),t("p",[e._v("However, given that account balances are tracked via the "),t("code",[e._v("x/bank")]),e._v(" module and that we want to avoid loading the entire account balance, we can instead determine the locked balance, which can be defined as "),t("code",[e._v("max(V - DV, 0)")]),e._v(", and infer the spendable balance from that.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAodmEgVmVzdGluZ0FjY291bnQpIExvY2tlZENvaW5zKHQgVGltZSkgQ29pbnMgewogICByZXR1cm4gbWF4KHZhLkdldFZlc3RpbmdDb2lucyh0KSAtIHZhLkRlbGVnYXRlZFZlc3RpbmcsIDApCn0K"}}),e._v(" "),t("p",[e._v("The "),t("code",[e._v("x/bank")]),e._v(" "),t("code",[e._v("ViewKeeper")]),e._v(" can then provide APIs to determine locked and spendable coins for any account:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBLZWVwZXIpIExvY2tlZENvaW5zKGN0eCBDb250ZXh0LCBhZGRyIEFjY0FkZHJlc3MpIENvaW5zIHsKICAgIGFjYyA6PSBrLkdldEFjY291bnQoY3R4LCBhZGRyKQogICAgaWYgYWNjICE9IG5pbCB7CiAgICAgICAgaWYgYWNjLklzVmVzdGluZygpIHsKICAgICAgICAgICAgcmV0dXJuIGFjYy5Mb2NrZWRDb2lucyhjdHguQmxvY2tUaW1lKCkpCiAgICAgICAgfQogICAgfQoKICAgIC8vIG5vbi12ZXN0aW5nIGFjY291bnRzIGRvIG5vdCBoYXZlIGFueSBsb2NrZWQgY29pbnMKICAgIHJldHVybiBOZXdDb2lucygpCn0K"}}),e._v(" "),t("h4",{attrs:{id:"keepers-handlers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keepers-handlers"}},[e._v("#")]),e._v(" Keepers/Handlers")]),e._v(" "),t("p",[e._v("The corresponding "),t("code",[e._v("x/bank")]),e._v(" keeper should appropriately handle sending coins based on if the account is a vesting account or not.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBLZWVwZXIpIFNlbmRDb2lucyhjdHggQ29udGV4dCwgZnJvbSBBY2NvdW50LCB0byBBY2NvdW50LCBhbW91bnQgQ29pbnMpIHsKICAgIGJjIDo9IGsuR2V0QmFsYW5jZXMoY3R4LCBmcm9tKQogICAgdiA6PSBrLkxvY2tlZENvaW5zKGN0eCwgZnJvbSkKCiAgICBzcGVuZGFibGUgOj0gYmMgLSB2CiAgICBuZXdDb2lucyA6PSBzcGVuZGFibGUgLSBhbW91bnQKICAgIGFzc2VydChuZXdDb2lucyAmZ3Q7PSAwKQoKICAgIGZyb20uU2V0QmFsYW5jZShuZXdDb2lucykKICAgIHRvLkFkZEJhbGFuY2UoYW1vdW50KQoKICAgIC8vIHNhdmUgYmFsYW5jZXMuLi4KfQo="}}),e._v(" "),t("h3",{attrs:{id:"delegating"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delegating"}},[e._v("#")]),e._v(" Delegating")]),e._v(" "),t("p",[e._v("For a vesting account attempting to delegate "),t("code",[e._v("D")]),e._v(" coins, the following is performed:")]),e._v(" "),t("ol",[t("li",[e._v("Verify "),t("code",[e._v("BC >= D > 0")])]),e._v(" "),t("li",[e._v("Compute "),t("code",[e._v("X := min(max(V - DV, 0), D)")]),e._v(" (portion of "),t("code",[e._v("D")]),e._v(" that is vesting)")]),e._v(" "),t("li",[e._v("Compute "),t("code",[e._v("Y := D - X")]),e._v(" (portion of "),t("code",[e._v("D")]),e._v(" that is free)")]),e._v(" "),t("li",[e._v("Set "),t("code",[e._v("DV += X")])]),e._v(" "),t("li",[e._v("Set "),t("code",[e._v("DF += Y")])])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAodmEgVmVzdGluZ0FjY291bnQpIFRyYWNrRGVsZWdhdGlvbih0IFRpbWUsIGJhbGFuY2UgQ29pbnMsIGFtb3VudCBDb2lucykgewogICAgYXNzZXJ0KGJhbGFuY2UgJmx0Oz0gYW1vdW50KQogICAgeCA6PSBtaW4obWF4KHZhLkdldFZlc3RpbmdDb2lucyh0KSAtIHZhLkRlbGVnYXRlZFZlc3RpbmcsIDApLCBhbW91bnQpCiAgICB5IDo9IGFtb3VudCAtIHgKCiAgICB2YS5EZWxlZ2F0ZWRWZXN0aW5nICs9IHgKICAgIHZhLkRlbGVnYXRlZEZyZWUgKz0geQp9Cg=="}}),e._v(" "),t("p",[t("strong",[e._v("Note")]),e._v(" "),t("code",[e._v("TrackDelegation")]),e._v(" only modifies the "),t("code",[e._v("DelegatedVesting")]),e._v(" and "),t("code",[e._v("DelegatedFree")]),e._v(" fields, so upstream callers MUST modify the "),t("code",[e._v("Coins")]),e._v(" field by subtracting "),t("code",[e._v("amount")]),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"keepers-handlers-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keepers-handlers-2"}},[e._v("#")]),e._v(" Keepers/Handlers")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBEZWxlZ2F0ZUNvaW5zKHQgVGltZSwgZnJvbSBBY2NvdW50LCBhbW91bnQgQ29pbnMpIHsKICAgIGlmIGlzVmVzdGluZyhmcm9tKSB7CiAgICAgICAgZnJvbS5UcmFja0RlbGVnYXRpb24odCwgYW1vdW50KQogICAgfSBlbHNlIHsKICAgICAgICBmcm9tLlNldEJhbGFuY2Uoc2MgLSBhbW91bnQpCiAgICB9CgogICAgLy8gc2F2ZSBhY2NvdW50Li4uCn0K"}}),e._v(" "),t("h3",{attrs:{id:"undelegating"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#undelegating"}},[e._v("#")]),e._v(" Undelegating")]),e._v(" "),t("p",[e._v("For a vesting account attempting to undelegate "),t("code",[e._v("D")]),e._v(" coins, the following is performed:")]),e._v(" "),t("blockquote",[t("p",[e._v("NOTE: "),t("code",[e._v("DV < D")]),e._v(" and "),t("code",[e._v("(DV + DF) < D")]),e._v(" may be possible due to quirks in the rounding of delegation/undelegation logic.")])]),e._v(" "),t("ol",[t("li",[e._v("Verify "),t("code",[e._v("D > 0")])]),e._v(" "),t("li",[e._v("Compute "),t("code",[e._v("X := min(DF, D)")]),e._v(" (portion of "),t("code",[e._v("D")]),e._v(" that should become free, prioritizing free coins)")]),e._v(" "),t("li",[e._v("Compute "),t("code",[e._v("Y := min(DV, D - X)")]),e._v(" (portion of "),t("code",[e._v("D")]),e._v(" that should remain vesting)")]),e._v(" "),t("li",[e._v("Set "),t("code",[e._v("DF -= X")])]),e._v(" "),t("li",[e._v("Set "),t("code",[e._v("DV -= Y")])])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoY3ZhIENvbnRpbnVvdXNWZXN0aW5nQWNjb3VudCkgVHJhY2tVbmRlbGVnYXRpb24oYW1vdW50IENvaW5zKSB7CiAgICB4IDo9IG1pbihjdmEuRGVsZWdhdGVkRnJlZSwgYW1vdW50KQogICAgeSA6PSBhbW91bnQgLSB4CgogICAgY3ZhLkRlbGVnYXRlZEZyZWUgLT0geAogICAgY3ZhLkRlbGVnYXRlZFZlc3RpbmcgLT0geQp9Cg=="}}),e._v(" "),t("p",[t("strong",[e._v("Note")]),e._v(" "),t("code",[e._v("TrackUnDelegation")]),e._v(" only modifies the "),t("code",[e._v("DelegatedVesting")]),e._v(" and "),t("code",[e._v("DelegatedFree")]),e._v(" fields, so upstream callers MUST modify the "),t("code",[e._v("Coins")]),e._v(" field by adding "),t("code",[e._v("amount")]),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("Note")]),e._v(": If a delegation is slashed, the continuous vesting account ends up with an excess "),t("code",[e._v("DV")]),e._v(" amount, even after all its coins have vested. This is because undelegating free coins are prioritized.")]),e._v(" "),t("p",[t("strong",[e._v("Note")]),e._v(": The undelegation (bond refund) amount may exceed the delegated vesting (bond) amount due to the way undelegation truncates the bond refund, which can increase the validator's exchange rate (tokens/shares) slightly if the undelegated tokens are non-integral.")]),e._v(" "),t("h4",{attrs:{id:"keepers-handlers-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keepers-handlers-3"}},[e._v("#")]),e._v(" Keepers/Handlers")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBVbmRlbGVnYXRlQ29pbnModG8gQWNjb3VudCwgYW1vdW50IENvaW5zKSB7CiAgICBpZiBpc1Zlc3RpbmcodG8pIHsKICAgICAgICBpZiB0by5EZWxlZ2F0ZWRGcmVlICsgdG8uRGVsZWdhdGVkVmVzdGluZyAmZ3Q7PSBhbW91bnQgewogICAgICAgICAgICB0by5UcmFja1VuZGVsZWdhdGlvbihhbW91bnQpCiAgICAgICAgICAgIC8vIHNhdmUgYWNjb3VudCAuLi4KICAgICAgICB9CiAgICB9IGVsc2UgewogICAgICAgIEFkZEJhbGFuY2UodG8sIGFtb3VudCkKICAgICAgICAvLyBzYXZlIGFjY291bnQuLi4KICAgIH0KfQo="}}),e._v(" "),t("h2",{attrs:{id:"keepers-handlers-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keepers-handlers-4"}},[e._v("#")]),e._v(" Keepers & Handlers")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("VestingAccount")]),e._v(" implementations reside in "),t("code",[e._v("x/auth")]),e._v(". However, any keeper in a module (e.g. staking in "),t("code",[e._v("x/staking")]),e._v(") wishing to potentially utilize any vesting coins, must call explicit methods on the "),t("code",[e._v("x/bank")]),e._v(" keeper (e.g. "),t("code",[e._v("DelegateCoins")]),e._v(") opposed to "),t("code",[e._v("SendCoins")]),e._v(" and "),t("code",[e._v("SubtractCoins")]),e._v(".")]),e._v(" "),t("p",[e._v("In addition, the vesting account should also be able to spend any coins it receives from other users. Thus, the bank module's "),t("code",[e._v("MsgSend")]),e._v(" handler should error if a vesting account is trying to send an amount that exceeds their unlocked coin amount.")]),e._v(" "),t("p",[e._v("See the above specification for full implementation details.")]),e._v(" "),t("h2",{attrs:{id:"genesis-initialization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#genesis-initialization"}},[e._v("#")]),e._v(" Genesis Initialization")]),e._v(" "),t("p",[e._v("To initialize both vesting and non-vesting accounts, the "),t("code",[e._v("GenesisAccount")]),e._v(" struct includes new fields: "),t("code",[e._v("Vesting")]),e._v(", "),t("code",[e._v("StartTime")]),e._v(", and "),t("code",[e._v("EndTime")]),e._v(". Accounts meant to be of type "),t("code",[e._v("BaseAccount")]),e._v(" or any non-vesting type have "),t("code",[e._v("Vesting = false")]),e._v(". The genesis initialization logic (e.g. "),t("code",[e._v("initFromGenesisState")]),e._v(") must parse and return the correct accounts accordingly based off of these fields.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBHZW5lc2lzQWNjb3VudCBzdHJ1Y3QgewogICAgLy8gLi4uCgogICAgLy8gdmVzdGluZyBhY2NvdW50IGZpZWxkcwogICAgT3JpZ2luYWxWZXN0aW5nICBzZGsuQ29pbnMgYGpzb246JnF1b3Q7b3JpZ2luYWxfdmVzdGluZyZxdW90O2AKICAgIERlbGVnYXRlZEZyZWUgICAgc2RrLkNvaW5zIGBqc29uOiZxdW90O2RlbGVnYXRlZF9mcmVlJnF1b3Q7YAogICAgRGVsZWdhdGVkVmVzdGluZyBzZGsuQ29pbnMgYGpzb246JnF1b3Q7ZGVsZWdhdGVkX3Zlc3RpbmcmcXVvdDtgCiAgICBTdGFydFRpbWUgICAgICAgIGludDY0ICAgICBganNvbjomcXVvdDtzdGFydF90aW1lJnF1b3Q7YAogICAgRW5kVGltZSAgICAgICAgICBpbnQ2NCAgICAgYGpzb246JnF1b3Q7ZW5kX3RpbWUmcXVvdDtgCn0KCmZ1bmMgVG9BY2NvdW50KGdhY2MgR2VuZXNpc0FjY291bnQpIEFjY291bnQgewogICAgYmFjYyA6PSBOZXdCYXNlQWNjb3VudChnYWNjKQoKICAgIGlmIGdhY2MuT3JpZ2luYWxWZXN0aW5nICZndDsgMCB7CiAgICAgICAgaWYgZ2EuU3RhcnRUaW1lICE9IDAgJmFtcDsmYW1wOyBnYS5FbmRUaW1lICE9IDAgewogICAgICAgICAgICAvLyByZXR1cm4gYSBjb250aW51b3VzIHZlc3RpbmcgYWNjb3VudAogICAgICAgIH0gZWxzZSBpZiBnYS5FbmRUaW1lICE9IDAgewogICAgICAgICAgICAvLyByZXR1cm4gYSBkZWxheWVkIHZlc3RpbmcgYWNjb3VudAogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIC8vIGludmFsaWQgZ2VuZXNpcyB2ZXN0aW5nIGFjY291bnQgcHJvdmlkZWQKICAgICAgICAgICAgcGFuaWMoKQogICAgICAgIH0KICAgIH0KCiAgICByZXR1cm4gYmFjYwp9Cg=="}}),e._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("h3",{attrs:{id:"simple"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#simple"}},[e._v("#")]),e._v(" Simple")]),e._v(" "),t("p",[e._v("Given a continuous vesting account with 10 vesting coins.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"T1YgPSAxMApERiA9IDAKRFYgPSAwCkJDID0gMTAKViA9IDEwClYnID0gMAo="}}),e._v(" "),t("ol",[t("li",[t("p",[e._v("Immediately receives 1 coin")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"QkMgPSAxMQo="}})],1),e._v(" "),t("li",[t("p",[e._v("Time passes, 2 coins vest")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"ViA9IDgKVicgPSAyCg=="}})],1),e._v(" "),t("li",[t("p",[e._v("Delegates 4 coins to validator A")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"RFYgPSA0CkJDID0gNwo="}})],1),e._v(" "),t("li",[t("p",[e._v("Sends 3 coins")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"QkMgPSA0Cg=="}})],1),e._v(" "),t("li",[t("p",[e._v("More time passes, 2 more coins vest")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"ViA9IDYKVicgPSA0Cg=="}})],1),e._v(" "),t("li",[t("p",[e._v("Sends 2 coins. At this point the account cannot send anymore until further\ncoins vest or it receives additional coins. It can still however, delegate.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"QkMgPSAyCg=="}})],1)]),e._v(" "),t("h3",{attrs:{id:"slashing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#slashing"}},[e._v("#")]),e._v(" Slashing")]),e._v(" "),t("p",[e._v("Same initial starting conditions as the simple example.")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Time passes, 5 coins vest")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"ViA9IDUKVicgPSA1Cg=="}})],1),e._v(" "),t("li",[t("p",[e._v("Delegate 5 coins to validator A")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"RFYgPSA1CkJDID0gNQo="}})],1),e._v(" "),t("li",[t("p",[e._v("Delegate 5 coins to validator B")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"REYgPSA1CkJDID0gMAo="}})],1),e._v(" "),t("li",[t("p",[e._v("Validator A gets slashed by 50%, making the delegation to A now worth 2.5 coins")])]),e._v(" "),t("li",[t("p",[e._v("Undelegate from validator A (2.5 coins)")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"REYgPSA1IC0gMi41ID0gMi41CkJDID0gMCArIDIuNSA9IDIuNQo="}})],1),e._v(" "),t("li",[t("p",[e._v("Undelegate from validator B (5 coins). The account at this point can only\nsend 2.5 coins unless it receives more coins or until more coins vest.\nIt can still however, delegate.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"RFYgPSA1IC0gMi41ID0gMi41CkRGID0gMi41IC0gMi41ID0gMApCQyA9IDIuNSArIDUgPSA3LjUK"}}),e._v(" "),t("p",[e._v("Notice how we have an excess amount of "),t("code",[e._v("DV")]),e._v(".")])],1)]),e._v(" "),t("h3",{attrs:{id:"periodic-vesting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#periodic-vesting"}},[e._v("#")]),e._v(" Periodic Vesting")]),e._v(" "),t("p",[e._v("A vesting account is created where 100 tokens will be released over 1 year, with\n1/4 of tokens vesting each quarter. The vesting schedule would be as follows:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"yaml",base64:"UGVyaW9kczoKLSBhbW91bnQ6IDI1c3Rha2UsIGxlbmd0aDogNzg4NDAwMAotIGFtb3VudDogMjVzdGFrZSwgbGVuZ3RoOiA3ODg0MDAwCi0gYW1vdW50OiAyNXN0YWtlLCBsZW5ndGg6IDc4ODQwMDAKLSBhbW91bnQ6IDI1c3Rha2UsIGxlbmd0aDogNzg4NDAwMAo="}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"T1YgPSAxMDAKREYgPSAwCkRWID0gMApCQyA9IDEwMApWID0gMTAwClYnID0gMAo="}}),e._v(" "),t("ol",[t("li",[t("p",[e._v("Immediately receives 1 coin")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"QkMgPSAxMDEK"}})],1),e._v(" "),t("li",[t("p",[e._v("Vesting period 1 passes, 25 coins vest")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"ViA9IDc1ClYnID0gMjUK"}})],1),e._v(" "),t("li",[t("p",[e._v("During vesting period 2, 5 coins are transfered and 5 coins are delegated")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"RFYgPSA1CkJDID0gOTEK"}})],1),e._v(" "),t("li",[t("p",[e._v("Vesting period 2 passes, 25 coins vest")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"ViA9IDUwClYnID0gNTAK"}})],1)]),e._v(" "),t("h2",{attrs:{id:"glossary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[e._v("#")]),e._v(" Glossary")]),e._v(" "),t("ul",[t("li",[e._v("OriginalVesting: The amount of coins (per denomination) that are initially\npart of a vesting account. These coins are set at genesis.")]),e._v(" "),t("li",[e._v("StartTime: The BFT time at which a vesting account starts to vest.")]),e._v(" "),t("li",[e._v("EndTime: The BFT time at which a vesting account is fully vested.")]),e._v(" "),t("li",[e._v("DelegatedFree: The tracked amount of coins (per denomination) that are\ndelegated from a vesting account that have been fully vested at time of delegation.")]),e._v(" "),t("li",[e._v("DelegatedVesting: The tracked amount of coins (per denomination) that are\ndelegated from a vesting account that were vesting at time of delegation.")]),e._v(" "),t("li",[e._v("ContinuousVestingAccount: A vesting account implementation that vests coins\nlinearly over time.")]),e._v(" "),t("li",[e._v("DelayedVestingAccount: A vesting account implementation that only fully vests\nall coins at a given time.")]),e._v(" "),t("li",[e._v("PeriodicVestingAccount: A vesting account implementation that vests coins\naccording to a custom vesting schedule.")]),e._v(" "),t("li",[e._v("PermanentLockedAccount: It does not ever release coins, locking them indefinitely.\nCoins in this account can still be used for delegating and for governance votes even while locked.")])]),e._v(" "),t("h2",{attrs:{id:"cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[e._v("#")]),e._v(" CLI")]),e._v(" "),t("p",[e._v("A user can query and interact with the "),t("code",[e._v("vesting")]),e._v(" module using the CLI.")]),e._v(" "),t("h3",{attrs:{id:"transactions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[e._v("#")]),e._v(" Transactions")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("tx")]),e._v(" commands allow users to interact with the "),t("code",[e._v("vesting")]),e._v(" module.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCB0eCB2ZXN0aW5nIC0taGVscAo="}}),e._v(" "),t("h4",{attrs:{id:"create-periodic-vesting-account"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-periodic-vesting-account"}},[e._v("#")]),e._v(" create-periodic-vesting-account")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("create-periodic-vesting-account")]),e._v(" command creates a new vesting account funded with an allocation of tokens, where a sequence of coins and period length in seconds. Periods are sequential, in that the duration of of a period only starts at the end of the previous period. The duration of the first period starts upon account creation.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCB0eCB2ZXN0aW5nIGNyZWF0ZS1wZXJpb2RpYy12ZXN0aW5nLWFjY291bnQgW3RvX2FkZHJlc3NdIFtwZXJpb2RzX2pzb25fZmlsZV0gW2ZsYWdzXQo="}}),e._v(" "),t("p",[e._v("Example:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCB0eCB2ZXN0aW5nIGNyZWF0ZS1wZXJpb2RpYy12ZXN0aW5nLWFjY291bnQgY29zbW9zMS4uIHBlcmlvZHMuanNvbgo="}}),e._v(" "),t("h4",{attrs:{id:"create-vesting-account"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-vesting-account"}},[e._v("#")]),e._v(" create-vesting-account")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("create-vesting-account")]),e._v(" command creates a new vesting account funded with an allocation of tokens. The account can either be a delayed or continuous vesting account, which is determined by the '--delayed' flag. All vesting accouts created will have their start time set by the committed block's time. The end_time must be provided as a UNIX epoch timestamp.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCB0eCB2ZXN0aW5nIGNyZWF0ZS12ZXN0aW5nLWFjY291bnQgW3RvX2FkZHJlc3NdIFthbW91bnRdIFtlbmRfdGltZV0gW2ZsYWdzXQo="}}),e._v(" "),t("p",[e._v("Example:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCB0eCB2ZXN0aW5nIGNyZWF0ZS12ZXN0aW5nLWFjY291bnQgY29zbW9zMS4uIDEwMHN0YWtlIDI1OTIwMDAK"}})],1)}),[],!1,null,null,null);t.default=o.exports}}]);