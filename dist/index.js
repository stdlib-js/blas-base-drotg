"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var p=o(function(C,f){"use strict";var x=require("@stdlib/math-base-special-abs"),A=require("@stdlib/math-base-special-sqrt"),y=require("@stdlib/math-base-special-abs2"),d=require("@stdlib/math-base-special-copysign");function F(e,r,a,g,u){var s,l,q,t,i,v,c,n;return q=x(e),t=x(r),q>t?l=d(1,e):l=d(1,r),s=q+t,s===0?(v=1,c=0,i=0,n=0):(i=s*A(y(e/s)+y(r/s)),i*=l,v=e/i,c=r/i,n=1,q>t?n=c:v!==0&&(n=1/v)),e=i,r=n,a[u]=e,a[u+g]=r,a[u+2*g]=v,a[u+3*g]=c,a}f.exports=F});var w=o(function(D,m){"use strict";var O=require("@stdlib/array-float64"),R=p();function h(e,r){var a=new O(4);return R(e,r,a,1,0)}m.exports=h});var j=require("@stdlib/utils-define-nonenumerable-read-only-property"),z=w(),k=p();j(z,"assign",k);module.exports=z;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
