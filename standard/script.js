function addDigits(number) {
  var oringalTopBox = document.getElementById("top_box").value;
  var newNumber = number;
  var newNumberString = oringalTopBox + newNumber;
  document.getElementById("top_box").value = newNumberString;
}
document.getElementById("1").addEventListener("click", function () {
  addDigits(1);
});
document.getElementById("2").addEventListener("click", function () {
  addDigits(2);
});
document.getElementById("3").addEventListener("click", function () {
  addDigits(3);
});
document.getElementById("4").addEventListener("click", function () {
  addDigits(4);
});
document.getElementById("5").addEventListener("click", function () {
  addDigits(5);
});
document.getElementById("6").addEventListener("click", function () {
  addDigits(6);
});
document.getElementById("7").addEventListener("click", function () {
  addDigits(7);
});
document.getElementById("8").addEventListener("click", function () {
  addDigits(8);
});
document.getElementById("9").addEventListener("click", function () {
  addDigits(9);
});
document.getElementById("0").addEventListener("click", function () {
  addDigits(0);
});
document.getElementById(".").addEventListener("click", function () {
  addDigits(".");
});
document.getElementById("+").addEventListener("click", function () {
  addDigits("+");
});
document.getElementById("-").addEventListener("click", function () {
  addDigits("-");
});
document.getElementById("*").addEventListener("click", function () {
  addDigits("*");
});
document.getElementById("/").addEventListener("click", function () {
  addDigits("/");
});
document.getElementById("ac").addEventListener("click", function () {
  document.getElementById("top_box").value=""
});
document.getElementById("equal").addEventListener("click", function () {
  document.getElementById("top_box").value=eval(document.getElementById("top_box").value)
});


document.getElementById("backspace").addEventListener("click",function(){
  var backspace={
    oringalString:document.getElementById("top_box").value,
    
  }
  
  document.getElementById("top_box").value=backspace.oringalString.slice(0,backspace.oringalString.length-1)
})


