import assert from "assert";

import { replaceByCondition } from "./challenge.js";

describe("Replace number by condition", function () {
  describe("multiple of 3", function () {
    it('should return "Music" when input are multiple of 3', function () {
      assert.equal(replaceByCondition(3), "Music");
    });
  });
  describe("multiple of 5", function () {
    it('should return "TI" when input are multiple of 5', function () {
      assert.equal(replaceByCondition(5), "TI");
    });
  });
  describe("multiple of 3 and 5", function () {
    it('should return "Musical" when input are multiple of 3 and 5', function () {
      assert.equal(replaceByCondition(15), "Musical");
    });
  });
  describe("another number", function () {
    it("should return a number when input aren't multiple of 3 or 5", function () {
      assert.equal(replaceByCondition(8), 8);
    });
  });
});
