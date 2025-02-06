/* 💥💥💥💥💥💥 VARIABLES 💥💥💥💥💥💥 */
const $ = element => document.querySelector(element);
$ulListaAmigos = $("#listaAmigos")
$inputAmigo = $("#amigo")
let arrayAmigos = []


/* 💥💥💥💥💥💥 FUNCION PARA ELEMENTO HTML 💥💥💥💥💥💥 */
function elementoVacio (elemento) {
  elemento.value = ""
}


/* 💥💥💥💥💥💥 FUNCION MANEJO DOM 💥💥💥💥💥💥 */
function agregarAmigo () {
  const nombreIngresado = $inputAmigo.value.trim().replace(/\s+/g, " ")
  $ulListaAmigos.innerHTML += `<li>${nombreIngresado}</li>`
  elementoVacio($inputAmigo)
  
  if(nombreIngresado === "") {
    alert("Por favor, ingrese un nombre.")
  } else {
    actualizarArray (nombreIngresado)
  }  
}

/* 💥💥💥💥💥💥 FUNCION ACTUALIZAR DATOS (ARRAY) 💥💥💥💥💥💥 */
function actualizarArray (nombreIngresado) {
  arrayAmigos.push(nombreIngresado)
  arrayAmigos
  // console.log(arrayAmigos)
}


/* 💥💥💥💥💥💥 FUNCION SORTEAR AMIGOS 💥💥💥💥💥💥 */
function sortearAmigo() {
  if (arrayAmigos.length > 1) {
    let indiceAleatorioAmigo = Math.floor(Math.random()*arrayAmigos.length);
    let amigosorteado = arrayAmigos[indiceAleatorioAmigo]
    console.log(amigosorteado)
    
    mostrarAmigoElegido(amigosorteado)
  } if (arrayAmigos.length === 1) {
    alert("Necesitas ingresar al menos 2 nombres para sortear ")
  }
}

/* 💥💥💥💥💥💥 FUNCION MOSTRAR AMIGOS 💥💥💥💥💥💥 */
function mostrarAmigoElegido(amigosorteado) {
  $ulListaAmigos.innerHTML = ""
  $ulResultado = $("#resultado").innerHTML = `<li>El amigo secreto es:${amigosorteado}</li>`
}