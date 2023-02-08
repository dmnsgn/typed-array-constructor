import { describe, it } from "node:test";
import assert from "node:assert";

import typedArrayConstructor from "../index.js";

describe("unsigned", () => {
  describe("edge cases", () => {
    it("should return Uint8Array at size -65535", () => {
      assert.equal(typedArrayConstructor(-65535), Uint8Array);
    });
    it("should return Uint8Array at size -1", () => {
      assert.equal(typedArrayConstructor(-1), Uint8Array);
    });
    it("should return Uint8Array at size 0", () => {
      assert.equal(typedArrayConstructor(0), Uint8Array);
    });
    it("should return Uint8Array at size 1", () => {
      assert.equal(typedArrayConstructor(1), Uint8Array);
    });
  });

  describe("bounds", () => {
    it("should return Uint8Array at size 255", () => {
      assert.equal(typedArrayConstructor(255), Uint8Array);
    });
    it("should return Uint16Array at size 255 + 1", () => {
      assert.equal(typedArrayConstructor(255 + 1), Uint16Array);
    });
    it("should return Uint16Array at size 65535", () => {
      assert.equal(typedArrayConstructor(65535), Uint16Array);
    });
    it("should return Uint32Array at size 65535 + 1", () => {
      assert.equal(typedArrayConstructor(65535 + 1), Uint32Array);
    });
    it("should return Uint32Array at size 4294967295", () => {
      assert.equal(typedArrayConstructor(4294967295), Uint32Array);
    });
    it("should return BigUint64Array at size 4294967295 + 1", () => {
      assert.equal(typedArrayConstructor(4294967295 + 1), BigUint64Array);
    });
  });
});

describe("signed", () => {
  describe("edge cases", () => {
    it("should return Int8Array at size -1", () => {
      assert.equal(typedArrayConstructor(-1, true), Int8Array);
    });
    it("should return Int8Array at size 0", () => {
      assert.equal(typedArrayConstructor(0, true), Int8Array);
    });
    it("should return Int8Array at size 1", () => {
      assert.equal(typedArrayConstructor(1, true), Int8Array);
    });
  });

  describe("bounds", () => {
    it("should return Int8Array at size 127", () => {
      assert.equal(typedArrayConstructor(127), Uint8Array);
    });
    it("should return Int8Array at size -128", () => {
      assert.equal(typedArrayConstructor(-128), Uint8Array);
    });

    it("should return Int16Array at size 127 + 1", () => {
      assert.equal(typedArrayConstructor(127 + 1, true), Int16Array);
    });
    it("should return Int16Array at size -128 - 1", () => {
      assert.equal(typedArrayConstructor(-128 - 1, true), Int16Array);
    });

    it("should return Int16Array at size 32767", () => {
      assert.equal(typedArrayConstructor(32767, true), Int16Array);
    });
    it("should return Int16Array at size -32768", () => {
      assert.equal(typedArrayConstructor(-32768, true), Int16Array);
    });

    it("should return Int32Array at size 32767 + 1", () => {
      assert.equal(typedArrayConstructor(32767 + 1, true), Int32Array);
    });
    it("should return Int32Array at size -32768 - 1", () => {
      assert.equal(typedArrayConstructor(-32768 - 1, true), Int32Array);
    });

    it("should return Int32Array at size 2147483647", () => {
      assert.equal(typedArrayConstructor(2147483647, true), Int32Array);
    });
    it("should return Int32Array at size -2147483648", () => {
      assert.equal(typedArrayConstructor(-2147483648, true), Int32Array);
    });

    it("should return BigInt64Array at size 2147483647 + 1", () => {
      assert.equal(typedArrayConstructor(2147483647 + 1, true), BigInt64Array);
    });
    it("should return BigInt64Array at size -2147483648 - 1", () => {
      assert.equal(typedArrayConstructor(-2147483648 - 1, true), BigInt64Array);
    });
  });
});
