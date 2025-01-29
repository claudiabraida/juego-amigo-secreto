// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.
//evento botón "button-add" HTML
// let $inputAmigo;
const $ = element => document.querySelector(element);



let arrayAmigos = []
function agregarAmigo () {
  $inputAmigo = $("#amigo") 
  if($inputAmigo.value === "") {
    alert("Por favor, inserte un nombre.")
  } 
  
  $ulListaAmigos = $("#listaAmigos").innerHTML += `<li>${$inputAmigo.value}</li>`
  arrayAmigos.push($inputAmigo.value)
  
  limpiarCampoDeEntrada()
  console.log(arrayAmigos)
}

function limpiarCampoDeEntrada () {
  $inputAmigo.value = ""
}

// function sortearAmigo() { 
//   if () {
      
    
// }
// }

