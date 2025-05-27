document.getElementById("go").addEventListener("click",function(){
  var n1=parseFloat(document.getElementById("number1").value );
  var n2=parseFloat(document.getElementById("number2").value)
  if (document.getElementById("dropdown").value=="+"){
    document.getElementById("output").value=n1+n2
  } else if (document.getElementById("dropdown").value=="-"){
    document.getElementById("output").value=n1-n2
  } else if (document.getElementById("dropdown").value=="*"){
    document.getElementById("output").value=n1*n2
  } else if (document.getElementById("dropdown").value=="/"){
    document.getElementById("output").value=n1/n2
  } 
})