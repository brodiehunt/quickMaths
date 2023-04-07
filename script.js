function openTab(event, contentToOpen) {
  const tabLinks = document.querySelectorAll('.nav-link');
  const tabContent = document.querySelectorAll('.section-container');
  const tabClicked = event.target;
  const newTabOpen = document.getElementById(contentToOpen);

  tabLinks.forEach((link) => {
    link.classList.remove('active');
  })

  tabContent.forEach((tab) => {
    tab.style.display = 'none';
  })

  tabClicked.classList.add('active');
  newTabOpen.style.display = 'block';
}

function getAddition() {
  const questionContainer = document.querySelector('.question-container-add');
  const answerContainer = document.querySelector('.answer-container-add');
  const answerButton = document.querySelector('.reveal-answer-add');
  const firstNum = Math.ceil(Math.random() * 300);
  const secondNum = Math.ceil(Math.random() * 300);

  const answer = firstNum + secondNum;

  answerButton.addEventListener('click', () => {
    answerContainer.style.display = 'block';
    answerButton.style.display = 'none';
  })

  answerButton.style.display = 'block';
  questionContainer.innerHTML = `What is <span>${firstNum}</span> plus <span>${secondNum}</span>?`

  answerContainer.innerHTML = `The answer is <span>${answer}</span>!`
  answerContainer.style.display = 'none';
}

function getSubtraction() {
  const questionContainer = document.querySelector('.question-container-sub');
  const answerContainer = document.querySelector('.answer-container-sub');
  const answerButton = document.querySelector('.reveal-answer-sub');
  const firstNum = Math.ceil(Math.random() * 300);
  const secondNum = Math.ceil(Math.random() * firstNum);

  const answer = firstNum - secondNum;

  answerButton.addEventListener('click', () => {
    answerContainer.style.display = 'block';
    answerButton.style.display = 'none';
  })

  answerButton.style.display = 'block';
  questionContainer.innerHTML = `What is <span>${firstNum}</span> minus <span>${secondNum}</span>?`

  answerContainer.innerHTML = `The answer is <span>${answer}</span>!`
  answerContainer.style.display = 'none';
}

function getMultiplication() {
  const questionContainer = document.querySelector('.question-container-mult');
  const answerContainer = document.querySelector('.answer-container-mult');
  const answerButton = document.querySelector('.reveal-answer-mult');
  const firstNum = Math.ceil(Math.random() * 15);
  const secondNum = Math.ceil(Math.random() * 15);

  const answer = firstNum * secondNum;

  answerButton.addEventListener('click', () => {
    answerContainer.style.display = 'block';
    answerButton.style.display = 'none';
  })

  answerButton.style.display = 'block';
  questionContainer.innerHTML = `What is <span>${firstNum}</span> times <span>${secondNum}</span>?`

  answerContainer.innerHTML = `The answer is <span>${answer}</span>!`
  answerContainer.style.display = 'none';
}
