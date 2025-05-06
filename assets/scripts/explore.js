// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  const textInput = document.getElementById('text-to-speak');
  const faceImage = document.querySelector('img');

  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = ''; // clear existing

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }

  // Load voices (some browsers need the 'voiceschanged' event)
  populateVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  talkButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    const selectedVoice = voices[voiceSelect.value];
    utterance.voice = selectedVoice;

    // While speaking: open mouth
    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };

    // When done: close mouth
    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };

    synth.speak(utterance);
  });
}