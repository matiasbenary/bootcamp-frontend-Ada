const productos = ["pefurmes","mochila","peine","celular"];

const precios = [15,20,25,30,35];

for(let i = 0 ; i< productos.length ; i++){
    console.log(productos[i]);
}

// primer parametro el valor y el segundo el indice. Ej primera vuelta producto => perfumes y el indice => 0
const imprimirArray = (producto,indice) =>{
    console.log(producto,indice)
}

productos.forEach(imprimirArray);

console.log(productos);



let aux = [];
for(let i = 0 ; i< precios.length ; i++){
    aux.push(precios[i]*2)
}
// El map crea un nuevo array con el resultado del callback(es la funcion que le pasamos)
const preciosDuplicados = precios.map((precio)=>{
    return precio*1.21
})
