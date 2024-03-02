let loop;

let grid = document.querySelector(".grid");

let spamPlayer = document.querySelector(".player");

let tempo = document.querySelector(".timer");

let characters = [
    'amor1',
    'amor2',
    'amor3',
    'amor4',
    'amor5',
    'amor6',
    'amor7',
    'amor8',
    'amor9',
    'amor10',
];

function restartGame(){
    clearInterval(loop);
    grid.innerHTML = " ";
    tempo.innerHTML = "0";

    firstCard = "";
    secondCard = "";

    loadGame();
    startTimer();
}

document.querySelector("#restart").addEventListener("click", restartGame);


function returnLogin(){
    window.location = 'index.html'
}

function createElement(tag, className){
    let element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = "";
let secondCard = "";


function checkEndGame(){

    let disabledCards = document.querySelectorAll(".disabledCard")

    if (disabledCards.length == 20){
        clearInterval(this.loop)
        alert(`Parabéns, meu amor!\nSeu tempo foi: ${tempo.innerHTML} segundos.\nAh, te amo, tá? =)`)
    }

}


function checkCards(){
    let firstCharacter = firstCard.getAttribute("data-character");
    let secondCharacter = secondCard.getAttribute("data-character");

    if (firstCharacter == secondCharacter){

        firstCard.firstChild.classList.add("disabledCard")
        secondCard.firstChild.classList.add("disabledCard")

        firstCard = "";
        secondCard = "";

        checkEndGame(); 

    }else {
        setTimeout(()=>{

            firstCard.classList.remove('revealCard')
            secondCard.classList.remove('revealCard')

            firstCard = "";
            secondCard = "";

        }, 500)

    }
}

function revealCard({target}){

    if(target.parentNode.className.includes("revealCard")){
        return;
    }

    if (firstCard == ""){

        target.parentNode.classList.add("revealCard");
        firstCard = target.parentNode;
        
    }else if(secondCard == ""){

        target.parentNode.classList.add("revealCard");
        secondCard = target.parentNode;

        checkCards();

    }
}

function createCard(character){

    let card = createElement("div", "card");
    let front = createElement("div", "face front");
    let back = createElement("div", "face back");

    front.style.backgroundImage = `url('imagens/${character}.jpg'`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener("click", revealCard);

    card.setAttribute("data-character", character)

    return card;
}

function loadGame(){

    let duplicateCharacters = [ ...characters, ...characters]

    let shuffledArray = duplicateCharacters.sort(()=> Math.random() - 0.5);

    shuffledArray.forEach((character)=>{
        
        let card = createCard(character);
        grid.appendChild(card);

    });

}

function startTimer(){

    clearInterval(loop);
    loop = setInterval(() => {
        let currentTime = Number (tempo.innerHTML);
        tempo.innerHTML = currentTime + 1;
    }, 1000);

}

window.onload = () =>{

    let playerName = localStorage.getItem("player");

    spamPlayer.innerHTML = playerName;

    startTimer();
    loadGame();
    
}


