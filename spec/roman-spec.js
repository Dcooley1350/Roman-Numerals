import { RomanNumber } from "./../src/roman-nums.js"


describe("RomanNumber", function() {
  it("should test whether a number is between 0 and 4000", function(){
    var notNum = new RomanNumber(-3);
    expect(notNum.checkType()).toEqual("not a valid number");
  });
});
