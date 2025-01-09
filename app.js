//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

// Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra) {
    for (let i = 0; i < 17; i++) { // Creación de 17 barritas
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

// Selecciono todas las barras generales para luego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let php = document.getElementById("php");
crearBarra(php);
let ilustrator = document.getElementById("ilustrator");
crearBarra(ilustrator);

// Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barra
// para eso utilizo un arreglo, cada posición pertenece a un elemento
// comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1, -1, -1, -1, -1, -1];
// Esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

// Mapeo de porcentajes de habilidades
const porcentajes = {
    html: 95,
    javascript: 53,
    wordpress: 90,
    photoshop: 67,
    php: 43,
    ilustrator: 65,
};

// Calcula el número de barritas a pintar basado en el porcentaje
function calcularBarritas(porcentaje) {
    return Math.round((porcentaje * 17) / 100);
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if (distancia_skills >= 300 && !entro) {
        entro = true;

        const intervalHtml = setInterval(function () {
            pintarBarra(html, calcularBarritas(porcentajes.html), 0, intervalHtml);
        }, 100);
        const intervalJavascript = setInterval(function () {
            pintarBarra(javascript, calcularBarritas(porcentajes.javascript), 1, intervalJavascript);
        }, 100);
        const intervalWordpress = setInterval(function () {
            pintarBarra(wordpress, calcularBarritas(porcentajes.wordpress), 2, intervalWordpress);
        }, 100);
        const intervalPhotoshop = setInterval(function () {
            pintarBarra(photoshop, calcularBarritas(porcentajes.photoshop), 3, intervalPhotoshop);
        }, 100);
        const intervalPhp = setInterval(function () {
            pintarBarra(php, calcularBarritas(porcentajes.php), 4, intervalPhp);
        }, 100);
        const intervalIlustrator = setInterval(function () {
            pintarBarra(ilustrator, calcularBarritas(porcentajes.ilustrator), 5, intervalIlustrator);
        }, 100);
    }
}

// Llena una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval) {
    contadores[indice]++;
    let x = contadores[indice];
    if (x < cantidad) {
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#691616";
    } else {
        clearInterval(interval);
    }
}

// Detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function () {
    efectoHabilidades();
};
