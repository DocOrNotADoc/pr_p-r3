const updateWordBtn = document.querySelector("#updateWordBtn");
const statesArray = [
  {
    word: 'start',
    presentThird: 'starts',
    past: 'started',
    classes: '',
    translateRus: 'начать'
  },
  {
    word: 'love',
    presentThird: 'loves',
    past: 'loved',
    classes: '',
    translateRus: 'любить'
  },
  {
    word: 'have',
    presentThird: 'has',
    past: 'had',
    classes: 'red',
    translateRus: 'иметь'
  },
  {
    word: 'do',
    presentThird: 'does',
    past: 'did',
    classes: 'red',
    translateRus: 'делать'
  },
  {
    word: 'say',
    presentThird: 'says',
    past: 'sayd',
    classes: 'red',
    translateRus: 'говорить'
  },
  {
    word: 'go',
    presentThird: 'goes',
    past: 'went',
    classes: 'red',
    translateRus: 'идти'
  },
  {
    word: 'get',
    presentThird: 'gets',
    past: 'got',
    classes: 'red',
    translateRus: 'получать'
  },
  {
    word: 'make',
    presentThird: 'makes',
    past: 'made',
    classes: 'red',
    translateRus: 'сделать'
  },
  {
    word: 'know',
    presentThird: 'knows',
    past: 'knew',
    classes: 'red',
    translateRus: 'знать'
  },
  {
    word: 'think',
    presentThird: 'thinks',
    past: 'thought',
    classes: 'red',
    translateRus: 'думать'
  },
  {
    word: 'take',
    presentThird: 'takes',
    past: 'took',
    classes: 'red',
    translateRus: 'брать'
  }
]
// red - неправильный глагол
updateWord = () => {
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
  idx = Math.floor(Math.random() * 11),
  state = statesArray[idx],
  irregularVerbsMainInTable = [futureQ, futureA, futureN, presentQ, presentAFirst, presentN],
  regularVerbsMainInTable = [...irregularVerbsMainInTable, pastQ, pastN],
  // allVerbsThirdInTable = [presentAThird],
  // regularVerbsPastInTable = [pastA],
  irregularVerbsPastInTable = [pastQ, pastA, pastN],
  irregularVerbsPaint = [...irregularVerbsMainInTable, presentAThird, ...irregularVerbsPastInTable];

  paintWord = () => {
    irregularVerbsPaint.forEach(item => item.className = `clickable ${state.classes}`);
  }

  // state.presentThird => чтобы манипулировать, надо перевести в класс. Затем:
  // if (state.word.substr(-1) !== 'e') {
  //   state.presentThird = `${testWord}es`;
  // }
  // if (state.word.substr(-1) === 'e') {
  //   state.presentThird = `${testWord}s`;
  // }
  // 
  // if (state.classes === '') {
  //   if (state.word.substr(-1) !== 'e') {
  //     state.past = `${testWord}ed`;
  //   }
  //   if (state.word.substr(-1) === 'e') {
  //     state.past = `${testWord}d`;
  //   }
  // }

  switch (state.classes) {
    case  '':
      irregularVerbsMainInTable.forEach(item => item.textContent = state.word);
      presentAThird.textContent = state.presentThird;
      irregularVerbsPastInTable.forEach(item => item.textContent = state.past);
      paintWord();
      break;
    case 'red':
      regularVerbsMainInTable.forEach(item => item.textContent = state.word);
      presentAThird.textContent = state.presentThird;
      pastA.textContent = state.past;
      paintWord();
      break;
    default:
      console.log("Ooops...");
  }
}
updateWord();

updateWordBtn.addEventListener('click', (e) => updateWord());

// 4. Сделать по клику на глагол всплывающее мини окошко с переводом .popup
// 5. При клике вне окошка и на крестик закрывать его