function Bajada() {
	this.cardsDict = [];
}

MyClass.prototype.addCardForPlayer = function(card, player) {

	previousCard = this.cards[0];
	Card winCard = previousCard.compete(card);
	this.winning = winCard.equals(card);
};

module.exports = Bajada;