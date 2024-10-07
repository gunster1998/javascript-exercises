// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
const paragraphRed = document.createElement("p")
paragraphRed.textContent = "Привет, я рыжий!"
paragraphRed.style.cssText = "color:red"
const headingBlue = document.createElement("h3")
headingBlue.textContent = "Я синий h3"
headingBlue.style.cssText = "color:blue"
const divBlack = document.createElement("div")
divBlack.style.cssText = "background:pink; border-box: 2px solid;"
divBlack.id = "divBlackId"
const headingIdiv = document.createElement("h1")
headingIdiv.textContent = "Я в div"
const paragraphDivBlack = document.createElement('p')
paragraphDivBlack.textContent = "Я ТОЖЕ!" 
container.appendChild(content);
container.appendChild(paragraphRed)
container.appendChild(headingBlue)
document.body.appendChild(divBlack)
divBlackId.appendChild(headingIdiv)
divBlackId.appendChild(paragraphDivBlack)
const btn = document.querySelector("#btn")
btn.addEventListener("click", function(e){
    e.target.style.background = "blue"
})

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click",()=> {
        alert(button.id);
    })
})