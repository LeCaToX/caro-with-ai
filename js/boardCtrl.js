var ctrl = {
    newGame: function () {
        currGame = new game(14, 20);
        board.writeBoard();
    },
    resign: function () {
        alert("Bạn đã chịu thua. :D :D");
        currGame = new game(14, 30);
        board.writeBoard();
    },
};
