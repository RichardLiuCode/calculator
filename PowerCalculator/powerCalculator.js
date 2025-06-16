document.getElementById("enter").addEventListener("click",function(){
  var base =parseFloat(document.getElementById("base").value)
  var power =parseFloat(document.getElementById("power").value)
  document.getElementById("output").value=Math.pow(base,power)
})
