mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect

// Test

// suite de Test
//  primer parametro nombre del la suite
//  segundo es una funcion 
describe("Union de objetos", () => 
{
    it("Convinar dos objetos y obtener uno solo", () => {

        const info1 = { a: 1, b: 2, c: 3 };
        const info2 = { d: 4, e: 6 };
    
        expect(merge(info1,info2)).to.eql({a: 1, b: 2, c: 3, d: 4 , e: 6});
      });

    it("Comprobar que no se repiten lo elementos al convinarlos", () => {

        const info1 = { a: 1, b: 2, c: 3 };
        const info2 = { d: 4, b: 5 , e: 6};
    
        expect(merge(info1,info2)).to.eql({a: 1, b: 2, c: 3, d: 4 , e: 6});
    });
}); 

mocha.run(); //Correr test
