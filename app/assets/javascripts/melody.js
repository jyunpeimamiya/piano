var melody_synth = new Tone.Synth().toMaster();
var tone_texts = {
  "ド": "C4",
  "レ": "D4",
  "ミ": "E4",
  "ファ": "F4",
  "ソ": "G4",
  "ラ": "A4",
  "シ": "B4",
  "ー": null
}
function addMelody(time, note) {
    melody_synth.triggerAttackRelease(note, '8n', time);
}

Tone.Transport.bpm.value = 140

function play_music() {
  var melody_data = [];
  var score = document.getElementById('score');
  var score_source = score.value
  while (score_source.length > 0) {
    for(text in tone_texts){
      if (score_source.indexOf(text) == 0) {
        melody_data.push(tone_texts[text]);
        break;
      }
    }
    score_source = score_source.slice(1);
  }
  var melody = new Tone.Sequence(addMelody, melody_data).start();
  Tone.Transport.start();
}