// - Hacer un contador con las siguientes opciones: sumar/restar +1, sumar/restar +10, sumar/restar +100. El valor mínimo del contador es 0.
/*
elementos en DOM:
    p o un h1 h2 para mostrar el contador
    botones sumar +1 +10 +100, restar -1 -10 -100
*/
const contador = document.getElementById("contador");
const btn100 = document.querySelector("#btn100");
const btn10 = document.querySelector("#btn10");
const btn1 = document.querySelector("#btn1");
const btn_1 = document.querySelector("#btn_1");
const btn_10 = document.querySelector("#btn_10");
const btn_100 = document.querySelector("#btn_100");

let contadorLogico = 0;
contador.innerHTML = contadorLogico;

const sumarContador = (num) =>{
    if(contadorLogico + num >= 0 ){
        contadorLogico +=num;
    }else{
        contadorLogico=0;
    }
    contador.innerHTML = contadorLogico;
}

btn100.addEventListener("click",() =>sumarContador(100));
btn10.addEventListener("click",() => sumarContador(10));
btn1.addEventListener("click",() => sumarContador(1));
btn_1.addEventListener("click",() => sumarContador(-1));
btn_10.addEventListener("click",() => sumarContador(-10));
btn_100.addEventListener("click",() => sumarContador(-100));
