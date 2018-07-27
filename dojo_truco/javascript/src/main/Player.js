class Player{
    pickup( card1, card2, card3 ) {
        this.card1 = card1;
        this.card2 = card2;
        this.card3 = card3;
    }

    play(card, bajada) {
        bajada.addCardForPlayer(card, this);
    }
}

export default Player;