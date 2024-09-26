// let counter = 0;
// let countdown = 10;
// let countdownInterval;

// const counterDisplay = document.querySelector('.counter-value');
// const countdownDisplay = document.querySelector('.countdown-value');
// const increaseButton = document.querySelector('.increase');
// const decreaseButton = document.querySelector('.decrease');
// const resetButton = document.querySelector('.reset');
// const startCountdownButton = document.querySelector('.start-countdown');

// increaseButton.addEventListener('click', () => {
//     counter++;
//     updateCounterDisplay();
// });

// decreaseButton.addEventListener('click', () => {
//     counter--;
//     updateCounterDisplay();
// });

// resetButton.addEventListener('click', () => {
//     counter = 0;
//     updateCounterDisplay();
// });

// startCountdownButton.addEventListener('click', startCountdown);

// function updateCounterDisplay() {
//     counterDisplay.textContent = counter;
// }

// function startCountdown() {
//     countdown = 10; // Reset countdown
//     updateCountdownDisplay();
//     clearInterval(countdownInterval); // Clear any existing intervals

//     countdownInterval = setInterval(() => {
//         if (countdown > 0) {
//             countdown--;
//             updateCountdownDisplay();
//         } else {
//             clearInterval(countdownInterval);
//             alert('Countdown finished!');
//         }
//     }, 1000);
// }

// function updateCountdownDisplay() {
//     countdownDisplay.textContent = countdown;
// }

// COUNTER

let counter = 0;
const DisplayCounter = document.getElementById("counterDisplay");

document.getElementById("increase").addEventListener("click", () => {
    counter += 1;
    DisplayCounter.textContent = counter;
});

document.getElementById("decrease").addEventListener("click", () => {
    if (counter > 0) { // Prevent decrementing below 0
        counter--;
        DisplayCounter.textContent = counter;
    }
});

document.getElementById("reset").addEventListener("click", () => {
    counter = 0;
    DisplayCounter.textContent = counter; // Fixed typo here
});


// countdown
 
let CountDown = 10;
let CountDownInterval; // Fixed spelling of "Interval"
const DisplayCountdown = document.getElementById("countdown-display");
const CustomInput = document.getElementById("countdowninput");

function StartCountDown() {
    if (CountDownInterval) clearInterval(CountDownInterval); // Fixed typo here
    DisplayCountdown.textContent = CountDown;
    CountDownInterval = setInterval(() => {
        CountDown--;
        DisplayCountdown.textContent = CountDown;
        if (CountDown <= 0) {
            clearInterval(CountDownInterval); // Fixed typo here
            DisplayCountdown.textContent = "Time Is Over";
        }
    }, 1000);
}

document.getElementById("start-countdown").addEventListener("click", () => {
    const CustomValue = parseInt(CustomInput.value);
    CountDown = CustomValue > 0 ? CustomValue : CountDown;
    StartCountDown();
});

document.getElementById("stop-countdown").addEventListener("click", () => {
    clearInterval(CountDownInterval); // Fixed typo here
});

document.getElementById("reset-countdown").addEventListener("click", () => {
    clearInterval(CountDownInterval); // Fixed typo here
    CountDown = 10;
    DisplayCountdown.textContent = CountDown;
});

