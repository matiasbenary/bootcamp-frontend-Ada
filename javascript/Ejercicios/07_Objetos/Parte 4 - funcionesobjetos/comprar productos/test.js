mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect

// Test
// ## Comprar lista de productos

// - Crear una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, `true` si puede comprarlos a todos o `false` si no

// ## Comprar productos

// - Crear una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, devuelva un objeto con dichos productos, teniendo como valor `true` si puede comprarlo o `false` sino

// ```javascript
// const products = { cookies: 60, chocolate: 110, soda: 120 };
// const money = 115;
// buyProducts(money, products); // returns { cookies: true, chocolate: true, soda: false}
// ```
// ```
// suite de Test
//  primer parametro nombre del la suite
//  segundo es una funcion 
describe("Comprar productos", () => 
{
    it("La buyProducts debe retornar un objeto con todos los item que puedo comprar",()=>{
        const products = { cookies: 60, chocolate: 110, soda: 120 };
        const money = 115;
        expect(buyProducts(money, products)).to.eql({ cookies: true, chocolate: true, soda: false})
    });

    it("La buyProducts no debe modificar el objeto ingresado",()=>{
        const products = { cookies: 60, chocolate: 110, soda: 120 };
        const money = 115;
        buyProducts(money, products);
        expect(buyProducts(products)).to.eql({ cookies: 60, chocolate: 110, soda: 120 })
    });


}); //

mocha.run(); //Correr test
