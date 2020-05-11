mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect

describe("mes", () => {
  it("mes 5 deberia ser mayo", () => {
    expect(getMonth(5)).to.be.equal("mayo");
  });
}); //

mocha.run(); //Correr test
