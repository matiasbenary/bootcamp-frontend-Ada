mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect
const assert = chai.assert; //Abreviar expect
const should = chai.should(); //Abreviar expect

// Test

// suite de Test
//  primer parametro nombre del la suite
//  segundo es una funcion
describe("Numero a mes", () => {
  it("Mes 5 deberia ser mayo", () => {
    const month = getMonth(5);
    // primer parametro valor a evaluar
    // segundo parametro va a ser el valor esperdado
    // tercero opcional va a ser un mensaje opcional
    // typeOf va a ser igual que hacer un if(typeOf(month) === "string") Si es verdadero pasa el test, en caso contrario lanza un error
    // assert.typeOf(month, "string", "Debe ser un string");
    // if(month === "mayo")
    // assert.equal(month, "mayo", "Debe ser el mes de mayo");
    // should
    // expect(getMonth(5))
    //   .to.be.a("string", "deberia ser un string")
    //   .to.be.equal("mayo");
    getMonth(5).should.be.a("string").be.equal("mayo");
  });

  it("Si ingreso 13 me retorna null", () => {
    // const month = getMonth(5);
    // assert.typeOf(month,'string',"Debe ser un string");
    // assert.equal(month,'mayo',"Debe ser el mes de mayo");
    // should
    expect(getMonth(13)).to.be.equal(null);
  });
}); //

describe("Mes a numero", () => {
  it("retorna verdadero si tiene la entrada", () => {
    expect(tieneEntrada({ entrada: true })).to.be.equal(true);
  });
});

describe("Recital", () => {
  it("retorna verdadero si tiene la entrada", () => {
    expect(tieneEntrada({ entrada: true })).to.be.equal(true);
  });
});

mocha.run(); //Correr test
