window.addEventListener('load', () => {
  function formatTime(time) {
    return time < 10 ? '0' + time : time;
  }
  function updateClock() {
    let date = new Date();
    let dayNumber = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let ampm = hour >= 12 ? 'PM' : 'AM';
    let seconds = date.getSeconds();
    let dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    document.getElementById('day').textContent = dayNames[dayNumber];
    document.getElementById('hour').textContent = formatTime(hour);
    document.getElementById('minute').textContent = formatTime(minute);
    document.getElementById('seconds').textContent = formatTime(seconds);
    document.getElementById('ampm').textContent = ampm;

    setTimeout(updateClock, 1000);
  }
  updateClock();
});

// window.addEventListener('load', calculateTime);
