(function () {var a,D={},B=function(t){var r,e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function h(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{h({},"")}catch(C){h=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var i=r&&r.prototype instanceof d?r:d,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:j(t,e,c)}),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(C){return{type:"throw",arg:C}}}t.wrap=l;var s="suspendedStart",p="suspendedYield",y="executing",v="completed",g={};function d(){}function m(){}function w(){}var b={};h(b,a,function(){return this});var L=Object.getPrototypeOf,x=L&&L(L(T([])));x&&x!==e&&n.call(x,a)&&(b=x);var E=w.prototype=d.prototype=Object.create(b);function $(t){["next","throw","return"].forEach(function(r){h(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;o(this,"_invoke",{value:function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}})}function j(t,e,n){var o=s;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===s)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var h=f(t,e,n);if("normal"===h.type){if(o=n.done?v:p,h.arg===g)continue;return{value:h.arg,done:n.done}}"throw"===h.type&&(o=v,n.method="throw",n.arg=h.arg)}}}function O(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method)?g:("return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g);var i=f(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function G(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function T(t){if(t||""===t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}throw new TypeError(typeof t+" is not iterable")}return m.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=h(w,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,h(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},$(_.prototype),h(_.prototype,c,function(){return this}),t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(l(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},$(E),h(E,u,"Generator"),h(E,a,function(){return this}),h(E,"toString",function(){return"[object Generator]"}),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=T,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(G),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;G(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},t}(D);try{regeneratorRuntime=B}catch(accidentalStrictMode){"object"==typeof globalThis?globalThis.regeneratorRuntime=B:Function("r","regeneratorRuntime = r")(B)}var q={name:"OAuth",props:{providers:{type:Array,default:()=>[]},error:{type:String,default:null}}};if(typeof q==="function"){q=q.options}Object.assign(q,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"thathoff-oauth-providers"},[_vm.error!==null?_c("div",{staticClass:"thathoff-oauth-error",attrs:{"data-theme":"error"},on:{"click":function($event){_vm.error=null}}},[_c("k-icon",{attrs:{"type":"alert"}}),_vm._v(" "),_c("span",[_vm._v(_vm._s(_vm.error))])],1):_vm._e(),_vm._v(" "),_c("k-headline",[_vm._v("Sign in with\u2026")]),_vm._v(" "),_vm._l(_vm.providers,function(provider){return _c("k-button",{key:provider.id,staticClass:"thathoff-oauth-provider",attrs:{"variant":"filled","target":"_self","link":provider.href}},[_vm._v(" "+_vm._s(provider.name)+" ")])})],2)};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:"data-v-426ee5",functional:undefined}}());var z={components:{OAuth:q},props:{methods:Array,pending:Object},data:()=>({settings:{},error:null}),created(){this.load()},computed:{providers(){return Object.values(this.settings.providers)}},methods:{async load(){this.settings=await this.$api.get("oauth/settings"),this.error=(await this.$api.get("oauth/oauthError")).msg}}};if(typeof z==="function"){z=z.options}Object.assign(z,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",[_vm.settings.enabled===false||_vm.settings.onlyOauth===false?_c("k-login",{attrs:{"methods":_vm.methods}}):_vm._e(),_vm._v(" "),_vm.settings.enabled===true?_c("OAuth",{attrs:{"providers":_vm.providers,"error":_vm.error}}):_vm._e()],1)};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());var A={props:{isInstallable:Boolean,isInstalled:Boolean,isOk:Boolean,requirements:Object,translations:Array,oauthSettings:Object,oauthError:String},components:{OAuth:q},data(){return{user:{name:"",email:"",language:this.$translation.code,password:"",role:"admin"}}},computed:{fields(){return{email:{label:this.$t("email"),type:"email",link:!1,autofocus:!0,required:!0},password:{label:this.$t("password"),type:"password",placeholder:this.$t("password")+" \u2026",required:!0},language:{label:this.$t("language"),type:"select",options:this.translations,icon:"globe",empty:!1,required:!0}}},isReady(){return this.isOk&&this.isInstallable},isComplete(){return this.isOk&&this.isInstalled},showOauth(){return!this.isInstallable&&this.oauthSettings&&this.oauthSettings.enabled},providers(){return Object.values(this.oauthSettings.providers)}},created(){this.load()},methods:{async install(){try{await this.$api.system.install(this.user),await this.$reload({globals:["$system","$translation"]}),this.$store.dispatch("notification/success",this.$t("welcome")+"!")}catch(t){this.$store.dispatch("notification/error",t)}},async load(){this.oauthSettings=await this.$api.get("oauth/settings"),this.oauthError=(await this.$api.get("oauth/oauthError")).msg}}};if(typeof A==="function"){A=A.options}Object.assign(A,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("k-panel",[_c("k-view",{staticClass:"k-installation-view",attrs:{"align":"center"}},[_vm.isComplete?_c("k-text",[_c("k-headline",[_vm._v(_vm._s(_vm.$t("installation.completed")))]),_vm._v(" "),_c("k-link",{attrs:{"to":"/login"}},[_vm._v(" "+_vm._s(_vm.$t("login"))+" ")])],1):_vm.isReady?_c("form",{on:{"submit":function($event){$event.preventDefault();return _vm.install.apply(null,arguments)}}},[_c("h1",{staticClass:"k-offscreen"},[_vm._v(" "+_vm._s(_vm.$t("installation"))+" ")]),_vm._v(" "),_c("k-fieldset",{attrs:{"fields":_vm.fields,"novalidate":true},model:{value:_vm.user,callback:function($$v){_vm.user=$$v},expression:"user"}}),_vm._v(" "),_c("k-button",{attrs:{"text":_vm.$t("install"),"type":"submit","icon":"check"}})],1):_vm.showOauth?_c("OAuth",{attrs:{"providers":_vm.providers,"error":_vm.oauthError}}):_c("div",[_c("k-headline",[_vm._v(" "+_vm._s(_vm.$t("installation.issues.headline"))+" ")]),_vm._v(" "),_c("ul",{staticClass:"k-installation-issues"},[_vm.isInstallable===false?_c("li",[_c("k-icon",{attrs:{"type":"alert"}}),_vm._v(" "),_c("span",{domProps:{"innerHTML":_vm._s(_vm.$t("installation.disabled"))}})],1):_vm._e(),_vm._v(" "),_vm.requirements.php===false?_c("li",[_c("k-icon",{attrs:{"type":"alert"}}),_vm._v(" "),_c("span",{domProps:{"innerHTML":_vm._s(_vm.$t("installation.issues.php"))}})],1):_vm._e(),_vm._v(" "),_vm.requirements.server===false?_c("li",[_c("k-icon",{attrs:{"type":"alert"}}),_vm._v(" "),_c("span",{domProps:{"innerHTML":_vm._s(_vm.$t("installation.issues.server"))}})],1):_vm._e(),_vm._v(" "),_vm.requirements.mbstring===false?_c("li",[_c("k-icon",{attrs:{"type":"alert"}}),_vm._v(" "),_c("span",{domProps:{"innerHTML":_vm._s(_vm.$t("installation.issues.mbstring"))}})],1):_vm._e(),_vm._v(" "),_vm.requirements.curl===false?_c("li",[_c("k-icon",{attrs:{"type":"alert"}}),_vm._v(" "),_c("span",{domProps:{"innerHTML":_vm._s(_vm.$t("installation.issues.curl"))}})],1):_vm._e(),_vm._v(" "),_vm.requirements.accounts===false?_c("li",[_c("k-icon",{attrs:{"type":"alert"}}),_vm._v(" "),_c("span",{domProps:{"innerHTML":_vm._s(_vm.$t("installation.issues.accounts"))}})],1):_vm._e(),_vm._v(" "),_vm.requirements.content===false?_c("li",[_c("k-icon",{attrs:{"type":"alert"}}),_vm._v(" "),_c("span",{domProps:{"innerHTML":_vm._s(_vm.$t("installation.issues.content"))}})],1):_vm._e(),_vm._v(" "),_vm.requirements.media===false?_c("li",[_c("k-icon",{attrs:{"type":"alert"}}),_vm._v(" "),_c("span",{domProps:{"innerHTML":_vm._s(_vm.$t("installation.issues.media"))}})],1):_vm._e(),_vm._v(" "),_vm.requirements.sessions===false?_c("li",[_c("k-icon",{attrs:{"type":"alert"}}),_vm._v(" "),_c("span",{domProps:{"innerHTML":_vm._s(_vm.$t("installation.issues.sessions"))}})],1):_vm._e()]),_vm._v(" "),_c("k-button",{attrs:{"text":_vm.$t("retry"),"icon":"refresh"},on:{"click":_vm.$reload}})],1)],1)],1)};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());panel.plugin("thathoff/oauth",{login:z,components:{"k-installation-view":A}});})();