//Un conversor de pesos, medidas y/o temperaturas. Se debería poder ingresar valor en un input (por ejemplo dólar) y que se actualicen los demás inputs (por ejemplo peso)
/*
    dos input que me indiquen que son
    label
*/

const pesos = document.querySelector("#pesos");
const dolares = document.getElementById("dolares");

const valorDolar = 60;

const pesoADolar = (num) =>{
    return num/valorDolar;
}

const dolarAPeso = (num) =>{
    return num*valorDolar
}

pesos.addEventListener("keyup",()=>{
    let dolar = pesoADolar(pesos.value);
    dolares.value = dolar;
});

dolares.addEventListener("keyup",()=>{
    let peso = dolarAPeso(dolares.value);
    pesos.value= peso;
})