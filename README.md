# Heartbeat Sound

A free, gentle heartbeat sound you can loop all night, for sleep, comfort and focus. No sign-up, no ads, no tracking. Everything runs in your browser.

**Live demo:** https://umar8092.github.io/heartbeat-generator/

![The Heartbeat Sound app playing at 70 BPM with a 30 minute sleep timer](screenshots/playing.png)

## Features

- **A soft "lub-dub" sound** made in the browser with the Web Audio API. No audio files.
- **Plays continuously** until you pause it.
- **Heart rate from 40 to 200 BPM**, with presets: Resting 60, Calm 70, Puppy 100, Newborn 120, Excited 183. Change it while it plays.
- **Volume control.**
- **Sleep timer** (15 min, 30 min, 60 min or 8 hours) that fades the sound out gently at the end.
- **A heart that pulses in time** with each beat.
- **Keeps your screen awake** while playing (on browsers that support it), so a phone doesn't stop the sound.
- **Play and pause with the spacebar.**
- Remembers your heart rate and volume.

## Tips

- Phone and laptop speakers are weak at deep bass. The sound is tuned to work on small speakers, but headphones or a speaker with some bass will sound fuller.
- Browsers stop web audio when a phone screen locks. The screen stays on while the app plays, so leave the phone plugged in overnight.
- This is a comfort and sound tool, not a medical device.

## Run it yourself

No build step and no dependencies.

```bash
git clone https://github.com/umar8092/heartbeat-generator.git
```

Open `index.html` in your browser.

## How it works

`beat.js` builds each thump from two sine waves plus a short burst of filtered noise, softened by a low-pass filter. The "dub" follows the "lub" after a gap that shrinks as the heart rate rises. `script.js` schedules beats a fraction of a second ahead of the audio clock, so the rhythm stays steady and heart-rate changes take effect on the very next beat. A quick second tap on the play button is ignored, so a double tap can never start a second loop on top of the first.

To check the sound without speakers, open `test.html` in a browser. It renders the heartbeat offline and verifies that each beat has two thumps, the timing is right at several heart rates, nothing clips, and most of the energy is in the low frequencies.

## License

[MIT](LICENSE). Free to use, copy, modify and share. Made by [Muhammad Umar](https://github.com/umar8092).
