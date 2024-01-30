var __extends=this&&this.__extends||function(){var e=function(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n))e[n]=t[n]};return e(t,n)};return function(t,n){if(typeof n!=="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();var __awaiter=this&&this.__awaiter||function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{l(r.next(e))}catch(t){o(t)}}function i(e){try{l(r["throw"](e))}catch(t){o(t)}}function l(e){e.done?n(e.value):a(e.value).then(s,i)}l((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,a,o,s;return s={next:i(0),throw:i(1),return:i(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function i(e){return function(t){return l([e,t])}}function l(i){if(r)throw new TypeError("Generator is already executing.");while(s&&(s=0,i[0]&&(n=0)),n)try{if(r=1,a&&(o=i[0]&2?a["return"]:i[0]?a["throw"]||((o=a["return"])&&o.call(a),0):a.next)&&!(o=o.call(a,i[1])).done)return o;if(a=0,o)i=[i[0]&2,o.value];switch(i[0]){case 0:case 1:o=i;break;case 4:n.label++;return{value:i[1],done:false};case 5:n.label++;a=i[1];i=[0];continue;case 7:i=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(i[0]===6||i[0]===2)){n=0;continue}if(i[0]===3&&(!o||i[1]>o[0]&&i[1]<o[3])){n.label=i[1];break}if(i[0]===6&&n.label<o[1]){n.label=o[1];o=i;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(i);break}if(o[2])n.ops.pop();n.trys.pop();continue}i=t.call(e,n)}catch(l){i=[6,l];a=0}finally{r=o=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,o;r<a;r++){if(o||!(r in t)){if(!o)o=Array.prototype.slice.call(t,0,r);o[r]=t[r]}}return e.concat(o||Array.prototype.slice.call(t))};var NAMESPACE="my-stencil-project";var scopeId;var contentRef;var hostTagName;var useNativeShadowDom=false;var checkSlotFallbackVisibility=false;var checkSlotRelocate=false;var isSvgMode=false;var queuePending=false;var createTime=function(e,t){if(t===void 0){t=""}{return function(){return}}};var uniqueTime=function(e,t){{return function(){return}}};var HYDRATED_CSS="{visibility:hidden}.hydrated{visibility:inherit}";var EMPTY_OBJ={};var isDef=function(e){return e!=null};var isComplexType=function(e){e=typeof e;return e==="object"||e==="function"};function queryNonceMetaTagContent(e){var t,n,r;return(r=(n=(t=e.head)===null||t===void 0?void 0:t.querySelector('meta[name="csp-nonce"]'))===null||n===void 0?void 0:n.getAttribute("content"))!==null&&r!==void 0?r:undefined}var h=function(e,t){var n=[];for(var r=2;r<arguments.length;r++){n[r-2]=arguments[r]}var a=null;var o=null;var s=false;var i=false;var l=[];var c=function(t){for(var n=0;n<t.length;n++){a=t[n];if(Array.isArray(a)){c(a)}else if(a!=null&&typeof a!=="boolean"){if(s=typeof e!=="function"&&!isComplexType(a)){a=String(a)}if(s&&i){l[l.length-1].$text$+=a}else{l.push(s?newVNode(null,a):a)}i=s}}};c(n);if(t){if(t.name){o=t.name}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}var f=newVNode(e,null);f.$attrs$=t;if(l.length>0){f.$children$=l}{f.$name$=o}return f};var newVNode=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{n.$attrs$=null}{n.$name$=null}return n};var Host={};var isHost=function(e){return e&&e.$tag$===Host};var computeMode=function(e){return modeResolutionChain.map((function(t){return t(e)})).find((function(e){return!!e}))};var setMode=function(e){return modeResolutionChain.push(e)};var parsePropertyValue=function(e,t){if(e!=null&&!isComplexType(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&1){return String(e)}return e}return e};var getElement=function(e){return getHostRef(e).$hostElement$};var emitEvent=function(e,t,n){var r=plt.ce(t,n);e.dispatchEvent(r);return r};var rootAppliedStyles=new WeakMap;var registerStyle=function(e,t,n){var r=styles.get(e);if(supportsConstructableStylesheets&&n){r=r||new CSSStyleSheet;if(typeof r==="string"){r=t}else{r.replaceSync(t)}}else{r=t}styles.set(e,r)};var addStyle=function(e,t,n,r){var a;var o=getScopeId(t,n);var s=styles.get(o);e=e.nodeType===11?e:doc;if(s){if(typeof s==="string"){e=e.head||e;var i=rootAppliedStyles.get(e);var l=void 0;if(!i){rootAppliedStyles.set(e,i=new Set)}if(!i.has(o)){{if(plt.$cssShim$){l=plt.$cssShim$.createHostStyle(r,o,s,!!(t.$flags$&10));var c=l["s-sc"];if(c){o=c;i=null}}else{l=doc.createElement("style");l.innerHTML=s}var u=(a=plt.$nonce$)!==null&&a!==void 0?a:queryNonceMetaTagContent(doc);if(u!=null){l.setAttribute("nonce",u)}e.insertBefore(l,e.querySelector("link"))}if(i){i.add(o)}}}else if(!e.adoptedStyleSheets.includes(s)){e.adoptedStyleSheets=__spreadArray(__spreadArray([],e.adoptedStyleSheets,true),[s],false)}}return o};var attachStyles=function(e){var t=e.$cmpMeta$;var n=e.$hostElement$;var r=t.$flags$;var a=createTime("attachStyles",t.$tagName$);var o=addStyle(supportsShadow&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.$modeName$,n);if(r&10){n["s-sc"]=o;n.classList.add(o+"-h")}a()};var getScopeId=function(e,t){return"sc-"+(t&&e.$flags$&32?e.$tagName$+"-"+t:e.$tagName$)};var setAccessor=function(e,t,n,r,a,o){if(n!==r){var s=isMemberInElement(e,t);var i=t.toLowerCase();if(t==="class"){var l=e.classList;var c=parseClassList(n);var u=parseClassList(r);l.remove.apply(l,c.filter((function(e){return e&&!u.includes(e)})));l.add.apply(l,u.filter((function(e){return e&&!c.includes(e)})))}else if(t==="ref"){if(r){r(e)}}else if(!s&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(isMemberInElement(win,i)){t=i.slice(2)}else{t=i[2]+t.slice(3)}if(n){plt.rel(e,t,n,false)}if(r){plt.ael(e,t,r,false)}}else{var f=isComplexType(r);if((s||f&&r!==null)&&!a){try{if(!e.tagName.includes("-")){var $=r==null?"":r;if(t==="list"){s=false}else if(n==null||e[t]!=$){e[t]=$}}else{e[t]=r}}catch(d){}}if(r==null||r===false){if(r!==false||e.getAttribute(t)===""){{e.removeAttribute(t)}}}else if((!s||o&4||a)&&!f){r=r===true?"":r;{e.setAttribute(t,r)}}}}};var parseClassListRegex=/\s/;var parseClassList=function(e){return!e?[]:e.split(parseClassListRegex)};var updateElement=function(e,t,n,r){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var o=e&&e.$attrs$||EMPTY_OBJ;var s=t.$attrs$||EMPTY_OBJ;{for(r in o){if(!(r in s)){setAccessor(a,r,o[r],undefined,n,t.$flags$)}}}for(r in s){setAccessor(a,r,o[r],s[r],n,t.$flags$)}};var createElm=function(e,t,n,r){var a=t.$children$[n];var o=0;var s;var i;var l;if(!useNativeShadowDom){checkSlotRelocate=true;if(a.$tag$==="slot"){if(scopeId){r.classList.add(scopeId+"-s")}a.$flags$|=a.$children$?2:1}}if(a.$text$!==null){s=a.$elm$=doc.createTextNode(a.$text$)}else if(a.$flags$&1){s=a.$elm$=doc.createTextNode("")}else{s=a.$elm$=doc.createElement(a.$flags$&2?"slot-fb":a.$tag$);{updateElement(null,a,isSvgMode)}if(isDef(scopeId)&&s["s-si"]!==scopeId){s.classList.add(s["s-si"]=scopeId)}if(a.$children$){for(o=0;o<a.$children$.length;++o){i=createElm(e,a,o,s);if(i){s.appendChild(i)}}}}{s["s-hn"]=hostTagName;if(a.$flags$&(2|1)){s["s-sr"]=true;s["s-cr"]=contentRef;s["s-sn"]=a.$name$||"";l=e&&e.$children$&&e.$children$[n];if(l&&l.$tag$===a.$tag$&&e.$elm$){putBackInOriginalLocation(e.$elm$,false)}}}return s};var putBackInOriginalLocation=function(e,t){plt.$flags$|=1;var n=e.childNodes;for(var r=n.length-1;r>=0;r--){var a=n[r];if(a["s-hn"]!==hostTagName&&a["s-ol"]){parentReferenceNode(a).insertBefore(a,referenceNode(a));a["s-ol"].remove();a["s-ol"]=undefined;checkSlotRelocate=true}if(t){putBackInOriginalLocation(a,t)}}plt.$flags$&=~1};var addVnodes=function(e,t,n,r,a,o){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var i;if(s.shadowRoot&&s.tagName===hostTagName){s=s.shadowRoot}for(;a<=o;++a){if(r[a]){i=createElm(null,n,a,e);if(i){r[a].$elm$=i;s.insertBefore(i,referenceNode(t))}}}};var removeVnodes=function(e,t,n){for(var r=t;r<=n;++r){var a=e[r];if(a){var o=a.$elm$;nullifyVNodeRefs(a);if(o){{checkSlotFallbackVisibility=true;if(o["s-ol"]){o["s-ol"].remove()}else{putBackInOriginalLocation(o,true)}}o.remove()}}}};var updateChildren=function(e,t,n,r){var a=0;var o=0;var s=t.length-1;var i=t[0];var l=t[s];var c=r.length-1;var u=r[0];var f=r[c];var $;while(a<=s&&o<=c){if(i==null){i=t[++a]}else if(l==null){l=t[--s]}else if(u==null){u=r[++o]}else if(f==null){f=r[--c]}else if(isSameVnode(i,u)){patch(i,u);i=t[++a];u=r[++o]}else if(isSameVnode(l,f)){patch(l,f);l=t[--s];f=r[--c]}else if(isSameVnode(i,f)){if(i.$tag$==="slot"||f.$tag$==="slot"){putBackInOriginalLocation(i.$elm$.parentNode,false)}patch(i,f);e.insertBefore(i.$elm$,l.$elm$.nextSibling);i=t[++a];f=r[--c]}else if(isSameVnode(l,u)){if(i.$tag$==="slot"||f.$tag$==="slot"){putBackInOriginalLocation(l.$elm$.parentNode,false)}patch(l,u);e.insertBefore(l.$elm$,i.$elm$);l=t[--s];u=r[++o]}else{{$=createElm(t&&t[o],n,o,e);u=r[++o]}if($){{parentReferenceNode(i.$elm$).insertBefore($,referenceNode(i.$elm$))}}}}if(a>s){addVnodes(e,r[c+1]==null?null:r[c+1].$elm$,n,r,o,c)}else if(o>c){removeVnodes(t,a,s)}};var isSameVnode=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}return true}return false};var referenceNode=function(e){return e&&e["s-ol"]||e};var parentReferenceNode=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var patch=function(e,t){var n=t.$elm$=e.$elm$;var r=e.$children$;var a=t.$children$;var o=t.$tag$;var s=t.$text$;var i;if(s===null){{if(o==="slot");else{updateElement(e,t,isSvgMode)}}if(r!==null&&a!==null){updateChildren(n,r,t,a)}else if(a!==null){if(e.$text$!==null){n.textContent=""}addVnodes(n,null,t,a,0,a.length-1)}else if(r!==null){removeVnodes(r,0,r.length-1)}}else if(i=n["s-cr"]){i.parentNode.textContent=s}else if(e.$text$!==s){n.data=s}};var updateFallbackSlotVisibility=function(e){var t=e.childNodes;var n;var r;var a;var o;var s;var i;for(r=0,a=t.length;r<a;r++){n=t[r];if(n.nodeType===1){if(n["s-sr"]){s=n["s-sn"];n.hidden=false;for(o=0;o<a;o++){i=t[o].nodeType;if(t[o]["s-hn"]!==n["s-hn"]||s!==""){if(i===1&&s===t[o].getAttribute("slot")){n.hidden=true;break}}else{if(i===1||i===3&&t[o].textContent.trim()!==""){n.hidden=true;break}}}}updateFallbackSlotVisibility(n)}}};var relocateNodes=[];var relocateSlotContent=function(e){var t;var n;var r;var a;var o;var s;var i=0;var l=e.childNodes;var c=l.length;for(;i<c;i++){t=l[i];if(t["s-sr"]&&(n=t["s-cr"])&&n.parentNode){r=n.parentNode.childNodes;a=t["s-sn"];for(s=r.length-1;s>=0;s--){n=r[s];if(!n["s-cn"]&&!n["s-nr"]&&n["s-hn"]!==t["s-hn"]){if(isNodeLocatedInSlot(n,a)){o=relocateNodes.find((function(e){return e.$nodeToRelocate$===n}));checkSlotFallbackVisibility=true;n["s-sn"]=n["s-sn"]||a;if(o){o.$slotRefNode$=t}else{relocateNodes.push({$slotRefNode$:t,$nodeToRelocate$:n})}if(n["s-sr"]){relocateNodes.map((function(e){if(isNodeLocatedInSlot(e.$nodeToRelocate$,n["s-sn"])){o=relocateNodes.find((function(e){return e.$nodeToRelocate$===n}));if(o&&!e.$slotRefNode$){e.$slotRefNode$=o.$slotRefNode$}}}))}}else if(!relocateNodes.some((function(e){return e.$nodeToRelocate$===n}))){relocateNodes.push({$nodeToRelocate$:n})}}}}if(t.nodeType===1){relocateSlotContent(t)}}};var isNodeLocatedInSlot=function(e,t){if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};var nullifyVNodeRefs=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(nullifyVNodeRefs)}};var renderVdom=function(e,t){var n=e.$hostElement$;var r=e.$cmpMeta$;var a=e.$vnode$||newVNode(null,null);var o=isHost(t)?t:h(null,null,t);hostTagName=n.tagName;if(r.$attrsToReflect$){o.$attrs$=o.$attrs$||{};r.$attrsToReflect$.map((function(e){var t=e[0],r=e[1];return o.$attrs$[r]=n[t]}))}o.$tag$=null;o.$flags$|=4;e.$vnode$=o;o.$elm$=a.$elm$=n.shadowRoot||n;{scopeId=n["s-sc"]}{contentRef=n["s-cr"];useNativeShadowDom=supportsShadow&&(r.$flags$&1)!==0;checkSlotFallbackVisibility=false}patch(a,o);{plt.$flags$|=1;if(checkSlotRelocate){relocateSlotContent(o.$elm$);var s=void 0;var i=void 0;var l=void 0;var c=void 0;var u=void 0;var f=void 0;var $=0;for(;$<relocateNodes.length;$++){s=relocateNodes[$];i=s.$nodeToRelocate$;if(!i["s-ol"]){l=doc.createTextNode("");l["s-nr"]=i;i.parentNode.insertBefore(i["s-ol"]=l,i)}}for($=0;$<relocateNodes.length;$++){s=relocateNodes[$];i=s.$nodeToRelocate$;if(s.$slotRefNode$){c=s.$slotRefNode$.parentNode;u=s.$slotRefNode$.nextSibling;l=i["s-ol"];while(l=l.previousSibling){f=l["s-nr"];if(f&&f["s-sn"]===i["s-sn"]&&c===f.parentNode){f=f.nextSibling;if(!f||!f["s-nr"]){u=f;break}}}if(!u&&c!==i.parentNode||i.nextSibling!==u){if(i!==u){if(!i["s-hn"]&&i["s-ol"]){i["s-hn"]=i["s-ol"].parentNode.nodeName}c.insertBefore(i,u)}}}else{if(i.nodeType===1){i.hidden=true}}}}if(checkSlotFallbackVisibility){updateFallbackSlotVisibility(o.$elm$)}plt.$flags$&=~1;relocateNodes.length=0}};var attachToAncestor=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var scheduleUpdate=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}attachToAncestor(e,e.$ancestorComponent$);var n=function(){return dispatchHooks(e,t)};return writeTask(n)};var dispatchHooks=function(e,t){var n=createTime("scheduleUpdate",e.$cmpMeta$.$tagName$);var r=e.$lazyInstance$;var a;if(t){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var t=e[0],n=e[1];return safeCall(r,t,n)}));e.$queuedListeners$=undefined}}{a=safeCall(r,"componentWillLoad")}}n();return enqueue(a,(function(){return updateComponent(e,r,t)}))};var enqueue=function(e,t){return isPromisey(e)?e.then(t):t()};var isPromisey=function(e){return e instanceof Promise||e&&e.then&&typeof e.then==="function"};var updateComponent=function(e,t,n){return __awaiter(void 0,void 0,void 0,(function(){var r,a,o,s,i,l,c;return __generator(this,(function(u){a=e.$hostElement$;o=createTime("update",e.$cmpMeta$.$tagName$);s=a["s-rc"];if(n){attachStyles(e)}i=createTime("render",e.$cmpMeta$.$tagName$);{callRender(e,t)}if(plt.$cssShim$){plt.$cssShim$.updateHost(a)}if(s){s.map((function(e){return e()}));a["s-rc"]=undefined}i();o();{l=(r=a["s-p"])!==null&&r!==void 0?r:[];c=function(){return postUpdateComponent(e)};if(l.length===0){c()}else{Promise.all(l).then(c);e.$flags$|=4;l.length=0}}return[2]}))}))};var callRender=function(e,t,n){try{t=t.render();{e.$flags$&=~16}{e.$flags$|=2}{{{renderVdom(e,t)}}}}catch(r){consoleError(r,e.$hostElement$)}return null};var postUpdateComponent=function(e){var t=e.$cmpMeta$.$tagName$;var n=e.$hostElement$;var r=createTime("postUpdate",t);var a=e.$lazyInstance$;var o=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{addHydratedFlag(n)}{safeCall(a,"componentDidLoad")}r();{e.$onReadyResolve$(n);if(!o){appDidLoad()}}}else{r()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){nextTick((function(){return scheduleUpdate(e,false)}))}e.$flags$&=~(4|512)}};var appDidLoad=function(e){{addHydratedFlag(doc.documentElement)}nextTick((function(){return emitEvent(win,"appload",{detail:{namespace:NAMESPACE}})}))};var safeCall=function(e,t,n){if(e&&e[t]){try{return e[t](n)}catch(r){consoleError(r)}}return undefined};var addHydratedFlag=function(e){return e.classList.add("hydrated")};var getValue=function(e,t){return getHostRef(e).$instanceValues$.get(t)};var setValue=function(e,t,n,r){var a=getHostRef(e);var o=a.$hostElement$;var s=a.$instanceValues$.get(t);var i=a.$flags$;var l=a.$lazyInstance$;n=parsePropertyValue(n,r.$members$[t][0]);var c=Number.isNaN(s)&&Number.isNaN(n);var u=n!==s&&!c;if((!(i&8)||s===undefined)&&u){a.$instanceValues$.set(t,n);if(l){if(r.$watchers$&&i&128){var f=r.$watchers$[t];if(f){f.map((function(e){try{l[e](n,s,t)}catch(r){consoleError(r,o)}}))}}if((i&(2|16))===2){scheduleUpdate(a,false)}}}};var proxyComponent=function(e,t,n){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var r=Object.entries(t.$members$);var a=e.prototype;r.map((function(e){var r=e[0],o=e[1][0];if(o&31||n&2&&o&32){Object.defineProperty(a,r,{get:function(){return getValue(this,r)},set:function(e){setValue(this,r,e,t)},configurable:true,enumerable:true})}}));if(n&1){var o=new Map;a.attributeChangedCallback=function(e,t,n){var r=this;plt.jmp((function(){var t=o.get(e);if(r.hasOwnProperty(t)){n=r[t];delete r[t]}else if(a.hasOwnProperty(t)&&typeof r[t]==="number"&&r[t]==n){return}r[t]=n===null&&typeof r[t]==="boolean"?false:n}))};e.observedAttributes=r.filter((function(e){var t=e[0],n=e[1];return n[0]&15})).map((function(e){var n=e[0],r=e[1];var a=r[1]||n;o.set(a,n);if(r[0]&512){t.$attrsToReflect$.push([n,a])}return a}))}}return e};var initializeComponent=function(e,t,n,r,a){return __awaiter(void 0,void 0,void 0,(function(){var r,o,s,i,l,c,u;return __generator(this,(function(f){switch(f.label){case 0:if(!((t.$flags$&32)===0))return[3,5];t.$flags$|=32;a=loadModule(n);if(!a.then)return[3,2];r=uniqueTime();return[4,a];case 1:a=f.sent();r();f.label=2;case 2:if(!a.isProxied){{n.$watchers$=a.watchers}proxyComponent(a,n,2);a.isProxied=true}o=createTime("createInstance",n.$tagName$);{t.$flags$|=8}try{new a(t)}catch($){consoleError($)}{t.$flags$&=~8}{t.$flags$|=128}o();if(!a.style)return[3,5];s=a.style;if(typeof s!=="string"){s=s[t.$modeName$=computeMode(e)]}i=getScopeId(n,t.$modeName$);if(!!styles.has(i))return[3,5];l=createTime("registerStyles",n.$tagName$);if(!(n.$flags$&8))return[3,4];return[4,import("./shadow-css-af2290df.js").then((function(e){return e.scopeCss(s,i,false)}))];case 3:s=f.sent();f.label=4;case 4:registerStyle(i,s,!!(n.$flags$&1));l();f.label=5;case 5:c=t.$ancestorComponent$;u=function(){return scheduleUpdate(t,true)};if(c&&c["s-rc"]){c["s-rc"].push(u)}else{u()}return[2]}}))}))};var connectedCallback=function(e){if((plt.$flags$&1)===0){var t=getHostRef(e);var n=t.$cmpMeta$;var r=createTime("connectedCallback",n.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;{if(n.$flags$&(4|8)){setContentReference(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){attachToAncestor(t,t.$ancestorComponent$=a);break}}}if(n.$members$){Object.entries(n.$members$).map((function(t){var n=t[0],r=t[1][0];if(r&31&&e.hasOwnProperty(n)){var a=e[n];delete e[n];e[n]=a}}))}{initializeComponent(e,t,n)}}else{addHostEventListeners(e,t,n.$listeners$)}r()}};var setContentReference=function(e){var t=e["s-cr"]=doc.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var disconnectedCallback=function(e){if((plt.$flags$&1)===0){var t=getHostRef(e);{if(t.$rmListeners$){t.$rmListeners$.map((function(e){return e()}));t.$rmListeners$=undefined}}if(plt.$cssShim$){plt.$cssShim$.removeHost(e)}}};var patchChildSlotNodes=function(e,t){var n=function(e){__extends(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}t.prototype.item=function(e){return this[e]};return t}(Array);if(t.$flags$&8){var r=e.__lookupGetter__("childNodes");Object.defineProperty(e,"children",{get:function(){return this.childNodes.map((function(e){return e.nodeType===1}))}});Object.defineProperty(e,"childElementCount",{get:function(){return e.children.length}});Object.defineProperty(e,"childNodes",{get:function(){var e=r.call(this);if((plt.$flags$&1)===0&&getHostRef(this).$flags$&2){var t=new n;for(var a=0;a<e.length;a++){var o=e[a]["s-nr"];if(o){t.push(o)}}return t}return n.from(e)}})}};var bootstrapLazy=function(e,t){if(t===void 0){t={}}var n;var r=createTime();var a=[];var o=t.exclude||[];var s=win.customElements;var i=doc.head;var l=i.querySelector("meta[charset]");var c=doc.createElement("style");var u=[];var f;var $=true;Object.assign(plt,t);plt.$resourcesUrl$=new URL(t.resourcesUrl||"./",doc.baseURI).href;e.map((function(e){e[1].map((function(t){var n={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{n.$members$=t[2]}{n.$listeners$=t[3]}{n.$attrsToReflect$=[]}{n.$watchers$={}}if(!supportsShadow&&n.$flags$&1){n.$flags$|=8}var r=n.$tagName$;var i=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;registerHost(t,n);if(n.$flags$&1){if(supportsShadow){{t.attachShadow({mode:"open",delegatesFocus:!!(n.$flags$&16)})}}else if(!("shadowRoot"in t)){t.shadowRoot=t}}{patchChildSlotNodes(t,n)}return r}t.prototype.connectedCallback=function(){var e=this;if(f){clearTimeout(f);f=null}if($){u.push(this)}else{plt.jmp((function(){return connectedCallback(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;plt.jmp((function(){return disconnectedCallback(e)}))};t.prototype.componentOnReady=function(){return getHostRef(this).$onReadyPromise$};return t}(HTMLElement);n.$lazyBundleId$=e[0];if(!o.includes(r)&&!s.get(r)){a.push(r);s.define(r,proxyComponent(i,n,1))}}))}));{c.innerHTML=a+HYDRATED_CSS;c.setAttribute("data-styles","");var d=(n=plt.$nonce$)!==null&&n!==void 0?n:queryNonceMetaTagContent(doc);if(d!=null){c.setAttribute("nonce",d)}i.insertBefore(c,l?l.nextSibling:i.firstChild)}$=false;if(u.length){u.map((function(e){return e.connectedCallback()}))}else{{plt.jmp((function(){return f=setTimeout(appDidLoad,30)}))}}r()};var addHostEventListeners=function(e,t,n,r){if(n){n.map((function(n){var r=n[0],a=n[1],o=n[2];var s=e;var i=hostListenerProxy(t,o);var l=hostListenerOpts(r);plt.ael(s,a,i,l);(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return plt.rel(s,a,i,l)}))}))}};var hostListenerProxy=function(e,t){return function(n){try{{if(e.$flags$&256){e.$lazyInstance$[t](n)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}}}catch(r){consoleError(r)}}};var hostListenerOpts=function(e){return(e&2)!==0};var setNonce=function(e){return plt.$nonce$=e};var hostRefs=new WeakMap;var getHostRef=function(e){return hostRefs.get(e)};var registerInstance=function(e,t){return hostRefs.set(t.$lazyInstance$=e,t)};var registerHost=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}addHostEventListeners(e,n,t.$listeners$);return hostRefs.set(e,n)};var isMemberInElement=function(e,t){return t in e};var consoleError=function(e,t){return(0,console.error)(e,t)};var cmpModules=new Map;var loadModule=function(e,t,n){var r=e.$tagName$.replace(/-/g,"_");var a=e.$lazyBundleId$;var o=cmpModules.get(a);if(o){return o[r]}if(!n||!BUILD.hotModuleReplacement){var s=function(e){cmpModules.set(a,e);return e[r]};switch(a){case"my-button_2":return import("./my-button_2.entry.js").then(s,consoleError)}}return import("./".concat(a,".entry.js").concat("")).then((function(e){{cmpModules.set(a,e)}return e[r]}),consoleError)};var styles=new Map;var modeResolutionChain=[];var win=typeof window!=="undefined"?window:{};var CSS=win.CSS;var doc=win.document||{head:{}};var plt={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}};var supportsShadow=function(){return(doc.head.attachShadow+"").indexOf("[native")>-1}();var promiseResolve=function(e){return Promise.resolve(e)};var supportsConstructableStylesheets=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(e){}return false}();var queueDomReads=[];var queueDomWrites=[];var queueTask=function(e,t){return function(n){e.push(n);if(!queuePending){queuePending=true;if(t&&plt.$flags$&4){nextTick(flush)}else{plt.raf(flush)}}}};var consume=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(n){consoleError(n)}}e.length=0};var flush=function(){consume(queueDomReads);{consume(queueDomWrites);if(queuePending=queueDomReads.length>0){plt.raf(flush)}}};var nextTick=function(e){return promiseResolve().then(e)};var writeTask=queueTask(queueDomWrites,true);export{CSS as C,Host as H,NAMESPACE as N,promiseResolve as a,bootstrapLazy as b,setMode as c,doc as d,getElement as g,h,plt as p,registerInstance as r,setNonce as s,win as w};
//# sourceMappingURL=index-403d8268.js.map