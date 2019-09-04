//back end
export var RomanNumber = function(inputNum, outputNum) {
  this.inputNum = inputNum;
  this.outputNum = outputNum;
};


RomanNumber.prototype.toRoman = function() {
  this.outputNum = [];
  for (var i = this.inputNum; i > 0; i += 0) {
    if (i >= 1000) {
      this.outputNum.push("M");
      var i = (i - 1000);
      this.inputNum = i;
    } else if (i >= 900) {
      this.outputNum.push("CM");
      var i = (i - 900);
      this.inputNum = i;
    } else if (i >= 500) {
      this.outputNum.push("D");
      var i = (i - 500);
      this.inputNum = i;
    } else if (i >= 400) {
      this.outputNum.push("CD");
      var i = (i - 400);
      this.inputNum = i;
    } else if (i >= 100) {
      this.outputNum.push("C");
      var i = (i - 100);
      this.inputNum = i;
    } else if (i >= 90) {
      this.outputNum.push("XC");
      var i = (i - 90);
      this.inputNum = i;
    } else if (i >= 50) {
      this.outputNum.push("L");
      var i = (i - 50);
      this.inputNum = i;
    } else if (i >= 40) {
      this.outputNum.push("XL");
      var i = (i - 40);
      this.inputNum = i;
    } else if (i >= 10) {
      this.outputNum.push("X");
      var i = (i - 10);
      this.inputNum = i;
    } else if (i >= 9) {
      this.outputNum.push("IX");
      var i = (i - 9);
      this.inputNum = i;
    } else if (i >= 5) {
      this.outputNum.push("V");
      var i = (i - 5);
      this.inputNum = i;
    } else if (i >= 4) {
      this.outputNum.push("IV");
      var i = (i - 4);
      this.inputNum = i;
    } else if (i >= 1) {
      this.outputNum.push("I");
      var i = (i - 1);
      this.inputNum = i;
    }
  }
};
