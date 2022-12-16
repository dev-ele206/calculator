let clear = document.getElementById("clearBtn");
clear.addEventListener("click", clearCalc);
function clearCalc() {
  document.getElementById("results").value = "";
};

let equal = document.getElementById("equal");
equal.addEventListener("click", equalBtn);
function equalBtn() {
  let sum = document.getElementById("results").value;
  let answer = eval(sum);
  document.getElementById("results").value = answer;
};

let addition = document.getElementById("addition");
addition.addEventListener("click", additionBtn);
function additionBtn() {
  document.getElementById("results").value += "+";
};

let minus = document.getElementById("minus");
minus.addEventListener("click", minusBtn);
function minusBtn() {
  document.getElementById("results").value += "-";
};

let multiply = document.getElementById("multiply");
multiply.addEventListener("click", multiplyBtn);
function multiplyBtn() {
  document.getElementById("results").value += "*";
};

let division = document.getElementById("division");
division.addEventListener("click", divisionBtn);
function divisionBtn() {
  document.getElementById("results").value += "/";
};

let one = document.getElementById("one");
one.addEventListener("click", NumOne);
function NumOne() {
  document.getElementById("results").value += "1";
};

let two = document.getElementById("two");
two.addEventListener("click", NumTwo);
function NumTwo() {
  document.getElementById("results").value += "2";
};

let three = document.getElementById("three");
three.addEventListener("click", NumThree);
function NumThree() {
  document.getElementById("results").value += "3";
};

let four = document.getElementById("four");
four.addEventListener("click", NumFour);
function NumFour() {
  document.getElementById("results").value += "4";
};

let five = document.getElementById("five");
five.addEventListener("click", NumFive);
function NumFive() {
  document.getElementById("results").value += ("5");
};

let six = document.getElementById("six");
six.addEventListener("click", NumSix);
function NumSix() {
  document.getElementById("results").value += "6";
};

let seven = document.getElementById("seven");
seven.addEventListener("click", NumSeven);
function NumSeven() {
  document.getElementById("results").value += "7";
};

let eight = document.getElementById("eight");
eight.addEventListener("click", NumEight);
function NumEight() {
  document.getElementById("results").value += "8";
};

let nine = document.getElementById("nine");
nine.addEventListener("click", NumNine);
function NumNine() {
  document.getElementById("results").value += "9";
};

let zero = document.getElementById("zero");
zero.addEventListener("click", NumZero);
function NumZero() {
  document.getElementById("results").value += "0";
};

let ppint = document.getElementById("point");
point.addEventListener("click", pointBtn);
function pointBtn() {
  document.getElementById("results").value += ".";
};