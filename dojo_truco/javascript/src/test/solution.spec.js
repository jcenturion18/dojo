import { expect } from 'chai';

import Player from '../src/main/Player';
import Bajada from '../src/main/Bajada';
import UnoDeEspada from '../src/main/UnoDeEspada';
import TresDeEspada from '../src/main/TresDeEspada';
import CuatroDeCopa from '../src/main/CuatroDeCopa';
import UnoDeBasto from '../src/main/UnoDeBasto';
import CuatroDeBasto from '../src/main/CuatroDeBasto';
import SieteDeBasto from '../src/main/SieteDeBasto';

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
});


