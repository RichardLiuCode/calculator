document.getElementById("enter").addEventListener("click", function () {
  var result = 1;
  var n = document.getElementById("input").value;
  n = Math.round(n);
  document.getElementById("input").value = n;
  while (n > 1) {
    result = result * n;
    n--;
  }
  if (n < 0) {
    document.getElementById("output").value = "n must be > or = to 0";
  } else {
    document.getElementById("output").value = result;
  }
});
