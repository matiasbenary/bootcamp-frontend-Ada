mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect

// Test
// const data = { a: 1, b: 2, c: 3 };
// const props = ["c"];
// removeProperties(data, props); // returns {a: 1}
// suite de Test
//  primer parametro nombre del la suite
//  segundo es una funcion 
describe("Eliminar Propiedades", () => 
{
    it("removeProperties debe retirar un elemento existente en mi objeto si existe en el array enviado",()=>{
        const data = { a: 1, b: 2, c: 3 };
        const props = ["c"];
        expect(removeProperties(data, props)).to.eql({a: 1,b: 2}) // returns {a: 1,b: 2}
    });
    
    it("removeProperties debe retorna mi elemento igual si le envio un array con un elemento que no extiste",()=>{
        const data = { a: 1, b: 2, c: 3 };
        const props = ["d"];
        expect(removeProperties(data, props)).to.eql({a: 1,b: 2, c: 3}) // returns {a: 1,b: 2}
    });
}); //

mocha.run(); //Correr test
