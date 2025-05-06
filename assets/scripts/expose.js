// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('img');
  const hornAudio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;
    if (horn === 'air-horn') {
      hornImage.src = 'assets/images/air-horn.svg';
      hornAudio.src = 'assets/audio/air-horn.mp3';
    } else if (horn === 'car-horn') {
      hornImage.src = 'assets/images/car-horn.svg';
      hornAudio.src = 'assets/audio/car-horn.mp3';
    } else if (horn === 'party-horn') {
      hornImage.src = 'assets/images/party-horn.svg';
      hornAudio.src = 'assets/audio/party-horn.mp3';
    }
  });

  volumeSlider.addEventListener('input', () => {
    const volume = volumeSlider.value;
    hornAudio.volume = volume / 100;

    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  playButton.addEventListener('click', () => {
    hornAudio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}