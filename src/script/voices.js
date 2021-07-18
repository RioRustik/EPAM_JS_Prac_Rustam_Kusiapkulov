const voiceBlock = document.getElementById('voicesBtn');
const audioBlock = document.getElementById('audioBlock');

export async function voices() {

    audioBlock.innerHTML = "";
    const response = await fetch('https://voicy-speaker.herokuapp.com/voices');
    const data = await response.json();
    
    for (let i = data.length - 5; i < data.length; i++) {
        const audio = document.createElement('audio');
        const li = document.createElement('li');
        const audioBlob = new Blob([new Uint8Array(data[i].audioBlob[0].data).buffer]);
        const audioUrl = URL.createObjectURL(audioBlob);
     
        audio.controls = true;
        audio.src = audioUrl;

        li.appendChild(audio);
        audioBlock.appendChild(li);
    }
}

voiceBlock.addEventListener('click', voices);