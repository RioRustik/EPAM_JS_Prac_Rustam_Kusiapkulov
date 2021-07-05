import './styles/style.scss';

const sectionAll = document.querySelectorAll('section');
const nav = document.querySelectorAll('.barBlock');
let changeElementsPage;
let activeButtonCheck = '';
let flag = true;

for (var i = 0; i < nav.length; i++) {
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
        flag=false;
    }

    for (let i = 0; i < sectionAll.length; i++) {
        if((sectionAll[i].classList.contains('contentActive') 
        || sectionAll[i].getAttribute('checkСonnect') == activeButton.getAttribute('checkСonnect'))
        && flag){
            sectionAll[i].classList.toggle('contentActive');
        }
    }
    flag = true;
    activeButtonCheck = activeButton.getAttribute('checkСonnect')
}