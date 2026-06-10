#python logic that doesnt work on here
#can run locally i guess

import numpy as np
import sounddevice as sd

fs = 44100

notes = {
    'a': 261.63,  # C
    'w': 277.18,  # C#
    's': 293.66,  # D
    'e': 311.13,  # D#
    'd': 329.63,  # E
    'f': 349.23,  # F
    't': 369.99,  # F#
    'g': 392.00,  # G
    'y': 415.30,  # G#
    'h': 440.00,  # A
    'u': 466.16,  # A#
    'j': 493.88,  # B
    'k': 523.25   # C (next octave)
}

def play_note(freq, duration=0.5):
    t = np.linspace(0, duration, int(fs * duration), False)
    wave = np.sin(freq * t * 2 * np.pi)

    wave *= 0.3

    sd.play(wave, fs)
    sd.wait()

while True:
    key = input("Key: ").lower()

    if key == 'q':
        break

    if key in notes:
        play_note(notes[key])
