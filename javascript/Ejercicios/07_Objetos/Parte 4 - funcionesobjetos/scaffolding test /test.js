mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect

// Test
// ## Filtrar propiedades

// suite de Test
//  primer parametro nombre del la suite
//  segundo es una funcion 
describe("Filtrar propiedades", () => 
{
    it("Filtrar las propiedades que existente de un objeto",()=>{
        const data = { a: 1, b: 2, c: 3 };
        const props = ["c", "b"];
        expect(filterProperties(data, props)).to.eql({b: 2, c: 3})
    });

    it("Filtrar las propiedades que no exiten de un objeto",()=>{
        const data = { a: 1, b: 2, c: 3 };
        const props = ["f", "g"];
        expect(filterProperties(data, props)).to.eql({})
    })
}); //

mocha.run(); //Correr test
