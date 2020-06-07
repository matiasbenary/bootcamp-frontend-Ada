mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect

// Test
// ## Filtrar propiedades
// suite de Test
//  primer parametro nombre del la suite
//  segundo es una funcion 
describe("Filtrar propiedades", () => 
{
    it("La canBuyAllProduct debe retornar un boolean en true si puedo comprar todos lo item",()=>{
        const products = { cookies: 60, chocolate: 110, soda: 120 };
        const money = 300;
        expect(canBuyAllProduct(money, products)).to.eql(true)
    });

}); //

mocha.run(); //Correr test
