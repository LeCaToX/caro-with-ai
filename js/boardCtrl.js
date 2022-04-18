var ctrl = {
    newGame: function () {
        var size = prompt("Chọn kích thước mới", 19) | 0
        size = Math.min(size, 50)
        size = Math.max(size, 15)
        currGame = new game(size, size)
        board.writeBoard();
    },
    resign: function () {
        alert("Gà")
        this.newGame()
    },
};
