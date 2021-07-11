const modes = document.querySelectorAll('section');
const navControls = document.querySelectorAll('.barBlock');
const navigation = document.querySelector('nav');

navigation.addEventListener('click',navToggle);

function navToggle(event){
    const activeButton = event.target.closest('button');
    const activeMode = activeButton.getAttribute('check-connect');

    if (!activeButton.classList.contains('backlightitem')) { 
        for (let i = 0; i < modes.length; i++) {
            toggleModeClass(modes[i], activeMode, 'contentActive');
            toggleModeClass(navControls[i], activeMode, 'backlightitem');
        }
    }
}

function toggleModeClass(elem, activeMode, className){
    elem.getAttribute('check-connect') === activeMode ? elem.classList.add(className) : elem.classList.remove(className);
}
