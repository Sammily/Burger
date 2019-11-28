/*class Burger {
  constructor(size, fill) {
    this.size = size;
    this.fill = fill;
  }

  addMore() {}

  calcTotal() {
    this.sum = 0;
    if (this.size == Burger.SIZE_S) {
      this.sum = this.sum + 50;
    }
    if (this.size == Burger.SIZE_L) {
      this.sum = this.sum + 100;
    }
    if (this.fill == Burger.CHEESE) {
      this.sum = this.sum + 10;
    }
    if (this.fill == Burger.SALAD) {
      this.sum = this.sum + 20;
    }
    if (this.fill == Burger.POTATO) {
      this.sum = this.sum + 15;
    }
  }

  calcCal() {
    this.cal = 0;
    if (this.size == Burger.SIZE_S) {
      this.cal = this.cal + 20;
    }
    if (this.size == Burger.SIZE_L) {
      this.cal = this.cal + 40;
    }
    if (this.fill == Burger.CHEESE) {
      this.cal = this.cal + 20;
    }
    if (this.fill == Burger.SALAD) {
      this.cal = this.cal + 5;
    }
    if (this.fill == Burger.POTATO) {
      this.cal = this.cal + 10;
    }
  }
}

Burger.SIZE_S = "small";
Burger.SIZE_L = "large";
Burger.CHEESE = "cheese";
Burger.SALAD = "salad";
Burger.POTATO = "potato";
Burger.FLAVOR = "flavor";
Burger.MAYO = "mayo";

let go = new Burger(Burger.SIZE_L, Burger.POTATO);
go.calcTotal();
go.calcCal();
console.log("size - " + go.size);
console.log("sum - " + go.sum);
console.log("cal - " + go.cal);
*/

function getChecked() {
  var values = document.getElementsByClassName("values");
  var arrOfValues = [];

  for (var i = 0; i < values.length; i++) {
    if (values[i].checked) {
      arrOfValues.push(values[i].value);
    }
    // console.log(arrOfValues);
  }

  var cal = 0;
  for (var i = 0; i < arrOfValues.length; i++) {
    if (arrOfValues[i] == "small") {
      cal += 45;
    }
    if (arrOfValues[i] == "large") {
      cal += 90;
    }
    if (arrOfValues[i] == "cheese") {
      cal += 30;
    }
    if (arrOfValues[i] == "salad") {
      cal += 2;
    }
    if (arrOfValues[i] == "potato") {
      cal += 10;
    }
    if (arrOfValues[i] == "flavor") {
      cal += 1;
    }
    if (arrOfValues[i] == "mayo") {
      cal += 10;
    }
    // console.log(cal);
  }

  var sum = 0;
  for (var i = 0; i < arrOfValues.length; i++) {
    if (arrOfValues[i] == "small") {
      sum += 50;
    }
    if (arrOfValues[i] == "large") {
      sum += 100;
    }
    if (arrOfValues[i] == "cheese") {
      sum += 20;
    }
    if (arrOfValues[i] == "salad") {
      sum += 30;
    }
    if (arrOfValues[i] == "potato") {
      sum += 15;
    }
    if (arrOfValues[i] == "flavor") {
      sum += 5;
    }
    if (arrOfValues[i] == "mayo") {
      sum += 10;
    }
    //console.log(sum);
  }

  document.getElementById("total").innerHTML = cal;
  document.getElementById("sum").innerHTML = sum;

  //return arrOfValues;
}
