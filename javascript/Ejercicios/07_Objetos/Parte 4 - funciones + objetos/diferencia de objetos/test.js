mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect

// Test
// // const info1 = { a: 1, b: 2, c: 3 };
// const info2 = { d: 4, b: 5 };
// differentiate(info1, info2); // returns {a: 1, c: 3, d: 4}
// suite de Test
//  primer parametro nombre del la suite
//  segundo es una funcion 
describe("Diferencia de objetos", () => 
{
    it("Envio dos objetos y me retorna la diferencia", () => {

        const info1 = { a: 1, b: 2, c: 3 };
        const info2 = { d: 4, b: 5 };

        expect(differentiate(info1, info2)).to.eql({a: 1, c: 3, d: 4});
      });
}); //

mocha.run(); //Correr test
