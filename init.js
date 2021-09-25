<!doctype html>
<html>
   <head>
      <script>
         function sumOfNbr(){
             var nbr1, nbr2, sum;
             nbr1 = Number(document.getElementById("nbr1").value);
             nbr2 = Number(document.getElementById("nbr2").value);
             sum = nbr1 + nbr2;
             document.getElementById("sum").value = sum;
  try {
    if (isNan(nbr1) throw;
    if (isNan(nbr2) throw;  
  }
  catch(err)
  {
    document.getElementByid("mesage").InnerHTML="Input is"+ err;
  }
        
         }

      </script>
   </head>
   <body>
      <input id="nbr1"> + <input id="nbr2">
      <button onclick="sumOfNbr()">Calculate the sum</button>
      = <input id="sum">
   </body>
</html>
