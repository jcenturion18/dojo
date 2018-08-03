import Bajada from './Bajada';

class Player{
    pickup( card1, card2, card3 ) {
        this.card1 = card1;
        this.card2 = card2;
        this.card3 = card3;
    }

    play(card, bajada) {
        bajada.addCardForPlayer(card, this);
        return bajada;
    }

    canPlay(player) {
        if (!this.isEqual(player)) {
        	throw new Error("Gato");
        }
    }

    isEqual(otherPlayer){
    	return this == otherPlayer;
    }

    bajada(bajada, previousWinner){
		return new Bajada(previousWinner);
	}
}

export default Player;