var synth;
  window.onload = function(){
    synth = new Tone.Synth().toMaster();
  }

  // マウスを押した時のイベント処理
  window.addEventListener('mousedown', playSound);
  window.addEventListener('touchstart', playSound);
  function playSound(e) {
    // マウスのdata属性を取得
    var key = e.target.dataset.key;
    // keyがundefinedなら処理を実行しない
    if (typeof key === "undefined") return;  
    // 音名を代入する
    synth.triggerAttackRelease(key, '8n');
  }
document.addEventListener("keydown", e => {
  switch (e.key) {
    case "d":
      return synth.triggerAttack("C4");
    case "r":
      return synth.triggerAttack("C#4");
    case "f":
      return synth.triggerAttack("D4");
    case "t":
      return synth.triggerAttack("D#4");
    case "g":
      return synth.triggerAttack("E4");
    case "h":
      return synth.triggerAttack("F4");
    case "u":
      return synth.triggerAttack("F#4");
    case "j":
      return synth.triggerAttack("G4");
    case "i":
      return synth.triggerAttack("G#4");
    case "k":
      return synth.triggerAttack("A4");
    case "o":
      return synth.triggerAttack("A#4");
    case "l":
      return synth.triggerAttack("B4");
    case ";":
      return synth.triggerAttack("C5");
    default:
      return;
  }
});

document.addEventListener("keyup", e => {
  switch (e.key) {
    case "d":
    case "r":
    case "f":
    case "t":
    case "g":
    case "h":
    case "u":
    case "j":
    case "i":
    case "k":
    case "o":
    case "l":
    case ";":
       synth.triggerRelease(); 
  }
});




