const updateWordBtn = document.querySelector("#updateWordBtn");
const statesArray = [
  {
    word: 'start',
    presentThird: 'starts',
    past: 'started',
    classList: '',
    translateRus: 'начать'
  },
  {
    word: 'love',
    presentThird: 'loves',
    past: 'loved',
    classList: '',
    translateRus: 'любить'
  },
  {
    word: 'have',
    presentThird: 'has',
    past: 'had',
    classList: 'red',
    translateRus: 'иметь'
  },
  {
    word: 'do',
    presentThird: 'does',
    past: 'did',
    classList: 'red',
    translateRus: 'делать'
  },
  {
    word: 'say',
    presentThird: 'says',
    past: 'sayd',
    classList: 'red',
    translateRus: 'говорить'
  },
  {
    word: 'go',
    presentThird: 'goes',
    past: 'went',
    classList: 'red',
    translateRus: 'идти'
  },
  {
    word: 'get',
    presentThird: 'gets',
    past: 'got',
    classList: 'red',
    translateRus: 'получать'
  },
  // {
  //   word: 'make',
  //   presentThird: 'makes',
  //   past: 'made',
  //   classList: 'red',
  //   translateRus: 'сделать'
  // },
  // чтобы было i = 1-10
  {
    word: 'know',
    presentThird: 'knows',
    past: 'knew',
    classList: 'red',
    translateRus: 'знать'
  },
  {
    word: 'think',
    presentThird: 'thinks',
    past: 'thought',
    classList: 'red',
    translateRus: 'думать'
  },
  {
    word: 'take',
    presentThird: 'takes',
    past: 'took',
    classList: 'red',
    translateRus: 'брать'
  }
]
// red - неправильный глагол

updateWordBtn.addEventListener('click', (idx = 0) => {
  const futureQ = document.querySelector("#futureQ"),
    futureA = document.querySelector("#futureA"),
    futureN = document.querySelector("#futureN"),
    presentQ = document.querySelector("#presentQ"),
    presentAFirst = document.querySelector("#presentAFirst"),
    presentAThird = document.querySelector("#presentAThird"),
    presentN = document.querySelector("#presentN"),
    pastQ = document.querySelector("#pastQ"),
    pastA = document.querySelector("#pastA"),
    pastN = document.querySelector("#pastN"),
    idx = Math.floor(Math.random() * 11);

    
    // state.presentThird => чтобы манипулировать, надо перевести в класс. Затем:
    // if (state.word.substr(-1) !== 'e') {
    //   state.presentThird = `${testWord}es`;
    // }
    // state.presentThird = `${testWord}s`;
    // 
    // if (state.classList === '') {
    //   if (state.word.substr(-1) !== 'e') {
    //     state.past = `${testWord}ed`;
    //   }
    //   state.past = `${testWord}d`;
    // }
      
  const state = statesArray[idx];


  const irregularVerbsMainInTable = [futureQ, futureA, futureN, presentQ, presentAFirst, presentN],
    regularVerbsMainInTable = [...irregularVerbsMainInTable, pastQ, pastN],
    // allVerbsThirdInTable = [presentAThird],
    // regularVerbsPastInTable = [pastA],
    irregularVerbsPastInTable = [pastQ, pastA, pastN],
    irregularVerbsPaint = [...irregularVerbsMainInTable, presentAThird, ...irregularVerbsPastInTable];
      
    paintWord = () => {
      irregularVerbsPaint.forEach(item => item.className = state.classList);
    }

    if (state.classList === 'red') {
      irregularVerbsMainInTable.forEach(item => item.textContent = state.word);
      presentAThird.textContent = state.presentThird;
      irregularVerbsPastInTable.forEach(item => item.textContent = state.past);
      paintWord();
    }

    if (state.classList === '') {
      regularVerbsMainInTable.forEach(item => item.textContent = state.word);
      presentAThird.textContent = state.presentThird;
      pastA.textContent = state.past;
      paintWord();
    }


  // 1. Проверить, надо ли зачёркивать слово перед указанием кто, если прошедшее время вопр. Форма. И надо ли заменять did на do в этом случае?(негатив)
  // 2. Сделать стейт классом. Это оптимизирует код. И менять содержимое, беря из псевдо-АПИ.

  
})