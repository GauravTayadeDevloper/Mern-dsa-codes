// JavaScript Instructions (Students write this part)
// Write JS in script.js
// 1) Select all filter buttons using document.querySelectorAll(".filter-btn")
// 2) Select all cards using document.querySelectorAll(".card")
// 3) Add click event on each button:
//  - Read button.getAttribute("data-filter")
//  - Remove "active" from all buttons, then add to clicked one
//  - Loop all cards:
//  * If filter === "all" → show card
//  * Else → compare card.getAttribute("data-category") with selected filter
//  If match → show
//  Else → hide (style.display = "none")

let filterBtn = document.querySelectorAll(".filter-btn");
let cards = document.querySelectorAll(".card");
filterBtn.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
     e.preventDefault();
     let a = btn.getAttribute("data-filter");
     filterBtn.forEach(btn=>{
        btn.classList.remove("active");
     })
     btn.classList.add("active");

     cards.forEach(card=>{
        if(a ==="all" || card.getAttribute("data-category") === a)
        {
            card.style.display="";
        }
        else
        {
            card.style.display="none";
        }
     })
    })
})