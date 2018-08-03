import { expect, assert } from 'chai';

import Player from '../main/Player';
import Mano from '../main/Mano';
import UnoDeEspada from '../main/UnoDeEspada';
import TresDeEspada from '../main/TresDeEspada';
import CuatroDeCopa from '../main/CuatroDeCopa';
import UnoDeBasto from '../main/UnoDeBasto';
import CuatroDeBasto from '../main/CuatroDeBasto';
import SieteDeBasto from '../main/SieteDeBasto';
import Punto from '../main/Punto';
import NadieCanto from '../main/NadieCanto';


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
El jugador 2 quiere jugar y no puede porque no ganó la mano
 */

describe("MyClass", () => {
    it("El jugador que gano la mano puede jugar su proxima carta", () => {

        var player1= new Player();
        var player2 = new Player();

        var mano = new Mano();

        player1.pickup(new UnoDeEspada(), new TresDeEspada(), new CuatroDeCopa());
        player2.pickup(new UnoDeBasto(), new CuatroDeBasto(), new SieteDeBasto());

        mano = player1.play(new UnoDeEspada(), mano);
        mano = player2.play(new CuatroDeBasto(), mano);
        
        assert.doesNotThrow( () => {
            player1.play(new TresDeEspada(), mano);
        });

    });

    it("El jugador que gano la mano no puede jugar su proxima carta", () => {
        var player1= new Player();
        var player2 = new Player();

        var mano = new Mano();

        player1.pickup(new UnoDeEspada(), new TresDeEspada(), new CuatroDeCopa());
        player2.pickup(new UnoDeBasto(), new CuatroDeBasto(), new SieteDeBasto());

        mano = player1.play(new UnoDeEspada(), mano);
        mano = player2.play(new CuatroDeBasto(), mano);
        
        assert.throws( () => {
            player2.play(new SieteDeBasto(), mano);
        });
    });

    it("El jugador 1 juega el ancho de espada y El jugador 2 juega el 4 de basto," +
               "el 1 juega el tres de espada, el 2 el el ancho de basto, y por ultimo" +
               "el jugador 2 juega el 7 de basto y el 1 juega el 4 de copas" +
               "el jugador 1 no tiene puntos y el jugador 2 tiene 1 punto", () => {
        var player1= new Player();
        var player2 = new Player();

        var mano = new Mano();

        player1.pickup(new UnoDeEspada(), new TresDeEspada(), new CuatroDeCopa());
        player2.pickup(new UnoDeBasto(), new CuatroDeBasto(), new SieteDeBasto());

        mano = player1.play(new UnoDeEspada(), mano);
        mano = player2.play(new CuatroDeBasto(), mano);

        mano = player1.play(new TresDeEspada(), mano);
        mano = player2.play (new UnoDeBasto(), mano);

        mano = player2.play(new SieteDeBasto(), mano);
        mano = player1.play(new CuatroDeCopa(), mano);

        assert.equal(mano.getPuntos().isEqual(new Punto(player2, new NadieCanto())), true);

        //chai.assert.equal(mano.getPuntosPlayer2().equal(new Punto(new NadieCanto()), true);
        //chai.assert.equal(player2.getPuntos(), new Punto(new NadieCanto());
    });
});


