let ipt = document.querySelector(".loginInput");
let btn = document.querySelector(".loginButton");
let form = document.querySelector(".loginForm");

const campotxt = document.querySelector(".declarat");
const textdgt = 'Fiz esse joguinho bem simples, mas foi uma forma diferente que eu encontrei de demonstrar um pouquinho do amor gigante que sinto por você. Te amo, meu amor! <3';
const vlcd = 120;

async function digitarTexto (campotxt, textdgt,  vlcd) {
    for (let i = 0; i < textdgt.length; i++) {
        await new Promise (resolve => setTimeout(resolve, vlcd));
        campotxt.textContent += textdgt[i];
    }
}

function validateInput({ target }){
    if (target.value.length > 2){
        btn.removeAttribute('disabled');
        return;
    }
        btn.setAttribute('disabled', '')
    
}

function handleSubmit(){
    event.preventDefault();
    
    localStorage.setItem('player', ipt.value);
    window.location = 'game.html'
    
}

ipt.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit)

digitarTexto(campotxt, textdgt, vlcd)