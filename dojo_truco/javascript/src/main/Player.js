function Player() {
}

MyClass.prototype.pickup = function( card1, card2, card3 ) {
    this.card1 = card1;
    this.card2 = card2;
    this.card3 = card3;
};

MyClass.prototype.play = function(card, bajada) {
    bajada.addCardForPlayer(card, this);
};

module.exports = Player;