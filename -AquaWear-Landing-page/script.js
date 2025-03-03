let contador = 0;

function incrementoContador() {
  contador++; 
  document.getElementById("contador-productos").innerHTML = contador; 
  console.log(contador);
}

console.log(contador);