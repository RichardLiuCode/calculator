document.getElementById("enter").addEventListener("click", function () {
  var input = parseFloat(document.getElementById("input").value, 10);
  document.getElementById("output").value = input.toString(2);
});
