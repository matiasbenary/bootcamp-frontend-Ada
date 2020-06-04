mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect

// Test

// suite de Test
//  primer parametro nombre del la suite
//  segundo es una funcion 
describe("Redondeo", (value) => 
{
    it("Le envio un float a round y este me retorna un objeto con los valores redondeado", () => {

        const value = 13.3
    
        expect(round(value)).to.eql({ floor: 13, ceil: 14, round: 13 });
      });
}); //

mocha.run(); //Correr test
