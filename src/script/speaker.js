import { io } from "socket.io-client";

const playButton = document.getElementById('playButton');
const activeClass = document.getElementsByClassName('recording');

let mediaRec = undefined;

function speaker(){

    if (activeClass.length > 0) {
        playButton.classList.toggle('recording');
        playButton.innerHTML = 'запись';
        mediaRec.stop();
    } else {
        playButton.classList.toggle('recording');
        playButton.innerHTML = 'остановить';
        handleSuccess();
    }
}
function handleSuccess(){ 
    const socket = io.connect('https://voicy-speaker.herokuapp.com/');

    navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(function(stream) {
        const options = {mimeType: 'audio/webm'};
        const mediaRecorder = new MediaRecorder(stream, options);
        mediaRec = mediaRecorder;
        const audioChunks = [];

        mediaRecorder.start();

        mediaRecorder.addEventListener("dataavailable", event => {
            audioChunks.push(event.data);
        });

        mediaRecorder.addEventListener("stop", () => {
            socket.emit('audioMessage', audioChunks);
        });
    });
};

playButton.addEventListener('click', speaker);
