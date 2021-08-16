const quizResults = document.getElementById('quiz-results');
const quizButton = document.getElementById('quiz-button');
import { countsAsAYes } from './utils.js';

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

    alert('All done! Check out your score at the bottom of the page.');
    quizResults.textContent = `${userName}, you got ${correctAnswers} out of 3 right.`


})