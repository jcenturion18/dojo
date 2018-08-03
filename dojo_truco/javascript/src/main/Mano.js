import Bajada from './Bajada';
import NoOne from './NoOne';

class Mano {
	constructor() {
		this.bajada = new Bajada(new NoOne());
	}

	addCardForPlayer(card, player) {
		this.bajada = this.bajada.addCardForPlayer(card,player);
	}

	getPuntos() {
		return this.bajada.getPuntos();
	}
}

export default Mano;