//your JS code here. If required.
let usersForm = document.querySelector(".users");
let board = document.querySelector(".board");
let player1 = document.getElementById("player-1");
let player2 = document.getElementById("player-2");
let btn = document.getElementById("btn");
let message = document.querySelector(".message");
let boxes = document.querySelectorAll("td");
let currentPlayer = 0;
let boardState = ["", "", "", "", "", "", "", "", ""];
const winningCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];
let gameOver = false;
btn.addEventListener("click", (e) => {
	e.preventDefault();

	let p1 = player1.value;
	let p2 = player2.value;
	usersForm.style.display = "none";
	board.style.display = "flex";

	message.textContent = `${p1}, you're up"`;
	boxes.forEach((box) => {
		box.addEventListener("click", () => {
			if (box.textContent !== "") return;
			if (currentPlayer === 0) {

				box.textContent = "O";
				boardState[box.id - 1] = "O";
				if (winner("O")) {
					message.textContent = `${p1} You are winner`;
					gameOver = true;
					disableBoard();
					return;
				}
				message.textContent = `${p2}, you're up"`;
				currentPlayer = 1;

			}
			else {
				box.textContent = "X";
				boardState[box.id - 1] = "X";
				if (winner("X")) {
					message.textContent = `${p2} You are winner`;
					gameOver = true;
					disableBoard();
					return;

				}
				message.textContent = `${p1}, you're up"`;
				currentPlayer = 0;
			}
			if (!boardState.includes("") && !gameOver) {
				message.textContent = "It's a draw";
				gameOver = true;
				disableBoard();
			}
		})
	})

})

function winner(symbol) {
	for (let i = 0; i < winningCombos.length; i++) {
		let combo = winningCombos[i];
		if (boardState[combo[0]] === symbol && boardState[combo[1]] === symbol && boardState[combo[2]] === symbol) {
			return true;
		}
	}

}

function disableBoard() {
	boxes.forEach((box) => {
		box.style.pointerEvents = "none";
	});
}