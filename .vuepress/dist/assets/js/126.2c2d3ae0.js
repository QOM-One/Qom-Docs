(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{568:function(e,t,o){"use strict";o.r(t);var a=o(1),c=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"future-improvements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#future-improvements"}},[e._v("#")]),e._v(" Future Improvements")]),e._v(" "),t("h2",{attrs:{id:"correct-usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#correct-usage"}},[e._v("#")]),e._v(" Correct Usage")]),e._v(" "),t("p",[e._v("In the current design, each epoch should be at least two blocks, as the start block should be different from the endblock. Because of this, the time allocated to each epoch will be "),t("code",[e._v("max(block_time x 2, epoch_duration)")]),e._v(". For example: if the "),t("code",[e._v("epoch_duration")]),e._v(" is set to "),t("code",[e._v("1s")]),e._v(", and "),t("code",[e._v("block_time")]),e._v(" is "),t("code",[e._v("5s")]),e._v(", actual epoch time should be "),t("code",[e._v("10s")]),e._v(".")]),e._v(" "),t("p",[e._v("It is recommended to configure "),t("code",[e._v("epoch_duration")]),e._v(" to be more than two times the "),t("code",[e._v("block_time")]),e._v(", to use this module correctly. If there is a mismatch between the "),t("code",[e._v("epoch_duration")]),e._v(" and the actual epoch time, as in the example above, then module logic could become invalid.")]),e._v(" "),t("h2",{attrs:{id:"block-time-drifts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#block-time-drifts"}},[e._v("#")]),e._v(" Block-Time Drifts")]),e._v(" "),t("p",[e._v("This implementation of the "),t("code",[e._v("x/epochs")]),e._v(" module has block-time drifts based on the value of "),t("code",[e._v("block_time")]),e._v(". For example: if we have an epoch of 100 units that ends at "),t("code",[e._v("t=100")]),e._v(", and we have a block at "),t("code",[e._v("t=97")]),e._v(" and a block at "),t("code",[e._v("t=104")]),e._v(" and "),t("code",[e._v("t=110")]),e._v(", this epoch ends at "),t("code",[e._v("t=104")]),e._v(", and the new epoch will start at "),t("code",[e._v("t=110")]),e._v(".")]),e._v(" "),t("p",[e._v("There are time drifts here, varying about 1-2 blocks time, which will slow down epochs.")])])}),[],!1,null,null,null);t.default=c.exports}}]);