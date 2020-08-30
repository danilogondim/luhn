const { assert } = require('chai');
const { check } = require('../luhn');


describe("#check", () => {
  it("returns true for 79927398713", () => {
    const num = 79927398713;
    assert.isTrue(check(num));
  });
  it("returns false for 79927398716", () => {
    const num = 79927398716;
    assert.isTrue(check(num));
  });
});