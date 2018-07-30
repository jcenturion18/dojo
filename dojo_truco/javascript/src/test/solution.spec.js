import { expect } from 'chai';

import Player from '../main/Player';
import Bajada from '../main/Bajada';
import UnoDeEspada from '../main/UnoDeEspada';
import TresDeEspada from '../main/TresDeEspada';
import CuatroDeCopa from '../main/CuatroDeCopa';
import UnoDeBasto from '../main/UnoDeBasto';
import CuatroDeBasto from '../main/CuatroDeBasto';
import SieteDeBasto from '../main/SieteDeBasto';

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

        player1.pickup(new UnoDeEspada(), new TresDeEspada(), new CuatroDeCopa());
        player2.pickup(new UnoDeBasto(), new CuatroDeBasto(), new SieteDeBasto());

        bajada = player1.play(new UnoDeEspada(), bajada);
        bajada = player2.play(new CuatroDeBasto(), bajada);
        
        chai.assert.doesNotThrow( () => {
            player1.play(new TresDeEspada(), bajada);
        });

    });

    it("El jugador que gano la bajada no puede jugar su proxima carta", () => {
        var player1= new Player();
        var player2 = new Player();

        var bajada = new Bajada();

        player1.pickup(new UnoDeEspada(), new TresDeEspada(), new CuatroDeCopa());
        player2.pickup(new UnoDeBasto(), new CuatroDeBasto(), new SieteDeBasto());

        bajada = player1.play(new UnoDeEspada(), bajada);
        bajada = player2.play(new CuatroDeBasto(), bajada);
        
        chai.assert.doesNotThrow( () => {
            player2.play(new SieteDeBasto(), bajada);
        });
    });

    it("El jugador 1 juega el ancho de espada y El jugador 2 juega el 4 de basto," +
               "el 1 juega el tres de espada, el 2 el el ancho de basto, y por ultimo" +
               "el jugador 2 juega el 7 de basto y el 1 juega el 4 de copas" +
               "el jugador 1 no tiene puntos y el jugador 2 tiene 1 punto", () => {
        var player1= new Player();
        var player2 = new Player();

        var bajada = new Bajada();

        player1.pickup(new UnoDeEspada(), new TresDeEspada(), new CuatroDeCopa());
        player2.pickup(new UnoDeBasto(), new CuatroDeBasto(), new SieteDeBasto());

        bajada = player1.play(new UnoDeEspada());
        bajada = player2.play(new CuatroDeBasto(), bajada);

        bajada = player1.play(new TresDeEspada(), bajada);
        bajada = player2.play (new UnoDeBasto(), bajada);

        bajada = player1.play(new SieteDeBasto(), bajada);
        bajada = player2.play(new CuatroDeCopa(), bajada);

        chai.assert.equal(bajada.getPuntos().equal(new Punto(player2, new NadieCanto()), true);
        //chai.assert.equal(bajada.getPuntosPlayer2().equal(new Punto(new NadieCanto()), true);
        //chai.assert.equal(player2.getPuntos(), new Punto(new NadieCanto());
    });
});


