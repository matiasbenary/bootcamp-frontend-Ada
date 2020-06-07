mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect

// Test
// ## Filtrar propiedades
// ## Obtener experiencia

// - Crear una función que dado un objeto que contenga niveles de experiencia y puntaje por cada nivel, y un objeto con la cantidad de desafíos realizados por cada nivel, devuelva la cantidad total de experiencia obtenida

// ```javascript
// const score = { EASY: 10, MEDIUM: 50, HARD: 100 };
// const challenges = { EASY: 3, MEDIUM: 4, HARD: 2 };
// getXP(challenges, score); // returns 630 (3 * 10 + 4 * 50 + 2 * 100)
// ```
// suite de Test
//  primer parametro nombre del la suite
//  segundo es una funcion 
describe("Filtrar propiedades", () => 
{
    it("Comprobar que getXP realice de forma adecuada la cuenta",()=>{
        const score = { EASY: 10, MEDIUM: 50, HARD: 100 };
        const challenges = { EASY: 3, MEDIUM: 4, HARD: 2 };
        expect(getXP(challenges, score)).to.eql(430)
    });

}); //

mocha.run(); //Correr test
