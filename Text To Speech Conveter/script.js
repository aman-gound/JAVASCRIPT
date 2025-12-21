const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
const synth = window.speechSynthesis;

let isSpeaking = false;

function textToSpeech() {
  const text = textarea.value;
  if (!text) return;

  if (!synth.speaking) {
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
    isSpeaking = true;
    button.innerText = "Pause";
  } else {
    if (isSpeaking) {
      synth.pause();
      button.innerText = "Resume";
    } else {
      synth.resume();
      button.innerText = "Pause";
    }
    isSpeaking = !isSpeaking;
  }
}

setInterval(() => {
  if (!synth.speaking) {
    button.innerText = "Convert To Speech";
    isSpeaking = false;
  }
}, 100);

button.addEventListener("click", textToSpeech);
