/*
**📐 Patrón**

- Crear un programa que muestre en consola el siguiente patrón

```bash
*
**
***
****
*****
******
*******
********
*********
**********
***********
************
*************
```

primero mostra un *
despues mostra un **
despues mostra un ***
despues mostra un ****

*/

const imprimirAsterisco = () => {
  let asterisco = "*";
  //   console.log(asterisco + asterisco);
  //   console.log(asterisco + "*");
  //   console.log(asterisco.concat("*"));
  //   console.log(`${asterisco}${asterisco}`);
  //   console.log(`${asterisco}*`);

  for (let i = 1; i <= 16; i++) {
    console.log(asterisco);
    asterisco = asterisco + "*";
  }
};

imprimirAsterisco();
