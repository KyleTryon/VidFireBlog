webpackJsonp([5],{"0F0d":function(t,e,n){"use strict";e.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}}},AE5M:function(t,e,n){"use strict";e.a={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}}},AdCH:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},C7Nc:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999}",""])},F7kz:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="F7kz"},F88d:function(t,e,n){"use strict";var r=n("LcR1"),a=n("P+aQ"),o=!1;var i=function(t){o||n("kOO9")},s=n("VU/8")(r.a,a.a,!1,i,null,null);s.options.__file=".nuxt/components/nuxt-loading.vue",e.a=s.exports},"HBB+":function(t,e,n){"use strict";e.a={name:"nuxt-child",functional:!0,render:function(t,e){var n=e.parent,o=e.data;o.nuxtChild=!0;for(var i=n,s=n.$nuxt.nuxt.transitions,u=n.$nuxt.nuxt.defaultTransition,c=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&c++,n=n.$parent;o.nuxtChildDepth=c;var f=s[c]||u,l={};r.forEach(function(t){void 0!==f[t]&&(l[t]=f[t])});var d={};return a.forEach(function(t){"function"==typeof f[t]&&(d[t]=f[t].bind(i))}),t("transition",{props:l,on:d},[t("router-view",o)])}};var r=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],a=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"]},HWO9:function(t,e,n){var r=n("kgBm");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("2196b2bb",r,!1)},"Hot+":function(t,e,n){"use strict";var r=n("/5sW"),a=n("HBB+"),o=n("ct3O"),i=n("YLfZ");e.a={name:"nuxt",props:["nuxtChildKey"],render:function(t){return this.nuxt._redirected?t("div",["Redirecting to external page."]):this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey})},beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(i.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:a.a,NuxtError:o.a}}},J2Ti:function(t,e,n){"use strict";n.d(e,"a",function(){return y});var r=n("woOf"),a=n.n(r),o=n("BO1k"),i=n.n(o),s=n("/5sW"),u=n("NYxO");s.default.use(u.default);var c=n("F7kz"),f=c.keys(),l={},d=void 0;if(f.forEach(function(t){-1!==t.indexOf("./index.")&&(d=t)}),d&&(l=_(d)),"function"!=typeof l){l.modules||(l.modules={});var p=!0,h=!1,m=void 0;try{for(var g,x=i()(f);!(p=(g=x.next()).done);p=!0){var v=g.value,w=v.replace(/^\.\//,"").replace(/\.(js)$/,"");if("index"!==w){var b=w.split(/\//);(t=C(l,b))[w=b.pop()]=_(v),t[w].namespaced=!0}}}catch(t){h=!0,m=t}finally{try{!p&&x.return&&x.return()}finally{if(h)throw m}}}var y=l instanceof Function?l:function(){return new u.default.Store(a()({strict:!1},l,{state:l.state instanceof Function?l.state():{}}))};function _(t){var e=c(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function C(t,e){if(1===e.length)return t.modules;var n=e.shift();return t.modules[n]=t.modules[n]||{},t.modules[n].namespaced=!0,t.modules[n].modules=t.modules[n].modules||{},C(t.modules[n],e)}},LcR1:function(t,e,n){"use strict";var r=n("/5sW");e.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#3B8070",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},NbU5:function(t,e,n){"use strict";var r=n("QxPg"),a=n("dypA"),o=n.n(a),i=n("KREn"),s=n("1P+R");r.default.library.add(o.a,s.a,s.b,s.c,i.a)},"P+aQ":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"nuxt-progress",style:{width:t.percent+"%",height:t.height,"background-color":t.canSuccess?t.color:t.failedColor,opacity:t.show?1:0}})};r._withStripped=!0;var a={render:r,staticRenderFns:[]};e.a=a},QhKw:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),404===t.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._m(0)])])};r._withStripped=!0;var a={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}]};e.a=a},T23V:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,a,o,i=n("pFYg"),s=n.n(i),u=n("//Fk"),c=n.n(u),f=n("Xxa5"),l=n.n(f),d=n("mvHQ"),p=n.n(d),h=n("exGp"),m=n.n(h),g=n("fZjL"),x=n.n(g),v=n("woOf"),w=n.n(v),b=n("/5sW"),y=n("unZF"),_=n("qcny"),C=n("YLfZ"),k=(r=m()(l.a.mark(function t(e,n,r){var a,o,i=this;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!j.nuxt.err||n.path!==e.path,this._queryChanged=p()(e.query)!==p()(n.query),this._diffQuery=this._queryChanged?Object(C.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,Object(C.k)(e);case 7:a=t.sent,!this._pathChanged&&this._queryChanged&&a.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},o=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:o,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])})),function(t,e,n){return r.apply(this,arguments)}),$=(a=m()(l.a.mark(function t(e,n,r){var a,o,i,s,u,f,d,p=this;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return a=!1,o=function(t){n.path===t.path&&p.$loading.finish&&p.$loading.finish(),n.path!==t.path&&p.$loading.pause&&p.$loading.pause(),a||(a=!0,T=Object(C.e)(n).map(function(t,e){return Object(C.b)(n.matched[e].path)(n.params)}),r(t))},t.next=6,Object(C.m)(j,{route:e,from:n,next:o.bind(this)});case 6:if(this._dateLastError=j.nuxt.dateErr,this._hadError=!!j.nuxt.err,(i=Object(C.e)(e)).length){t.next=23;break}return t.next=12,z.call(this,i,j.context);case 12:if(!j.context._redirected){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,this.loadLayout("function"==typeof _.a.layout?_.a.layout(j.context):_.a.layout);case 16:return s=t.sent,t.next=19,z.call(this,i,j.context,s);case 19:if(!j.context._redirected){t.next=21;break}return t.abrupt("return");case 21:return j.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 23:return i.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(F(i,e,n)),t.prev=25,t.next=28,z.call(this,i,j.context);case 28:if(!j.context._redirected){t.next=30;break}return t.abrupt("return");case 30:if(!j.context._errored){t.next=32;break}return t.abrupt("return",r());case 32:return"function"==typeof(u=i[0].options.layout)&&(u=u(j.context)),t.next=36,this.loadLayout(u);case 36:return u=t.sent,t.next=39,z.call(this,i,j.context,u);case 39:if(!j.context._redirected){t.next=41;break}return t.abrupt("return");case 41:if(!j.context._errored){t.next=43;break}return t.abrupt("return",r());case 43:if(f=!0,i.forEach(function(t){f&&"function"==typeof t.options.validate&&(f=t.options.validate({params:e.params||{},query:e.query||{},store:R}))}),f){t.next=48;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 48:return t.next=50,c.a.all(i.map(function(t,n){if(t._path=Object(C.b)(e.matched[n].path)(e.params),t._dataRefresh=!1,p._pathChanged&&t._path!==T[n])t._dataRefresh=!0;else if(!p._pathChanged&&p._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return p._diffQuery[t]}))}if(!p._hadError&&p._isMounted&&!t._dataRefresh)return c.a.resolve();var a=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,i=!!t.options.fetch,s=o&&i?30:45;if(o){var u=Object(C.j)(t.options.asyncData,j.context).then(function(e){Object(C.a)(t,e),p.$loading.increase&&p.$loading.increase(s)});a.push(u)}if(i){var f=t.options.fetch(j.context);f&&(f instanceof c.a||"function"==typeof f.then)||(f=c.a.resolve(f)),f.then(function(t){p.$loading.increase&&p.$loading.increase(s)}),a.push(f)}return c.a.all(a)}));case 50:a||(this.$loading.finish&&this.$loading.finish(),T=i.map(function(t,n){return Object(C.b)(e.matched[n].path)(e.params)}),r()),t.next=65;break;case 53:return t.prev=53,t.t0=t.catch(25),t.t0||(t.t0={}),T=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(d=_.a.layout)&&(d=d(j.context)),t.next=62,this.loadLayout(d);case 62:this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 65:case"end":return t.stop()}},t,this,[[25,53]])})),function(t,e,n){return a.apply(this,arguments)}),E=(o=m()(l.a.mark(function t(e){var n,r,a,o;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return j=e.app,O=e.router,R=e.store,t.next=5,c.a.all(S(O));case 5:return n=t.sent,r=new b.default(j),a=A.layout||"default",t.next=10,r.loadLayout(a);case 10:if(r.setLayout(a),o=function(){r.$mount("#__nuxt"),b.default.nextTick(function(){D(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(F(n,O.currentRoute)),T=O.currentRoute.matched.map(function(t){return Object(C.b)(t.path)(O.currentRoute.params)})),r.$loading={},A.error&&r.error(A.error),O.beforeEach(k.bind(r)),O.beforeEach($.bind(r)),O.afterEach(q),O.afterEach(N.bind(r)),!A.serverRendered){t.next=23;break}return o(),t.abrupt("return");case 23:$.call(r,O.currentRoute,O.currentRoute,function(t){if(!t)return q(O.currentRoute,O.currentRoute),L.call(r,O.currentRoute),void o();O.push(t,function(){return o()},function(t){if(!t)return o();console.error(t)})});case 24:case"end":return t.stop()}},t,this)})),function(t){return o.apply(this,arguments)}),T=[],j=void 0,O=void 0,R=void 0,A=window.__NUXT__||{};function F(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,a=Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return n.apply(void 0,a)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=w()({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var a=r(n.matched[0].components.default);x()(a).filter(function(t){return a[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=a[t]})}return e})}function S(t){var e,n=this,r=Object(C.d)(t.options.base,t.options.mode);return Object(C.c)(t.match(r),(e=m()(l.a.mark(function t(e,r,a,o,i){var s;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return n=Object(C.l)(e),r=A.data?A.data[i]:null,A.serverRendered&&r&&Object(C.a)(n,r),n._Ctor=n,s=n,a.components[o]=s,t.abrupt("return",s);case 7:case"end":return t.stop()}var n,r},t,n)})),function(t,n,r,a,o){return e.apply(this,arguments)}))}function z(t,e,n){var r=this,a=[],o=!1;if(void 0!==n&&(a=[],n.middleware&&(a=a.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(a=a.concat(t.options.middleware))})),a=a.map(function(t){return"function"==typeof t?t:("function"!=typeof y.a[t]&&(o=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),y.a[t])}),!o)return Object(C.i)(a,e)}function q(t,e){Object(C.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":s()(t))||t.options||((t=b.default.extend(t))._Ctor=t,n.components[r]=t),t})}function L(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?_.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(j.context)),this.setLayout(e)}function N(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||b.default.nextTick(function(){Object(C.f)(t).forEach(function(e,n){if(e&&-1!==t.matched[n].path.indexOf(":")&&e.constructor._dataRefresh&&T[n]===e.constructor._path&&"function"==typeof e.constructor.options.data){var r=e.constructor.options.data.call(e);for(var a in r)b.default.set(e.$data,a,r[a])}}),L.call(n,t)})}function D(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),O.afterEach(function(e,n){b.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}Object(_.b)().then(E).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},WRRc:function(t,e,n){"use strict";e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},YLfZ:function(t,e,n){"use strict";e.a=function(t,e){var n=t.options.data||v;if(!e&&t.options.hasAsyncData)return;t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),g()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)},e.l=w,e.e=b,e.f=function(t){return[].concat.apply([],t.matched.map(function(t){return h()(t.instances).map(function(e){return t.instances[e]})}))},e.c=y,e.k=_,n.d(e,"h",function(){return $}),n.d(e,"m",function(){return E}),e.i=function t(e,n){if(!e.length||n._redirected||n._errored)return d.a.resolve();return T(e[0],n).then(function(){return t(e.slice(1),n)})},e.j=T,e.d=function(t,e){var n=window.location.pathname;if("hash"===e)return window.location.hash.replace(/^#\//,"");t&&0===n.indexOf(t)&&(n=n.slice(t.length));return(n||"/")+window.location.search+window.location.hash},e.b=function(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===i()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},s=r||{},u=s.pretty?O:encodeURIComponent,c=0;c<t.length;c++){var f=t[c];if("string"!=typeof f){var l,d=i[f.name];if(null==d){if(f.optional){f.partial&&(o+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(d)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+a()(d)+"`");if(0===d.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var p=0;p<d.length;p++){if(l=u(d[p]),!e[c].test(l))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+a()(l)+"`");o+=(0===p?f.prefix:f.delimiter)+l}}else{if(l=f.asterisk?encodeURI(d).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):u(d),!e[c].test(l))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+l+'"');o+=f.prefix+l}}else o+=f}return o}}(function(t,e){var n,r=[],a=0,o=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=j.exec(t));){var u=n[0],c=n[1],f=n.index;if(i+=t.slice(o,f),o=f+u.length,c)i+=c[1];else{var l=t[o],d=n[2],p=n[3],h=n[4],m=n[5],g=n[6],x=n[7];i&&(r.push(i),i="");var v=null!=d&&null!=l&&l!==d,w="+"===g||"*"===g,b="?"===g||"*"===g,y=n[2]||s,_=h||m;r.push({name:p||a++,prefix:d||"",delimiter:y,optional:b,repeat:w,partial:v,asterisk:!!x,pattern:_?(k=_,k.replace(/([=!:$\/()])/g,"\\$1")):x?".*":"[^"+(C=y,C.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1"))+"]+?"})}}var C;var k;o<t.length&&(i+=t.substr(o));i&&r.push(i);return r}(t,e))},e.g=function(t,e){var n={},r=g()({},t,e);for(var a in r)String(t[a])!==String(e[a])&&(n[a]=!0);return n};var r=n("mvHQ"),a=n.n(r),o=n("pFYg"),i=n.n(o),s=n("Xxa5"),u=n.n(s),c=n("exGp"),f=n.n(c),l=n("//Fk"),d=n.n(l),p=n("fZjL"),h=n.n(p),m=n("Dd8w"),g=n.n(m),x=n("/5sW"),v=function(){return{}};function w(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=x.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function b(t){return[].concat.apply([],t.matched.map(function(t){return h()(t.components).map(function(e){return t.components[e]})}))}function y(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function _(t){var e,n=this;return d.a.all(y(t,(e=f()(u.a.mark(function t(e,r,a,o){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",a.components[o]=w(e));case 5:case"end":return t.stop()}},t,n)})),function(t,n,r,a){return e.apply(this,arguments)})))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var C,k,$=(C=f()(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:return t.abrupt("return",g()({},e,{meta:b(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)})),function(t){return C.apply(this,arguments)}),E=(k=f()(u.a.mark(function t(e,n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context){t.next=14;break}t.t0=!0,t.t1=e,t.t2=e.store,t.t3=n.payload,t.t4=n.error,t.t5={CTF_SPACE_ID:"6lqnknawo3ew",CTF_CDA_ACCESS_TOKEN:"f80ee720fcfa8408459bcedcde17d350a15182953ac7ef140494a9cc909d1168",CTF_PERSON_ID:"12NzArHkKYg4gKYIwgc4Gq",CTF_BLOG_POST_TYPE_ID:"blogPost",CTF_CMA_ACCESS_TOKEN:"CFPAT-002749d591c29cac88cc9a7d7c24cc07ca85c3eaa5a4d88b44259291afdd1455"},e.context={get isServer(){return console.warn("context.isServer has been deprecated, please use process.server instead."),!1},get isClient(){return console.warn("context.isClient has been deprecated, please use process.client instead."),!0},isStatic:t.t0,isDev:!1,isHMR:!1,app:t.t1,store:t.t2,payload:t.t3,error:t.t4,base:"/",env:t.t5},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var a=void 0===n?"undefined":i()(n);"number"==typeof t||"undefined"!==a&&"object"!==a||(r=n||{},a=void 0===(n=t)?"undefined":i()(n),t=302),"object"===a&&(n=e.router.resolve(n).href),/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n)?e.context.next({path:n,query:r,status:t}):(n=R(n,r),window.location=n)}},e.context.nuxtState=window.__NUXT__;case 14:if(e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=22;break}return t.next=21,$(n.route);case 21:e.context.route=t.sent;case 22:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=28;break}return t.next=27,$(n.from);case 27:e.context.from=t.sent;case 28:case"end":return t.stop()}},t,this)})),function(t,e){return k.apply(this,arguments)});function T(t,e){var n=void 0;return(n=2===t.length?new d.a(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof d.a||"function"==typeof n.then)||(n=d.a.resolve(n)),n}var j=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function O(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function R(t,e){var n=void 0,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var o,i=t.split("/"),s=(n?n+"://":"//")+i.shift(),u=i.filter(Boolean).join("/"),c=void 0;return 2===(i=u.split("#")).length&&(u=i[0],c=i[1]),s+=u?"/"+u:"",e&&"{}"!==a()(e)&&(s+=(2===t.split("?").length?"&":"?")+(o=e,h()(o).sort().map(function(t){var e=o[t];return null==e?"":Array.isArray(e)?e.slice().map(function(e){return[t,"=",e].join("")}).join("&"):t+"="+e}).filter(Boolean).join("&"))),s+=c?"#"+c:""}},"ZB+b":function(t,e,n){var r=n("AdCH");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("1fe830aa",r,!1)},ct3O:function(t,e,n){"use strict";var r=n("AE5M"),a=n("QhKw"),o=!1;var i=function(t){o||n("ZB+b")},s=n("VU/8")(r.a,a.a,!1,i,null,null);s.options.__file=".nuxt/components/nuxt-error.vue",e.a=s.exports},fQ5t:function(t,e,n){var r=n("c/SZ"),a={CTF_SPACE_ID:"6lqnknawo3ew",CTF_CDA_ACCESS_TOKEN:"f80ee720fcfa8408459bcedcde17d350a15182953ac7ef140494a9cc909d1168"};t.exports={createClient:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return r.createClient({space:t.CTF_SPACE_ID,accessToken:t.CTF_CDA_ACCESS_TOKEN})}}},kOO9:function(t,e,n){var r=n("C7Nc");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("0bcc9f09",r,!1)},kgBm:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,'/*!\n * Font Awesome Free 5.0.1 by @fontawesome - http://fontawesome.com\n * License - http://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */.svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-12.5%;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.fa-rotate-90{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";-webkit-transform:scaleX(-1);transform:scaleX(-1)}.fa-flip-vertical{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.fa-flip-horizontal.fa-flip-vertical,.fa-flip-vertical{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1);transform:scale(-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1em}.svg-inline--fa.fa-stack-2x{height:2em;width:2em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}',""])},mtxM:function(t,e,n){"use strict";e.a=function(){return new a.default({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:u,routes:[{path:"/",component:o,name:"index"},{path:"/blog",component:i,name:"blog"},{path:"/blog/:slug",component:s,name:"blog-slug"}],fallback:!1})};var r=n("/5sW"),a=n("/ocq");r.default.use(a.default);var o=function(){return n.e(2).then(n.bind(null,"/TYz")).then(function(t){return t.default||t})},i=function(){return n.e(3).then(n.bind(null,"JFl0")).then(function(t){return t.default||t})},s=function(){return n.e(0).then(n.bind(null,"vWFL")).then(function(t){return t.default||t})},u=function(t,e,n){if(n)return n;var r={};return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),t.hash&&(r={selector:t.hash}),r}},qcny:function(t,e,n){"use strict";n.d(e,"b",function(){return A});var r=n("Xxa5"),a=n.n(r),o=n("//Fk"),i=(n.n(o),n("C4MV")),s=n.n(i),u=n("woOf"),c=n.n(u),f=n("Dd8w"),l=n.n(f),d=n("exGp"),p=n.n(d),h=n("MU8w"),m=(n.n(h),n("/5sW")),g=n("p3jY"),x=n.n(g),v=n("mtxM"),w=n("0F0d"),b=n("HBB+"),y=n("WRRc"),_=n("ct3O"),C=n("Hot+"),k=n("yTq1"),$=n("YLfZ"),E=n("J2Ti"),T=n("NbU5"),j=n("fQ5t"),O=n.n(j);n.d(e,"a",function(){return _.a});var R,A=(R=p()(a.a.mark(function t(e){var n,r,o,i,u,f,d;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(v.a)(),(r=Object(E.a)()).$router=n,o=l()({router:n,store:r,nuxt:{defaultTransition:F,transitions:[F],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?c()({},F,{name:t}):c()({},F,t):F}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,o.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},k.a),r.app=o,i=e?e.next:function(t){return o.router.push(t)},u=void 0,e?u=n.resolve(e.url).route:(f=Object($.d)(n.options.base),u=n.resolve(f).route),t.next=10,Object($.m)(o,{route:u,next:i,error:o.nuxt.error.bind(o),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 10:if(d=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");o[t="$"+t]=e,r[t]=o[t];var n="__nuxt_"+t+"_installed__";m.default[n]||(m.default[n]=!0,m.default.use(function(){m.default.prototype.hasOwnProperty(t)||s()(m.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),"function"!=typeof T.default){t.next=15;break}return t.next=15,Object(T.default)(o.context,d);case 15:if("function"!=typeof O.a){t.next=18;break}return t.next=18,O()(o.context,d);case 18:t.next=21;break;case 21:return t.abrupt("return",{app:o,router:n,store:r});case 22:case"end":return t.stop()}},t,this)})),function(t){return R.apply(this,arguments)});m.default.component(w.a.name,w.a),m.default.component(b.a.name,b.a),m.default.component(y.a.name,y.a),m.default.component(C.a.name,C.a),m.default.use(x.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var F={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},sq1o:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="sq1o"},unZF:function(t,e,n){"use strict";var r=n("BO1k"),a=n.n(r),o=n("sq1o"),i=o.keys();var s,u={},c=!0,f=!1,l=void 0;try{for(var d,p=a()(i);!(c=(d=p.next()).done);c=!0){var h=d.value;u[h.replace(/^\.\//,"").replace(/\.(js)$/,"")]=(void 0,(s=o(h)).default?s.default:s)}}catch(t){f=!0,l=t}finally{try{!c&&p.return&&p.return()}finally{if(f)throw l}}e.a=u},yTq1:function(t,e,n){"use strict";var r=n("//Fk"),a=n.n(r),o=n("/5sW"),i=n("F88d"),s=n("HWO9"),u=(n.n(s),{_default:function(){return n.e(1).then(n.bind(null,"Ma2J")).then(function(t){return t.default||t})}}),c={};e.a={head:{title:"VidFireTV - The Video Creator Community",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed|Lato"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[n,t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[r])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){o.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){o.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){t&&c["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=c[e],this.layout},loadLayout:function(t){var e=this;t&&(u["_"+t]||c["_"+t])||(t="default");var n="_"+t;return c[n]?a.a.resolve(c[n]):u[n]().then(function(t){return c[n]=t,delete u[n],c[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:i.a}}}},["T23V"]);