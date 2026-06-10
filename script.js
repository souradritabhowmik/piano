const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const notes = {
  'a': 261.63,
  'w': 277.18,
  's': 293.66,
  'e': 311.13,
  'd': 329.63,
  'f': 349.23,
  't': 369.99,
  'g': 392.00,
  'y': 415.30,
  'h': 440.00,
  'u': 466.16,
  'j': 493.88,
  'k': 523.25
};

function playNote(freq) {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = "sine";
  osc.frequency.value = freq;

  gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + 1);
}

document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();
  if (notes[key]) {
    playNote(notes[key]);
  }
});
