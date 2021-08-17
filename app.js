const quizResults = document.getElementById('quiz-results');
const quizButton = document.getElementById('quiz-button');
const quizCountEl = document.getElementById('quiz-count');
const failCountEl = document.getElementById('fails');
const passCountEl = document.getElementById('passes');
const resetButton = document.getElementById('reset-button');

import { countsAsAYes } from './utils.js';


let quizCount = 0;
let passCount = 0;
let failCount = 0;

quizButton.addEventListener('click', () => {
    let correctAnswers = 0;
    const userName = prompt('Hi! What is your name?');
    
    const userContinue = confirm(`Nice to meet you, ${userName}. Would you like to take the quiz?`);
    if (!userContinue) return;

    const responseA = prompt('Was ramen created in Japan, with no outside influence?');
    if (!countsAsAYes(responseA)) {
        correctAnswers++;
    }
    const responseB = prompt('Is Shio, also known as Salt Ramen, the oldest type of ramen?');
    if (countsAsAYes(responseB)) {
        correctAnswers++;
    }
    const responseC = prompt('Were the cooks in the first known ramen shop Japanese?');
    if (!countsAsAYes(responseC)) {
        correctAnswers++;
    }

    alert('All done! Check out your score below the quiz button.');

    if (correctAnswers === 3) {
            quizResults.textContent = `Wow, ${userName}! you got ${correctAnswers} out of 3 right. A+`;
            passCount++;
            quizButton.textContent = 'Quiz Me';
        }
        else {
            quizResults.textContent = `Give it another go, ${userName}! You got ${correctAnswers} out of 3 right.`;
            quizButton.textContent = 'Try Again';
            failCount++;
        }

    quizCount++;
    quizCountEl.textContent = quizCount;
    failCountEl.textContent = failCount;
    passCountEl.textContent = passCount;
})


resetButton.addEventListener('click', () => {
    quizCountEl.textContent = 0;
    failCountEl.textContent = 0;
    passCountEl.textContent = 0;
    quizButton.textContent = 'Quiz Me';
    quizResults.textContent = "";
})