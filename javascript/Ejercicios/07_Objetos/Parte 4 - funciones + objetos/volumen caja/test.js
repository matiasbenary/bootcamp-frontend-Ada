mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect

// Test

// suite de Test
//  primer parametro nombre del la suite
//  segundo es una funcion 
describe("Volumen de Caja", () => 
{
  it("getBoxVolume me retorna 10 en un objeto de 2X5X1", () => {

    const size = { width: 2, length: 5, height: 1 };

    expect(getBoxVolume(size)).to.be.equal(10);
  });
}); //

mocha.run(); //Correr test
