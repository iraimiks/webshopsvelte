var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e,n){t.$$.on_destroy.push(function(t,e){const n=t.subscribe(e);return n.unsubscribe?()=>n.unsubscribe():n}(e,n))}function i(t,e,n){if(t){const o=u(t,e,n);return t[0](o)}}function u(t,n,o){return t[1]?e({},e(n.$$scope.ctx,t[1](o?o(n):{}))):n.$$scope.ctx}function l(t,n,o,r){return t[1]?e({},e(n.$$scope.changed||{},t[1](r?r(o):{}))):n.$$scope.changed||{}}function p(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function $(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function v(){return h(" ")}function g(){return h("")}function b(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function x(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){for(const n in e)"style"===n?t.style.cssText=e[n]:n in t?t[n]=e[n]:x(t,n,e[n])}let w;function C(t){w=t}function P(){if(!w)throw new Error("Function called outside component initialization");return w}function E(){const t=w;return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach(e=>{e.call(t,r)})}}}function _(t,e){P().$$.context.set(t,e)}function k(t){return P().$$.context.get(t)}const L=[],R=[],z=[],S=[],j=Promise.resolve();let A=!1;function O(t){z.push(t)}function T(){const t=new Set;do{for(;L.length;){const t=L.shift();C(t),H(t.$$)}for(;R.length;)R.pop()();for(let e=0;e<z.length;e+=1){const n=z[e];t.has(n)||(n(),t.add(n))}z.length=0}while(L.length);for(;S.length;)S.pop()();A=!1}function H(t){t.fragment&&(t.update(t.dirty),r(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(O))}const M=new Set;let N;function q(){N={r:0,c:[],p:N}}function U(){N.r||r(N.c),N=N.p}function B(t,e){t&&t.i&&(M.delete(t),t.i(e))}function K(t,e,n,o){if(t&&t.o){if(M.has(t))return;M.add(t),N.c.push(()=>{M.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function G(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(o[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[s]=a}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function D(t){return"object"==typeof t&&null!==t?t:{}}function I(t,e,o){const{fragment:c,on_mount:a,on_destroy:i,after_update:u}=t.$$;c.m(e,o),O(()=>{const e=a.map(n).filter(s);i?i.push(...e):r(e),t.$$.on_mount=[]}),u.forEach(O)}function F(t,e){t.$$.fragment&&(r(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function J(t,e){t.$$.dirty||(L.push(t),A||(A=!0,j.then(T)),t.$$.dirty=o()),t.$$.dirty[e]=!0}function Q(e,n,s,c,a,i){const u=w;C(e);const l=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:null};let $=!1;p.ctx=s?s(e,l,(t,n,o=n)=>(p.ctx&&a(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),$&&J(e,t)),n)):l,p.update(),$=!0,r(p.before_update),p.fragment=c(p.ctx),n.target&&(n.hydrate?p.fragment.l(function(t){return Array.from(t.childNodes)}(n.target)):p.fragment.c(),n.intro&&B(e.$$.fragment),I(e,n.target,n.anchor),T()),C(u)}class V{$destroy(){F(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const W=[];function X(e,n=t){let o;const r=[];function s(t){if(c(e,t)&&(e=t,o)){const t=!W.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),W.push(n,e)}if(t){for(let t=0;t<W.length;t+=2)W[t][0](W[t+1]);W.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return r.push(i),1===r.length&&(o=n(s)||t),c(e),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function Y(e,n,o){const c=!Array.isArray(e),a=c?[e]:e,i=n.length<2;return{subscribe:X(o,e=>{let o=!1;const u=[];let l=0,p=t;const $=()=>{if(l)return;p();const o=n(c?u[0]:u,e);i?e(o):p=s(o)?o:t},f=a.map((t,e)=>t.subscribe(t=>{u[e]=t,l&=~(1<<e),o&&$()},()=>{l|=1<<e}));return o=!0,$(),function(){r(f),p()}}).subscribe}}const Z={},tt={};function et(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}const nt=function(t,e){const n=[];let o=et(t);return{get location(){return o},listen(e){n.push(e);const r=()=>{o=et(t),e({location:o,action:"POP"})};return t.addEventListener("popstate",r),()=>{t.removeEventListener("popstate",r);const o=n.indexOf(e);n.splice(o,1)}},navigate(e,{state:r,replace:s=!1}={}){r={...r,key:Date.now()+""};try{s?t.history.replaceState(r,null,e):t.history.pushState(r,null,e)}catch(n){t.location[s?"replace":"assign"](e)}o=et(t),n.forEach(t=>t({location:o,action:"PUSH"}))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(t="/"){let e=0;const n=[{pathname:t,search:""}],o=[];return{get location(){return n[e]},addEventListener(t,e){},removeEventListener(t,e){},history:{get entries(){return n},get index(){return e},get state(){return o[e]},pushState(t,r,s){const[c,a=""]=s.split("?");e++,n.push({pathname:c,search:a}),o.push(t)},replaceState(t,r,s){const[c,a=""]=s.split("?");n[e]={pathname:c,search:a},o[e]=t}}}}()),{navigate:ot}=nt,rt=/^:(.+)/,st=4,ct=3,at=2,it=1,ut=1;function lt(t,e){return t.substr(0,e.length)===e}function pt(t){return"*"===t[0]}function $t(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function ft(t){return t.replace(/(^\/+|\/+$)/g,"")}function mt(t,e){return{route:t,score:t.default?0:$t(t.path).reduce((t,e)=>(t+=st,!function(t){return""===t}(e)?!function(t){return rt.test(t)}(e)?pt(e)?t-=st+it:t+=ct:t+=at:t+=ut,t),0),index:e}}function dt(t,e){let n,o;const[r]=e.split("?"),s=$t(r),c=""===s[0],a=function(t){return t.map(mt).sort((t,e)=>t.score<e.score?1:t.score>e.score?-1:t.index-e.index)}(t);for(let t=0,r=a.length;t<r;t++){const r=a[t].route;let i=!1;if(r.default){o={route:r,params:{},uri:e};continue}const u=$t(r.path),l={},p=Math.max(s.length,u.length);let $=0;for(;$<p;$++){const t=u[$],e=s[$];if(void 0!==t&&pt(t)){l["*"===t?"*":t.slice(1)]=s.slice($).map(decodeURIComponent).join("/");break}if(void 0===e){i=!0;break}let n=rt.exec(t);if(n&&!c){const t=decodeURIComponent(e);l[n[1]]=t}else if(t!==e){i=!0;break}}if(!i){n={route:r,params:l,uri:"/"+s.slice(0,$).join("/")};break}}return n||o||null}function ht(t,e){return t+(e?`?${e}`:"")}function vt(t,e){return`${ft("/"===e?t:`${ft(t)}/${ft(e)}`)}/`}function gt(t){var e;const n=t.$$slots.default,o=i(n,t,null);return{c(){o&&o.c()},l(t){o&&o.l(t)},m(t,n){o&&o.m(t,n),e=!0},p(t,e){o&&o.p&&t.$$scope&&o.p(l(n,e,t,null),u(n,e,null))},i(t){e||(B(o,t),e=!0)},o(t){K(o,t),e=!1},d(t){o&&o.d(t)}}}function bt(t,e,n){let o,r,s,{basepath:c="/",url:i=null}=e;const u=k(Z),l=k(tt),p=X([]);a(t,p,t=>{n("$routes",s=t)});const $=X(null);let f=!1;const m=u||X(i?{pathname:i}:nt.location);a(t,m,t=>{n("$location",r=t)});const d=l?l.routerBase:X({path:c,uri:c});a(t,d,t=>{n("$base",o=t)});const h=Y([d,$],([t,e])=>{if(null===e)return t;const{path:n}=t,{route:o,uri:r}=e;return{path:o.default?n:o.path.replace(/\*.*$/,""),uri:r}});var v;u||(v=()=>nt.listen(t=>{m.set(t.location)}),P().$$.on_mount.push(v),_(Z,m)),_(tt,{activeRoute:$,base:d,routerBase:h,registerRoute:function(t){const{path:e}=o;let{path:n}=t;if(t._path=n,t.path=vt(e,n),"undefined"==typeof window){if(f)return;const e=function(t,e){return dt([t],e)}(t,r.pathname);e&&($.set(e),f=!0)}else p.update(e=>(e.push(t),e))},unregisterRoute:function(t){p.update(e=>{const n=e.indexOf(t);return e.splice(n,1),e})}});let{$$slots:g={},$$scope:b}=e;return t.$set=t=>{"basepath"in t&&n("basepath",c=t.basepath),"url"in t&&n("url",i=t.url),"$$scope"in t&&n("$$scope",b=t.$$scope)},t.$$.update=(t={$base:1,$routes:1,$location:1})=>{if(t.$base){const{path:t}=o;p.update(e=>(e.forEach(e=>e.path=vt(t,e._path)),e))}if(t.$routes||t.$location){const t=dt(s,r.pathname);$.set(t)}},{basepath:c,url:i,routes:p,location:m,base:d,$$slots:g,$$scope:b}}class xt extends V{constructor(t){super(),Q(this,t,bt,gt,c,["basepath","url"])}}const yt=({routeParams:t,$location:e})=>({params:t,location:e}),wt=({routeParams:t,$location:e})=>({params:t,location:e});function Ct(t){var e,n,o,r,s=[Et,Pt],c=[];function a(t,e){return null!==e.component?0:1}return e=a(0,t),n=c[e]=s[e](t),{c(){n.c(),o=g()},m(t,n){c[e].m(t,n),f(t,o,n),r=!0},p(t,r){var i=e;(e=a(0,r))===i?c[e].p(t,r):(q(),K(c[i],1,1,()=>{c[i]=null}),U(),(n=c[e])||(n=c[e]=s[e](r)).c(),B(n,1),n.m(o.parentNode,o))},i(t){r||(B(n),r=!0)},o(t){K(n),r=!1},d(t){c[e].d(t),t&&m(o)}}}function Pt(t){var e;const n=t.$$slots.default,o=i(n,t,wt);return{c(){o&&o.c()},l(t){o&&o.l(t)},m(t,n){o&&o.m(t,n),e=!0},p(t,e){o&&o.p&&(t.$$scope||t.routeParams||t.$location)&&o.p(l(n,e,t,yt),u(n,e,wt))},i(t){e||(B(o,t),e=!0)},o(t){K(o,t),e=!1},d(t){o&&o.d(t)}}}function Et(t){var n,o,r=[{location:t.$location},t.routeParams,t.routeProps],s=t.component;function c(t){let n={};for(var o=0;o<r.length;o+=1)n=e(n,r[o]);return{props:n}}if(s)var a=new s(c());return{c(){a&&a.$$.fragment.c(),n=g()},m(t,e){a&&I(a,t,e),f(t,n,e),o=!0},p(t,e){var o=t.$location||t.routeParams||t.routeProps?G(r,[t.$location&&{location:e.$location},t.routeParams&&D(e.routeParams),t.routeProps&&D(e.routeProps)]):{};if(s!==(s=e.component)){if(a){q();const t=a;K(t.$$.fragment,1,0,()=>{F(t,1)}),U()}s?((a=new s(c())).$$.fragment.c(),B(a.$$.fragment,1),I(a,n.parentNode,n)):a=null}else s&&a.$set(o)},i(t){o||(a&&B(a.$$.fragment,t),o=!0)},o(t){a&&K(a.$$.fragment,t),o=!1},d(t){t&&m(n),a&&F(a,t)}}}function _t(t){var e,n,o=null!==t.$activeRoute&&t.$activeRoute.route===t.route&&Ct(t);return{c(){o&&o.c(),e=g()},m(t,r){o&&o.m(t,r),f(t,e,r),n=!0},p(t,n){null!==n.$activeRoute&&n.$activeRoute.route===n.route?o?(o.p(t,n),B(o,1)):((o=Ct(n)).c(),B(o,1),o.m(e.parentNode,e)):o&&(q(),K(o,1,1,()=>{o=null}),U())},i(t){n||(B(o),n=!0)},o(t){K(o),n=!1},d(t){o&&o.d(t),t&&m(e)}}}function kt(t,n,o){let r,s,{path:c="",component:i=null}=n;const{registerRoute:u,unregisterRoute:l,activeRoute:$}=k(tt);a(t,$,t=>{o("$activeRoute",r=t)});const f=k(Z);a(t,f,t=>{o("$location",s=t)});const m={path:c,default:""===c};let d={},h={};var v;u(m),"undefined"!=typeof window&&(v=()=>{l(m)},P().$$.on_destroy.push(v));let{$$slots:g={},$$scope:b}=n;return t.$set=t=>{o("$$props",n=e(e({},n),t)),"path"in t&&o("path",c=t.path),"component"in t&&o("component",i=t.component),"$$scope"in t&&o("$$scope",b=t.$$scope)},t.$$.update=(t={$activeRoute:1,$$props:1})=>{t.$activeRoute&&r&&r.route===m&&o("routeParams",d=r.params);{const{path:t,component:e,...r}=n;o("routeProps",h=r)}},{path:c,component:i,activeRoute:$,location:f,route:m,routeParams:d,routeProps:h,$activeRoute:r,$location:s,$$props:n=p(n),$$slots:g,$$scope:b}}class Lt extends V{constructor(t){super(),Q(this,t,kt,_t,c,["path","component"])}}function Rt(t){var n,o,r;const s=t.$$slots.default,c=i(s,t,null);for(var a=[{href:t.href},{"aria-current":t.ariaCurrent},t.props],p={},$=0;$<a.length;$+=1)p=e(p,a[$]);return{c(){n=d("a"),c&&c.c(),y(n,p),r=b(n,"click",t.onClick)},l(t){c&&c.l(a_nodes)},m(t,e){f(t,n,e),c&&c.m(n,null),o=!0},p(t,e){c&&c.p&&t.$$scope&&c.p(l(s,e,t,null),u(s,e,null)),y(n,G(a,[t.href&&{href:e.href},t.ariaCurrent&&{"aria-current":e.ariaCurrent},t.props&&e.props]))},i(t){o||(B(c,t),o=!0)},o(t){K(c,t),o=!1},d(t){t&&m(n),c&&c.d(t),r()}}}function zt(t,e,n){let o,r,{to:s="#",replace:c=!1,state:i={},getProps:u=(()=>({}))}=e;const{base:l}=k(tt);a(t,l,t=>{n("$base",o=t)});const p=k(Z);a(t,p,t=>{n("$location",r=t)});const $=E();let f,m,d,h;let v,{$$slots:g={},$$scope:b}=e;return t.$set=t=>{"to"in t&&n("to",s=t.to),"replace"in t&&n("replace",c=t.replace),"state"in t&&n("state",i=t.state),"getProps"in t&&n("getProps",u=t.getProps),"$$scope"in t&&n("$$scope",b=t.$$scope)},t.$$.update=(t={to:1,$base:1,$location:1,href:1,isCurrent:1,getProps:1,isPartiallyCurrent:1})=>{(t.to||t.$base)&&n("href",f="/"===s?o.uri:function(t,e){if(lt(t,"/"))return t;const[n,o]=t.split("?"),[r]=e.split("?"),s=$t(n),c=$t(r);if(""===s[0])return ht(r,o);if(!lt(s[0],".")){return ht(("/"===r?"":"/")+c.concat(s).join("/"),o)}const a=c.concat(s),i=[];return a.forEach(t=>{".."===t?i.pop():"."!==t&&i.push(t)}),ht("/"+i.join("/"),o)}(s,o.uri)),(t.$location||t.href)&&n("isPartiallyCurrent",m=lt(r.pathname,f)),(t.href||t.$location)&&n("isCurrent",d=f===r.pathname),t.isCurrent&&n("ariaCurrent",v=d?"page":void 0),(t.getProps||t.$location||t.href||t.isPartiallyCurrent||t.isCurrent)&&n("props",h=u({location:r,href:f,isPartiallyCurrent:m,isCurrent:d}))},{to:s,replace:c,state:i,getProps:u,base:l,location:p,href:f,props:h,onClick:function(t){if($("click",t),function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)){t.preventDefault();const e=r.pathname===f||c;ot(f,{state:i,replace:e})}},ariaCurrent:v,$$slots:g,$$scope:b}}class St extends V{constructor(t){super(),Q(this,t,zt,Rt,c,["to","replace","state","getProps"])}}function jt(t){var e;return{c(){(e=d("span")).textContent="Logo Lether",x(e,"class","log-style svelte-hozmg8")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function At(t){var e;return{c(){(e=d("li")).textContent="Home",x(e,"class","list-items-nav svelte-hozmg8")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function Ot(t){var e;return{c(){(e=d("li")).textContent="Shop",x(e,"class","list-items-nav svelte-hozmg8")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function Tt(t){var e;return{c(){(e=d("li")).textContent="About",x(e,"class","list-items-nav svelte-hozmg8")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function Ht(t){var e,n,o,r,s,c=new St({props:{to:"/",$$slots:{default:[Mt]},$$scope:{ctx:t}}}),a=new St({props:{to:"/shop",$$slots:{default:[Nt]},$$scope:{ctx:t}}}),i=new St({props:{to:"/about",$$slots:{default:[qt]},$$scope:{ctx:t}}});return{c(){e=d("div"),n=d("ul"),c.$$.fragment.c(),o=v(),a.$$.fragment.c(),r=v(),i.$$.fragment.c(),x(n,"class","list-nav-mob svelte-hozmg8"),x(e,"id","attentionGrabber"),x(e,"class","svelte-hozmg8")},m(t,u){f(t,e,u),$(e,n),I(c,n,null),$(n,o),I(a,n,null),$(n,r),I(i,n,null),s=!0},i(t){s||(B(c.$$.fragment,t),B(a.$$.fragment,t),B(i.$$.fragment,t),s=!0)},o(t){K(c.$$.fragment,t),K(a.$$.fragment,t),K(i.$$.fragment,t),s=!1},d(t){t&&m(e),F(c),F(a),F(i)}}}function Mt(t){var e;return{c(){(e=d("li")).textContent="Home",x(e,"class","list-items-nav svelte-hozmg8")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function Nt(t){var e;return{c(){(e=d("li")).textContent="Shop",x(e,"class","list-items-nav svelte-hozmg8")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function qt(t){var e;return{c(){(e=d("li")).textContent="About",x(e,"class","list-items-nav svelte-hozmg8")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function Ut(t){var e,n,o,r,s,c,a,i,u,l,p,h,g,y,w,C,P=new St({props:{to:"/",$$slots:{default:[jt]},$$scope:{ctx:t}}}),E=new St({props:{to:"/",$$slots:{default:[At]},$$scope:{ctx:t}}}),_=new St({props:{to:"/shop",$$slots:{default:[Ot]},$$scope:{ctx:t}}}),k=new St({props:{to:"/about",$$slots:{default:[Tt]},$$scope:{ctx:t}}}),L=t.mobilmenuon.on&&Ht(t);return{c(){e=d("nav"),n=d("div"),o=d("div"),r=d("div"),P.$$.fragment.c(),s=v(),c=d("div"),a=d("ul"),E.$$.fragment.c(),i=v(),_.$$.fragment.c(),u=v(),k.$$.fragment.c(),l=v(),(p=d("button")).innerHTML='<i class="material-icons">shopping_cart</i>',h=v(),(g=d("button")).innerHTML='<i class="material-icons">menu</i>',y=v(),L&&L.c(),x(p,"class","show-shopping-cart button-mob svelte-hozmg8"),x(g,"class","mobile-button button-mob svelte-hozmg8"),x(a,"class","list-nav hiden-mob svelte-hozmg8"),x(o,"class","nav-header svelte-hozmg8"),x(n,"class","flex-container svelte-hozmg8"),x(e,"class","svelte-hozmg8"),C=b(g,"click",t.openmobmenu)},m(t,m){f(t,e,m),$(e,n),$(n,o),$(o,r),I(P,r,null),$(o,s),$(o,c),$(c,a),I(E,a,null),$(a,i),I(_,a,null),$(a,u),I(k,a,null),$(a,l),$(a,p),$(a,h),$(a,g),$(n,y),L&&L.m(n,null),w=!0},p(t,e){var o={};t.$$scope&&(o.$$scope={changed:t,ctx:e}),P.$set(o);var r={};t.$$scope&&(r.$$scope={changed:t,ctx:e}),E.$set(r);var s={};t.$$scope&&(s.$$scope={changed:t,ctx:e}),_.$set(s);var c={};t.$$scope&&(c.$$scope={changed:t,ctx:e}),k.$set(c),e.mobilmenuon.on?L?B(L,1):((L=Ht(e)).c(),B(L,1),L.m(n,null)):L&&(q(),K(L,1,1,()=>{L=null}),U())},i(t){w||(B(P.$$.fragment,t),B(E.$$.fragment,t),B(_.$$.fragment,t),B(k.$$.fragment,t),B(L),w=!0)},o(t){K(P.$$.fragment,t),K(E.$$.fragment,t),K(_.$$.fragment,t),K(k.$$.fragment,t),K(L),w=!1},d(t){t&&m(e),F(P),F(E),F(_),F(k),L&&L.d(),C()}}}function Bt(t,e,n){let o={on:!1};return{mobilmenuon:o,openmobmenu:function(){n("mobilmenuon",o.on=!o.on,o)}}}class Kt extends V{constructor(t){super(),Q(this,t,Bt,Ut,c,[])}}function Gt(e){var n;return{c(){(n=d("h2")).textContent="Test"},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class Dt extends V{constructor(t){super(),Q(this,t,null,Gt,c,[])}}function It(e){var n;return{c(){(n=d("div")).innerHTML='<div class="footer-flexbox svelte-1awy8ux"><div class="footer-col svelte-1awy8ux"><h2>New info about shopitems</h2> <div class="form-style-subscribe svelte-1awy8ux"><form><label for="emailsub">E-mail</label> <input type="email" id="emailsub" name="emailsub" class="svelte-1awy8ux"> <button type="submit" class="submit-btn svelte-1awy8ux">Subscribe</button></form></div></div> <div class="footer-col svelte-1awy8ux"><h2>Contact info</h2> <div class="form-style-subscribe svelte-1awy8ux"><ul><li>email</li> <li>phone</li> <li>address</li></ul> <div class="media-links svelte-1awy8ux"><div class="media-col svelte-1awy8ux"><img src="https://img.icons8.com/material/48/000000/facebook-circled.png"></div> <div class="media-col svelte-1awy8ux"><img src="https://img.icons8.com/material/48/000000/instagram.png"></div></div></div></div></div>',x(n,"class","container")},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class Ft extends V{constructor(t){super(),Q(this,t,null,It,c,[])}}function Jt(e){var n,o,r,s,c,a,i,u,l=new Ft({});return{c(){n=d("div"),(o=d("div")).innerHTML="<h2>Text center</h2> <button>Go to shop</button>",r=v(),s=d("img"),c=v(),(a=d("div")).innerHTML='<div class="home-flexbox svelte-1voolht"><div class="home-col svelte-1voolht"><h2>Leather belt</h2> <p>\n\t\t\t                Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n\t\t\t                 Ullam accusamus sint provident, nemo nesciunt perferendis \n\t\t\t                 rerum unde aspernatur excepturi culpa. \n\t\t\t                Eos iste ea dolor officiis, nisi similique quas error nobis?\n\t\t\t            </p></div> <div class="home-col svelte-1voolht"><h2>Leather accesore</h2> <p>\n\t\t\t                Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n\t\t\t                 Ullam accusamus sint provident, nemo nesciunt perferendis \n\t\t\t                 rerum unde aspernatur excepturi culpa. \n\t\t\t                Eos iste ea dolor officiis, nisi similique quas error nobis?\n\t\t\t            </p></div></div>',i=v(),l.$$.fragment.c(),x(o,"class","home-center-preview svelte-1voolht"),x(s,"class","home-img svelte-1voolht"),x(s,"src",Qt),x(s,"alt","background image"),x(n,"class","container-home svelte-1voolht"),x(a,"class","container")},m(t,e){f(t,n,e),$(n,o),$(n,r),$(n,s),f(t,c,e),f(t,a,e),f(t,i,e),I(l,t,e),u=!0},p:t,i(t){u||(B(l.$$.fragment,t),u=!0)},o(t){K(l.$$.fragment,t),u=!1},d(t){t&&(m(n),m(c),m(a),m(i)),F(l,t)}}}let Qt="static/mainhomebg.jpg";class Vt extends V{constructor(t){super(),Q(this,t,null,Jt,c,[])}}function Wt(t,e,n){const o=Object.create(t);return o.name=e[n].name,o.i=n,o}function Xt(e){var n,o,r,s,c=e.name+"";return{c(){n=d("div"),o=d("h2"),r=h(c),s=v(),x(n,"class","shop-col svelte-1pswdr7")},m(t,e){f(t,n,e),$(n,o),$(o,r),$(n,s)},p:t,d(t){t&&m(n)}}}function Yt(e){var n,o;let r=e.itemname,s=[];for(let t=0;t<r.length;t+=1)s[t]=Xt(Wt(e,r,t));return{c(){n=d("div"),o=d("div");for(let t=0;t<s.length;t+=1)s[t].c();x(o,"class","shoplist-container svelte-1pswdr7"),x(n,"class","container")},m(t,e){f(t,n,e),$(n,o);for(let t=0;t<s.length;t+=1)s[t].m(o,null)},p(t,e){if(t.itemname){let n;for(r=e.itemname,n=0;n<r.length;n+=1){const c=Wt(e,r,n);s[n]?s[n].p(t,c):(s[n]=Xt(c),s[n].c(),s[n].m(o,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=r.length}},i:t,o:t,d(t){t&&m(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(s,t)}}}function Zt(t){return{itemname:[{name:"Orange"},{name:"Apple"},{name:"Ananas"},{name:"Olive"},{name:"Cool"},{name:"Glace"}]}}class te extends V{constructor(t){super(),Q(this,t,Zt,Yt,c,[])}}function ee(e){var n,o=new te({});return{c(){o.$$.fragment.c()},m(t,e){I(o,t,e),n=!0},p:t,i(t){n||(B(o.$$.fragment,t),n=!0)},o(t){K(o.$$.fragment,t),n=!1},d(t){F(o,t)}}}class ne extends V{constructor(t){super(),Q(this,t,null,ee,c,[])}}function oe(e){var n,o,r,s,c,a=new Kt({}),i=new Lt({props:{path:"/",component:Vt}}),u=new Lt({props:{path:"/about",component:Dt}}),l=new Lt({props:{path:"/shop",component:ne}});return{c(){a.$$.fragment.c(),n=v(),o=d("div"),i.$$.fragment.c(),r=v(),u.$$.fragment.c(),s=v(),l.$$.fragment.c()},m(t,e){I(a,t,e),f(t,n,e),f(t,o,e),I(i,o,null),$(o,r),I(u,o,null),$(o,s),I(l,o,null),c=!0},p:t,i(t){c||(B(a.$$.fragment,t),B(i.$$.fragment,t),B(u.$$.fragment,t),B(l.$$.fragment,t),c=!0)},o(t){K(a.$$.fragment,t),K(i.$$.fragment,t),K(u.$$.fragment,t),K(l.$$.fragment,t),c=!1},d(t){F(a,t),t&&(m(n),m(o)),F(i),F(u),F(l)}}}function re(t){var e,n=new xt({props:{$$slots:{default:[oe]},$$scope:{ctx:t}}});return{c(){n.$$.fragment.c()},m(t,o){I(n,t,o),e=!0},p(t,e){var o={};t.$$scope&&(o.$$scope={changed:t,ctx:e}),n.$set(o)},i(t){e||(B(n.$$.fragment,t),e=!0)},o(t){K(n.$$.fragment,t),e=!1},d(t){F(n,t)}}}return new class extends V{constructor(t){super(),Q(this,t,null,re,c,[])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
