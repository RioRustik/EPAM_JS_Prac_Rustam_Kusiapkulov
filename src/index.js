import './styles/style.scss'

const contentVoices = document.querySelector('.contentVoices');
const contentSpeaker = document.querySelector('.contentSpeaker');
const contentStream = document.querySelector('.contentStream');

let nav = document.querySelectorAll('.barBlock');
let changeElementsPage;

for (var i = 0; i < nav.length; i++) {
    nav[i].addEventListener('click', navToggle)
}

function navToggle(event){
    let activeButton = event.target.closest('button')
    if (changeElementsPage) { 
        changeElementsPage.classList.remove('backlightitem');
    }
    changeElementsPage = activeButton;
    changeElementsPage.classList.add('backlightitem'); 

    if(changeElementsPage.classList.contains('voices')){
        contentVoices.classList.add("contentActive");
        contentSpeaker.classList.remove("contentActive");
        contentStream.classList.remove("contentActive");
    }
    if(changeElementsPage.classList.contains('speaker')){
        contentSpeaker.classList.add("contentActive");
        contentVoices.classList.remove("contentActive");
        contentStream.classList.remove("contentActive");
    }
    if(changeElementsPage.classList.contains('stream')){
        contentStream.classList.add("contentActive");
        contentVoices.classList.remove("contentActive");
        contentSpeaker.classList.remove("contentActive");
    }
}