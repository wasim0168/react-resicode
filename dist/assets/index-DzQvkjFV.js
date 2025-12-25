(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))o(h);new MutationObserver(h=>{for(const v of h)if(v.type==="childList")for(const E of v.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&o(E)}).observe(document,{childList:!0,subtree:!0});function d(h){const v={};return h.integrity&&(v.integrity=h.integrity),h.referrerPolicy&&(v.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?v.credentials="include":h.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function o(h){if(h.ep)return;h.ep=!0;const v=d(h);fetch(h.href,v)}})();function V0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Nc={exports:{}},Rn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf;function Z0(){if(Mf)return Rn;Mf=1;var s=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function d(o,h,v){var E=null;if(v!==void 0&&(E=""+v),h.key!==void 0&&(E=""+h.key),"key"in h){v={};for(var T in h)T!=="key"&&(v[T]=h[T])}else v=h;return h=v.ref,{$$typeof:s,type:o,key:E,ref:h!==void 0?h:null,props:v}}return Rn.Fragment=f,Rn.jsx=d,Rn.jsxs=d,Rn}var Cf;function K0(){return Cf||(Cf=1,Nc.exports=Z0()),Nc.exports}var i=K0(),wc={exports:{}},te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uf;function J0(){if(Uf)return te;Uf=1;var s=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),v=Symbol.for("react.consumer"),E=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),_=Symbol.iterator;function k(x){return x===null||typeof x!="object"?null:(x=_&&x[_]||x["@@iterator"],typeof x=="function"?x:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,B={};function H(x,U,Y){this.props=x,this.context=U,this.refs=B,this.updater=Y||C}H.prototype.isReactComponent={},H.prototype.setState=function(x,U){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,U,"setState")},H.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function V(){}V.prototype=H.prototype;function Q(x,U,Y){this.props=x,this.context=U,this.refs=B,this.updater=Y||C}var ee=Q.prototype=new V;ee.constructor=Q,X(ee,H.prototype),ee.isPureReactComponent=!0;var ye=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},Ue=Object.prototype.hasOwnProperty;function Re(x,U,Y,L,K,se){return Y=se.ref,{$$typeof:s,type:x,key:U,ref:Y!==void 0?Y:null,props:se}}function _e(x,U){return Re(x.type,U,void 0,void 0,void 0,x.props)}function we(x){return typeof x=="object"&&x!==null&&x.$$typeof===s}function et(x){var U={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(Y){return U[Y]})}var dt=/\/+/g;function Xe(x,U){return typeof x=="object"&&x!==null&&x.key!=null?et(""+x.key):U.toString(36)}function Na(){}function wa(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(Na,Na):(x.status="pending",x.then(function(U){x.status==="pending"&&(x.status="fulfilled",x.value=U)},function(U){x.status==="pending"&&(x.status="rejected",x.reason=U)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function Qe(x,U,Y,L,K){var se=typeof x;(se==="undefined"||se==="boolean")&&(x=null);var I=!1;if(x===null)I=!0;else switch(se){case"bigint":case"string":case"number":I=!0;break;case"object":switch(x.$$typeof){case s:case f:I=!0;break;case N:return I=x._init,Qe(I(x._payload),U,Y,L,K)}}if(I)return K=K(x),I=L===""?"."+Xe(x,0):L,ye(K)?(Y="",I!=null&&(Y=I.replace(dt,"$&/")+"/"),Qe(K,U,Y,"",function($t){return $t})):K!=null&&(we(K)&&(K=_e(K,Y+(K.key==null||x&&x.key===K.key?"":(""+K.key).replace(dt,"$&/")+"/")+I)),U.push(K)),1;I=0;var tt=L===""?".":L+":";if(ye(x))for(var ve=0;ve<x.length;ve++)L=x[ve],se=tt+Xe(L,ve),I+=Qe(L,U,Y,se,K);else if(ve=k(x),typeof ve=="function")for(x=ve.call(x),ve=0;!(L=x.next()).done;)L=L.value,se=tt+Xe(L,ve++),I+=Qe(L,U,Y,se,K);else if(se==="object"){if(typeof x.then=="function")return Qe(wa(x),U,Y,L,K);throw U=String(x),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return I}function R(x,U,Y){if(x==null)return x;var L=[],K=0;return Qe(x,L,"","",function(se){return U.call(Y,se,K++)}),L}function q(x){if(x._status===-1){var U=x._result;U=U(),U.then(function(Y){(x._status===0||x._status===-1)&&(x._status=1,x._result=Y)},function(Y){(x._status===0||x._status===-1)&&(x._status=2,x._result=Y)}),x._status===-1&&(x._status=0,x._result=U)}if(x._status===1)return x._result.default;throw x._result}var W=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function pe(){}return te.Children={map:R,forEach:function(x,U,Y){R(x,function(){U.apply(this,arguments)},Y)},count:function(x){var U=0;return R(x,function(){U++}),U},toArray:function(x){return R(x,function(U){return U})||[]},only:function(x){if(!we(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},te.Component=H,te.Fragment=d,te.Profiler=h,te.PureComponent=Q,te.StrictMode=o,te.Suspense=b,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,te.__COMPILER_RUNTIME={__proto__:null,c:function(x){return P.H.useMemoCache(x)}},te.cache=function(x){return function(){return x.apply(null,arguments)}},te.cloneElement=function(x,U,Y){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var L=X({},x.props),K=x.key,se=void 0;if(U!=null)for(I in U.ref!==void 0&&(se=void 0),U.key!==void 0&&(K=""+U.key),U)!Ue.call(U,I)||I==="key"||I==="__self"||I==="__source"||I==="ref"&&U.ref===void 0||(L[I]=U[I]);var I=arguments.length-2;if(I===1)L.children=Y;else if(1<I){for(var tt=Array(I),ve=0;ve<I;ve++)tt[ve]=arguments[ve+2];L.children=tt}return Re(x.type,K,void 0,void 0,se,L)},te.createContext=function(x){return x={$$typeof:E,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:v,_context:x},x},te.createElement=function(x,U,Y){var L,K={},se=null;if(U!=null)for(L in U.key!==void 0&&(se=""+U.key),U)Ue.call(U,L)&&L!=="key"&&L!=="__self"&&L!=="__source"&&(K[L]=U[L]);var I=arguments.length-2;if(I===1)K.children=Y;else if(1<I){for(var tt=Array(I),ve=0;ve<I;ve++)tt[ve]=arguments[ve+2];K.children=tt}if(x&&x.defaultProps)for(L in I=x.defaultProps,I)K[L]===void 0&&(K[L]=I[L]);return Re(x,se,void 0,void 0,null,K)},te.createRef=function(){return{current:null}},te.forwardRef=function(x){return{$$typeof:T,render:x}},te.isValidElement=we,te.lazy=function(x){return{$$typeof:N,_payload:{_status:-1,_result:x},_init:q}},te.memo=function(x,U){return{$$typeof:p,type:x,compare:U===void 0?null:U}},te.startTransition=function(x){var U=P.T,Y={};P.T=Y;try{var L=x(),K=P.S;K!==null&&K(Y,L),typeof L=="object"&&L!==null&&typeof L.then=="function"&&L.then(pe,W)}catch(se){W(se)}finally{P.T=U}},te.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},te.use=function(x){return P.H.use(x)},te.useActionState=function(x,U,Y){return P.H.useActionState(x,U,Y)},te.useCallback=function(x,U){return P.H.useCallback(x,U)},te.useContext=function(x){return P.H.useContext(x)},te.useDebugValue=function(){},te.useDeferredValue=function(x,U){return P.H.useDeferredValue(x,U)},te.useEffect=function(x,U,Y){var L=P.H;if(typeof Y=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return L.useEffect(x,U)},te.useId=function(){return P.H.useId()},te.useImperativeHandle=function(x,U,Y){return P.H.useImperativeHandle(x,U,Y)},te.useInsertionEffect=function(x,U){return P.H.useInsertionEffect(x,U)},te.useLayoutEffect=function(x,U){return P.H.useLayoutEffect(x,U)},te.useMemo=function(x,U){return P.H.useMemo(x,U)},te.useOptimistic=function(x,U){return P.H.useOptimistic(x,U)},te.useReducer=function(x,U,Y){return P.H.useReducer(x,U,Y)},te.useRef=function(x){return P.H.useRef(x)},te.useState=function(x){return P.H.useState(x)},te.useSyncExternalStore=function(x,U,Y){return P.H.useSyncExternalStore(x,U,Y)},te.useTransition=function(){return P.H.useTransition()},te.version="19.1.1",te}var _f;function Mc(){return _f||(_f=1,wc.exports=J0()),wc.exports}var A=Mc();const Qa=V0(A);var Sc={exports:{}},On={},Ec={exports:{}},zc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bf;function F0(){return Bf||(Bf=1,(function(s){function f(R,q){var W=R.length;R.push(q);e:for(;0<W;){var pe=W-1>>>1,x=R[pe];if(0<h(x,q))R[pe]=q,R[W]=x,W=pe;else break e}}function d(R){return R.length===0?null:R[0]}function o(R){if(R.length===0)return null;var q=R[0],W=R.pop();if(W!==q){R[0]=W;e:for(var pe=0,x=R.length,U=x>>>1;pe<U;){var Y=2*(pe+1)-1,L=R[Y],K=Y+1,se=R[K];if(0>h(L,W))K<x&&0>h(se,L)?(R[pe]=se,R[K]=W,pe=K):(R[pe]=L,R[Y]=W,pe=Y);else if(K<x&&0>h(se,W))R[pe]=se,R[K]=W,pe=K;else break e}}return q}function h(R,q){var W=R.sortIndex-q.sortIndex;return W!==0?W:R.id-q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var v=performance;s.unstable_now=function(){return v.now()}}else{var E=Date,T=E.now();s.unstable_now=function(){return E.now()-T}}var b=[],p=[],N=1,_=null,k=3,C=!1,X=!1,B=!1,H=!1,V=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;function ye(R){for(var q=d(p);q!==null;){if(q.callback===null)o(p);else if(q.startTime<=R)o(p),q.sortIndex=q.expirationTime,f(b,q);else break;q=d(p)}}function P(R){if(B=!1,ye(R),!X)if(d(b)!==null)X=!0,Ue||(Ue=!0,Xe());else{var q=d(p);q!==null&&Qe(P,q.startTime-R)}}var Ue=!1,Re=-1,_e=5,we=-1;function et(){return H?!0:!(s.unstable_now()-we<_e)}function dt(){if(H=!1,Ue){var R=s.unstable_now();we=R;var q=!0;try{e:{X=!1,B&&(B=!1,Q(Re),Re=-1),C=!0;var W=k;try{t:{for(ye(R),_=d(b);_!==null&&!(_.expirationTime>R&&et());){var pe=_.callback;if(typeof pe=="function"){_.callback=null,k=_.priorityLevel;var x=pe(_.expirationTime<=R);if(R=s.unstable_now(),typeof x=="function"){_.callback=x,ye(R),q=!0;break t}_===d(b)&&o(b),ye(R)}else o(b);_=d(b)}if(_!==null)q=!0;else{var U=d(p);U!==null&&Qe(P,U.startTime-R),q=!1}}break e}finally{_=null,k=W,C=!1}q=void 0}}finally{q?Xe():Ue=!1}}}var Xe;if(typeof ee=="function")Xe=function(){ee(dt)};else if(typeof MessageChannel<"u"){var Na=new MessageChannel,wa=Na.port2;Na.port1.onmessage=dt,Xe=function(){wa.postMessage(null)}}else Xe=function(){V(dt,0)};function Qe(R,q){Re=V(function(){R(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(R){R.callback=null},s.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<R?Math.floor(1e3/R):5},s.unstable_getCurrentPriorityLevel=function(){return k},s.unstable_next=function(R){switch(k){case 1:case 2:case 3:var q=3;break;default:q=k}var W=k;k=q;try{return R()}finally{k=W}},s.unstable_requestPaint=function(){H=!0},s.unstable_runWithPriority=function(R,q){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var W=k;k=R;try{return q()}finally{k=W}},s.unstable_scheduleCallback=function(R,q,W){var pe=s.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?pe+W:pe):W=pe,R){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=W+x,R={id:N++,callback:q,priorityLevel:R,startTime:W,expirationTime:x,sortIndex:-1},W>pe?(R.sortIndex=W,f(p,R),d(b)===null&&R===d(p)&&(B?(Q(Re),Re=-1):B=!0,Qe(P,W-pe))):(R.sortIndex=x,f(b,R),X||C||(X=!0,Ue||(Ue=!0,Xe()))),R},s.unstable_shouldYield=et,s.unstable_wrapCallback=function(R){var q=k;return function(){var W=k;k=q;try{return R.apply(this,arguments)}finally{k=W}}}})(zc)),zc}var Hf;function W0(){return Hf||(Hf=1,Ec.exports=F0()),Ec.exports}var Tc={exports:{}},Ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kf;function $0(){if(kf)return Ke;kf=1;var s=Mc();function f(b){var p="https://react.dev/errors/"+b;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)p+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+b+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var o={d:{f:d,r:function(){throw Error(f(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},h=Symbol.for("react.portal");function v(b,p,N){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:_==null?null:""+_,children:b,containerInfo:p,implementation:N}}var E=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(b,p){if(b==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Ke.createPortal=function(b,p){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(f(299));return v(b,p,null,N)},Ke.flushSync=function(b){var p=E.T,N=o.p;try{if(E.T=null,o.p=2,b)return b()}finally{E.T=p,o.p=N,o.d.f()}},Ke.preconnect=function(b,p){typeof b=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(b,p))},Ke.prefetchDNS=function(b){typeof b=="string"&&o.d.D(b)},Ke.preinit=function(b,p){if(typeof b=="string"&&p&&typeof p.as=="string"){var N=p.as,_=T(N,p.crossOrigin),k=typeof p.integrity=="string"?p.integrity:void 0,C=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;N==="style"?o.d.S(b,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:k,fetchPriority:C}):N==="script"&&o.d.X(b,{crossOrigin:_,integrity:k,fetchPriority:C,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ke.preinitModule=function(b,p){if(typeof b=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var N=T(p.as,p.crossOrigin);o.d.M(b,{crossOrigin:N,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(b)},Ke.preload=function(b,p){if(typeof b=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var N=p.as,_=T(N,p.crossOrigin);o.d.L(b,N,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ke.preloadModule=function(b,p){if(typeof b=="string")if(p){var N=T(p.as,p.crossOrigin);o.d.m(b,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:N,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(b)},Ke.requestFormReset=function(b){o.d.r(b)},Ke.unstable_batchedUpdates=function(b,p){return b(p)},Ke.useFormState=function(b,p,N){return E.H.useFormState(b,p,N)},Ke.useFormStatus=function(){return E.H.useHostTransitionStatus()},Ke.version="19.1.1",Ke}var Lf;function P0(){if(Lf)return Tc.exports;Lf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(f){console.error(f)}}return s(),Tc.exports=$0(),Tc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qf;function I0(){if(qf)return On;qf=1;var s=W0(),f=Mc(),d=P0();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function v(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function E(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function T(e){if(v(e)!==e)throw Error(o(188))}function b(e){var t=e.alternate;if(!t){if(t=v(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return T(n),e;if(r===l)return T(n),t;r=r.sibling}throw Error(o(188))}if(a.return!==l.return)a=n,l=r;else{for(var c=!1,u=n.child;u;){if(u===a){c=!0,a=n,l=r;break}if(u===l){c=!0,l=n,a=r;break}u=u.sibling}if(!c){for(u=r.child;u;){if(u===a){c=!0,a=r,l=n;break}if(u===l){c=!0,l=r,a=n;break}u=u.sibling}if(!c)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,_=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),Q=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),ye=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),Ue=Symbol.for("react.suspense_list"),Re=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),we=Symbol.for("react.activity"),et=Symbol.for("react.memo_cache_sentinel"),dt=Symbol.iterator;function Xe(e){return e===null||typeof e!="object"?null:(e=dt&&e[dt]||e["@@iterator"],typeof e=="function"?e:null)}var Na=Symbol.for("react.client.reference");function wa(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Na?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case H:return"Profiler";case B:return"StrictMode";case P:return"Suspense";case Ue:return"SuspenseList";case we:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case ee:return(e.displayName||"Context")+".Provider";case Q:return(e._context.displayName||"Context")+".Consumer";case ye:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Re:return t=e.displayName||null,t!==null?t:wa(e.type)||"Memo";case _e:t=e._payload,e=e._init;try{return wa(e(t))}catch{}}return null}var Qe=Array.isArray,R=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},pe=[],x=-1;function U(e){return{current:e}}function Y(e){0>x||(e.current=pe[x],pe[x]=null,x--)}function L(e,t){x++,pe[x]=e.current,e.current=t}var K=U(null),se=U(null),I=U(null),tt=U(null);function ve(e,t){switch(L(I,t),L(se,e),L(K,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?rf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=rf(t),e=sf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(K),L(K,e)}function $t(){Y(K),Y(se),Y(I)}function sr(e){e.memoizedState!==null&&L(tt,e);var t=K.current,a=sf(t,e.type);t!==a&&(L(se,e),L(K,a))}function kn(e){se.current===e&&(Y(K),Y(se)),tt.current===e&&(Y(tt),En._currentValue=W)}var cr=Object.prototype.hasOwnProperty,or=s.unstable_scheduleCallback,ur=s.unstable_cancelCallback,wm=s.unstable_shouldYield,Sm=s.unstable_requestPaint,St=s.unstable_now,Em=s.unstable_getCurrentPriorityLevel,kc=s.unstable_ImmediatePriority,Lc=s.unstable_UserBlockingPriority,Ln=s.unstable_NormalPriority,zm=s.unstable_LowPriority,qc=s.unstable_IdlePriority,Tm=s.log,Am=s.unstable_setDisableYieldValue,Ml=null,at=null;function Pt(e){if(typeof Tm=="function"&&Am(e),at&&typeof at.setStrictMode=="function")try{at.setStrictMode(Ml,e)}catch{}}var lt=Math.clz32?Math.clz32:Om,Dm=Math.log,Rm=Math.LN2;function Om(e){return e>>>=0,e===0?32:31-(Dm(e)/Rm|0)|0}var qn=256,Yn=4194304;function Sa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Gn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,r=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var u=l&134217727;return u!==0?(l=u&~r,l!==0?n=Sa(l):(c&=u,c!==0?n=Sa(c):a||(a=u&~e,a!==0&&(n=Sa(a))))):(u=l&~r,u!==0?n=Sa(u):c!==0?n=Sa(c):a||(a=l&~e,a!==0&&(n=Sa(a)))),n===0?0:t!==0&&t!==n&&(t&r)===0&&(r=n&-n,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:n}function Cl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Mm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yc(){var e=qn;return qn<<=1,(qn&4194048)===0&&(qn=256),e}function Gc(){var e=Yn;return Yn<<=1,(Yn&62914560)===0&&(Yn=4194304),e}function dr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ul(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Cm(e,t,a,l,n,r){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,m=e.expirationTimes,w=e.hiddenUpdates;for(a=c&~a;0<a;){var D=31-lt(a),M=1<<D;u[D]=0,m[D]=-1;var S=w[D];if(S!==null)for(w[D]=null,D=0;D<S.length;D++){var z=S[D];z!==null&&(z.lane&=-536870913)}a&=~M}l!==0&&Xc(e,l,0),r!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=r&~(c&~t))}function Xc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-lt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function Qc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-lt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function fr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function mr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vc(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:zf(e.type))}function Um(e,t){var a=q.p;try{return q.p=e,t()}finally{q.p=a}}var It=Math.random().toString(36).slice(2),Ve="__reactFiber$"+It,Fe="__reactProps$"+It,Va="__reactContainer$"+It,hr="__reactEvents$"+It,_m="__reactListeners$"+It,Bm="__reactHandles$"+It,Zc="__reactResources$"+It,_l="__reactMarker$"+It;function pr(e){delete e[Ve],delete e[Fe],delete e[hr],delete e[_m],delete e[Bm]}function Za(e){var t=e[Ve];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Va]||a[Ve]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=df(e);e!==null;){if(a=e[Ve])return a;e=df(e)}return t}e=a,a=e.parentNode}return null}function Ka(e){if(e=e[Ve]||e[Va]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Bl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Ja(e){var t=e[Zc];return t||(t=e[Zc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Be(e){e[_l]=!0}var Kc=new Set,Jc={};function Ea(e,t){Fa(e,t),Fa(e+"Capture",t)}function Fa(e,t){for(Jc[e]=t,e=0;e<t.length;e++)Kc.add(t[e])}var Hm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fc={},Wc={};function km(e){return cr.call(Wc,e)?!0:cr.call(Fc,e)?!1:Hm.test(e)?Wc[e]=!0:(Fc[e]=!0,!1)}function Xn(e,t,a){if(km(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Qn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Mt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}var xr,$c;function Wa(e){if(xr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);xr=t&&t[1]||"",$c=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xr+e+$c}var gr=!1;function vr(e,t){if(!e||gr)return"";gr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(z){var S=z}Reflect.construct(e,[],M)}else{try{M.call()}catch(z){S=z}e.call(M.prototype)}}else{try{throw Error()}catch(z){S=z}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(z){if(z&&S&&typeof z.stack=="string")return[z.stack,S.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),c=r[0],u=r[1];if(c&&u){var m=c.split(`
`),w=u.split(`
`);for(n=l=0;l<m.length&&!m[l].includes("DetermineComponentFrameRoot");)l++;for(;n<w.length&&!w[n].includes("DetermineComponentFrameRoot");)n++;if(l===m.length||n===w.length)for(l=m.length-1,n=w.length-1;1<=l&&0<=n&&m[l]!==w[n];)n--;for(;1<=l&&0<=n;l--,n--)if(m[l]!==w[n]){if(l!==1||n!==1)do if(l--,n--,0>n||m[l]!==w[n]){var D=`
`+m[l].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=l&&0<=n);break}}}finally{gr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Wa(a):""}function Lm(e){switch(e.tag){case 26:case 27:case 5:return Wa(e.type);case 16:return Wa("Lazy");case 13:return Wa("Suspense");case 19:return Wa("SuspenseList");case 0:case 15:return vr(e.type,!1);case 11:return vr(e.type.render,!1);case 1:return vr(e.type,!0);case 31:return Wa("Activity");default:return""}}function Pc(e){try{var t="";do t+=Lm(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ft(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ic(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qm(e){var t=Ic(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){l=""+c,r.call(this,c)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vn(e){e._valueTracker||(e._valueTracker=qm(e))}function eo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Ic(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Zn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ym=/[\n"\\]/g;function mt(e){return e.replace(Ym,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function br(e,t,a,l,n,r,c,u){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ft(t)):e.value!==""+ft(t)&&(e.value=""+ft(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?yr(e,c,ft(t)):a!=null?yr(e,c,ft(a)):l!=null&&e.removeAttribute("value"),n==null&&r!=null&&(e.defaultChecked=!!r),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+ft(u):e.removeAttribute("name")}function to(e,t,a,l,n,r,c,u){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;a=a!=null?""+ft(a):"",t=t!=null?""+ft(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=u?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c)}function yr(e,t,a){t==="number"&&Zn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function $a(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+ft(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function ao(e,t,a){if(t!=null&&(t=""+ft(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ft(a):""}function lo(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(o(92));if(Qe(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=ft(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function Pa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Gm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function no(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Gm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function io(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&no(e,n,l)}else for(var r in t)t.hasOwnProperty(r)&&no(e,r,t[r])}function jr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kn(e){return Qm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Nr=null;function wr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ia=null,el=null;function ro(e){var t=Ka(e);if(t&&(e=t.stateNode)){var a=e[Fe]||null;e:switch(e=t.stateNode,t.type){case"input":if(br(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Fe]||null;if(!n)throw Error(o(90));br(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&eo(l)}break e;case"textarea":ao(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&$a(e,!!a.multiple,t,!1)}}}var Sr=!1;function so(e,t,a){if(Sr)return e(t,a);Sr=!0;try{var l=e(t);return l}finally{if(Sr=!1,(Ia!==null||el!==null)&&(Mi(),Ia&&(t=Ia,e=el,el=Ia=null,ro(t),e)))for(t=0;t<e.length;t++)ro(e[t])}}function Hl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Fe]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Er=!1;if(Ct)try{var kl={};Object.defineProperty(kl,"passive",{get:function(){Er=!0}}),window.addEventListener("test",kl,kl),window.removeEventListener("test",kl,kl)}catch{Er=!1}var ea=null,zr=null,Jn=null;function co(){if(Jn)return Jn;var e,t=zr,a=t.length,l,n="value"in ea?ea.value:ea.textContent,r=n.length;for(e=0;e<a&&t[e]===n[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===n[r-l];l++);return Jn=n.slice(e,1<l?1-l:void 0)}function Fn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wn(){return!0}function oo(){return!1}function We(e){function t(a,l,n,r,c){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=r,this.target=c,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(r):r[u]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Wn:oo,this.isPropagationStopped=oo,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),t}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$n=We(za),Ll=N({},za,{view:0,detail:0}),Vm=We(Ll),Tr,Ar,ql,Pn=N({},Ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ql&&(ql&&e.type==="mousemove"?(Tr=e.screenX-ql.screenX,Ar=e.screenY-ql.screenY):Ar=Tr=0,ql=e),Tr)},movementY:function(e){return"movementY"in e?e.movementY:Ar}}),uo=We(Pn),Zm=N({},Pn,{dataTransfer:0}),Km=We(Zm),Jm=N({},Ll,{relatedTarget:0}),Dr=We(Jm),Fm=N({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),Wm=We(Fm),$m=N({},za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pm=We($m),Im=N({},za,{data:0}),fo=We(Im),eh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},th={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ah={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ah[e])?!!t[e]:!1}function Rr(){return lh}var nh=N({},Ll,{key:function(e){if(e.key){var t=eh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?th[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rr,charCode:function(e){return e.type==="keypress"?Fn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ih=We(nh),rh=N({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mo=We(rh),sh=N({},Ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rr}),ch=We(sh),oh=N({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),uh=We(oh),dh=N({},Pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fh=We(dh),mh=N({},za,{newState:0,oldState:0}),hh=We(mh),ph=[9,13,27,32],Or=Ct&&"CompositionEvent"in window,Yl=null;Ct&&"documentMode"in document&&(Yl=document.documentMode);var xh=Ct&&"TextEvent"in window&&!Yl,ho=Ct&&(!Or||Yl&&8<Yl&&11>=Yl),po=" ",xo=!1;function go(e,t){switch(e){case"keyup":return ph.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tl=!1;function gh(e,t){switch(e){case"compositionend":return vo(t);case"keypress":return t.which!==32?null:(xo=!0,po);case"textInput":return e=t.data,e===po&&xo?null:e;default:return null}}function vh(e,t){if(tl)return e==="compositionend"||!Or&&go(e,t)?(e=co(),Jn=zr=ea=null,tl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ho&&t.locale!=="ko"?null:t.data;default:return null}}var bh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bh[e.type]:t==="textarea"}function yo(e,t,a,l){Ia?el?el.push(l):el=[l]:Ia=l,t=ki(t,"onChange"),0<t.length&&(a=new $n("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Gl=null,Xl=null;function yh(e){ef(e,0)}function In(e){var t=Bl(e);if(eo(t))return e}function jo(e,t){if(e==="change")return t}var No=!1;if(Ct){var Mr;if(Ct){var Cr="oninput"in document;if(!Cr){var wo=document.createElement("div");wo.setAttribute("oninput","return;"),Cr=typeof wo.oninput=="function"}Mr=Cr}else Mr=!1;No=Mr&&(!document.documentMode||9<document.documentMode)}function So(){Gl&&(Gl.detachEvent("onpropertychange",Eo),Xl=Gl=null)}function Eo(e){if(e.propertyName==="value"&&In(Xl)){var t=[];yo(t,Xl,e,wr(e)),so(yh,t)}}function jh(e,t,a){e==="focusin"?(So(),Gl=t,Xl=a,Gl.attachEvent("onpropertychange",Eo)):e==="focusout"&&So()}function Nh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return In(Xl)}function wh(e,t){if(e==="click")return In(t)}function Sh(e,t){if(e==="input"||e==="change")return In(t)}function Eh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Eh;function Ql(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!cr.call(t,n)||!nt(e[n],t[n]))return!1}return!0}function zo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function To(e,t){var a=zo(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=zo(a)}}function Ao(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ao(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Do(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Zn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Zn(e.document)}return t}function Ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var zh=Ct&&"documentMode"in document&&11>=document.documentMode,al=null,_r=null,Vl=null,Br=!1;function Ro(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Br||al==null||al!==Zn(l)||(l=al,"selectionStart"in l&&Ur(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Vl&&Ql(Vl,l)||(Vl=l,l=ki(_r,"onSelect"),0<l.length&&(t=new $n("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=al)))}function Ta(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ll={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionrun:Ta("Transition","TransitionRun"),transitionstart:Ta("Transition","TransitionStart"),transitioncancel:Ta("Transition","TransitionCancel"),transitionend:Ta("Transition","TransitionEnd")},Hr={},Oo={};Ct&&(Oo=document.createElement("div").style,"AnimationEvent"in window||(delete ll.animationend.animation,delete ll.animationiteration.animation,delete ll.animationstart.animation),"TransitionEvent"in window||delete ll.transitionend.transition);function Aa(e){if(Hr[e])return Hr[e];if(!ll[e])return e;var t=ll[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Oo)return Hr[e]=t[a];return e}var Mo=Aa("animationend"),Co=Aa("animationiteration"),Uo=Aa("animationstart"),Th=Aa("transitionrun"),Ah=Aa("transitionstart"),Dh=Aa("transitioncancel"),_o=Aa("transitionend"),Bo=new Map,kr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");kr.push("scrollEnd");function jt(e,t){Bo.set(e,t),Ea(t,[e])}var Ho=new WeakMap;function ht(e,t){if(typeof e=="object"&&e!==null){var a=Ho.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Pc(t)},Ho.set(e,t),t)}return{value:e,source:t,stack:Pc(t)}}var pt=[],nl=0,Lr=0;function ei(){for(var e=nl,t=Lr=nl=0;t<e;){var a=pt[t];pt[t++]=null;var l=pt[t];pt[t++]=null;var n=pt[t];pt[t++]=null;var r=pt[t];if(pt[t++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}r!==0&&ko(a,n,r)}}function ti(e,t,a,l){pt[nl++]=e,pt[nl++]=t,pt[nl++]=a,pt[nl++]=l,Lr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function qr(e,t,a,l){return ti(e,t,a,l),ai(e)}function il(e,t){return ti(e,null,null,t),ai(e)}function ko(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,r=e.return;r!==null;)r.childLanes|=a,l=r.alternate,l!==null&&(l.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(n=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,n&&t!==null&&(n=31-lt(a),e=r.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),r):null}function ai(e){if(50<gn)throw gn=0,Zs=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var rl={};function Rh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,a,l){return new Rh(e,t,a,l)}function Yr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ut(e,t){var a=e.alternate;return a===null?(a=it(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Lo(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function li(e,t,a,l,n,r){var c=0;if(l=e,typeof e=="function")Yr(e)&&(c=1);else if(typeof e=="string")c=M0(e,a,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case we:return e=it(31,a,t,n),e.elementType=we,e.lanes=r,e;case X:return Da(a.children,n,r,t);case B:c=8,n|=24;break;case H:return e=it(12,a,t,n|2),e.elementType=H,e.lanes=r,e;case P:return e=it(13,a,t,n),e.elementType=P,e.lanes=r,e;case Ue:return e=it(19,a,t,n),e.elementType=Ue,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:case ee:c=10;break e;case Q:c=9;break e;case ye:c=11;break e;case Re:c=14;break e;case _e:c=16,l=null;break e}c=29,a=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=it(c,a,t,n),t.elementType=e,t.type=l,t.lanes=r,t}function Da(e,t,a,l){return e=it(7,e,l,t),e.lanes=a,e}function Gr(e,t,a){return e=it(6,e,null,t),e.lanes=a,e}function Xr(e,t,a){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var sl=[],cl=0,ni=null,ii=0,xt=[],gt=0,Ra=null,_t=1,Bt="";function Oa(e,t){sl[cl++]=ii,sl[cl++]=ni,ni=e,ii=t}function qo(e,t,a){xt[gt++]=_t,xt[gt++]=Bt,xt[gt++]=Ra,Ra=e;var l=_t;e=Bt;var n=32-lt(l)-1;l&=~(1<<n),a+=1;var r=32-lt(t)+n;if(30<r){var c=n-n%5;r=(l&(1<<c)-1).toString(32),l>>=c,n-=c,_t=1<<32-lt(t)+n|a<<n|l,Bt=r+e}else _t=1<<r|a<<n|l,Bt=e}function Qr(e){e.return!==null&&(Oa(e,1),qo(e,1,0))}function Vr(e){for(;e===ni;)ni=sl[--cl],sl[cl]=null,ii=sl[--cl],sl[cl]=null;for(;e===Ra;)Ra=xt[--gt],xt[gt]=null,Bt=xt[--gt],xt[gt]=null,_t=xt[--gt],xt[gt]=null}var Je=null,Se=null,oe=!1,Ma=null,Et=!1,Zr=Error(o(519));function Ca(e){var t=Error(o(418,""));throw Jl(ht(t,e)),Zr}function Yo(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ve]=e,t[Fe]=l,a){case"dialog":ie("cancel",t),ie("close",t);break;case"iframe":case"object":case"embed":ie("load",t);break;case"video":case"audio":for(a=0;a<bn.length;a++)ie(bn[a],t);break;case"source":ie("error",t);break;case"img":case"image":case"link":ie("error",t),ie("load",t);break;case"details":ie("toggle",t);break;case"input":ie("invalid",t),to(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Vn(t);break;case"select":ie("invalid",t);break;case"textarea":ie("invalid",t),lo(t,l.value,l.defaultValue,l.children),Vn(t)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||nf(t.textContent,a)?(l.popover!=null&&(ie("beforetoggle",t),ie("toggle",t)),l.onScroll!=null&&ie("scroll",t),l.onScrollEnd!=null&&ie("scrollend",t),l.onClick!=null&&(t.onclick=Li),t=!0):t=!1,t||Ca(e)}function Go(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:Je=Je.return}}function Zl(e){if(e!==Je)return!1;if(!oe)return Go(e),oe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||cc(e.type,e.memoizedProps)),a=!a),a&&Se&&Ca(e),Go(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Se=wt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Se=null}}else t===27?(t=Se,xa(e.type)?(e=fc,fc=null,Se=e):Se=t):Se=Je?wt(e.stateNode.nextSibling):null;return!0}function Kl(){Se=Je=null,oe=!1}function Xo(){var e=Ma;return e!==null&&(Ie===null?Ie=e:Ie.push.apply(Ie,e),Ma=null),e}function Jl(e){Ma===null?Ma=[e]:Ma.push(e)}var Kr=U(null),Ua=null,Ht=null;function ta(e,t,a){L(Kr,t._currentValue),t._currentValue=a}function kt(e){e._currentValue=Kr.current,Y(Kr)}function Jr(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Fr(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var r=n.dependencies;if(r!==null){var c=n.child;r=r.firstContext;e:for(;r!==null;){var u=r;r=n;for(var m=0;m<t.length;m++)if(u.context===t[m]){r.lanes|=a,u=r.alternate,u!==null&&(u.lanes|=a),Jr(r.return,a,e),l||(c=null);break e}r=u.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(o(341));c.lanes|=a,r=c.alternate,r!==null&&(r.lanes|=a),Jr(c,a,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function Fl(e,t,a,l){e=null;for(var n=t,r=!1;n!==null;){if(!r){if((n.flags&524288)!==0)r=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(o(387));if(c=c.memoizedProps,c!==null){var u=n.type;nt(n.pendingProps.value,c.value)||(e!==null?e.push(u):e=[u])}}else if(n===tt.current){if(c=n.alternate,c===null)throw Error(o(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(En):e=[En])}n=n.return}e!==null&&Fr(t,e,a,l),t.flags|=262144}function ri(e){for(e=e.firstContext;e!==null;){if(!nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _a(e){Ua=e,Ht=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ze(e){return Qo(Ua,e)}function si(e,t){return Ua===null&&_a(e),Qo(e,t)}function Qo(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ht===null){if(e===null)throw Error(o(308));Ht=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ht=Ht.next=t;return a}var Oh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Mh=s.unstable_scheduleCallback,Ch=s.unstable_NormalPriority,Oe={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wr(){return{controller:new Oh,data:new Map,refCount:0}}function Wl(e){e.refCount--,e.refCount===0&&Mh(Ch,function(){e.controller.abort()})}var $l=null,$r=0,ol=0,ul=null;function Uh(e,t){if($l===null){var a=$l=[];$r=0,ol=Is(),ul={status:"pending",value:void 0,then:function(l){a.push(l)}}}return $r++,t.then(Vo,Vo),t}function Vo(){if(--$r===0&&$l!==null){ul!==null&&(ul.status="fulfilled");var e=$l;$l=null,ol=0,ul=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _h(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Zo=R.S;R.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Uh(e,t),Zo!==null&&Zo(e,t)};var Ba=U(null);function Pr(){var e=Ba.current;return e!==null?e:ge.pooledCache}function ci(e,t){t===null?L(Ba,Ba.current):L(Ba,t.pool)}function Ko(){var e=Pr();return e===null?null:{parent:Oe._currentValue,pool:e}}var Pl=Error(o(460)),Jo=Error(o(474)),oi=Error(o(542)),Ir={then:function(){}};function Fo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ui(){}function Wo(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ui,ui),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Po(e),e;default:if(typeof t.status=="string")t.then(ui,ui);else{if(e=ge,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Po(e),e}throw Il=t,Pl}}var Il=null;function $o(){if(Il===null)throw Error(o(459));var e=Il;return Il=null,e}function Po(e){if(e===Pl||e===oi)throw Error(o(483))}var aa=!1;function es(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ts(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function la(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function na(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ue&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=ai(e),ko(e,null,a),t}return ti(e,l,t,a),ai(e)}function en(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Qc(e,a)}}function as(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=c:r=r.next=c,a=a.next}while(a!==null);r===null?n=r=t:r=r.next=t}else n=r=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ls=!1;function tn(){if(ls){var e=ul;if(e!==null)throw e}}function an(e,t,a,l){ls=!1;var n=e.updateQueue;aa=!1;var r=n.firstBaseUpdate,c=n.lastBaseUpdate,u=n.shared.pending;if(u!==null){n.shared.pending=null;var m=u,w=m.next;m.next=null,c===null?r=w:c.next=w,c=m;var D=e.alternate;D!==null&&(D=D.updateQueue,u=D.lastBaseUpdate,u!==c&&(u===null?D.firstBaseUpdate=w:u.next=w,D.lastBaseUpdate=m))}if(r!==null){var M=n.baseState;c=0,D=w=m=null,u=r;do{var S=u.lane&-536870913,z=S!==u.lane;if(z?(re&S)===S:(l&S)===S){S!==0&&S===ol&&(ls=!0),D!==null&&(D=D.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var $=e,J=u;S=t;var he=a;switch(J.tag){case 1:if($=J.payload,typeof $=="function"){M=$.call(he,M,S);break e}M=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=J.payload,S=typeof $=="function"?$.call(he,M,S):$,S==null)break e;M=N({},M,S);break e;case 2:aa=!0}}S=u.callback,S!==null&&(e.flags|=64,z&&(e.flags|=8192),z=n.callbacks,z===null?n.callbacks=[S]:z.push(S))}else z={lane:S,tag:u.tag,payload:u.payload,callback:u.callback,next:null},D===null?(w=D=z,m=M):D=D.next=z,c|=S;if(u=u.next,u===null){if(u=n.shared.pending,u===null)break;z=u,u=z.next,z.next=null,n.lastBaseUpdate=z,n.shared.pending=null}}while(!0);D===null&&(m=M),n.baseState=m,n.firstBaseUpdate=w,n.lastBaseUpdate=D,r===null&&(n.shared.lanes=0),fa|=c,e.lanes=c,e.memoizedState=M}}function Io(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function eu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Io(a[e],t)}var dl=U(null),di=U(0);function tu(e,t){e=Vt,L(di,e),L(dl,t),Vt=e|t.baseLanes}function ns(){L(di,Vt),L(dl,dl.current)}function is(){Vt=di.current,Y(dl),Y(di)}var ia=0,ae=null,fe=null,Ae=null,fi=!1,fl=!1,Ha=!1,mi=0,ln=0,ml=null,Bh=0;function ze(){throw Error(o(321))}function rs(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!nt(e[a],t[a]))return!1;return!0}function ss(e,t,a,l,n,r){return ia=r,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?ku:Lu,Ha=!1,r=a(l,n),Ha=!1,fl&&(r=lu(t,a,l,n)),au(e),r}function au(e){R.H=bi;var t=fe!==null&&fe.next!==null;if(ia=0,Ae=fe=ae=null,fi=!1,ln=0,ml=null,t)throw Error(o(300));e===null||He||(e=e.dependencies,e!==null&&ri(e)&&(He=!0))}function lu(e,t,a,l){ae=e;var n=0;do{if(fl&&(ml=null),ln=0,fl=!1,25<=n)throw Error(o(301));if(n+=1,Ae=fe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}R.H=Xh,r=t(a,l)}while(fl);return r}function Hh(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?nn(t):t,e=e.useState()[0],(fe!==null?fe.memoizedState:null)!==e&&(ae.flags|=1024),t}function cs(){var e=mi!==0;return mi=0,e}function os(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function us(e){if(fi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fi=!1}ia=0,Ae=fe=ae=null,fl=!1,ln=mi=0,ml=null}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?ae.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function De(){if(fe===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=Ae===null?ae.memoizedState:Ae.next;if(t!==null)Ae=t,fe=e;else{if(e===null)throw ae.alternate===null?Error(o(467)):Error(o(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},Ae===null?ae.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function ds(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nn(e){var t=ln;return ln+=1,ml===null&&(ml=[]),e=Wo(ml,e,t),t=ae,(Ae===null?t.memoizedState:Ae.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?ku:Lu),e}function hi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return nn(e);if(e.$$typeof===ee)return Ze(e)}throw Error(o(438,String(e)))}function fs(e){var t=null,a=ae.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ae.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ds(),ae.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=et;return t.index++,a}function Lt(e,t){return typeof t=="function"?t(e):t}function pi(e){var t=De();return ms(t,fe,e)}function ms(e,t,a){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var n=e.baseQueue,r=l.pending;if(r!==null){if(n!==null){var c=n.next;n.next=r.next,r.next=c}t.baseQueue=n=r,l.pending=null}if(r=e.baseState,n===null)e.memoizedState=r;else{t=n.next;var u=c=null,m=null,w=t,D=!1;do{var M=w.lane&-536870913;if(M!==w.lane?(re&M)===M:(ia&M)===M){var S=w.revertLane;if(S===0)m!==null&&(m=m.next={lane:0,revertLane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),M===ol&&(D=!0);else if((ia&S)===S){w=w.next,S===ol&&(D=!0);continue}else M={lane:0,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},m===null?(u=m=M,c=r):m=m.next=M,ae.lanes|=S,fa|=S;M=w.action,Ha&&a(r,M),r=w.hasEagerState?w.eagerState:a(r,M)}else S={lane:M,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},m===null?(u=m=S,c=r):m=m.next=S,ae.lanes|=M,fa|=M;w=w.next}while(w!==null&&w!==t);if(m===null?c=r:m.next=u,!nt(r,e.memoizedState)&&(He=!0,D&&(a=ul,a!==null)))throw a;e.memoizedState=r,e.baseState=c,e.baseQueue=m,l.lastRenderedState=r}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function hs(e){var t=De(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,r=t.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do r=e(r,c.action),c=c.next;while(c!==n);nt(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,l]}function nu(e,t,a){var l=ae,n=De(),r=oe;if(r){if(a===void 0)throw Error(o(407));a=a()}else a=t();var c=!nt((fe||n).memoizedState,a);c&&(n.memoizedState=a,He=!0),n=n.queue;var u=su.bind(null,l,n,e);if(rn(2048,8,u,[e]),n.getSnapshot!==t||c||Ae!==null&&Ae.memoizedState.tag&1){if(l.flags|=2048,hl(9,xi(),ru.bind(null,l,n,a,t),null),ge===null)throw Error(o(349));r||(ia&124)!==0||iu(l,t,a)}return a}function iu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ae.updateQueue,t===null?(t=ds(),ae.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function ru(e,t,a,l){t.value=a,t.getSnapshot=l,cu(t)&&ou(e)}function su(e,t,a){return a(function(){cu(t)&&ou(e)})}function cu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!nt(e,a)}catch{return!0}}function ou(e){var t=il(e,2);t!==null&&ut(t,e,2)}function ps(e){var t=$e();if(typeof e=="function"){var a=e;if(e=a(),Ha){Pt(!0);try{a()}finally{Pt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:e},t}function uu(e,t,a,l){return e.baseState=a,ms(e,fe,typeof l=="function"?l:Lt)}function kh(e,t,a,l,n){if(vi(e))throw Error(o(485));if(e=t.action,e!==null){var r={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){r.listeners.push(c)}};R.T!==null?a(!0):r.isTransition=!1,l(r),a=t.pending,a===null?(r.next=t.pending=r,du(t,r)):(r.next=a.next,t.pending=a.next=r)}}function du(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var r=R.T,c={};R.T=c;try{var u=a(n,l),m=R.S;m!==null&&m(c,u),fu(e,t,u)}catch(w){xs(e,t,w)}finally{R.T=r}}else try{r=a(n,l),fu(e,t,r)}catch(w){xs(e,t,w)}}function fu(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){mu(e,t,l)},function(l){return xs(e,t,l)}):mu(e,t,a)}function mu(e,t,a){t.status="fulfilled",t.value=a,hu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,du(e,a)))}function xs(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,hu(t),t=t.next;while(t!==l)}e.action=null}function hu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function pu(e,t){return t}function xu(e,t){if(oe){var a=ge.formState;if(a!==null){e:{var l=ae;if(oe){if(Se){t:{for(var n=Se,r=Et;n.nodeType!==8;){if(!r){n=null;break t}if(n=wt(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){Se=wt(n.nextSibling),l=n.data==="F!";break e}}Ca(l)}l=!1}l&&(t=a[0])}}return a=$e(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pu,lastRenderedState:t},a.queue=l,a=_u.bind(null,ae,l),l.dispatch=a,l=ps(!1),r=js.bind(null,ae,!1,l.queue),l=$e(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=kh.bind(null,ae,n,r,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function gu(e){var t=De();return vu(t,fe,e)}function vu(e,t,a){if(t=ms(e,t,pu)[0],e=pi(Lt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=nn(t)}catch(c){throw c===Pl?oi:c}else l=t;t=De();var n=t.queue,r=n.dispatch;return a!==t.memoizedState&&(ae.flags|=2048,hl(9,xi(),Lh.bind(null,n,a),null)),[l,r,e]}function Lh(e,t){e.action=t}function bu(e){var t=De(),a=fe;if(a!==null)return vu(t,a,e);De(),t=t.memoizedState,a=De();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function hl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ae.updateQueue,t===null&&(t=ds(),ae.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function xi(){return{destroy:void 0,resource:void 0}}function yu(){return De().memoizedState}function gi(e,t,a,l){var n=$e();l=l===void 0?null:l,ae.flags|=e,n.memoizedState=hl(1|t,xi(),a,l)}function rn(e,t,a,l){var n=De();l=l===void 0?null:l;var r=n.memoizedState.inst;fe!==null&&l!==null&&rs(l,fe.memoizedState.deps)?n.memoizedState=hl(t,r,a,l):(ae.flags|=e,n.memoizedState=hl(1|t,r,a,l))}function ju(e,t){gi(8390656,8,e,t)}function Nu(e,t){rn(2048,8,e,t)}function wu(e,t){return rn(4,2,e,t)}function Su(e,t){return rn(4,4,e,t)}function Eu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zu(e,t,a){a=a!=null?a.concat([e]):null,rn(4,4,Eu.bind(null,t,e),a)}function gs(){}function Tu(e,t){var a=De();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&rs(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Au(e,t){var a=De();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&rs(t,l[1]))return l[0];if(l=e(),Ha){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[l,t],l}function vs(e,t,a){return a===void 0||(ia&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Od(),ae.lanes|=e,fa|=e,a)}function Du(e,t,a,l){return nt(a,t)?a:dl.current!==null?(e=vs(e,a,l),nt(e,t)||(He=!0),e):(ia&42)===0?(He=!0,e.memoizedState=a):(e=Od(),ae.lanes|=e,fa|=e,t)}function Ru(e,t,a,l,n){var r=q.p;q.p=r!==0&&8>r?r:8;var c=R.T,u={};R.T=u,js(e,!1,t,a);try{var m=n(),w=R.S;if(w!==null&&w(u,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var D=_h(m,l);sn(e,t,D,ot(e))}else sn(e,t,l,ot(e))}catch(M){sn(e,t,{then:function(){},status:"rejected",reason:M},ot())}finally{q.p=r,R.T=c}}function qh(){}function bs(e,t,a,l){if(e.tag!==5)throw Error(o(476));var n=Ou(e).queue;Ru(e,n,t,W,a===null?qh:function(){return Mu(e),a(l)})}function Ou(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:W},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Mu(e){var t=Ou(e).next.queue;sn(e,t,{},ot())}function ys(){return Ze(En)}function Cu(){return De().memoizedState}function Uu(){return De().memoizedState}function Yh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ot();e=la(a);var l=na(t,e,a);l!==null&&(ut(l,t,a),en(l,t,a)),t={cache:Wr()},e.payload=t;return}t=t.return}}function Gh(e,t,a){var l=ot();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},vi(e)?Bu(t,a):(a=qr(e,t,a,l),a!==null&&(ut(a,e,l),Hu(a,t,l)))}function _u(e,t,a){var l=ot();sn(e,t,a,l)}function sn(e,t,a,l){var n={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(vi(e))Bu(t,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var c=t.lastRenderedState,u=r(c,a);if(n.hasEagerState=!0,n.eagerState=u,nt(u,c))return ti(e,t,n,0),ge===null&&ei(),!1}catch{}finally{}if(a=qr(e,t,n,l),a!==null)return ut(a,e,l),Hu(a,t,l),!0}return!1}function js(e,t,a,l){if(l={lane:2,revertLane:Is(),action:l,hasEagerState:!1,eagerState:null,next:null},vi(e)){if(t)throw Error(o(479))}else t=qr(e,a,l,2),t!==null&&ut(t,e,2)}function vi(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Bu(e,t){fl=fi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Hu(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Qc(e,a)}}var bi={readContext:Ze,use:hi,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useLayoutEffect:ze,useInsertionEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useSyncExternalStore:ze,useId:ze,useHostTransitionStatus:ze,useFormState:ze,useActionState:ze,useOptimistic:ze,useMemoCache:ze,useCacheRefresh:ze},ku={readContext:Ze,use:hi,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:ju,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,gi(4194308,4,Eu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return gi(4194308,4,e,t)},useInsertionEffect:function(e,t){gi(4,2,e,t)},useMemo:function(e,t){var a=$e();t=t===void 0?null:t;var l=e();if(Ha){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=$e();if(a!==void 0){var n=a(t);if(Ha){Pt(!0);try{a(t)}finally{Pt(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Gh.bind(null,ae,e),[l.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:function(e){e=ps(e);var t=e.queue,a=_u.bind(null,ae,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:gs,useDeferredValue:function(e,t){var a=$e();return vs(a,e,t)},useTransition:function(){var e=ps(!1);return e=Ru.bind(null,ae,e.queue,!0,!1),$e().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ae,n=$e();if(oe){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),ge===null)throw Error(o(349));(re&124)!==0||iu(l,t,a)}n.memoizedState=a;var r={value:a,getSnapshot:t};return n.queue=r,ju(su.bind(null,l,r,e),[e]),l.flags|=2048,hl(9,xi(),ru.bind(null,l,r,a,t),null),a},useId:function(){var e=$e(),t=ge.identifierPrefix;if(oe){var a=Bt,l=_t;a=(l&~(1<<32-lt(l)-1)).toString(32)+a,t="«"+t+"R"+a,a=mi++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Bh++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:ys,useFormState:xu,useActionState:xu,useOptimistic:function(e){var t=$e();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=js.bind(null,ae,!0,a),a.dispatch=t,[e,t]},useMemoCache:fs,useCacheRefresh:function(){return $e().memoizedState=Yh.bind(null,ae)}},Lu={readContext:Ze,use:hi,useCallback:Tu,useContext:Ze,useEffect:Nu,useImperativeHandle:zu,useInsertionEffect:wu,useLayoutEffect:Su,useMemo:Au,useReducer:pi,useRef:yu,useState:function(){return pi(Lt)},useDebugValue:gs,useDeferredValue:function(e,t){var a=De();return Du(a,fe.memoizedState,e,t)},useTransition:function(){var e=pi(Lt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:nn(e),t]},useSyncExternalStore:nu,useId:Cu,useHostTransitionStatus:ys,useFormState:gu,useActionState:gu,useOptimistic:function(e,t){var a=De();return uu(a,fe,e,t)},useMemoCache:fs,useCacheRefresh:Uu},Xh={readContext:Ze,use:hi,useCallback:Tu,useContext:Ze,useEffect:Nu,useImperativeHandle:zu,useInsertionEffect:wu,useLayoutEffect:Su,useMemo:Au,useReducer:hs,useRef:yu,useState:function(){return hs(Lt)},useDebugValue:gs,useDeferredValue:function(e,t){var a=De();return fe===null?vs(a,e,t):Du(a,fe.memoizedState,e,t)},useTransition:function(){var e=hs(Lt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:nn(e),t]},useSyncExternalStore:nu,useId:Cu,useHostTransitionStatus:ys,useFormState:bu,useActionState:bu,useOptimistic:function(e,t){var a=De();return fe!==null?uu(a,fe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:fs,useCacheRefresh:Uu},pl=null,cn=0;function yi(e){var t=cn;return cn+=1,pl===null&&(pl=[]),Wo(pl,e,t)}function on(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ji(e,t){throw t.$$typeof===_?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function qu(e){var t=e._init;return t(e._payload)}function Yu(e){function t(y,g){if(e){var j=y.deletions;j===null?(y.deletions=[g],y.flags|=16):j.push(g)}}function a(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function l(y){for(var g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function n(y,g){return y=Ut(y,g),y.index=0,y.sibling=null,y}function r(y,g,j){return y.index=j,e?(j=y.alternate,j!==null?(j=j.index,j<g?(y.flags|=67108866,g):j):(y.flags|=67108866,g)):(y.flags|=1048576,g)}function c(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function u(y,g,j,O){return g===null||g.tag!==6?(g=Gr(j,y.mode,O),g.return=y,g):(g=n(g,j),g.return=y,g)}function m(y,g,j,O){var G=j.type;return G===X?D(y,g,j.props.children,O,j.key):g!==null&&(g.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===_e&&qu(G)===g.type)?(g=n(g,j.props),on(g,j),g.return=y,g):(g=li(j.type,j.key,j.props,null,y.mode,O),on(g,j),g.return=y,g)}function w(y,g,j,O){return g===null||g.tag!==4||g.stateNode.containerInfo!==j.containerInfo||g.stateNode.implementation!==j.implementation?(g=Xr(j,y.mode,O),g.return=y,g):(g=n(g,j.children||[]),g.return=y,g)}function D(y,g,j,O,G){return g===null||g.tag!==7?(g=Da(j,y.mode,O,G),g.return=y,g):(g=n(g,j),g.return=y,g)}function M(y,g,j){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Gr(""+g,y.mode,j),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case k:return j=li(g.type,g.key,g.props,null,y.mode,j),on(j,g),j.return=y,j;case C:return g=Xr(g,y.mode,j),g.return=y,g;case _e:var O=g._init;return g=O(g._payload),M(y,g,j)}if(Qe(g)||Xe(g))return g=Da(g,y.mode,j,null),g.return=y,g;if(typeof g.then=="function")return M(y,yi(g),j);if(g.$$typeof===ee)return M(y,si(y,g),j);ji(y,g)}return null}function S(y,g,j,O){var G=g!==null?g.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return G!==null?null:u(y,g,""+j,O);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case k:return j.key===G?m(y,g,j,O):null;case C:return j.key===G?w(y,g,j,O):null;case _e:return G=j._init,j=G(j._payload),S(y,g,j,O)}if(Qe(j)||Xe(j))return G!==null?null:D(y,g,j,O,null);if(typeof j.then=="function")return S(y,g,yi(j),O);if(j.$$typeof===ee)return S(y,g,si(y,j),O);ji(y,j)}return null}function z(y,g,j,O,G){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return y=y.get(j)||null,u(g,y,""+O,G);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case k:return y=y.get(O.key===null?j:O.key)||null,m(g,y,O,G);case C:return y=y.get(O.key===null?j:O.key)||null,w(g,y,O,G);case _e:var le=O._init;return O=le(O._payload),z(y,g,j,O,G)}if(Qe(O)||Xe(O))return y=y.get(j)||null,D(g,y,O,G,null);if(typeof O.then=="function")return z(y,g,j,yi(O),G);if(O.$$typeof===ee)return z(y,g,j,si(g,O),G);ji(g,O)}return null}function $(y,g,j,O){for(var G=null,le=null,Z=g,F=g=0,Le=null;Z!==null&&F<j.length;F++){Z.index>F?(Le=Z,Z=null):Le=Z.sibling;var ce=S(y,Z,j[F],O);if(ce===null){Z===null&&(Z=Le);break}e&&Z&&ce.alternate===null&&t(y,Z),g=r(ce,g,F),le===null?G=ce:le.sibling=ce,le=ce,Z=Le}if(F===j.length)return a(y,Z),oe&&Oa(y,F),G;if(Z===null){for(;F<j.length;F++)Z=M(y,j[F],O),Z!==null&&(g=r(Z,g,F),le===null?G=Z:le.sibling=Z,le=Z);return oe&&Oa(y,F),G}for(Z=l(Z);F<j.length;F++)Le=z(Z,y,F,j[F],O),Le!==null&&(e&&Le.alternate!==null&&Z.delete(Le.key===null?F:Le.key),g=r(Le,g,F),le===null?G=Le:le.sibling=Le,le=Le);return e&&Z.forEach(function(ja){return t(y,ja)}),oe&&Oa(y,F),G}function J(y,g,j,O){if(j==null)throw Error(o(151));for(var G=null,le=null,Z=g,F=g=0,Le=null,ce=j.next();Z!==null&&!ce.done;F++,ce=j.next()){Z.index>F?(Le=Z,Z=null):Le=Z.sibling;var ja=S(y,Z,ce.value,O);if(ja===null){Z===null&&(Z=Le);break}e&&Z&&ja.alternate===null&&t(y,Z),g=r(ja,g,F),le===null?G=ja:le.sibling=ja,le=ja,Z=Le}if(ce.done)return a(y,Z),oe&&Oa(y,F),G;if(Z===null){for(;!ce.done;F++,ce=j.next())ce=M(y,ce.value,O),ce!==null&&(g=r(ce,g,F),le===null?G=ce:le.sibling=ce,le=ce);return oe&&Oa(y,F),G}for(Z=l(Z);!ce.done;F++,ce=j.next())ce=z(Z,y,F,ce.value,O),ce!==null&&(e&&ce.alternate!==null&&Z.delete(ce.key===null?F:ce.key),g=r(ce,g,F),le===null?G=ce:le.sibling=ce,le=ce);return e&&Z.forEach(function(Q0){return t(y,Q0)}),oe&&Oa(y,F),G}function he(y,g,j,O){if(typeof j=="object"&&j!==null&&j.type===X&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case k:e:{for(var G=j.key;g!==null;){if(g.key===G){if(G=j.type,G===X){if(g.tag===7){a(y,g.sibling),O=n(g,j.props.children),O.return=y,y=O;break e}}else if(g.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===_e&&qu(G)===g.type){a(y,g.sibling),O=n(g,j.props),on(O,j),O.return=y,y=O;break e}a(y,g);break}else t(y,g);g=g.sibling}j.type===X?(O=Da(j.props.children,y.mode,O,j.key),O.return=y,y=O):(O=li(j.type,j.key,j.props,null,y.mode,O),on(O,j),O.return=y,y=O)}return c(y);case C:e:{for(G=j.key;g!==null;){if(g.key===G)if(g.tag===4&&g.stateNode.containerInfo===j.containerInfo&&g.stateNode.implementation===j.implementation){a(y,g.sibling),O=n(g,j.children||[]),O.return=y,y=O;break e}else{a(y,g);break}else t(y,g);g=g.sibling}O=Xr(j,y.mode,O),O.return=y,y=O}return c(y);case _e:return G=j._init,j=G(j._payload),he(y,g,j,O)}if(Qe(j))return $(y,g,j,O);if(Xe(j)){if(G=Xe(j),typeof G!="function")throw Error(o(150));return j=G.call(j),J(y,g,j,O)}if(typeof j.then=="function")return he(y,g,yi(j),O);if(j.$$typeof===ee)return he(y,g,si(y,j),O);ji(y,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,g!==null&&g.tag===6?(a(y,g.sibling),O=n(g,j),O.return=y,y=O):(a(y,g),O=Gr(j,y.mode,O),O.return=y,y=O),c(y)):a(y,g)}return function(y,g,j,O){try{cn=0;var G=he(y,g,j,O);return pl=null,G}catch(Z){if(Z===Pl||Z===oi)throw Z;var le=it(29,Z,null,y.mode);return le.lanes=O,le.return=y,le}finally{}}}var xl=Yu(!0),Gu=Yu(!1),vt=U(null),zt=null;function ra(e){var t=e.alternate;L(Me,Me.current&1),L(vt,e),zt===null&&(t===null||dl.current!==null||t.memoizedState!==null)&&(zt=e)}function Xu(e){if(e.tag===22){if(L(Me,Me.current),L(vt,e),zt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(zt=e)}}else sa()}function sa(){L(Me,Me.current),L(vt,vt.current)}function qt(e){Y(vt),zt===e&&(zt=null),Y(Me)}var Me=U(0);function Ni(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||dc(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Ns(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:N({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ws={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=ot(),n=la(l);n.payload=t,a!=null&&(n.callback=a),t=na(e,n,l),t!==null&&(ut(t,e,l),en(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=ot(),n=la(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=na(e,n,l),t!==null&&(ut(t,e,l),en(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ot(),l=la(a);l.tag=2,t!=null&&(l.callback=t),t=na(e,l,a),t!==null&&(ut(t,e,a),en(t,e,a))}};function Qu(e,t,a,l,n,r,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,c):t.prototype&&t.prototype.isPureReactComponent?!Ql(a,l)||!Ql(n,r):!0}function Vu(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&ws.enqueueReplaceState(t,t.state,null)}function ka(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=N({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}var wi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Zu(e){wi(e)}function Ku(e){console.error(e)}function Ju(e){wi(e)}function Si(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Fu(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Ss(e,t,a){return a=la(a),a.tag=3,a.payload={element:null},a.callback=function(){Si(e,t)},a}function Wu(e){return e=la(e),e.tag=3,e}function $u(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=l.value;e.payload=function(){return n(r)},e.callback=function(){Fu(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Fu(t,a,l),typeof n!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var u=l.stack;this.componentDidCatch(l.value,{componentStack:u!==null?u:""})})}function Qh(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Fl(t,a,n,!0),a=vt.current,a!==null){switch(a.tag){case 13:return zt===null?Js():a.alternate===null&&Ee===0&&(Ee=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Ir?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Ws(e,l,n)),!1;case 22:return a.flags|=65536,l===Ir?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Ws(e,l,n)),!1}throw Error(o(435,a.tag))}return Ws(e,l,n),Js(),!1}if(oe)return t=vt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Zr&&(e=Error(o(422),{cause:l}),Jl(ht(e,a)))):(l!==Zr&&(t=Error(o(423),{cause:l}),Jl(ht(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=ht(l,a),n=Ss(e.stateNode,l,n),as(e,n),Ee!==4&&(Ee=2)),!1;var r=Error(o(520),{cause:l});if(r=ht(r,a),xn===null?xn=[r]:xn.push(r),Ee!==4&&(Ee=2),t===null)return!0;l=ht(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Ss(a.stateNode,l,e),as(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(ma===null||!ma.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Wu(n),$u(n,e,a,l),as(a,n),!1}a=a.return}while(a!==null);return!1}var Pu=Error(o(461)),He=!1;function qe(e,t,a,l){t.child=e===null?Gu(t,null,a,l):xl(t,e.child,a,l)}function Iu(e,t,a,l,n){a=a.render;var r=t.ref;if("ref"in l){var c={};for(var u in l)u!=="ref"&&(c[u]=l[u])}else c=l;return _a(t),l=ss(e,t,a,c,r,n),u=cs(),e!==null&&!He?(os(e,t,n),Yt(e,t,n)):(oe&&u&&Qr(t),t.flags|=1,qe(e,t,l,n),t.child)}function ed(e,t,a,l,n){if(e===null){var r=a.type;return typeof r=="function"&&!Yr(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,td(e,t,r,l,n)):(e=li(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Ms(e,n)){var c=r.memoizedProps;if(a=a.compare,a=a!==null?a:Ql,a(c,l)&&e.ref===t.ref)return Yt(e,t,n)}return t.flags|=1,e=Ut(r,l),e.ref=t.ref,e.return=t,t.child=e}function td(e,t,a,l,n){if(e!==null){var r=e.memoizedProps;if(Ql(r,l)&&e.ref===t.ref)if(He=!1,t.pendingProps=l=r,Ms(e,n))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,Yt(e,t,n)}return Es(e,t,a,l,n)}function ad(e,t,a){var l=t.pendingProps,n=l.children,r=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=r!==null?r.baseLanes|a:a,e!==null){for(n=t.child=e.child,r=0;n!==null;)r=r|n.lanes|n.childLanes,n=n.sibling;t.childLanes=r&~l}else t.childLanes=0,t.child=null;return ld(e,t,l,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ci(t,r!==null?r.cachePool:null),r!==null?tu(t,r):ns(),Xu(t);else return t.lanes=t.childLanes=536870912,ld(e,t,r!==null?r.baseLanes|a:a,a)}else r!==null?(ci(t,r.cachePool),tu(t,r),sa(),t.memoizedState=null):(e!==null&&ci(t,null),ns(),sa());return qe(e,t,n,a),t.child}function ld(e,t,a,l){var n=Pr();return n=n===null?null:{parent:Oe._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&ci(t,null),ns(),Xu(t),e!==null&&Fl(e,t,l,!0),null}function Ei(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Es(e,t,a,l,n){return _a(t),a=ss(e,t,a,l,void 0,n),l=cs(),e!==null&&!He?(os(e,t,n),Yt(e,t,n)):(oe&&l&&Qr(t),t.flags|=1,qe(e,t,a,n),t.child)}function nd(e,t,a,l,n,r){return _a(t),t.updateQueue=null,a=lu(t,l,a,n),au(e),l=cs(),e!==null&&!He?(os(e,t,r),Yt(e,t,r)):(oe&&l&&Qr(t),t.flags|=1,qe(e,t,a,r),t.child)}function id(e,t,a,l,n){if(_a(t),t.stateNode===null){var r=rl,c=a.contextType;typeof c=="object"&&c!==null&&(r=Ze(c)),r=new a(l,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ws,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=l,r.state=t.memoizedState,r.refs={},es(t),c=a.contextType,r.context=typeof c=="object"&&c!==null?Ze(c):rl,r.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(Ns(t,a,c,l),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(c=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),c!==r.state&&ws.enqueueReplaceState(r,r.state,null),an(t,l,r,n),tn(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){r=t.stateNode;var u=t.memoizedProps,m=ka(a,u);r.props=m;var w=r.context,D=a.contextType;c=rl,typeof D=="object"&&D!==null&&(c=Ze(D));var M=a.getDerivedStateFromProps;D=typeof M=="function"||typeof r.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,D||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(u||w!==c)&&Vu(t,r,l,c),aa=!1;var S=t.memoizedState;r.state=S,an(t,l,r,n),tn(),w=t.memoizedState,u||S!==w||aa?(typeof M=="function"&&(Ns(t,a,M,l),w=t.memoizedState),(m=aa||Qu(t,a,m,l,S,w,c))?(D||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=w),r.props=l,r.state=w,r.context=c,l=m):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,ts(e,t),c=t.memoizedProps,D=ka(a,c),r.props=D,M=t.pendingProps,S=r.context,w=a.contextType,m=rl,typeof w=="object"&&w!==null&&(m=Ze(w)),u=a.getDerivedStateFromProps,(w=typeof u=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(c!==M||S!==m)&&Vu(t,r,l,m),aa=!1,S=t.memoizedState,r.state=S,an(t,l,r,n),tn();var z=t.memoizedState;c!==M||S!==z||aa||e!==null&&e.dependencies!==null&&ri(e.dependencies)?(typeof u=="function"&&(Ns(t,a,u,l),z=t.memoizedState),(D=aa||Qu(t,a,D,l,S,z,m)||e!==null&&e.dependencies!==null&&ri(e.dependencies))?(w||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,z,m),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,z,m)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=z),r.props=l,r.state=z,r.context=m,l=D):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),l=!1)}return r=l,Ei(e,t),l=(t.flags&128)!==0,r||l?(r=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&l?(t.child=xl(t,e.child,null,n),t.child=xl(t,null,a,n)):qe(e,t,a,n),t.memoizedState=r.state,e=t.child):e=Yt(e,t,n),e}function rd(e,t,a,l){return Kl(),t.flags|=256,qe(e,t,a,l),t.child}var zs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ts(e){return{baseLanes:e,cachePool:Ko()}}function As(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=bt),e}function sd(e,t,a){var l=t.pendingProps,n=!1,r=(t.flags&128)!==0,c;if((c=r)||(c=e!==null&&e.memoizedState===null?!1:(Me.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(oe){if(n?ra(t):sa(),oe){var u=Se,m;if(m=u){e:{for(m=u,u=Et;m.nodeType!==8;){if(!u){u=null;break e}if(m=wt(m.nextSibling),m===null){u=null;break e}}u=m}u!==null?(t.memoizedState={dehydrated:u,treeContext:Ra!==null?{id:_t,overflow:Bt}:null,retryLane:536870912,hydrationErrors:null},m=it(18,null,null,0),m.stateNode=u,m.return=t,t.child=m,Je=t,Se=null,m=!0):m=!1}m||Ca(t)}if(u=t.memoizedState,u!==null&&(u=u.dehydrated,u!==null))return dc(u)?t.lanes=32:t.lanes=536870912,null;qt(t)}return u=l.children,l=l.fallback,n?(sa(),n=t.mode,u=zi({mode:"hidden",children:u},n),l=Da(l,n,a,null),u.return=t,l.return=t,u.sibling=l,t.child=u,n=t.child,n.memoizedState=Ts(a),n.childLanes=As(e,c,a),t.memoizedState=zs,l):(ra(t),Ds(t,u))}if(m=e.memoizedState,m!==null&&(u=m.dehydrated,u!==null)){if(r)t.flags&256?(ra(t),t.flags&=-257,t=Rs(e,t,a)):t.memoizedState!==null?(sa(),t.child=e.child,t.flags|=128,t=null):(sa(),n=l.fallback,u=t.mode,l=zi({mode:"visible",children:l.children},u),n=Da(n,u,a,null),n.flags|=2,l.return=t,n.return=t,l.sibling=n,t.child=l,xl(t,e.child,null,a),l=t.child,l.memoizedState=Ts(a),l.childLanes=As(e,c,a),t.memoizedState=zs,t=n);else if(ra(t),dc(u)){if(c=u.nextSibling&&u.nextSibling.dataset,c)var w=c.dgst;c=w,l=Error(o(419)),l.stack="",l.digest=c,Jl({value:l,source:null,stack:null}),t=Rs(e,t,a)}else if(He||Fl(e,t,a,!1),c=(a&e.childLanes)!==0,He||c){if(c=ge,c!==null&&(l=a&-a,l=(l&42)!==0?1:fr(l),l=(l&(c.suspendedLanes|a))!==0?0:l,l!==0&&l!==m.retryLane))throw m.retryLane=l,il(e,l),ut(c,e,l),Pu;u.data==="$?"||Js(),t=Rs(e,t,a)}else u.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=m.treeContext,Se=wt(u.nextSibling),Je=t,oe=!0,Ma=null,Et=!1,e!==null&&(xt[gt++]=_t,xt[gt++]=Bt,xt[gt++]=Ra,_t=e.id,Bt=e.overflow,Ra=t),t=Ds(t,l.children),t.flags|=4096);return t}return n?(sa(),n=l.fallback,u=t.mode,m=e.child,w=m.sibling,l=Ut(m,{mode:"hidden",children:l.children}),l.subtreeFlags=m.subtreeFlags&65011712,w!==null?n=Ut(w,n):(n=Da(n,u,a,null),n.flags|=2),n.return=t,l.return=t,l.sibling=n,t.child=l,l=n,n=t.child,u=e.child.memoizedState,u===null?u=Ts(a):(m=u.cachePool,m!==null?(w=Oe._currentValue,m=m.parent!==w?{parent:w,pool:w}:m):m=Ko(),u={baseLanes:u.baseLanes|a,cachePool:m}),n.memoizedState=u,n.childLanes=As(e,c,a),t.memoizedState=zs,l):(ra(t),a=e.child,e=a.sibling,a=Ut(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function Ds(e,t){return t=zi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function zi(e,t){return e=it(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Rs(e,t,a){return xl(t,e.child,null,a),e=Ds(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cd(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Jr(e.return,t,a)}function Os(e,t,a,l,n){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=a,r.tailMode=n)}function od(e,t,a){var l=t.pendingProps,n=l.revealOrder,r=l.tail;if(qe(e,t,l.children,a),l=Me.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cd(e,a,t);else if(e.tag===19)cd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(L(Me,l),n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Ni(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Os(t,!1,n,a,r);break;case"backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Ni(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Os(t,!0,a,null,r);break;case"together":Os(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),fa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Fl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=Ut(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ut(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ms(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ri(e)))}function Vh(e,t,a){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),ta(t,Oe,e.memoizedState.cache),Kl();break;case 27:case 5:sr(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ra(t),t.flags|=128,null):(a&t.child.childLanes)!==0?sd(e,t,a):(ra(t),e=Yt(e,t,a),e!==null?e.sibling:null);ra(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Fl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return od(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),L(Me,Me.current),l)break;return null;case 22:case 23:return t.lanes=0,ad(e,t,a);case 24:ta(t,Oe,e.memoizedState.cache)}return Yt(e,t,a)}function ud(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!Ms(e,a)&&(t.flags&128)===0)return He=!1,Vh(e,t,a);He=(e.flags&131072)!==0}else He=!1,oe&&(t.flags&1048576)!==0&&qo(t,ii,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,n=l._init;if(l=n(l._payload),t.type=l,typeof l=="function")Yr(l)?(e=ka(l,e),t.tag=1,t=id(null,t,l,e,a)):(t.tag=0,t=Es(null,t,l,e,a));else{if(l!=null){if(n=l.$$typeof,n===ye){t.tag=11,t=Iu(null,t,l,e,a);break e}else if(n===Re){t.tag=14,t=ed(null,t,l,e,a);break e}}throw t=wa(l)||l,Error(o(306,t,""))}}return t;case 0:return Es(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=ka(l,t.pendingProps),id(e,t,l,n,a);case 3:e:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var r=t.memoizedState;n=r.element,ts(e,t),an(t,l,null,a);var c=t.memoizedState;if(l=c.cache,ta(t,Oe,l),l!==r.cache&&Fr(t,[Oe],a,!0),tn(),l=c.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=rd(e,t,l,a);break e}else if(l!==n){n=ht(Error(o(424)),t),Jl(n),t=rd(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Se=wt(e.firstChild),Je=t,oe=!0,Ma=null,Et=!0,a=Gu(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Kl(),l===n){t=Yt(e,t,a);break e}qe(e,t,l,a)}t=t.child}return t;case 26:return Ei(e,t),e===null?(a=pf(t.type,null,t.pendingProps,null))?t.memoizedState=a:oe||(a=t.type,e=t.pendingProps,l=qi(I.current).createElement(a),l[Ve]=t,l[Fe]=e,Ge(l,a,e),Be(l),t.stateNode=l):t.memoizedState=pf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return sr(t),e===null&&oe&&(l=t.stateNode=ff(t.type,t.pendingProps,I.current),Je=t,Et=!0,n=Se,xa(t.type)?(fc=n,Se=wt(l.firstChild)):Se=n),qe(e,t,t.pendingProps.children,a),Ei(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&oe&&((n=l=Se)&&(l=b0(l,t.type,t.pendingProps,Et),l!==null?(t.stateNode=l,Je=t,Se=wt(l.firstChild),Et=!1,n=!0):n=!1),n||Ca(t)),sr(t),n=t.type,r=t.pendingProps,c=e!==null?e.memoizedProps:null,l=r.children,cc(n,r)?l=null:c!==null&&cc(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=ss(e,t,Hh,null,null,a),En._currentValue=n),Ei(e,t),qe(e,t,l,a),t.child;case 6:return e===null&&oe&&((e=a=Se)&&(a=y0(a,t.pendingProps,Et),a!==null?(t.stateNode=a,Je=t,Se=null,e=!0):e=!1),e||Ca(t)),null;case 13:return sd(e,t,a);case 4:return ve(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=xl(t,null,l,a):qe(e,t,l,a),t.child;case 11:return Iu(e,t,t.type,t.pendingProps,a);case 7:return qe(e,t,t.pendingProps,a),t.child;case 8:return qe(e,t,t.pendingProps.children,a),t.child;case 12:return qe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ta(t,t.type,l.value),qe(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,_a(t),n=Ze(n),l=l(n),t.flags|=1,qe(e,t,l,a),t.child;case 14:return ed(e,t,t.type,t.pendingProps,a);case 15:return td(e,t,t.type,t.pendingProps,a);case 19:return od(e,t,a);case 31:return l=t.pendingProps,a=t.mode,l={mode:l.mode,children:l.children},e===null?(a=zi(l,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Ut(e.child,l),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return ad(e,t,a);case 24:return _a(t),l=Ze(Oe),e===null?(n=Pr(),n===null&&(n=ge,r=Wr(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),t.memoizedState={parent:l,cache:n},es(t),ta(t,Oe,n)):((e.lanes&a)!==0&&(ts(e,t),an(t,null,null,a),tn()),n=e.memoizedState,r=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ta(t,Oe,l)):(l=r.cache,ta(t,Oe,l),l!==n.cache&&Fr(t,[Oe],a,!0))),qe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Gt(e){e.flags|=4}function dd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!yf(t)){if(t=vt.current,t!==null&&((re&4194048)===re?zt!==null:(re&62914560)!==re&&(re&536870912)===0||t!==zt))throw Il=Ir,Jo;e.flags|=8192}}function Ti(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Gc():536870912,e.lanes|=t,yl|=t)}function un(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Zh(e,t,a){var l=t.pendingProps;switch(Vr(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return je(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),kt(Oe),$t(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zl(t)?Gt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Xo())),je(t),null;case 26:return a=t.memoizedState,e===null?(Gt(t),a!==null?(je(t),dd(t,a)):(je(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Gt(t),je(t),dd(t,a)):(je(t),t.flags&=-16777217):(e.memoizedProps!==l&&Gt(t),je(t),t.flags&=-16777217),null;case 27:kn(t),a=I.current;var n=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Gt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return je(t),null}e=K.current,Zl(t)?Yo(t):(e=ff(n,l,a),t.stateNode=e,Gt(t))}return je(t),null;case 5:if(kn(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Gt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return je(t),null}if(e=K.current,Zl(t))Yo(t);else{switch(n=qi(I.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?n.createElement(a,{is:l.is}):n.createElement(a)}}e[Ve]=t,e[Fe]=l;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=e;e:switch(Ge(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Gt(t)}}return je(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Gt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=I.current,Zl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Je,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ve]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||nf(e.nodeValue,a)),e||Ca(t)}else e=qi(e).createTextNode(l),e[Ve]=t,t.stateNode=e}return je(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Zl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(o(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[Ve]=t}else Kl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),n=!1}else n=Xo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(qt(t),t):(qt(t),null)}if(qt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool);var r=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(r=l.memoizedState.cachePool.pool),r!==n&&(l.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Ti(t,t.updateQueue),je(t),null;case 4:return $t(),e===null&&lc(t.stateNode.containerInfo),je(t),null;case 10:return kt(t.type),je(t),null;case 19:if(Y(Me),n=t.memoizedState,n===null)return je(t),null;if(l=(t.flags&128)!==0,r=n.rendering,r===null)if(l)un(n,!1);else{if(Ee!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Ni(e),r!==null){for(t.flags|=128,un(n,!1),e=r.updateQueue,t.updateQueue=e,Ti(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Lo(a,e),a=a.sibling;return L(Me,Me.current&1|2),t.child}e=e.sibling}n.tail!==null&&St()>Ri&&(t.flags|=128,l=!0,un(n,!1),t.lanes=4194304)}else{if(!l)if(e=Ni(r),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Ti(t,e),un(n,!0),n.tail===null&&n.tailMode==="hidden"&&!r.alternate&&!oe)return je(t),null}else 2*St()-n.renderingStartTime>Ri&&a!==536870912&&(t.flags|=128,l=!0,un(n,!1),t.lanes=4194304);n.isBackwards?(r.sibling=t.child,t.child=r):(e=n.last,e!==null?e.sibling=r:t.child=r,n.last=r)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=St(),t.sibling=null,e=Me.current,L(Me,l?e&1|2:e&1),t):(je(t),null);case 22:case 23:return qt(t),is(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),a=t.updateQueue,a!==null&&Ti(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&Y(Ba),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),kt(Oe),je(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Kh(e,t){switch(Vr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kt(Oe),$t(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return kn(t),null;case 13:if(qt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Kl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(Me),null;case 4:return $t(),null;case 10:return kt(t.type),null;case 22:case 23:return qt(t),is(),e!==null&&Y(Ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return kt(Oe),null;case 25:return null;default:return null}}function fd(e,t){switch(Vr(t),t.tag){case 3:kt(Oe),$t();break;case 26:case 27:case 5:kn(t);break;case 4:$t();break;case 13:qt(t);break;case 19:Y(Me);break;case 10:kt(t.type);break;case 22:case 23:qt(t),is(),e!==null&&Y(Ba);break;case 24:kt(Oe)}}function dn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var r=a.create,c=a.inst;l=r(),c.destroy=l}a=a.next}while(a!==n)}}catch(u){xe(t,t.return,u)}}function ca(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var r=n.next;l=r;do{if((l.tag&e)===e){var c=l.inst,u=c.destroy;if(u!==void 0){c.destroy=void 0,n=t;var m=a,w=u;try{w()}catch(D){xe(n,m,D)}}}l=l.next}while(l!==r)}}catch(D){xe(t,t.return,D)}}function md(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{eu(t,a)}catch(l){xe(e,e.return,l)}}}function hd(e,t,a){a.props=ka(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){xe(e,t,l)}}function fn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){xe(e,t,n)}}function Tt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){xe(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){xe(e,t,n)}else a.current=null}function pd(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){xe(e,e.return,n)}}function Cs(e,t,a){try{var l=e.stateNode;h0(l,e.type,a,t),l[Fe]=t}catch(n){xe(e,e.return,n)}}function xd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&xa(e.type)||e.tag===4}function Us(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&xa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _s(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Li));else if(l!==4&&(l===27&&xa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(_s(e,t,a),e=e.sibling;e!==null;)_s(e,t,a),e=e.sibling}function Ai(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&xa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ai(e,t,a),e=e.sibling;e!==null;)Ai(e,t,a),e=e.sibling}function gd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ge(t,l,a),t[Ve]=e,t[Fe]=a}catch(r){xe(e,e.return,r)}}var Xt=!1,Te=!1,Bs=!1,vd=typeof WeakSet=="function"?WeakSet:Set,ke=null;function Jh(e,t){if(e=e.containerInfo,rc=Zi,e=Do(e),Ur(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var c=0,u=-1,m=-1,w=0,D=0,M=e,S=null;t:for(;;){for(var z;M!==a||n!==0&&M.nodeType!==3||(u=c+n),M!==r||l!==0&&M.nodeType!==3||(m=c+l),M.nodeType===3&&(c+=M.nodeValue.length),(z=M.firstChild)!==null;)S=M,M=z;for(;;){if(M===e)break t;if(S===a&&++w===n&&(u=c),S===r&&++D===l&&(m=c),(z=M.nextSibling)!==null)break;M=S,S=M.parentNode}M=z}a=u===-1||m===-1?null:{start:u,end:m}}else a=null}a=a||{start:0,end:0}}else a=null;for(sc={focusedElem:e,selectionRange:a},Zi=!1,ke=t;ke!==null;)if(t=ke,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ke=e;else for(;ke!==null;){switch(t=ke,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,n=r.memoizedProps,r=r.memoizedState,l=a.stateNode;try{var $=ka(a.type,n,a.elementType===a.type);e=l.getSnapshotBeforeUpdate($,r),l.__reactInternalSnapshotBeforeUpdate=e}catch(J){xe(a,a.return,J)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)uc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":uc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,ke=e;break}ke=t.return}}function bd(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:oa(e,a),l&4&&dn(5,a);break;case 1:if(oa(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){xe(a,a.return,c)}else{var n=ka(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){xe(a,a.return,c)}}l&64&&md(a),l&512&&fn(a,a.return);break;case 3:if(oa(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{eu(e,t)}catch(c){xe(a,a.return,c)}}break;case 27:t===null&&l&4&&gd(a);case 26:case 5:oa(e,a),t===null&&l&4&&pd(a),l&512&&fn(a,a.return);break;case 12:oa(e,a);break;case 13:oa(e,a),l&4&&Nd(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=l0.bind(null,a),j0(e,a))));break;case 22:if(l=a.memoizedState!==null||Xt,!l){t=t!==null&&t.memoizedState!==null||Te,n=Xt;var r=Te;Xt=l,(Te=t)&&!r?ua(e,a,(a.subtreeFlags&8772)!==0):oa(e,a),Xt=n,Te=r}break;case 30:break;default:oa(e,a)}}function yd(e){var t=e.alternate;t!==null&&(e.alternate=null,yd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&pr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var be=null,Pe=!1;function Qt(e,t,a){for(a=a.child;a!==null;)jd(e,t,a),a=a.sibling}function jd(e,t,a){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(Ml,a)}catch{}switch(a.tag){case 26:Te||Tt(a,t),Qt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Te||Tt(a,t);var l=be,n=Pe;xa(a.type)&&(be=a.stateNode,Pe=!1),Qt(e,t,a),jn(a.stateNode),be=l,Pe=n;break;case 5:Te||Tt(a,t);case 6:if(l=be,n=Pe,be=null,Qt(e,t,a),be=l,Pe=n,be!==null)if(Pe)try{(be.nodeType===9?be.body:be.nodeName==="HTML"?be.ownerDocument.body:be).removeChild(a.stateNode)}catch(r){xe(a,t,r)}else try{be.removeChild(a.stateNode)}catch(r){xe(a,t,r)}break;case 18:be!==null&&(Pe?(e=be,uf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Dn(e)):uf(be,a.stateNode));break;case 4:l=be,n=Pe,be=a.stateNode.containerInfo,Pe=!0,Qt(e,t,a),be=l,Pe=n;break;case 0:case 11:case 14:case 15:Te||ca(2,a,t),Te||ca(4,a,t),Qt(e,t,a);break;case 1:Te||(Tt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&hd(a,t,l)),Qt(e,t,a);break;case 21:Qt(e,t,a);break;case 22:Te=(l=Te)||a.memoizedState!==null,Qt(e,t,a),Te=l;break;default:Qt(e,t,a)}}function Nd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Dn(e)}catch(a){xe(t,t.return,a)}}function Fh(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new vd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new vd),t;default:throw Error(o(435,e.tag))}}function Hs(e,t){var a=Fh(e);t.forEach(function(l){var n=n0.bind(null,e,l);a.has(l)||(a.add(l),l.then(n,n))})}function rt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],r=e,c=t,u=c;e:for(;u!==null;){switch(u.tag){case 27:if(xa(u.type)){be=u.stateNode,Pe=!1;break e}break;case 5:be=u.stateNode,Pe=!1;break e;case 3:case 4:be=u.stateNode.containerInfo,Pe=!0;break e}u=u.return}if(be===null)throw Error(o(160));jd(r,c,n),be=null,Pe=!1,r=n.alternate,r!==null&&(r.return=null),n.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)wd(t,e),t=t.sibling}var Nt=null;function wd(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:rt(t,e),st(e),l&4&&(ca(3,e,e.return),dn(3,e),ca(5,e,e.return));break;case 1:rt(t,e),st(e),l&512&&(Te||a===null||Tt(a,a.return)),l&64&&Xt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Nt;if(rt(t,e),st(e),l&512&&(Te||a===null||Tt(a,a.return)),l&4){var r=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":r=n.getElementsByTagName("title")[0],(!r||r[_l]||r[Ve]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=n.createElement(l),n.head.insertBefore(r,n.querySelector("head > title"))),Ge(r,l,a),r[Ve]=e,Be(r),l=r;break e;case"link":var c=vf("link","href",n).get(l+(a.href||""));if(c){for(var u=0;u<c.length;u++)if(r=c[u],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(u,1);break t}}r=n.createElement(l),Ge(r,l,a),n.head.appendChild(r);break;case"meta":if(c=vf("meta","content",n).get(l+(a.content||""))){for(u=0;u<c.length;u++)if(r=c[u],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(u,1);break t}}r=n.createElement(l),Ge(r,l,a),n.head.appendChild(r);break;default:throw Error(o(468,l))}r[Ve]=e,Be(r),l=r}e.stateNode=l}else bf(n,e.type,e.stateNode);else e.stateNode=gf(n,l,e.memoizedProps);else r!==l?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,l===null?bf(n,e.type,e.stateNode):gf(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Cs(e,e.memoizedProps,a.memoizedProps)}break;case 27:rt(t,e),st(e),l&512&&(Te||a===null||Tt(a,a.return)),a!==null&&l&4&&Cs(e,e.memoizedProps,a.memoizedProps);break;case 5:if(rt(t,e),st(e),l&512&&(Te||a===null||Tt(a,a.return)),e.flags&32){n=e.stateNode;try{Pa(n,"")}catch(z){xe(e,e.return,z)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Cs(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Bs=!0);break;case 6:if(rt(t,e),st(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(z){xe(e,e.return,z)}}break;case 3:if(Xi=null,n=Nt,Nt=Yi(t.containerInfo),rt(t,e),Nt=n,st(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Dn(t.containerInfo)}catch(z){xe(e,e.return,z)}Bs&&(Bs=!1,Sd(e));break;case 4:l=Nt,Nt=Yi(e.stateNode.containerInfo),rt(t,e),st(e),Nt=l;break;case 12:rt(t,e),st(e);break;case 13:rt(t,e),st(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xs=St()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hs(e,l)));break;case 22:n=e.memoizedState!==null;var m=a!==null&&a.memoizedState!==null,w=Xt,D=Te;if(Xt=w||n,Te=D||m,rt(t,e),Te=D,Xt=w,st(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||m||Xt||Te||La(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){m=a=t;try{if(r=m.stateNode,n)c=r.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{u=m.stateNode;var M=m.memoizedProps.style,S=M!=null&&M.hasOwnProperty("display")?M.display:null;u.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(z){xe(m,m.return,z)}}}else if(t.tag===6){if(a===null){m=t;try{m.stateNode.nodeValue=n?"":m.memoizedProps}catch(z){xe(m,m.return,z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Hs(e,a))));break;case 19:rt(t,e),st(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hs(e,l)));break;case 30:break;case 21:break;default:rt(t,e),st(e)}}function st(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(xd(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var n=a.stateNode,r=Us(e);Ai(e,r,n);break;case 5:var c=a.stateNode;a.flags&32&&(Pa(c,""),a.flags&=-33);var u=Us(e);Ai(e,u,c);break;case 3:case 4:var m=a.stateNode.containerInfo,w=Us(e);_s(e,w,m);break;default:throw Error(o(161))}}catch(D){xe(e,e.return,D)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function oa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)bd(e,t.alternate,t),t=t.sibling}function La(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ca(4,t,t.return),La(t);break;case 1:Tt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&hd(t,t.return,a),La(t);break;case 27:jn(t.stateNode);case 26:case 5:Tt(t,t.return),La(t);break;case 22:t.memoizedState===null&&La(t);break;case 30:La(t);break;default:La(t)}e=e.sibling}}function ua(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,r=t,c=r.flags;switch(r.tag){case 0:case 11:case 15:ua(n,r,a),dn(4,r);break;case 1:if(ua(n,r,a),l=r,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(w){xe(l,l.return,w)}if(l=r,n=l.updateQueue,n!==null){var u=l.stateNode;try{var m=n.shared.hiddenCallbacks;if(m!==null)for(n.shared.hiddenCallbacks=null,n=0;n<m.length;n++)Io(m[n],u)}catch(w){xe(l,l.return,w)}}a&&c&64&&md(r),fn(r,r.return);break;case 27:gd(r);case 26:case 5:ua(n,r,a),a&&l===null&&c&4&&pd(r),fn(r,r.return);break;case 12:ua(n,r,a);break;case 13:ua(n,r,a),a&&c&4&&Nd(n,r);break;case 22:r.memoizedState===null&&ua(n,r,a),fn(r,r.return);break;case 30:break;default:ua(n,r,a)}t=t.sibling}}function ks(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Wl(a))}function Ls(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Wl(e))}function At(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ed(e,t,a,l),t=t.sibling}function Ed(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:At(e,t,a,l),n&2048&&dn(9,t);break;case 1:At(e,t,a,l);break;case 3:At(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Wl(e)));break;case 12:if(n&2048){At(e,t,a,l),e=t.stateNode;try{var r=t.memoizedProps,c=r.id,u=r.onPostCommit;typeof u=="function"&&u(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){xe(t,t.return,m)}}else At(e,t,a,l);break;case 13:At(e,t,a,l);break;case 23:break;case 22:r=t.stateNode,c=t.alternate,t.memoizedState!==null?r._visibility&2?At(e,t,a,l):mn(e,t):r._visibility&2?At(e,t,a,l):(r._visibility|=2,gl(e,t,a,l,(t.subtreeFlags&10256)!==0)),n&2048&&ks(c,t);break;case 24:At(e,t,a,l),n&2048&&Ls(t.alternate,t);break;default:At(e,t,a,l)}}function gl(e,t,a,l,n){for(n=n&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,c=t,u=a,m=l,w=c.flags;switch(c.tag){case 0:case 11:case 15:gl(r,c,u,m,n),dn(8,c);break;case 23:break;case 22:var D=c.stateNode;c.memoizedState!==null?D._visibility&2?gl(r,c,u,m,n):mn(r,c):(D._visibility|=2,gl(r,c,u,m,n)),n&&w&2048&&ks(c.alternate,c);break;case 24:gl(r,c,u,m,n),n&&w&2048&&Ls(c.alternate,c);break;default:gl(r,c,u,m,n)}t=t.sibling}}function mn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:mn(a,l),n&2048&&ks(l.alternate,l);break;case 24:mn(a,l),n&2048&&Ls(l.alternate,l);break;default:mn(a,l)}t=t.sibling}}var hn=8192;function vl(e){if(e.subtreeFlags&hn)for(e=e.child;e!==null;)zd(e),e=e.sibling}function zd(e){switch(e.tag){case 26:vl(e),e.flags&hn&&e.memoizedState!==null&&U0(Nt,e.memoizedState,e.memoizedProps);break;case 5:vl(e);break;case 3:case 4:var t=Nt;Nt=Yi(e.stateNode.containerInfo),vl(e),Nt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=hn,hn=16777216,vl(e),hn=t):vl(e));break;default:vl(e)}}function Td(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function pn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];ke=l,Dd(l,e)}Td(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ad(e),e=e.sibling}function Ad(e){switch(e.tag){case 0:case 11:case 15:pn(e),e.flags&2048&&ca(9,e,e.return);break;case 3:pn(e);break;case 12:pn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Di(e)):pn(e);break;default:pn(e)}}function Di(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];ke=l,Dd(l,e)}Td(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ca(8,t,t.return),Di(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Di(t));break;default:Di(t)}e=e.sibling}}function Dd(e,t){for(;ke!==null;){var a=ke;switch(a.tag){case 0:case 11:case 15:ca(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Wl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,ke=l;else e:for(a=e;ke!==null;){l=ke;var n=l.sibling,r=l.return;if(yd(l),l===a){ke=null;break e}if(n!==null){n.return=r,ke=n;break e}ke=r}}}var Wh={getCacheForType:function(e){var t=Ze(Oe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},$h=typeof WeakMap=="function"?WeakMap:Map,ue=0,ge=null,ne=null,re=0,de=0,ct=null,da=!1,bl=!1,qs=!1,Vt=0,Ee=0,fa=0,qa=0,Ys=0,bt=0,yl=0,xn=null,Ie=null,Gs=!1,Xs=0,Ri=1/0,Oi=null,ma=null,Ye=0,ha=null,jl=null,Nl=0,Qs=0,Vs=null,Rd=null,gn=0,Zs=null;function ot(){if((ue&2)!==0&&re!==0)return re&-re;if(R.T!==null){var e=ol;return e!==0?e:Is()}return Vc()}function Od(){bt===0&&(bt=(re&536870912)===0||oe?Yc():536870912);var e=vt.current;return e!==null&&(e.flags|=32),bt}function ut(e,t,a){(e===ge&&(de===2||de===9)||e.cancelPendingCommit!==null)&&(wl(e,0),pa(e,re,bt,!1)),Ul(e,a),((ue&2)===0||e!==ge)&&(e===ge&&((ue&2)===0&&(qa|=a),Ee===4&&pa(e,re,bt,!1)),Dt(e))}function Md(e,t,a){if((ue&6)!==0)throw Error(o(327));var l=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Cl(e,t),n=l?e0(e,t):Fs(e,t,!0),r=l;do{if(n===0){bl&&!l&&pa(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!Ph(a)){n=Fs(e,t,!1),r=!1;continue}if(n===2){if(r=t,e.errorRecoveryDisabledLanes&r)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var u=e;n=xn;var m=u.current.memoizedState.isDehydrated;if(m&&(wl(u,c).flags|=256),c=Fs(u,c,!1),c!==2){if(qs&&!m){u.errorRecoveryDisabledLanes|=r,qa|=r,n=4;break e}r=Ie,Ie=n,r!==null&&(Ie===null?Ie=r:Ie.push.apply(Ie,r))}n=c}if(r=!1,n!==2)continue}}if(n===1){wl(e,0),pa(e,t,0,!0);break}e:{switch(l=e,r=n,r){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:pa(l,t,bt,!da);break e;case 2:Ie=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(n=Xs+300-St(),10<n)){if(pa(l,t,bt,!da),Gn(l,0,!0)!==0)break e;l.timeoutHandle=cf(Cd.bind(null,l,a,Ie,Oi,Gs,t,bt,qa,yl,da,r,2,-0,0),n);break e}Cd(l,a,Ie,Oi,Gs,t,bt,qa,yl,da,r,0,-0,0)}}break}while(!0);Dt(e)}function Cd(e,t,a,l,n,r,c,u,m,w,D,M,S,z){if(e.timeoutHandle=-1,M=t.subtreeFlags,(M&8192||(M&16785408)===16785408)&&(Sn={stylesheets:null,count:0,unsuspend:C0},zd(t),M=_0(),M!==null)){e.cancelPendingCommit=M(qd.bind(null,e,t,r,a,l,n,c,u,m,D,1,S,z)),pa(e,r,c,!w);return}qd(e,t,r,a,l,n,c,u,m)}function Ph(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],r=n.getSnapshot;n=n.value;try{if(!nt(r(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pa(e,t,a,l){t&=~Ys,t&=~qa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var r=31-lt(n),c=1<<r;l[r]=-1,n&=~c}a!==0&&Xc(e,a,t)}function Mi(){return(ue&6)===0?(vn(0),!1):!0}function Ks(){if(ne!==null){if(de===0)var e=ne.return;else e=ne,Ht=Ua=null,us(e),pl=null,cn=0,e=ne;for(;e!==null;)fd(e.alternate,e),e=e.return;ne=null}}function wl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,x0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ks(),ge=e,ne=a=Ut(e.current,null),re=t,de=0,ct=null,da=!1,bl=Cl(e,t),qs=!1,yl=bt=Ys=qa=fa=Ee=0,Ie=xn=null,Gs=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-lt(l),r=1<<n;t|=e[n],l&=~r}return Vt=t,ei(),a}function Ud(e,t){ae=null,R.H=bi,t===Pl||t===oi?(t=$o(),de=3):t===Jo?(t=$o(),de=4):de=t===Pu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ct=t,ne===null&&(Ee=1,Si(e,ht(t,e.current)))}function _d(){var e=R.H;return R.H=bi,e===null?bi:e}function Bd(){var e=R.A;return R.A=Wh,e}function Js(){Ee=4,da||(re&4194048)!==re&&vt.current!==null||(bl=!0),(fa&134217727)===0&&(qa&134217727)===0||ge===null||pa(ge,re,bt,!1)}function Fs(e,t,a){var l=ue;ue|=2;var n=_d(),r=Bd();(ge!==e||re!==t)&&(Oi=null,wl(e,t)),t=!1;var c=Ee;e:do try{if(de!==0&&ne!==null){var u=ne,m=ct;switch(de){case 8:Ks(),c=6;break e;case 3:case 2:case 9:case 6:vt.current===null&&(t=!0);var w=de;if(de=0,ct=null,Sl(e,u,m,w),a&&bl){c=0;break e}break;default:w=de,de=0,ct=null,Sl(e,u,m,w)}}Ih(),c=Ee;break}catch(D){Ud(e,D)}while(!0);return t&&e.shellSuspendCounter++,Ht=Ua=null,ue=l,R.H=n,R.A=r,ne===null&&(ge=null,re=0,ei()),c}function Ih(){for(;ne!==null;)Hd(ne)}function e0(e,t){var a=ue;ue|=2;var l=_d(),n=Bd();ge!==e||re!==t?(Oi=null,Ri=St()+500,wl(e,t)):bl=Cl(e,t);e:do try{if(de!==0&&ne!==null){t=ne;var r=ct;t:switch(de){case 1:de=0,ct=null,Sl(e,t,r,1);break;case 2:case 9:if(Fo(r)){de=0,ct=null,kd(t);break}t=function(){de!==2&&de!==9||ge!==e||(de=7),Dt(e)},r.then(t,t);break e;case 3:de=7;break e;case 4:de=5;break e;case 7:Fo(r)?(de=0,ct=null,kd(t)):(de=0,ct=null,Sl(e,t,r,7));break;case 5:var c=null;switch(ne.tag){case 26:c=ne.memoizedState;case 5:case 27:var u=ne;if(!c||yf(c)){de=0,ct=null;var m=u.sibling;if(m!==null)ne=m;else{var w=u.return;w!==null?(ne=w,Ci(w)):ne=null}break t}}de=0,ct=null,Sl(e,t,r,5);break;case 6:de=0,ct=null,Sl(e,t,r,6);break;case 8:Ks(),Ee=6;break e;default:throw Error(o(462))}}t0();break}catch(D){Ud(e,D)}while(!0);return Ht=Ua=null,R.H=l,R.A=n,ue=a,ne!==null?0:(ge=null,re=0,ei(),Ee)}function t0(){for(;ne!==null&&!wm();)Hd(ne)}function Hd(e){var t=ud(e.alternate,e,Vt);e.memoizedProps=e.pendingProps,t===null?Ci(e):ne=t}function kd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=nd(a,t,t.pendingProps,t.type,void 0,re);break;case 11:t=nd(a,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:us(t);default:fd(a,t),t=ne=Lo(t,Vt),t=ud(a,t,Vt)}e.memoizedProps=e.pendingProps,t===null?Ci(e):ne=t}function Sl(e,t,a,l){Ht=Ua=null,us(t),pl=null,cn=0;var n=t.return;try{if(Qh(e,n,t,a,re)){Ee=1,Si(e,ht(a,e.current)),ne=null;return}}catch(r){if(n!==null)throw ne=n,r;Ee=1,Si(e,ht(a,e.current)),ne=null;return}t.flags&32768?(oe||l===1?e=!0:bl||(re&536870912)!==0?e=!1:(da=e=!0,(l===2||l===9||l===3||l===6)&&(l=vt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ld(t,e)):Ci(t)}function Ci(e){var t=e;do{if((t.flags&32768)!==0){Ld(t,da);return}e=t.return;var a=Zh(t.alternate,t,Vt);if(a!==null){ne=a;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);Ee===0&&(Ee=5)}function Ld(e,t){do{var a=Kh(e.alternate,e);if(a!==null){a.flags&=32767,ne=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ne=e;return}ne=e=a}while(e!==null);Ee=6,ne=null}function qd(e,t,a,l,n,r,c,u,m){e.cancelPendingCommit=null;do Ui();while(Ye!==0);if((ue&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(r=t.lanes|t.childLanes,r|=Lr,Cm(e,a,r,c,u,m),e===ge&&(ne=ge=null,re=0),jl=t,ha=e,Nl=a,Qs=r,Vs=n,Rd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,i0(Ln,function(){return Vd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=R.T,R.T=null,n=q.p,q.p=2,c=ue,ue|=4;try{Jh(e,t,a)}finally{ue=c,q.p=n,R.T=l}}Ye=1,Yd(),Gd(),Xd()}}function Yd(){if(Ye===1){Ye=0;var e=ha,t=jl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var l=q.p;q.p=2;var n=ue;ue|=4;try{wd(t,e);var r=sc,c=Do(e.containerInfo),u=r.focusedElem,m=r.selectionRange;if(c!==u&&u&&u.ownerDocument&&Ao(u.ownerDocument.documentElement,u)){if(m!==null&&Ur(u)){var w=m.start,D=m.end;if(D===void 0&&(D=w),"selectionStart"in u)u.selectionStart=w,u.selectionEnd=Math.min(D,u.value.length);else{var M=u.ownerDocument||document,S=M&&M.defaultView||window;if(S.getSelection){var z=S.getSelection(),$=u.textContent.length,J=Math.min(m.start,$),he=m.end===void 0?J:Math.min(m.end,$);!z.extend&&J>he&&(c=he,he=J,J=c);var y=To(u,J),g=To(u,he);if(y&&g&&(z.rangeCount!==1||z.anchorNode!==y.node||z.anchorOffset!==y.offset||z.focusNode!==g.node||z.focusOffset!==g.offset)){var j=M.createRange();j.setStart(y.node,y.offset),z.removeAllRanges(),J>he?(z.addRange(j),z.extend(g.node,g.offset)):(j.setEnd(g.node,g.offset),z.addRange(j))}}}}for(M=[],z=u;z=z.parentNode;)z.nodeType===1&&M.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<M.length;u++){var O=M[u];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}Zi=!!rc,sc=rc=null}finally{ue=n,q.p=l,R.T=a}}e.current=t,Ye=2}}function Gd(){if(Ye===2){Ye=0;var e=ha,t=jl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var l=q.p;q.p=2;var n=ue;ue|=4;try{bd(e,t.alternate,t)}finally{ue=n,q.p=l,R.T=a}}Ye=3}}function Xd(){if(Ye===4||Ye===3){Ye=0,Sm();var e=ha,t=jl,a=Nl,l=Rd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ye=5:(Ye=0,jl=ha=null,Qd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(ma=null),mr(a),t=t.stateNode,at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(Ml,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=R.T,n=q.p,q.p=2,R.T=null;try{for(var r=e.onRecoverableError,c=0;c<l.length;c++){var u=l[c];r(u.value,{componentStack:u.stack})}}finally{R.T=t,q.p=n}}(Nl&3)!==0&&Ui(),Dt(e),n=e.pendingLanes,(a&4194090)!==0&&(n&42)!==0?e===Zs?gn++:(gn=0,Zs=e):gn=0,vn(0)}}function Qd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Wl(t)))}function Ui(e){return Yd(),Gd(),Xd(),Vd()}function Vd(){if(Ye!==5)return!1;var e=ha,t=Qs;Qs=0;var a=mr(Nl),l=R.T,n=q.p;try{q.p=32>a?32:a,R.T=null,a=Vs,Vs=null;var r=ha,c=Nl;if(Ye=0,jl=ha=null,Nl=0,(ue&6)!==0)throw Error(o(331));var u=ue;if(ue|=4,Ad(r.current),Ed(r,r.current,c,a),ue=u,vn(0,!1),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(Ml,r)}catch{}return!0}finally{q.p=n,R.T=l,Qd(e,t)}}function Zd(e,t,a){t=ht(a,t),t=Ss(e.stateNode,t,2),e=na(e,t,2),e!==null&&(Ul(e,2),Dt(e))}function xe(e,t,a){if(e.tag===3)Zd(e,e,a);else for(;t!==null;){if(t.tag===3){Zd(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ma===null||!ma.has(l))){e=ht(a,e),a=Wu(2),l=na(t,a,2),l!==null&&($u(a,l,t,e),Ul(l,2),Dt(l));break}}t=t.return}}function Ws(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new $h;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(qs=!0,n.add(a),e=a0.bind(null,e,t,a),t.then(e,e))}function a0(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ge===e&&(re&a)===a&&(Ee===4||Ee===3&&(re&62914560)===re&&300>St()-Xs?(ue&2)===0&&wl(e,0):Ys|=a,yl===re&&(yl=0)),Dt(e)}function Kd(e,t){t===0&&(t=Gc()),e=il(e,t),e!==null&&(Ul(e,t),Dt(e))}function l0(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Kd(e,a)}function n0(e,t){var a=0;switch(e.tag){case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),Kd(e,a)}function i0(e,t){return or(e,t)}var _i=null,El=null,$s=!1,Bi=!1,Ps=!1,Ya=0;function Dt(e){e!==El&&e.next===null&&(El===null?_i=El=e:El=El.next=e),Bi=!0,$s||($s=!0,s0())}function vn(e,t){if(!Ps&&Bi){Ps=!0;do for(var a=!1,l=_i;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var r=0;else{var c=l.suspendedLanes,u=l.pingedLanes;r=(1<<31-lt(42|e)+1)-1,r&=n&~(c&~u),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,$d(l,r))}else r=re,r=Gn(l,l===ge?r:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(r&3)===0||Cl(l,r)||(a=!0,$d(l,r));l=l.next}while(a);Ps=!1}}function r0(){Jd()}function Jd(){Bi=$s=!1;var e=0;Ya!==0&&(p0()&&(e=Ya),Ya=0);for(var t=St(),a=null,l=_i;l!==null;){var n=l.next,r=Fd(l,t);r===0?(l.next=null,a===null?_i=n:a.next=n,n===null&&(El=a)):(a=l,(e!==0||(r&3)!==0)&&(Bi=!0)),l=n}vn(e)}function Fd(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var c=31-lt(r),u=1<<c,m=n[c];m===-1?((u&a)===0||(u&l)!==0)&&(n[c]=Mm(u,t)):m<=t&&(e.expiredLanes|=u),r&=~u}if(t=ge,a=re,a=Gn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(de===2||de===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ur(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Cl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&ur(l),mr(a)){case 2:case 8:a=Lc;break;case 32:a=Ln;break;case 268435456:a=qc;break;default:a=Ln}return l=Wd.bind(null,e),a=or(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&ur(l),e.callbackPriority=2,e.callbackNode=null,2}function Wd(e,t){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ui()&&e.callbackNode!==a)return null;var l=re;return l=Gn(e,e===ge?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Md(e,l,t),Fd(e,St()),e.callbackNode!=null&&e.callbackNode===a?Wd.bind(null,e):null)}function $d(e,t){if(Ui())return null;Md(e,t,!0)}function s0(){g0(function(){(ue&6)!==0?or(kc,r0):Jd()})}function Is(){return Ya===0&&(Ya=Yc()),Ya}function Pd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Kn(""+e)}function Id(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function c0(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var r=Pd((n[Fe]||null).action),c=l.submitter;c&&(t=(t=c[Fe]||null)?Pd(t.formAction):c.getAttribute("formAction"),t!==null&&(r=t,c=null));var u=new $n("action","action",null,l,n);e.push({event:u,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ya!==0){var m=c?Id(n,c):new FormData(n);bs(a,{pending:!0,data:m,method:n.method,action:r},null,m)}}else typeof r=="function"&&(u.preventDefault(),m=c?Id(n,c):new FormData(n),bs(a,{pending:!0,data:m,method:n.method,action:r},r,m))},currentTarget:n}]})}}for(var ec=0;ec<kr.length;ec++){var tc=kr[ec],o0=tc.toLowerCase(),u0=tc[0].toUpperCase()+tc.slice(1);jt(o0,"on"+u0)}jt(Mo,"onAnimationEnd"),jt(Co,"onAnimationIteration"),jt(Uo,"onAnimationStart"),jt("dblclick","onDoubleClick"),jt("focusin","onFocus"),jt("focusout","onBlur"),jt(Th,"onTransitionRun"),jt(Ah,"onTransitionStart"),jt(Dh,"onTransitionCancel"),jt(_o,"onTransitionEnd"),Fa("onMouseEnter",["mouseout","mouseover"]),Fa("onMouseLeave",["mouseout","mouseover"]),Fa("onPointerEnter",["pointerout","pointerover"]),Fa("onPointerLeave",["pointerout","pointerover"]),Ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bn));function ef(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var r=void 0;if(t)for(var c=l.length-1;0<=c;c--){var u=l[c],m=u.instance,w=u.currentTarget;if(u=u.listener,m!==r&&n.isPropagationStopped())break e;r=u,n.currentTarget=w;try{r(n)}catch(D){wi(D)}n.currentTarget=null,r=m}else for(c=0;c<l.length;c++){if(u=l[c],m=u.instance,w=u.currentTarget,u=u.listener,m!==r&&n.isPropagationStopped())break e;r=u,n.currentTarget=w;try{r(n)}catch(D){wi(D)}n.currentTarget=null,r=m}}}}function ie(e,t){var a=t[hr];a===void 0&&(a=t[hr]=new Set);var l=e+"__bubble";a.has(l)||(tf(t,e,2,!1),a.add(l))}function ac(e,t,a){var l=0;t&&(l|=4),tf(a,e,l,t)}var Hi="_reactListening"+Math.random().toString(36).slice(2);function lc(e){if(!e[Hi]){e[Hi]=!0,Kc.forEach(function(a){a!=="selectionchange"&&(d0.has(a)||ac(a,!1,e),ac(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hi]||(t[Hi]=!0,ac("selectionchange",!1,t))}}function tf(e,t,a,l){switch(zf(t)){case 2:var n=k0;break;case 8:n=L0;break;default:n=gc}a=n.bind(null,t,a,e),n=void 0,!Er||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function nc(e,t,a,l,n){var r=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var u=l.stateNode.containerInfo;if(u===n)break;if(c===4)for(c=l.return;c!==null;){var m=c.tag;if((m===3||m===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;u!==null;){if(c=Za(u),c===null)return;if(m=c.tag,m===5||m===6||m===26||m===27){l=r=c;continue e}u=u.parentNode}}l=l.return}so(function(){var w=r,D=wr(a),M=[];e:{var S=Bo.get(e);if(S!==void 0){var z=$n,$=e;switch(e){case"keypress":if(Fn(a)===0)break e;case"keydown":case"keyup":z=ih;break;case"focusin":$="focus",z=Dr;break;case"focusout":$="blur",z=Dr;break;case"beforeblur":case"afterblur":z=Dr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=uo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=Km;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=ch;break;case Mo:case Co:case Uo:z=Wm;break;case _o:z=uh;break;case"scroll":case"scrollend":z=Vm;break;case"wheel":z=fh;break;case"copy":case"cut":case"paste":z=Pm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=mo;break;case"toggle":case"beforetoggle":z=hh}var J=(t&4)!==0,he=!J&&(e==="scroll"||e==="scrollend"),y=J?S!==null?S+"Capture":null:S;J=[];for(var g=w,j;g!==null;){var O=g;if(j=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||j===null||y===null||(O=Hl(g,y),O!=null&&J.push(yn(g,O,j))),he)break;g=g.return}0<J.length&&(S=new z(S,$,null,a,D),M.push({event:S,listeners:J}))}}if((t&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",S&&a!==Nr&&($=a.relatedTarget||a.fromElement)&&(Za($)||$[Va]))break e;if((z||S)&&(S=D.window===D?D:(S=D.ownerDocument)?S.defaultView||S.parentWindow:window,z?($=a.relatedTarget||a.toElement,z=w,$=$?Za($):null,$!==null&&(he=v($),J=$.tag,$!==he||J!==5&&J!==27&&J!==6)&&($=null)):(z=null,$=w),z!==$)){if(J=uo,O="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(J=mo,O="onPointerLeave",y="onPointerEnter",g="pointer"),he=z==null?S:Bl(z),j=$==null?S:Bl($),S=new J(O,g+"leave",z,a,D),S.target=he,S.relatedTarget=j,O=null,Za(D)===w&&(J=new J(y,g+"enter",$,a,D),J.target=j,J.relatedTarget=he,O=J),he=O,z&&$)t:{for(J=z,y=$,g=0,j=J;j;j=zl(j))g++;for(j=0,O=y;O;O=zl(O))j++;for(;0<g-j;)J=zl(J),g--;for(;0<j-g;)y=zl(y),j--;for(;g--;){if(J===y||y!==null&&J===y.alternate)break t;J=zl(J),y=zl(y)}J=null}else J=null;z!==null&&af(M,S,z,J,!1),$!==null&&he!==null&&af(M,he,$,J,!0)}}e:{if(S=w?Bl(w):window,z=S.nodeName&&S.nodeName.toLowerCase(),z==="select"||z==="input"&&S.type==="file")var G=jo;else if(bo(S))if(No)G=Sh;else{G=Nh;var le=jh}else z=S.nodeName,!z||z.toLowerCase()!=="input"||S.type!=="checkbox"&&S.type!=="radio"?w&&jr(w.elementType)&&(G=jo):G=wh;if(G&&(G=G(e,w))){yo(M,G,a,D);break e}le&&le(e,S,w),e==="focusout"&&w&&S.type==="number"&&w.memoizedProps.value!=null&&yr(S,"number",S.value)}switch(le=w?Bl(w):window,e){case"focusin":(bo(le)||le.contentEditable==="true")&&(al=le,_r=w,Vl=null);break;case"focusout":Vl=_r=al=null;break;case"mousedown":Br=!0;break;case"contextmenu":case"mouseup":case"dragend":Br=!1,Ro(M,a,D);break;case"selectionchange":if(zh)break;case"keydown":case"keyup":Ro(M,a,D)}var Z;if(Or)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else tl?go(e,a)&&(F="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(F="onCompositionStart");F&&(ho&&a.locale!=="ko"&&(tl||F!=="onCompositionStart"?F==="onCompositionEnd"&&tl&&(Z=co()):(ea=D,zr="value"in ea?ea.value:ea.textContent,tl=!0)),le=ki(w,F),0<le.length&&(F=new fo(F,e,null,a,D),M.push({event:F,listeners:le}),Z?F.data=Z:(Z=vo(a),Z!==null&&(F.data=Z)))),(Z=xh?gh(e,a):vh(e,a))&&(F=ki(w,"onBeforeInput"),0<F.length&&(le=new fo("onBeforeInput","beforeinput",null,a,D),M.push({event:le,listeners:F}),le.data=Z)),c0(M,e,w,a,D)}ef(M,t)})}function yn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ki(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=Hl(e,a),n!=null&&l.unshift(yn(e,n,r)),n=Hl(e,t),n!=null&&l.push(yn(e,n,r))),e.tag===3)return l;e=e.return}return[]}function zl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function af(e,t,a,l,n){for(var r=t._reactName,c=[];a!==null&&a!==l;){var u=a,m=u.alternate,w=u.stateNode;if(u=u.tag,m!==null&&m===l)break;u!==5&&u!==26&&u!==27||w===null||(m=w,n?(w=Hl(a,r),w!=null&&c.unshift(yn(a,w,m))):n||(w=Hl(a,r),w!=null&&c.push(yn(a,w,m)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var f0=/\r\n?/g,m0=/\u0000|\uFFFD/g;function lf(e){return(typeof e=="string"?e:""+e).replace(f0,`
`).replace(m0,"")}function nf(e,t){return t=lf(t),lf(e)===t}function Li(){}function me(e,t,a,l,n,r){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Pa(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Pa(e,""+l);break;case"className":Qn(e,"class",l);break;case"tabIndex":Qn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Qn(e,a,l);break;case"style":io(e,l,r);break;case"data":if(t!=="object"){Qn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Kn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&me(e,t,"name",n.name,n,null),me(e,t,"formEncType",n.formEncType,n,null),me(e,t,"formMethod",n.formMethod,n,null),me(e,t,"formTarget",n.formTarget,n,null)):(me(e,t,"encType",n.encType,n,null),me(e,t,"method",n.method,n,null),me(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Kn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Li);break;case"onScroll":l!=null&&ie("scroll",e);break;case"onScrollEnd":l!=null&&ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Kn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ie("beforetoggle",e),ie("toggle",e),Xn(e,"popover",l);break;case"xlinkActuate":Mt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Mt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Mt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Mt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Mt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Mt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Mt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Mt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Mt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Xn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xm.get(a)||a,Xn(e,a,l))}}function ic(e,t,a,l,n,r){switch(a){case"style":io(e,l,r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Pa(e,l):(typeof l=="number"||typeof l=="bigint")&&Pa(e,""+l);break;case"onScroll":l!=null&&ie("scroll",e);break;case"onScrollEnd":l!=null&&ie("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Li);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Jc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),r=e[Fe]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,n),typeof l=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Xn(e,a,l)}}}function Ge(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ie("error",e),ie("load",e);var l=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var c=a[r];if(c!=null)switch(r){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:me(e,t,r,c,a,null)}}n&&me(e,t,"srcSet",a.srcSet,a,null),l&&me(e,t,"src",a.src,a,null);return;case"input":ie("invalid",e);var u=r=c=n=null,m=null,w=null;for(l in a)if(a.hasOwnProperty(l)){var D=a[l];if(D!=null)switch(l){case"name":n=D;break;case"type":c=D;break;case"checked":m=D;break;case"defaultChecked":w=D;break;case"value":r=D;break;case"defaultValue":u=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(o(137,t));break;default:me(e,t,l,D,a,null)}}to(e,r,u,m,w,c,n,!1),Vn(e);return;case"select":ie("invalid",e),l=c=r=null;for(n in a)if(a.hasOwnProperty(n)&&(u=a[n],u!=null))switch(n){case"value":r=u;break;case"defaultValue":c=u;break;case"multiple":l=u;default:me(e,t,n,u,a,null)}t=r,a=c,e.multiple=!!l,t!=null?$a(e,!!l,t,!1):a!=null&&$a(e,!!l,a,!0);return;case"textarea":ie("invalid",e),r=n=l=null;for(c in a)if(a.hasOwnProperty(c)&&(u=a[c],u!=null))switch(c){case"value":l=u;break;case"defaultValue":n=u;break;case"children":r=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(o(91));break;default:me(e,t,c,u,a,null)}lo(e,l,n,r),Vn(e);return;case"option":for(m in a)if(a.hasOwnProperty(m)&&(l=a[m],l!=null))switch(m){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:me(e,t,m,l,a,null)}return;case"dialog":ie("beforetoggle",e),ie("toggle",e),ie("cancel",e),ie("close",e);break;case"iframe":case"object":ie("load",e);break;case"video":case"audio":for(l=0;l<bn.length;l++)ie(bn[l],e);break;case"image":ie("error",e),ie("load",e);break;case"details":ie("toggle",e);break;case"embed":case"source":case"link":ie("error",e),ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:me(e,t,w,l,a,null)}return;default:if(jr(t)){for(D in a)a.hasOwnProperty(D)&&(l=a[D],l!==void 0&&ic(e,t,D,l,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(l=a[u],l!=null&&me(e,t,u,l,a,null))}function h0(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,c=null,u=null,m=null,w=null,D=null;for(z in a){var M=a[z];if(a.hasOwnProperty(z)&&M!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":m=M;default:l.hasOwnProperty(z)||me(e,t,z,null,l,M)}}for(var S in l){var z=l[S];if(M=a[S],l.hasOwnProperty(S)&&(z!=null||M!=null))switch(S){case"type":r=z;break;case"name":n=z;break;case"checked":w=z;break;case"defaultChecked":D=z;break;case"value":c=z;break;case"defaultValue":u=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,t));break;default:z!==M&&me(e,t,S,z,l,M)}}br(e,c,u,m,w,D,r,n);return;case"select":z=c=u=S=null;for(r in a)if(m=a[r],a.hasOwnProperty(r)&&m!=null)switch(r){case"value":break;case"multiple":z=m;default:l.hasOwnProperty(r)||me(e,t,r,null,l,m)}for(n in l)if(r=l[n],m=a[n],l.hasOwnProperty(n)&&(r!=null||m!=null))switch(n){case"value":S=r;break;case"defaultValue":u=r;break;case"multiple":c=r;default:r!==m&&me(e,t,n,r,l,m)}t=u,a=c,l=z,S!=null?$a(e,!!a,S,!1):!!l!=!!a&&(t!=null?$a(e,!!a,t,!0):$a(e,!!a,a?[]:"",!1));return;case"textarea":z=S=null;for(u in a)if(n=a[u],a.hasOwnProperty(u)&&n!=null&&!l.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:me(e,t,u,null,l,n)}for(c in l)if(n=l[c],r=a[c],l.hasOwnProperty(c)&&(n!=null||r!=null))switch(c){case"value":S=n;break;case"defaultValue":z=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==r&&me(e,t,c,n,l,r)}ao(e,S,z);return;case"option":for(var $ in a)if(S=a[$],a.hasOwnProperty($)&&S!=null&&!l.hasOwnProperty($))switch($){case"selected":e.selected=!1;break;default:me(e,t,$,null,l,S)}for(m in l)if(S=l[m],z=a[m],l.hasOwnProperty(m)&&S!==z&&(S!=null||z!=null))switch(m){case"selected":e.selected=S&&typeof S!="function"&&typeof S!="symbol";break;default:me(e,t,m,S,l,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var J in a)S=a[J],a.hasOwnProperty(J)&&S!=null&&!l.hasOwnProperty(J)&&me(e,t,J,null,l,S);for(w in l)if(S=l[w],z=a[w],l.hasOwnProperty(w)&&S!==z&&(S!=null||z!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(o(137,t));break;default:me(e,t,w,S,l,z)}return;default:if(jr(t)){for(var he in a)S=a[he],a.hasOwnProperty(he)&&S!==void 0&&!l.hasOwnProperty(he)&&ic(e,t,he,void 0,l,S);for(D in l)S=l[D],z=a[D],!l.hasOwnProperty(D)||S===z||S===void 0&&z===void 0||ic(e,t,D,S,l,z);return}}for(var y in a)S=a[y],a.hasOwnProperty(y)&&S!=null&&!l.hasOwnProperty(y)&&me(e,t,y,null,l,S);for(M in l)S=l[M],z=a[M],!l.hasOwnProperty(M)||S===z||S==null&&z==null||me(e,t,M,S,l,z)}var rc=null,sc=null;function qi(e){return e.nodeType===9?e:e.ownerDocument}function rf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function cc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var oc=null;function p0(){var e=window.event;return e&&e.type==="popstate"?e===oc?!1:(oc=e,!0):(oc=null,!1)}var cf=typeof setTimeout=="function"?setTimeout:void 0,x0=typeof clearTimeout=="function"?clearTimeout:void 0,of=typeof Promise=="function"?Promise:void 0,g0=typeof queueMicrotask=="function"?queueMicrotask:typeof of<"u"?function(e){return of.resolve(null).then(e).catch(v0)}:cf;function v0(e){setTimeout(function(){throw e})}function xa(e){return e==="head"}function uf(e,t){var a=t,l=0,n=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(0<l&&8>l){a=l;var c=e.ownerDocument;if(a&1&&jn(c.documentElement),a&2&&jn(c.body),a&4)for(a=c.head,jn(a),c=a.firstChild;c;){var u=c.nextSibling,m=c.nodeName;c[_l]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=u}}if(n===0){e.removeChild(r),Dn(t);return}n--}else a==="$"||a==="$?"||a==="$!"?n++:l=a.charCodeAt(0)-48;else l=0;a=r}while(a);Dn(t)}function uc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":uc(a),pr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function b0(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[_l])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=wt(e.nextSibling),e===null)break}return null}function y0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=wt(e.nextSibling),e===null))return null;return e}function dc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function j0(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var fc=null;function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function ff(e,t,a){switch(t=qi(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function jn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);pr(e)}var yt=new Map,mf=new Set;function Yi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Zt=q.d;q.d={f:N0,r:w0,D:S0,C:E0,L:z0,m:T0,X:D0,S:A0,M:R0};function N0(){var e=Zt.f(),t=Mi();return e||t}function w0(e){var t=Ka(e);t!==null&&t.tag===5&&t.type==="form"?Mu(t):Zt.r(e)}var Tl=typeof document>"u"?null:document;function hf(e,t,a){var l=Tl;if(l&&typeof t=="string"&&t){var n=mt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),mf.has(n)||(mf.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Ge(t,"link",e),Be(t),l.head.appendChild(t)))}}function S0(e){Zt.D(e),hf("dns-prefetch",e,null)}function E0(e,t){Zt.C(e,t),hf("preconnect",e,t)}function z0(e,t,a){Zt.L(e,t,a);var l=Tl;if(l&&e&&t){var n='link[rel="preload"][as="'+mt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+mt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+mt(a.imageSizes)+'"]')):n+='[href="'+mt(e)+'"]';var r=n;switch(t){case"style":r=Al(e);break;case"script":r=Dl(e)}yt.has(r)||(e=N({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),yt.set(r,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Nn(r))||t==="script"&&l.querySelector(wn(r))||(t=l.createElement("link"),Ge(t,"link",e),Be(t),l.head.appendChild(t)))}}function T0(e,t){Zt.m(e,t);var a=Tl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+mt(l)+'"][href="'+mt(e)+'"]',r=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Dl(e)}if(!yt.has(r)&&(e=N({rel:"modulepreload",href:e},t),yt.set(r,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wn(r)))return}l=a.createElement("link"),Ge(l,"link",e),Be(l),a.head.appendChild(l)}}}function A0(e,t,a){Zt.S(e,t,a);var l=Tl;if(l&&e){var n=Ja(l).hoistableStyles,r=Al(e);t=t||"default";var c=n.get(r);if(!c){var u={loading:0,preload:null};if(c=l.querySelector(Nn(r)))u.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},a),(a=yt.get(r))&&mc(e,a);var m=c=l.createElement("link");Be(m),Ge(m,"link",e),m._p=new Promise(function(w,D){m.onload=w,m.onerror=D}),m.addEventListener("load",function(){u.loading|=1}),m.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Gi(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:u},n.set(r,c)}}}function D0(e,t){Zt.X(e,t);var a=Tl;if(a&&e){var l=Ja(a).hoistableScripts,n=Dl(e),r=l.get(n);r||(r=a.querySelector(wn(n)),r||(e=N({src:e,async:!0},t),(t=yt.get(n))&&hc(e,t),r=a.createElement("script"),Be(r),Ge(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(n,r))}}function R0(e,t){Zt.M(e,t);var a=Tl;if(a&&e){var l=Ja(a).hoistableScripts,n=Dl(e),r=l.get(n);r||(r=a.querySelector(wn(n)),r||(e=N({src:e,async:!0,type:"module"},t),(t=yt.get(n))&&hc(e,t),r=a.createElement("script"),Be(r),Ge(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(n,r))}}function pf(e,t,a,l){var n=(n=I.current)?Yi(n):null;if(!n)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Al(a.href),a=Ja(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Al(a.href);var r=Ja(n).hoistableStyles,c=r.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,c),(r=n.querySelector(Nn(e)))&&!r._p&&(c.instance=r,c.state.loading=5),yt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yt.set(e,a),r||O0(n,e,a,c.state))),t&&l===null)throw Error(o(528,""));return c}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Dl(a),a=Ja(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Al(e){return'href="'+mt(e)+'"'}function Nn(e){return'link[rel="stylesheet"]['+e+"]"}function xf(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function O0(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ge(t,"link",a),Be(t),e.head.appendChild(t))}function Dl(e){return'[src="'+mt(e)+'"]'}function wn(e){return"script[async]"+e}function gf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+mt(a.href)+'"]');if(l)return t.instance=l,Be(l),l;var n=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Be(l),Ge(l,"style",n),Gi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Al(a.href);var r=e.querySelector(Nn(n));if(r)return t.state.loading|=4,t.instance=r,Be(r),r;l=xf(a),(n=yt.get(n))&&mc(l,n),r=(e.ownerDocument||e).createElement("link"),Be(r);var c=r;return c._p=new Promise(function(u,m){c.onload=u,c.onerror=m}),Ge(r,"link",l),t.state.loading|=4,Gi(r,a.precedence,e),t.instance=r;case"script":return r=Dl(a.src),(n=e.querySelector(wn(r)))?(t.instance=n,Be(n),n):(l=a,(n=yt.get(r))&&(l=N({},a),hc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Be(n),Ge(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Gi(l,a.precedence,e));return t.instance}function Gi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,r=n,c=0;c<l.length;c++){var u=l[c];if(u.dataset.precedence===t)r=u;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function mc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function hc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Xi=null;function vf(e,t,a){if(Xi===null){var l=new Map,n=Xi=new Map;n.set(a,l)}else n=Xi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var r=a[n];if(!(r[_l]||r[Ve]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var c=r.getAttribute(t)||"";c=e+c;var u=l.get(c);u?u.push(r):l.set(c,[r])}}return l}function bf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function M0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function yf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Sn=null;function C0(){}function U0(e,t,a){if(Sn===null)throw Error(o(475));var l=Sn;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=Al(a.href),r=e.querySelector(Nn(n));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Qi.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=r,Be(r);return}r=e.ownerDocument||e,a=xf(a),(n=yt.get(n))&&mc(a,n),r=r.createElement("link"),Be(r);var c=r;c._p=new Promise(function(u,m){c.onload=u,c.onerror=m}),Ge(r,"link",a),t.instance=r}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=Qi.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function _0(){if(Sn===null)throw Error(o(475));var e=Sn;return e.stylesheets&&e.count===0&&pc(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&pc(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Qi(){if(this.count--,this.count===0){if(this.stylesheets)pc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vi=null;function pc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vi=new Map,t.forEach(B0,e),Vi=null,Qi.call(e))}function B0(e,t){if(!(t.state.loading&4)){var a=Vi.get(e);if(a)var l=a.get(null);else{a=new Map,Vi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var c=n[r];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}n=t.instance,c=n.getAttribute("data-precedence"),r=a.get(c)||l,r===l&&a.set(null,n),a.set(c,n),this.count++,l=Qi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),r?r.parentNode.insertBefore(n,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var En={$$typeof:ee,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function H0(e,t,a,l,n,r,c,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=dr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dr(0),this.hiddenUpdates=dr(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function jf(e,t,a,l,n,r,c,u,m,w,D,M){return e=new H0(e,t,a,c,u,m,w,M),t=1,r===!0&&(t|=24),r=it(3,null,null,t),e.current=r,r.stateNode=e,t=Wr(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:l,isDehydrated:a,cache:t},es(r),e}function Nf(e){return e?(e=rl,e):rl}function wf(e,t,a,l,n,r){n=Nf(n),l.context===null?l.context=n:l.pendingContext=n,l=la(t),l.payload={element:a},r=r===void 0?null:r,r!==null&&(l.callback=r),a=na(e,l,t),a!==null&&(ut(a,e,t),en(a,e,t))}function Sf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function xc(e,t){Sf(e,t),(e=e.alternate)&&Sf(e,t)}function Ef(e){if(e.tag===13){var t=il(e,67108864);t!==null&&ut(t,e,67108864),xc(e,67108864)}}var Zi=!0;function k0(e,t,a,l){var n=R.T;R.T=null;var r=q.p;try{q.p=2,gc(e,t,a,l)}finally{q.p=r,R.T=n}}function L0(e,t,a,l){var n=R.T;R.T=null;var r=q.p;try{q.p=8,gc(e,t,a,l)}finally{q.p=r,R.T=n}}function gc(e,t,a,l){if(Zi){var n=vc(l);if(n===null)nc(e,t,l,Ki,a),Tf(e,l);else if(Y0(n,e,t,a,l))l.stopPropagation();else if(Tf(e,l),t&4&&-1<q0.indexOf(e)){for(;n!==null;){var r=Ka(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var c=Sa(r.pendingLanes);if(c!==0){var u=r;for(u.pendingLanes|=2,u.entangledLanes|=2;c;){var m=1<<31-lt(c);u.entanglements[1]|=m,c&=~m}Dt(r),(ue&6)===0&&(Ri=St()+500,vn(0))}}break;case 13:u=il(r,2),u!==null&&ut(u,r,2),Mi(),xc(r,2)}if(r=vc(l),r===null&&nc(e,t,l,Ki,a),r===n)break;n=r}n!==null&&l.stopPropagation()}else nc(e,t,l,null,a)}}function vc(e){return e=wr(e),bc(e)}var Ki=null;function bc(e){if(Ki=null,e=Za(e),e!==null){var t=v(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=E(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ki=e,null}function zf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Em()){case kc:return 2;case Lc:return 8;case Ln:case zm:return 32;case qc:return 268435456;default:return 32}default:return 32}}var yc=!1,ga=null,va=null,ba=null,zn=new Map,Tn=new Map,ya=[],q0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Tf(e,t){switch(e){case"focusin":case"focusout":ga=null;break;case"dragenter":case"dragleave":va=null;break;case"mouseover":case"mouseout":ba=null;break;case"pointerover":case"pointerout":zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tn.delete(t.pointerId)}}function An(e,t,a,l,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:r,targetContainers:[n]},t!==null&&(t=Ka(t),t!==null&&Ef(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Y0(e,t,a,l,n){switch(t){case"focusin":return ga=An(ga,e,t,a,l,n),!0;case"dragenter":return va=An(va,e,t,a,l,n),!0;case"mouseover":return ba=An(ba,e,t,a,l,n),!0;case"pointerover":var r=n.pointerId;return zn.set(r,An(zn.get(r)||null,e,t,a,l,n)),!0;case"gotpointercapture":return r=n.pointerId,Tn.set(r,An(Tn.get(r)||null,e,t,a,l,n)),!0}return!1}function Af(e){var t=Za(e.target);if(t!==null){var a=v(t);if(a!==null){if(t=a.tag,t===13){if(t=E(a),t!==null){e.blockedOn=t,Um(e.priority,function(){if(a.tag===13){var l=ot();l=fr(l);var n=il(a,l);n!==null&&ut(n,a,l),xc(a,l)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ji(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=vc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Nr=l,a.target.dispatchEvent(l),Nr=null}else return t=Ka(a),t!==null&&Ef(t),e.blockedOn=a,!1;t.shift()}return!0}function Df(e,t,a){Ji(e)&&a.delete(t)}function G0(){yc=!1,ga!==null&&Ji(ga)&&(ga=null),va!==null&&Ji(va)&&(va=null),ba!==null&&Ji(ba)&&(ba=null),zn.forEach(Df),Tn.forEach(Df)}function Fi(e,t){e.blockedOn===t&&(e.blockedOn=null,yc||(yc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,G0)))}var Wi=null;function Rf(e){Wi!==e&&(Wi=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Wi===e&&(Wi=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(bc(l||a)===null)continue;break}var r=Ka(a);r!==null&&(e.splice(t,3),t-=3,bs(r,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Dn(e){function t(m){return Fi(m,e)}ga!==null&&Fi(ga,e),va!==null&&Fi(va,e),ba!==null&&Fi(ba,e),zn.forEach(t),Tn.forEach(t);for(var a=0;a<ya.length;a++){var l=ya[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ya.length&&(a=ya[0],a.blockedOn===null);)Af(a),a.blockedOn===null&&ya.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],r=a[l+1],c=n[Fe]||null;if(typeof r=="function")c||Rf(a);else if(c){var u=null;if(r&&r.hasAttribute("formAction")){if(n=r,c=r[Fe]||null)u=c.formAction;else if(bc(n)!==null)continue}else u=c.action;typeof u=="function"?a[l+1]=u:(a.splice(l,3),l-=3),Rf(a)}}}function jc(e){this._internalRoot=e}$i.prototype.render=jc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,l=ot();wf(a,l,e,t,null,null)},$i.prototype.unmount=jc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wf(e.current,2,null,e,null,null),Mi(),t[Va]=null}};function $i(e){this._internalRoot=e}$i.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ya.length&&t!==0&&t<ya[a].priority;a++);ya.splice(a,0,e),a===0&&Af(e)}};var Of=f.version;if(Of!=="19.1.1")throw Error(o(527,Of,"19.1.1"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=b(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var X0={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pi.isDisabled&&Pi.supportsFiber)try{Ml=Pi.inject(X0),at=Pi}catch{}}return On.createRoot=function(e,t){if(!h(e))throw Error(o(299));var a=!1,l="",n=Zu,r=Ku,c=Ju,u=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(u=t.unstable_transitionCallbacks)),t=jf(e,1,!1,null,null,a,l,n,r,c,u,null),e[Va]=t.current,lc(e),new jc(t)},On.hydrateRoot=function(e,t,a){if(!h(e))throw Error(o(299));var l=!1,n="",r=Zu,c=Ku,u=Ju,m=null,w=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(m=a.unstable_transitionCallbacks),a.formState!==void 0&&(w=a.formState)),t=jf(e,1,!0,t,a??null,l,n,r,c,u,m,w),t.context=Nf(null),a=t.current,l=ot(),l=fr(l),n=la(l),n.callback=null,na(a,n,l),a=l,t.current.lanes=a,Ul(t,a),Dt(t),e[Va]=t.current,lc(e),new $i(t)},On.version="19.1.1",On}var Yf;function ep(){if(Yf)return Sc.exports;Yf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(f){console.error(f)}}return s(),Sc.exports=I0(),Sc.exports}var tp=ep();/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Gf="popstate";function ap(s={}){function f(o,h){let{pathname:v,search:E,hash:T}=o.location;return Rc("",{pathname:v,search:E,hash:T},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function d(o,h){return typeof h=="string"?h:Un(h)}return np(f,d,null,s)}function Ne(s,f){if(s===!1||s===null||typeof s>"u")throw new Error(f)}function Rt(s,f){if(!s){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function lp(){return Math.random().toString(36).substring(2,10)}function Xf(s,f){return{usr:s.state,key:s.key,idx:f}}function Rc(s,f,d=null,o){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof f=="string"?Rl(f):f,state:d,key:f&&f.key||o||lp()}}function Un({pathname:s="/",search:f="",hash:d=""}){return f&&f!=="?"&&(s+=f.charAt(0)==="?"?f:"?"+f),d&&d!=="#"&&(s+=d.charAt(0)==="#"?d:"#"+d),s}function Rl(s){let f={};if(s){let d=s.indexOf("#");d>=0&&(f.hash=s.substring(d),s=s.substring(0,d));let o=s.indexOf("?");o>=0&&(f.search=s.substring(o),s=s.substring(0,o)),s&&(f.pathname=s)}return f}function np(s,f,d,o={}){let{window:h=document.defaultView,v5Compat:v=!1}=o,E=h.history,T="POP",b=null,p=N();p==null&&(p=0,E.replaceState({...E.state,idx:p},""));function N(){return(E.state||{idx:null}).idx}function _(){T="POP";let H=N(),V=H==null?null:H-p;p=H,b&&b({action:T,location:B.location,delta:V})}function k(H,V){T="PUSH";let Q=Rc(B.location,H,V);p=N()+1;let ee=Xf(Q,p),ye=B.createHref(Q);try{E.pushState(ee,"",ye)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;h.location.assign(ye)}v&&b&&b({action:T,location:B.location,delta:1})}function C(H,V){T="REPLACE";let Q=Rc(B.location,H,V);p=N();let ee=Xf(Q,p),ye=B.createHref(Q);E.replaceState(ee,"",ye),v&&b&&b({action:T,location:B.location,delta:0})}function X(H){return ip(H)}let B={get action(){return T},get location(){return s(h,E)},listen(H){if(b)throw new Error("A history only accepts one active listener");return h.addEventListener(Gf,_),b=H,()=>{h.removeEventListener(Gf,_),b=null}},createHref(H){return f(h,H)},createURL:X,encodeLocation(H){let V=X(H);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:k,replace:C,go(H){return E.go(H)}};return B}function ip(s,f=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Ne(d,"No window.location.(origin|href) available to create URL");let o=typeof s=="string"?s:Un(s);return o=o.replace(/ $/,"%20"),!f&&o.startsWith("//")&&(o=d+o),new URL(o,d)}function em(s,f,d="/"){return rp(s,f,d,!1)}function rp(s,f,d,o){let h=typeof f=="string"?Rl(f):f,v=Jt(h.pathname||"/",d);if(v==null)return null;let E=tm(s);sp(E);let T=null;for(let b=0;T==null&&b<E.length;++b){let p=vp(v);T=xp(E[b],p,o)}return T}function tm(s,f=[],d=[],o="",h=!1){let v=(E,T,b=h,p)=>{let N={relativePath:p===void 0?E.path||"":p,caseSensitive:E.caseSensitive===!0,childrenIndex:T,route:E};if(N.relativePath.startsWith("/")){if(!N.relativePath.startsWith(o)&&b)return;Ne(N.relativePath.startsWith(o),`Absolute route path "${N.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),N.relativePath=N.relativePath.slice(o.length)}let _=Kt([o,N.relativePath]),k=d.concat(N);E.children&&E.children.length>0&&(Ne(E.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),tm(E.children,f,k,_,b)),!(E.path==null&&!E.index)&&f.push({path:_,score:hp(_,E.index),routesMeta:k})};return s.forEach((E,T)=>{if(E.path===""||!E.path?.includes("?"))v(E,T);else for(let b of am(E.path))v(E,T,!0,b)}),f}function am(s){let f=s.split("/");if(f.length===0)return[];let[d,...o]=f,h=d.endsWith("?"),v=d.replace(/\?$/,"");if(o.length===0)return h?[v,""]:[v];let E=am(o.join("/")),T=[];return T.push(...E.map(b=>b===""?v:[v,b].join("/"))),h&&T.push(...E),T.map(b=>s.startsWith("/")&&b===""?"/":b)}function sp(s){s.sort((f,d)=>f.score!==d.score?d.score-f.score:pp(f.routesMeta.map(o=>o.childrenIndex),d.routesMeta.map(o=>o.childrenIndex)))}var cp=/^:[\w-]+$/,op=3,up=2,dp=1,fp=10,mp=-2,Qf=s=>s==="*";function hp(s,f){let d=s.split("/"),o=d.length;return d.some(Qf)&&(o+=mp),f&&(o+=up),d.filter(h=>!Qf(h)).reduce((h,v)=>h+(cp.test(v)?op:v===""?dp:fp),o)}function pp(s,f){return s.length===f.length&&s.slice(0,-1).every((o,h)=>o===f[h])?s[s.length-1]-f[f.length-1]:0}function xp(s,f,d=!1){let{routesMeta:o}=s,h={},v="/",E=[];for(let T=0;T<o.length;++T){let b=o[T],p=T===o.length-1,N=v==="/"?f:f.slice(v.length)||"/",_=ar({path:b.relativePath,caseSensitive:b.caseSensitive,end:p},N),k=b.route;if(!_&&p&&d&&!o[o.length-1].route.index&&(_=ar({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},N)),!_)return null;Object.assign(h,_.params),E.push({params:h,pathname:Kt([v,_.pathname]),pathnameBase:Np(Kt([v,_.pathnameBase])),route:k}),_.pathnameBase!=="/"&&(v=Kt([v,_.pathnameBase]))}return E}function ar(s,f){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[d,o]=gp(s.path,s.caseSensitive,s.end),h=f.match(d);if(!h)return null;let v=h[0],E=v.replace(/(.)\/+$/,"$1"),T=h.slice(1);return{params:o.reduce((p,{paramName:N,isOptional:_},k)=>{if(N==="*"){let X=T[k]||"";E=v.slice(0,v.length-X.length).replace(/(.)\/+$/,"$1")}const C=T[k];return _&&!C?p[N]=void 0:p[N]=(C||"").replace(/%2F/g,"/"),p},{}),pathname:v,pathnameBase:E,pattern:s}}function gp(s,f=!1,d=!0){Rt(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let o=[],h="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(E,T,b)=>(o.push({paramName:T,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(o.push({paramName:"*"}),h+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?h+="\\/*$":s!==""&&s!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,f?void 0:"i"),o]}function vp(s){try{return s.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return Rt(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),s}}function Jt(s,f){if(f==="/")return s;if(!s.toLowerCase().startsWith(f.toLowerCase()))return null;let d=f.endsWith("/")?f.length-1:f.length,o=s.charAt(d);return o&&o!=="/"?null:s.slice(d)||"/"}function bp(s,f="/"){let{pathname:d,search:o="",hash:h=""}=typeof s=="string"?Rl(s):s;return{pathname:d?d.startsWith("/")?d:yp(d,f):f,search:wp(o),hash:Sp(h)}}function yp(s,f){let d=f.replace(/\/+$/,"").split("/");return s.split("/").forEach(h=>{h===".."?d.length>1&&d.pop():h!=="."&&d.push(h)}),d.length>1?d.join("/"):"/"}function Ac(s,f,d,o){return`Cannot include a '${s}' character in a manually specified \`to.${f}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function jp(s){return s.filter((f,d)=>d===0||f.route.path&&f.route.path.length>0)}function lm(s){let f=jp(s);return f.map((d,o)=>o===f.length-1?d.pathname:d.pathnameBase)}function nm(s,f,d,o=!1){let h;typeof s=="string"?h=Rl(s):(h={...s},Ne(!h.pathname||!h.pathname.includes("?"),Ac("?","pathname","search",h)),Ne(!h.pathname||!h.pathname.includes("#"),Ac("#","pathname","hash",h)),Ne(!h.search||!h.search.includes("#"),Ac("#","search","hash",h)));let v=s===""||h.pathname==="",E=v?"/":h.pathname,T;if(E==null)T=d;else{let _=f.length-1;if(!o&&E.startsWith("..")){let k=E.split("/");for(;k[0]==="..";)k.shift(),_-=1;h.pathname=k.join("/")}T=_>=0?f[_]:"/"}let b=bp(h,T),p=E&&E!=="/"&&E.endsWith("/"),N=(v||E===".")&&d.endsWith("/");return!b.pathname.endsWith("/")&&(p||N)&&(b.pathname+="/"),b}var Kt=s=>s.join("/").replace(/\/\/+/g,"/"),Np=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),wp=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Sp=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Ep(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var im=["POST","PUT","PATCH","DELETE"];new Set(im);var zp=["GET",...im];new Set(zp);var Ol=A.createContext(null);Ol.displayName="DataRouter";var ir=A.createContext(null);ir.displayName="DataRouterState";A.createContext(!1);var rm=A.createContext({isTransitioning:!1});rm.displayName="ViewTransition";var Tp=A.createContext(new Map);Tp.displayName="Fetchers";var Ap=A.createContext(null);Ap.displayName="Await";var Ot=A.createContext(null);Ot.displayName="Navigation";var _n=A.createContext(null);_n.displayName="Location";var Ft=A.createContext({outlet:null,matches:[],isDataRoute:!1});Ft.displayName="Route";var Cc=A.createContext(null);Cc.displayName="RouteError";function Dp(s,{relative:f}={}){Ne(Bn(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:o}=A.useContext(Ot),{hash:h,pathname:v,search:E}=Hn(s,{relative:f}),T=v;return d!=="/"&&(T=v==="/"?d:Kt([d,v])),o.createHref({pathname:T,search:E,hash:h})}function Bn(){return A.useContext(_n)!=null}function Wt(){return Ne(Bn(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(_n).location}var sm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function cm(s){A.useContext(Ot).static||A.useLayoutEffect(s)}function Rp(){let{isDataRoute:s}=A.useContext(Ft);return s?Xp():Op()}function Op(){Ne(Bn(),"useNavigate() may be used only in the context of a <Router> component.");let s=A.useContext(Ol),{basename:f,navigator:d}=A.useContext(Ot),{matches:o}=A.useContext(Ft),{pathname:h}=Wt(),v=JSON.stringify(lm(o)),E=A.useRef(!1);return cm(()=>{E.current=!0}),A.useCallback((b,p={})=>{if(Rt(E.current,sm),!E.current)return;if(typeof b=="number"){d.go(b);return}let N=nm(b,JSON.parse(v),h,p.relative==="path");s==null&&f!=="/"&&(N.pathname=N.pathname==="/"?f:Kt([f,N.pathname])),(p.replace?d.replace:d.push)(N,p.state,p)},[f,d,v,h,s])}A.createContext(null);function Hn(s,{relative:f}={}){let{matches:d}=A.useContext(Ft),{pathname:o}=Wt(),h=JSON.stringify(lm(d));return A.useMemo(()=>nm(s,JSON.parse(h),o,f==="path"),[s,h,o,f])}function Mp(s,f){return om(s,f)}function om(s,f,d,o,h){Ne(Bn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:v}=A.useContext(Ot),{matches:E}=A.useContext(Ft),T=E[E.length-1],b=T?T.params:{},p=T?T.pathname:"/",N=T?T.pathnameBase:"/",_=T&&T.route;{let Q=_&&_.path||"";um(p,!_||Q.endsWith("*")||Q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q==="/"?"*":`${Q}/*`}">.`)}let k=Wt(),C;if(f){let Q=typeof f=="string"?Rl(f):f;Ne(N==="/"||Q.pathname?.startsWith(N),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${N}" but pathname "${Q.pathname}" was given in the \`location\` prop.`),C=Q}else C=k;let X=C.pathname||"/",B=X;if(N!=="/"){let Q=N.replace(/^\//,"").split("/");B="/"+X.replace(/^\//,"").split("/").slice(Q.length).join("/")}let H=em(s,{pathname:B});Rt(_||H!=null,`No routes matched location "${C.pathname}${C.search}${C.hash}" `),Rt(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=Hp(H&&H.map(Q=>Object.assign({},Q,{params:Object.assign({},b,Q.params),pathname:Kt([N,v.encodeLocation?v.encodeLocation(Q.pathname).pathname:Q.pathname]),pathnameBase:Q.pathnameBase==="/"?N:Kt([N,v.encodeLocation?v.encodeLocation(Q.pathnameBase).pathname:Q.pathnameBase])})),E,d,o,h);return f&&V?A.createElement(_n.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...C},navigationType:"POP"}},V):V}function Cp(){let s=Gp(),f=Ep(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),d=s instanceof Error?s.stack:null,o="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:o},v={padding:"2px 4px",backgroundColor:o},E=null;return console.error("Error handled by React Router default ErrorBoundary:",s),E=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:v},"ErrorBoundary")," or"," ",A.createElement("code",{style:v},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},f),d?A.createElement("pre",{style:h},d):null,E)}var Up=A.createElement(Cp,null),_p=class extends A.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,f){return f.location!==s.location||f.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:f.error,location:f.location,revalidation:s.revalidation||f.revalidation}}componentDidCatch(s,f){this.props.unstable_onError?this.props.unstable_onError(s,f):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?A.createElement(Ft.Provider,{value:this.props.routeContext},A.createElement(Cc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Bp({routeContext:s,match:f,children:d}){let o=A.useContext(Ol);return o&&o.static&&o.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=f.route.id),A.createElement(Ft.Provider,{value:s},d)}function Hp(s,f=[],d=null,o=null,h=null){if(s==null){if(!d)return null;if(d.errors)s=d.matches;else if(f.length===0&&!d.initialized&&d.matches.length>0)s=d.matches;else return null}let v=s,E=d?.errors;if(E!=null){let p=v.findIndex(N=>N.route.id&&E?.[N.route.id]!==void 0);Ne(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(E).join(",")}`),v=v.slice(0,Math.min(v.length,p+1))}let T=!1,b=-1;if(d)for(let p=0;p<v.length;p++){let N=v[p];if((N.route.HydrateFallback||N.route.hydrateFallbackElement)&&(b=p),N.route.id){let{loaderData:_,errors:k}=d,C=N.route.loader&&!_.hasOwnProperty(N.route.id)&&(!k||k[N.route.id]===void 0);if(N.route.lazy||C){T=!0,b>=0?v=v.slice(0,b+1):v=[v[0]];break}}}return v.reduceRight((p,N,_)=>{let k,C=!1,X=null,B=null;d&&(k=E&&N.route.id?E[N.route.id]:void 0,X=N.route.errorElement||Up,T&&(b<0&&_===0?(um("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,B=null):b===_&&(C=!0,B=N.route.hydrateFallbackElement||null)));let H=f.concat(v.slice(0,_+1)),V=()=>{let Q;return k?Q=X:C?Q=B:N.route.Component?Q=A.createElement(N.route.Component,null):N.route.element?Q=N.route.element:Q=p,A.createElement(Bp,{match:N,routeContext:{outlet:p,matches:H,isDataRoute:d!=null},children:Q})};return d&&(N.route.ErrorBoundary||N.route.errorElement||_===0)?A.createElement(_p,{location:d.location,revalidation:d.revalidation,component:X,error:k,children:V(),routeContext:{outlet:null,matches:H,isDataRoute:!0},unstable_onError:o}):V()},null)}function Uc(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kp(s){let f=A.useContext(Ol);return Ne(f,Uc(s)),f}function Lp(s){let f=A.useContext(ir);return Ne(f,Uc(s)),f}function qp(s){let f=A.useContext(Ft);return Ne(f,Uc(s)),f}function _c(s){let f=qp(s),d=f.matches[f.matches.length-1];return Ne(d.route.id,`${s} can only be used on routes that contain a unique "id"`),d.route.id}function Yp(){return _c("useRouteId")}function Gp(){let s=A.useContext(Cc),f=Lp("useRouteError"),d=_c("useRouteError");return s!==void 0?s:f.errors?.[d]}function Xp(){let{router:s}=kp("useNavigate"),f=_c("useNavigate"),d=A.useRef(!1);return cm(()=>{d.current=!0}),A.useCallback(async(h,v={})=>{Rt(d.current,sm),d.current&&(typeof h=="number"?s.navigate(h):await s.navigate(h,{fromRouteId:f,...v}))},[s,f])}var Vf={};function um(s,f,d){!f&&!Vf[s]&&(Vf[s]=!0,Rt(!1,d))}A.memo(Qp);function Qp({routes:s,future:f,state:d,unstable_onError:o}){return om(s,void 0,d,o,f)}function Ga(s){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Vp({basename:s="/",children:f=null,location:d,navigationType:o="POP",navigator:h,static:v=!1}){Ne(!Bn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let E=s.replace(/^\/*/,"/"),T=A.useMemo(()=>({basename:E,navigator:h,static:v,future:{}}),[E,h,v]);typeof d=="string"&&(d=Rl(d));let{pathname:b="/",search:p="",hash:N="",state:_=null,key:k="default"}=d,C=A.useMemo(()=>{let X=Jt(b,E);return X==null?null:{location:{pathname:X,search:p,hash:N,state:_,key:k},navigationType:o}},[E,b,p,N,_,k,o]);return Rt(C!=null,`<Router basename="${E}"> is not able to match the URL "${b}${p}${N}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:A.createElement(Ot.Provider,{value:T},A.createElement(_n.Provider,{children:f,value:C}))}function Zp({children:s,location:f}){return Mp(Oc(s),f)}function Oc(s,f=[]){let d=[];return A.Children.forEach(s,(o,h)=>{if(!A.isValidElement(o))return;let v=[...f,h];if(o.type===A.Fragment){d.push.apply(d,Oc(o.props.children,v));return}Ne(o.type===Ga,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!o.props.index||!o.props.children,"An index route cannot have child routes.");let E={id:o.props.id||v.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(E.children=Oc(o.props.children,v)),d.push(E)}),d}var er="get",tr="application/x-www-form-urlencoded";function rr(s){return s!=null&&typeof s.tagName=="string"}function Kp(s){return rr(s)&&s.tagName.toLowerCase()==="button"}function Jp(s){return rr(s)&&s.tagName.toLowerCase()==="form"}function Fp(s){return rr(s)&&s.tagName.toLowerCase()==="input"}function Wp(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function $p(s,f){return s.button===0&&(!f||f==="_self")&&!Wp(s)}var Ii=null;function Pp(){if(Ii===null)try{new FormData(document.createElement("form"),0),Ii=!1}catch{Ii=!0}return Ii}var Ip=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Dc(s){return s!=null&&!Ip.has(s)?(Rt(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tr}"`),null):s}function ex(s,f){let d,o,h,v,E;if(Jp(s)){let T=s.getAttribute("action");o=T?Jt(T,f):null,d=s.getAttribute("method")||er,h=Dc(s.getAttribute("enctype"))||tr,v=new FormData(s)}else if(Kp(s)||Fp(s)&&(s.type==="submit"||s.type==="image")){let T=s.form;if(T==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=s.getAttribute("formaction")||T.getAttribute("action");if(o=b?Jt(b,f):null,d=s.getAttribute("formmethod")||T.getAttribute("method")||er,h=Dc(s.getAttribute("formenctype"))||Dc(T.getAttribute("enctype"))||tr,v=new FormData(T,s),!Pp()){let{name:p,type:N,value:_}=s;if(N==="image"){let k=p?`${p}.`:"";v.append(`${k}x`,"0"),v.append(`${k}y`,"0")}else p&&v.append(p,_)}}else{if(rr(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=er,o=null,h=tr,E=s}return v&&h==="text/plain"&&(E=v,v=void 0),{action:o,method:d.toLowerCase(),encType:h,formData:v,body:E}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Bc(s,f){if(s===!1||s===null||typeof s>"u")throw new Error(f)}function tx(s,f,d){let o=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return o.pathname==="/"?o.pathname=`_root.${d}`:f&&Jt(o.pathname,f)==="/"?o.pathname=`${f.replace(/\/$/,"")}/_root.${d}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${d}`,o}async function ax(s,f){if(s.id in f)return f[s.id];try{let d=await import(s.module);return f[s.id]=d,d}catch(d){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function lx(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function nx(s,f,d){let o=await Promise.all(s.map(async h=>{let v=f.routes[h.route.id];if(v){let E=await ax(v,d);return E.links?E.links():[]}return[]}));return cx(o.flat(1).filter(lx).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function Zf(s,f,d,o,h,v){let E=(b,p)=>d[p]?b.route.id!==d[p].route.id:!0,T=(b,p)=>d[p].pathname!==b.pathname||d[p].route.path?.endsWith("*")&&d[p].params["*"]!==b.params["*"];return v==="assets"?f.filter((b,p)=>E(b,p)||T(b,p)):v==="data"?f.filter((b,p)=>{let N=o.routes[b.route.id];if(!N||!N.hasLoader)return!1;if(E(b,p)||T(b,p))return!0;if(b.route.shouldRevalidate){let _=b.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function ix(s,f,{includeHydrateFallback:d}={}){return rx(s.map(o=>{let h=f.routes[o.route.id];if(!h)return[];let v=[h.module];return h.clientActionModule&&(v=v.concat(h.clientActionModule)),h.clientLoaderModule&&(v=v.concat(h.clientLoaderModule)),d&&h.hydrateFallbackModule&&(v=v.concat(h.hydrateFallbackModule)),h.imports&&(v=v.concat(h.imports)),v}).flat(1))}function rx(s){return[...new Set(s)]}function sx(s){let f={},d=Object.keys(s).sort();for(let o of d)f[o]=s[o];return f}function cx(s,f){let d=new Set;return new Set(f),s.reduce((o,h)=>{let v=JSON.stringify(sx(h));return d.has(v)||(d.add(v),o.push({key:v,link:h})),o},[])}function dm(){let s=A.useContext(Ol);return Bc(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function ox(){let s=A.useContext(ir);return Bc(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Hc=A.createContext(void 0);Hc.displayName="FrameworkContext";function fm(){let s=A.useContext(Hc);return Bc(s,"You must render this element inside a <HydratedRouter> element"),s}function ux(s,f){let d=A.useContext(Hc),[o,h]=A.useState(!1),[v,E]=A.useState(!1),{onFocus:T,onBlur:b,onMouseEnter:p,onMouseLeave:N,onTouchStart:_}=f,k=A.useRef(null);A.useEffect(()=>{if(s==="render"&&E(!0),s==="viewport"){let B=V=>{V.forEach(Q=>{E(Q.isIntersecting)})},H=new IntersectionObserver(B,{threshold:.5});return k.current&&H.observe(k.current),()=>{H.disconnect()}}},[s]),A.useEffect(()=>{if(o){let B=setTimeout(()=>{E(!0)},100);return()=>{clearTimeout(B)}}},[o]);let C=()=>{h(!0)},X=()=>{h(!1),E(!1)};return d?s!=="intent"?[v,k,{}]:[v,k,{onFocus:Mn(T,C),onBlur:Mn(b,X),onMouseEnter:Mn(p,C),onMouseLeave:Mn(N,X),onTouchStart:Mn(_,C)}]:[!1,k,{}]}function Mn(s,f){return d=>{s&&s(d),d.defaultPrevented||f(d)}}function dx({page:s,...f}){let{router:d}=dm(),o=A.useMemo(()=>em(d.routes,s,d.basename),[d.routes,s,d.basename]);return o?A.createElement(mx,{page:s,matches:o,...f}):null}function fx(s){let{manifest:f,routeModules:d}=fm(),[o,h]=A.useState([]);return A.useEffect(()=>{let v=!1;return nx(s,f,d).then(E=>{v||h(E)}),()=>{v=!0}},[s,f,d]),o}function mx({page:s,matches:f,...d}){let o=Wt(),{manifest:h,routeModules:v}=fm(),{basename:E}=dm(),{loaderData:T,matches:b}=ox(),p=A.useMemo(()=>Zf(s,f,b,h,o,"data"),[s,f,b,h,o]),N=A.useMemo(()=>Zf(s,f,b,h,o,"assets"),[s,f,b,h,o]),_=A.useMemo(()=>{if(s===o.pathname+o.search+o.hash)return[];let X=new Set,B=!1;if(f.forEach(V=>{let Q=h.routes[V.route.id];!Q||!Q.hasLoader||(!p.some(ee=>ee.route.id===V.route.id)&&V.route.id in T&&v[V.route.id]?.shouldRevalidate||Q.hasClientLoader?B=!0:X.add(V.route.id))}),X.size===0)return[];let H=tx(s,E,"data");return B&&X.size>0&&H.searchParams.set("_routes",f.filter(V=>X.has(V.route.id)).map(V=>V.route.id).join(",")),[H.pathname+H.search]},[E,T,o,h,p,f,s,v]),k=A.useMemo(()=>ix(N,h),[N,h]),C=fx(N);return A.createElement(A.Fragment,null,_.map(X=>A.createElement("link",{key:X,rel:"prefetch",as:"fetch",href:X,...d})),k.map(X=>A.createElement("link",{key:X,rel:"modulepreload",href:X,...d})),C.map(({key:X,link:B})=>A.createElement("link",{key:X,nonce:d.nonce,...B})))}function hx(...s){return f=>{s.forEach(d=>{typeof d=="function"?d(f):d!=null&&(d.current=f)})}}var mm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{mm&&(window.__reactRouterVersion="7.9.1")}catch{}function px({basename:s,children:f,window:d}){let o=A.useRef();o.current==null&&(o.current=ap({window:d,v5Compat:!0}));let h=o.current,[v,E]=A.useState({action:h.action,location:h.location}),T=A.useCallback(b=>{A.startTransition(()=>E(b))},[E]);return A.useLayoutEffect(()=>h.listen(T),[h,T]),A.createElement(Vp,{basename:s,children:f,location:v.location,navigationType:v.action,navigator:h})}var hm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xa=A.forwardRef(function({onClick:f,discover:d="render",prefetch:o="none",relative:h,reloadDocument:v,replace:E,state:T,target:b,to:p,preventScrollReset:N,viewTransition:_,...k},C){let{basename:X}=A.useContext(Ot),B=typeof p=="string"&&hm.test(p),H,V=!1;if(typeof p=="string"&&B&&(H=p,mm))try{let we=new URL(window.location.href),et=p.startsWith("//")?new URL(we.protocol+p):new URL(p),dt=Jt(et.pathname,X);et.origin===we.origin&&dt!=null?p=dt+et.search+et.hash:V=!0}catch{Rt(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Q=Dp(p,{relative:h}),[ee,ye,P]=ux(o,k),Ue=bx(p,{replace:E,state:T,target:b,preventScrollReset:N,relative:h,viewTransition:_});function Re(we){f&&f(we),we.defaultPrevented||Ue(we)}let _e=A.createElement("a",{...k,...P,href:H||Q,onClick:V||v?f:Re,ref:hx(C,ye),target:b,"data-discover":!B&&d==="render"?"true":void 0});return ee&&!B?A.createElement(A.Fragment,null,_e,A.createElement(dx,{page:Q})):_e});Xa.displayName="Link";var xx=A.forwardRef(function({"aria-current":f="page",caseSensitive:d=!1,className:o="",end:h=!1,style:v,to:E,viewTransition:T,children:b,...p},N){let _=Hn(E,{relative:p.relative}),k=Wt(),C=A.useContext(ir),{navigator:X,basename:B}=A.useContext(Ot),H=C!=null&&Sx(_)&&T===!0,V=X.encodeLocation?X.encodeLocation(_).pathname:_.pathname,Q=k.pathname,ee=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;d||(Q=Q.toLowerCase(),ee=ee?ee.toLowerCase():null,V=V.toLowerCase()),ee&&B&&(ee=Jt(ee,B)||ee);const ye=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let P=Q===V||!h&&Q.startsWith(V)&&Q.charAt(ye)==="/",Ue=ee!=null&&(ee===V||!h&&ee.startsWith(V)&&ee.charAt(V.length)==="/"),Re={isActive:P,isPending:Ue,isTransitioning:H},_e=P?f:void 0,we;typeof o=="function"?we=o(Re):we=[o,P?"active":null,Ue?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let et=typeof v=="function"?v(Re):v;return A.createElement(Xa,{...p,"aria-current":_e,className:we,ref:N,style:et,to:E,viewTransition:T},typeof b=="function"?b(Re):b)});xx.displayName="NavLink";var gx=A.forwardRef(({discover:s="render",fetcherKey:f,navigate:d,reloadDocument:o,replace:h,state:v,method:E=er,action:T,onSubmit:b,relative:p,preventScrollReset:N,viewTransition:_,...k},C)=>{let X=Nx(),B=wx(T,{relative:p}),H=E.toLowerCase()==="get"?"get":"post",V=typeof T=="string"&&hm.test(T),Q=ee=>{if(b&&b(ee),ee.defaultPrevented)return;ee.preventDefault();let ye=ee.nativeEvent.submitter,P=ye?.getAttribute("formmethod")||E;X(ye||ee.currentTarget,{fetcherKey:f,method:P,navigate:d,replace:h,state:v,relative:p,preventScrollReset:N,viewTransition:_})};return A.createElement("form",{ref:C,method:H,action:B,onSubmit:o?b:Q,...k,"data-discover":!V&&s==="render"?"true":void 0})});gx.displayName="Form";function vx(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function pm(s){let f=A.useContext(Ol);return Ne(f,vx(s)),f}function bx(s,{target:f,replace:d,state:o,preventScrollReset:h,relative:v,viewTransition:E}={}){let T=Rp(),b=Wt(),p=Hn(s,{relative:v});return A.useCallback(N=>{if($p(N,f)){N.preventDefault();let _=d!==void 0?d:Un(b)===Un(p);T(s,{replace:_,state:o,preventScrollReset:h,relative:v,viewTransition:E})}},[b,T,p,d,o,f,s,h,v,E])}var yx=0,jx=()=>`__${String(++yx)}__`;function Nx(){let{router:s}=pm("useSubmit"),{basename:f}=A.useContext(Ot),d=Yp();return A.useCallback(async(o,h={})=>{let{action:v,method:E,encType:T,formData:b,body:p}=ex(o,f);if(h.navigate===!1){let N=h.fetcherKey||jx();await s.fetch(N,d,h.action||v,{preventScrollReset:h.preventScrollReset,formData:b,body:p,formMethod:h.method||E,formEncType:h.encType||T,flushSync:h.flushSync})}else await s.navigate(h.action||v,{preventScrollReset:h.preventScrollReset,formData:b,body:p,formMethod:h.method||E,formEncType:h.encType||T,replace:h.replace,state:h.state,fromRouteId:d,flushSync:h.flushSync,viewTransition:h.viewTransition})},[s,f,d])}function wx(s,{relative:f}={}){let{basename:d}=A.useContext(Ot),o=A.useContext(Ft);Ne(o,"useFormAction must be used inside a RouteContext");let[h]=o.matches.slice(-1),v={...Hn(s||".",{relative:f})},E=Wt();if(s==null){v.search=E.search;let T=new URLSearchParams(v.search),b=T.getAll("index");if(b.some(N=>N==="")){T.delete("index"),b.filter(_=>_).forEach(_=>T.append("index",_));let N=T.toString();v.search=N?`?${N}`:""}}return(!s||s===".")&&h.route.index&&(v.search=v.search?v.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(v.pathname=v.pathname==="/"?d:Kt([d,v.pathname])),Un(v)}function Sx(s,{relative:f}={}){let d=A.useContext(rm);Ne(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=pm("useViewTransitionState"),h=Hn(s,{relative:f});if(!d.isTransitioning)return!1;let v=Jt(d.currentLocation.pathname,o)||d.currentLocation.pathname,E=Jt(d.nextLocation.pathname,o)||d.nextLocation.pathname;return ar(h.pathname,E)!=null||ar(h.pathname,v)!=null}const Ex="/assets/Screenshot_20250920-003837-removebg-preview-DldVoMcW.png",zx=()=>{const[s,f]=A.useState(!1),[d,o]=A.useState(!1),h=Wt(),v=()=>{f(!1)};A.useEffect(()=>{const b=()=>{window.scrollY>10?o(!0):o(!1)};return window.addEventListener("scroll",b),()=>window.removeEventListener("scroll",b)},[]);const E=[{path:"/",label:"Home"},{path:"/about",label:"About"},{path:"/services",label:"Services"},{path:"/team",label:"Portfolio"},{path:"/contact",label:"Contact"}],T=b=>h.pathname===b;return i.jsxs("div",{children:[i.jsx("nav",{className:`navbar fixed w-full z-50 transition-all duration-300 ${d?"bg-black/95 backdrop-blur-md shadow-xl py-1":"bg-transparent py-2"}`,style:{backgroundColor:"#101828"},children:i.jsxs("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:[i.jsxs("div",{className:"flex items-center justify-between h-14 md:h-16 lg:h-20",children:[i.jsx(Xa,{to:"/",className:"flex-shrink-0 z-10",onClick:v,children:i.jsx("div",{className:"logo-container group",children:i.jsx("img",{src:Ex,className:"logo-image transition-all duration-300 group-hover:scale-105 group-hover:rotate-1",alt:"Resicode Logo",style:{height:"50px",width:"auto",filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.5))"}})})}),i.jsx("div",{className:"hidden lg:flex flex-1 items-center justify-center",children:i.jsx("div",{className:"flex items-center space-x-1 bg-gray-900/50 backdrop-blur-sm rounded-full p-1 border border-gray-800",children:E.map(b=>i.jsxs(Xa,{to:b.path,className:`nav-link relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${T(b.path)?"text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-md":"text-gray-300 hover:text-white hover:bg-gray-800/50"}`,onClick:v,children:[b.label,T(b.path)&&i.jsx("span",{className:"absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"})]},b.path))})}),i.jsx("div",{className:"hidden lg:block flex-shrink-0",children:i.jsx(Xa,{to:"/careers",children:i.jsxs("button",{type:"button",className:"careers-btn group relative px-6 py-2.5 rounded-full text-white font-bold text-sm tracking-wider transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-xl overflow-hidden",onClick:v,children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 rounded-full opacity-100 group-hover:opacity-90 transition-opacity duration-300"}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"}),i.jsxs("span",{className:"relative flex items-center",children:[i.jsx("svg",{className:"w-3.5 h-3.5 mr-1.5 transition-transform duration-200 group-hover:rotate-12",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),"Careers"]})]})})}),i.jsx("div",{className:"lg:hidden flex items-center",children:i.jsx("button",{type:"button",onClick:()=>f(!s),className:"inline-flex items-center justify-center p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200 focus:outline-none","aria-label":"Toggle menu","aria-expanded":s,children:i.jsx("svg",{className:`w-5 h-5 transform transition-transform duration-200 ${s?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s?i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"}):i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})})]}),i.jsx("div",{className:`lg:hidden transition-all duration-200 ease-in-out ${s?"max-h-80 opacity-100 mt-1":"max-h-0 opacity-0 overflow-hidden"}`,children:i.jsxs("div",{className:"px-2 pt-1 pb-2 space-y-0.5 bg-gray-900/95 backdrop-blur-lg rounded-lg border border-gray-800 shadow-lg",children:[E.map(b=>i.jsx(Xa,{to:b.path,className:`nav-link-mobile block px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 ${T(b.path)?"text-white bg-gradient-to-r from-purple-600 to-pink-600":"text-gray-300 hover:text-white hover:bg-gray-800/50"}`,onClick:v,children:i.jsxs("div",{className:"flex items-center",children:[i.jsx("span",{className:"flex-1",children:b.label}),T(b.path)&&i.jsx("span",{className:"w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"})]})},b.path)),i.jsx(Xa,{to:"/careers",onClick:v,children:i.jsxs("button",{type:"button",className:"w-full mt-2 px-4 py-2.5 rounded-lg text-white font-bold text-sm bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 hover:from-yellow-600 hover:via-orange-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-[1.02] shadow-md flex items-center justify-center",children:[i.jsx("svg",{className:"w-4 h-4 mr-1.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),"Careers"]})})]})})]})}),i.jsx("div",{className:"nav-spacer",style:{height:"56px"}}),i.jsx("style",{jsx:!0,children:`
        .navbar {
          background: linear-gradient(180deg, #101828 0%, rgba(16, 24, 40, 0.98) 100%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          min-height: 56px;
        }

        .logo-container {
          position: relative;
        }

        .logo-container::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #FFD700, #FF6B6B, #4ECDC4, #45B7D1);
          border-radius: 8px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .logo-container:hover::before {
          opacity: 0.3;
        }

        .nav-link {
          position: relative;
          overflow: hidden;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .nav-link:hover::before {
          left: 100%;
        }

        .careers-btn {
          box-shadow: 0 2px 8px rgba(251, 146, 60, 0.3);
        }

        .careers-btn:hover {
          box-shadow: 0 4px 15px rgba(251, 146, 60, 0.5);
        }

        /* Pulse animation for active link indicator */
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.8);
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Mobile menu animation */
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .nav-link-mobile {
          animation: slideDown 0.2s ease-out forwards;
        }

        .nav-link-mobile:nth-child(1) { animation-delay: 0.05s; }
        .nav-link-mobile:nth-child(2) { animation-delay: 0.1s; }
        .nav-link-mobile:nth-child(3) { animation-delay: 0.15s; }
        .nav-link-mobile:nth-child(4) { animation-delay: 0.2s; }
        .nav-link-mobile:nth-child(5) { animation-delay: 0.25s; }

        /* Responsive adjustments for tablets */
        @media (min-width: 640px) {
          .navbar {
            min-height: 64px;
          }
          
          .nav-spacer {
            height: 64px;
          }
          
          .logo-image {
            height: 55px !important;
          }
          
          .nav-link-mobile {
            font-size: 0.875rem;
            padding: 0.75rem 1rem;
          }
        }

         @media (max-width: 340px) {
          .navbar {
            min-height: 14px;
          }
          
        }


        /* Desktop adjustments */
        @media (min-width: 1024px) {
          .navbar {
            min-height: 80px;
          }
          
          .nav-spacer {
            height: 80px;
          }
          
          .logo-image {
            height: 65px !important;
          }
        }

        /* Extra small devices */
        @media (max-width: 360px) {
          .navbar {
            min-height: 53px;
          }
          
          .nav-spacer {
            height: 52px;
          }
          
          .logo-image {
            height: 45px !important;
          }
          
          .mobile-menu {
            font-size: 0.75rem;
          }
        }

        /* Landscape mode for mobile */
        @media (max-height: 500px) and (orientation: landscape) {
          .navbar {
            min-height: 50px;
          }
          
          .nav-spacer {
            height: 50px;
          }
          
          .logo-image {
            height: 40px !important;
          }
          
          .mobile-menu {
            max-height: 60vh;
            overflow-y: auto;
          }
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .navbar,
          .logo-image,
          .nav-link,
          .careers-btn,
          .nav-link-mobile {
            transition: none !important;
            animation: none !important;
          }
        }
      `})]})},Tx="/assets/backgroundV-A01dMMD3.mp4",Ax=()=>i.jsxs("div",{className:"relative flex items-center justify-center w-full hero-section overflow-hidden mb-5",children:[i.jsx("video",{className:"absolute top-0 left-0 w-full h-full object-cover z-0",src:Tx,autoPlay:!0,loop:!0,muted:!0,playsInline:!0}),i.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-black/60 z-10 "}),i.jsxs("div",{className:"hero-content relative z-20 text-center px-4 w-full max-w-6xl mx-auto",children:[i.jsxs("h1",{className:"hero-title transition-all duration-300 ease-in-out transform hover:scale-105",children:['"',i.jsx("span",{style:{color:"#F45DA2"},children:"RESI"}),i.jsx("span",{style:{color:"#FBDB57"},children:"CODE"})," - YOUR VISION OUR WEB SOLUTION",'"']}),i.jsx("p",{style:{color:"white",fontweight:"bold",fontSize:"22px",margin:"0 auto"},children:"Resicode is a web development company helping startups, businesses, and enterprises build user-friendly and powerful web solutions that drive growth and success."}),i.jsxs("div",{className:"hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 sm:mt-16",children:[i.jsx("button",{className:"hero-button bg-transparent text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl border-2 border-yellow-300 hover:bg-yellow-300 hover:text-black",children:"Visit Our Project"}),i.jsx("button",{className:"hero-button bg-transparent text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl border-2 border-yellow-300 hover:bg-yellow-300 hover:text-black",children:"Book Free Consultation"})]}),i.jsx("div",{className:"hero-stats-wrapper",children:i.jsx("div",{className:"hero-stats-grid",children:[["50+","Projects Completed"],["98%","Client Satisfaction"],["4.9/5","Rating"],["24/7","Support"]].map(([s,f],d)=>i.jsxs("div",{className:"stat-card",children:[i.jsx("h2",{className:"stat-number",children:s}),i.jsx("p",{className:"stat-label",children:f})]},d))})})]}),i.jsx("style",{jsx:!0,children:`
      .hero-stats-wrapper {
  margin-top: 50px;
  padding: 20px;
}

/* Responsive grid */
.hero-stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}

/* Glass card */
.stat-card {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  border-radius: 18px;
  padding: 22px 16px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 0.35s ease;
}

/* Hover effect */
.stat-card:hover {
  transform: translateY(-6px) scale(1.03);
  background: rgba(255, 255, 255, 0.18);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

/* Numbers */
.stat-number {
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 800;
  color: #fbdb57;
  text-shadow: 0 0 15px rgba(251, 219, 87, 0.6);
}

/* Labels */
.stat-label {
  margin-top: 6px;
  font-size: 14px;
  color: #eaeaea;
  letter-spacing: 0.4px;
}

/* Mobile optimization */
@media (max-width: 480px) {
  .stat-card {
    padding: 18px 14px;
  }

  .stat-label {
    font-size: 13px;
  }
}

       .hero-section {
          min-height: 100vh;
        }

        /* TITLE */
        .hero-title {
          color: white;
          font-size: clamp(22px, 4vw, 42px);
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 24px;
          text-shadow: 2px 4px 10px rgba(0,0,0,0.7);
        }

        .resi { color: #F45DA2; }
        .code { color: #FBDB57; }

        /* DESCRIPTION */
        .hero-desc {
          color: #e5e5e5;
          font-size: clamp(14px, 2.2vw, 20px);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* BUTTON */
        .hero-btn {
          padding: 14px 26px;
          font-size: 16px;
          border-radius: 12px;
          border: 2px solid #FBDB57;
          background: transparent;
          color: white;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .hero-btn:hover {
          background: #FBDB57;
          color: black;
          transform: translateY(-2px);
        }

        /* STATS GRID */
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 16px;
          margin-top: 48px;
        }

        
        .stat-card h2 {
          font-size: clamp(20px, 3vw, 28px);
          font-weight: 700;
          color: #FBDB57;
        }

        .stat-card p {
          font-size: 14px;
          margin-top: 6px;
        }

        /* MOBILE HEIGHT FIX */
        @media (max-width: 768px) {
          .hero-section {

            min-height: 90vh;
          }
            .hero-section h2{
            margin-top:10px;
            }
        }

        @media (max-width: 480px) {
          .hero-section {
            min-height: 85vh;
          }
            .hero-section h2{
            margin-bottom:30px;
            }
        }
             @media (max-width: 360px) {
          .hero-section {
            min-height: 85vh;
          }
            h1{
            margin-top:20px;
            }
        }
      `})]}),Dx="/assets/trust-DTsELgOZ.png",Rx="/assets/mains-BxRkB_FP.png",Ox="/assets/profit-CRGpqp2I.png",Mx=()=>i.jsxs("div",{className:"min-h-screen bg-gray-900 py-8 sm:py-12 px-4 sm:px-6 lg:px-8",children:[i.jsxs("div",{className:"text-center mb-8 sm:mb-12",children:[i.jsx("h2",{className:"text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4",children:"About RESICODE"}),i.jsx("p",{className:"text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto px-2",children:'"Transforming ideas into powerful digital solutions that drive business growth and innovation."'})]}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center mb-12 lg:mb-16",children:[i.jsxs("div",{className:"text-gray-300 text-base sm:text-lg leading-relaxed px-2 sm:px-0",children:[i.jsx("p",{className:"mb-4 sm:mb-6",children:"Resicode is a premier web development company dedicated to crafting modern, scalable digital solutions for businesses of all sizes. Founded with a passion for innovation and excellence, we combine technical expertise with creative vision to deliver exceptional results."}),i.jsx("p",{className:"mb-4 sm:mb-6",children:"Our team of skilled developers, designers, and strategists work collaboratively to transform your ideas into robust web applications that not only look great but also perform flawlessly and drive measurable business outcomes."}),i.jsx("p",{children:"We believe in building long-term partnerships with our clients, providing ongoing support and guidance to ensure your digital presence evolves with your business needs."})]}),i.jsxs("div",{className:"grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6",children:[i.jsxs("div",{className:"bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white rounded-xl shadow-lg p-4 sm:p-6 transform transition duration-300 hover:scale-105",children:[i.jsx("h3",{className:"text-xl sm:text-2xl lg:text-3xl font-bold mb-2",children:"3+"}),i.jsx("p",{className:"text-sm sm:text-base",children:"Years Experience"})]}),i.jsxs("div",{className:"bg-gradient-to-r from-green-500 to-teal-600 hover:from-teal-600 hover:to-green-500 text-white rounded-xl shadow-lg p-4 sm:p-6 transform transition duration-300 hover:scale-105",children:[i.jsx("h3",{className:"text-xl sm:text-2xl lg:text-3xl font-bold mb-2",children:"50+"}),i.jsx("p",{className:"text-sm sm:text-base",children:"Projects Delivered"})]}),i.jsxs("div",{className:"bg-gradient-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white rounded-xl shadow-lg p-4 sm:p-6 transform transition duration-300 hover:scale-105",children:[i.jsx("h3",{className:"text-xl sm:text-2xl lg:text-3xl font-bold mb-2",children:"98%"}),i.jsx("p",{className:"text-sm sm:text-base",children:"Client Satisfaction"})]}),i.jsxs("div",{className:"bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-orange-600 hover:to-yellow-500 text-white rounded-xl shadow-lg p-4 sm:p-6 transform transition duration-300 hover:scale-105",children:[i.jsx("h3",{className:"text-xl sm:text-2xl lg:text-3xl font-bold mb-2",children:"24/7"}),i.jsx("p",{className:"text-sm sm:text-base",children:"Support Hours"})]})]})]}),i.jsx("div",{className:"mb-12 lg:mb-16",children:i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto",children:[i.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-xl p-6 sm:p-8 text-center hover:shadow-2xl transition duration-300 hover:-translate-y-2",children:[i.jsx("div",{className:"mb-4",children:i.jsx("h4",{className:"text-xl sm:text-2xl font-bold text-[#FBDB57] mb-3",children:"Our Vision"})}),i.jsx("p",{className:"text-gray-300 text-sm sm:text-base leading-relaxed",children:"To be the leading web development partner for businesses seeking innovative, scalable, and future-proof digital solutions that drive sustainable growth and competitive advantage."})]}),i.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-xl p-6 sm:p-8 text-center hover:shadow-2xl transition duration-300 hover:-translate-y-2",children:[i.jsx("div",{className:"mb-4",children:i.jsx("h4",{className:"text-xl sm:text-2xl font-bold text-[#F45DA2] mb-3",children:"Our Mission"})}),i.jsx("p",{className:"text-gray-300 text-sm sm:text-base leading-relaxed",children:"Empower businesses with cutting-edge web solutions that enhance their digital presence, streamline operations, and create meaningful connections with their audience through technology."})]}),i.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-xl p-6 sm:p-8 text-center hover:shadow-2xl transition duration-300 hover:-translate-y-2",children:[i.jsx("div",{className:"mb-4",children:i.jsx("h4",{className:"text-xl sm:text-2xl font-bold text-[#FBDB57] mb-3",children:"Our Values"})}),i.jsx("div",{className:"space-y-2",children:i.jsx("p",{className:"text-gray-300 text-sm sm:text-base leading-relaxed",children:"Innovation, Quality, Transparency, Collaboration, and Client Success. We believe in delivering excellence while building trust-based relationships.partnerships that drive."})})]})]})}),i.jsx("hr",{className:"my-8 sm:my-12 border-gray-700"}),i.jsxs("div",{className:"mb-12 lg:mb-16",children:[i.jsxs("div",{className:"text-center mb-8 sm:mb-12",children:[i.jsx("h2",{className:"text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4",children:"Why Choose Resicode?"}),i.jsx("p",{className:"text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2",children:"Discover what sets us apart in the competitive web development landscape"})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto",children:[i.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-3xl p-6 hover:shadow-2xl transition duration-300 hover:-translate-y-2",children:[i.jsxs("div",{className:"mb-4 flex flex-col items-center",children:[i.jsx("div",{className:"w-16 h-16 sm:w-20 sm:h-20 mb-4 p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center",children:i.jsx("img",{src:Dx,alt:"Trust",className:"w-10 h-10 sm:w-12 sm:h-12"})}),i.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-[#F45DA2] mb-3 text-center",children:"Trust & Reliability"})]}),i.jsx("p",{className:"text-gray-300 text-sm sm:text-base text-center leading-relaxed",children:"We build trust through transparent communication, reliable delivery, and long-term partnerships. Your success is our priority."})]}),i.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-3xl p-6 hover:shadow-2xl transition duration-300 hover:-translate-y-2",children:[i.jsxs("div",{className:"mb-4 flex flex-col items-center",children:[i.jsx("div",{className:"w-16 h-16 sm:w-20 sm:h-20 mb-4 p-3 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center",children:i.jsx("img",{src:Rx,alt:"Technical Expertise",className:"w-10 h-10 sm:w-12 sm:h-12"})}),i.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-[#FBDB57] mb-3 text-center",children:"Technical Expertise"})]}),i.jsx("p",{className:"text-gray-300 text-sm sm:text-base text-center leading-relaxed",children:"Our team stays ahead of technology trends, ensuring your projects are built with the latest, most efficient tools and frameworks."})]}),i.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-3xl p-6 hover:shadow-2xl transition duration-300 hover:-translate-y-2",children:[i.jsxs("div",{className:"mb-4 flex flex-col items-center",children:[i.jsx("div",{className:"w-16 h-16 sm:w-20 sm:h-20 mb-4 p-3 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center",children:i.jsx("img",{src:Ox,alt:"Cost-Effective",className:"w-10 h-10 sm:w-12 sm:h-12"})}),i.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-[#F45DA2] mb-3 text-center",children:"Cost-Effective Solutions"})]}),i.jsx("p",{className:"text-gray-300 text-sm sm:text-base text-center leading-relaxed",children:"Premium quality doesn't have to mean premium prices. We offer competitive pricing without compromising on quality or service."})]})]})]}),i.jsxs("div",{className:"mb-12 lg:mb-16",children:[i.jsxs("div",{className:"text-center mb-8 sm:mb-12",children:[i.jsx("h2",{className:"text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4",children:"Fast & Efficient Delivery"}),i.jsx("p",{className:"text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2",children:"We understand the importance of time in business. Our agile development process ensures quick turnaround times without sacrificing quality."})]}),i.jsx("div",{className:"max-w-4xl mx-auto",children:i.jsx("div",{className:"bg-gray-800 border border-gray-700 rounded-xl p-6 sm:p-8 hover:shadow-2xl transition duration-300 hover:-translate-y-2",children:i.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-6",children:[i.jsx("div",{className:"flex-shrink-0",children:i.jsx("div",{className:"w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center"})}),i.jsx("div",{children:i.jsx("p",{className:"text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed",children:"From project kickoff to final delivery, we prioritize efficiency and clear communication to keep your project on track and within budget. Our agile methodology ensures rapid iterations and continuous improvement throughout the development process."})})]})})})]}),i.jsx("hr",{className:"my-8 sm:my-12 border-gray-700"})]});var xm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Kf=Qa.createContext&&Qa.createContext(xm),Cx=["attr","size","title"];function Ux(s,f){if(s==null)return{};var d=_x(s,f),o,h;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(s);for(h=0;h<v.length;h++)o=v[h],!(f.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(s,o)&&(d[o]=s[o])}return d}function _x(s,f){if(s==null)return{};var d={};for(var o in s)if(Object.prototype.hasOwnProperty.call(s,o)){if(f.indexOf(o)>=0)continue;d[o]=s[o]}return d}function lr(){return lr=Object.assign?Object.assign.bind():function(s){for(var f=1;f<arguments.length;f++){var d=arguments[f];for(var o in d)Object.prototype.hasOwnProperty.call(d,o)&&(s[o]=d[o])}return s},lr.apply(this,arguments)}function Jf(s,f){var d=Object.keys(s);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(s);f&&(o=o.filter(function(h){return Object.getOwnPropertyDescriptor(s,h).enumerable})),d.push.apply(d,o)}return d}function nr(s){for(var f=1;f<arguments.length;f++){var d=arguments[f]!=null?arguments[f]:{};f%2?Jf(Object(d),!0).forEach(function(o){Bx(s,o,d[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(d)):Jf(Object(d)).forEach(function(o){Object.defineProperty(s,o,Object.getOwnPropertyDescriptor(d,o))})}return s}function Bx(s,f,d){return f=Hx(f),f in s?Object.defineProperty(s,f,{value:d,enumerable:!0,configurable:!0,writable:!0}):s[f]=d,s}function Hx(s){var f=kx(s,"string");return typeof f=="symbol"?f:f+""}function kx(s,f){if(typeof s!="object"||!s)return s;var d=s[Symbol.toPrimitive];if(d!==void 0){var o=d.call(s,f);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(f==="string"?String:Number)(s)}function gm(s){return s&&s.map((f,d)=>Qa.createElement(f.tag,nr({key:d},f.attr),gm(f.child)))}function Ce(s){return f=>Qa.createElement(Lx,lr({attr:nr({},s.attr)},f),gm(s.child))}function Lx(s){var f=d=>{var{attr:o,size:h,title:v}=s,E=Ux(s,Cx),T=h||d.size||"1em",b;return d.className&&(b=d.className),s.className&&(b=(b?b+" ":"")+s.className),Qa.createElement("svg",lr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},d.attr,o,E,{className:b,style:nr(nr({color:s.color||d.color},d.style),s.style),height:T,width:T,xmlns:"http://www.w3.org/2000/svg"}),v&&Qa.createElement("title",null,v),s.children)};return Kf!==void 0?Qa.createElement(Kf.Consumer,null,d=>f(d)):f(xm)}function qx(s){return Ce({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(s)}function Yx(s){return Ce({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(s)}function Gx(s){return Ce({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(s)}function Xx(s){return Ce({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(s)}function Qx(s){return Ce({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(s)}function Vx(s){return Ce({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"},child:[]}]})(s)}function Zx(s){return Ce({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(s)}function Kx(s){return Ce({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(s)}function Jx(s){return Ce({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"},child:[]}]})(s)}function Fx(s){return Ce({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(s)}function Wx(s){return Ce({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(s)}function $x(s){return Ce({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"},child:[]}]})(s)}const Px=()=>i.jsxs("footer",{className:"bg-gray-900 text-white mt-1",children:[i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[i.jsxs("div",{className:"lg:col-span-2",children:[i.jsx("div",{className:"flex items-center mb-6",children:i.jsx("div",{className:"text-3xl font-bold text-yellow-400",children:"RESICODE"})}),i.jsx("p",{className:"text-gray-300 mb-6 leading-relaxed",children:"Web & Script is a leading web development and design company dedicated to creating innovative and user-friendly digital solutions. We empower businesses to thrive in the digital world with cutting-edge technology and creative expertise."}),i.jsxs("div",{className:"flex space-x-4",children:[i.jsx("a",{href:"#",className:"bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-110",children:i.jsx(qx,{size:20})}),i.jsx("a",{href:"#",className:"bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-110",children:i.jsx(Qx,{size:20})}),i.jsx("a",{href:"#",className:"bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-110",children:i.jsx(Xx,{size:20})}),i.jsx("a",{href:"#",className:"bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-110",children:i.jsx(Gx,{size:20})}),i.jsx("a",{href:"#",className:"bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-110",children:i.jsx(Yx,{size:20})})]})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-lg font-semibold mb-6 text-yellow-400",children:"Quick Links"}),i.jsxs("ul",{className:"space-y-3",children:[i.jsx("li",{children:i.jsx("a",{href:"#",className:"text-gray-300 hover:text-yellow-400 transition-colors duration-300",children:"Home"})}),i.jsx("li",{children:i.jsx("a",{href:"#",className:"text-gray-300 hover:text-yellow-400 transition-colors duration-300",children:"About Us"})}),i.jsx("li",{children:i.jsx("a",{href:"#",className:"text-gray-300 hover:text-yellow-400 transition-colors duration-300",children:"Services"})}),i.jsx("li",{children:i.jsx("a",{href:"#",className:"text-gray-300 hover:text-yellow-400 transition-colors duration-300",children:"Our Team"})}),i.jsx("li",{children:i.jsx("a",{href:"#",className:"text-gray-300 hover:text-yellow-400 transition-colors duration-300",children:"Portfolio"})}),i.jsx("li",{children:i.jsx("a",{href:"#",className:"text-gray-300 hover:text-yellow-400 transition-colors duration-300",children:"Contact"})})]})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-lg font-semibold mb-6 text-yellow-400",children:"Contact Us"}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-center space-x-3",children:[i.jsx(Fx,{className:"text-yellow-400"}),i.jsx("span",{className:"text-gray-300",children:"Memon Colony Front Of Dadi Amma Masjid Nagpur 440026"})]}),i.jsxs("div",{className:"flex items-center space-x-3",children:[i.jsx(Wx,{className:"text-yellow-400"}),i.jsx("span",{className:"text-gray-300",children:"+91 9529468439"})]}),i.jsxs("div",{className:"flex items-center space-x-3",children:[i.jsx(Zx,{className:"text-yellow-400"}),i.jsx("span",{className:"text-gray-300",children:"resicode003@gmail.com"})]})]}),i.jsxs("div",{className:"mt-6",children:[i.jsx("h4",{className:"text-sm font-semibold mb-3 text-gray-300",children:"Subscribe to Newsletter"}),i.jsxs("div",{className:"flex",children:[i.jsx("input",{type:"email",placeholder:"Enter your email",className:"flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-yellow-400"}),i.jsx("button",{className:"bg-yellow-400 text-gray-900 px-4 py-2 rounded-r-lg font-semibold hover:bg-yellow-300 transition-colors duration-300",children:"Subscribe"})]})]})]})]})}),i.jsx("div",{className:"border-t border-gray-800",children:i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:i.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[i.jsx("p",{className:"text-gray-400 text-sm",children:"© 2025 Resicode. All rights reserved."}),i.jsxs("div",{className:"flex space-x-6 mt-4 md:mt-0",children:[i.jsx("a",{href:"#",className:"text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300",children:"Privacy Policy"}),i.jsx("a",{href:"#",className:"text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300",children:"Terms of Service"}),i.jsx("a",{href:"#",className:"text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300",children:"Cookie Policy"})]})]})})})]}),vm="/assets/web_dev-C6LCDuPk.png",Ix="/assets/E-commer-CDlOFhdo.png",bm="/assets/webapp-Bc10eCgv.png",ym="/assets/ui-DSyHFAoi.png",jm="/assets/seo-CpfmXpjF.png",Nm="/assets/custom-BubTimHm.png",Ff="/assets/wasim-Bwe0f-Du.jpg",Wf="/assets/manoj-ddxPzmGg.png",eg="/assets/aditya-DkMVijED.png",tg="/assets/devesh-KO52zLgJ.jpg",ag="/assets/rishabh-BapiXHEU.jpg",lg=()=>{const s=[{id:1,name:"Wasim Sheikh",position:"(Chairman & CTO)",image:Ff,description:"Strategic Vision & Business Development",skills:["Technology Strategy","System Architecture","Leadership","Product Vision","Innovation"]},{id:2,name:"Manoj Nagpure",position:"CEO",image:Wf,description:"Overall Operations & Growth Strategy",skills:["Business Strategy","Operations Management","Team Leadership","Decision Making"]},{id:3,name:"Aditya Rahangadale",position:"CMO",image:eg,description:"Marketing & Brand Strategy",skills:["Digital Marketing","SEO & Content","Growth Marketing","Market Analysis"]}],f=[{icon:$x,title:"Innovation",description:"We constantly push boundaries and embrace new technologies"},{icon:Kx,title:"Quality",description:"Excellence is our standard in every project we deliver"},{icon:Jx,title:"Collaboration",description:"We believe in teamwork and strong client partnerships"},{icon:Vx,title:"Efficiency",description:"Delivering results faster without compromising quality"}];return i.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100",children:[i.jsx("section",{className:"relative bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[i.jsx("h1",{className:"text-5xl md:text-6xl font-bold mb-6",children:"About RESICODE"}),i.jsx("p",{className:"text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto",children:"Resicode is a web development service-based company dedicated to creating scalable, modern, and user-friendly digital solutions for businesses worldwide."}),i.jsx("div",{className:"w-24 h-1 bg-yellow-400 mx-auto mt-8"})]})}),i.jsx("section",{className:"py-16 px-4 sm:px-6 lg:px-8",children:i.jsx("div",{className:"max-w-7xl mx-auto",children:i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[i.jsxs("div",{children:[i.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-6",children:"Our Story"}),i.jsx("p",{className:"text-lg text-gray-700 mb-6 leading-relaxed",children:"Founded in 2025, Resicode emerged from a simple yet powerful vision: to bridge the gap between innovative ideas and their digital realization. What started as a small team of passionate developers has grown into a full-service digital agency serving clients worldwide."}),i.jsx("p",{className:"text-lg text-gray-700 mb-6 leading-relaxed",children:"We believe that technology should be accessible, understandable, and transformative. Our journey has been marked by countless success stories, challenging projects, and meaningful relationships with clients who have become partners in innovation."}),i.jsxs("div",{className:"flex space-x-4",children:[i.jsx("button",{className:"bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300",children:"Our Portfolio"}),i.jsx("button",{className:"border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300",children:"Contact Us"})]})]}),i.jsx("div",{className:"relative",children:i.jsxs("div",{className:"bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white transform rotate-1 hover:rotate-0 transition-transform duration-300",children:[i.jsx("h3",{className:"text-2xl font-bold mb-6 text-center",children:"Our Long Term Vision with Timeline"}),i.jsxs("div",{className:"space-y-6",children:[i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsxs("div",{className:"flex flex-col items-center",children:[i.jsx("span",{className:"bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-sm",children:"2024"}),i.jsx("span",{className:"w-px h-full bg-white/40 mt-2"})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"text-lg font-bold",children:"Foundation"}),i.jsx("p",{className:"text-white/90",children:"Resicode was born with a vision to simplify technology for businesses."})]})]}),i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsxs("div",{className:"flex flex-col items-center",children:[i.jsx("span",{className:"bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-sm",children:"2025"}),i.jsx("span",{className:"w-px h-full bg-white/40 mt-2"})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"text-lg font-bold",children:"First Breakthrough"}),i.jsx("p",{className:"text-white/90",children:"Delivered 5+ successful projects with 100% client satisfaction."})]})]}),i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"flex flex-col items-center",children:i.jsx("span",{className:"bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-sm",children:"2025"})}),i.jsxs("div",{children:[i.jsx("h4",{className:"text-lg font-bold",children:"Expansion"}),i.jsx("p",{className:"text-white/90",children:"Expanding our team and starting to serve Indian and international clients."})]})]}),i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"flex flex-col items-center",children:i.jsx("span",{className:"bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-sm",children:"2026"})}),i.jsxs("div",{children:[i.jsx("h4",{className:"text-lg font-bold",children:"Innovation"}),i.jsx("p",{className:"text-white/90",children:"Introducing AI-powered solutions and advanced web technologies for businesses."})]})]})]})]})})]})})}),i.jsx("div",{className:"py-20 px-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900",children:i.jsxs("div",{className:"max-w-5xl mx-auto text-center",children:[i.jsx("div",{className:"text-6xl text-[#FBDB57] mb-6",children:"“"}),i.jsx("p",{className:"text-2xl md:text-3xl font-medium text-white leading-relaxed",children:"Our purpose is simple: to make technology accessible and empower businesses to thrive in the digital world through innovative web solutions."}),i.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-[#F45DA2] to-[#FBDB57] mx-auto my-8 rounded-full"}),i.jsx("p",{className:"text-lg text-gray-300 font-semibold tracking-wide",children:"— Resicode Team"})]})}),i.jsx("section",{className:"py-16 bg-white",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Our Values"}),i.jsx("p",{className:"text-xl text-gray-600",children:"The principles that guide everything we do"})]}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:f.map((d,o)=>{const h=d.icon;return i.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:shadow-xl transition duration-300",children:[i.jsx(h,{className:"text-4xl text-[#FBDB57] mx-auto mb-4"}),i.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:d.title}),i.jsx("p",{className:"text-gray-400",children:d.description})]},o)})})]})}),i.jsx("section",{className:"py-20 bg-gradient-to-b from-gray-900 to-black text-white",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[i.jsxs("div",{className:"text-center mb-16",children:[i.jsx("h2",{className:"text-4xl md:text-5xl font-extrabold mb-4",children:"What We Do"}),i.jsx("p",{className:"text-lg text-gray-400 max-w-2xl mx-auto",children:"Delivering innovative, scalable, and result-driven digital solutions tailored for modern businesses."})]}),i.jsxs("div",{className:"grid gap-8 sm:grid-cols-2 lg:grid-cols-3",children:[i.jsxs("div",{className:`group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8\r
        hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`,children:[i.jsx("div",{className:`w-14 h-14 flex items-center justify-center rounded-xl\r
          bg-gradient-to-br from-pink-500 to-purple-600 mb-6`,children:i.jsx("img",{src:vm,alt:"Web Development",className:"w-7 h-7"})}),i.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"Web Development"}),i.jsx("p",{className:"text-gray-400 mb-6 leading-relaxed",children:"Custom websites built with modern technologies for optimal performance, responsiveness, and user experience."}),i.jsxs("div",{className:"flex flex-wrap gap-2",children:[i.jsx("span",{className:"px-3 py-1 text-sm rounded-full bg-white/10",children:"Responsive"}),i.jsx("span",{className:"px-3 py-1 text-sm rounded-full bg-white/10",children:"Fast"}),i.jsx("span",{className:"px-3 py-1 text-sm rounded-full bg-white/10",children:"SEO Ready"})]})]}),i.jsxs("div",{className:`group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8\r
        hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`,children:[i.jsx("div",{className:`w-14 h-14 flex items-center justify-center rounded-xl\r
          bg-gradient-to-br from-yellow-400 to-orange-500 mb-6`,children:i.jsx("img",{src:Ix,alt:"E-commerce",className:"w-7 h-7"})}),i.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"E-commerce Solutions"}),i.jsx("p",{className:"text-gray-400 mb-6 leading-relaxed",children:"Complete online stores with secure payment gateways, inventory management, and seamless shopping experiences."}),i.jsxs("div",{className:"flex flex-wrap gap-2",children:[i.jsx("span",{className:"px-3 py-1 text-sm rounded-full bg-white/10",children:"Payments"}),i.jsx("span",{className:"px-3 py-1 text-sm rounded-full bg-white/10",children:"Inventory"}),i.jsx("span",{className:"px-3 py-1 text-sm rounded-full bg-white/10",children:"Secure"})]})]}),i.jsxs("div",{className:`group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8\r
        hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`,children:[i.jsx("div",{className:`w-14 h-14 flex items-center justify-center rounded-xl\r
          bg-gradient-to-br from-cyan-400 to-blue-500 mb-6`,children:i.jsx("img",{src:bm,alt:"Web Apps",className:"w-7 h-7"})}),i.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"Web Applications"}),i.jsx("p",{className:"text-gray-400 mb-6 leading-relaxed",children:"Scalable web applications with real-time features, robust backend systems, and API integrations."}),i.jsxs("div",{className:"flex flex-wrap gap-2",children:[i.jsx("span",{className:"px-3 py-1 text-sm rounded-full bg-white/10",children:"Scalable"}),i.jsx("span",{className:"px-3 py-1 text-sm rounded-full bg-white/10",children:"Real-time"}),i.jsx("span",{className:"px-3 py-1 text-sm rounded-full bg-white/10",children:"API"})]})]}),i.jsxs("div",{className:`group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8\r
        hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`,children:[i.jsx("div",{className:`w-14 h-14 flex items-center justify-center rounded-xl\r
          bg-gradient-to-br from-indigo-500 to-purple-500 mb-6`,children:i.jsx("img",{src:ym,alt:"UI UX",className:"w-7 h-7"})}),i.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"UI/UX Design"}),i.jsx("p",{className:"text-gray-400 mb-6 leading-relaxed",children:"Human-centered designs that create intuitive, engaging experiences and increase conversions."}),i.jsxs("div",{className:"flex flex-wrap gap-2",children:[i.jsx("span",{className:"px-3 py-1 text-sm rounded-full bg-white/10",children:"Research"}),i.jsx("span",{className:"px-3 py-1 text-sm rounded-full bg-white/10",children:"Wireframes"}),i.jsx("span",{className:"px-3 py-1 text-sm rounded-full bg-white/10",children:"Prototypes"})]})]}),i.jsxs("div",{className:`group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8\r
        hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`,children:[i.jsx("div",{className:`w-14 h-14 flex items-center justify-center rounded-xl\r
          bg-gradient-to-br from-green-400 to-emerald-500 mb-6`,children:i.jsx("img",{src:jm,alt:"SEO",className:"w-7 h-7"})}),i.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"SEO & Maintenance"}),i.jsx("p",{className:"text-gray-400 mb-6 leading-relaxed",children:"Continuous optimization, security updates, and performance monitoring to keep your website running at peak performance."}),i.jsxs("div",{className:"flex flex-wrap gap-2",children:[i.jsx("span",{className:"px-3 py-1 text-sm rounded-full bg-white/10",children:"SEO"}),i.jsx("span",{className:"px-3 py-1 text-sm rounded-full bg-white/10",children:"Security"}),i.jsx("span",{className:"px-3 py-1 text-sm rounded-full bg-white/10",children:"Monitoring"})]})]}),i.jsxs("div",{className:`group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8\r
        hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`,children:[i.jsx("div",{className:`w-14 h-14 flex items-center justify-center rounded-xl\r
          bg-gradient-to-br from-red-400 to-pink-500 mb-6`,children:i.jsx("img",{src:Nm,alt:"Custom Solutions",className:"w-7 h-7"})}),i.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"Custom Solutions"}),i.jsx("p",{className:"text-gray-400 mb-6 leading-relaxed",children:"Tailored software solutions designed to match your business workflows and unique requirements."}),i.jsxs("div",{className:"flex flex-wrap gap-2",children:[i.jsx("span",{className:"px-3 py-1 text-sm rounded-full bg-white/10",children:"Custom Software"}),i.jsx("span",{className:"px-3 py-1 text-sm rounded-full bg-white/10",children:"API Development"}),i.jsx("span",{className:"px-3 py-1 text-sm rounded-full bg-white/10",children:"Integration"})]})]})]})]})}),i.jsx("section",{className:"py-20 bg-gray-900 text-white",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs("div",{className:"text-center mb-14",children:[i.jsx("h2",{className:"text-4xl font-bold mb-4",children:"Meet Our Team"}),i.jsx("p",{className:"text-lg text-blue-200 max-w-3xl mx-auto",children:"The passionate professionals behind Resicode's success story"})]}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10",children:s.map(d=>i.jsxs("div",{className:`bg-gray-800 rounded-2xl p-8 text-center\r
                     transform transition duration-300\r
                     hover:-translate-y-3 hover:shadow-2xl`,children:[i.jsx("div",{className:"flex justify-center mb-5",children:i.jsx("img",{src:d.image,alt:d.name,className:`w-28 h-28 rounded-full object-cover\r
                         border-4 border-[#FBDB57]\r
                         shadow-lg`})}),i.jsx("h3",{className:"text-xl font-semibold mb-1",children:d.name}),i.jsx("p",{className:"text-[#F45DA2] font-medium mb-3",children:d.position}),i.jsx("p",{className:"text-gray-300 text-sm mb-5 leading-relaxed",children:d.description}),i.jsx("div",{className:"flex flex-wrap justify-center gap-2",children:d.skills.map((o,h)=>i.jsx("span",{className:`bg-gray-700 px-3 py-1 rounded-full text-xs\r
                           text-gray-200 hover:bg-[#FBDB57] hover:text-black\r
                           transition`,children:o},h))})]},d.id))})]})}),i.jsx("section",{className:"py-20 bg-gray-950 text-white",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs("div",{className:"text-center mb-16",children:[i.jsx("h2",{className:"text-4xl font-bold mb-4",children:"Our Technical Team"}),i.jsx("p",{className:"text-lg text-gray-400 max-w-3xl mx-auto",children:"A skilled group of engineers, designers, and innovators powering Resicode’s cutting-edge digital solutions"})]}),i.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10",children:[i.jsxs("div",{className:`bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center\r
                      hover:-translate-y-3 transition duration-300 hover:shadow-2xl`,children:[i.jsx("img",{src:ag,alt:"Frontend Developer",className:`w-24 h-24 mx-auto rounded-full object-cover\r
                     border-4 border-[#FBDB57] shadow-lg mb-5`}),i.jsx("h3",{className:"text-xl font-semibold mb-1",children:"Rishabh Nandankar"}),i.jsx("p",{children:"FrontEnd Developer"}),i.jsx("p",{className:"text-[#F45DA2] text-sm mb-4",children:"UI Engineer"}),i.jsx("p",{className:"text-gray-400 text-sm mb-5",children:"Crafting fast, responsive, and user-friendly interfaces using modern frontend frameworks."}),i.jsx("div",{className:"flex flex-wrap justify-center gap-2",children:["React","Next.js","Tailwind","UI Animations"].map((d,o)=>i.jsx("span",{className:`bg-gray-800 px-3 py-1 rounded-full text-xs\r
                         hover:bg-[#FBDB57] hover:text-black transition`,children:d},o))})]}),i.jsxs("div",{className:`bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center\r
                      hover:-translate-y-3 transition duration-300 hover:shadow-2xl`,children:[i.jsx("img",{src:Wf,alt:"UI/UX Designer",className:`w-24 h-24 mx-auto rounded-full object-cover\r
                     border-4 border-[#FBDB57] shadow-lg mb-5`}),i.jsx("h3",{className:"text-xl font-semibold mb-1",children:"Manoj Nagpure"}),i.jsx("p",{children:"FrontEnd Developer"}),i.jsx("p",{className:"text-[#F45DA2] text-sm mb-4",children:"Experience Designer"}),i.jsx("p",{className:"text-gray-400 text-sm mb-5",children:"Designing intuitive, user-centric interfaces that enhance usability and boost conversions."}),i.jsx("div",{className:"flex flex-wrap justify-center gap-2",children:["Figma","User Research","Wireframing","Prototyping"].map((d,o)=>i.jsx("span",{className:`bg-gray-800 px-3 py-1 rounded-full text-xs\r
                         hover:bg-[#FBDB57] hover:text-black transition`,children:d},o))})]}),i.jsxs("div",{className:`bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center\r
                      hover:-translate-y-3 transition duration-300 hover:shadow-2xl`,children:[i.jsx("img",{src:tg,alt:"Backend Developer",className:`w-24 h-24 mx-auto rounded-full object-cover\r
                     border-4 border-[#F45DA2] shadow-lg mb-5`}),i.jsx("h3",{className:"text-xl font-semibold mb-1",children:"Devesh Wadibhasme"}),i.jsx("p",{children:"Backend Developer"}),i.jsx("p",{className:"text-[#FBDB57] text-sm mb-4",children:"Web Engineer"}),i.jsx("p",{className:"text-gray-400 text-sm mb-5",children:"Handling complete application development from frontend to backend with seamless integration."}),i.jsx("div",{className:"flex flex-wrap justify-center gap-2",children:["Node.js","Express","MongoDB","API Security"].map((d,o)=>i.jsx("span",{className:`bg-gray-800 px-3 py-1 rounded-full text-xs\r
                         hover:bg-[#F45DA2] hover:text-black transition`,children:d},o))})]}),i.jsxs("div",{className:`bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center\r
                      hover:-translate-y-3 transition duration-300 hover:shadow-2xl`,children:[i.jsx("img",{src:Ff,alt:"Full Stack Developer",className:`w-24 h-24 mx-auto rounded-full object-cover\r
                     border-4 border-[#45CFFF] shadow-lg mb-5`}),i.jsx("h3",{className:"text-xl font-semibold mb-1",children:"Wasim Sheikh"}),i.jsx("p",{children:"MERN Stack Developer"}),i.jsx("p",{className:"text-[#45CFFF] text-sm mb-4",children:"System Architect"}),i.jsx("p",{className:"text-gray-400 text-sm mb-5",children:"Building scalable, secure backend systems and APIs that power high-performance applications."}),i.jsx("div",{className:"flex flex-wrap justify-center gap-2",children:["React","Node.js","REST APIs","DevOps"].map((d,o)=>i.jsx("span",{className:`bg-gray-800 px-3 py-1 rounded-full text-xs\r
                         hover:bg-[#45CFFF] hover:text-black transition`,children:d},o))})]})]})]})}),i.jsx("section",{className:"py-20 bg-gray-950 text-white relative overflow-hidden",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs("div",{className:"text-center mb-16",children:[i.jsxs("h2",{className:"text-4xl font-bold mb-4",children:["Why Choose ",i.jsx("span",{className:"text-[#FBDB57]",children:"Resicode"}),"?"]}),i.jsx("p",{className:"text-lg text-gray-400 max-w-3xl mx-auto",children:"We don't just build websites — we build powerful digital solutions that help your business grow and succeed in the digital world."})]}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10",children:[{icon:"🏆",title:"Proven Experience",desc:"With 3+ years and 50+ successful projects, we bring proven expertise to every engagement."},{icon:"💎",title:"Quality First",desc:"We never compromise on quality. Every project undergoes rigorous testing and quality assurance."},{icon:"🕒",title:"24/7 Support",desc:"Round-the-clock support ensures your business never faces downtime or technical issues alone."},{icon:"⚡",title:"Cutting-Edge Innovation",desc:"We stay ahead of technology trends to deliver future-proof solutions that give you a competitive edge."},{icon:"🎯",title:"Tailored Solutions",desc:"Every project is customized to your unique business needs, goals, and target audience."},{icon:"📈",title:"Results-Driven Approach",desc:"We focus on delivering measurable results that directly contribute to your business growth."}].map((d,o)=>i.jsxs("div",{className:`bg-gray-900 border border-gray-800 rounded-2xl p-8\r
                     hover:-translate-y-2 hover:shadow-2xl transition duration-300`,children:[i.jsx("div",{className:"text-4xl mb-4",children:d.icon}),i.jsx("h3",{className:"text-xl font-semibold mb-3 text-[#F45DA2]",children:d.title}),i.jsx("p",{className:"text-gray-400 text-sm leading-relaxed",children:d.desc})]},o))}),i.jsxs("div",{className:`mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600\r
                    rounded-2xl p-10 shadow-xl`,children:[i.jsx("h3",{className:"text-3xl font-bold mb-4",children:"Ready to Experience the Resicode Difference?"}),i.jsxs("p",{className:"text-lg text-blue-100 max-w-2xl mx-auto mb-8",children:["Join ",i.jsx("span",{className:"font-semibold text-yellow-300",children:"10+ satisfied clients"})," who have transformed their digital presence with our expert solutions."]}),i.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-6",children:[i.jsx("button",{className:`px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg\r
                           hover:bg-yellow-300 transition`,children:"Start Your Project"}),i.jsx("button",{className:`px-8 py-3 border border-white rounded-lg\r
                           hover:bg-white hover:text-black transition`,children:"View Case Studies"})]})]})]})})]})};function $f(s){return Ce({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(s)}function Cn(s){return Ce({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"},child:[]}]})(s)}function Pf(s){return Ce({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(s)}function ng(s){return Ce({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"},child:[]},{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"},child:[]}]})(s)}function ig(s){return Ce({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"},child:[]}]})(s)}function rg(s){return Ce({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(s)}function sg(s){return Ce({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"},child:[]}]})(s)}const cg=()=>{const[s,f]=A.useState(null),[d,o]=A.useState("all"),[h]=A.useState(null),v=Wt();A.useEffect(()=>{v.state&&v.state.filter&&(o(v.state.filter),h(v.state.filter))},[v.state]);const E=[{id:1,title:"Web Development",icon:"💻",category:"web",description:"Custom web applications built with modern technologies",fullDescription:"We create responsive, scalable web applications using React, Node.js, and other cutting-edge technologies. Our solutions are tailored to your business needs and deliver exceptional performance across all devices.",features:["Responsive Design","SEO Optimized","Fast Performance","Cross-browser Compatible","Scalable Architecture","Secure Implementation"],price:"",color:"#4F46E5",gradient:"linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)"},{id:2,title:"Mobile App Development",icon:"📱",category:"app",description:"Native and cross-platform mobile applications",fullDescription:"Develop high-performance mobile apps for iOS and Android that provide exceptional user experiences with smooth animations and native functionality.",features:["iOS & Android","React Native","Native Performance","App Store Deployment","Push Notifications","Offline Support"],price:"",color:"#059669",gradient:"linear-gradient(135deg, #059669 0%, #10B981 100%)"},{id:3,title:"UI/UX Design",icon:"🎨",category:"uiux",description:"User-centered design that converts visitors to customers",fullDescription:"Our design team creates intuitive interfaces that enhance user engagement and drive business growth through thoughtful design principles.",features:["User Research","Wireframing","Prototyping","Design Systems","Usability Testing","Design Handoff"],price:"",color:"#DB2777",gradient:"linear-gradient(135deg, #DB2777 0%, #EC4899 100%)"},{id:4,title:"E-commerce Solutions",icon:"🛒",category:"web",description:"Complete online store development and optimization",fullDescription:"Build and optimize your online store with secure payment processing, inventory management, and seamless shopping experiences.",features:["Payment Integration","Inventory Management","Security"],price:"",color:"#EA580C",gradient:"linear-gradient(135deg, #EA580C 0%, #F97316 100%)"},{id:5,title:"SEO & Digital Marketing",icon:"📈",category:"web",description:"Boost your online visibility and drive targeted traffic",fullDescription:"Comprehensive SEO strategies and digital marketing campaigns to grow your business online through organic reach and targeted advertising.",features:["Keyword Research","Content Strategy","Link Building","Performance Tracking","Competitor Analysis","ROI Optimization"],price:"",color:"#0891B2",gradient:"linear-gradient(135deg, #0891B2 0%, #0EA5E9 100%)"},{id:6,title:"Consulting & Strategy",icon:"🔍",category:"uiux",description:"Expert guidance for your digital transformation",fullDescription:"Strategic consulting to help you make informed decisions about technology and digital growth with data-driven insights.",features:["Technical Audit","Strategy Planning","Implementation Guide","Ongoing Support","Market Analysis","Growth Roadmap"],price:"",color:"#7C3AED",gradient:"linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)"}],T=[{value:"all",label:"All Services",icon:"",color:"#4F46E5"},{value:"web",label:"Web Development",icon:"",color:"#3B82F6"},{value:"app",label:"App Development",icon:"",color:"#10B981"},{value:"uiux",label:"UI/UX Design",icon:"",color:"#EC4899"}],b=d==="all"?E:E.filter(C=>C.category===d),p=[{number:"01",title:"Discovery & Consultation",description:"We dive deep into your business goals, target audience, and project requirements through detailed discussions.",duration:"1-2 Days",activities:["Initial Meeting","Requirement Analysis","Goal Setting","Scope Definition"]},{number:"02",title:"Planning & Strategy",description:"We create a comprehensive roadmap and strategy with detailed specifications and timeline.",duration:"3-5 Days",activities:["Project Planning","Tech Stack Selection","Timeline Creation","Resource Allocation"]},{number:"03",title:"Design & Development",description:"Our team brings your vision to life with creative design and robust development implementation.",duration:"2-4 Weeks",activities:["UI/UX Design","Development","Quality Checks","Client Review"]},{number:"04",title:"Testing & Quality Assurance",description:"Rigorous testing ensures flawless performance, security, and optimal user experience.",duration:"1-2 Weeks",activities:["Testing","Bug Fixing","Performance Optimization","Security Audit"]},{number:"05",title:"Deployment & Launch",description:"Smooth deployment to production environment with comprehensive documentation.",duration:"3-5 Days",activities:["Deployment","Final Testing","Documentation","Training"]},{number:"06",title:"Support & Maintenance",description:"Ongoing support, maintenance, and optimization to ensure long-term success.",duration:"Ongoing",activities:["Technical Support","Updates","Performance Monitoring","Enhancements"]}],N=({service:C})=>i.jsx("div",{className:"service-card",onClick:()=>f(C),style:{"--service-color":C.color},children:i.jsxs("div",{className:"service-card-inner",children:[i.jsx("div",{className:"service-icon",style:{background:C.gradient},children:C.icon}),i.jsx("h3",{children:C.title}),i.jsx("p",{children:C.description}),i.jsxs("div",{className:"service-features",children:[C.features.slice(0,3).map((X,B)=>i.jsxs("span",{className:"feature-tag",children:[i.jsx(Cn,{})," ",X]},B)),C.features.length>3&&i.jsxs("span",{className:"feature-tag",children:["+",C.features.length-3," more"]})]}),i.jsxs("div",{className:"service-footer",children:[i.jsx("span",{className:"service-price",children:C.price}),i.jsxs("button",{className:"learn-more-btn",children:[i.jsx("span",{children:"Learn More"}),i.jsx($f,{className:"arrow-icon"})]})]}),i.jsx("div",{className:"card-hover-effect"})]})}),_=({service:C,onClose:X})=>i.jsx("div",{className:"service-detail-overlay",children:i.jsxs("div",{className:"service-detail",style:{"--service-color":C.color},children:[i.jsx("button",{className:"close-btn",onClick:X,children:i.jsx(rg,{})}),i.jsxs("div",{className:"detail-header",children:[i.jsx("div",{className:"detail-icon",style:{background:C.gradient},children:C.icon}),i.jsxs("div",{children:[i.jsx("h2",{children:C.title}),i.jsx("span",{className:"service-category",children:T.find(B=>B.value===C.category)?.label})]})]}),i.jsxs("div",{className:"detail-content",children:[i.jsxs("div",{className:"description-section",children:[i.jsx("h4",{children:"Service Overview"}),i.jsx("p",{children:C.fullDescription})]}),i.jsxs("div",{className:"features-section",children:[i.jsxs("h4",{children:["What's Included ",i.jsx(sg,{})]}),i.jsx("div",{className:"features-grid",children:C.features.map((B,H)=>i.jsxs("div",{className:"feature-item",children:[i.jsx(Cn,{className:"feature-check"}),i.jsx("span",{children:B})]},H))})]}),i.jsx("div",{className:"pricing-section",children:i.jsxs("div",{className:"price-card",children:[i.jsx("h4",{children:"Pricing"}),i.jsxs("div",{className:"price-display",children:[i.jsx("span",{className:"price-amount",children:C.price}),i.jsx("span",{className:"price-note",children:"Flexible plans available based on project scope"})]})]})}),i.jsxs("div",{className:"action-buttons",children:[i.jsxs("button",{className:"cta-button primary",children:["Get Started ",i.jsx(Pf,{})]}),i.jsx("button",{className:"cta-button secondary",onClick:X,children:"Browse More Services"})]})]})]})}),k=()=>i.jsxs("div",{className:"w-full max-w-7xl mx-auto px-4 mb-12",children:[i.jsxs("div",{className:"flex items-center justify-center gap-3 mb-6",children:[i.jsx(ig,{className:"text-[#FBDB57] text-xl"}),i.jsx("span",{className:"text-lg font-semibold text-white",children:"Filter by Category"})]}),i.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:T.map(C=>i.jsxs("button",{onClick:()=>o(C.value),className:`flex items-center gap-2 px-6 py-3 rounded-full
                    border text-sm font-medium transition-all duration-300
                    ${d===C.value?"bg-opacity-10 shadow-lg scale-105":"hover:scale-105"}`,style:{borderColor:d===C.value?C.color:"#374151",color:d===C.value?C.color:"#d1d5db",backgroundColor:d===C.value?`${C.color}20`:"transparent"},children:[i.jsx("span",{className:"text-lg",children:C.icon}),C.label]},C.value))})]});return i.jsxs("div",{className:"services-page",children:[i.jsxs("section",{className:"services-hero",children:[i.jsx("div",{className:"hero-gradient"}),i.jsx("div",{className:"container",children:i.jsxs("div",{className:"hero-content",children:[i.jsxs("h1",{className:"hero-title",children:["Digital Solutions That",i.jsx("span",{className:"gradient-text",children:" Drive Growth"})]}),i.jsx("p",{className:"hero-description",children:"At Resicode, we provide a full range of web development and digital solutions tailored to meet the unique needs of your business. Our goal is to help you grow online with modern, scalable, and user-friendly solutions."}),i.jsxs("div",{className:"hero-stats",children:[i.jsxs("div",{className:"stat",children:[i.jsx("span",{className:"stat-number",children:"50+"}),i.jsx("span",{className:"stat-label",children:"Projects Delivered"})]}),i.jsxs("div",{className:"stat",children:[i.jsx("span",{className:"stat-number",children:"100%"}),i.jsx("span",{className:"stat-label",children:"Client Satisfaction"})]}),i.jsxs("div",{className:"stat",children:[i.jsx("span",{className:"stat-number",children:"24/7"}),i.jsx("span",{className:"stat-label",children:"Support"})]})]})]})})]}),i.jsx("section",{className:"services-grid-section py-10 shadow-lg mt-1",style:{backgroundColor:"#101828"},children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"section-header",style:{color:"white"},children:[i.jsx("h1",{style:{fontSize:"40px"},className:"font-bold",children:"Our Service Portfolio"}),i.jsx("p",{className:"section-subtitle",children:"Explore our comprehensive range of digital services designed to elevate your business"})]}),i.jsx(k,{}),i.jsx("div",{className:"w-full max-w-7xl mx-auto px-4",children:i.jsx("div",{className:`\r
      grid\r
      grid-cols-1\r
      sm:grid-cols-2\r
      lg:grid-cols-3\r
      gap-8\r
      place-items-stretch\r
    `,children:b.map(C=>i.jsx(N,{service:C},C.id))})})]})}),i.jsx("section",{className:"process-section mt-1",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("h2",{children:"Our Process"}),i.jsx("p",{className:"section-subtitle",children:"A transparent, step-by-step approach to delivering exceptional digital solutions"})]}),i.jsx("div",{className:"process-timeline",children:p.map((C,X)=>i.jsxs("div",{className:"process-step",children:[i.jsxs("div",{className:"step-header",children:[i.jsx("div",{className:"step-number",children:C.number}),i.jsxs("div",{className:"step-duration",children:[i.jsx("span",{className:"duration-icon",children:"⏱️"}),C.duration]})]}),i.jsx("h3",{children:C.title}),i.jsx("p",{children:C.description}),i.jsx("div",{className:"step-activities",children:C.activities.map((B,H)=>i.jsx("span",{className:"activity-tag",children:B},H))}),X<p.length-1&&i.jsx("div",{className:"step-connector",children:i.jsx(Pf,{})})]},X))})]})}),i.jsx("section",{className:"cta-section",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"cta-card",children:[i.jsxs("div",{className:"cta-content",children:[i.jsx("h2",{children:"Ready to Start Your Project?"}),i.jsx("p",{children:"Let's transform your ideas into a powerful digital solution. Get started with a free consultation and see how we can help your business grow."}),i.jsxs("div",{className:"cta-features",children:[i.jsxs("div",{className:"cta-feature",children:[i.jsx(Cn,{})," Free Initial Consultation"]}),i.jsxs("div",{className:"cta-feature",children:[i.jsx(Cn,{})," No Commitment Required"]}),i.jsxs("div",{className:"cta-feature",children:[i.jsx(Cn,{})," Response Within 24 Hours"]})]})]}),i.jsxs("div",{className:"cta-actions",children:[i.jsxs("button",{className:"primary-cta",children:["Get Free Consultation ",i.jsx($f,{})]}),i.jsx("button",{className:"secondary-cta",children:"View Case Studies"})]})]})})}),i.jsx("section",{className:"testimonial-section p-2 bg-yellow-500 mb-5",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"testimonial-card",children:[i.jsx("p",{className:"testimonial-text",children:'"Resicode delivered our project ahead of schedule with exceptional quality. Their team was professional, communicative, and truly understood our vision."'}),i.jsx("div",{className:"testimonial-author",children:i.jsxs("div",{className:"author-info",children:[i.jsx("strong",{children:"Ather Trading"}),i.jsx("span",{children:"E-commerce Platform"})]})})]})})}),s&&i.jsx(_,{service:s,onClose:()=>f(null)}),i.jsx("style",{jsx:!0,children:`

/* Service.css */

/* ===== Variables ===== */
:root {
  --primary-color: #4F46E5;
  --primary-gradient: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
  --secondary-color: #10B981;
  --dark-color: #1F2937;
  --light-color: #F9FAFB;
  --gray-color: #6B7280;
  --card-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --card-shadow-hover: 0 20px 40px -10px rgba(79, 70, 229, 0.2), 0 10px 20px -5px rgba(79, 70, 229, 0.1);
  --border-radius: 16px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ===== Reset & Base Styles ===== */
.services-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
  min-height: 100vh;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ===== Hero Section ===== */
.services-hero {
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
  background: var(--dark-color);
}

.hero-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 50%, rgba(79, 70, 229, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%);
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  max-width: 800px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  margin-bottom: 2rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
}

.hero-description {
  font-size: 1.25rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out 0.2s forwards;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 4rem;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ffef14ff 0%, #e2e8f0 100%);
  -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
}

.stat-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 0.5rem;
}

/* ===== Services Grid Section ===== */
.services-grid-section {
  padding: 5rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--gray-color);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Filter Section */
.filter-section {
  background: white;
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 3rem;
  box-shadow: var(--card-shadow);
  border: 1px solid #E5E7EB;
}

.filter-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: var(--dark-color);
  font-weight: 600;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid transparent;
  background: #F3F4F6;
  border-radius: 50px;
  font-weight: 500;
  color: var(--dark-color);
  cursor: pointer;
  transition: var(--transition);
}

.filter-btn:hover {
  background: #E5E7EB;
  transform: translateY(-2px);
}

.filter-btn.active {
  background: white;
  border-color: var(--filter-color);
  color: var(--filter-color);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.filter-icon {
  font-size: 1.25rem;
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  position: relative;
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}

.service-card:nth-child(1) { animation-delay: 0.1s; }
.service-card:nth-child(2) { animation-delay: 0.2s; }
.service-card:nth-child(3) { animation-delay: 0.3s; }
.service-card:nth-child(4) { animation-delay: 0.4s; }
.service-card:nth-child(5) { animation-delay: 0.5s; }
.service-card:nth-child(6) { animation-delay: 0.6s; }
.service-card:nth-child(7) { animation-delay: 0.7s; }
.service-card:nth-child(8) { animation-delay: 0.8s; }

.service-card-inner {
  background: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  height: 100%;
  position: relative;
  z-index: 1;
  border: 1px solid #E5E7EB;
  transition: var(--transition);
  overflow: hidden;
}

.service-card:hover .service-card-inner {
  transform: translateY(-8px);
  box-shadow: var(--card-shadow-hover);
  border-color: var(--service-color);
}

.service-card:hover .card-hover-effect {
  opacity: 1;
}

.card-hover-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--service-color);
  opacity: 0;
  transition: var(--transition);
}

.service-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border-radius: 16px;
  margin-bottom: 1.5rem;
  color: white;
}

.service-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dark-color);
  margin-bottom: 0.75rem;
}

.service-card p {
  color: var(--gray-color);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.service-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.feature-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.375rem 0.75rem;
  background: #F3F4F6;
  border-radius: 6px;
  font-size: 0.875rem;
  color: var(--dark-color);
}

.feature-tag svg {
  color: var(--service-color);
}

.service-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  border-top: 1px solid #E5E7EB;
}

.service-price {
  font-weight: 700;
  color: var(--service-color);
  font-size: 1.125rem;
}

.learn-more-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: transparent;
  border: 2px solid #E5E7EB;
  border-radius: 8px;
  font-weight: 600;
  color: var(--dark-color);
  cursor: pointer;
  transition: var(--transition);
}

.learn-more-btn:hover {
  border-color: var(--service-color);
  color: var(--service-color);
  transform: translateX(4px);
}

/* ===== Process Section ===== */
.process-section {
  padding: 5rem 0;
  background:#121F39;
}

.process-timeline {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  position: relative;
}

.process-step {
  background: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  position: relative;
  border: 1px solid #E5E7EB;
  transition: var(--transition);
}

.process-step:hover {
  transform: translateY(-5px);
  box-shadow: var(--card-shadow);
  border-color: var(--primary-color);
}

.step-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.step-number {
  font-size: 2rem;
  font-weight: 800;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.step-duration {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  background: #F3F4F6;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
}

.process-step h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--dark-color);
  margin-bottom: 1rem;
}

.process-step p {
  color: var(--gray-color);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.step-activities {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.activity-tag {
  padding: 0.375rem 0.75rem;
  background: var(--primary-color);
  color: white;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
}

.step-connector {
  position: absolute;
  top: 50%;
  right: -1rem;
  transform: translateY(-50%);
  background: white;
  border: 2px solid #E5E7EB;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

/* ===== CTA Section ===== */
.cta-section {
  padding: 5rem 0;
}

.cta-card {
  background: var(--dark-color);
  border-radius: var(--border-radius);
  padding: 4rem;
  color: white;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3rem;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.cta-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--primary-gradient);
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff 0%, #e2e8f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cta-content p {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.cta-features {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.cta-feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
}

.cta-feature svg {
  color: var(--secondary-color);
}

.cta-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.primary-cta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--primary-gradient);
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: var(--transition);
}

.primary-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(79, 70, 229, 0.4);
}

.secondary-cta {
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: var(--transition);
}

.secondary-cta:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
}

/* ===== Testimonial Section ===== */


.testimonial-card {
  background: white;
  border-radius: var(--border-radius);
  padding: 3rem;
  text-align: center;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: var(--card-shadow);
  border: 1px solid #E5E7EB;
}

.quote-icon {
  font-size: 4rem;
  color: var(--primary-color);
  opacity: 0.2;
  margin-bottom: -2rem;
}

.testimonial-text {
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--dark-color);
  font-style: italic;
  margin-bottom: 2rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.author-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.author-info strong {
  font-size: 1.125rem;
  color: var(--dark-color);
}

.author-info span {
  font-size: 0.875rem;
  color: var(--gray-color);
}

/* ===== Service Detail Modal ===== */
.service-detail-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  animation: fadeIn 0.3s ease-out;
}

.service-detail {
  background: white;
  border-radius: var(--border-radius);
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: slideUp 0.4s ease-out;
}

.close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: #F3F4F6;
  border: none;
  border-radius: 8px;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  z-index: 2;
}

.close-btn:hover {
  background: #E5E7EB;
  transform: rotate(90deg);
}

.detail-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 3rem 3rem 2rem;
  background: linear-gradient(180deg, var(--service-color)10 0%, #FFFFFF 100%);
}

.detail-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  border-radius: 20px;
  color: white;
}

.detail-header h2 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--dark-color);
}

.service-category {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: var(--service-color)10;
  color: var(--service-color);
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: 0.5rem;
}

.detail-content {
  padding: 0 3rem 3rem;
}

.description-section h4,
.features-section h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--dark-color);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.description-section p {
  color: var(--gray-color);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: #F9FAFB;
  border-radius: 8px;
  transition: var(--transition);
}

.feature-item:hover {
  background: #F3F4F6;
  transform: translateX(4px);
}

.feature-check {
  color: var(--service-color);
  min-width: 20px;
}

.pricing-section {
  margin-bottom: 2rem;
}

.price-card {
  background: var(--service-color)10;
  border: 2px solid var(--service-color)20;
  border-radius: var(--border-radius);
  padding: 2rem;
}

.price-card h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--dark-color);
  margin-bottom: 1rem;
}

.price-display {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.price-amount {
  font-size: 2rem;
  font-weight: 800;
  color: var(--service-color);
}

.price-note {
  color: var(--gray-color);
  font-size: 0.875rem;
}

.action-buttons {
  display: flex;
  gap: 1rem;
}

.cta-button {
  flex: 1;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.cta-button.primary {
  background: var(--service-color);
  color: white;
  border: none;
}

.cta-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.cta-button.secondary {
  background: transparent;
  border: 2px solid #E5E7EB;
  color: var(--dark-color);
}

.cta-button.secondary:hover {
  border-color: var(--service-color);
  color: var(--service-color);
}

/* ===== Animations ===== */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== Responsive Design ===== */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 2.75rem;
  }
  
  .services-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
  
  .cta-card {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .cta-features {
    align-items: center;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .services-hero {
    padding: 4rem 0;
  }
  
  .hero-title {
    font-size: 2.25rem;
  }
  
  .hero-description {
    font-size: 1.125rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 2rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .process-timeline {
    grid-template-columns: 1fr;
  }
  
  .step-connector {
    display: none;
  }
  
  .service-detail {
    padding: 0;
  }
  
  .detail-header {
    padding: 2rem;
    flex-direction: column;
    text-align: center;
  }
  
  .detail-content {
    padding: 2rem;
  }
  
  .action-buttons {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.875rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .filter-buttons {
    flex-direction: column;
  }
  
  .filter-btn {
    width: 100%;
    justify-content: center;
  }
  
  .cta-card {
    padding: 2rem;
  }
  
  .testimonial-card {
    padding: 2rem;
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 5px;
}


  .learn-more-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: 9999px;

  font-size: 14px;
  font-weight: 600;


  background: rgba(255, 255, 255, 0.12);
  border: 1.8px solid rgba(0, 0, 0, 1);

  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.learn-more-btn:hover {
  
  transform: translateX(4px);
}

.learn-more-btn .arrow-icon {
  transition: transform 0.3s ease;
}

.learn-more-btn:hover .arrow-icon {
  transform: translateX(4px);
}

       
      `})]})},og=()=>{const s=[{name:"Facebook",icon:"fab fa-facebook-f",url:"#",color:"#1877F2"},{name:"Twitter",icon:"fab fa-twitter",url:"#",color:"#1DA1F2"},{name:"LinkedIn",icon:"fab fa-linkedin-in",url:"#",color:"#0077B5"},{name:"Instagram",icon:"fab fa-instagram",url:"#",color:"#E4405F"},{name:"YouTube",icon:"fab fa-youtube",url:"#",color:"#FF0000"}];return i.jsxs("div",{className:"social-links-section",children:[i.jsx("h3",{children:"Follow Us"}),i.jsx("div",{className:"social-links",children:s.map(f=>i.jsx("a",{href:f.url,className:"social-link",style:{"--hover-color":f.color},"aria-label":f.name,children:i.jsx("i",{className:f.icon})},f.name))})]})},ug=()=>{const[s,f]=A.useState({name:"",email:"",phone:"",serviceType:"",subject:"",message:""}),[d,o]=A.useState(!1),[h,v]=A.useState(null),E=["Web Development","Mobile App Development","UI/UX Design","Digital Marketing","Consulting","Other"],T=p=>f({...s,[p.target.name]:p.target.value}),b=async p=>{p.preventDefault(),o(!0);try{const N=await fetch("http://localhost:5000/api/contact/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),_=await N.json();N.ok&&_.success?(v("success"),f({name:"",email:"",phone:"",serviceType:"",subject:"",message:""}),alert(_.message||"Message sent successfully!")):(v("error"),alert(_.message||"Failed to send message. Please try again."))}catch(N){v("error"),console.error("Error submitting form:",N),alert("Network error. Please check your connection and try again.")}finally{o(!1)}};return i.jsx("section",{className:"bg-gray-900 py-16 px-4",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-16",children:[i.jsxs("h1",{className:"text-3xl md:text-5xl font-bold text-white mb-4",children:["Get in Touch with ",i.jsx("span",{className:"text-yellow-300",children:"RESICODE"})]}),i.jsx("p",{className:"text-gray-300 max-w-3xl mx-auto",children:"Whether you want to start a project or just say hello, our team is ready to help."})]}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[i.jsxs("div",{className:"space-y-10",children:[i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch",children:[["Email Us","resicode003@gmail.com",""],["Call Us","9529468439",""],["Live Chat","Start Chat",""]].map((p,N)=>i.jsxs("div",{className:`\r
        bg-gray-800 border border-gray-700 rounded-xl \r
        p-6 flex flex-col items-center justify-center \r
        text-center min-h-[160px]\r
        hover:-translate-y-1 hover:shadow-xl \r
        transition duration-300\r
      `,children:[i.jsx("div",{className:"text-3xl mb-3",children:p[2]}),i.jsx("h3",{className:"text-lg font-bold text-yellow-300",children:p[0]}),i.jsx("p",{className:"text-gray-300 mt-2 break-all",children:p[1]})]},N))}),i.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-xl p-8",children:[i.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Visit Our Office"}),i.jsx("p",{className:"text-gray-300 mb-6",children:"Momon Colony, Old Kampthee Road, Kalamna, Nagpur, Maharashtra - 440026"}),i.jsxs("div",{className:"space-y-4 text-gray-300",children:[i.jsx("p",{children:"🕒 Mon - Sat: 10 AM – 7 PM"}),i.jsx("p",{children:"⭐ Rated 4.9/5 by clients"}),i.jsx("p",{children:"🚗 Ample parking available"})]})]})]}),i.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-xl p-8",children:[i.jsx("h2",{className:"text-2xl font-bold text-white mb-6",children:"Send Us a Message"}),i.jsxs("form",{onSubmit:b,className:"space-y-5",children:[[["name","Full Name *","text"],["email","Email Address *","email"],["phone","Phone Number","tel"],["subject","Subject","text"]].map(([p,N,_])=>i.jsxs("div",{children:[i.jsx("label",{className:"block text-gray-300 mb-1",children:N}),i.jsx("input",{type:_,name:p,value:s[p],onChange:T,className:"w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white"})]},p)),i.jsxs("div",{children:[i.jsx("label",{className:"block text-gray-300 mb-1",children:"Service Type"}),i.jsxs("select",{name:"serviceType",value:s.serviceType,onChange:T,className:"w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white",children:[i.jsx("option",{value:"",children:"Select Service"}),E.map((p,N)=>i.jsx("option",{children:p},N))]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-gray-300 mb-1",children:"Message *"}),i.jsx("textarea",{name:"message",rows:"5",value:s.message,onChange:T,className:"w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white"})]}),i.jsx("button",{disabled:d,className:"w-full bg-yellow-300 text-black font-bold py-3 rounded-lg hover:opacity-90 transition",children:d?"Sending...":"Send Message"}),h==="success"&&i.jsx("p",{className:"text-green-400 text-center mt-3",children:"Message sent successfully!"})]})]})]}),i.jsx("div",{className:"mt-16 bg-gray-800 border border-gray-700 rounded-xl p-10 text-center text-gray-300",children:"📍 Momon Colony, Old Kampthee Road, Kalamna, Nagpur"}),i.jsx(og,{})]})})},dg="/assets/E-com-4J2yBeiD.png",fg=()=>i.jsx("div",{children:i.jsxs("div",{class:"min-h-screen bg-gray-800 mt-1",children:[i.jsx("h2",{className:"text-4xl font-bold  text-center mb-8 p-5",style:{color:"white"},children:"Our Services"}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 p-5",children:[i.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-xl p-6 hover:shadow-2xl transition duration-300 hover:-translate-y-2",children:[i.jsx("img",{src:vm,alt:"Web Development",className:"w-25 h-25 mb-4 mx-auto"}),i.jsx("h3",{className:"text-2xl font-bold text-[#F45DA2] mb-3 text-center",children:"Web Development"}),i.jsx("p",{className:"text-gray-300 text-center",children:"Custom static and dynamic websites built with modern technologies for optimal performance and user experience. Responsive Design Fast Loading SEO Optimized"}),i.jsx("button",{className:"mt-4 bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300 block mx-auto",children:"Learn More"})]}),i.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-xl p-6 hover:shadow-2xl transition duration-300 hover:-translate-y-2",children:[i.jsx("img",{src:dg,alt:"E-commerce Solutions",className:"w-25 h-25 mb-4 mx-auto"}),i.jsx("h3",{className:"text-2xl font-bold text-[#FBDB57] mb-3 text-center",children:"E-commerce Solutions"}),i.jsx("p",{className:"text-gray-300 text-center",children:"Complete online store solutions with secure payment gateways, inventory management, and seamless user journey. Payment Integration Inventory Management Mobile Friendly"}),i.jsx("button",{className:"mt-4 bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300 block mx-auto",children:"Learn More"})]}),i.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-xl p-6 hover:shadow-2xl transition duration-300 hover:-translate-y-2",children:[i.jsx("img",{src:ym,alt:"UI/UX Design",className:"w-25 h-25 mb-4 mx-auto"}),i.jsx("h3",{className:"text-2xl font-bold text-[#FBDB57] mb-3 text-center",children:"UI / UX Design"}),i.jsx("p",{className:"text-gray-300 text-center",children:"User-centered designs that create intuitive, engaging experiences and drive conversions for your business. User Research Wireframing"}),i.jsx("button",{className:"mt-4 bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300 block mx-auto",children:"Learn More"})]}),i.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-xl p-6 hover:shadow-2xl transition duration-300 hover:-translate-y-2",children:[i.jsx("img",{src:bm,alt:"Web App Development",className:"w-25 h-25 mb-4 mx-auto"}),i.jsx("h3",{className:"text-2xl font-bold text-[#FBDB57] mb-3 text-center",children:"Web App Development"}),i.jsx("p",{className:"text-gray-300 text-center",children:"Scalable web applications with robust backend systems, real-time features, and cross-platform compatibility. Real-time Features API Integration Progressive Web Apps"}),i.jsx("button",{className:"mt-4 bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300 block mx-auto",children:"Learn More"})]}),i.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-xl p-6 hover:shadow-2xl transition duration-300 hover:-translate-y-2",children:[i.jsx("img",{src:jm,alt:"SEO & Website Maintenance",className:"w-25 h-25 mb-4 mx-auto"}),i.jsx("h3",{className:"text-2xl font-bold text-[#FBDB57] mb-3 text-center",children:"SEO & Website Maintenance"}),i.jsx("p",{className:"text-gray-300 text-center",children:"Continuous optimization, security updates, and performance monitoring to keep your website at peak performance. SEO Optimization Security Updates Performance Monitoring"}),i.jsx("button",{className:"mt-4 bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300 block mx-auto",children:"Learn More"})]}),i.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-xl p-6 hover:shadow-2xl transition duration-300 hover:-translate-y-2",children:[i.jsx("img",{src:Nm,alt:"Custom Solutions",className:"w-25 h-25 mb-4 mx-auto"}),i.jsx("h3",{className:"text-2xl font-bold text-[#45CFFF] mb-3 text-center",children:"Custom Solutions"}),i.jsx("p",{className:"text-gray-300 text-center",children:"Tailored software solutions designed to meet your unique business requirements and workflow needs. Custom Software API Development System Integration"}),i.jsx("button",{className:"mt-4 bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300 block mx-auto",children:"Learn More"})]})]})]})}),mg=()=>{const s=[{id:"01",title:"Consultation",color:"text-[#F45DA2]"},{id:"02",title:"Planning",color:"text-[#FBDB57]"},{id:"03",title:"Design & Development",color:"text-[#45CFFF]"},{id:"04",title:"Testing",color:"text-[#F45DA2]"},{id:"05",title:"Launch & Support",color:"text-[#FBDB57]"},{id:"06",title:"Optimization",color:"text-[#45CFFF]"}];return i.jsx("section",{className:"bg-gray-900 py-20 px-4",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-14",children:[i.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-4",children:"Our Process"}),i.jsx("p",{className:"text-gray-400 max-w-2xl mx-auto",children:"A structured approach that ensures quality, speed, and long-term success."})]}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10",children:s.map(f=>i.jsxs("div",{className:`group bg-white/5 backdrop-blur-xl border border-white/10 \r
              rounded-2xl p-8 text-center transition-all duration-500\r
              hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(0,0,0,0.5)]`,children:[i.jsx("div",{className:`text-5xl font-extrabold mb-6 ${f.color} opacity-90`,children:f.id}),i.jsx("h3",{className:"text-xl font-semibold text-white mb-3",children:f.title}),i.jsx("div",{className:"w-12 h-1 mx-auto rounded-full bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 opacity-70 group-hover:w-20 transition-all duration-500"})]},f.id))})]})})},hg="/assets/ather-DjQeWt0B.jpg",pg=()=>i.jsx("section",{className:"bg-gray-900 py-20 px-4 mt-1",children:i.jsxs("div",{className:"max-w-6xl mx-auto text-center",children:[i.jsxs("h2",{className:"text-3xl md:text-5xl font-bold text-white mb-4",children:["Ready to Start Your Project with"," ",i.jsx("span",{className:"text-yellow-300",children:"Resicode?"})]}),i.jsx("p",{className:"text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10",children:"Let’s transform your ideas into a powerful digital solution. Get started with a free consultation and see how we help businesses grow."}),i.jsx("div",{className:"mb-16",children:i.jsx("button",{className:`bg-yellow-300 text-black font-bold py-3 px-8 rounded-xl \r
          transition-all duration-300 transform hover:scale-105 hover:shadow-2xl \r
          border-2 border-yellow-300 hover:bg-transparent hover:text-yellow-300`,children:"Book Free Consultation"})}),i.jsx("div",{className:"flex justify-center",children:i.jsxs("div",{className:`bg-white/5 backdrop-blur-lg border border-white/10 \r
          rounded-2xl p-8 md:p-10 max-w-3xl w-full shadow-xl`,children:[i.jsxs("div",{className:"flex justify-center items-center gap-1 mb-6",children:[[...Array(5)].map((s,f)=>i.jsx("span",{className:"text-yellow-400 text-xl",children:"★"},f)),i.jsx("span",{className:"text-gray-400 text-sm ml-2",children:"4.9/5"})]}),i.jsx("p",{className:"text-gray-300 italic leading-relaxed text-base md:text-lg",children:"“Resicode delivered our project ahead of schedule with exceptional quality. Their team was professional, communicative, and truly understood our vision. We highly recommend their services to anyone looking for top-notch web development.”"}),i.jsxs("div",{className:"flex flex-col items-center mt-6",children:[i.jsx("img",{src:hg,alt:"Ather Trading",className:"w-14 h-14 rounded-full object-cover border-2 border-yellow-300 mb-2"}),i.jsx("p",{className:"text-yellow-300 font-bold",children:"Ather Trading"}),i.jsx("span",{className:"text-gray-400 text-sm",children:"Verified Client"})]})]})})]})}),xg=[{icon:"",value:"10+",label:"Projects Completed"},{icon:"",value:"98%",label:"Client Satisfaction"},{icon:"",value:"3+",label:"Years Experience"},{icon:"",value:"7+",label:"Happy Clients"}],If=[{icon:"",name:"E-commerce"},{icon:"",name:"Healthcare"},{icon:"",name:"Education"},{icon:"",name:"Technology"},{icon:"",name:"Real Estate"},{icon:"",name:"Food & Beverage"}],gg=[{title:"A Trading Website For Ather Trading",industry:"Wholeseller of Solar Panel",client:"Ather Traders",duration:"2 months",team:"2 developers",tech:["HTML & CSS","Tailwind CSS","Swiper.js","Google Maps","HSTS Security","CDN Links"]},{title:"Healthcare Management System for MedCare",industry:"Healthcare",client:"MedCare Hospitals",duration:"5 months",team:"6 developers",tech:["React & TypeScript","Django","PostgreSQL","WebRTC","HIPAA Compliance","Real-time Updates"]},{title:"Learning Management System for EduTech Pro",industry:"Education",client:"EduTech Pro",duration:"4 months",team:"5 developers",tech:["Next.js","Tailwind","Firebase","Video Streaming","Analytics","Certificates"]},{title:"Real Estate Portal for PrimeProperties",industry:"Real Estate",client:"PrimeProperties",duration:"3 months",team:"4 developers",tech:["Vue.js","Laravel","Google Maps API","Virtual Tours","CRM Integration"]},{title:"Food Delivery App for QuickBites",industry:"Food & Beverage",client:"QuickBites",duration:"6 months",team:"8 developers",tech:["React Native","Node.js","MongoDB Atlas","Real-time Tracking","AI Recommendations"]},{title:"Corporate Website for TechInnovate",industry:"Technology",client:"TechInnovate Solutions",duration:"2 months",team:"3 developers",tech:["Next.js","Headless CMS","SEO Optimized","A/B Testing","Fast Loading"]}];function vg(){return i.jsx("section",{className:"bg-gray-950 text-white py-20",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[i.jsxs("div",{className:"text-center mb-16",children:[i.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4",children:"Our Portfolio & Our Work"}),i.jsx("p",{className:"text-gray-400 max-w-3xl mx-auto",children:"At Resicode, we have worked with businesses across industries to deliver powerful, scalable, and user-friendly web solutions."})]}),i.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 mb-20",children:xg.map((s,f)=>i.jsxs("div",{className:"bg-gray-900 rounded-xl p-6 text-center hover:-translate-y-2 transition",children:[i.jsx("div",{className:"text-4xl mb-2",children:s.icon}),i.jsx("h3",{className:"text-2xl font-bold text-yellow-400",children:s.value}),i.jsx("p",{className:"text-gray-400 text-sm",children:s.label})]},f))}),i.jsxs("div",{className:"mb-20",children:[i.jsx("h2",{className:"text-3xl font-semibold text-center mb-8",children:"Industries We Serve"}),i.jsx("div",{className:"relative overflow-hidden w-full",children:i.jsx("div",{className:"flex gap-6 animate-marquee hover:[animation-play-state:paused]",children:[...If,...If].map((s,f)=>i.jsxs("div",{className:`min-w-[160px] bg-gray-900 rounded-lg p-4 text-center \r
                   hover:bg-gray-800 transition shrink-0`,children:[i.jsx("div",{className:"text-3xl mb-2",children:s.icon}),i.jsx("p",{className:"text-sm text-gray-300 font-bold",children:s.name})]},f))})})]}),i.jsxs("div",{children:[i.jsx("h2",{className:"text-3xl font-semibold text-center mb-6",children:"Featured Projects"}),i.jsx("p",{className:"text-gray-400 text-center mb-12",children:"Explore our recent work across various industries."}),i.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:gg.map((s,f)=>i.jsxs("div",{className:"bg-gray-900 rounded-xl p-6 hover:-translate-y-2 transition-all hover:shadow-2xl",children:[i.jsx("h3",{className:"text-xl font-semibold mb-2",children:s.title}),i.jsx("p",{className:"text-yellow-400 text-sm mb-2",children:s.industry}),i.jsxs("p",{className:"text-gray-400 text-sm mb-4",children:["Client: ",s.client]}),i.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:s.tech.map((d,o)=>i.jsx("span",{className:"bg-gray-800 text-xs px-2 py-1 rounded",children:d},o))}),i.jsxs("div",{className:"flex justify-between text-sm text-gray-400 mb-4",children:[i.jsxs("span",{children:["⏱️ ",s.duration]}),i.jsxs("span",{children:["👥 ",s.team]})]}),i.jsxs("button",{className:"inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 hover:text-yellow-300 transition",children:["Live Demo ",i.jsx(ng,{})]})]},f))})]}),i.jsx("style",{jsx:!0,children:`
      @keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}

    `})]})})}const bg=()=>{const[s,f]=A.useState("all"),[d,o]=A.useState({fullName:"",email:"",phone:"",position:"",experience:"",resume:null,coverLetter:"",portfolio:"",linkedin:"",referral:"",noticePeriod:"immediate"}),[h,v]=A.useState(!1),[E,T]=A.useState(!1),[b,p]=A.useState(null),N=[{id:1,title:"Senior Full Stack Developer",department:"Engineering",type:"Full-time",location:"Nagpur, Maharashtra",experience:"3-5 years",postedDate:"2 days ago",description:"We're looking for an experienced Full Stack Developer to join our growing team. You'll be working on cutting-edge web applications using React, Node.js, and modern cloud technologies.",responsibilities:["Design and develop scalable web applications","Collaborate with cross-functional teams","Write clean, maintainable code","Participate in code reviews","Mentor junior developers"],requirements:["3+ years experience with React/Node.js","Strong knowledge of MongoDB/PostgreSQL","Experience with AWS/GCP","Excellent problem-solving skills","Bachelor's degree in Computer Science or related field"],perks:["Remote work options","Health insurance","Learning budget","Flexible hours"]},{id:2,title:"UI/UX Designer",department:"Design",type:"Full-time",location:"Remote",experience:"2-4 years",postedDate:"1 week ago",description:"Create beautiful and intuitive user experiences for our products. Work closely with developers and product managers to bring designs to life.",responsibilities:["Design user interfaces for web and mobile","Create prototypes and wireframes","Conduct user research and testing","Develop design systems","Collaborate with development teams"],requirements:["Proficiency in Figma, Adobe Creative Suite","Portfolio showcasing UI/UX work","Understanding of responsive design","Knowledge of accessibility standards","Excellent communication skills"],perks:["Remote-first","Design tools subscription","Conference budget","Creative freedom"]},{id:3,title:"DevOps Engineer",department:"Operations",type:"Full-time",location:"Nagpur, Maharashtra",experience:"2-3 years",postedDate:"3 days ago",description:"Help us build and maintain our cloud infrastructure. Implement CI/CD pipelines and ensure system reliability.",responsibilities:["Manage AWS/GCP infrastructure","Implement CI/CD pipelines","Monitor system performance","Ensure security best practices","Automate deployment processes"],requirements:["Experience with Docker/Kubernetes","Knowledge of Terraform/CloudFormation","Familiarity with monitoring tools","Understanding of networking concepts","Scripting skills (Bash/Python)"],perks:["Certification support","Latest hardware","On-call compensation","Cloud credits"]},{id:4,title:"Marketing Intern",department:"Marketing",type:"Internship",location:"Nagpur, Maharashtra",experience:"0-1 years",postedDate:"5 days ago",description:"Great opportunity for students to gain real-world marketing experience. Learn digital marketing strategies and content creation.",responsibilities:["Assist with social media campaigns","Create marketing content","Conduct market research","Support email marketing efforts","Analyze campaign performance"],requirements:["Pursuing degree in Marketing/Business","Good communication skills","Basic understanding of digital marketing","Creative mindset","Eagerness to learn"],perks:["Stipend provided","Certificate of completion","Mentorship program","Potential full-time offer"]}],_=[{id:"all",name:"All Roles",count:N.length},{id:"engineering",name:"Engineering",count:2},{id:"design",name:"Design",count:1},{id:"marketing",name:"Marketing",count:1},{id:"operations",name:"Operations",count:1}],k=B=>{p(B),o({...d,position:B.title}),T(!0)},C=B=>{const{name:H,value:V,files:Q}=B.target;o(H==="resume"?{...d,resume:Q[0]}:{...d,[H]:V})},X=async B=>{B.preventDefault(),v(!0);try{await new Promise(H=>setTimeout(H,2e3)),alert("Application submitted successfully!"),T(!1),o({fullName:"",email:"",phone:"",position:"",experience:"",resume:null,coverLetter:"",portfolio:"",linkedin:"",referral:"",noticePeriod:"immediate"})}catch(H){alert("Error submitting application. Please try again.",H)}finally{v(!1)}};return i.jsxs("div",{className:"careers-page",children:[i.jsx("section",{className:"careers-hero",children:i.jsxs("div",{className:"hero-container",children:[i.jsxs("div",{className:"hero-content",children:[i.jsxs("h1",{className:"hero-title",children:["Build Your Career at ",i.jsxs("span",{className:"highlight",children:[i.jsx("span",{style:{color:"#E268A0"},children:"RESI"}),"CODE"]})]}),i.jsx("p",{className:"hero-subtitle",children:"Join our team of innovators and problem-solvers. Create impactful solutions that make a difference."}),i.jsxs("div",{className:"hero-stats",children:[i.jsxs("div",{className:"stat-item",children:[i.jsx("div",{className:"stat-number",children:"50+"}),i.jsx("div",{className:"stat-label",children:"Team Members"})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("div",{className:"stat-number",children:"100+"}),i.jsx("div",{className:"stat-label",children:"Projects Delivered"})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("div",{className:"stat-number",children:"15+"}),i.jsx("div",{className:"stat-label",children:"Countries Served"})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("div",{className:"stat-number",children:"4.9"}),i.jsx("div",{className:"stat-label",children:"Client Rating"})]})]})]}),i.jsx("div",{className:"hero-illustration",children:i.jsxs("div",{className:"floating-elements",children:[i.jsx("div",{className:"element element-1",children:"🚀"}),i.jsx("div",{className:"element element-2",children:"💻"}),i.jsx("div",{className:"element element-3",children:"🎯"})]})})]})}),i.jsx("section",{className:"why-join-section",children:i.jsxs("div",{className:"section-container",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("h2",{children:"Why Join Resicode?"}),i.jsx("p",{children:"We believe in creating an environment where talent thrives"})]}),i.jsxs("div",{className:"benefits-grid",children:[i.jsxs("div",{className:"benefit-card",children:[i.jsx("div",{className:"benefit-icon",children:"🌱"}),i.jsx("h3",{children:"Growth & Learning"}),i.jsx("p",{children:"Annual learning budget, certifications, and mentorship programs to help you grow."})]}),i.jsxs("div",{className:"benefit-card",children:[i.jsx("div",{className:"benefit-icon",children:"⚖️"}),i.jsx("h3",{children:"Work-Life Balance"}),i.jsx("p",{children:"Flexible hours, remote options, and generous time off to maintain balance."})]}),i.jsxs("div",{className:"benefit-card",children:[i.jsx("div",{className:"benefit-icon",children:"💼"}),i.jsx("h3",{children:"Career Development"}),i.jsx("p",{children:"Clear growth paths, regular reviews, and opportunities for advancement."})]}),i.jsxs("div",{className:"benefit-card",children:[i.jsx("div",{className:"benefit-icon",children:"🎉"}),i.jsx("h3",{children:"Great Culture"}),i.jsx("p",{children:"Regular team events, celebrations, and a supportive, inclusive environment."})]}),i.jsxs("div",{className:"benefit-card",children:[i.jsx("div",{className:"benefit-icon",children:"💰"}),i.jsx("h3",{children:"Competitive Pay"}),i.jsx("p",{children:"Attractive salary packages with performance bonuses and equity options."})]}),i.jsxs("div",{className:"benefit-card",children:[i.jsx("div",{className:"benefit-icon",children:"🏥"}),i.jsx("h3",{children:"Health & Wellness"}),i.jsx("p",{children:"Health insurance, mental wellness programs, and fitness allowances."})]})]})]})}),i.jsx("section",{className:"openings-section",children:i.jsxs("div",{className:"section-container",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("h2",{children:"Current Openings"}),i.jsx("p",{children:"Find your perfect role in our growing team"})]}),i.jsx("div",{className:"department-tabs",children:_.map(B=>i.jsxs("button",{className:`tab-btn ${s===B.id?"active":""}`,onClick:()=>f(B.id),children:[B.name,i.jsx("span",{className:"job-count",children:B.count})]},B.id))}),i.jsx("div",{className:"job-listings",children:N.map(B=>i.jsxs("div",{className:"job-card",children:[i.jsxs("div",{className:"job-header",children:[i.jsxs("div",{className:"job-title-section",children:[i.jsx("h3",{children:B.title}),i.jsxs("div",{className:"job-meta",children:[i.jsx("span",{className:"job-tag department",children:B.department}),i.jsx("span",{className:"job-tag type",children:B.type}),i.jsxs("span",{className:"job-tag location",children:["📍 ",B.location]})]})]}),i.jsxs("div",{className:"job-experience",children:[i.jsxs("span",{children:["Experience: ",B.experience]}),i.jsxs("span",{className:"posted-date",children:["Posted: ",B.postedDate]})]})]}),i.jsx("p",{className:"job-description",children:B.description}),i.jsx("div",{className:"job-perks",children:B.perks.map((H,V)=>i.jsx("span",{className:"perk-tag",children:H},V))}),i.jsxs("div",{className:"job-actions",children:[i.jsx("button",{className:"view-details-btn",onClick:()=>p(b?.id===B.id?null:B),children:b?.id===B.id?"Hide Details":"View Details"}),i.jsx("button",{className:"apply-now-btn",onClick:()=>k(B),children:"Apply Now"})]}),b?.id===B.id&&i.jsxs("div",{className:"job-details-expanded",children:[i.jsxs("div",{className:"details-section",children:[i.jsx("h4",{children:"Key Responsibilities"}),i.jsx("ul",{children:B.responsibilities.map((H,V)=>i.jsx("li",{children:H},V))})]}),i.jsxs("div",{className:"details-section",children:[i.jsx("h4",{children:"Requirements"}),i.jsx("ul",{children:B.requirements.map((H,V)=>i.jsx("li",{children:H},V))})]})]})]},B.id))})]})}),E&&i.jsx("div",{className:"application-modal",children:i.jsxs("div",{className:"modal-content",children:[i.jsxs("div",{className:"modal-header",children:[i.jsxs("h2",{children:["Apply for ",b?.title]}),i.jsx("button",{className:"close-modal",onClick:()=>T(!1),children:"×"})]}),i.jsxs("form",{onSubmit:X,className:"application-form",children:[i.jsxs("div",{className:"form-grid",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"fullName",children:"Full Name *"}),i.jsx("input",{type:"text",id:"fullName",name:"fullName",value:d.fullName,onChange:C,required:!0,placeholder:"John Doe"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"email",children:"Email Address *"}),i.jsx("input",{type:"email",id:"email",name:"email",value:d.email,onChange:C,required:!0,placeholder:"john@example.com"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"phone",children:"Phone Number *"}),i.jsx("input",{type:"tel",id:"phone",name:"phone",value:d.phone,onChange:C,required:!0,placeholder:"+91 9876543210"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"experience",children:"Years of Experience *"}),i.jsxs("select",{id:"experience",name:"experience",value:d.experience,onChange:C,required:!0,children:[i.jsx("option",{value:"",children:"Select experience"}),i.jsx("option",{value:"0-1",children:"0-1 years"}),i.jsx("option",{value:"1-3",children:"1-3 years"}),i.jsx("option",{value:"3-5",children:"3-5 years"}),i.jsx("option",{value:"5+",children:"5+ years"})]})]}),i.jsxs("div",{className:"form-group full-width",children:[i.jsx("label",{htmlFor:"coverLetter",children:"Cover Letter"}),i.jsx("textarea",{id:"coverLetter",name:"coverLetter",value:d.coverLetter,onChange:C,rows:"4",placeholder:"Tell us why you're interested in this position..."})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"resume",children:"Resume/CV *"}),i.jsx("input",{type:"file",id:"resume",name:"resume",onChange:C,accept:".pdf,.doc,.docx",required:!0}),i.jsx("small",{children:"PDF, DOC, DOCX (Max 5MB)"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"portfolio",children:"Portfolio/GitHub Link"}),i.jsx("input",{type:"url",id:"portfolio",name:"portfolio",value:d.portfolio,onChange:C,placeholder:"https://github.com/username"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"linkedin",children:"LinkedIn Profile"}),i.jsx("input",{type:"url",id:"linkedin",name:"linkedin",value:d.linkedin,onChange:C,placeholder:"https://linkedin.com/in/username"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"noticePeriod",children:"Notice Period"}),i.jsxs("select",{id:"noticePeriod",name:"noticePeriod",value:d.noticePeriod,onChange:C,children:[i.jsx("option",{value:"immediate",children:"Immediate"}),i.jsx("option",{value:"15",children:"15 days"}),i.jsx("option",{value:"30",children:"30 days"}),i.jsx("option",{value:"60",children:"60 days"}),i.jsx("option",{value:"90",children:"90 days"})]})]}),i.jsxs("div",{className:"form-group full-width",children:[i.jsx("label",{htmlFor:"referral",children:"How did you hear about us?"}),i.jsx("input",{type:"text",id:"referral",name:"referral",value:d.referral,onChange:C,placeholder:"LinkedIn, Indeed, Referral, etc."})]})]}),i.jsxs("div",{className:"form-actions",children:[i.jsx("button",{type:"button",className:"cancel-btn",onClick:()=>T(!1),children:"Cancel"}),i.jsx("button",{type:"submit",className:"submit-application-btn",disabled:h,children:h?"Submitting...":"Submit Application"})]})]})]})}),i.jsx("section",{className:"process-section",children:i.jsxs("div",{className:"section-container",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("h2",{children:"Our Hiring Process"}),i.jsx("p",{children:"Simple, transparent, and respectful"})]}),i.jsxs("div",{className:"process-steps",children:[i.jsxs("div",{className:"step",children:[i.jsx("div",{className:"step-number",children:"1"}),i.jsx("h3",{children:"Application Review"}),i.jsx("p",{children:"We review your application within 48 hours"})]}),i.jsxs("div",{className:"step",children:[i.jsx("div",{className:"step-number",children:"2"}),i.jsx("h3",{children:"Initial Screening"}),i.jsx("p",{children:"30-minute call with HR to discuss fit"})]}),i.jsxs("div",{className:"step",children:[i.jsx("div",{className:"step-number",children:"3"}),i.jsx("h3",{children:"Technical Assessment"}),i.jsx("p",{children:"Practical assignment or technical interview"})]}),i.jsxs("div",{className:"step",children:[i.jsx("div",{className:"step-number",children:"4"}),i.jsx("h3",{children:"Team Interview"}),i.jsx("p",{children:"Meet with team leads and potential colleagues"})]}),i.jsxs("div",{className:"step",children:[i.jsx("div",{className:"step-number",children:"5"}),i.jsx("h3",{children:"Offer & Onboarding"}),i.jsx("p",{children:"Offer letter and smooth onboarding process"})]})]})]})}),i.jsx("section",{className:"cta-section",children:i.jsx("div",{className:"section-container",children:i.jsxs("div",{className:"cta-content",children:[i.jsx("h2",{children:"Don't See Your Role?"}),i.jsx("p",{children:"We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities."}),i.jsx("button",{className:"general-application-btn",children:"Submit General Application"})]})})}),i.jsx("style",{jsx:!0,children:`
        /* Base Styles */
        .careers-page {
          background: #f8fafc;
          color: #1e293b;
          min-height: 100vh;
          width: 100%;
          overflow-x: hidden;
        }

        /* Section Container */
        .section-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Hero Section */
        .careers-hero {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          color: white;
          padding: 60px 20px;
          width: 100%;
        }

        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 40px;
        }

        @media (min-width: 1024px) {
          .hero-container {
            flex-direction: row;
            justify-content: space-between;
            gap: 60px;
          }
        }

        .hero-content {
          flex: 1;
          text-align: center;
          max-width: 600px;
        }

        @media (min-width: 1024px) {
          .hero-content {
            text-align: left;
          }
        }

        .hero-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .highlight {
          color: #fbbf24;
          position: relative;
          display: inline-block;
        }

        .highlight::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 8px;
          background: rgba(251, 191, 36, 0.3);
          z-index: -1;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.25rem);
          margin-bottom: 40px;
          opacity: 0.9;
          line-height: 1.6;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 40px;
        }

        @media (min-width: 640px) {
          .hero-stats {
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
          }
        }

        @media (min-width: 1024px) {
          .hero-stats {
            margin-top: 60px;
          }
        }

        .stat-item {
          text-align: center;
          padding: 10px;
        }

        .stat-number {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 700;
          color: #fbbf24;
          margin-bottom: 8px;
          line-height: 1;
        }

        .stat-label {
          font-size: clamp(0.75rem, 1.5vw, 0.9rem);
          opacity: 0.9;
          color: rgba(255, 255, 255, 0.9);
        }

        .hero-illustration {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 400px;
        }

        .floating-elements {
          position: relative;
          width: 250px;
          height: 250px;
        }

        @media (min-width: 640px) {
          .floating-elements {
            width: 300px;
            height: 300px;
          }
        }

        .element {
          position: absolute;
          font-size: 48px;
          animation: float 3s ease-in-out infinite;
        }

        @media (min-width: 640px) {
          .element {
            font-size: 60px;
          }
        }

        .element-1 {
          top: 0;
          left: 30px;
          animation-delay: 0s;
        }

        .element-2 {
          top: 80px;
          right: 10px;
          animation-delay: 0.5s;
        }

        .element-3 {
          bottom: 0;
          left: 80px;
          animation-delay: 1s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        /* Why Join Section */
        .why-join-section {
          padding: 60px 20px;
          width: 100%;
          background-color: #20185b;
        }

        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }

        @media (min-width: 768px) {
          .section-header {
            margin-bottom: 60px;
          }
        }

        .section-header h2 {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 700;
          color: white;
          margin-bottom: 15px;
        }

        .section-header p {
          font-size: clamp(1rem, 1.5vw, 1.1rem);
          color: #cbd5e1;
          max-width: 600px;
          margin: 0 auto;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 20px;
        }

        @media (min-width: 640px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
        }

        @media (min-width: 1024px) {
          .benefits-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }
        }

        .benefit-card {
          background: white;
          padding: 25px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          text-align: center;
          height: 100%;
        }

        @media (min-width: 768px) {
          .benefit-card {
            padding: 30px;
          }
        }

        .benefit-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }

        .benefit-icon {
          font-size: 40px;
          margin-bottom: 15px;
        }

        @media (min-width: 768px) {
          .benefit-icon {
            font-size: 48px;
            margin-bottom: 20px;
          }
        }

        .benefit-card h3 {
          font-size: clamp(1.25rem, 2vw, 1.5rem);
          margin-bottom: 12px;
          color: #1e293b;
        }

        .benefit-card p {
          color: #64748b;
          line-height: 1.5;
          font-size: clamp(0.9rem, 1.5vw, 1rem);
        }

        /* Openings Section */
        .openings-section {
          padding: 60px 20px;
          width: 100%;
          background: white;
          margin-bottom: 60px;
        }

        @media (min-width: 768px) {
          .openings-section {
            margin-bottom: 80px;
          }
        }

        .department-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 40px;
          justify-content: center;
        }

        .tab-btn {
          padding: 10px 20px;
          border: 2px solid #e2e8f0;
          background: white;
          border-radius: 50px;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: clamp(0.875rem, 1.5vw, 1rem);
          white-space: nowrap;
        }

        .tab-btn.active {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }

        .job-count {
          background: rgba(255, 255, 255, 0.2);
          padding: 2px 8px;
          border-radius: 20px;
          font-size: 0.8rem;
        }

        .job-listings {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .job-card {
          background: #f8fafc;
          border-radius: 20px;
          padding: 25px;
          border: 2px solid transparent;
          transition: all 0.3s ease;
          width: 100%;
        }

        @media (min-width: 768px) {
          .job-card {
            padding: 30px;
          }
        }

        .job-card:hover {
          border-color: #3b82f6;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.1);
        }

        .job-header {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 20px;
        }

        @media (min-width: 768px) {
          .job-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
        }

        .job-title-section h3 {
          font-size: clamp(1.25rem, 2.5vw, 1.5rem);
          margin-bottom: 10px;
          color: #1e293b;
        }

        .job-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .job-tag {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: clamp(0.75rem, 1vw, 0.85rem);
          font-weight: 600;
        }

        .job-tag.department {
          background: #dbeafe;
          color: #1d4ed8;
        }

        .job-tag.type {
          background: #dcfce7;
          color: #166534;
        }

        .job-tag.location {
          background: #fef3c7;
          color: #92400e;
        }

        .job-experience {
          font-weight: 600;
          color: #475569;
          text-align: left;
        }

        @media (min-width: 768px) {
          .job-experience {
            text-align: right;
          }
        }

        .posted-date {
          display: block;
          font-size: 0.85rem;
          color: #94a3b8;
          margin-top: 5px;
        }

        .job-description {
          color: #475569;
          line-height: 1.6;
          margin-bottom: 20px;
          font-size: clamp(0.9rem, 1.5vw, 1rem);
        }

        .job-perks {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .perk-tag {
          padding: 6px 16px;
          background: #f1f5f9;
          border-radius: 20px;
          font-size: clamp(0.8rem, 1.2vw, 0.9rem);
          color: #475569;
        }

        .job-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        @media (min-width: 640px) {
          .job-actions {
            flex-direction: row;
            gap: 15px;
          }
        }

        .view-details-btn,
        .apply-now-btn {
          padding: 12px 24px;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: clamp(0.875rem, 1.5vw, 1rem);
          text-align: center;
          flex: 1;
        }

        .view-details-btn {
          background: transparent;
          border: 2px solid #cbd5e1;
          color: #475569;
        }

        .view-details-btn:hover {
          background: #f1f5f9;
        }

        .apply-now-btn {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          border: none;
        }

        .apply-now-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
        }

        .job-details-expanded {
          margin-top: 30px;
          padding-top: 30px;
          border-top: 2px solid #e2e8f0;
        }

        .details-section {
          margin-bottom: 25px;
        }

        .details-section h4 {
          font-size: clamp(1.1rem, 2vw, 1.2rem);
          color: #1e293b;
          margin-bottom: 15px;
        }

        .details-section ul {
          list-style: none;
          padding-left: 20px;
        }

        .details-section li {
          color: #475569;
          margin-bottom: 8px;
          position: relative;
          padding-left: 25px;
          font-size: clamp(0.9rem, 1.5vw, 1rem);
        }

        .details-section li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: bold;
        }

        /* Application Modal */
        .application-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .modal-content {
          background: white;
          border-radius: 20px;
          width: 100%;
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 25px;
          border-bottom: 2px solid #f1f5f9;
        }

        @media (min-width: 768px) {
          .modal-header {
            padding: 30px;
          }
        }

        .modal-header h2 {
          font-size: clamp(1.25rem, 3vw, 1.8rem);
          color: #1e293b;
        }

        .close-modal {
          background: none;
          border: none;
          font-size: 2rem;
          color: #94a3b8;
          cursor: pointer;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .close-modal:hover {
          background: #f1f5f9;
          color: #475569;
        }

        .application-form {
          padding: 25px;
        }

        @media (min-width: 768px) {
          .application-form {
            padding: 30px;
          }
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-bottom: 30px;
        }

        @media (min-width: 640px) {
          .form-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-group label {
          font-weight: 600;
          margin-bottom: 8px;
          color: #475569;
          font-size: clamp(0.9rem, 1.5vw, 1rem);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          font-size: clamp(0.9rem, 1.5vw, 1rem);
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-group small {
          margin-top: 5px;
          color: #94a3b8;
          font-size: 0.85rem;
        }

        .form-actions {
          display: flex;
          flex-direction: column;
          gap: 15px;
          padding-top: 20px;
          border-top: 2px solid #f1f5f9;
        }

        @media (min-width: 640px) {
          .form-actions {
            flex-direction: row;
            justify-content: flex-end;
          }
        }

        .cancel-btn,
        .submit-application-btn {
          padding: 12px 24px;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: clamp(0.9rem, 1.5vw, 1rem);
          text-align: center;
          flex: 1;
        }

        @media (min-width: 640px) {
          .cancel-btn,
          .submit-application-btn {
            flex: 0 0 auto;
            padding: 12px 30px;
          }
        }

        .cancel-btn {
          background: transparent;
          border: 2px solid #cbd5e1;
          color: #475569;
        }

        .cancel-btn:hover {
          background: #f1f5f9;
        }

        .submit-application-btn {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          border: none;
        }

        .submit-application-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
        }

        .submit-application-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Process Section */
        .process-section {
          padding: 60px 20px;
          width: 100%;
        }

        @media (min-width: 768px) {
          .process-section {
            padding: 80px 20px;
          }
        }

        .process-steps {
          display: flex;
          flex-direction: column;
          gap: 40px;
          position: relative;
          max-width: 1000px;
          margin: 40px auto 0;
        }

        @media (min-width: 768px) {
          .process-steps {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        @media (min-width: 768px) {
          .process-steps::before {
            content: '';
            position: absolute;
            top: 30px;
            left: 10%;
            right: 10%;
            height: 4px;
            background: linear-gradient(90deg, #3b82f6, #8b5cf6);
            z-index: 1;
          }
        }

        .step {
          position: relative;
          z-index: 2;
          text-align: center;
          flex: 1;
        }

        .step-number {
          width: 60px;
          height: 60px;
          background: white;
          border: 4px solid #3b82f6;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: #3b82f6;
          margin: 0 auto 20px;
        }

        .step h3 {
          font-size: clamp(1.1rem, 2vw, 1.2rem);
          margin-bottom: 10px;
          color: #1e293b;
        }

        .step p {
          color: #64748b;
          font-size: clamp(0.85rem, 1.5vw, 0.95rem);
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          color: white;
          padding: 60px 20px;
          text-align: center;
          width: 100%;
        }

        @media (min-width: 768px) {
          .cta-section {
            padding: 80px 20px;
          }
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          margin-bottom: 20px;
        }

        .cta-content p {
          font-size: clamp(1rem, 1.5vw, 1.1rem);
          opacity: 0.9;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .general-application-btn {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: white;
          border: none;
          padding: 14px 32px;
          font-size: clamp(0.9rem, 1.5vw, 1.1rem);
          font-weight: 600;
          border-radius: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          max-width: 300px;
        }

        @media (min-width: 640px) {
          .general-application-btn {
            width: auto;
          }
        }

        .general-application-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(245, 158, 11, 0.3);
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .benefit-card:hover,
          .job-card:hover,
          .apply-now-btn:hover,
          .submit-application-btn:hover,
          .general-application-btn:hover {
            transform: none;
          }
          
          .apply-now-btn:active,
          .submit-application-btn:active,
          .general-application-btn:active {
            transform: scale(0.98);
          }
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .element,
          .benefit-card,
          .job-card,
          .apply-now-btn,
          .submit-application-btn,
          .general-application-btn {
            animation: none;
            transition: none;
          }
        }

        /* Extra Small Devices (≤ 360px) */
        @media (max-width: 360px) {
          .hero-title {
            font-size: 1.75rem;
          }
          
          .hero-subtitle {
            font-size: 0.9rem;
          }
          
          .stat-number {
            font-size: 1.5rem;
          }
          
          .benefit-icon {
            font-size: 32px;
          }
          
          .job-card {
            padding: 20px;
          }
        }

        /* Landscape Mode */
        @media (max-height: 500px) and (orientation: landscape) {
          .careers-hero {
            padding: 40px 20px;
          }
          
          .hero-container {
            flex-direction: row;
            gap: 30px;
          }
          
          .hero-title {
            font-size: 1.5rem;
            margin-bottom: 10px;
          }
          
          .hero-subtitle {
            font-size: 0.9rem;
            margin-bottom: 20px;
          }
          
          .hero-stats {
            margin-top: 20px;
          }
        }
      `})]})},yg=()=>i.jsx(px,{children:i.jsxs("div",{className:"min-h-screen flex flex-col",children:[i.jsx(zx,{}),i.jsx("main",{className:"flex-grow",children:i.jsxs(Zp,{children:[i.jsx(Ga,{path:"/",element:i.jsxs(i.Fragment,{children:[i.jsx(Ax,{}),i.jsx(Mx,{}),i.jsx(fg,{}),i.jsx(mg,{}),i.jsx(pg,{})]})}),i.jsx(Ga,{path:"/about",element:i.jsx(lg,{})}),i.jsx(Ga,{path:"/services",element:i.jsx(cg,{})}),i.jsx(Ga,{path:"/team",element:i.jsx(vg,{})}),i.jsx(Ga,{path:"/contact",element:i.jsx(ug,{})}),i.jsx(Ga,{path:"/careers",element:i.jsx(bg,{})})]})}),i.jsx(Px,{})]})});tp.createRoot(document.getElementById("root")).render(i.jsx(A.StrictMode,{children:i.jsx(yg,{})}));
