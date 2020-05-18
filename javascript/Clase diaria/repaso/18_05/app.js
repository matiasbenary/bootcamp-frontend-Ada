const numerosA = ["Hola","Pepito","matias","Manteca","Perro",2];// en el casillero 1
const numerosB = ["Hola","Pepito",2,"matias","Manteca","Perro"];// en el casillero 2

const verificarArray = (arr1,arr2)=>{
  if(arr1.length !== arr2.length){
    return false;
  }

  numerosA.sort();
  numerosB.sort();

  for(let i=0;i<arr1.length;i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }

  return true;


}
console.log("verificacion de Array",verificarArray(numerosA,numerosB))