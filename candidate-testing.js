

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ''
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';
let questions = ["Who was the first American woman in space?", "True or false: 5000 meters = 5 kilometers.", "(5 + 3)/2 * 10 = ?", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", "What is the minimum crew size for the ISS?"];
let correctAnswers = [ "Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswers = '';
let candidateAnswersArray = [];
let correctAnswerCnt = 0;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
const input = require('readline-sync')
  candidateName = input.question('What is your name?: ') 
}
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer // 
  for (let i = 0; i < questions.length; i++) {
      const input = require('readline-sync')
      candidateAnswers += input.question(questions[i]) + (',')    
  }
    candidateAnswersArray = candidateAnswers.split(',')
}
    
function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for (let i = 0; i < questions.length; i++) {
    console.log(` ${candidateAnswersArray[i]}` + ' ' + `${correctAnswers[i]}`)
}

console.log("\nCandidate Name: " + candidateName)
     for (let i = 0; i < questions.length; i++) {
       console.log(`${i+1}) ${questions[i]}\nYour Answer: ${candidateAnswersArray[i]}\nCorrect Answer: ${correctAnswers[i]}\n`)
        
       if (correctAnswers[i].toUpperCase() == candidateAnswersArray[i].toUpperCase()) {
        correctAnswerCnt +=1} 
  //console.log(correctAnswerCnt)
}
  let grade = correctAnswerCnt / 5 * 100
 
  let status
    if (grade >= 80) {
      status = "PASSED"
    } else {
      status = "FAILED"
    }

    console.log(`>>> Overall Grade: ${grade}% \(${correctAnswerCnt} of 5 responses correct\) <<<\n>>> Status: ${status} <<<`)
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
 console.log(`Greetings ${candidateName}\n`)

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};