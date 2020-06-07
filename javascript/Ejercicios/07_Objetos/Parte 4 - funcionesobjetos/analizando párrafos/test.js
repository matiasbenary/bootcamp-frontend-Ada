mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect

// Test
// ## Analizando párrafos

// - Crear una función que dado un string devuelva un objeto con la cantidad de letras, palabras y oraciones.

// ```javascript
// getParagraphInfo("Do. Or do not. There is no try."); // returns { LETTERS:  21, WORDS: 8, SENTENCE: 3 }
// ```
// suite de Test
//  primer parametro nombre del la suite
//  segundo es una funcion 
describe("Analizando párrafos", () => 
{
    it("getParagraphInfo debe retornar un objeto con la cantidad de letras, palabras y oraciones",()=>{
        const data = { a: 1, b: 2, c: 3 };
        const props = ["c", "b"];
        expect(getParagraphInfo("Do. Or do not. There is no try.")).to.eql({ LETTERS:  21, WORDS: 8, SENTENCE: 3})
    });
}); //

mocha.run(); //Correr test
