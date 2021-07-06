import './styles/style.scss';

const sectionAll = document.querySelectorAll('section');
const nav = document.querySelectorAll('.barBlock');
let changeElementsPage;
let activeButtonCheck = '';
let repeatedButtonPress = true;

for (let i = 0; i < nav.length; i++) {
    nav[i].addEventListener('click', navToggle);
}

function navToggle(event){
    let activeButton = event.target.closest('button');

    if (changeElementsPage) { 
        changeElementsPage.classList.remove('backlightitem');
    }
    changeElementsPage = activeButton;
    changeElementsPage.classList.add('backlightitem');

    if(activeButtonCheck == activeButton.getAttribute('checkСonnect')){
        repeatedButtonPress = false;
    }

    for (let j = 0; j < sectionAll.length; j++) {
        if((sectionAll[j].classList.contains('contentActive') 
        || sectionAll[j].getAttribute('checkСonnect') == activeButton.getAttribute('checkСonnect'))
        && repeatedButtonPress){
            sectionAll[j].classList.toggle('contentActive');
        }
    }

    repeatedButtonPress = true;
    activeButtonCheck = activeButton.getAttribute('checkСonnect');
}