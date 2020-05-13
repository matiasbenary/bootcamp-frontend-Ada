var a = "1";
let b = "2";
const c = "3";
console.log(`GLOBALES 1 ${a},${b},${c}`);
const test = () => {
  var a = "10";
  let b = "20";
  const c = "30";
  console.log(`FUNCION ${a},${b},${c}`);
};

test();
console.log(`GLOBALES 2 ${a},${b},${c}`);
if (true) {
  var a = "100";
  let b = "200";
  const c = "300";
  console.log(`BLOQUE ${a},${b},${c}`);
}
console.log(`GLOBALES 3 ${a},${b},${c}`);
for (var a = 125; a <= 150; a++) {
  console.log(`For de A ${a}`);
}

for (let b = 125; b <= 150; b++) {
  console.log(`For de B ${b}`);
}

console.log(`GLOBALES 4 ${a},${b},${c}`);
