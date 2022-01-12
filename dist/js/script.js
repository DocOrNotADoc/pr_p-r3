const updateWordBtn = document.querySelector("#updateWordBtn");

const statesArray = [
// classes: 'red' - неправильный глагол
  {
    word: 'start',
    presentThird: 'starts',
    past: '',
    classes: '',
    translateRus: 'начать'
  },
  {
    word: 'love',
    presentThird: 'loves',
    past: '',
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
    past: 'said',
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
  //10
  {
    word: 'take',
    presentThird: 'takes',
    past: 'took',
    classes: 'red',
    translateRus: 'брать'
  },
]

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
  popupShow = document.querySelector(".popup-fill"),
  popupText = document.querySelector(".popup span"),
  popupCloseBtn = document.querySelector(".popup button"),
  idx = Math.floor(Math.random() * 11),
  state = statesArray[idx],
  verbsMainInTable = [futureQ, futureA, futureN, presentQ, presentAFirst, presentN, pastQ, pastN],
  allVerbs = [...verbsMainInTable, presentAThird, pastA],
  lastSymbol = state.word.substr(-1);

  paintWord = () => {allVerbs.forEach(item => item.className = `clickable ${state.classes}`)}
  
  let statePast;
  if (state.classes === 'red') {statePast = state.past}
  if (state.classes === '') {
    switch (lastSymbol) {
      case 'e':
        statePast = `${state.word}d`;
        break;
      default:
        statePast = `${state.word}ed`;
    }
  }

  changeCurrentWord = () => {
    verbsMainInTable.forEach(item => item.textContent = state.word);
    presentAThird.textContent = state.presentThird;
    pastA.textContent = statePast;
    paintWord();
    popupText.textContent = `To ${state.word} - ${state.translateRus}`;
  }
  changeCurrentWord();

  // calc scroll width
  calcScroll = () => {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let getScrollbarWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return getScrollbarWidth;
  }

  const hideScroll = () => {
    const scrollWidth = `${calcScroll()}px`;
  
    document.body.style.paddingRight = scrollWidth;
    document.body.style.overflow = 'hidden';
  }
  const showScroll = () => {
    document.body.style.paddingRight = '';
    document.body.style.overflow = 'visible';
  }

  allVerbs.forEach(
    (item => item.addEventListener('click', e => {
      popupShow.classList.add('active');
      hideScroll();
    }))
  )
  closeModal = () => {
    popupShow.classList.remove('active');
    showScroll();
  }
  

  popupShow.addEventListener('click', e => {
    if (e.target === popupShow) {
      closeModal();
    }
  })
  popupCloseBtn.addEventListener('click', e => {
    closeModal();
  })
  window.addEventListener('resize', closeModal);

}
updateWord();

updateWordBtn.addEventListener('click', e => updateWord());


// 1. Array TOP-100 and math.random to 100!!!