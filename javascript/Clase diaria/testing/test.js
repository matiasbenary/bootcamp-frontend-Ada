mocha.setup("bdd"); //inicializar los test

//  asset un test por linea
const assert = chai.assert; //Abreviar expect
// expect se puede encadenar los test
const expect = chai.expect; //Abreviar expect
// se ejecuta despues de la llamada a mi funcion,puede traer algun que otro problemas
const should = chai.should(); //Abreviar expect

// Test

// suite de Test
//  primer parametro nombre del la suite
//  segundo es una funcion
describe("Mes del año", () => {
  it("Mes 5 deberia ser mayo", () => {
    const month = getMonth(5);
    assert.typeOf(month, "string", "Debe ser un string");
    assert.equal(month, "mayo", "Debe ser el mes de mayo");
    // should
    // expect(getMonth(5)).to.be.a("string").to.be.equal("mayo");
    // getMonth(5).should.be.a("string");
  });

  it("Si ingreso 13 me retorna null", () => {
    // const month = getMonth(5);
    // assert.typeOf(month,'string',"Debe ser un string");
    // assert.equal(month,'mayo',"Debe ser el mes de mayo");
    // should
    expect(getMonth(13)).to.be.equal(null);
  });
}); //

describe("Recital", () => {
  it("retorna verdadero si tiene la entrada", () => {
    expect(tieneEntrada({ entrada: true })).to.be.equal(true);
  });
});

mocha.run(); //Correr test
