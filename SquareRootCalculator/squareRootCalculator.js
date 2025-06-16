document.getElementById("enter").addEventListener("click", function () {
  var Input = parseFloat(document.getElementById("input").value);
  document.getElementById("output").value = Math.sqrt(Input);
});
