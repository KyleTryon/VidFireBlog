webpackJsonp([2],{"56hJ":function(t,e,r){"use strict";var n=r("U0v6"),a=r.n(n),o=r("Id3J"),i=r("fQ5t"),l=(r.n(i),Object(i.createClient)());e.a={asyncData:function(t){var e=t.env;t.params;return l.getEntries({content_type:e.CTF_BLOG_POST_TYPE_ID,order:"-sys.createdAt"}).then(function(t){return{posts:t.items}})},components:{FontAwesomeIcon:a.a,vfBlogCard:o.a}}},Frvj:function(t,e,r){e=t.exports=r("FZ+f")(!1),e.push([t.i,"main[data-v-5b759afe]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}main.wrapper[data-v-5b759afe]{-webkit-box-flex:1;flex:1}section.CTA[data-v-5b759afe]{text-align:center;padding:.5em;margin:0 0 1em}section.CTA h1[data-v-5b759afe]{font-size:1.5em;color:#e74c3c;font-weight:400;margin:.5em 0}section.CTA .form[data-v-5b759afe]{display:-webkit-box;display:flex}section.CTA .form input[data-v-5b759afe]{-webkit-box-flex:1;flex:1}.blogFeed[data-v-5b759afe]{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-pack:center;justify-content:center}",""])},Id3J:function(t,e,r){"use strict";function n(t){r("YdqR")}var a=r("fQ86"),o=r("YM9H"),i=r("VU/8"),l=n,s=i(a.a,o.a,!1,l,"data-v-79b2ff41",null);e.a=s.exports},JFl0:function(t,e,r){"use strict";function n(t){r("hnR6")}Object.defineProperty(e,"__esModule",{value:!0});var a=r("56hJ"),o=r("db43"),i=r("VU/8"),l=n,s=i(a.a,o.a,!1,l,"data-v-5b759afe",null);e.default=s.exports},U0v6:function(t,e,r){(function(t){!function(t,n){n(e,r("QxPg"))}(0,function(e,r){"use strict";function n(t){return t.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,e){var r=e.indexOf(":"),n=d.camelize(e.slice(0,r)),a=e.slice(r+1).trim();return t[n]=a,t},{})}function a(t){return t.split(/\s+/).reduce(function(t,e){return t[e]=!0,t},{})}function o(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.reduce(function(t,e){return Array.isArray(e)?t=t.concat(e):t.push(e),t},[])}function i(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=(e.children||[]).map(i.bind(null,t)),f=Object.keys(e.attributes||{}).reduce(function(t,r){var o=e.attributes[r];switch(r){case"class":t.class=a(o);break;case"style":t.style=n(o);break;default:t.attrs[r]=o}return t},{class:{},style:{},attrs:{}}),c=l.class,u=void 0===c?{}:c,d=l.style,p=void 0===d?{}:d,b=l.attrs,v=void 0===b?{}:b,x=m(l,["class","style","attrs"]);return"string"==typeof e?e:t(e.tag,y({class:o(f.class,u),style:y({},f.style,p),attrs:y({},f.attrs,v)},x,{props:r}),s)}function l(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?b({},t,e):{}}function s(t){var e,r=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-flip-horizontal":"horizontal"===t.flip||"both"===t.flip,"fa-flip-vertical":"vertical"===t.flip||"both"===t.flip},b(e,"fa-"+t.size,null!==t.size),b(e,"fa-rotate-"+t.rotation,null!==t.rotation),b(e,"fa-pull-"+t.pull,null!==t.pull),e);return Object.keys(r).map(function(t){return r[t]?t:null}).filter(function(t){return t})}function f(t,e){return(0===(t||"").length?[]:[t]).concat(e).join(" ")}function c(t){return null===t?null:"object"===(void 0===t?"undefined":p(t))&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}r=r&&r.hasOwnProperty("default")?r.default:r;var u="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},d=function(t,e){return e={exports:{}},t(e,e.exports),e.exports}(function(t){!function(e){var r=function(t,e,n){if(!f(e)||u(e)||d(e)||p(e)||s(e))return e;var a,o=0,i=0;if(c(e))for(a=[],i=e.length;o<i;o++)a.push(r(t,e[o],n));else{a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(a[t(l,n)]=r(t,e[l],n))}return a},n=function(t,e){e=e||{};var r=e.separator||"_",n=e.split||/(?=[A-Z])/;return t.split(n).join(r)},a=function(t){return b(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(t,e){return e?e.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))},o=function(t){var e=a(t);return e.substr(0,1).toUpperCase()+e.substr(1)},i=function(t,e){return n(t,e).toLowerCase()},l=Object.prototype.toString,s=function(t){return"function"==typeof t},f=function(t){return t===Object(t)},c=function(t){return"[object Array]"==l.call(t)},u=function(t){return"[object Date]"==l.call(t)},d=function(t){return"[object RegExp]"==l.call(t)},p=function(t){return"[object Boolean]"==l.call(t)},b=function(t){return(t-=0)===t},y=function(t,e){var r=e&&"process"in e?e.process:e;return"function"!=typeof r?t:function(e,n){return r(e,t,n)}},m={camelize:a,decamelize:i,pascalize:o,depascalize:i,camelizeKeys:function(t,e){return r(y(a,e),t)},decamelizeKeys:function(t,e){return r(y(i,e),t,e)},pascalizeKeys:function(t,e){return r(y(o,e),t)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=m:e.humps=m}(u)}),p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b=(function(){function t(t){this.value=t}function e(e){function r(t,e){return new Promise(function(r,a){var l={key:t,arg:e,resolve:r,reject:a,next:null};i?i=i.next=l:(o=i=l,n(t,e))})}function n(r,o){try{var i=e[r](o),l=i.value;l instanceof t?Promise.resolve(l.value).then(function(t){n("next",t)},function(t){n("throw",t)}):a(i.done?"return":"normal",i.value)}catch(t){a("throw",t)}}function a(t,e){switch(t){case"return":o.resolve({value:e,done:!0});break;case"throw":o.reject(e);break;default:o.resolve({value:e,done:!1})}o=o.next,o?n(o.key,o.arg):i=null}var o,i;this._invoke=r,"function"!=typeof e.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(t){return this._invoke("next",t)},e.prototype.throw=function(t){return this._invoke("throw",t)},e.prototype.return=function(t){return this._invoke("return",t)}}(),function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}),y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},m=function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r},v=function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)},x=!1;try{x=!0}catch(t){}var g=function(){if(!x&&console&&"function"==typeof console.error){var t;(t=console).error.apply(t,arguments)}},h={name:"FontAwesomeIcon",functional:!0,props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:Number,default:null,validator:function(t){return[90,180,270].indexOf(t)>-1}},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1}},render:function(t,e){var n=e.props,a=n.icon,o=n.mask,f=n.symbol,u=c(a),d=l("classes",s(n)),p=l("transform","string"==typeof n.transform?r.parse.transform(n.transform):n.transform),b=l("mask",c(o)),m=r.icon(u,y({},d,p,b,{symbol:f}));if(!m)return g("Check not find one or more icon(s)",u,b);var v=m.abstract;return i.bind(null,t)(v[0],{},e.data)}},C={name:"FontAwesomeLayers",functional:!0,props:{fixedWidth:{type:Boolean,default:!1}},render:function(t,e){var n=r.config.familyPrefix,a=e.data.staticClass,o=[n+"-layers"].concat(v(e.props.fixedWidth?[n+"-fw"]:[]));return t("div",y({},e.data,{staticClass:f(a,o)}),e.children)}},w={name:"FontAwesomeLayersText",functional:!0,props:{value:{type:String,default:""},transform:{type:[String,Object],default:null}},render:function(t,e){var n=e.props,a=l("transform","string"==typeof n.transform?r.parse.transform(n.transform):n.transform),o=r.text(n.value,y({},a)),s=o.abstract;return i.bind(null,t)(s[0],{},e.data)}};e.default=h,e.FontAwesomeIcon=h,e.FontAwesomeLayers=C,e.FontAwesomeLayersText=w,Object.defineProperty(e,"__esModule",{value:!0})})}).call(e,r("DuR2"))},YM9H:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"blogCardContainer"},[r("div",{staticClass:"blogCard"},[r("div",{staticClass:"header"},[r("div",{staticClass:"articleImage"},[r("img",{staticClass:"blogImg",attrs:{itemprop:"url",src:t.article.fields.headerImage.fields.file.url}})]),r("div",{staticClass:"info"},[r("img",{staticClass:"authorAvatar",attrs:{src:t.article.fields.author.fields.avatar.fields.file.url,width:"100px",height:"100px",alt:"author picture"}}),r("div",{staticClass:"meta"},[t._m(0),r("time",{attrs:{itemprop:"datePublished",content:new Date(t.article.fields.published).toISOString()}},[t._v("\n            "+t._s(new Date(t.article.fields.published).toDateString())+"\n          ")])]),r("time",{staticClass:"blogTime",attrs:{itemprop:"timeRequired",datetime:t.time+"m"}},[r("font-awesome-icon",{attrs:{icon:["far","clock"]}}),t._v(" "+t._s(t.time)+"m\n        ")],1)])]),r("div",{staticClass:"body"},[r("h1",[t._v(t._s(t.article.fields.title))])]),r("nuxt-link",{staticClass:"btn btnReadMore",attrs:{to:{name:"blog-slug",params:{slug:t.article.fields.slug}}}},[t._v("READ MORE")])],1)])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[t._v("by:\n            "),r("a",{staticClass:"blogAuthorLink",attrs:{href:"#"}},[t._v("RoboSquidTV")])])}],o={render:n,staticRenderFns:a};e.a=o},YdqR:function(t,e,r){var n=r("pV6J");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r("rjj0")("59ac4076",n,!0)},db43:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"wrapper"},[t._m(0),r("section",{staticClass:"blogFeed"},t._l(t.posts,function(t){return r("vf-blog-card",{key:t.sys.id,attrs:{article:t}})}))])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"CTA"},[r("h1",[r("strong",[t._v("Content")]),t._v(" created "),r("strong",[t._v("for and by YouTubers")]),r("br"),t._v("to help you grow your channel to "),r("strong",[t._v("success")])]),r("div",{staticClass:"form"},[r("input",{attrs:{type:"text",placeholder:"Email"}}),r("a",{staticClass:"btn",attrs:{href:"#"}},[t._v("Get Tips")])]),r("small",[t._v("Only quality posts. No spam, no nonsense. That's a promise!")])])}],o={render:n,staticRenderFns:a};e.a=o},fQ86:function(t,e,r){"use strict";var n=r("U0v6"),a=r.n(n);e.a={props:["article"],components:{FontAwesomeIcon:a.a},computed:{time:function(){var t=this.article.fields.body.toString().split(" ").length;return Math.ceil(t/200)}}}},hnR6:function(t,e,r){var n=r("Frvj");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r("rjj0")("03cff507",n,!0)},pV6J:function(t,e,r){e=t.exports=r("FZ+f")(!1),e.push([t.i,".blogCardContainer[data-v-79b2ff41]{padding:1em;display:-webkit-box;display:flex}.blogCardContainer .blogCard[data-v-79b2ff41]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:300px;box-shadow:0 .2em 1em -.3em rgba(0,0,0,.75);border-radius:.1em;-webkit-box-flex:1;flex:1}.blogCardContainer .blogCard h1[data-v-79b2ff41]{margin:0}.blogCardContainer .blogCard .btnReadMore[data-v-79b2ff41]{justify-self:flex-end;margin:1em}.blogCardContainer .blogCard .authorAvatar[data-v-79b2ff41]{border-radius:50%;box-shadow:0 .2em 1em -.3em rgba(0,0,0,.75);border:.4em solid #fff;position:relative;top:-50px}.blogCardContainer .blogCard .body[data-v-79b2ff41]{display:-webkit-box;display:flex;text-align:center;padding:.4em;-webkit-box-align:center;align-items:center;-webkit-box-flex:1;flex:1}.blogCardContainer .blogCard .body h1[data-v-79b2ff41]{position:relative;top:-1em}.blogCardContainer .blogCard .header[data-v-79b2ff41]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:justify;justify-content:space-between;min-height:100px}.blogCardContainer .blogCard .header .info[data-v-79b2ff41]{padding:.4em;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;font-size:.8em}.blogCardContainer .blogCard .header .blogTime[data-v-79b2ff41],.blogCardContainer .blogCard .header .meta[data-v-79b2ff41]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.blogCardContainer .blogCard .header .meta[data-v-79b2ff41]{text-align:center}",""])}});
//# sourceMappingURL=index.1bca85123945e32c6410.js.map