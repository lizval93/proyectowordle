
let jugadas = 6
let diccionario = ['PIEZA', 'PELOS', 'VIENA', 'CAPOS', 'CARRO','HUESO']
let verde = "#30E6AF"
let amarillo ="#F2DD6E"
let gris = "#495D63"
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)]
const BUTTON = document.getElementById("guess-button")
BUTTON.addEventListener("click", intentar)


function intentar (){
   
    const INTENTO = document.getElementById("guess-input").value.toUpperCase()
    jugadas--
    
    if (jugadas==0){
        terminar("PERDISTE!!!😖")
    } 
    if (palabra == INTENTO) { 
        terminar("GANASTE!!!😀")
    } let fila = document.createElement("div")
        fila.className = "row"
        console.log(fila)
        for (const i in INTENTO) {
            let letra = document.createElement("span")
            letra.className = "letter"
            letra.innerText = INTENTO[i]
            fila.appendChild(letra)
            console.log(letra)
            if (INTENTO[i]==palabra[i]){
                letra.style.background = verde
            } else if (palabra.includes(INTENTO[i])){
                letra.style.background = amarillo
            } else {
                letra.style.background = gris
            }
        } 
        let grilla = document.getElementById("grid")
        grilla.appendChild(fila) 
}
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BUTTON.disabled = true;
    let p = document.getElementById("guesses");
    p.innerHTML = "<h1>" + mensaje + "</h1>"
}


//BUSCAR UNICODE JS METADATO