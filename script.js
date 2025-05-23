function padZero(num) {
  return num.toString().padStart(2, '0');
}

function updateDigits(containerId, value, doFlip = false) {
  const container = document.getElementById(containerId);
  const digits = container.querySelectorAll('.digit span');

  for (let i = 0; i < digits.length; i++) {
    const digitElem = digits[i];
    const newDigit = value[i];

    if (digitElem.textContent !== newDigit) {
      if (doFlip) {
        digitElem.classList.remove('flip');
        void digitElem.offsetWidth; 
        digitElem.textContent = newDigit;
        digitElem.classList.add('flip');
      } else {
        digitElem.textContent = newDigit;
      }
    }
  }
}

function updateDate() {
  const now = new Date();
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  const dayNum = now.getDate();
  const year = now.getFullYear();

  const formattedDate = `${dayName} - ${monthName} ${dayNum}, ${year}`;
  document.getElementById('dateDisplay').textContent = formattedDate;
}

function updateClock() {
  const now = new Date();

  const hours = padZero(now.getHours());
  const minutes = padZero(now.getMinutes());
  const seconds = padZero(now.getSeconds());

  updateDigits('hours', hours, true);
  updateDigits('minutes', minutes, true);
  updateDigits('seconds', seconds, false);

  updateDate();
}

updateClock();
setInterval(updateClock, 1000);
