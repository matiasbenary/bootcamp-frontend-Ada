mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect

// Test

// suite de Test
//  primer parametro nombre del la suite
//  segundo es una funcion 
describe("mes", () => 
{

  it("mes 5 deberia ser mayo", () => {
    expect(getMonth(5)).to.be.equal("mayo");
  });
}); //

mocha.run(); //Correr test
