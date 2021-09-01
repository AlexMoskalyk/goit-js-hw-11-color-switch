const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const firstElem = 0;
const lastElem = colors.length - 1;


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    startButton : document.querySelector('[data-action="start"]'),
    

    stopButton : document.querySelector('[data-action="stop"]')
}

refs.startButton.addEventListener('click', startBtnHandler)
refs.stopButton.addEventListener('click', stopBtnHandler)

let interval;

function startBtnHandler() {
    interval = setInterval(() => {
        randomIntegerFromInterval(firstElem, lastElem);
        document.body.style.backgroundColor = colors[randomIntegerFromInterval(firstElem, lastElem)]
                
    }, 1000)

    refs.startButton.setAttribute('disabled', 'disabled');
}

function stopBtnHandler(){
    refs.startButton.removeAttribute('disabled', 'disabled');
    clearInterval(interval)
}