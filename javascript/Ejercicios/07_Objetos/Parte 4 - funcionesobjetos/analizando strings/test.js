mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect

// Test
// ## Filtrar propiedades
// ## Analizando strings

// - Crear una función que dado un string devuelva un objeto con la cantidad de letras, espacios y números que contiene. Cualquier cosa que no sea un número o un espacio cuenta como una letra

// ```javascript
// getStringInfo("H3ll0 Wor1d"); // returns { LETTERS:  7, DIGITS: 3, SPACES: 1 }
// ```
// suite de Test
//  primer parametro nombre del la suite
//  segundo es una funcion 
describe("Analizando strings", () => 
{
    it("getStringInfo me debe retonar un objeto contando letras,espacios,numeros",()=>{
        const data = { a: 1, b: 2, c: 3 };
        const props = ["c", "b"];
        expect(getStringInfo("H3ll0 Wor1d")).to.eql({ LETTERS:  7, DIGITS: 3, SPACES: 1 })
    });

}); //

mocha.run(); //Correr test
