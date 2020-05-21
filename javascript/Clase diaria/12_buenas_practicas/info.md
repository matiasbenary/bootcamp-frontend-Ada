# Funciones (buenas prácticas)

## Cuándo o para qué hacer una función

- **Para evitar código duplicado**. Si tenemos dos o más porciones de código que se repiten (porciones puede ser hasta una línea de código, si es una lógica que se utiliza mucho), ya sean idénticas o similares. Esto sigue la filosofía de **DRY**, _Don't Repeat Yourself_ (no te repitas)
- **Para generar código reutilizable**.
- **Para simplificar el código**

## Cómo hacer funciones

1. Identificar el código que queremos extraer en una función.
2. Crear una función vacía y copiar el código dentro de ella.
3. Identificar las variables que el código necesita y utiliza y que está accediendo desde afuera.
4. Declarar parámetros para cada una de esas variables.
5. Si existen valores fijos, convertirlos en variables y declararlos como parámetros.
6. Si estamos generalizando código similar pero no totalmente exacto, declarar parámetros bandera (booleanos) que permitan definir de qué forma se va a usar la función para que tome uno u otro camino.
7. Declarar los valores por defaults de aquellos parámetros que se pueda hacerlo.
8. Identificar el valor que se quiere devolver y retornarlo.
9. Hacer las modificaciones necesarias al código para que funcione.
10. Reemplazar el código donde fue extraído por la función siendo invocada.

## Cosas a tener en cuenta para hacer buenas funciones

- **Buenos nombres**. El nombre de una función debe indicar una acción (verbo) y tener un buen balance entre expresividad y longitud
- **Principio de responsabilidad única**. Una función debe encargarse de una única cosa. Si vemos que una función está tratando de hacer demasiadas cosas, lo mejor es partirla en funciones más pequeñas.
- **Longitud**. Preferir funciones cortas a funciones largas. Una función pequeña es más fácil de leer y comprender. Además, es muy probable que una función larga este rompiendo con el _principio de responsabilidad única_.
- **Pocos parámetros**. Preferir funciones con pocos parámetros a funciones con muchos. Si tiene demasiados, es probable que se esté incumpliendo el _principio de responsabilidad única_ y haya que partirla en varias funciones.
- **Valores por defecto en parámtros**. En lo posible, agregar valores por defecto en los parámetros para evitar errores con _undefined_.
- **Parámetros opcionales**. Agregar valores _por defecto_ a aquellos parámetros que tienen casos de uso muy comunes, para evitar tener que estar completándolos cada vez que los utilicemos.
- **Funciones genéricas/reutilizables**. Preferir funciones que no tengan valores específicos, sino que tomen valores por parámetros, lo que permite que sean reutilizados en múltiples casos.
- **Pureza**. Preferir funciones puras a impuras. Una _función pura_ es aquella que no tiene ningún efecto secundario, y que dado un mismo input (mismos valores de argumentos) devuelve el mismo valor. Para evitar _efectos secundarios_, lo mejor es:
  - No acceder ni modificar ninguna variable _por fuera_ de la función
  - Si la función necesita datos, obtenerlos de los parámetros
  - No modificar valores que se la pasan por parámetro
  - No invocar funciones dentro de estas si no vamos a hacer nada con el valor que devuelva (o si no devuelve ningún valor)
- **Devolver valores**. Una función es más útil cuando devuelve un valor para que se pueda hacer algo con este.

Recuerden que estos son tips a seguir y no reglas estrictas, no siempre podemos cumplirlas (y a veces es aconsejable no hacerlo).
