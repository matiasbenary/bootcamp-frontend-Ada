mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect

// Test
// ## Parámetros de búsqueda

// Los parámetros de búsqueda en una URL son aquellos que vienen después del signo `?` y se escriben como `parametro=valor`, separados por el signo `&`. Crear una función que dada una URL, devuelva un objeto con cada parámetro como clave con su respectivo valor.

// ```javascript
// parseQueryParams(
//   "http://www.exercises.com?keyword=objects&language=javascript&level=intermediate"
// ); // returns { keyword: "objects", language: "javascript", level: "intermediate }
// ```

// suite de Test
//  primer parametro nombre del la suite
//  segundo es una funcion 
describe("Parámetros de búsqueda", () => 
{
    it("parseQueryParams debe retornar los parametros de busqueda",()=>{
        const url = "http://www.exercises.com?keyword=objects&language=javascript&level=intermediate";
        expect(parseQueryParams(url)).to.eql({ keyword: "objects", language: "javascript", level: "intermediate" });
    });

    it("parseQueryParams debe retornar los parametros de busqueda parte 2",()=>{
        const url = "http://www.notengoelmismolargo.com?keyword=objects&language=javascript&level=intermediate";
        expect(parseQueryParams(url)).to.eql({ keyword: "objects", language: "javascript", level: "intermediate" });
    })
}); //

mocha.run(); //Correr test
