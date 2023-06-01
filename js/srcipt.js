const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');

const infoBtn = document.querySelector('.info');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.close');

let countTime;
let minutes = 0;
let seconds = 0;
let timeArr = [];

const handleStart = () => {
	clearInterval(countTime);
	time.style.visibility = 'hidden';

	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++;
			stopwatch.textContent = `${minutes}:0${seconds}`;
		} else if (seconds >= 9 && seconds < 59) {
			seconds++;
			stopwatch.textContent = `${minutes}:${seconds}`;
		} else {
			minutes++;
			seconds = 0;
			stopwatch.textContent = `${minutes}:00`;
		}
	}, 200);
};
const handlePause = () => {
	clearInterval(countTime);
};

const handleStop = () => {
	// clearInterval(countTime);
	time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`;

	if (stopwatch.textContent !== '0:00') {
		time.style.visibility = 'visible';
		timeArr.push(stopwatch.textContent);
		console.log(timeArr);
	}

	clearStuff();
};
const handleClear = () => {
	time.style.visibility = 'hidden';
	timeArr = [];
	clearStuff();
};

const clearStuff = () => {
	seconds = 0;
	minutes = 0;
	timeList.textContent = '';
	clearInterval(countTime);
	stopwatch.textContent = `0:00`;
};
const showHistory = () => {
	timeList.textContent = '';
	let num = 1;
	timeArr.forEach(time => {
		const newTime = document.createElement('li');
		newTime.innerHTML = `Pomiar nr ${num++}: <span>${time}</span>`
		timeList.append(newTime)
	})
}


startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleClear);
historyBtn.addEventListener('click', showHistory)