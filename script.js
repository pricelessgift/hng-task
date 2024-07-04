

function updateTimeAndDay() {
    const currentTimeElement = document.getElementById('current-time');
    const currentDayElement = document.getElementById('current-day');

    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const utcDay = now.toUTCString().split(',')[0];

    currentTimeElement.textContent = `Current Time (UTC): ${utcTime}`;
    currentDayElement.textContent = `Current Day of the Week: ${utcDay}`;
}
updateTimeAndDay();
setInterval(updateTimeAndDay, 1000);