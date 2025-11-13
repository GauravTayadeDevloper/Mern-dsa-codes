//your JS code here. If required.
let usersForm = document.querySelector(".users") ;
let board=document.querySelector(".board");
let player1 = document.getElementById("player-1");
let player2 = document.getElementById("player-2");
let btn = document.getElementById("btn");
let boxes = document.querySelectorAll("td");

btn.addEventListener("click",(e)=>{
	e.preventDefault();
	
	usersForm.style.display="none";
	board.style.display="flex";
	boxes.forEach((box)=>{
		box.addEventListener("click",()=>{
			box.textContent="O";
		})
	})
	
	
})