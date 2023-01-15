function display(valor){
   document.getElementById('resultado').value += valor;
}


function operaciones(){
   let x = document.getElementById('resultado').value;
   let y = eval(x);
   document.getElementById('resultado').value = y;

  console.log(y);
  console.log(x);
   return y;
}