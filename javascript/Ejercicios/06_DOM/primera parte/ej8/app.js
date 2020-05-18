// Crear un h1 y dos botones,los botones hacen que se agrande y achique la letra del h1

const titulo = document.getElementById("titulo");
 const btnAgrandar = document.getElementById("btnAgrandar"); 
 const btnAchicar = document.getElementById("btnAchicar");




// let tamaño = Number(getComputedStyle(titulo).fontSize.slice(0,-2));
// getComputedStyle(titulo).fontSize
// obtenerFontSize es un funcion que le paso un elemento y me devuelve el fontSize en formato numero
const obtenerFontSize = (elemento) =>{
    // primero obtengo todos los estilos y me quedo con el fontSize
    const obtenerFontSize = getComputedStyle(elemento).fontSize;
    // con slice le corto los dos ultimos caracters que son px
    const soloValorSinUnidad = obtenerFontSize.slice(0,-2);
    // luego lo convierto en formato  numero
    const convertirDeStringANumber = Number(soloValorSinUnidad);
    return convertirDeStringANumber;
}

// cambiar FontSize es una funcion generica que ingreso el tamano a sumar y el elemento a cambiar,no retorna nada
const cambiarFontSize = (tamaño,elementoACambiar)=>{
    const fontSize = obtenerFontSize(elementoACambiar) + tamaño;
    elementoACambiar.style.fontSize = `${fontSize}px`
}

btnAgrandar.addEventListener("click",()=>{
    cambiarFontSize(5,titulo);
}
)
btnAchicar.addEventListener("click",()=>{
    cambiarFontSize(-5,titulo);
}
)

