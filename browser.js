// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,r=Object.prototype,e=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,a=r.__lookupGetter__,u=r.__lookupSetter__,f=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,n,f){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(a.call(t,n)||u.call(t,n)?(c=t.__proto__,t.__proto__=r,delete t[n],t[n]=f.value,t.__proto__=c):t[n]=f.value),y="get"in f,p="set"in f,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,n,f.get),p&&i&&i.call(t,n,f.set),t};function c(t,n,r){f(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}var l,y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),p=Object.prototype.toString,b=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"",v=y&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e,o,i;if(null==t)return p.call(t);r=t[s],i=s,n=null!=(o=t)&&b.call(o,i);try{t[s]=void 0}catch(n){return p.call(t)}return e=p.call(t),n?t[s]=r:delete t[s],e}:function(t){return p.call(t)},d="function"==typeof Float64Array,w="function"==typeof Float64Array?Float64Array:null,A="function"==typeof Float64Array?Float64Array:void 0;l=function(){var t,n,r;if("function"!=typeof w)return!1;try{n=new w([1,3.14,-3.14,NaN]),r=n,t=(d&&r instanceof Float64Array||"[object Float64Array]"===v(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?A:function(){throw new Error("not implemented")};var _=l;function m(t){return Math.abs(t)}var U=Math.sqrt;function h(t){return t*t}var g,j="function"==typeof Uint32Array,O="function"==typeof Uint32Array?Uint32Array:null,S="function"==typeof Uint32Array?Uint32Array:void 0;g=function(){var t,n,r;if("function"!=typeof O)return!1;try{n=new O(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(j&&r instanceof Uint32Array||"[object Uint32Array]"===v(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?S:function(){throw new Error("not implemented")};var F,H=g,E="function"==typeof Uint8Array,G="function"==typeof Uint8Array?Uint8Array:null,T="function"==typeof Uint8Array?Uint8Array:void 0;F=function(){var t,n,r;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,256,257]),r=n,t=(E&&r instanceof Uint8Array||"[object Uint8Array]"===v(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?T:function(){throw new Error("not implemented")};var P,I=F,L="function"==typeof Uint16Array,W="function"==typeof Uint16Array?Uint16Array:null,x="function"==typeof Uint16Array?Uint16Array:void 0;P=function(){var t,n,r;if("function"!=typeof W)return!1;try{n=new W(n=[1,3.14,-3.14,65536,65537]),r=n,t=(L&&r instanceof Uint16Array||"[object Uint16Array]"===v(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?x:function(){throw new Error("not implemented")};var k,M={uint16:P,uint8:I};(k=new M.uint16(1))[0]=4660;var N,V,q=52===new M.uint8(k.buffer)[0];!0===q?(N=1,V=0):(N=0,V=1);var C={HIGH:N,LOW:V},z=new _(1),B=new H(z.buffer),D=C.HIGH,J=C.LOW;function K(t,n,r,e){return z[0]=t,n[e]=B[D],n[e+r]=B[J],n}function Q(t){return K(t,[0,0],1,0)}c(Q,"assign",K);var R,X,Y=!0===q?1:0,Z=new _(1),$=new H(Z.buffer);!0===q?(R=1,X=0):(R=0,X=1);var tt={HIGH:R,LOW:X},nt=new _(1),rt=new H(nt.buffer),et=tt.HIGH,ot=tt.LOW,it=[0,0];function at(t,n){var r,e,o,i;return Q.assign(t,it,1,0),r=it[0],r&=2147483647,e=function(t){return Z[0]=t,$[Y]}(n),o=r|=e&=2147483648,i=it[1],rt[et]=o,rt[ot]=i,nt[0]}function ut(t,n,r,e,o){var i,a,u,f,c,l,y,p;return a=at(1,(u=m(t))>(f=m(n))?t:n),0===(i=u+f)?(l=1,y=0,c=0,p=0):(c=i*U(h(t/i)+h(n/i)),l=t/(c*=a),y=n/c,p=1,u>f?p=y:0!==l&&(p=1/l)),t=c,n=p,r[o]=t,r[o+e]=n,r[o+2*e]=l,r[o+3*e]=y,r}function ft(t,n){return ut(t,n,new _(4),1,0)}return c(ft,"assign",ut),ft},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).drotg=n();
//# sourceMappingURL=browser.js.map
