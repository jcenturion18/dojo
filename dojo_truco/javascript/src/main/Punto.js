class Punto {
	constructor(player, canto){
		this.player = player;
		this.canto = canto;
	}

	isEqual(otherPunto){
		return this.player.isEqual(otherPunto.player) && this.canto.isEqual(otherPunto.canto);
		
	}

}

export default Punto;