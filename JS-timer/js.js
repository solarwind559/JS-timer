window.onload = () => {
  var seconds = 00;
  var milisec = 00;
  var addMilisec = document.getElementById('milisec');
  var addSeconds = document.getElementById('seconds');
  var startBtn = document.getElementById('start');
  var stopBtn = document.getElementById('stop');
  var resetBtn = document.getElementById('reset');
  var interval = 0;

  startBtn.onclick = () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  }

  stopBtn.onclick = () => {
    clearInterval(interval);
  }

  resetBtn.onclick = () => {
    clearInterval(interval);
    milisec = "00";
    seconds = "00";
    addMilisec.innerHTML = milisec;
    addSeconds.innerHTML = seconds;
  }

  startTimer = () => {
    milisec++;

    if(milisec <= 9){
      addMilisec.innerHTML = "0" + milisec;      
    }

    if(milisec > 9){
      addMilisec.innerHTML = milisec;
    }

    if(milisec > 99){
      seconds++;
      addSeconds.innerHTML = "0" + seconds;
      milisec = 0;
      addMilisec.innerHTML = "0" + 0;
    }

    if(seconds > 9){
      addSeconds.innerHTML = seconds;
    }
  }
}