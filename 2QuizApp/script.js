// Variables
const quiz = document.getElementById('quiz')
  aText = document.getElementById("a_text"),
  bText = document.getElementById("b_text"),
  cText = document.getElementById("c_text"),
  dText = document.getElementById("d_text"),
  questionEl = document.getElementById("question"),
  submitBtn = document.getElementById("submit"),
  answers = document.querySelectorAll(".answer");

// Questions
const quizData = [
  {
    question: "My birthday - ",
    a: "27-December",
    b: "17-December",
    c: "17-January",
    d: "27-January",
    correct: "c",
  },
  {
    question: "Dinamik dasturlash tili",
    a: "Javascript",
    b: "C",
    c: "Cobol",
    d: "C#",
    correct: "a",
  },
  {
    question: "Yangi yil kuni - ",
    a: "30-dekabr",
    b: "31-dekabr",
    c: "1-yanvar",
    d: "2-yanvar",
    correct: "c",
  },
  {
    question: "Chelovek Pauk - ",
    a: "Spider-man",
    b: "Batman",
    c: "Superman",
    d: "Hulk",
    correct: "a",
  },
  {
    question: "2-b 3 - c. 1 -  ",
    a: "d",
    b: "q",
    c: "e",
    d: "a",
    correct: "d",
  },
];

// App
let currentQuiz = 0;
const deSelectAnswers = () => {  
  answers.forEach((el) => {
    el.checked = false
  })
};

const loadQuiz = () => {
  deSelectAnswers()
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerHTML = currentQuizData.question;
  aText.innerText = currentQuizData.a;
  bText.innerText = currentQuizData.b;
  cText.innerText = currentQuizData.c;
  dText.innerText = currentQuizData.d;
};

loadQuiz();

const getSelected = () => {
  let answer = undefined;
  answers.forEach((el) => {
    
    if (el.checked) {
      answer = el.id;
    }
  });
  return answer;
};



let score = 0;
 

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct){
        score++
    }
    currentQuiz += 1;
    
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
      quiz.innerHTML = `<h2>Siz ${quizData.length} ta savoldan ${score} ball to'pladingiz </h2> 
      <button onclick="location.reload()">Qayta Ishlash</button>`
    }

}

});
