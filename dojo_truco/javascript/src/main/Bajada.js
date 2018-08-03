import NoCard from './NoCard';
import NoOne from './NoOne';
import NadieCanto from './NadieCanto';
import Punto from './Punto';

class Bajada {
	constructor(previousWinner){
		this.previousCard = new NoCard();
		this.previousPlayer = new NoOne();
		this.winner = new NoOne();
		this.previousWinner = previousWinner;
	}
    
    addCardForPlayer(card, player) {
    	this.previousWinner.canPlay(player);
    	this.winner = this.previousCard.challenge(this.previousPlayer, card, player);
    	this.previousCard = card;
    	this.previousPlayer = player;
    	this.previousWinner = this.winner;

    	return this.winner.bajada(this, this.previousWinner);

    }

	getPuntos() {
		return new Punto(this.previousWinner, new NadieCanto());
	}

}
export default Bajada;