import './styles/style.scss'

const contentVoices = document.querySelector('.contentVoices');
const contentSpeaker = document.querySelector('.contentSpeaker');
const contentStream = document.querySelector('.contentStream');

let nav = document.querySelectorAll('.barBlock');
let elem;

for (var i = 0; i < nav.length; i++) {
    nav[i].addEventListener('click', navToggle)
}

function navToggle(event){
    let target = event.target.closest('button')
    if (elem) { 
        elem.classList.remove('backlightitem');
    }
    elem = target;
    elem.classList.add('backlightitem'); 

    if(elem.classList.contains('voices')){
        contentVoices.classList.add("contentActive");
        contentSpeaker.classList.remove("contentActive");
        contentStream.classList.remove("contentActive");
    }
    if(elem.classList.contains('speaker')){
        contentSpeaker.classList.add("contentActive");
        contentVoices.classList.remove("contentActive");
        contentStream.classList.remove("contentActive");
    }
    if(elem.classList.contains('stream')){
        contentStream.classList.add("contentActive");
        contentVoices.classList.remove("contentActive");
        contentSpeaker.classList.remove("contentActive");
    }
}