// Create an instance of the AudioContext
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// Function to create a beat sound (kick drum-like sound)
function playBeat(time) {
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    // Set up the oscillator frequency (for kick drum)
    oscillator.frequency.setValueAtTime(150, time);
    oscillator.frequency.exponentialRampToValueAtTime(0.01, time + 0.5);

    // Set up the gain (volume) envelope
    gainNode.gain.setValueAtTime(1, time);
    gainNode.gain.exponentialRampToValueAtTime(0.01, time + 0.5);

    // Connect the oscillator to the gain node and the gain node to the output (audio context)
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    // Start the oscillator
    oscillator.start(time);
    // Stop the oscillator after 0.5 seconds
    oscillator.stop(time + 0.5);
}

// Function to schedule beats at regular intervals
function startBeats() {
    const bpm = 120; // Beats per minute
    const interval = 60 / bpm; // Interval in seconds between beats

    // Schedule 16 beats (4 bars of 4 beats each)
    for (let i = 0; i < 16; i++) {
        const time = audioCtx.currentTime + i * interval;
        playBeat(time);
    }
}

// Start the beat sequence
startBeats();
