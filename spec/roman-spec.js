import { RomanNumber } from "./../src/roman-nums.js"


describe("RomanNumber", function() {
  it("should test whether a number is between 0 and 4000", function(){
    var notNum = new RomanNumber(4400);
    expect(notNum.checkType()).toEqual("not a valid number");
  });
  it("should test if the input is >= 1000", function(){
    var overThousand = new RomanNumber(1100);
    expect(overThousand.checkThousand()).toEqual(true)
  });
  it("should test if the number is between 1000 and 899", function(){
    var overNineHundo = new RomanNumber(925);
    console.log(overNineHundo);
    console.log(overNineHundo.checkNineHundo())
    expect(overNineHundo.checkNineHundo()).toEqual(true)
  });
  it("should test if the number is between 499 and 900", function(){
    var overFiveHundo = new RomanNumber(550);
    expect(overFiveHundo.checkFiveHundo()).toEqual(true)
  })
});
