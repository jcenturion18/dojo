const chai = require('chai');

const Player = require('../Player');
const Deck = require('../Deck');

/*
El jugador 1 tiene el ancho de espada, 3 de espada, 4 de copas
El jugador 2 tiene el ancho de basto, 4 de basto y 7 de basto
El jugador 1 juega el ancho de espada
El jugador 2 juega el 4 de basto
El jugador 1 puede jugar el tres de espada porque el ancho de espada gana a todas las cartas

El jugador 1 tiene el ancho de espada, 3 de espada, 4 de copas
El jugador 2 tiene el ancho de basto, 4 de basto y 7 de basto
El jugador 1 juega el ancho de espada
El jugador 2 juega el 4 de basto
El jugador 2 quiere jugar y no puede porque no ganó la bajada
 */

describe("MyClass", () => {
    it("El jugador que gano la bajada puede jugar su proxima carta", () => {

        var player1= new Player();
        var player2 = new Player();


        var bajada = new Bajada();

        var unoDeEspada  = new UnoDeEspada();
        var tresDeEspada = new TresDeEspada();

        var cuatroDeBasto  = new CuatroDeBasto();

        deck.deal (player1, unoDeEspada);
        deck.deal (player1, new TresDeEspada());
        deck.deal (player1, new CuatroDeCopa());

        deck.deal (player2, new UnoDeBasto());
        deck.deal (player2, new CuatroDeBasto());
        deck.deal (player2, new SieteDeBasto());

        bajada = player1.play(unoDeEspada, bajada);
        bajada = player2.play(cuatroDeBasto, bajada);

        /*
        var bajada2 = new Bajada();
*/
        chai.assert.doesNotThrow( () => {
            player1.play(tresDeEspada, bajada);
        });

    });

    it("it shoud throw execption", () => {
        var anInstance = new MyClass();
        chai.assert.throws( () => {
            anInstance.mustThrowException();
        });
    });
});


