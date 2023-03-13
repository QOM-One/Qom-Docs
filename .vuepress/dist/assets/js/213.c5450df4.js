(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{657:function(c,d,Z){"use strict";Z.r(d);var l=Z(1),b=Object(l.a)({},(function(){var c=this,d=c._self._c;return d("ContentSlotsDistributor",{attrs:{"slot-key":c.$parent.slotKey}},[d("h1",{attrs:{id:"transactions"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[c._v("#")]),c._v(" Transactions")]),c._v(" "),d("p",[c._v("This section defines the concrete "),d("code",[c._v("sdk.Msg")]),c._v("  types that result in the state transitions defined on the previous section.")]),c._v(" "),d("h2",{attrs:{id:"createclawbackvestingaccount"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#createclawbackvestingaccount"}},[c._v("#")]),c._v(" "),d("code",[c._v("CreateClawbackVestingAccount")])]),c._v(" "),d("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2dDcmVhdGVDbGF3YmFja1Zlc3RpbmdBY2NvdW50IHN0cnVjdCB7CgkvLyBmcm9tX2FkZHJlc3Mgc3BlY2lmaWVzIHRoZSBhY2NvdW50IHRvIHByb3ZpZGUgdGhlIGZ1bmRzIGFuZCBzaWduIHRoZQoJLy8gY2xhd2JhY2sgcmVxdWVzdAoJRnJvbUFkZHJlc3Mgc3RyaW5nIGBwcm90b2J1ZjomcXVvdDtieXRlcywxLG9wdCxuYW1lPWZyb21fYWRkcmVzcyxqc29uPWZyb21BZGRyZXNzLHByb3RvMyZxdW90OyBqc29uOiZxdW90O2Zyb21fYWRkcmVzcyxvbWl0ZW1wdHkmcXVvdDtgCgkvLyB0b19hZGRyZXNzIHNwZWNpZmllcyB0aGUgYWNjb3VudCB0byByZWNlaXZlIHRoZSBmdW5kcwoJVG9BZGRyZXNzIHN0cmluZyBgcHJvdG9idWY6JnF1b3Q7Ynl0ZXMsMixvcHQsbmFtZT10b19hZGRyZXNzLGpzb249dG9BZGRyZXNzLHByb3RvMyZxdW90OyBqc29uOiZxdW90O3RvX2FkZHJlc3Msb21pdGVtcHR5JnF1b3Q7YAoJLy8gc3RhcnRfdGltZSBkZWZpbmVzIHRoZSB0aW1lIGF0IHdoaWNoIHRoZSB2ZXN0aW5nIHBlcmlvZCBiZWdpbnMKCVN0YXJ0VGltZSB0aW1lLlRpbWUgYHByb3RvYnVmOiZxdW90O2J5dGVzLDMsb3B0LG5hbWU9c3RhcnRfdGltZSxqc29uPXN0YXJ0VGltZSxwcm90bzMsc3RkdGltZSZxdW90OyBqc29uOiZxdW90O3N0YXJ0X3RpbWUmcXVvdDtgCgkvLyBsb2NrdXBfcGVyaW9kcyBkZWZpbmVzIHRoZSB1bmxvY2tpbmcgc2NoZWR1bGUgcmVsYXRpdmUgdG8gdGhlIHN0YXJ0X3RpbWUKCUxvY2t1cFBlcmlvZHMgW110eXBlcy5QZXJpb2QgYHByb3RvYnVmOiZxdW90O2J5dGVzLDQscmVwLG5hbWU9bG9ja3VwX3BlcmlvZHMsanNvbj1sb2NrdXBQZXJpb2RzLHByb3RvMyZxdW90OyBqc29uOiZxdW90O2xvY2t1cF9wZXJpb2RzJnF1b3Q7YAoJLy8gdmVzdGluZ19wZXJpb2RzIGRlZmluZXMgdGhldmVzdGluZyBzY2hlZHVsZSByZWxhdGl2ZSB0byB0aGUgc3RhcnRfdGltZQoJVmVzdGluZ1BlcmlvZHMgW110eXBlcy5QZXJpb2QgYHByb3RvYnVmOiZxdW90O2J5dGVzLDUscmVwLG5hbWU9dmVzdGluZ19wZXJpb2RzLGpzb249dmVzdGluZ1BlcmlvZHMscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7dmVzdGluZ19wZXJpb2RzJnF1b3Q7YAoJLy8gbWVyZ2Ugc3BlY2lmaWVzIGEgdGhlIGNyZWF0aW9uIG1lY2hhbmlzbSBmb3IgZXhpc3RpbmcKCS8vIENsYXdiYWNrVmVzdGluZ0FjY291bnRzLiBJZiB0cnVlLCBtZXJnZSB0aGlzIG5ldyBncmFudCBpbnRvIGFuIGV4aXN0aW5nCgkvLyBDbGF3YmFja1Zlc3RpbmdBY2NvdW50LCBvciBjcmVhdGUgaXQgaWYgaXQgZG9lcyBub3QgZXhpc3QuIElmIGZhbHNlLAoJLy8gY3JlYXRlcyBhIG5ldyBhY2NvdW50LiBOZXcgZ3JhbnRzIHRvIGFuIGV4aXN0aW5nIGFjY291bnQgbXVzdCBiZSBmcm9tIHRoZQoJLy8gc2FtZSBmcm9tX2FkZHJlc3MuCglNZXJnZSBib29sIGBwcm90b2J1ZjomcXVvdDt2YXJpbnQsNixvcHQsbmFtZT1tZXJnZSxwcm90bzMmcXVvdDsganNvbjomcXVvdDttZXJnZSxvbWl0ZW1wdHkmcXVvdDtgCn0K"}}),c._v(" "),d("p",[c._v("The msg content stateless validation fails if:")]),c._v(" "),d("ul",[d("li",[d("code",[c._v("FromAddress")]),c._v(" or "),d("code",[c._v("ToAddress")]),c._v(" are invalid")]),c._v(" "),d("li",[d("code",[c._v("LockupPeriods")]),c._v(" and "),d("code",[c._v("VestingPeriods")]),c._v(" "),d("ul",[d("li",[c._v("include period with a non-positive length")]),c._v(" "),d("li",[c._v("describe the same total amount")])])])]),c._v(" "),d("h2",{attrs:{id:"clawback"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#clawback"}},[c._v("#")]),c._v(" "),d("code",[c._v("Clawback")])]),c._v(" "),d("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2dDbGF3YmFjayBzdHJ1Y3QgewoJLy8gZnVuZGVyX2FkZHJlc3MgaXMgdGhlIGFkZHJlc3Mgd2hpY2ggZnVuZGVkIHRoZSBhY2NvdW50CglGdW5kZXJBZGRyZXNzIHN0cmluZyBgcHJvdG9idWY6JnF1b3Q7Ynl0ZXMsMSxvcHQsbmFtZT1mdW5kZXJfYWRkcmVzcyxqc29uPWZ1bmRlckFkZHJlc3MscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7ZnVuZGVyX2FkZHJlc3Msb21pdGVtcHR5JnF1b3Q7YAoJLy8gYWNjb3VudF9hZGRyZXNzIGlzIHRoZSBhZGRyZXNzIG9mIHRoZSBDbGF3YmFja1Zlc3RpbmdBY2NvdW50IHRvIGNsYXcgYmFjayBmcm9tLgoJQWNjb3VudEFkZHJlc3Mgc3RyaW5nIGBwcm90b2J1ZjomcXVvdDtieXRlcywyLG9wdCxuYW1lPWFjY291bnRfYWRkcmVzcyxqc29uPWFjY291bnRBZGRyZXNzLHByb3RvMyZxdW90OyBqc29uOiZxdW90O2FjY291bnRfYWRkcmVzcyxvbWl0ZW1wdHkmcXVvdDtgCgkvLyBkZXN0X2FkZHJlc3Mgc3BlY2lmaWVzIHdoZXJlIHRoZSBjbGF3ZWQtYmFjayB0b2tlbnMgc2hvdWxkIGJlIHRyYW5zZmVycmVkCgkvLyB0by4gSWYgZW1wdHksIHRoZSB0b2tlbnMgd2lsbCBiZSB0cmFuc2ZlcnJlZCBiYWNrIHRvIHRoZSBvcmlnaW5hbCBmdW5kZXIgb2YKCS8vIHRoZSBhY2NvdW50LgoJRGVzdEFkZHJlc3Mgc3RyaW5nIGBwcm90b2J1ZjomcXVvdDtieXRlcywzLG9wdCxuYW1lPWRlc3RfYWRkcmVzcyxqc29uPWRlc3RBZGRyZXNzLHByb3RvMyZxdW90OyBqc29uOiZxdW90O2Rlc3RfYWRkcmVzcyxvbWl0ZW1wdHkmcXVvdDtgCn0K"}}),c._v(" "),d("p",[c._v("The msg content stateless validation fails if:")]),c._v(" "),d("ul",[d("li",[d("code",[c._v("FunderAddress")]),c._v(" or "),d("code",[c._v("AccountAddress")]),c._v(" are invalid")]),c._v(" "),d("li",[d("code",[c._v("DestAddress")]),c._v(" is not empty and invalid")])]),c._v(" "),d("h2",{attrs:{id:"updatevestingfunder"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#updatevestingfunder"}},[c._v("#")]),c._v(" "),d("code",[c._v("UpdateVestingFunder")])]),c._v(" "),d("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2dVcGRhdGVWZXN0aW5nRnVuZGVyIHN0cnVjdCB7CgkvLyBmdW5kZXJfYWRkcmVzcyBpcyB0aGUgY3VycmVudCBmdW5kZXIgYWRkcmVzcyBvZiB0aGUgQ2xhd2JhY2tWZXN0aW5nQWNjb3VudAoJRnVuZGVyQWRkcmVzcyBzdHJpbmcgYHByb3RvYnVmOiZxdW90O2J5dGVzLDEsb3B0LG5hbWU9ZnVuZGVyX2FkZHJlc3MsanNvbj1mdW5kZXJBZGRyZXNzLHByb3RvMyZxdW90OyBqc29uOiZxdW90O2Z1bmRlcl9hZGRyZXNzLG9taXRlbXB0eSZxdW90O2AKCS8vIG5ld19mdW5kZXJfYWRkcmVzcyBpcyB0aGUgbmV3IGFkZHJlc3MgdG8gcmVwbGFjZSB0aGUgZXhpc3RpbmcgZnVuZGVyX2FkZHJlc3MKCU5ld0Z1bmRlckFkZHJlc3Mgc3RyaW5nIGBwcm90b2J1ZjomcXVvdDtieXRlcywyLG9wdCxuYW1lPW5ld19mdW5kZXJfYWRkcmVzcyxqc29uPW5ld0Z1bmRlckFkZHJlc3MscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7bmV3X2Z1bmRlcl9hZGRyZXNzLG9taXRlbXB0eSZxdW90O2AKCS8vIHZlc3RpbmdfYWRkcmVzcyBpcyB0aGUgYWRkcmVzcyBvZiB0aGUgQ2xhd2JhY2tWZXN0aW5nQWNjb3VudCBiZWluZyB1cGRhdGVkCglWZXN0aW5nQWRkcmVzcyBzdHJpbmcgYHByb3RvYnVmOiZxdW90O2J5dGVzLDMsb3B0LG5hbWU9dmVzdGluZ19hZGRyZXNzLGpzb249dmVzdGluZ0FkZHJlc3MscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7dmVzdGluZ19hZGRyZXNzLG9taXRlbXB0eSZxdW90O2AKfQo="}}),c._v(" "),d("p",[c._v("The msg content stateless validation fails if:")]),c._v(" "),d("ul",[d("li",[d("code",[c._v("FunderAddress")]),c._v(", "),d("code",[c._v("NewFunderAddress")]),c._v(" or "),d("code",[c._v("VestingAddress")]),c._v(" are invalid")])])],1)}),[],!1,null,null,null);d.default=b.exports}}]);