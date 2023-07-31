<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# drotg

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Construct a Givens plane rotation.



<section class="usage">

## Usage

```javascript
import drotg from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-drotg@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/blas-base-drotg/tags). For example,

```javascript
import drotg from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-drotg@v0.0.1-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { assign } from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-drotg@deno/mod.js';
```

#### drotg( a, b )

Constructs a Givens plane rotation provided two double-precision floating-point values `a` and `b`.

```javascript
var out = drotg( 0.0, 2.0 );
// returns <Float64Array>[ 2.0, 1.0, 0.0, 1.0 ]
```

The function has the following parameters:

-   **a**: rotational elimination parameter.
-   **b**: rotational elimination parameter.

#### drotg.assign( a, b, out, stride, offset )

Constructs a Givens plane rotation provided two double-precision floating-point values `a` and `b` and assigns results to an output array.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var out = new Float64Array( 4 );

var y = drotg.assign( 0.0, 2.0, out, 1, 0 );
// returns <Float64Array>[ 2.0, 1.0, 0.0, 1.0 ]

var bool = ( y === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `drotg()` corresponds to the [BLAS][blas] level 1 function [`drotg`][drotg].

</section>

<!-- /.notes -->

<section class="examples">

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@deno/mod.js';
import drotg from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-drotg@deno/mod.js';

var out;
var i;

for ( i = 0; i < 100; i++ ) {
    out = drotg( discreteUniform( -5, 5 ), discreteUniform( -5, 5 ) );
    console.log( out );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-drotg.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-drotg

[test-image]: https://github.com/stdlib-js/blas-base-drotg/actions/workflows/test.yml/badge.svg?branch=v0.0.1
[test-url]: https://github.com/stdlib-js/blas-base-drotg/actions/workflows/test.yml?query=branch:v0.0.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-drotg/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-drotg?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-drotg.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-drotg/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-drotg/tree/deno
[umd-url]: https://github.com/stdlib-js/blas-base-drotg/tree/umd
[esm-url]: https://github.com/stdlib-js/blas-base-drotg/tree/esm
[branches-url]: https://github.com/stdlib-js/blas-base-drotg/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-drotg/main/LICENSE

[blas]: http://www.netlib.org/blas

[drotg]: https://netlib.org/lapack/explore-html/df/d28/group__single__blas__level1_gaafa91c51f75df6c3f2182032a221c2db.html

</section>

<!-- /.links -->
