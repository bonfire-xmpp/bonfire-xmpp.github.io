(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{656:function(e,t,r){var content=r(676);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(12).default)("6500f7d4",content,!0,{sourceMap:!1})},675:function(e,t,r){"use strict";r(656)},676:function(e,t,r){var n=r(11)(!1);n.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap);"]),n.push([e.i,'.field-desc[data-v-2abd56e4]:before{content:"";width:4px;display:inline-block}.action-buttons>*[data-v-2abd56e4]{margin-left:12px}',""]),e.exports=n},685:function(e,t,r){"use strict";r.r(t);r(16),r(10),r(14),r(19),r(13),r(20);var n=r(0),c=(r(25),r(34)),o=r(5);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={name:"AddFriendModal",props:{value:Boolean},data:function(){return{resolve:null,promise:null}},computed:d({},Object(c.e)({accepted:o.Store.$states.rosterAcceptPrivacyRead})),methods:d(d({},Object(c.d)({setAccepted:"SET_"+o.Store.$states.rosterAcceptPrivacyRead})),{},{accept:function(){this.setAccepted(!0),this.resolve(!0),this.$emit("input",!1)},decline:function(){this.setAccepted(!1),this.resolve(!1),this.$emit("input",!1)},getResponse:function(){var e=this;return this.accepted?new Promise((function(e){return e(!0)})):(this.promise=new Promise((function(t){return e.resolve=t})),this.promise)}})},f=(r(675),r(9)),h=r(15),y=r.n(h),_=r(577),m=r(230),w=r(105),O=r(574),x=r(571),k=r(227),P=r(569),component=Object(f.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.accepted?e._e():r("v-dialog",{staticClass:"rounded-xl",attrs:{value:e.value,persistent:"",width:"500",fullscreen:e.$device.isMobileOrTablet}},[r("v-card",{staticClass:"white--text rounded-lg unselectable d-flex flex-column",attrs:{outlined:""}},[r("v-card-title",{staticClass:"text-center font-weight-black d-block black-lighten"},[r("span",[e._v("Hold up!")]),e._v(" "),r("v-btn",{staticClass:"float-right mt-n1",attrs:{icon:""},on:{click:function(t){return t.stopPropagation(),e.decline(t)}}},[r("v-icon",{attrs:{color:"grey-600"}},[e._v("mdi-close")])],1)],1),e._v(" "),r("v-card-text",{staticClass:"flex-grow-1 black-lighten",staticStyle:{"font-size":"1em"}},[r("div",{staticClass:"text-center font-weight-black"},[e._v("\n        Friends in XMPP don't work like you might expect!\n      ")]),e._v(" "),r("v-divider",{staticClass:"my-3"}),e._v(" "),r("div",[e._v("\n        When you accept somebody's friend request, "),r("strong",[e._v("you're letting them see your status.")]),e._v("\n        We will automatically send a request back, but they don't have to accept it.\n      ")]),e._v(" "),r("v-divider",{staticClass:"my-3"}),e._v(" "),r("p",[e._v("\n        People whose status "),r("i",[e._v("you")]),e._v(" can see, but they can't see yours, are labeled "),r("strong",[e._v("Acquaintances.")])]),e._v(" "),r("p",[e._v("\n        People who can see "),r("i",[e._v("your")]),e._v(" status, but you can't see theirs, are labeled "),r("strong",[e._v("Observers.")])]),e._v(" "),r("div",[e._v("\n        If someone isn't labeled either, then you can both see each other's status.\n      ")]),e._v(" "),r("v-spacer"),e._v(" "),r("div",{staticClass:"mb-n4 mt-4 text-right text-caption text--disabled"},[e._v("\n        We won't bother you again after you accept.\n      ")])],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",{staticClass:"pb-3 flex-row-reverse black action-buttons"},[r("v-btn",{attrs:{ripple:!1,small:"",depressed:"",color:"primary"},on:{click:e.accept}},[e._v("I understand")]),e._v(" "),r("v-btn",{attrs:{ripple:!1,small:"",depressed:"",color:"black"},on:{click:e.decline}},[e._v("Cancel")])],1)],1)],1)}),[],!1,null,"2abd56e4",null);t.default=component.exports;y()(component,{VBtn:_.a,VCard:m.a,VCardActions:w.a,VCardText:w.b,VCardTitle:w.c,VDialog:O.a,VDivider:x.a,VIcon:k.a,VSpacer:P.a})}}]);