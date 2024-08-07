# typed-array-constructor

[![npm version](https://img.shields.io/npm/v/typed-array-constructor)](https://www.npmjs.com/package/typed-array-constructor)
[![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)](https://www.npmjs.com/package/typed-array-constructor)
[![npm minzipped size](https://img.shields.io/bundlephobia/minzip/typed-array-constructor)](https://bundlephobia.com/package/typed-array-constructor)
[![dependencies](https://img.shields.io/librariesio/release/npm/typed-array-constructor)](https://github.com/dmnsgn/typed-array-constructor/blob/main/package.json)
[![types](https://img.shields.io/npm/types/typed-array-constructor)](https://github.com/microsoft/TypeScript)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-fa6673.svg)](https://conventionalcommits.org)
[![styled with prettier](https://img.shields.io/badge/styled_with-Prettier-f8bc45.svg?logo=prettier)](https://github.com/prettier/prettier)
[![linted with eslint](https://img.shields.io/badge/linted_with-ES_Lint-4B32C3.svg?logo=eslint)](https://github.com/eslint/eslint)
[![license](https://img.shields.io/github/license/dmnsgn/typed-array-constructor)](https://github.com/dmnsgn/typed-array-constructor/blob/main/LICENSE.md)

Get a typed array constructor based on the hypothetical max value it could contain. Signed or unsigned.

[![paypal](https://img.shields.io/badge/donate-paypal-informational?logo=paypal)](https://paypal.me/dmnsgn)
[![coinbase](https://img.shields.io/badge/donate-coinbase-informational?logo=coinbase)](https://commerce.coinbase.com/checkout/56cbdf28-e323-48d8-9c98-7019e72c97f3)
[![twitter](https://img.shields.io/twitter/follow/dmnsgn?style=social)](https://twitter.com/dmnsgn)

![](https://raw.githubusercontent.com/dmnsgn/typed-array-constructor/main/screenshot.gif)

## Installation

```bash
npm install typed-array-constructor
```

## Usage

```js
import typedArrayConstructor from "typed-array-constructor";

new (typedArrayConstructor(255))(10);
// => Uint8Array(10)
new (typedArrayConstructor(127, true))(10);
// => Int8Array(10)
new (typedArrayConstructor(255, true))(10);
// => Int16Array(10)

new (typedArrayConstructor(-255))(10);
// => Uint8Array(10)
new (typedArrayConstructor(-255, true))(10);
// => Int16Array(10)

new (typedArrayConstructor(65535 + 1))(10);
// => Uint32Array(10)
```

## API

<!-- api-start -->

<a name="module_typedArrayConstructor"></a>

## typedArrayConstructor

<a name="exp_module_typedArrayConstructor--typedArrayConstructor"></a>

### typedArrayConstructor(maxValue, signed) ⇒ <code>Uint8Array</code> \| <code>Uint16Array</code> \| <code>Uint32Array</code> \| <code>BigInt64Array</code> \| <code>Int8Array</code> \| <code>Int16Array</code> \| <code>Int32Array</code> \| <code>BigInt64Array</code> ⏏

Get a typed array constructor based on the hypothetical max value it could contain. Signed or unsigned.

**Kind**: Exported function
**See**: [MDN TypedArray objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects)

| Param    | Type                 | Description                     |
| -------- | -------------------- | ------------------------------- |
| maxValue | <code>number</code>  | The max value expected.         |
| signed   | <code>boolean</code> | Get a signed or unsigned array. |

<!-- api-end -->

## License

MIT. See [license file](https://github.com/dmnsgn/typed-array-constructor/blob/main/LICENSE.md).
