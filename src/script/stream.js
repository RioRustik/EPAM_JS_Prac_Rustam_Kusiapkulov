import { io } from "socket.io-client";

const streamBtn = document.getElementById('streamBtn');

function stream(){

    const socket = io.connect('https://voicy-speaker.herokuapp.com/');

    socket.on('audioMessage', function (audioChunks) {
        const audioBlob = new Blob(audioChunks);
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        audio.play();
    });
}

streamBtn.addEventListener ('click', stream);