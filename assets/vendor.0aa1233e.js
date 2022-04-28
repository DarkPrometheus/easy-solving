var j={exports:{}},H={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var tf=Object.getOwnPropertySymbols,f0=Object.prototype.hasOwnProperty,d0=Object.prototype.propertyIsEnumerable;function p0(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function m0(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Vp=m0()?Object.assign:function(t,e){for(var n,r=p0(t),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)f0.call(n,o)&&(r[o]=n[o]);if(tf){i=tf(n);for(var a=0;a<i.length;a++)d0.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lc=Vp,Mr=60103,Bp=60106;H.Fragment=60107;H.StrictMode=60108;H.Profiler=60114;var jp=60109,zp=60110,Hp=60112;H.Suspense=60113;var Wp=60115,Kp=60116;if(typeof Symbol=="function"&&Symbol.for){var rt=Symbol.for;Mr=rt("react.element"),Bp=rt("react.portal"),H.Fragment=rt("react.fragment"),H.StrictMode=rt("react.strict_mode"),H.Profiler=rt("react.profiler"),jp=rt("react.provider"),zp=rt("react.context"),Hp=rt("react.forward_ref"),H.Suspense=rt("react.suspense"),Wp=rt("react.memo"),Kp=rt("react.lazy")}var nf=typeof Symbol=="function"&&Symbol.iterator;function g0(t){return t===null||typeof t!="object"?null:(t=nf&&t[nf]||t["@@iterator"],typeof t=="function"?t:null)}function ds(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qp={};function $r(t,e,n){this.props=t,this.context=e,this.refs=qp,this.updater=n||Gp}$r.prototype.isReactComponent={};$r.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(ds(85));this.updater.enqueueSetState(this,t,e,"setState")};$r.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xp(){}Xp.prototype=$r.prototype;function uc(t,e,n){this.props=t,this.context=e,this.refs=qp,this.updater=n||Gp}var cc=uc.prototype=new Xp;cc.constructor=uc;lc(cc,$r.prototype);cc.isPureReactComponent=!0;var hc={current:null},Yp=Object.prototype.hasOwnProperty,Qp={key:!0,ref:!0,__self:!0,__source:!0};function Jp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Yp.call(e,r)&&!Qp.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Mr,type:t,key:s,ref:o,props:i,_owner:hc.current}}function y0(t,e){return{$$typeof:Mr,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Mr}function v0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var rf=/\/+/g;function cl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?v0(""+t.key):e.toString(36)}function lo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Mr:case Bp:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+cl(o,0):r,Array.isArray(i)?(n="",t!=null&&(n=t.replace(rf,"$&/")+"/"),lo(i,e,n,"",function(u){return u})):i!=null&&(fc(i)&&(i=y0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(rf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+cl(s,a);o+=lo(s,e,n,l,i)}else if(l=g0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+cl(s,a++),o+=lo(s,e,n,l,i);else if(s==="object")throw e=""+t,Error(ds(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function Hs(t,e,n){if(t==null)return t;var r=[],i=0;return lo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function w0(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var Zp={current:null};function $t(){var t=Zp.current;if(t===null)throw Error(ds(321));return t}var E0={ReactCurrentDispatcher:Zp,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:hc,IsSomeRendererActing:{current:!1},assign:lc};H.Children={map:Hs,forEach:function(t,e,n){Hs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Hs(t,function(){e++}),e},toArray:function(t){return Hs(t,function(e){return e})||[]},only:function(t){if(!fc(t))throw Error(ds(143));return t}};H.Component=$r;H.PureComponent=uc;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E0;H.cloneElement=function(t,e,n){if(t==null)throw Error(ds(267,t));var r=lc({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=hc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Yp.call(e,l)&&!Qp.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Mr,type:t.type,key:i,ref:s,props:r,_owner:o}};H.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:zp,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:jp,_context:t},t.Consumer=t};H.createElement=Jp;H.createFactory=function(t){var e=Jp.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:Hp,render:t}};H.isValidElement=fc;H.lazy=function(t){return{$$typeof:Kp,_payload:{_status:-1,_result:t},_init:w0}};H.memo=function(t,e){return{$$typeof:Wp,type:t,compare:e===void 0?null:e}};H.useCallback=function(t,e){return $t().useCallback(t,e)};H.useContext=function(t,e){return $t().useContext(t,e)};H.useDebugValue=function(){};H.useEffect=function(t,e){return $t().useEffect(t,e)};H.useImperativeHandle=function(t,e,n){return $t().useImperativeHandle(t,e,n)};H.useLayoutEffect=function(t,e){return $t().useLayoutEffect(t,e)};H.useMemo=function(t,e){return $t().useMemo(t,e)};H.useReducer=function(t,e,n){return $t().useReducer(t,e,n)};H.useRef=function(t){return $t().useRef(t)};H.useState=function(t){return $t().useState(t)};H.version="17.0.2";j.exports=H;var em={exports:{}},nt={},tm={exports:{}},nm={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var l=null,u=null,c=function(){if(l!==null)try{var R=t.unstable_now();l(!0,R),l=null}catch(L){throw setTimeout(c,0),L}};e=function(R){l!==null?setTimeout(e,0,R):(l=R,setTimeout(c,0))},n=function(R,L){u=setTimeout(R,L)},r=function(){clearTimeout(u)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var m=window.setTimeout,p=window.clearTimeout;if(typeof console!="undefined"){var v=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof v!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var w=!1,I=null,f=-1,h=5,d=0;t.unstable_shouldYield=function(){return t.unstable_now()>=d},i=function(){},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):h=0<R?Math.floor(1e3/R):5};var g=new MessageChannel,y=g.port2;g.port1.onmessage=function(){if(I!==null){var R=t.unstable_now();d=R+h;try{I(!0,R)?y.postMessage(null):(w=!1,I=null)}catch(L){throw y.postMessage(null),L}}else w=!1},e=function(R){I=R,w||(w=!0,y.postMessage(null))},n=function(R,L){f=m(function(){R(t.unstable_now())},L)},r=function(){p(f),f=-1}}function P(R,L){var V=R.length;R.push(L);e:for(;;){var ie=V-1>>>1,ye=R[ie];if(ye!==void 0&&0<_(ye,L))R[ie]=L,R[V]=ye,V=ie;else break e}}function E(R){return R=R[0],R===void 0?null:R}function O(R){var L=R[0];if(L!==void 0){var V=R.pop();if(V!==L){R[0]=V;e:for(var ie=0,ye=R.length;ie<ye;){var yn=2*(ie+1)-1,vn=R[yn],Xr=yn+1,Qn=R[Xr];if(vn!==void 0&&0>_(vn,V))Qn!==void 0&&0>_(Qn,vn)?(R[ie]=Qn,R[Xr]=V,ie=Xr):(R[ie]=vn,R[yn]=V,ie=yn);else if(Qn!==void 0&&0>_(Qn,V))R[ie]=Qn,R[Xr]=V,ie=Xr;else break e}}return L}return null}function _(R,L){var V=R.sortIndex-L.sortIndex;return V!==0?V:R.id-L.id}var S=[],F=[],ge=1,ee=null,K=3,ut=!1,Ce=!1,Yn=!1;function al(R){for(var L=E(F);L!==null;){if(L.callback===null)O(F);else if(L.startTime<=R)O(F),L.sortIndex=L.expirationTime,P(S,L);else break;L=E(F)}}function ll(R){if(Yn=!1,al(R),!Ce)if(E(S)!==null)Ce=!0,e(ul);else{var L=E(F);L!==null&&n(ll,L.startTime-R)}}function ul(R,L){Ce=!1,Yn&&(Yn=!1,r()),ut=!0;var V=K;try{for(al(L),ee=E(S);ee!==null&&(!(ee.expirationTime>L)||R&&!t.unstable_shouldYield());){var ie=ee.callback;if(typeof ie=="function"){ee.callback=null,K=ee.priorityLevel;var ye=ie(ee.expirationTime<=L);L=t.unstable_now(),typeof ye=="function"?ee.callback=ye:ee===E(S)&&O(S),al(L)}else O(S);ee=E(S)}if(ee!==null)var yn=!0;else{var vn=E(F);vn!==null&&n(ll,vn.startTime-L),yn=!1}return yn}finally{ee=null,K=V,ut=!1}}var h0=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){Ce||ut||(Ce=!0,e(ul))},t.unstable_getCurrentPriorityLevel=function(){return K},t.unstable_getFirstCallbackNode=function(){return E(S)},t.unstable_next=function(R){switch(K){case 1:case 2:case 3:var L=3;break;default:L=K}var V=K;K=L;try{return R()}finally{K=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=h0,t.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var V=K;K=R;try{return L()}finally{K=V}},t.unstable_scheduleCallback=function(R,L,V){var ie=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?ie+V:ie):V=ie,R){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=V+ye,R={id:ge++,callback:L,priorityLevel:R,startTime:V,expirationTime:ye,sortIndex:-1},V>ie?(R.sortIndex=V,P(F,R),E(S)===null&&R===E(F)&&(Yn?r():Yn=!0,n(ll,V-ie))):(R.sortIndex=ye,P(S,R),Ce||ut||(Ce=!0,e(ul))),R},t.unstable_wrapCallback=function(R){var L=K;return function(){var V=K;K=L;try{return R.apply(this,arguments)}finally{K=V}}}})(nm);tm.exports=nm;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wa=j.exports,Z=Vp,de=tm.exports;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!wa)throw Error(T(227));var rm=new Set,$i={};function Wn(t,e){kr(t,e),kr(t+"Capture",e)}function kr(t,e){for($i[t]=e,t=0;t<e.length;t++)rm.add(e[t])}var Dt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),_0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sf=Object.prototype.hasOwnProperty,of={},af={};function S0(t){return sf.call(af,t)?!0:sf.call(of,t)?!1:_0.test(t)?af[t]=!0:(of[t]=!0,!1)}function T0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function I0(t,e,n,r){if(e===null||typeof e=="undefined"||T0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ue(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ie[t]=new Ue(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ie[e]=new Ue(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ie[t]=new Ue(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ie[t]=new Ue(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ie[t]=new Ue(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ie[t]=new Ue(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ie[t]=new Ue(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ie[t]=new Ue(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ie[t]=new Ue(t,5,!1,t.toLowerCase(),null,!1,!1)});var dc=/[\-:]([a-z])/g;function pc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(dc,pc);Ie[e]=new Ue(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(dc,pc);Ie[e]=new Ue(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(dc,pc);Ie[e]=new Ue(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ie[t]=new Ue(t,1,!1,t.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ie[t]=new Ue(t,1,!1,t.toLowerCase(),null,!0,!0)});function mc(t,e,n,r){var i=Ie.hasOwnProperty(e)?Ie[e]:null,s=i!==null?i.type===0:r?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");s||(I0(e,n,i,r)&&(n=null),r||i===null?S0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Kn=wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ui=60103,_n=60106,Ft=60107,gc=60108,vi=60114,yc=60109,vc=60110,Ea=60112,wi=60113,ko=60120,_a=60115,wc=60116,Ec=60121,_c=60128,im=60129,Sc=60130,Jl=60131;if(typeof Symbol=="function"&&Symbol.for){var he=Symbol.for;ui=he("react.element"),_n=he("react.portal"),Ft=he("react.fragment"),gc=he("react.strict_mode"),vi=he("react.profiler"),yc=he("react.provider"),vc=he("react.context"),Ea=he("react.forward_ref"),wi=he("react.suspense"),ko=he("react.suspense_list"),_a=he("react.memo"),wc=he("react.lazy"),Ec=he("react.block"),he("react.scope"),_c=he("react.opaque.id"),im=he("react.debug_trace_mode"),Sc=he("react.offscreen"),Jl=he("react.legacy_hidden")}var lf=typeof Symbol=="function"&&Symbol.iterator;function Yr(t){return t===null||typeof t!="object"?null:(t=lf&&t[lf]||t["@@iterator"],typeof t=="function"?t:null)}var hl;function ci(t){if(hl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hl=e&&e[1]||""}return`
`+hl+t}var fl=!1;function Ws(t,e){if(!t||fl)return"";fl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a])return`
`+i[o].replace(" at new "," at ");while(1<=o&&0<=a);break}}}finally{fl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ci(t):""}function k0(t){switch(t.tag){case 5:return ci(t.type);case 16:return ci("Lazy");case 13:return ci("Suspense");case 19:return ci("SuspenseList");case 0:case 2:case 15:return t=Ws(t.type,!1),t;case 11:return t=Ws(t.type.render,!1),t;case 22:return t=Ws(t.type._render,!1),t;case 1:return t=Ws(t.type,!0),t;default:return""}}function cr(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ft:return"Fragment";case _n:return"Portal";case vi:return"Profiler";case gc:return"StrictMode";case wi:return"Suspense";case ko:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case vc:return(t.displayName||"Context")+".Consumer";case yc:return(t._context.displayName||"Context")+".Provider";case Ea:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case _a:return cr(t.type);case Ec:return cr(t._render);case wc:e=t._payload,t=t._init;try{return cr(t(e))}catch{}}return null}function rn(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function sm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function C0(t){var e=sm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ks(t){t._valueTracker||(t._valueTracker=C0(t))}function om(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=sm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Co(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function Zl(t,e){var n=e.checked;return Z({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function uf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=rn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function am(t,e){e=e.checked,e!=null&&mc(t,"checked",e,!1)}function eu(t,e){am(t,e);var n=rn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?tu(t,e.type,n):e.hasOwnProperty("defaultValue")&&tu(t,e.type,rn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function cf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function tu(t,e,n){(e!=="number"||Co(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function R0(t){var e="";return wa.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function nu(t,e){return t=Z({children:void 0},e),(e=R0(e.children))&&(t.children=e),t}function hr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+rn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ru(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return Z({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:rn(n)}}function lm(t,e){var n=rn(e.value),r=rn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ff(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var iu={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function um(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function su(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?um(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Gs,cm=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!==iu.svg||"innerHTML"in t)t.innerHTML=e;else{for(Gs=Gs||document.createElement("div"),Gs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Gs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ui(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ei={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},N0=["Webkit","ms","Moz","O"];Object.keys(Ei).forEach(function(t){N0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ei[e]=Ei[t]})});function hm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ei.hasOwnProperty(t)&&Ei[t]?(""+e).trim():e+"px"}function fm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var A0=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ou(t,e){if(e){if(A0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function au(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Tc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lu=null,fr=null,dr=null;function df(t){if(t=ms(t)){if(typeof lu!="function")throw Error(T(280));var e=t.stateNode;e&&(e=Ra(e),lu(t.stateNode,t.type,e))}}function dm(t){fr?dr?dr.push(t):dr=[t]:fr=t}function pm(){if(fr){var t=fr,e=dr;if(dr=fr=null,df(t),e)for(t=0;t<e.length;t++)df(e[t])}}function Ic(t,e){return t(e)}function mm(t,e,n,r,i){return t(e,n,r,i)}function kc(){}var gm=Ic,Sn=!1,dl=!1;function Cc(){(fr!==null||dr!==null)&&(kc(),pm())}function P0(t,e,n){if(dl)return t(e,n);dl=!0;try{return gm(t,e,n)}finally{dl=!1,Cc()}}function bi(t,e){var n=t.stateNode;if(n===null)return null;var r=Ra(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var uu=!1;if(Dt)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){uu=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{uu=!1}function O0(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var _i=!1,Ro=null,No=!1,cu=null,D0={onError:function(t){_i=!0,Ro=t}};function x0(t,e,n,r,i,s,o,a,l){_i=!1,Ro=null,O0.apply(D0,arguments)}function L0(t,e,n,r,i,s,o,a,l){if(x0.apply(this,arguments),_i){if(_i){var u=Ro;_i=!1,Ro=null}else throw Error(T(198));No||(No=!0,cu=u)}}function Gn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&1026)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ym(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function pf(t){if(Gn(t)!==t)throw Error(T(188))}function M0(t){var e=t.alternate;if(!e){if(e=Gn(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return pf(i),t;if(s===r)return pf(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function vm(t){if(t=M0(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function mf(t,e){for(var n=t.alternate;e!==null;){if(e===t||e===n)return!0;e=e.return}return!1}var wm,Rc,Em,_m,hu=!1,ht=[],Gt=null,qt=null,Xt=null,Fi=new Map,Vi=new Map,Jr=[],gf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fu(t,e,n,r,i){return{blockedOn:t,domEventName:e,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function yf(t,e){switch(t){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":Fi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vi.delete(e.pointerId)}}function Zr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t=fu(e,n,r,i,s),e!==null&&(e=ms(e),e!==null&&Rc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function $0(t,e,n,r,i){switch(e){case"focusin":return Gt=Zr(Gt,t,e,n,r,i),!0;case"dragenter":return qt=Zr(qt,t,e,n,r,i),!0;case"mouseover":return Xt=Zr(Xt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Fi.set(s,Zr(Fi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Vi.set(s,Zr(Vi.get(s)||null,t,e,n,r,i)),!0}return!1}function U0(t){var e=Tn(t.target);if(e!==null){var n=Gn(e);if(n!==null){if(e=n.tag,e===13){if(e=ym(n),e!==null){t.blockedOn=e,_m(t.lanePriority,function(){de.unstable_runWithPriority(t.priority,function(){Em(n)})});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Oc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null)return e=ms(n),e!==null&&Rc(e),t.blockedOn=n,!1;e.shift()}return!0}function vf(t,e,n){uo(t)&&n.delete(e)}function b0(){for(hu=!1;0<ht.length;){var t=ht[0];if(t.blockedOn!==null){t=ms(t.blockedOn),t!==null&&wm(t);break}for(var e=t.targetContainers;0<e.length;){var n=Oc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null){t.blockedOn=n;break}e.shift()}t.blockedOn===null&&ht.shift()}Gt!==null&&uo(Gt)&&(Gt=null),qt!==null&&uo(qt)&&(qt=null),Xt!==null&&uo(Xt)&&(Xt=null),Fi.forEach(vf),Vi.forEach(vf)}function ei(t,e){t.blockedOn===e&&(t.blockedOn=null,hu||(hu=!0,de.unstable_scheduleCallback(de.unstable_NormalPriority,b0)))}function Sm(t){function e(i){return ei(i,t)}if(0<ht.length){ei(ht[0],t);for(var n=1;n<ht.length;n++){var r=ht[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Gt!==null&&ei(Gt,t),qt!==null&&ei(qt,t),Xt!==null&&ei(Xt,t),Fi.forEach(e),Vi.forEach(e),n=0;n<Jr.length;n++)r=Jr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Jr.length&&(n=Jr[0],n.blockedOn===null);)U0(n),n.blockedOn===null&&Jr.shift()}function qs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var tr={animationend:qs("Animation","AnimationEnd"),animationiteration:qs("Animation","AnimationIteration"),animationstart:qs("Animation","AnimationStart"),transitionend:qs("Transition","TransitionEnd")},pl={},Tm={};Dt&&(Tm=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function Sa(t){if(pl[t])return pl[t];if(!tr[t])return t;var e=tr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Tm)return pl[t]=e[n];return t}var Im=Sa("animationend"),km=Sa("animationiteration"),Cm=Sa("animationstart"),Rm=Sa("transitionend"),Nm=new Map,Nc=new Map,F0=["abort","abort",Im,"animationEnd",km,"animationIteration",Cm,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Rm,"transitionEnd","waiting","waiting"];function Ac(t,e){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),Nc.set(r,e),Nm.set(r,i),Wn(i,[r])}}var V0=de.unstable_now;V0();var G=8;function Zn(t){if((1&t)!==0)return G=15,1;if((2&t)!==0)return G=14,2;if((4&t)!==0)return G=13,4;var e=24&t;return e!==0?(G=12,e):(t&32)!==0?(G=11,32):(e=192&t,e!==0?(G=10,e):(t&256)!==0?(G=9,256):(e=3584&t,e!==0?(G=8,e):(t&4096)!==0?(G=7,4096):(e=4186112&t,e!==0?(G=6,e):(e=62914560&t,e!==0?(G=5,e):t&67108864?(G=4,67108864):(t&134217728)!==0?(G=3,134217728):(e=805306368&t,e!==0?(G=2,e):(1073741824&t)!==0?(G=1,1073741824):(G=8,t))))))}function B0(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function j0(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(T(358,t))}}function Bi(t,e){var n=t.pendingLanes;if(n===0)return G=0;var r=0,i=0,s=t.expiredLanes,o=t.suspendedLanes,a=t.pingedLanes;if(s!==0)r=s,i=G=15;else if(s=n&134217727,s!==0){var l=s&~o;l!==0?(r=Zn(l),i=G):(a&=s,a!==0&&(r=Zn(a),i=G))}else s=n&~o,s!==0?(r=Zn(s),i=G):a!==0&&(r=Zn(a),i=G);if(r===0)return 0;if(r=31-sn(r),r=n&((0>r?0:1<<r)<<1)-1,e!==0&&e!==r&&(e&o)===0){if(Zn(e),i<=G)return e;G=i}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-sn(e),i=1<<n,r|=t[n],e&=~i;return r}function Am(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ao(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=er(24&~e),t===0?Ao(10,e):t;case 10:return t=er(192&~e),t===0?Ao(8,e):t;case 8:return t=er(3584&~e),t===0&&(t=er(4186112&~e),t===0&&(t=512)),t;case 2:return e=er(805306368&~e),e===0&&(e=268435456),e}throw Error(T(358,t))}function er(t){return t&-t}function ml(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ta(t,e,n){t.pendingLanes|=e;var r=e-1;t.suspendedLanes&=r,t.pingedLanes&=r,t=t.eventTimes,e=31-sn(e),t[e]=n}var sn=Math.clz32?Math.clz32:W0,z0=Math.log,H0=Math.LN2;function W0(t){return t===0?32:31-(z0(t)/H0|0)|0}var K0=de.unstable_UserBlockingPriority,G0=de.unstable_runWithPriority,co=!0;function q0(t,e,n,r){Sn||kc();var i=Pc,s=Sn;Sn=!0;try{mm(i,t,e,n,r)}finally{(Sn=s)||Cc()}}function X0(t,e,n,r){G0(K0,Pc.bind(null,t,e,n,r))}function Pc(t,e,n,r){if(co){var i;if((i=(e&4)===0)&&0<ht.length&&-1<gf.indexOf(t))t=fu(null,t,e,n,r),ht.push(t);else{var s=Oc(t,e,n,r);if(s===null)i&&yf(t,r);else{if(i){if(-1<gf.indexOf(t)){t=fu(s,t,e,n,r),ht.push(t);return}if($0(s,t,e,n,r))return;yf(t,r)}jm(t,e,r,null,n)}}}}function Oc(t,e,n,r){var i=Tc(r);if(i=Tn(i),i!==null){var s=Gn(i);if(s===null)i=null;else{var o=s.tag;if(o===13){if(i=ym(s),i!==null)return i;i=null}else if(o===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return jm(t,e,r,i,n),null}var Ht=null,Dc=null,ho=null;function Pm(){if(ho)return ho;var t,e=Dc,n=e.length,r,i="value"in Ht?Ht.value:Ht.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ho=i.slice(t,1<r?1-r:void 0)}function fo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xs(){return!0}function wf(){return!1}function Ye(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xs:wf,this.isPropagationStopped=wf,this}return Z(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xs)},persist:function(){},isPersistent:Xs}),e}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xc=Ye(Ur),ps=Z({},Ur,{view:0,detail:0}),Y0=Ye(ps),gl,yl,ti,Ia=Z({},ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ti&&(ti&&t.type==="mousemove"?(gl=t.screenX-ti.screenX,yl=t.screenY-ti.screenY):yl=gl=0,ti=t),gl)},movementY:function(t){return"movementY"in t?t.movementY:yl}}),Ef=Ye(Ia),Q0=Z({},Ia,{dataTransfer:0}),J0=Ye(Q0),Z0=Z({},ps,{relatedTarget:0}),vl=Ye(Z0),ew=Z({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),tw=Ye(ew),nw=Z({},Ur,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rw=Ye(nw),iw=Z({},Ur,{data:0}),_f=Ye(iw),sw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ow={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=aw[t])?!!e[t]:!1}function Lc(){return lw}var uw=Z({},ps,{key:function(t){if(t.key){var e=sw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ow[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lc,charCode:function(t){return t.type==="keypress"?fo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cw=Ye(uw),hw=Z({},Ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sf=Ye(hw),fw=Z({},ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lc}),dw=Ye(fw),pw=Z({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),mw=Ye(pw),gw=Z({},Ia,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yw=Ye(gw),vw=[9,13,27,32],Mc=Dt&&"CompositionEvent"in window,Si=null;Dt&&"documentMode"in document&&(Si=document.documentMode);var ww=Dt&&"TextEvent"in window&&!Si,Om=Dt&&(!Mc||Si&&8<Si&&11>=Si),Tf=String.fromCharCode(32),If=!1;function Dm(t,e){switch(t){case"keyup":return vw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var nr=!1;function Ew(t,e){switch(t){case"compositionend":return xm(e);case"keypress":return e.which!==32?null:(If=!0,Tf);case"textInput":return t=e.data,t===Tf&&If?null:t;default:return null}}function _w(t,e){if(nr)return t==="compositionend"||!Mc&&Dm(t,e)?(t=Pm(),ho=Dc=Ht=null,nr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Om&&e.locale!=="ko"?null:e.data;default:return null}}var Sw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Sw[t.type]:e==="textarea"}function Lm(t,e,n,r){dm(r),e=Po(e,"onChange"),0<e.length&&(n=new xc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ti=null,ji=null;function Tw(t){Fm(t,0)}function ka(t){var e=ir(t);if(om(e))return t}function Iw(t,e){if(t==="change")return e}var Mm=!1;if(Dt){var wl;if(Dt){var El="oninput"in document;if(!El){var Cf=document.createElement("div");Cf.setAttribute("oninput","return;"),El=typeof Cf.oninput=="function"}wl=El}else wl=!1;Mm=wl&&(!document.documentMode||9<document.documentMode)}function Rf(){Ti&&(Ti.detachEvent("onpropertychange",$m),ji=Ti=null)}function $m(t){if(t.propertyName==="value"&&ka(ji)){var e=[];if(Lm(e,ji,t,Tc(t)),t=Tw,Sn)t(e);else{Sn=!0;try{Ic(t,e)}finally{Sn=!1,Cc()}}}}function kw(t,e,n){t==="focusin"?(Rf(),Ti=e,ji=n,Ti.attachEvent("onpropertychange",$m)):t==="focusout"&&Rf()}function Cw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ka(ji)}function Rw(t,e){if(t==="click")return ka(e)}function Nw(t,e){if(t==="input"||t==="change")return ka(e)}function Aw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qe=typeof Object.is=="function"?Object.is:Aw,Pw=Object.prototype.hasOwnProperty;function zi(t,e){if(Qe(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Pw.call(e,n[r])||!Qe(t[n[r]],e[n[r]]))return!1;return!0}function Nf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Af(t,e){var n=Nf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nf(n)}}function Um(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Um(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Pf(){for(var t=window,e=Co();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Co(t.document)}return e}function du(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Ow=Dt&&"documentMode"in document&&11>=document.documentMode,rr=null,pu=null,Ii=null,mu=!1;function Of(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mu||rr==null||rr!==Co(r)||(r=rr,"selectionStart"in r&&du(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ii&&zi(Ii,r)||(Ii=r,r=Po(pu,"onSelect"),0<r.length&&(e=new xc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=rr)))}Ac("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);Ac("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Ac(F0,2);for(var Df="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),_l=0;_l<Df.length;_l++)Nc.set(Df[_l],0);kr("onMouseEnter",["mouseout","mouseover"]);kr("onMouseLeave",["mouseout","mouseover"]);kr("onPointerEnter",["pointerout","pointerover"]);kr("onPointerLeave",["pointerout","pointerover"]);Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bm=new Set("cancel close invalid load scroll toggle".split(" ").concat(hi));function xf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,L0(r,e,void 0,t),t.currentTarget=null}function Fm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;xf(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;xf(i,a,u),s=l}}}if(No)throw t=cu,No=!1,cu=null,t}function X(t,e){var n=Hm(e),r=t+"__bubble";n.has(r)||(Bm(e,t,2,!1),n.add(r))}var Lf="_reactListening"+Math.random().toString(36).slice(2);function Vm(t){t[Lf]||(t[Lf]=!0,rm.forEach(function(e){bm.has(e)||Mf(e,!1,t,null),Mf(e,!0,t,null)}))}function Mf(t,e,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,s=n;if(t==="selectionchange"&&n.nodeType!==9&&(s=n.ownerDocument),r!==null&&!e&&bm.has(t)){if(t!=="scroll")return;i|=2,s=r}var o=Hm(s),a=t+"__"+(e?"capture":"bubble");o.has(a)||(e&&(i|=4),Bm(s,t,i,e),o.add(a))}function Bm(t,e,n,r){var i=Nc.get(e);switch(i===void 0?2:i){case 0:i=q0;break;case 1:i=X0;break;default:i=Pc}n=i.bind(null,e,n,t),i=void 0,!uu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function jm(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Tn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}P0(function(){var u=s,c=Tc(n),m=[];e:{var p=Nm.get(t);if(p!==void 0){var v=xc,w=t;switch(t){case"keypress":if(fo(n)===0)break e;case"keydown":case"keyup":v=cw;break;case"focusin":w="focus",v=vl;break;case"focusout":w="blur",v=vl;break;case"beforeblur":case"afterblur":v=vl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ef;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=J0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=dw;break;case Im:case km:case Cm:v=tw;break;case Rm:v=mw;break;case"scroll":v=Y0;break;case"wheel":v=yw;break;case"copy":case"cut":case"paste":v=rw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Sf}var I=(e&4)!==0,f=!I&&t==="scroll",h=I?p!==null?p+"Capture":null:p;I=[];for(var d=u,g;d!==null;){g=d;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,h!==null&&(y=bi(d,h),y!=null&&I.push(Hi(d,y,g)))),f)break;d=d.return}0<I.length&&(p=new v(p,w,null,n,c),m.push({event:p,listeners:I}))}}if((e&7)===0){e:{if(p=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",p&&(e&16)===0&&(w=n.relatedTarget||n.fromElement)&&(Tn(w)||w[br]))break e;if((v||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=u,w=w?Tn(w):null,w!==null&&(f=Gn(w),w!==f||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=u),v!==w)){if(I=Ef,y="onMouseLeave",h="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(I=Sf,y="onPointerLeave",h="onPointerEnter",d="pointer"),f=v==null?p:ir(v),g=w==null?p:ir(w),p=new I(y,d+"leave",v,n,c),p.target=f,p.relatedTarget=g,y=null,Tn(c)===u&&(I=new I(h,d+"enter",w,n,c),I.target=g,I.relatedTarget=f,y=I),f=y,v&&w)t:{for(I=v,h=w,d=0,g=I;g;g=Jn(g))d++;for(g=0,y=h;y;y=Jn(y))g++;for(;0<d-g;)I=Jn(I),d--;for(;0<g-d;)h=Jn(h),g--;for(;d--;){if(I===h||h!==null&&I===h.alternate)break t;I=Jn(I),h=Jn(h)}I=null}else I=null;v!==null&&$f(m,p,v,I,!1),w!==null&&f!==null&&$f(m,f,w,I,!0)}}e:{if(p=u?ir(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var P=Iw;else if(kf(p))if(Mm)P=Nw;else{P=Cw;var E=kw}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(P=Rw);if(P&&(P=P(t,u))){Lm(m,P,n,c);break e}E&&E(t,p,u),t==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&tu(p,"number",p.value)}switch(E=u?ir(u):window,t){case"focusin":(kf(E)||E.contentEditable==="true")&&(rr=E,pu=u,Ii=null);break;case"focusout":Ii=pu=rr=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,Of(m,n,c);break;case"selectionchange":if(Ow)break;case"keydown":case"keyup":Of(m,n,c)}var O;if(Mc)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else nr?Dm(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Om&&n.locale!=="ko"&&(nr||_!=="onCompositionStart"?_==="onCompositionEnd"&&nr&&(O=Pm()):(Ht=c,Dc="value"in Ht?Ht.value:Ht.textContent,nr=!0)),E=Po(u,_),0<E.length&&(_=new _f(_,t,null,n,c),m.push({event:_,listeners:E}),O?_.data=O:(O=xm(n),O!==null&&(_.data=O)))),(O=ww?Ew(t,n):_w(t,n))&&(u=Po(u,"onBeforeInput"),0<u.length&&(c=new _f("onBeforeInput","beforeinput",null,n,c),m.push({event:c,listeners:u}),c.data=O))}Fm(m,e)})}function Hi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Po(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=bi(t,n),s!=null&&r.unshift(Hi(t,s,i)),s=bi(t,e),s!=null&&r.push(Hi(t,s,i))),t=t.return}return r}function Jn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $f(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=bi(n,s),l!=null&&o.unshift(Hi(n,l,a))):i||(l=bi(n,s),l!=null&&o.push(Hi(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}function Oo(){}var Sl=null,Tl=null;function zm(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function gu(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uf=typeof setTimeout=="function"?setTimeout:void 0,Dw=typeof clearTimeout=="function"?clearTimeout:void 0;function $c(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function bf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Il=0;function xw(t){return{$$typeof:_c,toString:t,valueOf:t}}var Ca=Math.random().toString(36).slice(2),Wt="__reactFiber$"+Ca,Do="__reactProps$"+Ca,br="__reactContainer$"+Ca,Ff="__reactEvents$"+Ca;function Tn(t){var e=t[Wt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[br]||n[Wt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=bf(t);t!==null;){if(n=t[Wt])return n;t=bf(t)}return e}t=n,n=t.parentNode}return null}function ms(t){return t=t[Wt]||t[br],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ir(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function Ra(t){return t[Do]||null}function Hm(t){var e=t[Ff];return e===void 0&&(e=t[Ff]=new Set),e}var yu=[],sr=-1;function fn(t){return{current:t}}function Y(t){0>sr||(t.current=yu[sr],yu[sr]=null,sr--)}function re(t,e){sr++,yu[sr]=t.current,t.current=e}var on={},Oe=fn(on),ze=fn(!1),Dn=on;function Cr(t,e){var n=t.type.contextTypes;if(!n)return on;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function He(t){return t=t.childContextTypes,t!=null}function xo(){Y(ze),Y(Oe)}function Vf(t,e,n){if(Oe.current!==on)throw Error(T(168));re(Oe,e),re(ze,n)}function Wm(t,e,n){var r=t.stateNode;if(t=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,cr(e)||"Unknown",i));return Z({},n,r)}function po(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||on,Dn=Oe.current,re(Oe,t),re(ze,ze.current),!0}function Bf(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=Wm(t,e,Dn),r.__reactInternalMemoizedMergedChildContext=t,Y(ze),Y(Oe),re(Oe,t)):Y(ze),re(ze,n)}var Uc=null,An=null,Lw=de.unstable_runWithPriority,bc=de.unstable_scheduleCallback,vu=de.unstable_cancelCallback,Mw=de.unstable_shouldYield,jf=de.unstable_requestPaint,wu=de.unstable_now,$w=de.unstable_getCurrentPriorityLevel,Na=de.unstable_ImmediatePriority,Km=de.unstable_UserBlockingPriority,Gm=de.unstable_NormalPriority,qm=de.unstable_LowPriority,Xm=de.unstable_IdlePriority,kl={},Uw=jf!==void 0?jf:function(){},It=null,mo=null,Cl=!1,zf=wu(),Ne=1e4>zf?wu:function(){return wu()-zf};function Rr(){switch($w()){case Na:return 99;case Km:return 98;case Gm:return 97;case qm:return 96;case Xm:return 95;default:throw Error(T(332))}}function Ym(t){switch(t){case 99:return Na;case 98:return Km;case 97:return Gm;case 96:return qm;case 95:return Xm;default:throw Error(T(332))}}function xn(t,e){return t=Ym(t),Lw(t,e)}function Wi(t,e,n){return t=Ym(t),bc(t,e,n)}function St(){if(mo!==null){var t=mo;mo=null,vu(t)}Qm()}function Qm(){if(!Cl&&It!==null){Cl=!0;var t=0;try{var e=It;xn(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),It=null}catch(n){throw It!==null&&(It=It.slice(t+1)),bc(Na,St),n}finally{Cl=!1}}}var bw=Kn.ReactCurrentBatchConfig;function it(t,e){if(t&&t.defaultProps){e=Z({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Lo=fn(null),Mo=null,or=null,$o=null;function Fc(){$o=or=Mo=null}function Vc(t){var e=Lo.current;Y(Lo),t.type._context._currentValue=e}function Jm(t,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)===e){if(n===null||(n.childLanes&e)===e)break;n.childLanes|=e}else t.childLanes|=e,n!==null&&(n.childLanes|=e);t=t.return}}function mr(t,e){Mo=t,$o=or=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(ot=!0),t.firstContext=null)}function et(t,e){if($o!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&($o=t,e=1073741823),e={context:t,observedBits:e,next:null},or===null){if(Mo===null)throw Error(T(308));or=e,Mo.dependencies={lanes:0,firstContext:e,responders:null}}else or=or.next=e;return t._currentValue}var bt=!1;function Bc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Zm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qt(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function Hf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ki(t,e,n,r){var i=t.updateQueue;bt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;if(c!==null){c=c.updateQueue;var m=c.lastBaseUpdate;m!==o&&(m===null?c.firstBaseUpdate=u:m.next=u,c.lastBaseUpdate=l)}}if(s!==null){m=i.baseState,o=0,c=u=l=null;do{a=s.lane;var p=s.eventTime;if((r&a)===a){c!==null&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=t,w=s;switch(a=e,p=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){m=v.call(p,m,a);break e}m=v;break e;case 3:v.flags=v.flags&-4097|64;case 0:if(v=w.payload,a=typeof v=="function"?v.call(p,m,a):v,a==null)break e;m=Z({},m,a);break e;case 2:bt=!0}}s.callback!==null&&(t.flags|=32,a=i.effects,a===null?i.effects=[s]:a.push(s))}else p={eventTime:p,lane:a,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=p,l=m):c=c.next=p,o|=a;if(s=s.next,s===null){if(a=i.shared.pending,a===null)break;s=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(1);c===null&&(l=m),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,ys|=o,t.lanes=o,t.memoizedState=m}}function Wf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var eg=new wa.Component().refs;function Uo(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Z({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Aa={isMounted:function(t){return(t=t._reactInternals)?Gn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=We(),i=Jt(t),s=Yt(r,i);s.payload=e,n!=null&&(s.callback=n),Qt(t,s),Zt(t,i,r)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=We(),i=Jt(t),s=Yt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),Qt(t,s),Zt(t,i,r)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=We(),r=Jt(t),i=Yt(n,r);i.tag=2,e!=null&&(i.callback=e),Qt(t,i),Zt(t,r,n)}};function Kf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!zi(n,r)||!zi(i,s):!0}function tg(t,e,n){var r=!1,i=on,s=e.contextType;return typeof s=="object"&&s!==null?s=et(s):(i=He(e)?Dn:Oe.current,r=e.contextTypes,s=(r=r!=null)?Cr(t,i):on),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Aa,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Gf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Aa.enqueueReplaceState(e,e.state,null)}function Eu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=eg,Bc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=et(s):(s=He(e)?Dn:Oe.current,i.context=Cr(t,s)),Ki(t,n,i,r),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Uo(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Aa.enqueueReplaceState(i,i.state,null),Ki(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4)}var Ys=Array.isArray;function ni(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var o=r.refs;o===eg&&(o=r.refs={}),s===null?delete o[i]:o[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function Qs(t,e){if(t.type!=="textarea")throw Error(T(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function ng(t){function e(f,h){if(t){var d=f.lastEffect;d!==null?(d.nextEffect=h,f.lastEffect=h):f.firstEffect=f.lastEffect=h,h.nextEffect=null,h.flags=8}}function n(f,h){if(!t)return null;for(;h!==null;)e(f,h),h=h.sibling;return null}function r(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function i(f,h){return f=ln(f,h),f.index=0,f.sibling=null,f}function s(f,h,d){return f.index=d,t?(d=f.alternate,d!==null?(d=d.index,d<h?(f.flags=2,h):d):(f.flags=2,h)):h}function o(f){return t&&f.alternate===null&&(f.flags=2),f}function a(f,h,d,g){return h===null||h.tag!==6?(h=Ol(d,f.mode,g),h.return=f,h):(h=i(h,d),h.return=f,h)}function l(f,h,d,g){return h!==null&&h.elementType===d.type?(g=i(h,d.props),g.ref=ni(f,h,d),g.return=f,g):(g=wo(d.type,d.key,d.props,null,f.mode,g),g.ref=ni(f,h,d),g.return=f,g)}function u(f,h,d,g){return h===null||h.tag!==4||h.stateNode.containerInfo!==d.containerInfo||h.stateNode.implementation!==d.implementation?(h=Dl(d,f.mode,g),h.return=f,h):(h=i(h,d.children||[]),h.return=f,h)}function c(f,h,d,g,y){return h===null||h.tag!==7?(h=wr(d,f.mode,g,y),h.return=f,h):(h=i(h,d),h.return=f,h)}function m(f,h,d){if(typeof h=="string"||typeof h=="number")return h=Ol(""+h,f.mode,d),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ui:return d=wo(h.type,h.key,h.props,null,f.mode,d),d.ref=ni(f,null,h),d.return=f,d;case _n:return h=Dl(h,f.mode,d),h.return=f,h}if(Ys(h)||Yr(h))return h=wr(h,f.mode,d,null),h.return=f,h;Qs(f,h)}return null}function p(f,h,d,g){var y=h!==null?h.key:null;if(typeof d=="string"||typeof d=="number")return y!==null?null:a(f,h,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ui:return d.key===y?d.type===Ft?c(f,h,d.props.children,g,y):l(f,h,d,g):null;case _n:return d.key===y?u(f,h,d,g):null}if(Ys(d)||Yr(d))return y!==null?null:c(f,h,d,g,null);Qs(f,d)}return null}function v(f,h,d,g,y){if(typeof g=="string"||typeof g=="number")return f=f.get(d)||null,a(h,f,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ui:return f=f.get(g.key===null?d:g.key)||null,g.type===Ft?c(h,f,g.props.children,y,g.key):l(h,f,g,y);case _n:return f=f.get(g.key===null?d:g.key)||null,u(h,f,g,y)}if(Ys(g)||Yr(g))return f=f.get(d)||null,c(h,f,g,y,null);Qs(h,g)}return null}function w(f,h,d,g){for(var y=null,P=null,E=h,O=h=0,_=null;E!==null&&O<d.length;O++){E.index>O?(_=E,E=null):_=E.sibling;var S=p(f,E,d[O],g);if(S===null){E===null&&(E=_);break}t&&E&&S.alternate===null&&e(f,E),h=s(S,h,O),P===null?y=S:P.sibling=S,P=S,E=_}if(O===d.length)return n(f,E),y;if(E===null){for(;O<d.length;O++)E=m(f,d[O],g),E!==null&&(h=s(E,h,O),P===null?y=E:P.sibling=E,P=E);return y}for(E=r(f,E);O<d.length;O++)_=v(E,f,O,d[O],g),_!==null&&(t&&_.alternate!==null&&E.delete(_.key===null?O:_.key),h=s(_,h,O),P===null?y=_:P.sibling=_,P=_);return t&&E.forEach(function(F){return e(f,F)}),y}function I(f,h,d,g){var y=Yr(d);if(typeof y!="function")throw Error(T(150));if(d=y.call(d),d==null)throw Error(T(151));for(var P=y=null,E=h,O=h=0,_=null,S=d.next();E!==null&&!S.done;O++,S=d.next()){E.index>O?(_=E,E=null):_=E.sibling;var F=p(f,E,S.value,g);if(F===null){E===null&&(E=_);break}t&&E&&F.alternate===null&&e(f,E),h=s(F,h,O),P===null?y=F:P.sibling=F,P=F,E=_}if(S.done)return n(f,E),y;if(E===null){for(;!S.done;O++,S=d.next())S=m(f,S.value,g),S!==null&&(h=s(S,h,O),P===null?y=S:P.sibling=S,P=S);return y}for(E=r(f,E);!S.done;O++,S=d.next())S=v(E,f,O,S.value,g),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?O:S.key),h=s(S,h,O),P===null?y=S:P.sibling=S,P=S);return t&&E.forEach(function(ge){return e(f,ge)}),y}return function(f,h,d,g){var y=typeof d=="object"&&d!==null&&d.type===Ft&&d.key===null;y&&(d=d.props.children);var P=typeof d=="object"&&d!==null;if(P)switch(d.$$typeof){case ui:e:{for(P=d.key,y=h;y!==null;){if(y.key===P){switch(y.tag){case 7:if(d.type===Ft){n(f,y.sibling),h=i(y,d.props.children),h.return=f,f=h;break e}break;default:if(y.elementType===d.type){n(f,y.sibling),h=i(y,d.props),h.ref=ni(f,y,d),h.return=f,f=h;break e}}n(f,y);break}else e(f,y);y=y.sibling}d.type===Ft?(h=wr(d.props.children,f.mode,g,d.key),h.return=f,f=h):(g=wo(d.type,d.key,d.props,null,f.mode,g),g.ref=ni(f,h,d),g.return=f,f=g)}return o(f);case _n:e:{for(y=d.key;h!==null;){if(h.key===y)if(h.tag===4&&h.stateNode.containerInfo===d.containerInfo&&h.stateNode.implementation===d.implementation){n(f,h.sibling),h=i(h,d.children||[]),h.return=f,f=h;break e}else{n(f,h);break}else e(f,h);h=h.sibling}h=Dl(d,f.mode,g),h.return=f,f=h}return o(f)}if(typeof d=="string"||typeof d=="number")return d=""+d,h!==null&&h.tag===6?(n(f,h.sibling),h=i(h,d),h.return=f,f=h):(n(f,h),h=Ol(d,f.mode,g),h.return=f,f=h),o(f);if(Ys(d))return w(f,h,d,g);if(Yr(d))return I(f,h,d,g);if(P&&Qs(f,d),typeof d=="undefined"&&!y)switch(f.tag){case 1:case 22:case 0:case 11:case 15:throw Error(T(152,cr(f.type)||"Component"))}return n(f,h)}}var bo=ng(!0),rg=ng(!1),gs={},pt=fn(gs),Gi=fn(gs),qi=fn(gs);function In(t){if(t===gs)throw Error(T(174));return t}function _u(t,e){switch(re(qi,e),re(Gi,t),re(pt,gs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:su(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=su(e,t)}Y(pt),re(pt,e)}function Nr(){Y(pt),Y(Gi),Y(qi)}function qf(t){In(qi.current);var e=In(pt.current),n=su(e,t.type);e!==n&&(re(Gi,t),re(pt,n))}function jc(t){Gi.current===t&&(Y(pt),Y(Gi))}var te=fn(0);function Fo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&64)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ct=null,Kt=null,mt=!1;function ig(t,e){var n=Je(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function Xf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function Su(t){if(mt){var e=Kt;if(e){var n=e;if(!Xf(t,e)){if(e=pr(n.nextSibling),!e||!Xf(t,e)){t.flags=t.flags&-1025|2,mt=!1,Ct=t;return}ig(Ct,n)}Ct=t,Kt=pr(e.firstChild)}else t.flags=t.flags&-1025|2,mt=!1,Ct=t}}function Yf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ct=t}function Js(t){if(t!==Ct)return!1;if(!mt)return Yf(t),mt=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!gu(e,t.memoizedProps))for(e=Kt;e;)ig(t,e),e=pr(e.nextSibling);if(Yf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Kt=pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Kt=null}}else Kt=Ct?pr(t.stateNode.nextSibling):null;return!0}function Rl(){Kt=Ct=null,mt=!1}var gr=[];function zc(){for(var t=0;t<gr.length;t++)gr[t]._workInProgressVersionPrimary=null;gr.length=0}var ki=Kn.ReactCurrentDispatcher,Ze=Kn.ReactCurrentBatchConfig,Xi=0,se=null,Re=null,ve=null,Vo=!1,Ci=!1;function be(){throw Error(T(321))}function Hc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qe(t[n],e[n]))return!1;return!0}function Wc(t,e,n,r,i,s){if(Xi=s,se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ki.current=t===null||t.memoizedState===null?Vw:Bw,t=n(r,i),Ci){s=0;do{if(Ci=!1,!(25>s))throw Error(T(301));s+=1,ve=Re=null,e.updateQueue=null,ki.current=jw,t=n(r,i)}while(Ci)}if(ki.current=Ho,e=Re!==null&&Re.next!==null,Xi=0,ve=Re=se=null,Vo=!1,e)throw Error(T(300));return t}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?se.memoizedState=ve=t:ve=ve.next=t,ve}function qn(){if(Re===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=Re.next;var e=ve===null?se.memoizedState:ve.next;if(e!==null)ve=e,Re=t;else{if(t===null)throw Error(T(310));Re=t,t={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},ve===null?se.memoizedState=ve=t:ve=ve.next=t}return ve}function ft(t,e){return typeof e=="function"?e(t):e}function ri(t){var e=qn(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=Re,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=o=s=null,l=i;do{var u=l.lane;if((Xi&u)===u)a!==null&&(a=a.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),r=l.eagerReducer===t?l.eagerState:t(r,l.action);else{var c={lane:u,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};a===null?(o=a=c,s=r):a=a.next=c,se.lanes|=u,ys|=u}l=l.next}while(l!==null&&l!==i);a===null?s=r:a.next=o,Qe(r,e.memoizedState)||(ot=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}return[e.memoizedState,n.dispatch]}function ii(t){var e=qn(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Qe(s,e.memoizedState)||(ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Qf(t,e,n){var r=e._getVersion;r=r(e._source);var i=e._workInProgressVersionPrimary;if(i!==null?t=i===r:(t=t.mutableReadLanes,(t=(Xi&t)===t)&&(e._workInProgressVersionPrimary=r,gr.push(e))),t)return n(e._source);throw gr.push(e),Error(T(350))}function sg(t,e,n,r){var i=Me;if(i===null)throw Error(T(349));var s=e._getVersion,o=s(e._source),a=ki.current,l=a.useState(function(){return Qf(i,e,n)}),u=l[1],c=l[0];l=ve;var m=t.memoizedState,p=m.refs,v=p.getSnapshot,w=m.source;m=m.subscribe;var I=se;return t.memoizedState={refs:p,source:e,subscribe:r},a.useEffect(function(){p.getSnapshot=n,p.setSnapshot=u;var f=s(e._source);if(!Qe(o,f)){f=n(e._source),Qe(c,f)||(u(f),f=Jt(I),i.mutableReadLanes|=f&i.pendingLanes),f=i.mutableReadLanes,i.entangledLanes|=f;for(var h=i.entanglements,d=f;0<d;){var g=31-sn(d),y=1<<g;h[g]|=f,d&=~y}}},[n,e,r]),a.useEffect(function(){return r(e._source,function(){var f=p.getSnapshot,h=p.setSnapshot;try{h(f(e._source));var d=Jt(I);i.mutableReadLanes|=d&i.pendingLanes}catch(g){h(function(){throw g})}})},[e,r]),Qe(v,n)&&Qe(w,e)&&Qe(m,r)||(t={pending:null,dispatch:null,lastRenderedReducer:ft,lastRenderedState:c},t.dispatch=u=qc.bind(null,se,t),l.queue=t,l.baseQueue=null,c=Qf(i,e,n),l.memoizedState=l.baseState=c),c}function og(t,e,n){var r=qn();return sg(r,t,e,n)}function si(t){var e=kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:ft,lastRenderedState:t},t=t.dispatch=qc.bind(null,se,t),[e.memoizedState,t]}function Bo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=se.updateQueue,e===null?(e={lastEffect:null},se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Jf(t){var e=kn();return t={current:t},e.memoizedState=t}function jo(){return qn().memoizedState}function Tu(t,e,n,r){var i=kn();se.flags|=t,i.memoizedState=Bo(1|e,n,void 0,r===void 0?null:r)}function Kc(t,e,n,r){var i=qn();r=r===void 0?null:r;var s=void 0;if(Re!==null){var o=Re.memoizedState;if(s=o.destroy,r!==null&&Hc(r,o.deps)){Bo(e,n,s,r);return}}se.flags|=t,i.memoizedState=Bo(1|e,n,s,r)}function Zf(t,e){return Tu(516,4,t,e)}function zo(t,e){return Kc(516,4,t,e)}function ag(t,e){return Kc(4,2,t,e)}function lg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ug(t,e,n){return n=n!=null?n.concat([t]):null,Kc(4,2,lg.bind(null,e,t),n)}function Gc(){}function cg(t,e){var n=qn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function hg(t,e){var n=qn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Fw(t,e){var n=Rr();xn(98>n?98:n,function(){t(!0)}),xn(97<n?97:n,function(){var r=Ze.transition;Ze.transition=1;try{t(!1),e()}finally{Ze.transition=r}})}function qc(t,e,n){var r=We(),i=Jt(t),s={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s,o=t.alternate,t===se||o!==null&&o===se)Ci=Vo=!0;else{if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,l=o(a,n);if(s.eagerReducer=o,s.eagerState=l,Qe(l,a))return}catch{}finally{}Zt(t,i,r)}}var Ho={readContext:et,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useOpaqueIdentifier:be,unstable_isNewReconciler:!1},Vw={readContext:et,useCallback:function(t,e){return kn().memoizedState=[t,e===void 0?null:e],t},useContext:et,useEffect:Zf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Tu(4,2,lg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Tu(4,2,t,e)},useMemo:function(t,e){var n=kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=kn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t=r.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=qc.bind(null,se,t),[r.memoizedState,t]},useRef:Jf,useState:si,useDebugValue:Gc,useDeferredValue:function(t){var e=si(t),n=e[0],r=e[1];return Zf(function(){var i=Ze.transition;Ze.transition=1;try{r(t)}finally{Ze.transition=i}},[t]),n},useTransition:function(){var t=si(!1),e=t[0];return t=Fw.bind(null,t[1]),Jf(t),[t,e]},useMutableSource:function(t,e,n){var r=kn();return r.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:n},sg(r,t,e,n)},useOpaqueIdentifier:function(){if(mt){var t=!1,e=xw(function(){throw t||(t=!0,n("r:"+(Il++).toString(36))),Error(T(355))}),n=si(e)[1];return(se.mode&2)===0&&(se.flags|=516,Bo(5,function(){n("r:"+(Il++).toString(36))},void 0,null)),e}return e="r:"+(Il++).toString(36),si(e),e},unstable_isNewReconciler:!1},Bw={readContext:et,useCallback:cg,useContext:et,useEffect:zo,useImperativeHandle:ug,useLayoutEffect:ag,useMemo:hg,useReducer:ri,useRef:jo,useState:function(){return ri(ft)},useDebugValue:Gc,useDeferredValue:function(t){var e=ri(ft),n=e[0],r=e[1];return zo(function(){var i=Ze.transition;Ze.transition=1;try{r(t)}finally{Ze.transition=i}},[t]),n},useTransition:function(){var t=ri(ft)[0];return[jo().current,t]},useMutableSource:og,useOpaqueIdentifier:function(){return ri(ft)[0]},unstable_isNewReconciler:!1},jw={readContext:et,useCallback:cg,useContext:et,useEffect:zo,useImperativeHandle:ug,useLayoutEffect:ag,useMemo:hg,useReducer:ii,useRef:jo,useState:function(){return ii(ft)},useDebugValue:Gc,useDeferredValue:function(t){var e=ii(ft),n=e[0],r=e[1];return zo(function(){var i=Ze.transition;Ze.transition=1;try{r(t)}finally{Ze.transition=i}},[t]),n},useTransition:function(){var t=ii(ft)[0];return[jo().current,t]},useMutableSource:og,useOpaqueIdentifier:function(){return ii(ft)[0]},unstable_isNewReconciler:!1},zw=Kn.ReactCurrentOwner,ot=!1;function Fe(t,e,n,r){e.child=t===null?rg(e,null,n,r):bo(e,t.child,n,r)}function ed(t,e,n,r,i){n=n.render;var s=e.ref;return mr(e,i),r=Wc(t,e,n,r,s,i),t!==null&&!ot?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,Rt(t,e,i)):(e.flags|=1,Fe(t,e,r,i),e.child)}function td(t,e,n,r,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!eh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,fg(t,e,o,r,i,s)):(t=wo(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,(i&s)===0&&(i=o.memoizedProps,n=n.compare,n=n!==null?n:zi,n(i,r)&&t.ref===e.ref)?Rt(t,e,s):(e.flags|=1,t=ln(o,r),t.ref=e.ref,t.return=e,e.child=t)}function fg(t,e,n,r,i,s){if(t!==null&&zi(t.memoizedProps,r)&&t.ref===e.ref)if(ot=!1,(s&i)!==0)(t.flags&16384)!==0&&(ot=!0);else return e.lanes=t.lanes,Rt(t,e,s);return Iu(t,e,n,r,s)}function Nl(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((e.mode&4)===0)e.memoizedState={baseLanes:0},eo(e,n);else if((n&1073741824)!==0)e.memoizedState={baseLanes:0},eo(e,s!==null?s.baseLanes:n);else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},eo(e,t),null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,eo(e,r);return Fe(t,e,i,n),e.child}function dg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=128)}function Iu(t,e,n,r,i){var s=He(n)?Dn:Oe.current;return s=Cr(e,s),mr(e,i),n=Wc(t,e,n,r,s,i),t!==null&&!ot?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,Rt(t,e,i)):(e.flags|=1,Fe(t,e,n,i),e.child)}function nd(t,e,n,r,i){if(He(n)){var s=!0;po(e)}else s=!1;if(mr(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),tg(e,n,r),Eu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=et(u):(u=He(n)?Dn:Oe.current,u=Cr(e,u));var c=n.getDerivedStateFromProps,m=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Gf(e,o,r,u),bt=!1;var p=e.memoizedState;o.state=p,Ki(e,r,o,i),l=e.memoizedState,a!==r||p!==l||ze.current||bt?(typeof c=="function"&&(Uo(e,n,c,r),l=e.memoizedState),(a=bt||Kf(e,n,a,r,p,l,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4),r=!1)}else{o=e.stateNode,Zm(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:it(e.type,a),o.props=u,m=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=et(l):(l=He(n)?Dn:Oe.current,l=Cr(e,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||p!==l)&&Gf(e,o,r,l),bt=!1,p=e.memoizedState,o.state=p,Ki(e,r,o,i);var w=e.memoizedState;a!==m||p!==w||ze.current||bt?(typeof v=="function"&&(Uo(e,n,v,r),w=e.memoizedState),(u=bt||Kf(e,n,u,r,p,w,l))?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=256),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=256),r=!1)}return ku(t,e,n,r,s,i)}function ku(t,e,n,r,i,s){dg(t,e);var o=(e.flags&64)!==0;if(!r&&!o)return i&&Bf(e,n,!1),Rt(t,e,s);r=e.stateNode,zw.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=bo(e,t.child,null,s),e.child=bo(e,null,a,s)):Fe(t,e,a,s),e.memoizedState=r.state,i&&Bf(e,n,!0),e.child}function rd(t){var e=t.stateNode;e.pendingContext?Vf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vf(t,e.context,!1),_u(t,e.containerInfo)}var Zs={dehydrated:null,retryLane:0};function id(t,e,n){var r=e.pendingProps,i=te.current,s=!1,o;return(o=(e.flags&64)!==0)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!==0),o?(s=!0,e.flags&=-65):t!==null&&t.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),re(te,i&1),t===null?(r.fallback!==void 0&&Su(e),t=r.children,i=r.fallback,s?(t=sd(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Zs,t):typeof r.unstable_expectedLoadTime=="number"?(t=sd(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Zs,e.lanes=33554432,t):(n=th({mode:"visible",children:t},e.mode,n,null),n.return=e,e.child=n)):t.memoizedState!==null?s?(r=ad(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=Zs,r):(n=od(t,e,r.children,n),e.memoizedState=null,n):s?(r=ad(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=Zs,r):(n=od(t,e,r.children,n),e.memoizedState=null,n)}function sd(t,e,n,r){var i=t.mode,s=t.child;return e={mode:"hidden",children:e},(i&2)===0&&s!==null?(s.childLanes=0,s.pendingProps=e):s=th(e,i,0,null),n=wr(n,i,r,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n}function od(t,e,n,r){var i=t.child;return t=i.sibling,n=ln(i,{mode:"visible",children:n}),(e.mode&2)===0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=n}function ad(t,e,n,r,i){var s=e.mode,o=t.child;t=o.sibling;var a={mode:"hidden",children:n};return(s&2)===0&&e.child!==o?(n=e.child,n.childLanes=0,n.pendingProps=a,o=n.lastEffect,o!==null?(e.firstEffect=n.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):n=ln(o,a),t!==null?r=ln(t,r):(r=wr(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function ld(t,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Jm(t.return,e)}function Al(t,e,n,r,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=s)}function ud(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Fe(t,e,r.children,n),r=te.current,(r&2)!==0)r=r&1|2,e.flags|=64;else{if(t!==null&&(t.flags&64)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ld(t,n);else if(t.tag===19)ld(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(re(te,r),(e.mode&2)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Fo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Al(e,!1,i,n,s,e.lastEffect);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Fo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Al(e,!0,n,null,s,e.lastEffect);break;case"together":Al(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function Rt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ys|=e.lanes,(n&e.childLanes)!==0){if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=ln(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ln(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}return null}var pg,Cu,mg,gg;pg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cu=function(){};mg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,In(pt.current);var s=null;switch(n){case"input":i=Zl(t,i),r=Zl(t,r),s=[];break;case"option":i=nu(t,i),r=nu(t,r),s=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),s=[];break;case"textarea":i=ru(t,i),r=ru(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Oo)}ou(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($i.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($i.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&X("scroll",t),s||a===l||(s=[])):typeof l=="object"&&l!==null&&l.$$typeof===_c?l.toString():(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};gg=function(t,e,n,r){n!==r&&(e.flags|=4)};function oi(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Hw(t,e,n){var r=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return He(e.type)&&xo(),null;case 3:return Nr(),Y(ze),Y(Oe),zc(),r=e.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Js(e)?e.flags|=4:r.hydrate||(e.flags|=256)),Cu(e),null;case 5:jc(e);var i=In(qi.current);if(n=e.type,t!==null&&e.stateNode!=null)mg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=128);else{if(!r){if(e.stateNode===null)throw Error(T(166));return null}if(t=In(pt.current),Js(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Wt]=e,r[Do]=s,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(t=0;t<hi.length;t++)X(hi[t],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":uf(r,s),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},X("invalid",r);break;case"textarea":hf(r,s),X("invalid",r)}ou(n,s),t=null;for(var o in s)s.hasOwnProperty(o)&&(i=s[o],o==="children"?typeof i=="string"?r.textContent!==i&&(t=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(t=["children",""+i]):$i.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&X("scroll",r));switch(n){case"input":Ks(r),cf(r,s,!0);break;case"textarea":Ks(r),ff(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Oo)}r=t,e.updateQueue=r,r!==null&&(e.flags|=4)}else{switch(o=i.nodeType===9?i:i.ownerDocument,t===iu.html&&(t=um(n)),t===iu.html?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Wt]=e,t[Do]=r,pg(t,e,!1,!1),e.stateNode=t,o=au(n,r),n){case"dialog":X("cancel",t),X("close",t),i=r;break;case"iframe":case"object":case"embed":X("load",t),i=r;break;case"video":case"audio":for(i=0;i<hi.length;i++)X(hi[i],t);i=r;break;case"source":X("error",t),i=r;break;case"img":case"image":case"link":X("error",t),X("load",t),i=r;break;case"details":X("toggle",t),i=r;break;case"input":uf(t,r),i=Zl(t,r),X("invalid",t);break;case"option":i=nu(t,r);break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),X("invalid",t);break;case"textarea":hf(t,r),i=ru(t,r),X("invalid",t);break;default:i=r}ou(n,i);var a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?fm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&cm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ui(t,l):typeof l=="number"&&Ui(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($i.hasOwnProperty(s)?l!=null&&s==="onScroll"&&X("scroll",t):l!=null&&mc(t,s,l,o))}switch(n){case"input":Ks(t),cf(t,r,!1);break;case"textarea":Ks(t),ff(t);break;case"option":r.value!=null&&t.setAttribute("value",""+rn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?hr(t,!!r.multiple,s,!1):r.defaultValue!=null&&hr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Oo)}zm(n,r)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)gg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));n=In(qi.current),In(pt.current),Js(e)?(r=e.stateNode,n=e.memoizedProps,r[Wt]=e,r.nodeValue!==n&&(e.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wt]=e,e.stateNode=r)}return null;case 13:return Y(te),r=e.memoizedState,(e.flags&64)!==0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?e.memoizedProps.fallback!==void 0&&Js(e):n=t.memoizedState!==null,r&&!n&&(e.mode&2)!==0&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||(te.current&1)!==0?_e===0&&(_e=3):((_e===0||_e===3)&&(_e=4),Me===null||(ys&134217727)===0&&(Vr&134217727)===0||yr(Me,Ae))),(r||n)&&(e.flags|=4),null);case 4:return Nr(),Cu(e),t===null&&Vm(e.stateNode.containerInfo),null;case 10:return Vc(e),null;case 17:return He(e.type)&&xo(),null;case 19:if(Y(te),r=e.memoizedState,r===null)return null;if(s=(e.flags&64)!==0,o=r.rendering,o===null)if(s)oi(r,!1);else{if(_e!==0||t!==null&&(t.flags&64)!==0)for(t=e.child;t!==null;){if(o=Fo(t),o!==null){for(e.flags|=64,oi(r,!1),s=o.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),r.lastEffect===null&&(e.firstEffect=null),e.lastEffect=r.lastEffect,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return re(te,te.current&1|2),e.child}t=t.sibling}r.tail!==null&&Ne()>Du&&(e.flags|=64,s=!0,oi(r,!1),e.lanes=33554432)}else{if(!s)if(t=Fo(o),t!==null){if(e.flags|=64,s=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),oi(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!mt)return e=e.lastEffect=r.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*Ne()-r.renderingStartTime>Du&&n!==1073741824&&(e.flags|=64,s=!0,oi(r,!1),e.lanes=33554432);r.isBackwards?(o.sibling=e.child,e.child=o):(n=r.last,n!==null?n.sibling=o:e.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=e.lastEffect,r.renderingStartTime=Ne(),n.sibling=null,e=te.current,re(te,s?e&1|2:e&1),n):null;case 23:case 24:return Zc(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(T(156,e.tag))}function Ww(t){switch(t.tag){case 1:He(t.type)&&xo();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(Nr(),Y(ze),Y(Oe),zc(),e=t.flags,(e&64)!==0)throw Error(T(285));return t.flags=e&-4097|64,t;case 5:return jc(t),null;case 13:return Y(te),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return Y(te),null;case 4:return Nr(),null;case 10:return Vc(t),null;case 23:case 24:return Zc(),null;default:return null}}function Xc(t,e){try{var n="",r=e;do n+=k0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function Ru(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Kw=typeof WeakMap=="function"?WeakMap:Map;function yg(t,e,n){n=Yt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ko||(Ko=!0,xu=r),Ru(t,e)},n}function vg(t,e,n){n=Yt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return Ru(t,e),r(i)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(dt===null?dt=new Set([this]):dt.add(this),Ru(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var Gw=typeof WeakSet=="function"?WeakSet:Set;function cd(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){en(t,n)}else e.current=null}function qw(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var n=t.memoizedProps,r=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:it(e.type,n),r),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&$c(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(T(163))}function Xw(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)===3){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var i=t;r=i.next,i=i.tag,(i&4)!==0&&(i&1)!==0&&(Rg(n,t),r1(n,t)),t=r}while(t!==e)}return;case 1:t=n.stateNode,n.flags&4&&(e===null?t.componentDidMount():(r=n.elementType===n.type?e.memoizedProps:it(n.type,e.memoizedProps),t.componentDidUpdate(r,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=n.updateQueue,e!==null&&Wf(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Wf(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.flags&4&&zm(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Sm(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(T(163))}function hd(t,e){for(var n=t;;){if(n.tag===5){var r=n.stateNode;if(e)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=hm("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=e?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function fd(t,e){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(Uc,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var n=t=t.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!==0)Rg(e,n);else{r=e;try{i()}catch(s){en(r,s)}}n=n.next}while(n!==t)}break;case 1:if(cd(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(s){en(e,s)}break;case 5:cd(e);break;case 4:wg(t,e)}}function dd(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function pd(t){return t.tag===5||t.tag===3||t.tag===4}function md(t){e:{for(var e=t.return;e!==null;){if(pd(e))break e;e=e.return}throw Error(T(160))}var n=e;switch(e=n.stateNode,n.tag){case 5:var r=!1;break;case 3:e=e.containerInfo,r=!0;break;case 4:e=e.containerInfo,r=!0;break;default:throw Error(T(161))}n.flags&16&&(Ui(e,""),n.flags&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||pd(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?Nu(t,n,e):Au(t,n,e)}function Nu(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Oo));else if(r!==4&&(t=t.child,t!==null))for(Nu(t,e,n),t=t.sibling;t!==null;)Nu(t,e,n),t=t.sibling}function Au(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Au(t,e,n),t=t.sibling;t!==null;)Au(t,e,n),t=t.sibling}function wg(t,e){for(var n=e,r=!1,i,s;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(T(160));switch(i=r.stateNode,r.tag){case 5:s=!1;break e;case 3:i=i.containerInfo,s=!0;break e;case 4:i=i.containerInfo,s=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var o=t,a=n,l=a;;)if(fd(o,l),l.child!==null&&l.tag!==4)l.child.return=l,l=l.child;else{if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}s?(o=i,a=n.stateNode,o.nodeType===8?o.parentNode.removeChild(a):o.removeChild(a)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,s=!0,n.child.return=n,n=n.child;continue}}else if(fd(t,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function Pl(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)===3&&(t=r.destroy,r.destroy=void 0,t!==void 0&&t()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=e.stateNode,n!=null){r=e.memoizedProps;var i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(n[Do]=r,t==="input"&&r.type==="radio"&&r.name!=null&&am(n,r),au(t,i),e=au(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?fm(n,a):o==="dangerouslySetInnerHTML"?cm(n,a):o==="children"?Ui(n,a):mc(n,o,a,e)}switch(t){case"input":eu(n,r);break;case"textarea":lm(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?hr(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?hr(n,!!r.multiple,r.defaultValue,!0):hr(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(T(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:n=e.stateNode,n.hydrate&&(n.hydrate=!1,Sm(n.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&(Jc=Ne(),hd(e.child,!0)),gd(e);return;case 19:gd(e);return;case 17:return;case 23:case 24:hd(e,e.memoizedState!==null);return}throw Error(T(163))}function gd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Gw),e.forEach(function(r){var i=o1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Yw(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var Qw=Math.ceil,Wo=Kn.ReactCurrentDispatcher,Yc=Kn.ReactCurrentOwner,x=0,Me=null,ue=null,Ae=0,Ln=0,Pu=fn(0),_e=0,Pa=null,Fr=0,ys=0,Vr=0,Qc=0,Ou=null,Jc=0,Du=1/0;function Br(){Du=Ne()+500}var A=null,Ko=!1,xu=null,dt=null,an=!1,Ri=null,fi=90,Lu=[],Mu=[],Ot=null,Ni=0,$u=null,go=-1,kt=0,yo=0,Ai=null,vo=!1;function We(){return(x&48)!==0?Ne():go!==-1?go:go=Ne()}function Jt(t){if(t=t.mode,(t&2)===0)return 1;if((t&4)===0)return Rr()===99?1:2;if(kt===0&&(kt=Fr),bw.transition!==0){yo!==0&&(yo=Ou!==null?Ou.pendingLanes:0),t=kt;var e=4186112&~yo;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=Rr(),(x&4)!==0&&t===98?t=Ao(12,kt):(t=B0(t),t=Ao(t,kt)),t}function Zt(t,e,n){if(50<Ni)throw Ni=0,$u=null,Error(T(185));if(t=Oa(t,e),t===null)return null;Ta(t,e,n),t===Me&&(Vr|=e,_e===4&&yr(t,Ae));var r=Rr();e===1?(x&8)!==0&&(x&48)===0?Uu(t):(tt(t,n),x===0&&(Br(),St())):((x&4)===0||r!==98&&r!==99||(Ot===null?Ot=new Set([t]):Ot.add(t)),tt(t,n)),Ou=t}function Oa(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function tt(t,e){for(var n=t.callbackNode,r=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-sn(o),l=1<<a,u=s[a];if(u===-1){if((l&r)===0||(l&i)!==0){u=e,Zn(l);var c=G;s[a]=10<=c?u+250:6<=c?u+5e3:-1}}else u<=e&&(t.expiredLanes|=l);o&=~l}if(r=Bi(t,t===Me?Ae:0),e=G,r===0)n!==null&&(n!==kl&&vu(n),t.callbackNode=null,t.callbackPriority=0);else{if(n!==null){if(t.callbackPriority===e)return;n!==kl&&vu(n)}e===15?(n=Uu.bind(null,t),It===null?(It=[n],mo=bc(Na,Qm)):It.push(n),n=kl):e===14?n=Wi(99,Uu.bind(null,t)):(n=j0(e),n=Wi(n,Eg.bind(null,t))),t.callbackPriority=e,t.callbackNode=n}}function Eg(t){if(go=-1,yo=kt=0,(x&48)!==0)throw Error(T(327));var e=t.callbackNode;if(dn()&&t.callbackNode!==e)return null;var n=Bi(t,t===Me?Ae:0);if(n===0)return null;var r=n,i=x;x|=16;var s=Ig();(Me!==t||Ae!==r)&&(Br(),vr(t,r));do try{e1();break}catch(a){Tg(t,a)}while(1);if(Fc(),Wo.current=s,x=i,ue!==null?r=0:(Me=null,Ae=0,r=_e),(Fr&Vr)!==0)vr(t,0);else if(r!==0){if(r===2&&(x|=64,t.hydrate&&(t.hydrate=!1,$c(t.containerInfo)),n=Am(t),n!==0&&(r=di(t,n))),r===1)throw e=Pa,vr(t,0),yr(t,n),tt(t,Ne()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=n,r){case 0:case 1:throw Error(T(345));case 2:wn(t);break;case 3:if(yr(t,n),(n&62914560)===n&&(r=Jc+500-Ne(),10<r)){if(Bi(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){We(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Uf(wn.bind(null,t),r);break}wn(t);break;case 4:if(yr(t,n),(n&4186112)===n)break;for(r=t.eventTimes,i=-1;0<n;){var o=31-sn(n);s=1<<o,o=r[o],o>i&&(i=o),n&=~s}if(n=i,n=Ne()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Qw(n/1960))-n,10<n){t.timeoutHandle=Uf(wn.bind(null,t),n);break}wn(t);break;case 5:wn(t);break;default:throw Error(T(329))}}return tt(t,Ne()),t.callbackNode===e?Eg.bind(null,t):null}function yr(t,e){for(e&=~Qc,e&=~Vr,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-sn(e),r=1<<n;t[n]=-1,e&=~r}}function Uu(t){if((x&48)!==0)throw Error(T(327));if(dn(),t===Me&&(t.expiredLanes&Ae)!==0){var e=Ae,n=di(t,e);(Fr&Vr)!==0&&(e=Bi(t,e),n=di(t,e))}else e=Bi(t,0),n=di(t,e);if(t.tag!==0&&n===2&&(x|=64,t.hydrate&&(t.hydrate=!1,$c(t.containerInfo)),e=Am(t),e!==0&&(n=di(t,e))),n===1)throw n=Pa,vr(t,0),yr(t,e),tt(t,Ne()),n;return t.finishedWork=t.current.alternate,t.finishedLanes=e,wn(t),tt(t,Ne()),null}function Jw(){if(Ot!==null){var t=Ot;Ot=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,tt(e,Ne())})}St()}function _g(t,e){var n=x;x|=1;try{return t(e)}finally{x=n,x===0&&(Br(),St())}}function Sg(t,e){var n=x;x&=-2,x|=8;try{return t(e)}finally{x=n,x===0&&(Br(),St())}}function eo(t,e){re(Pu,Ln),Ln|=e,Fr|=e}function Zc(){Ln=Pu.current,Y(Pu)}function vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Dw(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&xo();break;case 3:Nr(),Y(ze),Y(Oe),zc();break;case 5:jc(r);break;case 4:Nr();break;case 13:Y(te);break;case 19:Y(te);break;case 10:Vc(r);break;case 23:case 24:Zc()}n=n.return}Me=t,ue=ln(t.current,null),Ae=Ln=Fr=e,_e=0,Pa=null,Qc=Vr=ys=0}function Tg(t,e){do{var n=ue;try{if(Fc(),ki.current=Ho,Vo){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vo=!1}if(Xi=0,ve=Re=se=null,Ci=!1,Yc.current=null,n===null||n.return===null){_e=1,Pa=e,ue=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ae,a.flags|=2048,a.firstEffect=a.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l;if((a.mode&2)===0){var c=a.alternate;c?(a.updateQueue=c.updateQueue,a.memoizedState=c.memoizedState,a.lanes=c.lanes):(a.updateQueue=null,a.memoizedState=null)}var m=(te.current&1)!==0,p=o;do{var v;if(v=p.tag===13){var w=p.memoizedState;if(w!==null)v=w.dehydrated!==null;else{var I=p.memoizedProps;v=I.fallback===void 0?!1:I.unstable_avoidThisFallback!==!0?!0:!m}}if(v){var f=p.updateQueue;if(f===null){var h=new Set;h.add(u),p.updateQueue=h}else f.add(u);if((p.mode&2)===0){if(p.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var d=Yt(-1,1);d.tag=2,Qt(a,d)}a.lanes|=1;break e}l=void 0,a=e;var g=s.pingCache;if(g===null?(g=s.pingCache=new Kw,l=new Set,g.set(u,l)):(l=g.get(u),l===void 0&&(l=new Set,g.set(u,l))),!l.has(a)){l.add(a);var y=s1.bind(null,s,u,a);u.then(y,y)}p.flags|=4096,p.lanes=e;break e}p=p.return}while(p!==null);l=Error((cr(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}_e!==5&&(_e=2),l=Xc(l,a),p=o;do{switch(p.tag){case 3:s=l,p.flags|=4096,e&=-e,p.lanes|=e;var P=yg(p,s,e);Hf(p,P);break e;case 1:s=l;var E=p.type,O=p.stateNode;if((p.flags&64)===0&&(typeof E.getDerivedStateFromError=="function"||O!==null&&typeof O.componentDidCatch=="function"&&(dt===null||!dt.has(O)))){p.flags|=4096,e&=-e,p.lanes|=e;var _=vg(p,s,e);Hf(p,_);break e}}p=p.return}while(p!==null)}Cg(n)}catch(S){e=S,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(1)}function Ig(){var t=Wo.current;return Wo.current=Ho,t===null?Ho:t}function di(t,e){var n=x;x|=16;var r=Ig();Me===t&&Ae===e||vr(t,e);do try{Zw();break}catch(i){Tg(t,i)}while(1);if(Fc(),x=n,Wo.current=r,ue!==null)throw Error(T(261));return Me=null,Ae=0,_e}function Zw(){for(;ue!==null;)kg(ue)}function e1(){for(;ue!==null&&!Mw();)kg(ue)}function kg(t){var e=Ng(t.alternate,t,Ln);t.memoizedProps=t.pendingProps,e===null?Cg(t):ue=e,Yc.current=null}function Cg(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&2048)===0){if(n=Hw(n,e,Ln),n!==null){ue=n;return}if(n=e,n.tag!==24&&n.tag!==23||n.memoizedState===null||(Ln&1073741824)!==0||(n.mode&4)===0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}t!==null&&(t.flags&2048)===0&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}else{if(n=Ww(e),n!==null){n.flags&=2047,ue=n;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}if(e=e.sibling,e!==null){ue=e;return}ue=e=t}while(e!==null);_e===0&&(_e=5)}function wn(t){var e=Rr();return xn(99,t1.bind(null,t,e)),null}function t1(t,e){do dn();while(Ri!==null);if((x&48)!==0)throw Error(T(327));var n=t.finishedWork;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null;var r=n.lanes|n.childLanes,i=r,s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;for(var o=t.eventTimes,a=t.expirationTimes;0<s;){var l=31-sn(s),u=1<<l;i[l]=0,o[l]=-1,a[l]=-1,s&=~u}if(Ot!==null&&(r&24)===0&&Ot.has(t)&&Ot.delete(t),t===Me&&(ue=Me=null,Ae=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=x,x|=32,Yc.current=null,Sl=co,o=Pf(),du(o)){if("selectionStart"in o)a={start:o.selectionStart,end:o.selectionEnd};else e:if(a=(a=o.ownerDocument)&&a.defaultView||window,(u=a.getSelection&&a.getSelection())&&u.rangeCount!==0){a=u.anchorNode,s=u.anchorOffset,l=u.focusNode,u=u.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var c=0,m=-1,p=-1,v=0,w=0,I=o,f=null;t:for(;;){for(var h;I!==a||s!==0&&I.nodeType!==3||(m=c+s),I!==l||u!==0&&I.nodeType!==3||(p=c+u),I.nodeType===3&&(c+=I.nodeValue.length),(h=I.firstChild)!==null;)f=I,I=h;for(;;){if(I===o)break t;if(f===a&&++v===s&&(m=c),f===l&&++w===u&&(p=c),(h=I.nextSibling)!==null)break;I=f,f=I.parentNode}I=h}a=m===-1||p===-1?null:{start:m,end:p}}else a=null;a=a||{start:0,end:0}}else a=null;Tl={focusedElem:o,selectionRange:a},co=!1,Ai=null,vo=!1,A=r;do try{n1()}catch(S){if(A===null)throw Error(T(330));en(A,S),A=A.nextEffect}while(A!==null);Ai=null,A=r;do try{for(o=t;A!==null;){var d=A.flags;if(d&16&&Ui(A.stateNode,""),d&128){var g=A.alternate;if(g!==null){var y=g.ref;y!==null&&(typeof y=="function"?y(null):y.current=null)}}switch(d&1038){case 2:md(A),A.flags&=-3;break;case 6:md(A),A.flags&=-3,Pl(A.alternate,A);break;case 1024:A.flags&=-1025;break;case 1028:A.flags&=-1025,Pl(A.alternate,A);break;case 4:Pl(A.alternate,A);break;case 8:a=A,wg(o,a);var P=a.alternate;dd(a),P!==null&&dd(P)}A=A.nextEffect}}catch(S){if(A===null)throw Error(T(330));en(A,S),A=A.nextEffect}while(A!==null);if(y=Tl,g=Pf(),d=y.focusedElem,o=y.selectionRange,g!==d&&d&&d.ownerDocument&&Um(d.ownerDocument.documentElement,d)){for(o!==null&&du(d)&&(g=o.start,y=o.end,y===void 0&&(y=g),"selectionStart"in d?(d.selectionStart=g,d.selectionEnd=Math.min(y,d.value.length)):(y=(g=d.ownerDocument||document)&&g.defaultView||window,y.getSelection&&(y=y.getSelection(),a=d.textContent.length,P=Math.min(o.start,a),o=o.end===void 0?P:Math.min(o.end,a),!y.extend&&P>o&&(a=o,o=P,P=a),a=Af(d,P),s=Af(d,o),a&&s&&(y.rangeCount!==1||y.anchorNode!==a.node||y.anchorOffset!==a.offset||y.focusNode!==s.node||y.focusOffset!==s.offset)&&(g=g.createRange(),g.setStart(a.node,a.offset),y.removeAllRanges(),P>o?(y.addRange(g),y.extend(s.node,s.offset)):(g.setEnd(s.node,s.offset),y.addRange(g)))))),g=[],y=d;y=y.parentNode;)y.nodeType===1&&g.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<g.length;d++)y=g[d],y.element.scrollLeft=y.left,y.element.scrollTop=y.top}co=!!Sl,Tl=Sl=null,t.current=n,A=r;do try{for(d=t;A!==null;){var E=A.flags;if(E&36&&Xw(d,A.alternate,A),E&128){g=void 0;var O=A.ref;if(O!==null){var _=A.stateNode;switch(A.tag){case 5:g=_;break;default:g=_}typeof O=="function"?O(g):O.current=g}}A=A.nextEffect}}catch(S){if(A===null)throw Error(T(330));en(A,S),A=A.nextEffect}while(A!==null);A=null,Uw(),x=i}else t.current=n;if(an)an=!1,Ri=t,fi=e;else for(A=r;A!==null;)e=A.nextEffect,A.nextEffect=null,A.flags&8&&(E=A,E.sibling=null,E.stateNode=null),A=e;if(r=t.pendingLanes,r===0&&(dt=null),r===1?t===$u?Ni++:(Ni=0,$u=t):Ni=0,n=n.stateNode,An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(Uc,n,void 0,(n.current.flags&64)===64)}catch{}if(tt(t,Ne()),Ko)throw Ko=!1,t=xu,xu=null,t;return(x&8)!==0||St(),null}function n1(){for(;A!==null;){var t=A.alternate;vo||Ai===null||((A.flags&8)!==0?mf(A,Ai)&&(vo=!0):A.tag===13&&Yw(t,A)&&mf(A,Ai)&&(vo=!0));var e=A.flags;(e&256)!==0&&qw(t,A),(e&512)===0||an||(an=!0,Wi(97,function(){return dn(),null})),A=A.nextEffect}}function dn(){if(fi!==90){var t=97<fi?97:fi;return fi=90,xn(t,i1)}return!1}function r1(t,e){Lu.push(e,t),an||(an=!0,Wi(97,function(){return dn(),null}))}function Rg(t,e){Mu.push(e,t),an||(an=!0,Wi(97,function(){return dn(),null}))}function i1(){if(Ri===null)return!1;var t=Ri;if(Ri=null,(x&48)!==0)throw Error(T(331));var e=x;x|=32;var n=Mu;Mu=[];for(var r=0;r<n.length;r+=2){var i=n[r],s=n[r+1],o=i.destroy;if(i.destroy=void 0,typeof o=="function")try{o()}catch(l){if(s===null)throw Error(T(330));en(s,l)}}for(n=Lu,Lu=[],r=0;r<n.length;r+=2){i=n[r],s=n[r+1];try{var a=i.create;i.destroy=a()}catch(l){if(s===null)throw Error(T(330));en(s,l)}}for(a=t.current.firstEffect;a!==null;)t=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=t;return x=e,St(),!0}function yd(t,e,n){e=Xc(n,e),e=yg(t,e,1),Qt(t,e),e=We(),t=Oa(t,1),t!==null&&(Ta(t,1,e),tt(t,e))}function en(t,e){if(t.tag===3)yd(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){yd(n,t,e);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dt===null||!dt.has(r))){t=Xc(e,t);var i=vg(n,t,1);if(Qt(n,i),i=We(),n=Oa(n,1),n!==null)Ta(n,1,i),tt(n,i);else if(typeof r.componentDidCatch=="function"&&(dt===null||!dt.has(r)))try{r.componentDidCatch(e,t)}catch{}break}}n=n.return}}function s1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=We(),t.pingedLanes|=t.suspendedLanes&n,Me===t&&(Ae&n)===n&&(_e===4||_e===3&&(Ae&62914560)===Ae&&500>Ne()-Jc?vr(t,0):Qc|=n),tt(t,e)}function o1(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=t.mode,(e&2)===0?e=1:(e&4)===0?e=Rr()===99?1:2:(kt===0&&(kt=Fr),e=er(62914560&~kt),e===0&&(e=4194304))),n=We(),t=Oa(t,e),t!==null&&(Ta(t,e,n),tt(t,n))}var Ng;Ng=function(t,e,n){var r=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||ze.current)ot=!0;else if((n&r)!==0)ot=(t.flags&16384)!==0;else{switch(ot=!1,e.tag){case 3:rd(e),Rl();break;case 5:qf(e);break;case 1:He(e.type)&&po(e);break;case 4:_u(e,e.stateNode.containerInfo);break;case 10:r=e.memoizedProps.value;var i=e.type._context;re(Lo,i._currentValue),i._currentValue=r;break;case 13:if(e.memoizedState!==null)return(n&e.child.childLanes)!==0?id(t,e,n):(re(te,te.current&1),e=Rt(t,e,n),e!==null?e.sibling:null);re(te,te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&64)!==0){if(r)return ud(t,e,n);e.flags|=64}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(te,te.current),r)break;return null;case 23:case 24:return e.lanes=0,Nl(t,e,n)}return Rt(t,e,n)}else ot=!1;switch(e.lanes=0,e.tag){case 2:if(r=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=Cr(e,Oe.current),mr(e,n),i=Wc(null,e,r,t,i,n),e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,He(r)){var s=!0;po(e)}else s=!1;e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bc(e);var o=r.getDerivedStateFromProps;typeof o=="function"&&Uo(e,r,o,t),i.updater=Aa,e.stateNode=i,i._reactInternals=e,Eu(e,r,t,n),e=ku(null,e,r,!0,s,n)}else e.tag=0,Fe(null,e,i,n),e=e.child;return e;case 16:i=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=l1(i),t=it(i,t),s){case 0:e=Iu(null,e,i,t,n);break e;case 1:e=nd(null,e,i,t,n);break e;case 11:e=ed(null,e,i,t,n);break e;case 14:e=td(null,e,i,it(i.type,t),r,n);break e}throw Error(T(306,i,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),Iu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),nd(t,e,r,i,n);case 3:if(rd(e),r=e.updateQueue,t===null||r===null)throw Error(T(282));if(r=e.pendingProps,i=e.memoizedState,i=i!==null?i.element:null,Zm(t,e),Ki(e,r,null,n),r=e.memoizedState.element,r===i)Rl(),e=Rt(t,e,n);else{if(i=e.stateNode,(s=i.hydrate)&&(Kt=pr(e.stateNode.containerInfo.firstChild),Ct=e,s=mt=!0),s){if(t=i.mutableSourceEagerHydrationData,t!=null)for(i=0;i<t.length;i+=2)s=t[i],s._workInProgressVersionPrimary=t[i+1],gr.push(s);for(n=rg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else Fe(t,e,r,n),Rl();e=e.child}return e;case 5:return qf(e),t===null&&Su(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,gu(r,i)?o=null:s!==null&&gu(r,s)&&(e.flags|=16),dg(t,e),Fe(t,e,o,n),e.child;case 6:return t===null&&Su(e),null;case 13:return id(t,e,n);case 4:return _u(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=bo(e,null,r,n):Fe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),ed(t,e,r,i,n);case 7:return Fe(t,e,e.pendingProps,n),e.child;case 8:return Fe(t,e,e.pendingProps.children,n),e.child;case 12:return Fe(t,e,e.pendingProps.children,n),e.child;case 10:e:{r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value;var a=e.type._context;if(re(Lo,a._currentValue),a._currentValue=s,o!==null)if(a=o.value,s=Qe(a,s)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,s):1073741823)|0,s===0){if(o.children===i.children&&!ze.current){e=Rt(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var u=l.firstContext;u!==null;){if(u.context===r&&(u.observedBits&s)!==0){a.tag===1&&(u=Yt(-1,n&-n),u.tag=2,Qt(a,u)),a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),Jm(a.return,n),l.lanes|=n;break}u=u.next}}else o=a.tag===10&&a.type===e.type?null:a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Fe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,s=e.pendingProps,r=s.children,mr(e,n),i=et(i,s.unstable_observedBits),r=r(i),e.flags|=1,Fe(t,e,r,n),e.child;case 14:return i=e.type,s=it(i,e.pendingProps),s=it(i.type,s),td(t,e,i,s,r,n);case 15:return fg(t,e,e.type,e.pendingProps,r,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,He(r)?(t=!0,po(e)):t=!1,mr(e,n),tg(e,r,i),Eu(e,r,i,n),ku(null,e,r,!0,t,n);case 19:return ud(t,e,n);case 23:return Nl(t,e,n);case 24:return Nl(t,e,n)}throw Error(T(156,e.tag))};function a1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(t,e,n,r){return new a1(t,e,n,r)}function eh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function l1(t){if(typeof t=="function")return eh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ea)return 11;if(t===_a)return 14}return 2}function ln(t,e){var n=t.alternate;return n===null?(n=Je(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")eh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ft:return wr(n.children,i,s,e);case im:o=8,i|=16;break;case gc:o=8,i|=1;break;case vi:return t=Je(12,n,e,i|8),t.elementType=vi,t.type=vi,t.lanes=s,t;case wi:return t=Je(13,n,e,i),t.type=wi,t.elementType=wi,t.lanes=s,t;case ko:return t=Je(19,n,e,i),t.elementType=ko,t.lanes=s,t;case Sc:return th(n,i,s,e);case Jl:return t=Je(24,n,e,i),t.elementType=Jl,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case yc:o=10;break e;case vc:o=9;break e;case Ea:o=11;break e;case _a:o=14;break e;case wc:o=16,r=null;break e;case Ec:o=22;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=Je(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function wr(t,e,n,r){return t=Je(7,t,r,e),t.lanes=n,t}function th(t,e,n,r){return t=Je(23,t,r,e),t.elementType=Sc,t.lanes=n,t}function Ol(t,e,n){return t=Je(6,t,null,e),t.lanes=n,t}function Dl(t,e,n){return e=Je(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function u1(t,e,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=ml(0),this.expirationTimes=ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ml(0),this.mutableSourceEagerHydrationData=null}function c1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_n,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Go(t,e,n,r){var i=e.current,s=We(),o=Jt(i);e:if(n){n=n._reactInternals;t:{if(Gn(n)!==n||n.tag!==1)throw Error(T(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(He(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(T(171))}if(n.tag===1){var l=n.type;if(He(l)){n=Wm(n,l,a);break e}}n=a}else n=on;return e.context===null?e.context=n:e.pendingContext=n,e=Yt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),Qt(i,e),Zt(i,o,s),o}function xl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nh(t,e){vd(t,e),(t=t.alternate)&&vd(t,e)}function h1(){return null}function rh(t,e,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new u1(t,e,n!=null&&n.hydrate===!0),e=Je(3,null,null,e===2?7:e===1?3:0),n.current=e,e.stateNode=n,Bc(e),t[br]=n.current,Vm(t.nodeType===8?t.parentNode:t),r)for(t=0;t<r.length;t++){e=r[t];var i=e._getVersion;i=i(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,i]:n.mutableSourceEagerHydrationData.push(e,i)}this._internalRoot=n}rh.prototype.render=function(t){Go(t,this._internalRoot,null,null)};rh.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;Go(null,t,null,function(){e[br]=null})};function vs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function f1(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new rh(t,0,e?{hydrate:!0}:void 0)}function Da(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof i=="function"){var a=i;i=function(){var u=xl(o);a.call(u)}}Go(e,o,t,i)}else{if(s=n._reactRootContainer=f1(n,r),o=s._internalRoot,typeof i=="function"){var l=i;i=function(){var u=xl(o);l.call(u)}}Sg(function(){Go(e,o,t,i)})}return xl(o)}wm=function(t){if(t.tag===13){var e=We();Zt(t,4,e),nh(t,4)}};Rc=function(t){if(t.tag===13){var e=We();Zt(t,67108864,e),nh(t,67108864)}};Em=function(t){if(t.tag===13){var e=We(),n=Jt(t);Zt(t,n,e),nh(t,n)}};_m=function(t,e){return e()};lu=function(t,e,n){switch(e){case"input":if(eu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ra(r);if(!i)throw Error(T(90));om(r),eu(r,i)}}}break;case"textarea":lm(t,n);break;case"select":e=n.value,e!=null&&hr(t,!!n.multiple,e,!1)}};Ic=_g;mm=function(t,e,n,r,i){var s=x;x|=4;try{return xn(98,t.bind(null,e,n,r,i))}finally{x=s,x===0&&(Br(),St())}};kc=function(){(x&49)===0&&(Jw(),dn())};gm=function(t,e){var n=x;x|=2;try{return t(e)}finally{x=n,x===0&&(Br(),St())}};function Ag(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vs(e))throw Error(T(200));return c1(t,e,null,n)}var d1={Events:[ms,ir,Ra,dm,pm,dn,{current:!1}]},ai={findFiberByHostInstance:Tn,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},p1={bundleType:ai.bundleType,version:ai.version,rendererPackageName:ai.rendererPackageName,rendererConfig:ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vm(t),t===null?null:t.stateNode},findFiberByHostInstance:ai.findFiberByHostInstance||h1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var to=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!to.isDisabled&&to.supportsFiber)try{Uc=to.inject(p1),An=to}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d1;nt.createPortal=Ag;nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):Error(T(268,Object.keys(t)));return t=vm(e),t=t===null?null:t.stateNode,t};nt.flushSync=function(t,e){var n=x;if((n&48)!==0)return t(e);x|=1;try{if(t)return xn(99,t.bind(null,e))}finally{x=n,St()}};nt.hydrate=function(t,e,n){if(!vs(e))throw Error(T(200));return Da(null,t,e,!0,n)};nt.render=function(t,e,n){if(!vs(e))throw Error(T(200));return Da(null,t,e,!1,n)};nt.unmountComponentAtNode=function(t){if(!vs(t))throw Error(T(40));return t._reactRootContainer?(Sg(function(){Da(null,null,t,!1,function(){t._reactRootContainer=null,t[br]=null})}),!0):!1};nt.unstable_batchedUpdates=_g;nt.unstable_createPortal=function(t,e){return Ag(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};nt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!vs(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return Da(t,e,n,!1,r)};nt.version="17.0.2";function Pg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pg)}catch(t){console.error(t)}}Pg(),em.exports=nt;var cR=em.exports;function qo(){return qo=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qo.apply(this,arguments)}var Cn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Cn||(Cn={}));var wd=function(t){return t},Ed="beforeunload",m1="hashchange",g1="popstate";function y1(t){t===void 0&&(t={});var e=t,n=e.window,r=n===void 0?document.defaultView:n,i=r.history;function s(){var _=un(r.location.hash.substr(1)),S=_.pathname,F=S===void 0?"/":S,ge=_.search,ee=ge===void 0?"":ge,K=_.hash,ut=K===void 0?"":K,Ce=i.state||{};return[Ce.idx,wd({pathname:F,search:ee,hash:ut,state:Ce.usr||null,key:Ce.key||"default"})]}var o=null;function a(){if(o)v.call(o),o=null;else{var _=Cn.Pop,S=s(),F=S[0],ge=S[1];if(v.length){if(F!=null){var ee=c-F;ee&&(o={action:_,location:ge,retry:function(){E(ee*-1)}},E(ee))}}else g(_)}}r.addEventListener(g1,a),r.addEventListener(m1,function(){var _=s(),S=_[1];Pi(S)!==Pi(m)&&a()});var l=Cn.Pop,u=s(),c=u[0],m=u[1],p=Sd(),v=Sd();c==null&&(c=0,i.replaceState(qo({},i.state,{idx:c}),""));function w(){var _=document.querySelector("base"),S="";if(_&&_.getAttribute("href")){var F=r.location.href,ge=F.indexOf("#");S=ge===-1?F:F.slice(0,ge)}return S}function I(_){return w()+"#"+(typeof _=="string"?_:Pi(_))}function f(_,S){return S===void 0&&(S=null),wd(qo({pathname:m.pathname,hash:"",search:""},typeof _=="string"?un(_):_,{state:S,key:v1()}))}function h(_,S){return[{usr:_.state,key:_.key,idx:S},I(_)]}function d(_,S,F){return!v.length||(v.call({action:_,location:S,retry:F}),!1)}function g(_){l=_;var S=s();c=S[0],m=S[1],p.call({action:l,location:m})}function y(_,S){var F=Cn.Push,ge=f(_,S);function ee(){y(_,S)}if(d(F,ge,ee)){var K=h(ge,c+1),ut=K[0],Ce=K[1];try{i.pushState(ut,"",Ce)}catch{r.location.assign(Ce)}g(F)}}function P(_,S){var F=Cn.Replace,ge=f(_,S);function ee(){P(_,S)}if(d(F,ge,ee)){var K=h(ge,c),ut=K[0],Ce=K[1];i.replaceState(ut,"",Ce),g(F)}}function E(_){i.go(_)}var O={get action(){return l},get location(){return m},createHref:I,push:y,replace:P,go:E,back:function(){E(-1)},forward:function(){E(1)},listen:function(S){return p.push(S)},block:function(S){var F=v.push(S);return v.length===1&&r.addEventListener(Ed,_d),function(){F(),v.length||r.removeEventListener(Ed,_d)}}};return O}function _d(t){t.preventDefault(),t.returnValue=""}function Sd(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(r){return r!==n})}},call:function(n){t.forEach(function(r){return r&&r(n)})}}}function v1(){return Math.random().toString(36).substr(2,8)}function Pi(t){var e=t.pathname,n=e===void 0?"/":e,r=t.search,i=r===void 0?"":r,s=t.hash,o=s===void 0?"":s;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function un(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}/**
 * React Router v6.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Et(t,e){if(!t)throw new Error(e)}const ih=j.exports.createContext(null),sh=j.exports.createContext(null),ws=j.exports.createContext({outlet:null,matches:[]});function w1(t){Et(!1)}function E1(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Cn.Pop,navigator:s,static:o=!1}=t;Es()&&Et(!1);let a=Mg(e),l=j.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=un(r));let{pathname:u="/",search:c="",hash:m="",state:p=null,key:v="default"}=r,w=j.exports.useMemo(()=>{let I=Lg(u,a);return I==null?null:{pathname:I,search:c,hash:m,state:p,key:v}},[a,u,c,m,p,v]);return w==null?null:j.exports.createElement(ih.Provider,{value:l},j.exports.createElement(sh.Provider,{children:n,value:{location:w,navigationType:i}}))}function hR(t){let{children:e,location:n}=t;return T1(bu(e),n)}function _1(t){Es()||Et(!1);let{basename:e,navigator:n}=j.exports.useContext(ih),{hash:r,pathname:i,search:s}=Og(t),o=i;if(e!=="/"){let a=B1(t),l=a!=null&&a.endsWith("/");o=i==="/"?e+(l?"/":""):tn([e,i])}return n.createHref({pathname:o,search:s,hash:r})}function Es(){return j.exports.useContext(sh)!=null}function xa(){return Es()||Et(!1),j.exports.useContext(sh).location}function S1(){Es()||Et(!1);let{basename:t,navigator:e}=j.exports.useContext(ih),{matches:n}=j.exports.useContext(ws),{pathname:r}=xa(),i=JSON.stringify(n.map(a=>a.pathnameBase)),s=j.exports.useRef(!1);return j.exports.useEffect(()=>{s.current=!0}),j.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=xg(a,JSON.parse(i),r);t!=="/"&&(u.pathname=tn([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state)},[t,e,i,r])}function fR(){let{matches:t}=j.exports.useContext(ws),e=t[t.length-1];return e?e.params:{}}function Og(t){let{matches:e}=j.exports.useContext(ws),{pathname:n}=xa(),r=JSON.stringify(e.map(i=>i.pathnameBase));return j.exports.useMemo(()=>xg(t,JSON.parse(r),n),[t,r,n])}function T1(t,e){Es()||Et(!1);let{matches:n}=j.exports.useContext(ws),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=xa(),a;if(e){var l;let p=typeof e=="string"?un(e):e;s==="/"||((l=p.pathname)==null?void 0:l.startsWith(s))||Et(!1),a=p}else a=o;let u=a.pathname||"/",c=s==="/"?u:u.slice(s.length)||"/",m=I1(t,{pathname:c});return M1(m&&m.map(p=>Object.assign({},p,{params:Object.assign({},i,p.params),pathname:tn([s,p.pathname]),pathnameBase:p.pathnameBase==="/"?s:tn([s,p.pathnameBase])})),n)}function bu(t){let e=[];return j.exports.Children.forEach(t,n=>{if(!j.exports.isValidElement(n))return;if(n.type===j.exports.Fragment){e.push.apply(e,bu(n.props.children));return}n.type!==w1&&Et(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=bu(n.props.children)),e.push(r)}),e}function I1(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?un(e):e,i=Lg(r.pathname||"/",n);if(i==null)return null;let s=Dg(t);k1(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=L1(s[a],i);return o}function Dg(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||Et(!1),o.relativePath=o.relativePath.slice(r.length));let a=tn([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&Et(!1),Dg(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:D1(a,i.index),routesMeta:l})}),e}function k1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:x1(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const C1=/^:\w+$/,R1=3,N1=2,A1=1,P1=10,O1=-2,Td=t=>t==="*";function D1(t,e){let n=t.split("/"),r=n.length;return n.some(Td)&&(r+=O1),e&&(r+=N1),n.filter(i=>!Td(i)).reduce((i,s)=>i+(C1.test(s)?R1:s===""?A1:P1),r)}function x1(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function L1(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=$1({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let m=a.route;s.push({params:r,pathname:tn([i,c.pathname]),pathnameBase:Mg(tn([i,c.pathnameBase])),route:m}),c.pathnameBase!=="/"&&(i=tn([i,c.pathnameBase]))}return s}function M1(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>j.exports.createElement(ws.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function $1(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=U1(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,m)=>{if(c==="*"){let p=a[m]||"";o=s.slice(0,s.length-p.length).replace(/(.)\/+$/,"$1")}return u[c]=b1(a[m]||""),u},{}),pathname:s,pathnameBase:o,pattern:t}}function U1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function b1(t,e){try{return decodeURIComponent(t)}catch{return t}}function F1(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?un(t):t;return{pathname:n?n.startsWith("/")?n:V1(n,e):e,search:j1(r),hash:z1(i)}}function V1(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function xg(t,e,n){let r=typeof t=="string"?un(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let a=e.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}s=a>=0?e[a]:"/"}let o=F1(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function B1(t){return t===""||t.pathname===""?"/":typeof t=="string"?un(t).pathname:t.pathname}function Lg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const tn=t=>t.join("/").replace(/\/\/+/g,"/"),Mg=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),j1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,z1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;/**
 * React Router DOM v6.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fu(){return Fu=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fu.apply(this,arguments)}function H1(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const W1=["onClick","reloadDocument","replace","state","target","to"];function dR(t){let{basename:e,children:n,window:r}=t,i=j.exports.useRef();i.current==null&&(i.current=y1({window:r}));let s=i.current,[o,a]=j.exports.useState({action:s.action,location:s.location});return j.exports.useLayoutEffect(()=>s.listen(a),[s]),j.exports.createElement(E1,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}function K1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const pR=j.exports.forwardRef(function(e,n){let{onClick:r,reloadDocument:i,replace:s=!1,state:o,target:a,to:l}=e,u=H1(e,W1),c=_1(l),m=G1(l,{replace:s,state:o,target:a});function p(v){r&&r(v),!v.defaultPrevented&&!i&&m(v)}return j.exports.createElement("a",Fu({},u,{href:c,onClick:p,ref:n,target:a}))});function G1(t,e){let{target:n,replace:r,state:i}=e===void 0?{}:e,s=S1(),o=xa(),a=Og(t);return j.exports.useCallback(l=>{if(l.button===0&&(!n||n==="_self")&&!K1(l)){l.preventDefault();let u=!!r||Pi(o)===Pi(a);s(t,{replace:u,state:i})}},[o,s,a,r,i,n,t])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},q1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ug={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,m=(s&3)<<4|a>>4;let p=(a&15)<<2|u>>6,v=u&63;l||(v=64,o||(p=64)),r.push(n[c],n[m],n[p],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($g(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):q1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||m==null)throw Error();const p=s<<2|a>>4;if(r.push(p),u!==64){const v=a<<4&240|u>>2;if(r.push(v),m!==64){const w=u<<6&192|m;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},X1=function(t){const e=$g(t);return Ug.encodeByteArray(e,!0)},bg=function(t){return X1(t).replace(/\./g,"")},Y1=function(t){try{return Ug.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fg(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pe())}function Vg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Bg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function J1(){return pe().indexOf("Electron/")>=0}function jg(){const t=pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Z1(){return pe().indexOf("MSAppHost/")>=0}function eE(){return typeof indexedDB=="object"}function tE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE="FirebaseError";class pn extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=nE,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_s.prototype.create)}}class _s{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?rE(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pn(i,a,r)}}function rE(t,e){return t.replace(iE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const iE=/\{\$([^}]+)}/g;function sE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Id(s)&&Id(o)){if(!Xo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Id(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function pi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function mi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function oE(t,e){const n=new aE(t,e);return n.subscribe.bind(n)}class aE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");lE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ll),i.error===void 0&&(i.error=Ll),i.complete===void 0&&(i.complete=Ll);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ll(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t,e){return new Promise((n,r)=>{t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var s;r(`${e}: ${(s=i.target.error)===null||s===void 0?void 0:s.message}`)}})}class kd{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new zg(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new Hg(this._db.createObjectStore(e,n))}close(){this._db.close()}}class zg{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new Hg(this._transaction.objectStore(e))}}class Hg{constructor(e){this._store=e}index(e){return new Cd(this._store.index(e))}createIndex(e,n,r){return new Cd(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return gi(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return gi(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return gi(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return gi(e,"Error clearing IndexedDB object store")}}class Cd{constructor(e){this._index=e}get(e){const n=this._index.get(e);return gi(n,"Error reading from IndexedDB")}}function uE(t,e,n){return new Promise((r,i)=>{try{const s=indexedDB.open(t,e);s.onsuccess=o=>{r(new kd(o.target.result))},s.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},s.onupgradeneeded=o=>{n(new kd(s.result),o.oldVersion,o.newVersion,new zg(s.transaction))}}catch(s){i(`Error opening indexedDB: ${s.message}`)}})}class cn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Q1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fE(e))try{this.getOrInitializeService({instanceIdentifier:En})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=En){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=En){return this.instances.has(e)}getOptions(e=En){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=En){return this.component?this.component.multipleInstances?e:En:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hE(t){return t===En?void 0:t}function fE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const pE={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},mE=W.INFO,gE={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},yE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=gE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oh{constructor(e){this.name=e,this._logLevel=mE,this._logHandler=yE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vu="@firebase/app",Rd="0.7.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah=new oh("@firebase/app"),EE="@firebase/app-compat",_E="@firebase/analytics-compat",SE="@firebase/analytics",TE="@firebase/app-check-compat",IE="@firebase/app-check",kE="@firebase/auth",CE="@firebase/auth-compat",RE="@firebase/database",NE="@firebase/database-compat",AE="@firebase/functions",PE="@firebase/functions-compat",OE="@firebase/installations",DE="@firebase/installations-compat",xE="@firebase/messaging",LE="@firebase/messaging-compat",ME="@firebase/performance",$E="@firebase/performance-compat",UE="@firebase/remote-config",bE="@firebase/remote-config-compat",FE="@firebase/storage",VE="@firebase/storage-compat",BE="@firebase/firestore",jE="@firebase/firestore-compat",zE="firebase",HE="9.7.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="[DEFAULT]",WE={[Vu]:"fire-core",[EE]:"fire-core-compat",[SE]:"fire-analytics",[_E]:"fire-analytics-compat",[IE]:"fire-app-check",[TE]:"fire-app-check-compat",[kE]:"fire-auth",[CE]:"fire-auth-compat",[RE]:"fire-rtdb",[NE]:"fire-rtdb-compat",[AE]:"fire-fn",[PE]:"fire-fn-compat",[OE]:"fire-iid",[DE]:"fire-iid-compat",[xE]:"fire-fcm",[LE]:"fire-fcm-compat",[ME]:"fire-perf",[$E]:"fire-perf-compat",[UE]:"fire-rc",[bE]:"fire-rc-compat",[FE]:"fire-gcs",[VE]:"fire-gcs-compat",[BE]:"fire-fst",[jE]:"fire-fst-compat","fire-js":"fire-js",[zE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=new Map,Bu=new Map;function KE(t,e){try{t.container.addComponent(e)}catch(n){ah.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mn(t){const e=t.name;if(Bu.has(e))return ah.debug(`There were multiple attempts to register component ${e}.`),!1;Bu.set(e,t);for(const n of Yo.values())KE(n,t);return!0}function La(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},$n=new _s("app","Firebase",GE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=HE;function mR(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Wg,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw $n.create("bad-app-name",{appName:String(r)});const i=Yo.get(r);if(i){if(Xo(t,i.options)&&Xo(n,i.config))return i;throw $n.create("duplicate-app",{appName:r})}const s=new dE(r);for(const a of Bu.values())s.addComponent(a);const o=new qE(t,n,s);return Yo.set(r,o),o}function lh(t=Wg){const e=Yo.get(t);if(!e)throw $n.create("no-app",{appName:t});return e}function gt(t,e,n){var r;let i=(r=WE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ah.warn(a.join(" "));return}Mn(new cn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE="firebase-heartbeat-database",YE=1,Yi="firebase-heartbeat-store";let Ml=null;function Kg(){return Ml||(Ml=uE(XE,YE,(t,e)=>{switch(e){case 0:t.createObjectStore(Yi)}}).catch(t=>{throw $n.create("storage-open",{originalErrorMessage:t.message})})),Ml}async function QE(t){try{return(await Kg()).transaction(Yi).objectStore(Yi).get(Gg(t))}catch(e){throw $n.create("storage-get",{originalErrorMessage:e.message})}}async function Nd(t,e){try{const r=(await Kg()).transaction(Yi,"readwrite");return await r.objectStore(Yi).put(e,Gg(t)),r.complete}catch(n){throw $n.create("storage-set",{originalErrorMessage:n.message})}}function Gg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE=1024,ZE=30*24*60*60*1e3;class e_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new n_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ad();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=ZE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ad(),{heartbeatsToSend:n,unsentEntries:r}=t_(this._heartbeatsCache.heartbeats),i=bg(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ad(){return new Date().toISOString().substring(0,10)}function t_(t,e=JE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Pd(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class n_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eE()?tE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await QE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Pd(t){return bg(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(t){Mn(new cn("platform-logger",e=>new vE(e),"PRIVATE")),Mn(new cn("heartbeat",e=>new e_(e),"PRIVATE")),gt(Vu,Rd,t),gt(Vu,Rd,"esm2017"),gt("fire-js","")}r_("");function uh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function qg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const i_=qg,Xg=new _s("auth","Firebase",qg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od=new oh("@firebase/auth");function Eo(t,...e){Od.logLevel<=W.ERROR&&Od.error(`Auth (${jr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t,...e){throw ch(t,...e)}function yt(t,...e){return ch(t,...e)}function s_(t,e,n){const r=Object.assign(Object.assign({},i_()),{[e]:n});return new _s("auth","Firebase",r).create(e,{appName:t.name})}function ch(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Xg.create(t,...e)}function M(t,e,...n){if(!t)throw ch(e,...n)}function Nt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Eo(e),new Error(e)}function xt(t,e){t||Nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd=new Map;function At(t){xt(t instanceof Function,"Expected a class definition");let e=Dd.get(t);return e?(xt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Dd.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(t,e){const n=La(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Xo(s,e!=null?e:{}))return i;lt(i,"already-initialized")}return n.initialize({options:e})}function a_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(At);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function l_(){return xd()==="http:"||xd()==="https:"}function xd(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(l_()||Vg()||"connection"in navigator)?navigator.onLine:!0}function c_(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n){this.shortDelay=e,this.longDelay=n,xt(n>e,"Short delay should be less than long delay!"),this.isMobile=Fg()||Bg()}get(){return u_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(t,e){xt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_=new Ts(3e4,6e4);function Is(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ks(t,e,n,r,i={}){return Qg(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ss(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Yg.fetch()(Jg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Qg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},h_),e);try{const i=new d_(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw $l(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $l(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw $l(t,"email-already-in-use",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw s_(t,c,u);lt(t,c)}}catch(i){if(i instanceof pn)throw i;lt(t,"network-request-failed")}}async function Cs(t,e,n,r,i={}){const s=await ks(t,e,n,r,i);return"mfaPendingCredential"in s&&lt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Jg(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?hh(t.config,i):`${t.config.apiScheme}://${i}`}class d_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yt(this.auth,"network-request-failed")),f_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $l(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=yt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p_(t,e){return ks(t,"POST","/v1/accounts:delete",e)}async function m_(t,e){return ks(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function g_(t,e=!1){const n=Ge(t),r=await n.getIdToken(e),i=fh(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Oi(Ul(i.auth_time)),issuedAtTime:Oi(Ul(i.iat)),expirationTime:Oi(Ul(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ul(t){return Number(t)*1e3}function fh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Eo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Y1(n);return i?JSON.parse(i):(Eo("Failed to decode base64 JWT payload"),null)}catch(i){return Eo("Caught error parsing JWT payload as JSON",i),null}}function y_(t){const e=fh(t);return M(e,"internal-error"),M(typeof e.exp!="undefined","internal-error"),M(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pn&&v_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function v_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oi(this.lastLoginAt),this.creationTime=Oi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Qi(t,m_(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?S_(s.providerUserInfo):[],a=__(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Zg(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,m)}async function E_(t){const e=Ge(t);await Qo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function __(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function S_(t){return t.map(e=>{var{providerId:n}=e,r=uh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_(t,e){const n=await Qg(t,{},async()=>{const r=Ss({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Jg(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Yg.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken!="undefined","internal-error"),M(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):y_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await T_(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ji;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ji,this.toJSON())}_performRefresh(){return Nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t,e){M(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Pn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=uh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new w_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Zg(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Qi(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return g_(this,e)}reload(){return E_(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Qi(this,p_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,f=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:y,isAnonymous:P,providerData:E,stsTokenManager:O}=n;M(g&&O,e,"internal-error");const _=Ji.fromJSON(this.name,O);M(typeof g=="string",e,"internal-error"),Ut(m,e.name),Ut(p,e.name),M(typeof y=="boolean",e,"internal-error"),M(typeof P=="boolean",e,"internal-error"),Ut(v,e.name),Ut(w,e.name),Ut(I,e.name),Ut(f,e.name),Ut(h,e.name),Ut(d,e.name);const S=new Pn({uid:g,auth:e,email:p,emailVerified:y,displayName:m,isAnonymous:P,photoURL:w,phoneNumber:v,tenantId:I,stsTokenManager:_,createdAt:h,lastLoginAt:d});return E&&Array.isArray(E)&&(S.providerData=E.map(F=>Object.assign({},F))),f&&(S._redirectEventId=f),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ji;i.updateFromServerResponse(n);const s=new Pn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Qo(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ey.type="NONE";const Ld=ey;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t,e,n){return`firebase:${t}:${e}:${n}`}class Er{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=_o(this.userKey,i.apiKey,s),this.fullPersistenceKey=_o("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Er(At(Ld),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||At(Ld);const o=_o(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const m=Pn._fromJSON(e,c);u!==s&&(a=m),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Er(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Er(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ry(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ty(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sy(e))return"Blackberry";if(oy(e))return"Webos";if(dh(e))return"Safari";if((e.includes("chrome/")||ny(e))&&!e.includes("edge/"))return"Chrome";if(iy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ty(t=pe()){return/firefox\//i.test(t)}function dh(t=pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ny(t=pe()){return/crios\//i.test(t)}function ry(t=pe()){return/iemobile/i.test(t)}function iy(t=pe()){return/android/i.test(t)}function sy(t=pe()){return/blackberry/i.test(t)}function oy(t=pe()){return/webos/i.test(t)}function Ma(t=pe()){return/iphone|ipad|ipod/i.test(t)}function I_(t=pe()){var e;return Ma(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function k_(){return jg()&&document.documentMode===10}function ay(t=pe()){return Ma(t)||iy(t)||oy(t)||sy(t)||/windows phone/i.test(t)||ry(t)}function C_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(t,e=[]){let n;switch(t){case"Browser":n=Md(pe());break;case"Worker":n=`${Md(pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${jr}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $d(this),this.idTokenSubscription=new $d(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=At(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Er.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qo(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=c_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ge(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(At(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _s("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&At(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Er.create(this,[At(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return M(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ly(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function $a(t){return Ge(t)}class $d{constructor(e){this.auth=e,this.observer=null,this.addObserver=oE(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nt("not implemented")}_getIdTokenResponse(e){return Nt("not implemented")}_linkToIdToken(e,n){return Nt("not implemented")}_getReauthenticationResolver(e){return Nt("not implemented")}}async function N_(t,e){return ks(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A_(t,e){return Cs(t,"POST","/v1/accounts:signInWithPassword",Is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P_(t,e){return Cs(t,"POST","/v1/accounts:signInWithEmailLink",Is(t,e))}async function O_(t,e){return Cs(t,"POST","/v1/accounts:signInWithEmailLink",Is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi extends ph{constructor(e,n,r,i=null){super("password",r);this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Zi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Zi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return A_(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return P_(e,{email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return N_(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return O_(e,{idToken:n,email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _r(t,e){return Cs(t,"POST","/v1/accounts:signInWithIdp",Is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="http://localhost";class Un extends ph{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Un(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=uh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Un(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _r(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_r(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_r(e,n)}buildRequest(){const e={requestUri:D_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ss(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function L_(t){const e=pi(mi(t)).link,n=e?pi(mi(e)).deep_link_id:null,r=pi(mi(t)).deep_link_id;return(r?pi(mi(r)).link:null)||r||n||e||t}class mh{constructor(e){var n,r,i,s,o,a;const l=pi(mi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,m=x_((i=l.mode)!==null&&i!==void 0?i:null);M(u&&c&&m,"argument-error"),this.apiKey=u,this.operation=m,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=L_(e);try{return new mh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.providerId=zr.PROVIDER_ID}static credential(e,n){return Zi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=mh.parseLink(n);return M(r,"argument-error"),Zi._fromEmailAndCode(e,r.code,r.tenantId)}}zr.PROVIDER_ID="password";zr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends uy{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Rs{constructor(){super("facebook.com")}static credential(e){return Un._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vt.credential(e.oauthAccessToken)}catch{return null}}}Vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Rs{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Un._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bt.credential(n,r)}catch{return null}}}Bt.GOOGLE_SIGN_IN_METHOD="google.com";Bt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Rs{constructor(){super("github.com")}static credential(e){return Un._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch{return null}}}jt.GITHUB_SIGN_IN_METHOD="github.com";jt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Rs{constructor(){super("twitter.com")}static credential(e,n){return Un._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zt.credential(n,r)}catch{return null}}}zt.TWITTER_SIGN_IN_METHOD="twitter.com";zt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M_(t,e){return Cs(t,"POST","/v1/accounts:signUp",Is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Pn._fromIdTokenResponse(e,r,i),o=Ud(r);return new bn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ud(r);return new bn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ud(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends pn{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,Object.setPrototypeOf(this,Jo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Jo(e,n,r,i)}}function cy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Jo._fromErrorAndOperation(t,s,e,r):s})}async function $_(t,e,n=!1){const r=await Qi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U_(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Qi(t,cy(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=fh(s.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(t.uid===a,r,"user-mismatch"),bn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&lt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hy(t,e,n=!1){const r="signIn",i=await cy(t,r,e),s=await bn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function b_(t,e){return hy($a(t),e)}async function gR(t,e,n){const r=$a(t),i=await M_(r,{returnSecureToken:!0,email:e,password:n}),s=await bn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function yR(t,e,n){return b_(Ge(t),zr.credential(e,n))}function vR(t,e,n,r){return Ge(t).onAuthStateChanged(e,n,r)}function wR(t){return Ge(t).signOut()}const Zo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zo,"1"),this.storage.removeItem(Zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(){const t=pe();return dh(t)||Ma(t)}const V_=1e3,B_=10;class dy extends fy{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=F_()&&C_(),this.fallbackToPolling=ay(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);k_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,B_):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},V_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}dy.type="LOCAL";const j_=dy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py extends fy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}py.type="SESSION";const my=py;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ua(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await z_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ua.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=gh("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const p=m;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return window}function W_(t){vt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(){return typeof vt().WorkerGlobalScope!="undefined"&&typeof vt().importScripts=="function"}async function K_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function G_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function q_(){return gy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy="firebaseLocalStorageDb",X_=1,ea="firebaseLocalStorage",vy="fbase_key";class Ns{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ba(t,e){return t.transaction([ea],e?"readwrite":"readonly").objectStore(ea)}function Y_(){const t=indexedDB.deleteDatabase(yy);return new Ns(t).toPromise()}function zu(){const t=indexedDB.open(yy,X_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ea,{keyPath:vy})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ea)?e(r):(r.close(),await Y_(),e(await zu()))})})}async function bd(t,e,n){const r=ba(t,!0).put({[vy]:e,value:n});return new Ns(r).toPromise()}async function Q_(t,e){const n=ba(t,!1).get(e),r=await new Ns(n).toPromise();return r===void 0?null:r.value}function Fd(t,e){const n=ba(t,!0).delete(e);return new Ns(n).toPromise()}const J_=800,Z_=3;class wy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Z_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ua._getInstance(q_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await K_(),!this.activeServiceWorker)return;this.sender=new H_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||G_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zu();return await bd(e,Zo,"1"),await Fd(e,Zo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Q_(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ba(i,!1).getAll();return new Ns(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),J_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wy.type="LOCAL";const eS=wy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function nS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=yt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",tS().appendChild(r)})}function rS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ts(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(t,e){return e?At(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh extends ph{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return _r(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _r(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _r(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sS(t){return hy(t.auth,new yh(t),t.bypassAuthState)}function oS(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),U_(n,new yh(t),t.bypassAuthState)}async function aS(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),$_(n,new yh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sS;case"linkViaPopup":case"linkViaRedirect":return aS;case"reauthViaPopup":case"reauthViaRedirect":return oS;default:lt(this.auth,"internal-error")}}resolve(e){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=new Ts(2e3,1e4);class ar extends Ey{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,ar.currentPopupAction&&ar.currentPopupAction.cancel(),ar.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){xt(this.filter.length===1,"Popup operations only handle one event");const e=gh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ar.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,lS.get())};e()}}ar.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS="pendingRedirect",bl=new Map;class cS extends Ey{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=bl.get(this.auth._key());if(!e){try{const r=await hS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bl.set(this.auth._key(),e)}return this.bypassAuthState||bl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hS(t,e){const n=dS(e),r=fS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function fS(t){return At(t._redirectPersistence)}function dS(t){return _o(uS,t.config.apiKey,t.name)}async function pS(t,e,n=!1){const r=$a(t),i=iS(r,e),o=await new cS(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=10*60*1e3;class gS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!_y(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vd(e))}saveEventToCache(e){this.cachedEventUids.add(Vd(e)),this.lastProcessedEventTime=Date.now()}}function Vd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _y({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _y(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vS(t,e={}){return ks(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ES=/^https?/;async function _S(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vS(t);for(const n of e)try{if(SS(n))return}catch{}lt(t,"unauthorized-domain")}function SS(t){const e=ju(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ES.test(n))return!1;if(wS.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS=new Ts(3e4,6e4);function Bd(){const t=vt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function IS(t){return new Promise((e,n)=>{var r,i,s;function o(){Bd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bd(),n(yt(t,"network-request-failed"))},timeout:TS.get()})}if(!((i=(r=vt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=vt().gapi)===null||s===void 0)&&s.load)o();else{const a=rS("iframefcb");return vt()[a]=()=>{gapi.load?o():n(yt(t,"network-request-failed"))},nS(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw So=null,e})}let So=null;function kS(t){return So=So||IS(t),So}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS=new Ts(5e3,15e3),RS="__/auth/iframe",NS="emulator/auth/iframe",AS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OS(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hh(e,NS):`https://${t.config.authDomain}/${RS}`,r={apiKey:e.apiKey,appName:t.name,v:jr},i=PS.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ss(r).slice(1)}`}async function DS(t){const e=await kS(t),n=vt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:OS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AS,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=yt(t,"network-request-failed"),a=vt().setTimeout(()=>{s(o)},CS.get());function l(){vt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LS=500,MS=600,$S="_blank",US="http://localhost";class jd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bS(t,e,n,r=LS,i=MS){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},xS),{width:r.toString(),height:i.toString(),top:s,left:o}),u=pe().toLowerCase();n&&(a=ny(u)?$S:n),ty(u)&&(e=e||US,l.scrollbars="yes");const c=Object.entries(l).reduce((p,[v,w])=>`${p}${v}=${w},`,"");if(I_(u)&&a!=="_self")return FS(e||"",a),new jd(null);const m=window.open(e||"",a,c);M(m,t,"popup-blocked");try{m.focus()}catch{}return new jd(m)}function FS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS="__/auth/handler",BS="emulator/auth/handler";function zd(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:jr,eventId:i};if(e instanceof uy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Rs){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${jS(t)}?${Ss(a).slice(1)}`}function jS({config:t}){return t.emulator?hh(t,BS):`https://${t.authDomain}/${VS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="webStorageSupport";class zS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=my,this._completeRedirectFn=pS}async _openPopup(e,n,r,i){var s;xt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=zd(e,n,r,ju(),i);return bS(e,o,gh())}async _openRedirect(e,n,r,i){return await this._originValidation(e),W_(zd(e,n,r,ju(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(xt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await DS(e),r=new gS(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fl,{type:Fl},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Fl];o!==void 0&&n(!!o),lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_S(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ay()||dh()||Ma()}}const HS=zS;var Hd="@firebase/auth",Wd="0.19.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function GS(t){Mn(new cn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{M(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),M(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ly(t)},c=new R_(a,l,u);return a_(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Mn(new cn("auth-internal",e=>{const n=$a(e.getProvider("auth").getImmediate());return(r=>new WS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gt(Hd,Wd,KS(t)),gt(Hd,Wd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(t=lh()){const e=La(t,"auth");return e.isInitialized()?e.getImmediate():o_(t,{popupRedirectResolver:HS,persistence:[eS,j_,my]})}GS("Browser");var qS="firebase",XS="9.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gt(qS,XS,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy="firebasestorage.googleapis.com",YS="storageBucket",QS=2*60*1e3,JS=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends pn{constructor(e,n){super(Vl(e),`Firebase Storage: ${n} (${Vl(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Tt.prototype)}_codeEquals(e){return Vl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Vl(t){return"storage/"+t}function ZS(){const t="An unknown error occurred, please check the error payload for server response.";return new Tt("unknown",t)}function eT(){return new Tt("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function tT(){return new Tt("canceled","User canceled the upload/download.")}function nT(t){return new Tt("invalid-url","Invalid URL '"+t+"'.")}function rT(t){return new Tt("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function Kd(t){return new Tt("invalid-argument",t)}function Ty(){return new Tt("app-deleted","The Firebase app was deleted.")}function iT(t){return new Tt("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=at.makeFromUrl(e,n)}catch{return new at(e,"")}if(r.path==="")return r;throw rT(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(y){y.path_=decodeURIComponent(y.path)}const c="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",v=new RegExp(`^https?://${m}/${c}/b/${i}/o${p}`,"i"),w={bucket:1,path:3},I=n===Sy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,f="([^?#]*)",h=new RegExp(`^https?://${I}/${i}/${f}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:v,indices:w,postModify:u},{regex:h,indices:{bucket:1,path:2},postModify:u}];for(let y=0;y<g.length;y++){const P=g[y],E=P.regex.exec(e);if(E){const O=E[P.indices.bucket];let _=E[P.indices.path];_||(_=""),r=new at(O,_),P.postModify(r);break}}if(r==null)throw nT(e);return r}}class sT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...f){u||(u=!0,e.apply(null,f))}function m(f){i=setTimeout(()=>{i=null,t(v,l())},f)}function p(){s&&clearTimeout(s)}function v(f,...h){if(u){p();return}if(f){p(),c.call(null,f,...h);return}if(l()||o){p(),c.call(null,f,...h);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,m(g)}let w=!1;function I(f){w||(w=!0,p(),!u&&(i!==null?(f||(a=2),clearTimeout(i),m(0)):f||(a=1)))}return m(0),s=setTimeout(()=>{o=!0,I(!0)},n),I}function aT(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(t){return t!==void 0}function Gd(t,e,n,r){if(r<e)throw Kd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Kd(`Invalid value for '${t}'. Expected ${n} or less.`)}function uT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ta;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ta||(ta={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e,n,r,i,s,o,a,l,u,c,m){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,v)=>{this.resolve_=p,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new no(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ta.NO_ERROR,l=s.getStatus();if(!a||this.isRetryStatusCode_(l)){const c=s.getErrorCode()===ta.ABORT;r(!1,new no(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new no(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());lT(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=ZS();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Ty():tT();o(l)}else{const l=eT();o(l)}};this.canceled_?n(!1,new no(!1,null,!0)):this.backoffId_=oT(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&aT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class no{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function hT(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function fT(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function dT(t,e){e&&(t["X-Firebase-GMPID"]=e)}function pT(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function mT(t,e,n,r,i,s){const o=uT(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return dT(l,e),hT(l,n),fT(l,s),pT(l,r),new cT(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function yT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n){this._service=e,n instanceof at?this._location=n:this._location=at.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new na(e,n)}get root(){const e=new at(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return yT(this._location.path)}get storage(){return this._service}get parent(){const e=gT(this._location.path);if(e===null)return null;const n=new at(this._location.bucket,e);return new na(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw iT(e)}}function qd(t,e){const n=e==null?void 0:e[YS];return n==null?null:at.makeFromBucketSpec(n,t)}class vT{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Sy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=QS,this._maxUploadRetryTime=JS,this._requests=new Set,i!=null?this._bucket=at.makeFromBucketSpec(i,this._host):this._bucket=qd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=at.makeFromBucketSpec(this._url,e):this._bucket=qd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Gd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Gd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new na(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new sT(Ty());{const s=mT(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Xd="@firebase/storage",Yd="0.9.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="storage";function _R(t=lh(),e){return t=Ge(t),La(t,Iy).getImmediate({identifier:e})}function wT(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new vT(n,r,i,e,jr)}function ET(){Mn(new cn(Iy,wT,"PUBLIC").setMultipleInstances(!0)),gt(Xd,Yd,""),gt(Xd,Yd,"esm2017")}ET();var _T=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},N,vh=vh||{},$=_T||self;function ra(){}function Hu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function As(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ST(t){return Object.prototype.hasOwnProperty.call(t,Bl)&&t[Bl]||(t[Bl]=++TT)}var Bl="closure_uid_"+(1e9*Math.random()>>>0),TT=0;function IT(t,e,n){return t.call.apply(t.bind,arguments)}function kT(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Se(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Se=IT:Se=kT,Se.apply(null,arguments)}function ro(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ke(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function mn(){this.s=this.s,this.o=this.o}var CT=0,RT={};mn.prototype.s=!1;mn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),CT!=0)){var t=ST(this);delete RT[t]}};mn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ky=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Cy=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function NT(t){e:{var e=wI;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Qd(t){return Array.prototype.concat.apply([],arguments)}function wh(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ia(t){return/^[\s\xa0]*$/.test(t)}var Jd=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function De(t,e){return t.indexOf(e)!=-1}function jl(t,e){return t<e?-1:t>e?1:0}var xe;e:{var Zd=$.navigator;if(Zd){var ep=Zd.userAgent;if(ep){xe=ep;break e}}xe=""}function Eh(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Ry(t){const e={};for(const n in t)e[n]=t[n];return e}var tp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ny(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<tp.length;s++)n=tp[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function _h(t){return _h[" "](t),t}_h[" "]=ra;function AT(t){var e=DT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var PT=De(xe,"Opera"),Ar=De(xe,"Trident")||De(xe,"MSIE"),Ay=De(xe,"Edge"),Wu=Ay||Ar,Py=De(xe,"Gecko")&&!(De(xe.toLowerCase(),"webkit")&&!De(xe,"Edge"))&&!(De(xe,"Trident")||De(xe,"MSIE"))&&!De(xe,"Edge"),OT=De(xe.toLowerCase(),"webkit")&&!De(xe,"Edge");function Oy(){var t=$.document;return t?t.documentMode:void 0}var sa;e:{var zl="",Hl=function(){var t=xe;if(Py)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ay)return/Edge\/([\d\.]+)/.exec(t);if(Ar)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(OT)return/WebKit\/(\S+)/.exec(t);if(PT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Hl&&(zl=Hl?Hl[1]:""),Ar){var Wl=Oy();if(Wl!=null&&Wl>parseFloat(zl)){sa=String(Wl);break e}}sa=zl}var DT={};function xT(){return AT(function(){let t=0;const e=Jd(String(sa)).split("."),n=Jd("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=jl(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||jl(i[2].length==0,s[2].length==0)||jl(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Ku;if($.document&&Ar){var np=Oy();Ku=np||parseInt(sa,10)||void 0}else Ku=void 0;var LT=Ku,MT=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",ra,e),$.removeEventListener("test",ra,e)}catch{}return t}();function Pe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};function es(t,e){if(Pe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Py){e:{try{_h(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:$T[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&es.Z.h.call(this)}}ke(es,Pe);var $T={2:"touch",3:"pen",4:"mouse"};es.prototype.h=function(){es.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ps="closure_listenable_"+(1e6*Math.random()|0),UT=0;function bT(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++UT,this.ca=this.fa=!1}function Fa(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Va(t){this.src=t,this.g={},this.h=0}Va.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=qu(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new bT(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function Gu(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=ky(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Fa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function qu(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Sh="closure_lm_"+(1e6*Math.random()|0),Kl={};function Dy(t,e,n,r,i){if(r&&r.once)return Ly(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Dy(t,e[s],n,r,i);return null}return n=kh(n),t&&t[Ps]?t.N(e,n,As(r)?!!r.capture:!!r,i):xy(t,e,n,!1,r,i)}function xy(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=As(i)?!!i.capture:!!i,a=Ih(t);if(a||(t[Sh]=a=new Va(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=FT(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)MT||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent($y(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function FT(){function t(n){return e.call(t.src,t.listener,n)}var e=VT;return t}function Ly(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ly(t,e[s],n,r,i);return null}return n=kh(n),t&&t[Ps]?t.O(e,n,As(r)?!!r.capture:!!r,i):xy(t,e,n,!0,r,i)}function My(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)My(t,e[s],n,r,i);else r=As(r)?!!r.capture:!!r,n=kh(n),t&&t[Ps]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=qu(s,n,r,i),-1<n&&(Fa(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ih(t))&&(e=t.g[e.toString()],t=-1,e&&(t=qu(e,n,r,i)),(n=-1<t?e[t]:null)&&Th(n))}function Th(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Ps])Gu(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent($y(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ih(e))?(Gu(n,t),n.h==0&&(n.src=null,e[Sh]=null)):Fa(t)}}}function $y(t){return t in Kl?Kl[t]:Kl[t]="on"+t}function VT(t,e){if(t.ca)t=!0;else{e=new es(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Th(t),t=n.call(r,e)}return t}function Ih(t){return t=t[Sh],t instanceof Va?t:null}var Gl="__closure_events_fn_"+(1e9*Math.random()>>>0);function kh(t){return typeof t=="function"?t:(t[Gl]||(t[Gl]=function(e){return t.handleEvent(e)}),t[Gl])}function me(){mn.call(this),this.i=new Va(this),this.P=this,this.I=null}ke(me,mn);me.prototype[Ps]=!0;me.prototype.removeEventListener=function(t,e,n,r){My(this,t,e,n,r)};function Te(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Pe(e,t);else if(e instanceof Pe)e.target=e.target||t;else{var i=e;e=new Pe(r,t),Ny(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=io(o,r,!0,e)&&i}if(o=e.g=t,i=io(o,r,!0,e)&&i,i=io(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=io(o,r,!1,e)&&i}me.prototype.M=function(){if(me.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Fa(n[r]);delete t.g[e],t.h--}}this.I=null};me.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};me.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function io(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Gu(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ch=$.JSON.stringify;function BT(){var t=by;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class jT{constructor(){this.h=this.g=null}add(e,n){const r=Uy.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Uy=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new zT,t=>t.reset());class zT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function HT(t){$.setTimeout(()=>{throw t},0)}function Rh(t,e){Xu||WT(),Yu||(Xu(),Yu=!0),by.add(t,e)}var Xu;function WT(){var t=$.Promise.resolve(void 0);Xu=function(){t.then(KT)}}var Yu=!1,by=new jT;function KT(){for(var t;t=BT();){try{t.h.call(t.g)}catch(n){HT(n)}var e=Uy;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Yu=!1}function Ba(t,e){me.call(this),this.h=t||1,this.g=e||$,this.j=Se(this.kb,this),this.l=Date.now()}ke(Ba,me);N=Ba.prototype;N.da=!1;N.S=null;N.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Te(this,"tick"),this.da&&(Nh(this),this.start()))}};N.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Nh(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}N.M=function(){Ba.Z.M.call(this),Nh(this),delete this.g};function Ah(t,e,n){if(typeof t=="function")n&&(t=Se(t,n));else if(t&&typeof t.handleEvent=="function")t=Se(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function Fy(t){t.g=Ah(()=>{t.g=null,t.i&&(t.i=!1,Fy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class GT extends mn{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Fy(this)}M(){super.M(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ts(t){mn.call(this),this.h=t,this.g={}}ke(ts,mn);var rp=[];function Vy(t,e,n,r){Array.isArray(n)||(n&&(rp[0]=n.toString()),n=rp);for(var i=0;i<n.length;i++){var s=Dy(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function By(t){Eh(t.g,function(e,n){this.g.hasOwnProperty(n)&&Th(e)},t),t.g={}}ts.prototype.M=function(){ts.Z.M.call(this),By(this)};ts.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ja(){this.g=!0}ja.prototype.Aa=function(){this.g=!1};function qT(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var m=c.split("_");o=2<=m.length&&m[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function XT(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function lr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+QT(t,n)+(r?" "+r:"")})}function YT(t,e){t.info(function(){return"TIMEOUT: "+e})}ja.prototype.info=function(){};function QT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ch(n)}catch{return e}}var Xn={},ip=null;function za(){return ip=ip||new me}Xn.Ma="serverreachability";function jy(t){Pe.call(this,Xn.Ma,t)}ke(jy,Pe);function ns(t){const e=za();Te(e,new jy(e,t))}Xn.STAT_EVENT="statevent";function zy(t,e){Pe.call(this,Xn.STAT_EVENT,t),this.stat=e}ke(zy,Pe);function Le(t){const e=za();Te(e,new zy(e,t))}Xn.Na="timingevent";function Hy(t,e){Pe.call(this,Xn.Na,t),this.size=e}ke(Hy,Pe);function Os(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var Ha={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Wy={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ph(){}Ph.prototype.h=null;function sp(t){return t.h||(t.h=t.i())}function Ky(){}var Ds={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Oh(){Pe.call(this,"d")}ke(Oh,Pe);function Dh(){Pe.call(this,"c")}ke(Dh,Pe);var Qu;function Wa(){}ke(Wa,Ph);Wa.prototype.g=function(){return new XMLHttpRequest};Wa.prototype.i=function(){return{}};Qu=new Wa;function xs(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new ts(this),this.P=JT,t=Wu?125:void 0,this.W=new Ba(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Gy}function Gy(){this.i=null,this.g="",this.h=!1}var JT=45e3,Ju={},oa={};N=xs.prototype;N.setTimeout=function(t){this.P=t};function Zu(t,e,n){t.K=1,t.v=Ga(Lt(e)),t.s=n,t.U=!0,qy(t,null)}function qy(t,e){t.F=Date.now(),Ls(t),t.A=Lt(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),tv(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Gy,t.g=_v(t.l,n?e:null,!t.s),0<t.O&&(t.L=new GT(Se(t.Ia,t,t.g),t.O)),Vy(t.V,t.g,"readystatechange",t.gb),e=t.H?Ry(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ns(1),qT(t.j,t.u,t.A,t.m,t.X,t.s)}N.gb=function(t){t=t.target;const e=this.L;e&&Pt(t)==3?e.l():this.Ia(t)};N.Ia=function(t){try{if(t==this.g)e:{const c=Pt(this.g);var e=this.g.Da();const m=this.g.ba();if(!(3>c)&&(c!=3||Wu||this.g&&(this.h.h||this.g.ga()||up(this.g)))){this.I||c!=4||e==7||(e==8||0>=m?ns(3):ns(2)),Ka(this);var n=this.g.ba();this.N=n;t:if(Xy(this)){var r=up(this.g);t="";var i=r.length,s=Pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Rn(this),Di(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,XT(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ia(a)){var u=a;break t}}u=null}if(n=u)lr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ec(this,n);else{this.i=!1,this.o=3,Le(12),Rn(this),Di(this);break e}}this.U?(Yy(this,c,o),Wu&&this.i&&c==3&&(Vy(this.V,this.W,"tick",this.fb),this.W.start())):(lr(this.j,this.m,o,null),ec(this,o)),c==4&&Rn(this),this.i&&!this.I&&(c==4?yv(this.l,this):(this.i=!1,Ls(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Le(12)):(this.o=0,Le(13)),Rn(this),Di(this)}}}catch{}finally{}};function Xy(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Yy(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=ZT(t,n),i==oa){e==4&&(t.o=4,Le(14),r=!1),lr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ju){t.o=4,Le(15),lr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else lr(t.j,t.m,i,null),ec(t,i);Xy(t)&&i!=oa&&i!=Ju&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Le(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Bh(e),e.L=!0,Le(11))):(lr(t.j,t.m,n,"[Invalid Chunked Response]"),Rn(t),Di(t))}N.fb=function(){if(this.g){var t=Pt(this.g),e=this.g.ga();this.C<e.length&&(Ka(this),Yy(this,t,e),this.i&&t!=4&&Ls(this))}};function ZT(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?oa:(n=Number(e.substring(n,r)),isNaN(n)?Ju:(r+=1,r+n>e.length?oa:(e=e.substr(r,n),t.C=r+n,e)))}N.cancel=function(){this.I=!0,Rn(this)};function Ls(t){t.Y=Date.now()+t.P,Qy(t,t.P)}function Qy(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Os(Se(t.eb,t),e)}function Ka(t){t.B&&($.clearTimeout(t.B),t.B=null)}N.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(YT(this.j,this.A),this.K!=2&&(ns(3),Le(17)),Rn(this),this.o=2,Di(this)):Qy(this,this.Y-t)};function Di(t){t.l.G==0||t.I||yv(t.l,t)}function Rn(t){Ka(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Nh(t.W),By(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ec(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||tc(n.i,t))){if(n.I=t.N,!t.J&&tc(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ca(n),Ya(n);else break e;Vh(n),Le(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Os(Se(n.ab,n),6e3));if(1>=iv(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Nn(n,11)}else if((t.J||n.g==t)&&ca(n),!ia(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const m=u[4];m!=null&&(n.za=m,n.h.info("SVER="+n.za));const p=u[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const v=t.g;if(v){const w=v.g?v.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=r.i;!s.g&&(De(w,"spdy")||De(w,"quic")||De(w,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Mh(s,s.h),s.h=null))}if(r.D){const I=v.g?v.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.sa=I,J(r.F,r.D,I))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Ev(r,r.H?r.la:null,r.W),o.J){sv(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Ka(a),Ls(a)),r.g=o}else mv(r);0<n.l.length&&Qa(n)}else u[0]!="stop"&&u[0]!="close"||Nn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Nn(n,7):Fh(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}ns(4)}catch{}}function eI(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Hu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function xh(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Hu(t)||typeof t=="string")Cy(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Hu(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=eI(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Hr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Hr)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}N=Hr.prototype;N.R=function(){Lh(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};N.T=function(){return Lh(this),this.g.concat()};function Lh(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Fn(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Fn(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}N.get=function(t,e){return Fn(this.h,t)?this.h[t]:e};N.set=function(t,e){Fn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};N.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function Fn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Jy=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function tI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Vn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Vn){this.g=e!==void 0?e:t.g,aa(this,t.j),this.s=t.s,la(this,t.i),ua(this,t.m),this.l=t.l,e=t.h;var n=new rs;n.i=e.i,e.g&&(n.g=new Hr(e.g),n.h=e.h),op(this,n),this.o=t.o}else t&&(n=String(t).match(Jy))?(this.g=!!e,aa(this,n[1]||"",!0),this.s=xi(n[2]||""),la(this,n[3]||"",!0),ua(this,n[4]),this.l=xi(n[5]||"",!0),op(this,n[6]||"",!0),this.o=xi(n[7]||"")):(this.g=!!e,this.h=new rs(null,this.g))}Vn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(yi(e,ap,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(yi(e,ap,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(yi(n,n.charAt(0)=="/"?oI:sI,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",yi(n,lI)),t.join("")};function Lt(t){return new Vn(t)}function aa(t,e,n){t.j=n?xi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function la(t,e,n){t.i=n?xi(e,!0):e}function ua(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function op(t,e,n){e instanceof rs?(t.h=e,uI(t.h,t.g)):(n||(e=yi(e,aI)),t.h=new rs(e,t.g))}function J(t,e,n){t.h.set(e,n)}function Ga(t){return J(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nI(t){return t instanceof Vn?Lt(t):new Vn(t,void 0)}function rI(t,e,n,r){var i=new Vn(null,void 0);return t&&aa(i,t),e&&la(i,e),n&&ua(i,n),r&&(i.l=r),i}function xi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function yi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,iI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function iI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ap=/[#\/\?@]/g,sI=/[#\?:]/g,oI=/[#\?]/g,aI=/[#\?@]/g,lI=/#/g;function rs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function gn(t){t.g||(t.g=new Hr,t.h=0,t.i&&tI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=rs.prototype;N.add=function(t,e){gn(this),this.i=null,t=Wr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Zy(t,e){gn(t),e=Wr(t,e),Fn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Fn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Lh(t)))}function ev(t,e){return gn(t),e=Wr(t,e),Fn(t.g.h,e)}N.forEach=function(t,e){gn(this),this.g.forEach(function(n,r){Cy(n,function(i){t.call(e,i,r,this)},this)},this)};N.T=function(){gn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};N.R=function(t){gn(this);var e=[];if(typeof t=="string")ev(this,t)&&(e=Qd(e,this.g.get(Wr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Qd(e,t[n])}return e};N.set=function(t,e){return gn(this),this.i=null,t=Wr(this,t),ev(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function tv(t,e,n){Zy(t,e),0<n.length&&(t.i=null,t.g.set(Wr(t,e),wh(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Wr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function uI(t,e){e&&!t.j&&(gn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Zy(this,r),tv(this,i,n))},t)),t.j=e}var cI=class{constructor(t,e){this.h=t,this.g=e}};function nv(t){this.l=t||hI,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ea&&$.g.Ea()&&$.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hI=10;function rv(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function iv(t){return t.h?1:t.g?t.g.size:0}function tc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Mh(t,e){t.g?t.g.add(e):t.h=e}function sv(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}nv.prototype.cancel=function(){if(this.i=ov(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ov(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return wh(t.i)}function $h(){}$h.prototype.stringify=function(t){return $.JSON.stringify(t,void 0)};$h.prototype.parse=function(t){return $.JSON.parse(t,void 0)};function fI(){this.g=new $h}function dI(t,e,n){const r=n||"";try{xh(t,function(i,s){let o=i;As(i)&&(o=Ch(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function pI(t,e){const n=new ja;if($.Image){const r=new Image;r.onload=ro(so,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ro(so,n,r,"TestLoadImage: error",!1,e),r.onabort=ro(so,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ro(so,n,r,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function so(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ms(t){this.l=t.$b||null,this.j=t.ib||!1}ke(Ms,Ph);Ms.prototype.g=function(){return new qa(this.l,this.j)};Ms.prototype.i=function(t){return function(){return t}}({});function qa(t,e){me.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Uh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ke(qa,me);var Uh=0;N=qa.prototype;N.open=function(t,e){if(this.readyState!=Uh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,is(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||$).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$s(this)),this.readyState=Uh};N.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,is(this)),this.g&&(this.readyState=3,is(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof $.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;av(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function av(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}N.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?$s(this):is(this),this.readyState==3&&av(this)}};N.Ua=function(t){this.g&&(this.response=this.responseText=t,$s(this))};N.Ta=function(t){this.g&&(this.response=t,$s(this))};N.ha=function(){this.g&&$s(this)};function $s(t){t.readyState=4,t.l=null,t.j=null,t.A=null,is(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function is(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(qa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var mI=$.JSON.parse;function le(t){me.call(this),this.headers=new Hr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=lv,this.K=this.L=!1}ke(le,me);var lv="",gI=/^https?$/i,yI=["POST","PUT"];N=le.prototype;N.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Qu.g(),this.C=this.u?sp(this.u):sp(Qu),this.g.onreadystatechange=Se(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){lp(this,s);return}t=n||"";const i=new Hr(this.headers);r&&xh(r,function(s,o){i.set(o,s)}),r=NT(i.T()),n=$.FormData&&t instanceof $.FormData,!(0<=ky(yI,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{hv(this),0<this.B&&((this.K=vI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Se(this.pa,this)):this.A=Ah(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){lp(this,s)}};function vI(t){return Ar&&xT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function wI(t){return t.toLowerCase()=="content-type"}N.pa=function(){typeof vh!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Te(this,"timeout"),this.abort(8))};function lp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,uv(t),Xa(t)}function uv(t){t.D||(t.D=!0,Te(t,"complete"),Te(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Te(this,"complete"),Te(this,"abort"),Xa(this))};N.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xa(this,!0)),le.Z.M.call(this)};N.Fa=function(){this.s||(this.F||this.v||this.l?cv(this):this.cb())};N.cb=function(){cv(this)};function cv(t){if(t.h&&typeof vh!="undefined"&&(!t.C[1]||Pt(t)!=4||t.ba()!=2)){if(t.v&&Pt(t)==4)Ah(t.Fa,0,t);else if(Te(t,"readystatechange"),Pt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(Jy)[1]||null;if(!i&&$.self&&$.self.location){var s=$.self.location.protocol;i=s.substr(0,s.length-1)}r=!gI.test(i?i.toLowerCase():"")}n=r}if(n)Te(t,"complete"),Te(t,"success");else{t.m=6;try{var o=2<Pt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",uv(t)}}finally{Xa(t)}}}}function Xa(t,e){if(t.g){hv(t);const n=t.g,r=t.C[0]?ra:null;t.g=null,t.C=null,e||Te(t,"ready");try{n.onreadystatechange=r}catch{}}}function hv(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}function Pt(t){return t.g?t.g.readyState:0}N.ba=function(){try{return 2<Pt(this)?this.g.status:-1}catch{return-1}};N.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),mI(e)}};function up(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case lv:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}N.Da=function(){return this.m};N.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function EI(t){let e="";return Eh(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function bh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=EI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):J(t,e,n))}function li(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function fv(t){this.za=0,this.l=[],this.h=new ja,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=li("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=li("baseRetryDelayMs",5e3,t),this.$a=li("retryDelaySeedMs",1e4,t),this.Ya=li("forwardChannelMaxRetries",2,t),this.ra=li("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new nv(t&&t.concurrentRequestLimit),this.Ca=new fI,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}N=fv.prototype;N.ma=8;N.G=1;function Fh(t){if(dv(t),t.G==3){var e=t.V++,n=Lt(t.F);J(n,"SID",t.J),J(n,"RID",e),J(n,"TYPE","terminate"),Us(t,n),e=new xs(t,t.h,e,void 0),e.K=2,e.v=Ga(Lt(n)),n=!1,$.navigator&&$.navigator.sendBeacon&&(n=$.navigator.sendBeacon(e.v.toString(),"")),!n&&$.Image&&(new Image().src=e.v,n=!0),n||(e.g=_v(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ls(e)}wv(t)}N.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Ya(t){t.g&&(Bh(t),t.g.cancel(),t.g=null)}function dv(t){Ya(t),t.u&&($.clearTimeout(t.u),t.u=null),ca(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function ql(t,e){t.l.push(new cI(t.Za++,e)),t.G==3&&Qa(t)}function Qa(t){rv(t.i)||t.m||(t.m=!0,Rh(t.Ha,t),t.C=0)}function _I(t,e){return iv(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Os(Se(t.Ha,t,e),vv(t,t.C)),t.C++,!0)}N.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new xs(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=Ry(s),Ny(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=pv(this,i,e),n=Lt(this.F),J(n,"RID",t),J(n,"CVER",22),this.D&&J(n,"X-HTTP-Session-Id",this.D),Us(this,n),this.o&&s&&bh(n,this.o,s),Mh(this.i,i),this.Ra&&J(n,"TYPE","init"),this.ja?(J(n,"$req",e),J(n,"SID","null"),i.$=!0,Zu(i,n,null)):Zu(i,n,e),this.G=2}}else this.G==3&&(t?cp(this,t):this.l.length==0||rv(this.i)||cp(this))};function cp(t,e){var n;e?n=e.m:n=t.V++;const r=Lt(t.F);J(r,"SID",t.J),J(r,"RID",n),J(r,"AID",t.U),Us(t,r),t.o&&t.s&&bh(r,t.o,t.s),n=new xs(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=pv(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Mh(t.i,n),Zu(n,r,e)}function Us(t,e){t.j&&xh({},function(n,r){J(e,r,n)})}function pv(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Se(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{dI(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function mv(t){t.g||t.u||(t.Y=1,Rh(t.Ga,t),t.A=0)}function Vh(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Os(Se(t.Ga,t),vv(t,t.A)),t.A++,!0)}N.Ga=function(){if(this.u=null,gv(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Os(Se(this.bb,this),t)}};N.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Le(10),Ya(this),gv(this))};function Bh(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function gv(t){t.g=new xs(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Lt(t.oa);J(e,"RID","rpc"),J(e,"SID",t.J),J(e,"CI",t.N?"0":"1"),J(e,"AID",t.U),Us(t,e),J(e,"TYPE","xmlhttp"),t.o&&t.s&&bh(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ga(Lt(e)),n.s=null,n.U=!0,qy(n,t)}N.ab=function(){this.v!=null&&(this.v=null,Ya(this),Vh(this),Le(19))};function ca(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function yv(t,e){var n=null;if(t.g==e){ca(t),Bh(t),t.g=null;var r=2}else if(tc(t.i,e))n=e.D,sv(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=za(),Te(r,new Hy(r,n,e,i)),Qa(t)}else mv(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&_I(t,e)||r==2&&Vh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Nn(t,5);break;case 4:Nn(t,10);break;case 3:Nn(t,6);break;default:Nn(t,2)}}}function vv(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Nn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Se(t.jb,t);n||(n=new Vn("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||aa(n,"https"),Ga(n)),pI(n.toString(),r)}else Le(2);t.G=0,t.j&&t.j.va(e),wv(t),dv(t)}N.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Le(2)):(this.h.info("Failed to ping google.com"),Le(1))};function wv(t){t.G=0,t.I=-1,t.j&&((ov(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,wh(t.l),t.l.length=0),t.j.ua())}function Ev(t,e,n){let r=nI(n);if(r.i!="")e&&la(r,e+"."+r.i),ua(r,r.m);else{const i=$.location;r=rI(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Eh(t.aa,function(i,s){J(r,s,i)}),e=t.D,n=t.sa,e&&n&&J(r,e,n),J(r,"VER",t.ma),Us(t,r),r}function _v(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new le(new Ms({ib:!0})):new le(t.qa),e.L=t.H,e}function Sv(){}N=Sv.prototype;N.xa=function(){};N.wa=function(){};N.va=function(){};N.ua=function(){};N.Oa=function(){};function ha(){if(Ar&&!(10<=Number(LT)))throw Error("Environmental error: no available transport.")}ha.prototype.g=function(t,e){return new qe(t,e)};function qe(t,e){me.call(this),this.g=new fv(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ia(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ia(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Kr(this)}ke(qe,me);qe.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Rh(Se(t.hb,t,e))),Le(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Ev(t,null,t.W),Qa(t)};qe.prototype.close=function(){Fh(this.g)};qe.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,ql(this.g,e)}else this.v?(e={},e.__data__=Ch(t),ql(this.g,e)):ql(this.g,t)};qe.prototype.M=function(){this.g.j=null,delete this.j,Fh(this.g),delete this.g,qe.Z.M.call(this)};function Tv(t){Oh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ke(Tv,Oh);function Iv(){Dh.call(this),this.status=1}ke(Iv,Dh);function Kr(t){this.g=t}ke(Kr,Sv);Kr.prototype.xa=function(){Te(this.g,"a")};Kr.prototype.wa=function(t){Te(this.g,new Tv(t))};Kr.prototype.va=function(t){Te(this.g,new Iv(t))};Kr.prototype.ua=function(){Te(this.g,"b")};ha.prototype.createWebChannel=ha.prototype.g;qe.prototype.send=qe.prototype.u;qe.prototype.open=qe.prototype.m;qe.prototype.close=qe.prototype.close;Ha.NO_ERROR=0;Ha.TIMEOUT=8;Ha.HTTP_ERROR=6;Wy.COMPLETE="complete";Ky.EventType=Ds;Ds.OPEN="a";Ds.CLOSE="b";Ds.ERROR="c";Ds.MESSAGE="d";me.prototype.listen=me.prototype.N;le.prototype.listenOnce=le.prototype.O;le.prototype.getLastError=le.prototype.La;le.prototype.getLastErrorCode=le.prototype.Da;le.prototype.getStatus=le.prototype.ba;le.prototype.getResponseJson=le.prototype.Qa;le.prototype.getResponseText=le.prototype.ga;le.prototype.send=le.prototype.ea;var SI=function(){return new ha},TI=function(){return za()},Xl=Ha,II=Wy,kI=Xn,hp={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},CI=Ms,oo=Ky,RI=le;const fp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ve.UNAUTHENTICATED=new Ve(null),Ve.GOOGLE_CREDENTIALS=new Ve("google-credentials-uid"),Ve.FIRST_PARTY=new Ve("first-party-uid"),Ve.MOCK_USER=new Ve("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gr="9.6.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new oh("@firebase/firestore");function dp(){return Bn.logLevel}function D(t,...e){if(Bn.logLevel<=W.DEBUG){const n=e.map(jh);Bn.debug(`Firestore (${Gr}): ${t}`,...n)}}function jn(t,...e){if(Bn.logLevel<=W.ERROR){const n=e.map(jh);Bn.error(`Firestore (${Gr}): ${t}`,...n)}}function pp(t,...e){if(Bn.logLevel<=W.WARN){const n=e.map(jh);Bn.warn(`Firestore (${Gr}): ${t}`,...n)}}function jh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t="Unexpected state"){const e=`FIRESTORE (${Gr}) INTERNAL ASSERTION FAILED: `+t;throw jn(e),new Error(e)}function ce(t,e){t||z()}function Q(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class AI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ve.UNAUTHENTICATED))}shutdown(){}}class PI{constructor(e){this.t=e,this.currentUser=Ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new On;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new On,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new On)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string"),new NI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new Ve(e)}}class OI{constructor(e,n,r){this.type="FirstParty",this.user=Ve.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class DI{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new OI(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LI{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string"),this.p=n.token,new xI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.I(r),this.T=r=>n.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kv.A=-1;class Cv{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=MI(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function q(t,e){return t<e?-1:t>e?1:0}function Pr(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new $e(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new $e(0,0))}static max(){return new ae(new $e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Rv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n,r){n===void 0?n=0:n>e.length&&z(),r===void 0?r=e.length-n:r>e.length-n&&z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ss.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ss?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ne extends ss{construct(e,n,r){return new ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ne(n)}static emptyPath(){return new ne([])}}const $I=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends ss{construct(e,n,r){return new Be(e,n,r)}static isValidIdentifier(e){return $I.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Be(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new U(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new U(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new U(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e){this.fields=e,e.sort(Be.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Pr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Mt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Mt.EMPTY_BYTE_STRING=new Mt("");const UI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zn(t){if(ce(!!t),typeof t=="string"){let e=0;const n=UI.exec(t);if(ce(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:we(t.seconds),nanos:we(t.nanos)}}function we(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function os(t){return typeof t=="string"?Mt.fromBase64String(t):Mt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function fa(t){const e=zn(t.mapValue.fields.__local_write_time__.timestampValue);return new $e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class as{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new as("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof as&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t){return t==null}function da(t){return t===0&&1/t==-1/0}function VI(t){return typeof t=="number"&&Number.isInteger(t)&&!da(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.path=e}static fromPath(e){return new b(ne.fromString(e))}static fromName(e){return new b(ne.fromString(e).popFirst(5))}static empty(){return new b(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new b(new ne(e.slice()))}}function Or(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bI(t)?4:BI(t)?9:10:z()}function _t(t,e){if(t===e)return!0;const n=Or(t);if(n!==Or(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fa(t).isEqual(fa(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=zn(r.timestampValue),o=zn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return os(r.bytesValue).isEqual(os(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return we(r.geoPointValue.latitude)===we(i.geoPointValue.latitude)&&we(r.geoPointValue.longitude)===we(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return we(r.integerValue)===we(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=we(r.doubleValue),o=we(i.doubleValue);return s===o?da(s)===da(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Pr(t.arrayValue.values||[],e.arrayValue.values||[],_t);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(mp(s)!==mp(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!_t(s[a],o[a])))return!1;return!0}(t,e);default:return z()}}function ls(t,e){return(t.values||[]).find(n=>_t(n,e))!==void 0}function Dr(t,e){if(t===e)return 0;const n=Or(t),r=Or(e);if(n!==r)return q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return q(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=we(i.integerValue||i.doubleValue),a=we(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return gp(t.timestampValue,e.timestampValue);case 4:return gp(fa(t),fa(e));case 5:return q(t.stringValue,e.stringValue);case 6:return function(i,s){const o=os(i),a=os(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=q(o[l],a[l]);if(u!==0)return u}return q(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=q(we(i.latitude),we(s.latitude));return o!==0?o:q(we(i.longitude),we(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Dr(o[l],a[l]);if(u)return u}return q(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const m=q(a[c],u[c]);if(m!==0)return m;const p=Dr(o[a[c]],l[u[c]]);if(p!==0)return p}return q(a.length,u.length)}(t.mapValue,e.mapValue);default:throw z()}}function gp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return q(t,e);const n=zn(t),r=zn(e),i=q(n.seconds,r.seconds);return i!==0?i:q(n.nanos,r.nanos)}function Sr(t){return rc(t)}function rc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=zn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?os(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,b.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=rc(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${rc(r.fields[a])}`;return s+"}"}(t.mapValue):z();var e,n}function ic(t){return!!t&&"integerValue"in t}function zh(t){return!!t&&"arrayValue"in t}function To(t){return!!t&&"mapValue"in t}function Li(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Li(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Li(t.arrayValue.values[n]);return e}return Object.assign({},t)}function BI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!To(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Li(n)}setAll(e){let n=Be.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Li(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());To(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _t(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];To(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){bs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ct(Li(this.value))}}function Nv(t){const e=[];return bs(t.fields,(n,r)=>{const i=new Be([n]);if(To(r)){const s=Nv(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new nc(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new st(e,0,ae.min(),ae.min(),ct.empty(),0)}static newFoundDocument(e,n,r){return new st(e,1,n,ae.min(),r,0)}static newNoDocument(e,n){return new st(e,2,n,ae.min(),ct.empty(),0)}static newUnknownDocument(e,n){return new st(e,3,n,ae.min(),ct.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function jI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ae.fromTimestamp(r===1e9?new $e(n+1,0):new $e(n,r));return new xr(i,b.empty(),e)}function zI(t){return new xr(t.readTime,t.key,-1)}class xr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new xr(ae.min(),b.empty(),-1)}static max(){return new xr(ae.max(),b.empty(),-1)}}function HI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=b.comparator(t.documentKey,e.documentKey),n!==0?n:q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.P=null}}function yp(t,e=null,n=[],r=[],i=null,s=null,o=null){return new WI(t,e,n,r,i,s,o)}function Hh(t){const e=Q(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Sr(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Fs(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Sr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Sr(r)).join(",")),e.P=n}return e.P}function KI(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Sr(r.value)}`;var r}).join(", ")}]`),Fs(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Sr(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Sr(n)).join(",")),`Target(${e})`}function Wh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!ek(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!_t(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wp(t.startAt,e.startAt)&&wp(t.endAt,e.endAt)}class je extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,r):new GI(e,n,r):n==="array-contains"?new YI(e,r):n==="in"?new QI(e,r):n==="not-in"?new JI(e,r):n==="array-contains-any"?new ZI(e,r):new je(e,n,r)}static V(e,n,r){return n==="in"?new qI(e,r):new XI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(Dr(n,this.value)):n!==null&&Or(this.value)===Or(n)&&this.v(Dr(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class GI extends je{constructor(e,n,r){super(e,n,r),this.key=b.fromName(r.referenceValue)}matches(e){const n=b.comparator(e.key,this.key);return this.v(n)}}class qI extends je{constructor(e,n){super(e,"in",n),this.keys=Av("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class XI extends je{constructor(e,n){super(e,"not-in",n),this.keys=Av("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Av(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>b.fromName(r.referenceValue))}class YI extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zh(n)&&ls(n.arrayValue,this.value)}}class QI extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ls(this.value.arrayValue,n)}}class JI extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(ls(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ls(this.value.arrayValue,n)}}class ZI extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ls(this.value.arrayValue,r))}}class pa{constructor(e,n){this.position=e,this.inclusive=n}}class Mi{constructor(e,n="asc"){this.field=e,this.dir=n}}function ek(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function vp(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=b.comparator(b.fromName(o.referenceValue),n.key):r=Dr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function wp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_t(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.D=null,this.C=null,this.startAt,this.endAt}}function tk(t,e,n,r,i,s,o,a){return new Ja(t,e,n,r,i,s,o,a)}function nk(t){return new Ja(t)}function rk(t){return!Fs(t.limit)&&t.limitType==="F"}function ik(t){return!Fs(t.limit)&&t.limitType==="L"}function sk(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ok(t){for(const e of t.filters)if(e.S())return e.field;return null}function ak(t){return t.collectionGroup!==null}function us(t){const e=Q(t);if(e.D===null){e.D=[];const n=ok(e),r=sk(e);if(n!==null&&r===null)n.isKeyField()||e.D.push(new Mi(n)),e.D.push(new Mi(Be.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.D.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Mi(Be.keyField(),s))}}}return e.D}function ma(t){const e=Q(t);if(!e.C)if(e.limitType==="F")e.C=yp(e.path,e.collectionGroup,us(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of us(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Mi(s.field,o))}const r=e.endAt?new pa(e.endAt.position,!e.endAt.inclusive):null,i=e.startAt?new pa(e.startAt.position,!e.startAt.inclusive):null;e.C=yp(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.C}function lk(t,e,n){return new Ja(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Pv(t,e){return Wh(ma(t),ma(e))&&t.limitType===e.limitType}function Ov(t){return`${Hh(ma(t))}|lt:${t.limitType}`}function Ep(t){return`Query(target=${KI(ma(t))}; limitType=${t.limitType})`}function Dv(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):b.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=vp(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,us(n),r)||n.endAt&&!function(i,s,o){const a=vp(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,us(n),r))}(t,e)}function uk(t){return(e,n)=>{let r=!1;for(const i of us(t)){const s=ck(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ck(t,e,n){const r=t.field.isKeyField()?b.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Dr(a,l):z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:da(e)?"-0":e}}function Lv(t){return{integerValue:""+t}}function hk(t,e){return VI(e)?Lv(e):xv(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(){this._=void 0}}function fk(t,e,n){return t instanceof ga?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof cs?$v(t,e):t instanceof hs?Uv(t,e):function(r,i){const s=Mv(r,i),o=_p(s)+_p(r.k);return ic(s)&&ic(r.k)?Lv(o):xv(r.M,o)}(t,e)}function dk(t,e,n){return t instanceof cs?$v(t,e):t instanceof hs?Uv(t,e):n}function Mv(t,e){return t instanceof ya?ic(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ga extends Za{}class cs extends Za{constructor(e){super(),this.elements=e}}function $v(t,e){const n=bv(e);for(const r of t.elements)n.some(i=>_t(i,r))||n.push(r);return{arrayValue:{values:n}}}class hs extends Za{constructor(e){super(),this.elements=e}}function Uv(t,e){let n=bv(e);for(const r of t.elements)n=n.filter(i=>!_t(i,r));return{arrayValue:{values:n}}}class ya extends Za{constructor(e,n){super(),this.M=e,this.k=n}}function _p(t){return we(t.integerValue||t.doubleValue)}function bv(t){return zh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function pk(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof cs&&r instanceof cs||n instanceof hs&&r instanceof hs?Pr(n.elements,r.elements,_t):n instanceof ya&&r instanceof ya?_t(n.k,r.k):n instanceof ga&&r instanceof ga}(t.transform,e.transform)}class mk{constructor(e,n){this.version=e,this.transformResults=n}}class Tr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tr}static exists(e){return new Tr(void 0,e)}static updateTime(e){return new Tr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Io(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class el{}function gk(t,e,n){t instanceof tl?function(r,i,s){const o=r.value.clone(),a=Ip(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Vs?function(r,i,s){if(!Io(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Ip(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Fv(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function sc(t,e,n){t instanceof tl?function(r,i,s){if(!Io(r.precondition,i))return;const o=r.value.clone(),a=kp(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(Tp(i),o).setHasLocalMutations()}(t,e,n):t instanceof Vs?function(r,i,s){if(!Io(r.precondition,i))return;const o=kp(r.fieldTransforms,s,i),a=i.data;a.setAll(Fv(r)),a.setAll(o),i.convertToFoundDocument(Tp(i),a).setHasLocalMutations()}(t,e,n):function(r,i){Io(r.precondition,i)&&i.convertToNoDocument(ae.min())}(t,e)}function yk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Mv(r.transform,i||null);s!=null&&(n==null&&(n=ct.empty()),n.set(r.field,s))}return n||null}function Sp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Pr(n,r,(i,s)=>pk(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Tp(t){return t.isFoundDocument()?t.version:ae.min()}class tl extends el{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class Vs extends el{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function Fv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ip(t,e,n){const r=new Map;ce(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,dk(o,a,n[i]))}return r}function kp(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,fk(s,o,e))}return r}class vk extends el{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class wk extends el{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe,B;function Ek(t){switch(t){default:return z();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function _k(t){if(t===void 0)return jn("GRPC error has no .code"),k.UNKNOWN;switch(t){case oe.OK:return k.OK;case oe.CANCELLED:return k.CANCELLED;case oe.UNKNOWN:return k.UNKNOWN;case oe.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case oe.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case oe.INTERNAL:return k.INTERNAL;case oe.UNAVAILABLE:return k.UNAVAILABLE;case oe.UNAUTHENTICATED:return k.UNAUTHENTICATED;case oe.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case oe.NOT_FOUND:return k.NOT_FOUND;case oe.ALREADY_EXISTS:return k.ALREADY_EXISTS;case oe.PERMISSION_DENIED:return k.PERMISSION_DENIED;case oe.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case oe.ABORTED:return k.ABORTED;case oe.OUT_OF_RANGE:return k.OUT_OF_RANGE;case oe.UNIMPLEMENTED:return k.UNIMPLEMENTED;case oe.DATA_LOSS:return k.DATA_LOSS;default:return z()}}(B=oe||(oe={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){bs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Rv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n){this.comparator=e,this.root=n||Ee.EMPTY}insert(e,n){return new Xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ee.BLACK,null,null))}remove(e){return new Xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ee.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ao(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ao(this.root,e,this.comparator,!1)}getReverseIterator(){return new ao(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ao(this.root,e,this.comparator,!0)}}class ao{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ee{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Ee.RED,this.left=i!=null?i:Ee.EMPTY,this.right=s!=null?s:Ee.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ee(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ee.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Ee.EMPTY=null,Ee.RED=!0,Ee.BLACK=!1;Ee.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ee(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.comparator=e,this.data=new Xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cp(this.data.getIterator())}getIteratorFrom(e){return new Cp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class Cp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=new Xe(b.comparator);function Rp(){return Sk}const Tk=new Xe(b.comparator);function Np(){return Tk}function Yl(){return new qr(t=>t.toString(),(t,e)=>t.isEqual(e))}const Ik=new Xe(b.comparator),kk=new Ke(b.comparator);function Hn(...t){let e=kk;for(const n of t)e=e.add(n);return e}const Ck=new Ke(q);function Rk(){return Ck}class Nk{constructor(e,n){this.databaseId=e,this.N=n}}function oc(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ak(t,e){return t.N?e.toBase64():e.toUint8Array()}function Pk(t,e){return oc(t,e.toTimestamp())}function Ir(t){return ce(!!t),ae.fromTimestamp(function(e){const n=zn(e);return new $e(n.seconds,n.nanos)}(t))}function Vv(t,e){return function(n){return new ne(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Ok(t){const e=ne.fromString(t);return ce(Bk(e)),e}function ac(t,e){return Vv(t.databaseId,e.path)}function Dk(t){const e=Ok(t);return e.length===4?ne.emptyPath():Lk(e)}function xk(t){return new ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Lk(t){return ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ap(t,e,n){return{name:ac(t,e),fields:n.value.mapValue.fields}}function Mk(t,e){let n;if(e instanceof tl)n={update:Ap(t,e.key,e.value)};else if(e instanceof vk)n={delete:ac(t,e.key)};else if(e instanceof Vs)n={update:Ap(t,e.key,e.data),updateMask:Vk(e.fieldMask)};else{if(!(e instanceof wk))return z();n={verify:ac(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ga)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof cs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof hs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ya)return{fieldPath:s.field.canonicalString(),increment:o.k};throw z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Pk(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z()}(t,e.precondition)),n}function $k(t,e){return t&&t.length>0?(ce(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Ir(r.updateTime):Ir(i);return s.isEqual(ae.min())&&(s=Ir(i)),new mk(s,r.transformResults||[])}(n,e))):[]}function Uk(t){let e=Dk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ce(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=Bv(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(m){return new Mi(ur(m.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(c)));let a=null;n.limit&&(a=function(c){let m;return m=typeof c=="object"?c.value:c,Fs(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(c){const m=!!c.before,p=c.values||[];return new pa(p,m)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const m=!c.before,p=c.values||[];return new pa(p,m)}(n.endAt)),tk(e,i,o,s,a,"F",l,u)}function Bv(t){return t?t.unaryFilter!==void 0?[Fk(t)]:t.fieldFilter!==void 0?[bk(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Bv(e)).reduce((e,n)=>e.concat(n)):z():[]}function ur(t){return Be.fromServerFormat(t.fieldPath)}function bk(t){return je.create(ur(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(t.fieldFilter.op),t.fieldFilter.value)}function Fk(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ur(t.unaryFilter.field);return je.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ur(t.unaryFilter.field);return je.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ur(t.unaryFilter.field);return je.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ur(t.unaryFilter.field);return je.create(i,"!=",{nullValue:"NULL_VALUE"});default:return z()}}function Vk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Bk(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(i=>i?C.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}function nl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&gk(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&sc(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&sc(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(ae.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Hn())}isEqual(e){return this.batchId===e.batchId&&Pr(this.mutations,e.mutations,(n,r)=>Sp(n,r))&&Pr(this.baseMutations,e.baseMutations,(n,r)=>Sp(n,r))}}class Kh{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ce(e.mutations.length===r.length);let i=Ik;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Kh(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e){this.Jt=e}}function Gk(t){const e=Uk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?lk(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(){this.qe=new Xk}addToCollectionParentIndex(e,n){return this.qe.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getFieldIndex(e,n){return C.resolve(null)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class Xk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ke(ne.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ke(ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new Lr(0)}static yn(){return new Lr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jv(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==jk)throw t;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(){this.changes=new qr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e,n,r){this.ds=e,this.Bs=n,this.indexManager=r}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Us(e,n,r))}Us(e,n,r){return this.ds.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}qs(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}Ks(e,n){return this.ds.getEntries(e,n).next(r=>this.Gs(e,r).next(()=>r))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.qs(n,r))}Qs(e,n,r){return function(i){return b.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.js(e,n.path):ak(n)?this.Ws(e,n,r):this.zs(e,n,r)}js(e,n){return this.Ls(e,new b(n)).next(r=>{let i=Np();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Ws(e,n,r){const i=n.collectionGroup;let s=Np();return this.indexManager.getCollectionParents(e,i).next(o=>C.forEach(o,a=>{const l=function(u,c){return new Ja(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.zs(e,l,r).next(u=>{u.forEach((c,m)=>{s=s.insert(c,m)})})}).next(()=>s))}zs(e,n,r){let i;return this.ds.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(s=>{for(const o of s)for(const a of o.mutations){const l=a.key;let u=i.get(l);u==null&&(u=st.newInvalidDocument(l),i=i.insert(l,u)),sc(a,u,o.localWriteTime),u.isFoundDocument()||(i=i.remove(l))}}).next(()=>(i.forEach((s,o)=>{Dv(n,o)||(i=i.remove(s))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Hs=r,this.Js=i}static Ys(e,n){let r=Hn(),i=Hn();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Gh(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{Xs(e){this.Zs=e}Qs(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(ae.min())?this.ti(e,n):this.Zs.Ks(e,i).next(s=>{const o=this.ei(n,s);return(rk(n)||ik(n))&&this.ni(n.limitType,o,i,r)?this.ti(e,n):(dp()<=W.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ep(n)),this.Zs.Qs(e,n,jI(r,-1)).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}ei(e,n){let r=new Ke(uk(e));return n.forEach((i,s)=>{Dv(e,s)&&(r=r.add(s))}),r}ni(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ti(e,n){return dp()<=W.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Ep(n)),this.Zs.Qs(e,n,xr.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e,n,r,i){this.persistence=e,this.si=n,this.M=i,this.ii=new Xe(q),this.ri=new qr(s=>Hh(s),Wh),this.oi=new Map,this.ui=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.ai(r)}ai(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.ci=new Qk(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ii))}}function eC(t,e,n,r){return new Zk(t,e,n,r)}async function zv(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.Bs.getAllMutationBatches(r).next(s=>(i=s,n.ai(e),n.Bs.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Hn();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.ci.Ks(r,l).next(u=>({hi:u,removedBatchIds:o,addedBatchIds:a}))})})}function tC(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ui.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,m=c.keys();let p=C.resolve();return m.forEach(v=>{p=p.next(()=>u.getEntry(a,v)).next(w=>{const I=l.docVersions.get(v);ce(I!==null),w.version.compareTo(I)<0&&(c.applyToRemoteDocument(w,l),w.isValidDocument()&&(w.setReadTime(l.commitVersion),u.addEntry(w)))})}),p.next(()=>o.Bs.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.Bs.performConsistencyCheck(r)).next(()=>n.ci.Ks(r,i))})}function nC(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function rC(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(r,e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e){this.M=e,this.wi=new Map,this.mi=new Map}getBundleMetadata(e,n){return C.resolve(this.wi.get(n))}saveBundleMetadata(e,n){var r;return this.wi.set(n.id,{id:(r=n).id,version:r.version,createTime:Ir(r.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.mi.get(n))}saveNamedQuery(e,n){return this.mi.set(n.name,function(r){return{name:r.name,query:Gk(r.bundledQuery),readTime:Ir(r.readTime)}}(n)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(){this.overlays=new Xe(b.comparator),this.gi=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Xt(e,n,s)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.gi.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.gi.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const i=Yl(),s=n.length+1,o=new b(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return C.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Xe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Yl(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Yl(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return C.resolve(a)}Xt(e,n,r){if(r===null)return;const i=this.overlays.get(r.key);if(i!==null){const o=this.gi.get(i.largestBatchId).delete(r.key);this.gi.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Wk(n,r));let s=this.gi.get(n);s===void 0&&(s=Hn(),this.gi.set(n,s)),this.gi.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(){this.yi=new Ke(fe.pi),this.Ii=new Ke(fe.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(e,n){const r=new fe(e,n);this.yi=this.yi.add(r),this.Ii=this.Ii.add(r)}Ei(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ai(new fe(e,n))}Ri(e,n){e.forEach(r=>this.removeReference(r,n))}Pi(e){const n=new b(new ne([])),r=new fe(n,e),i=new fe(n,e+1),s=[];return this.Ii.forEachInRange([r,i],o=>{this.Ai(o),s.push(o.key)}),s}bi(){this.yi.forEach(e=>this.Ai(e))}Ai(e){this.yi=this.yi.delete(e),this.Ii=this.Ii.delete(e)}Vi(e){const n=new b(new ne([])),r=new fe(n,e),i=new fe(n,e+1);let s=Hn();return this.Ii.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new fe(e,0),r=this.yi.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class fe{constructor(e,n){this.key=e,this.vi=n}static pi(e,n){return b.comparator(e.key,n.key)||q(e.vi,n.vi)}static Ti(e,n){return q(e.vi,n.vi)||b.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.Si=1,this.Di=new Ke(fe.pi)}checkEmpty(e){return C.resolve(this.Bs.length===0)}addMutationBatch(e,n,r,i){const s=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new Hk(s,n,r,i);this.Bs.push(o);for(const a of i)this.Di=this.Di.add(new fe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.Ci(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.xi(r),s=i<0?0:i;return C.resolve(this.Bs.length>s?this.Bs[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.Bs.length===0?-1:this.Si-1)}getAllMutationBatches(e){return C.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new fe(n,0),i=new fe(n,Number.POSITIVE_INFINITY),s=[];return this.Di.forEachInRange([r,i],o=>{const a=this.Ci(o.vi);s.push(a)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(q);return n.forEach(i=>{const s=new fe(i,0),o=new fe(i,Number.POSITIVE_INFINITY);this.Di.forEachInRange([s,o],a=>{r=r.add(a.vi)})}),C.resolve(this.Ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;b.isDocumentKey(s)||(s=s.child(""));const o=new fe(new b(s),0);let a=new Ke(q);return this.Di.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.vi)),!0)},o),C.resolve(this.Ni(a))}Ni(e){const n=[];return e.forEach(r=>{const i=this.Ci(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ce(this.ki(n.batchId,"removed")===0),this.Bs.shift();let r=this.Di;return C.forEach(n.mutations,i=>{const s=new fe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Di=r})}_n(e){}containsKey(e,n){const r=new fe(n,0),i=this.Di.firstAfterOrEqual(r);return C.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.Bs.length,C.resolve()}ki(e,n){return this.xi(e)}xi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}Ci(e){const n=this.xi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e){this.Mi=e,this.docs=new Xe(b.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mi(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let r=Rp();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():st.newInvalidDocument(i))}),C.resolve(r)}getAllFromCollection(e,n,r){let i=Rp();const s=new b(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||HI(zI(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,n,r,i){z()}Oi(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new lC(this)}getSize(e){return C.resolve(this.size)}}class lC extends Yk{constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Kn.addEntry(e,i)):this.Kn.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e){this.persistence=e,this.Fi=new qr(n=>Hh(n),Wh),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.$i=0,this.Bi=new qh,this.targetCount=0,this.Li=Lr.gn()}forEachTarget(e,n){return this.Fi.forEach((r,i)=>n(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.$i)}allocateTargetId(e){return this.highestTargetId=this.Li.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$i&&(this.$i=n),C.resolve()}Tn(e){this.Fi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Li=new Lr(n),this.highestTargetId=n),e.sequenceNumber>this.$i&&(this.$i=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.Tn(n),C.resolve()}removeTargetData(e,n){return this.Fi.delete(n.target),this.Bi.Pi(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fi.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fi.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),C.waitFor(s).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fi.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.Bi.Ei(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.Bi.Ri(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),C.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Bi.Pi(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Bi.Vi(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.Bi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e,n){this.Ui={},this.overlays={},this.es=new kv(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new uC(this),this.indexManager=new qk,this.ds=function(r){return new aC(r)}(r=>this.referenceDelegate.qi(r)),this.M=new Kk(n),this._s=new iC(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new sC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ui[e.toKey()];return r||(r=new oC(n,this.referenceDelegate),this.Ui[e.toKey()]=r),r}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,r){D("MemoryPersistence","Starting transaction:",e);const i=new hC(this.es.next());return this.referenceDelegate.Ki(),r(i).next(s=>this.referenceDelegate.Gi(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Qi(e,n){return C.or(Object.values(this.Ui).map(r=>()=>r.containsKey(e,n)))}}class hC extends zk{constructor(e){super(),this.currentSequenceNumber=e}}class Xh{constructor(e){this.persistence=e,this.ji=new qh,this.Wi=null}static zi(e){return new Xh(e)}get Hi(){if(this.Wi)return this.Wi;throw z()}addReference(e,n,r){return this.ji.addReference(r,n),this.Hi.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.ji.removeReference(r,n),this.Hi.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Hi.add(n.toString()),C.resolve()}removeTarget(e,n){this.ji.Pi(n.targetId).forEach(i=>this.Hi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ki(){this.Wi=new Set}Gi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Hi,r=>{const i=b.fromPath(r);return this.Ji(e,i).next(s=>{s||n.removeEntry(i,ae.min())})}).next(()=>(this.Wi=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ji(e,n).next(r=>{r?this.Hi.delete(n.toString()):this.Hi.add(n.toString())})}qi(e){return 0}Ji(e,n){return C.or([()=>C.resolve(this.ji.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Qi(e,n)])}}class Pp{constructor(){this.activeTargetIds=Rk()}Zi(e){this.activeTargetIds=this.activeTargetIds.add(e)}tr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fC{constructor(){this.$r=new Pp,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.$r.Zi(e),this.Br[e]||"not-current"}updateQueryState(e,n,r){this.Br[e]=n}removeLocalQueryTarget(e){this.$r.tr(e)}isLocalQueryTarget(e){return this.$r.activeTargetIds.has(e)}clearQueryState(e){delete this.Br[e]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(e){return this.$r.activeTargetIds.has(e)}start(){return this.$r=new Pp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{Lr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(e){this.Qr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Qr)e(0)}Gr(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Qr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e){this.Wr=e.Wr,this.zr=e.zr}Hr(e){this.Jr=e}Yr(e){this.Xr=e}onMessage(e){this.Zr=e}close(){this.zr()}send(e){this.Wr(e)}eo(){this.Jr()}no(e){this.Xr(e)}so(e){this.Zr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.io=n+"://"+e.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(e,n,r,i,s){const o=this.uo(e,n);D("RestConnection","Sending: ",o,r);const a={};return this.ao(a,i,s),this.co(e,o,a,r).then(l=>(D("RestConnection","Received: ",l),l),l=>{throw pp("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}ho(e,n,r,i,s){return this.oo(e,n,r,i,s)}ao(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Gr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}uo(e,n){const r=pC[e];return`${this.io}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,i){return new Promise((s,o)=>{const a=new RI;a.listenOnce(II.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Xl.NO_ERROR:const u=a.getResponseJson();D("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Xl.TIMEOUT:D("Connection",'RPC "'+e+'" timed out'),o(new U(k.DEADLINE_EXCEEDED,"Request time out"));break;case Xl.HTTP_ERROR:const c=a.getStatus();if(D("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const m=a.getResponseJson().error;if(m&&m.status&&m.message){const p=function(v){const w=v.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(w)>=0?w:k.UNKNOWN}(m.status);o(new U(p,m.message))}else o(new U(k.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new U(k.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{D("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}lo(e,n,r){const i=[this.io,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=SI(),o=TI(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new CI({})),this.ao(a.initMessageHeaders,n,r),Fg()||Bg()||J1()||jg()||Z1()||Vg()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");D("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,m=!1;const p=new mC({Wr:w=>{m?D("Connection","Not sending because WebChannel is closed:",w):(c||(D("Connection","Opening WebChannel transport."),u.open(),c=!0),D("Connection","WebChannel sending:",w),u.send(w))},zr:()=>u.close()}),v=(w,I,f)=>{w.listen(I,h=>{try{f(h)}catch(d){setTimeout(()=>{throw d},0)}})};return v(u,oo.EventType.OPEN,()=>{m||D("Connection","WebChannel transport opened.")}),v(u,oo.EventType.CLOSE,()=>{m||(m=!0,D("Connection","WebChannel transport closed"),p.no())}),v(u,oo.EventType.ERROR,w=>{m||(m=!0,pp("Connection","WebChannel transport errored:",w),p.no(new U(k.UNAVAILABLE,"The operation could not be completed")))}),v(u,oo.EventType.MESSAGE,w=>{var I;if(!m){const f=w.data[0];ce(!!f);const h=f,d=h.error||((I=h[0])===null||I===void 0?void 0:I.error);if(d){D("Connection","WebChannel received error:",d);const g=d.status;let y=function(E){const O=oe[E];if(O!==void 0)return _k(O)}(g),P=d.message;y===void 0&&(y=k.INTERNAL,P="Unknown error status: "+g+" with message "+d.message),m=!0,p.no(new U(y,P)),u.close()}else D("Connection","WebChannel received:",f),p.so(f)}}),v(o,kI.STAT_EVENT,w=>{w.stat===hp.PROXY?D("Connection","Detected buffering proxy"):w.stat===hp.NOPROXY&&D("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.eo()},0),p}}function Ql(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(t){return new Nk(t,!0)}class Hv{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Yn=e,this.timerId=n,this.fo=r,this._o=i,this.wo=s,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(e){this.cancel();const n=Math.floor(this.mo+this.Eo()),r=Math.max(0,Date.now()-this.po),i=Math.max(0,n-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.mo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,i,()=>(this.po=Date.now(),e())),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){this.yo!==null&&(this.yo.skipDelay(),this.yo=null)}cancel(){this.yo!==null&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e,n,r,i,s,o,a,l){this.Yn=e,this.Ro=r,this.Po=i,this.bo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new Hv(e,n)}Co(){return this.state===1||this.state===5||this.xo()}xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&this.vo===null&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,()=>this.Oo()))}Fo(e){this.$o(),this.stream.send(e)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(e,n){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,e!==4?this.Do.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(jn(n.toString()),jn("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Lo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Yr(n)}Lo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===n&&this.qo(r,i)},r=>{e(()=>{const i=new U(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ko(i)})})}qo(e,n){const r=this.Uo(this.Vo);this.stream=this.Go(e,n),this.stream.Hr(()=>{r(()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,()=>(this.xo()&&(this.state=3),Promise.resolve())),this.listener.Hr()))}),this.stream.Yr(i=>{r(()=>this.Ko(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}No(){this.state=5,this.Do.To(async()=>{this.state=0,this.start()})}Ko(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Yn.enqueueAndForget(()=>this.Vo===e?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vC extends yC{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.M=s,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(e,n){return this.bo.lo("Write",e,n)}onMessage(e){if(ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.zo){this.Do.reset();const n=$k(e.writeResults,e.commitTime),r=Ir(e.commitTime);return this.listener.Yo(r,n)}return ce(!e.writeResults||e.writeResults.length===0),this.zo=!0,this.listener.Xo()}Zo(){const e={};e.database=xk(this.M),this.Fo(e)}Jo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Mk(this.M,r))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.M=i,this.tu=!1}eu(){if(this.tu)throw new U(k.FAILED_PRECONDITION,"The client has already been terminated.")}oo(e,n,r){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.oo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(k.UNKNOWN,i.toString())})}ho(e,n,r){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.ho(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(k.UNKNOWN,i.toString())})}terminate(){this.tu=!0}}class EC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){this.nu===0&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ou("Offline")))}set(e){this.cu(),this.nu=0,e==="Online"&&(this.iu=!1),this.ou(e)}ou(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}uu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(jn(n),this.iu=!1):D("OnlineStateTracker",n)}cu(){this.su!==null&&(this.su.cancel(),this.su=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=s,this._u.Lr(o=>{r.enqueueAndForget(async()=>{js(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Q(a);l.fu.add(4),await Bs(l),l.wu.set("Unknown"),l.fu.delete(4),await il(l)}(this))})}),this.wu=new EC(r,i)}}async function il(t){if(js(t))for(const e of t.du)await e(!0)}async function Bs(t){for(const e of t.du)await e(!1)}function js(t){return Q(t).fu.size===0}async function Wv(t,e,n){if(!nl(e))throw e;t.fu.add(1),await Bs(t),t.wu.set("Offline"),n||(n=()=>nC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),t.fu.delete(1),await il(t)})}function Kv(t,e){return e().catch(n=>Wv(t,n,e))}async function sl(t){const e=Q(t),n=hn(e);let r=e.hu.length>0?e.hu[e.hu.length-1].batchId:-1;for(;SC(e);)try{const i=await rC(e.localStore,r);if(i===null){e.hu.length===0&&n.Mo();break}r=i.batchId,TC(e,i)}catch(i){await Wv(e,i)}Gv(e)&&qv(e)}function SC(t){return js(t)&&t.hu.length<10}function TC(t,e){t.hu.push(e);const n=hn(t);n.xo()&&n.Ho&&n.Jo(e.mutations)}function Gv(t){return js(t)&&!hn(t).Co()&&t.hu.length>0}function qv(t){hn(t).start()}async function IC(t){hn(t).Zo()}async function kC(t){const e=hn(t);for(const n of t.hu)e.Jo(n.mutations)}async function CC(t,e,n){const r=t.hu.shift(),i=Kh.from(r,e,n);await Kv(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await sl(t)}async function RC(t,e){e&&hn(t).Ho&&await async function(n,r){if(i=r.code,Ek(i)&&i!==k.ABORTED){const s=n.hu.shift();hn(n).ko(),await Kv(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await sl(n)}var i}(t,e),Gv(t)&&qv(t)}async function Dp(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=js(n);n.fu.add(3),await Bs(n),r&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.fu.delete(3),await il(n)}async function NC(t,e){const n=Q(t);e?(n.fu.delete(2),await il(n)):e||(n.fu.add(2),await Bs(n),n.wu.set("Unknown"))}function hn(t){return t.yu||(t.yu=function(e,n,r){const i=Q(e);return i.eu(),new vC(n,i.bo,i.authCredentials,i.appCheckCredentials,i.M,r)}(t.datastore,t.asyncQueue,{Hr:IC.bind(null,t),Yr:RC.bind(null,t),Xo:kC.bind(null,t),Yo:CC.bind(null,t)}),t.du.push(async e=>{e?(t.yu.ko(),await sl(t)):(await t.yu.stop(),t.hu.length>0&&(D("RemoteStore",`Stopping write stream with ${t.hu.length} pending writes`),t.hu=[]))})),t.yu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new On,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Yh(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xv(t,e){if(jn("AsyncQueue",`${e}: ${t}`),nl(t))return new U(k.UNAVAILABLE,`${e}: ${t}`);throw t}class AC{constructor(){this.queries=new qr(e=>Ov(e),Pv),this.onlineState="Unknown",this.Eu=new Set}}function PC(t){t.Eu.forEach(e=>{e.next()})}class OC{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ta={},this.ea=new qr(a=>Ov(a),Pv),this.na=new Map,this.sa=new Set,this.ia=new Xe(b.comparator),this.ra=new Map,this.oa=new qh,this.ua={},this.aa=new Map,this.ca=Lr.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return this.ha===!0}}async function DC(t,e,n){const r=$C(t);try{const i=await function(s,o){const a=Q(s),l=$e.now(),u=o.reduce((m,p)=>m.add(p.key),Hn());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",m=>a.ci.Ks(m,u).next(p=>{c=p;const v=[];for(const w of o){const I=yk(w,c.get(w.key));I!=null&&v.push(new Vs(w.key,I,Nv(I.value.mapValue),Tr.exists(!0)))}return a.Bs.addMutationBatch(m,l,v,o)})).then(m=>(m.applyToLocalDocumentSet(c),{batchId:m.batchId,changes:c}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ua[s.currentUser.toKey()];l||(l=new Xe(q)),l=l.insert(o,a),s.ua[s.currentUser.toKey()]=l}(r,i.batchId,n),await ol(r,i.changes),await sl(r.remoteStore)}catch(i){const s=Xv(i,"Failed to persist write");n.reject(s)}}function xp(t,e,n){const r=Q(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ea.forEach((s,o)=>{const a=o.view.Au(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=Q(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const m of c.listeners)m.Au(o)&&(l=!0)}),l&&PC(a)}(r.eventManager,e),i.length&&r.ta.Qo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function xC(t,e){const n=Q(t),r=e.batch.batchId;try{const i=await tC(n.localStore,e);Qv(n,r,null),Yv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ol(n,i)}catch(i){await jv(i)}}async function LC(t,e,n){const r=Q(t);try{const i=await function(s,o){const a=Q(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.Bs.lookupMutationBatch(l,o).next(c=>(ce(c!==null),u=c.keys(),a.Bs.removeMutationBatch(l,c))).next(()=>a.Bs.performConsistencyCheck(l)).next(()=>a.ci.Ks(l,u))})}(r.localStore,e);Qv(r,e,n),Yv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ol(r,i)}catch(i){await jv(i)}}function Yv(t,e){(t.aa.get(e)||[]).forEach(n=>{n.resolve()}),t.aa.delete(e)}function Qv(t,e,n){const r=Q(t);let i=r.ua[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ua[r.currentUser.toKey()]=i}}async function ol(t,e,n){const r=Q(t),i=[],s=[],o=[];r.ea.isEmpty()||(r.ea.forEach((a,l)=>{o.push(r.la(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=Gh.Ys(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.ta.Qo(i),await async function(a,l){const u=Q(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>C.forEach(l,m=>C.forEach(m.Hs,p=>u.persistence.referenceDelegate.addReference(c,m.targetId,p)).next(()=>C.forEach(m.Js,p=>u.persistence.referenceDelegate.removeReference(c,m.targetId,p)))))}catch(c){if(!nl(c))throw c;D("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const m=c.targetId;if(!c.fromCache){const p=u.ii.get(m),v=p.snapshotVersion,w=p.withLastLimboFreeSnapshotVersion(v);u.ii=u.ii.insert(m,w)}}}(r.localStore,s))}async function MC(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const r=await zv(n.localStore,e);n.currentUser=e,function(i,s){i.aa.forEach(o=>{o.forEach(a=>{a.reject(new U(k.CANCELLED,s))})}),i.aa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ol(n,r.hi)}}function $C(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=LC.bind(null,e),e}class UC{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=rl(e.databaseInfo.databaseId),this.sharedClientState=this._a(e),this.persistence=this.wa(e),await this.persistence.start(),this.gcScheduler=this.ma(e),this.localStore=this.ga(e)}ma(e){return null}ga(e){return eC(this.persistence,new Jk,e.initialUser,this.M)}wa(e){return new cC(Xh.zi,this.M)}_a(e){return new fC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class bC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=MC.bind(null,this.syncEngine),await NC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new AC}createDatastore(e){const n=rl(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new gC(i));var i;return function(s,o,a,l){return new wC(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>xp(this.syncEngine,a,0),o=Op.vt()?new Op:new dC,new _C(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new OC(r,i,s,o,a,l);return u&&(c.ha=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Q(e);D("RemoteStore","RemoteStore shutting down."),n.fu.add(5),await Bs(n),n._u.shutdown(),n.wu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ve.UNAUTHENTICATED,this.clientId=Cv.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{D("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(D("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new On;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Xv(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function VC(t,e){t.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await zv(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function BC(t,e){t.asyncQueue.verifyOperationInProgress();const n=await jC(t);D("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Dp(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Dp(e.remoteStore,s)),t.onlineComponents=e}async function jC(t){return t.offlineComponents||(D("FirestoreClient","Using default OfflineComponentProvider"),await VC(t,new UC)),t.offlineComponents}async function zC(t){return t.onlineComponents||(D("FirestoreClient","Using default OnlineComponentProvider"),await BC(t,new bC)),t.onlineComponents}function HC(t){return zC(t).then(e=>e.syncEngine)}const Lp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(t,e,n){if(!n)throw new U(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function WC(t,e,n,r){if(e===!0&&r===!0)throw new U(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Mp(t){if(!b.isDocumentKey(t))throw new U(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function $p(t){if(b.isDocumentKey(t))throw new U(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function Up(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qh(t);throw new U(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,WC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bp({}),this._settingsFrozen=!1,e instanceof as?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new U(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new as(i.options.projectId)}(e))}get app(){if(!this._app)throw new U(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bp(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new AI;switch(n.type){case"gapi":const r=n.client;return ce(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new DI(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new U(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Lp.get(e);n&&(D("ComponentProvider","Removing Datastore"),Lp.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class Zh{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zh(this.firestore,e,this._query)}}class nn extends Zh{constructor(e,n,r){super(e,n,nk(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new b(e))}withConverter(e){return new nn(this.firestore,e,this._path)}}function SR(t,e,...n){if(t=Ge(t),Jv("collection","path",e),t instanceof Jh){const r=ne.fromString(e,...n);return $p(r),new nn(t,null,r)}{if(!(t instanceof wt||t instanceof nn))throw new U(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ne.fromString(e,...n));return $p(r),new nn(t.firestore,null,r)}}function TR(t,e,...n){if(t=Ge(t),arguments.length===1&&(e=Cv.R()),Jv("doc","path",e),t instanceof Jh){const r=ne.fromString(e,...n);return Mp(r),new wt(t,null,new b(r))}{if(!(t instanceof wt||t instanceof nn))throw new U(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ne.fromString(e,...n));return Mp(r),new wt(t.firestore,t instanceof nn?t.converter:null,new b(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new Hv(this,"async_queue_retry"),this.qa=()=>{const n=Ql();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Do.Ao()};const e=Ql();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ka(),this.Ga(e)}enterRestrictedMode(e){if(!this.Oa){this.Oa=!0,this.La=e||!1;const n=Ql();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qa)}}enqueue(e){if(this.Ka(),this.Oa)return new Promise(()=>{});const n=new On;return this.Ga(()=>this.Oa&&this.La?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ma.push(e),this.Qa()))}async Qa(){if(this.Ma.length!==0){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(e){if(!nl(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Ma.length>0&&this.Do.To(()=>this.Qa())}}Ga(e){const n=this.ka.then(()=>(this.Ba=!0,e().catch(r=>{this.$a=r,this.Ba=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw jn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ba=!1,r))));return this.ka=n,n}enqueueAfterDelay(e,n,r){this.Ka(),this.Ua.indexOf(e)>-1&&(n=0);const i=Yh.createAndSchedule(this,e,n,r,s=>this.ja(s));return this.Fa.push(i),i}Ka(){this.$a&&z()}verifyOperationInProgress(){}async Wa(){let e;do e=this.ka,await e;while(e!==this.ka)}za(e){for(const n of this.Fa)if(n.timerId===e)return!0;return!1}Ha(e){return this.Wa().then(()=>{this.Fa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Fa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Wa()})}Ja(e){this.Ua.push(e)}ja(e){const n=this.Fa.indexOf(e);this.Fa.splice(n,1)}}class Zv extends Jh{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new KC,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||e0(this),this._firestoreClient.terminate()}}function IR(t=lh()){return La(t,"firestore").getImmediate()}function GC(t){return t._firestoreClient||e0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function e0(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new FI(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new FC(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fs(Mt.fromBase64String(e))}catch(n){throw new U(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fs(Mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=/^__.*__$/;class XC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Vs(e,this.data,this.fieldMask,n,this.fieldTransforms):new tl(e,this.data,n,this.fieldTransforms)}}function i0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class ef{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.M=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ya(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(e){return new ef(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Za({path:r,ec:!1});return i.nc(e),i}sc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Za({path:r,ec:!1});return i.Ya(),i}ic(e){return this.Za({path:void 0,ec:!0})}rc(e){return va(e,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ya(){if(this.path)for(let e=0;e<this.path.length;e++)this.nc(this.path.get(e))}nc(e){if(e.length===0)throw this.rc("Document fields must not be empty");if(i0(this.Xa)&&qC.test(e))throw this.rc('Document fields cannot begin and end with "__"')}}class YC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=r||rl(e)}ac(e,n,r,i=!1){return new ef({Xa:e,methodName:n,uc:r,path:Be.emptyPath(),ec:!1,oc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function QC(t){const e=t._freezeSettings(),n=rl(t._databaseId);return new YC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function JC(t,e,n,r,i,s={}){const o=t.ac(s.merge||s.mergeFields?2:0,e,n,i);l0("Data must be an object, but it was:",o,r);const a=o0(r,o);let l,u;if(s.merge)l=new nc(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const m of s.mergeFields){const p=ZC(e,m,n);if(!o.contains(p))throw new U(k.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);nR(c,p)||c.push(p)}l=new nc(c),u=o.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,u=o.fieldTransforms;return new XC(new ct(a),l,u)}function s0(t,e){if(a0(t=Ge(t)))return l0("Unsupported field value:",e,t),o0(t,e);if(t instanceof n0)return function(n,r){if(!i0(r.Xa))throw r.rc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.rc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ec&&e.Xa!==4)throw e.rc("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=s0(o,r.ic(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Ge(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return hk(r.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=$e.fromDate(n);return{timestampValue:oc(r.M,i)}}if(n instanceof $e){const i=new $e(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:oc(r.M,i)}}if(n instanceof r0)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof fs)return{bytesValue:Ak(r.M,n._byteString)};if(n instanceof wt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.rc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Vv(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.rc(`Unsupported field value: ${Qh(n)}`)}(t,e)}function o0(t,e){const n={};return Rv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bs(t,(r,i)=>{const s=s0(i,e.tc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function a0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $e||t instanceof r0||t instanceof fs||t instanceof wt||t instanceof n0)}function l0(t,e,n){if(!a0(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Qh(n);throw r==="an object"?e.rc(t+" a custom object"):e.rc(t+" "+r)}}function ZC(t,e,n){if((e=Ge(e))instanceof t0)return e._internalPath;if(typeof e=="string")return tR(t,e);throw va("Field path arguments must be of type string or ",t,!1,void 0,n)}const eR=new RegExp("[~\\*/\\[\\]]");function tR(t,e,n){if(e.search(eR)>=0)throw va(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new t0(...e.split("."))._internalPath}catch{throw va(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function va(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new U(k.INVALID_ARGUMENT,a+t+l)}function nR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rR(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function kR(t,e,n){t=Up(t,wt);const r=Up(t.firestore,Zv),i=rR(t.converter,e,n);return iR(r,[JC(QC(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Tr.none())])}function iR(t,e){return function(n,r){const i=new On;return n.asyncQueue.enqueueAndForget(async()=>DC(await HC(n),r,i)),i.promise}(GC(t),e)}(function(t,e=!0){(function(n){Gr=n})(jr),Mn(new cn("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new Zv(i,new PI(n.getProvider("auth-internal")),new LI(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),gt(fp,"3.4.8",t),gt(fp,"3.4.8","esm2017")})();var sR={exports:{}},zs={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oR=j.exports,u0=60103;zs.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var Fp=Symbol.for;u0=Fp("react.element"),zs.Fragment=Fp("react.fragment")}var aR=oR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lR=Object.prototype.hasOwnProperty,uR={key:!0,ref:!0,__self:!0,__source:!0};function c0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)lR.call(e,r)&&!uR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:u0,type:t,key:s,ref:o,props:i,_owner:aR.current}}zs.jsx=c0;zs.jsxs=c0;sR.exports=zs;export{IR as D,dR as H,pR as L,hR as R,TR as T,_R as a,kR as b,gR as c,wR as d,fR as e,w1 as f,ER as g,cR as h,mR as i,sR as j,vR as o,SR as p,j as r,yR as s,S1 as u};
