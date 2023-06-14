const STORE = [
    {
      question: 'When and where was the first World Cup played?',
      answers: [
        'Uruguay, 1930',
        'England, 1928',
        'Argentina, 1936',
        'Brazil, 1932',
        ],
      correctAnswer: 'Uruguay, 1930',
      alt: 'correct answer image',
      alti: 'incorrect answer image'
    },
    {
      question: 'The 2014 World Cup In Brazil Is The Most Expensive So Far.  It cost more than the previous five World Cup events combined.  What was the final cost?',
      answers: [
        '$7.5 Billion',
        '$6.0 Billion',
        '$11.5 Billion',
        '$15.0 Billion'
        ],
        correctAnswer: '$15.0 Billion',
        alt: 'correct answer image',
        alti: 'incorrect answer image'
    },
    {
      question: 'Which is the only country to have appeared in every tournament, 21 finals tournaments from 1930 to 2018',
      answers: [
        'Germany',
        'Argentina',
        'Brazil',
        'Italy'
        ],
        correctAnswer: 'Brazil',
        alt: 'correct answer image',
        alti: 'incorrect answer image'
    },
    {
      question: 'Which nation has reached the World Cup final three times, but never won?',
      answers: [
        'Netherlands',
        'Uruguay',
        'France',
        'Paraguay'
        ],
      correctAnswer: 'Netherlands',
      alt: 'correct answer image',
      alti: 'incorrect answer image'
    },
    {
      question: 'This blonde striker was West Germany\'s key attacker throughout the 1990s. He scored five goals for Germany at the 1994 World Cup finals. Which German legend are we talking about?',
      answers: [
        'Rudi Voeller',
        'Pierre Littbarski',
        'Jurgen Klinsmann',
        'Andreas Brehme'
        ],
      correctAnswer: 'Jurgen Klinsmann',
      alt: 'correct answer image',
      alti: 'incorrect answer image'
    },
    {
      question: 'When the Bafana Bafana were chosen as the hosts of the 2010 World Cup they became the first African nation to be given that honor. Which nation was it?',
      answers: [
        'Cameroon',
        'Egypt',
        'South Africa',
        'Morocco'
        ],
      correctAnswer: 'South Africa',
      alt: 'correct answer image',
      alti: 'incorrect answer image'
    },
    {
      question: 'Brazil won the 2002 Final by beating Germany 2-0, giving them how many World Cups titles?',
      answers: [
      'Six',
      'Three',
      'Five',
      'Four'
      ],
      correctAnswer: 'Five',
      alt: 'correct answer image',
      alti: 'incorrect answer image'
    },
    {
      question: 'Which country did Spain defeat in 2010 to win a World Cup?',
      answers: [
        'Argentina',
        'France',
        'Netherlands',
        'Brazil'
      ],
      correctAnswer: 'Netherlands',
      alt: 'correct answer image',
      alti: 'incorrect answer image'
    },
    {
      question: 'La Albiceleste were World Cup champions in 1978 and 1986. Their coach for the 2010 World Cup appeared in four consecutive World Cup finals tournaments 1982-86-90-94. Which country was it?',
      answers: [
      'Brazil',
      'Argentina',
      'Spain',
      'Germany'
      ],
      correctAnswer: 'Argentina',
      altc: 'correct answer image',
      alti: 'incorrect answer image'
    },
    {
      question: 'The 1998 Final was a shocker with a new country winning it for the first time, beating Brazil 3-0. Who was that country?',
      answers: [
        'France',
        'Spain',
        'Uruguay',
        'Mexico'
    ],
    correctAnswer: 'France',
    alt: 'correct answer image',
      alti: 'incorrect answer image'
    }
];

let img_randCorrect = ["https://i.imgur.com/kQdPXhn.jpg","https://i.imgur.com/6pDBAdA.jpg","https://i.imgur.com/2ql1Gea.jpg","https://i.imgur.com/igzkEm8.jpg","https://i.imgur.com/dkhgm88.jpg","https://i.imgur.com/Dupv89S.jpg","https://i.imgur.com/H7EwLJL.jpg","https://i.imgur.com/VdoRs10.jpg","https://i.imgur.com/nlk4O88.jpg","https://i.imgur.com/LscpjYr.jpg","https://i.imgur.com/Qr4ZZ1U.jpg","https://i.imgur.com/NafI0lF.jpg","https://i.imgur.com/fKcFO7u.jpg","https://i.imgur.com/50avAtr.jpg"];

let img_randWrong = ["https://i.imgur.com/2jsU04U.jpg","https://i.imgur.com/gHEsubQ.jpg","https://i.imgur.com/QYhV5UY.jpg","https://i.imgur.com/WXbn5RN.jpg","https://i.imgur.com/UedHZqb.jpg","https://i.imgur.com/u12R3DR.jpg","https://i.imgur.com/NJuHqEt.jpg","https://i.imgur.com/2p4Pupb.jpg","https://i.imgur.com/3DWTZqu.jpg","https://i.imgur.com/hatsfqC.jpg","https://i.imgur.com/EgHkvjc.jpg","https://i.imgur.com/CbZfqEm.jpg","https://i.imgur.com/WsZUrbC.jpg","https://i.imgur.com/tp8Mflu.jpg"];

let questionNumber = 0;
let correctAns=0;
let incorrectAns=0;


function startQuiz () {
  $('.quizStart').on('click', '.startButton', function (event) {
    $('.quizStart').remove();
    $('.forlogo').remove();
    $('.questionAnswerForm').css('display', 'block');
    $('.col-8').css('display', 'block');
    $('.questionNumber').text(1);
});
}

function renderQuestion () {
  $('.questionAnswerForm').html(generateQuestion());
}

function callRandomImage(){
  let i = Math.floor(13*Math.random());
  showCImage=img_randCorrect[i];
  showIImage=img_randWrong[i];
}


function generateQuestion () {
  if (questionNumber < STORE.length) {
    return `<div class="question-${questionNumber}">
    <h2>${STORE[questionNumber].question}</h2>
    <form>
    <fieldset role="radiogroup"><legend>answer choices</legend>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
    <span>${STORE[questionNumber].answers[0]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
    <span>${STORE[questionNumber].answers[1]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
    <span>${STORE[questionNumber].answers[2]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
    <span>${STORE[questionNumber].answers[3]}</span>
    </label>
    <button type="submit" class="submitButton">Submit</button>
    </fieldset>
    </form>
    </div>`;
    
} else {
    renderResults();
    restartQuiz();
    $('.questionNumber').text(10);
  }
}

function changeQuestionNumber () {
    questionNumber ++;
  $('.questionNumber').text(questionNumber+1);
}


function userSelectAnswer () {
  $('form').on('submit', function (event) {
    event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    if (answer === correctAnswer) {
      selected.parent().addClass('correct');
      ifAnswerIsCorrect();
    } else {
      selected.parent().addClass('wrong');
      ifAnswerIsWrong();
    }
  });
}

function ifAnswerIsCorrect () {
  userAnswerFeedbackCorrect();
  correctAns ++;
  updateScore();
}

//user feedback for correct answer
function userAnswerFeedbackCorrect () {
  callRandomImage()

  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"><img src="${showCImage}" alt="${STORE[questionNumber].alt}"/></div><button type=button class="nextButton">Next</button></div>`);
}

function ifAnswerIsWrong () {
  userAnswerFeedbackWrong();
  incorrectAns ++;
  updateScore();
}

//user feedback for wrong answer
function userAnswerFeedbackWrong () {
  callRandomImage()
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"><img src="${showIImage}" alt="${STORE[questionNumber].alti}"/></div><br>the correct answer is <span>"${correctAnswer}"</span></p><button type=button class="nextButton">Next</button></div>`);
}

//update score text
function updateScore () {
  $('.correctAns').text(correctAns);
  $('.incorrectAns').text(incorrectAns);
}


//when quiz is over this is the html for the page
function renderResults () {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><img src="https://i.imgur.com/Qv00kgF.jpg"/ alt="World Cup Trophy"><p><h3>FINAL SCORE:</p><p>Correct: ${correctAns}-${incorrectAns}: Incorect</h3></p><button class="restartButton">Restart Quiz</button></div>`);
    $('.col-8').remove();
  }

//what happens when the user clicks next
function renderNextQuestion () {
  $('main').on('click', '.nextButton', function (event) {
    changeQuestionNumber();
    renderQuestion();
    userSelectAnswer();
  });
}

//restart quiz function - reloads page to start quiz over
function restartQuiz () {
  $('main').on('click', '.restartButton', function (event) {
    location.reload();
  });
}

//run quiz functions
function createQuiz () {
  startQuiz();
  renderQuestion();
  userSelectAnswer();
  renderNextQuestion();
}

$(createQuiz);
