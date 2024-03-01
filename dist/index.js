"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var p=o(function(C,f){
var x=require('@stdlib/math-base-special-abs/dist'),A=require('@stdlib/math-base-special-sqrt/dist'),y=require('@stdlib/math-base-special-abs2/dist'),d=require('@stdlib/math-base-special-copysign/dist');function F(e,r,a,g,u){var s,l,q,t,i,v,c,n;return q=x(e),t=x(r),q>t?l=d(1,e):l=d(1,r),s=q+t,s===0?(v=1,c=0,i=0,n=0):(i=s*A(y(e/s)+y(r/s)),i*=l,v=e/i,c=r/i,n=1,q>t?n=c:v!==0&&(n=1/v)),e=i,r=n,a[u]=e,a[u+g]=r,a[u+2*g]=v,a[u+3*g]=c,a}f.exports=F
});var w=o(function(D,m){
var O=require('@stdlib/array-float64/dist'),R=p();function h(e,r){var a=new O(4);return R(e,r,a,1,0)}m.exports=h
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=w(),k=p();j(z,"assign",k);module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
