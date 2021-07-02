import './styles/style.scss'

const voices = document.querySelector('.voices');
const speaker = document.querySelector('.speaker');
const stream = document.querySelector('.stream');

const contentVoices = document.querySelector('.contentVoices');
const contentSpeaker = document.querySelector('.contentSpeaker');
const contentStream = document.querySelector('.contentStream');

voices.onclick = function () {

    contentVoices.classList.remove("contentInactive");
    contentSpeaker.classList.remove("contentActive");
    contentStream.classList.remove("contentActive");
    contentSpeaker.classList.add("contentInactive");
    contentStream.classList.add("contentInactive");
    contentVoices.classList.add("contentActive");

    voices.classList.add("backlightitem");
    speaker.classList.remove("backlightitem");
    stream.classList.remove("backlightitem");

};

speaker.onclick = function () {

    contentSpeaker.classList.remove("contentInactive");
    contentStream.classList.remove("contentActive");
    contentVoices.classList.remove("contentActive");
    contentVoices.classList.add("contentInactive");
    contentStream.classList.add("contentInactive");
    contentSpeaker.classList.add("contentActive");

    speaker.classList.add("backlightitem");
    voices.classList.remove("backlightitem");
    stream.classList.remove("backlightitem");
};

stream.onclick = function () {

    contentStream.classList.remove("contentInactive");
    contentSpeaker.classList.remove("contentActive");
    contentVoices.classList.remove("contentActive");
    contentVoices.classList.add("contentInactive");
    contentSpeaker.classList.add("contentInactive");
    contentStream.classList.add("contentActive");

    stream.classList.add("backlightitem");
    voices.classList.remove("backlightitem");
    speaker.classList.remove("backlightitem");
};