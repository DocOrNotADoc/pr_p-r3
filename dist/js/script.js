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
  {
    word: 'see',
    presentThird: 'sees',
    past: 'saw',
    classes: 'red',
    translateRus: 'видеть'
  },
  {
    word: 'come',
    presentThird: 'comes',
    past: 'came',
    classes: 'red',
    translateRus: 'приходить'
  },
  {
    word: 'want',
    presentThird: 'wants',
    past: '',
    classes: '',
    translateRus: 'хотеть'
  },
  {
    word: 'look',
    presentThird: 'looks',
    past: '',
    classes: '',
    translateRus: 'смотреть'
  },
  {
    word: 'use',
    presentThird: 'uses',
    past: '',
    classes: '',
    translateRus: 'использовать'
  },
  {
    word: 'find',
    presentThird: 'find',
    past: 'found ',
    classes: 'red',
    translateRus: 'находить'
  },
  {
    word: 'give',
    presentThird: 'gives',
    past: 'gave ',
    classes: 'red',
    translateRus: 'давать'
  },
  {
    word: 'tell',
    presentThird: 'tells',
    past: 'told ',
    classes: 'red',
    translateRus: 'рассказать'
  },
  {
    word: 'work',
    presentThird: 'works',
    past: '',
    classes: '',
    translateRus: 'работать'
  },
  // 20
  {
    word: 'call',
    presentThird: 'calls',
    past: '',
    classes: '',
    translateRus: 'звонить, называть, вызывать, звать, призывать, звонить по телефону, обзывать, окликать, кликать, считать, созывать, заходить'
  },
  {
    word: 'try',
    presentThird: 'try',
    past: '',
    classes: '',
    translateRus: 'пытаться'
  },
  {
    word: 'ask',
    presentThird: 'ask',
    past: '',
    classes: '',
    translateRus: 'спросить'
  },
  {
    word: 'need',
    presentThird: 'need',
    past: '',
    classes: '',
    translateRus: 'нуждаться'
  },
  {
    word: 'feel',
    presentThird: 'feel',
    past: 'felt',
    classes: 'red',
    translateRus: 'чувствовать'
  },
  {
    word: 'become',
    presentThird: 'becomes',
    past: 'became',
    classes: 'red',
    translateRus: 'становиться'
  },
  {
    word: 'leave',
    presentThird: 'leaves',
    past: 'left',
    classes: 'red',
    translateRus: 'уходить'
  },
  {
    word: 'put',
    presentThird: 'puts',
    past: 'put',
    classes: 'red',
    translateRus: 'положить'
  },
  {
    word: 'mean',
    presentThird: 'means',
    past: 'meant',
    classes: 'red',
    translateRus: 'иметь ввиду'
  },
  {
    word: 'keep',
    presentThird: 'keeps',
    past: 'kept',
    classes: 'red',
    translateRus: 'держать'
  },
  // 30
  {
    word: 'let',
    presentThird: 'lets',
    past: 'let',
    classes: 'red',
    translateRus: 'позволять'
  },
  {
    word: 'begin',
    presentThird: 'begins',
    past: 'began',
    classes: 'red',
    translateRus: 'начать'
  },
  {
    word: 'seem',
    presentThird: 'seems',
    past: '',
    classes: '',
    translateRus: 'выглядеть, казаться'
  },
  {
    word: 'help',
    presentThird: 'helps',
    past: '',
    classes: '',
    translateRus: 'помогать'
  },
  {
    word: 'talk',
    presentThird: 'talks',
    past: '',
    classes: '',
    translateRus: 'говорить'
  },
  {
    word: 'turn',
    presentThird: 'turns',
    past: '',
    classes: '',
    translateRus: 'поворачиваться'
  },
  {
    word: 'show',
    presentThird: 'shows',
    past: '',
    classes: '',
    translateRus: 'показывать'
  },
  {
    word: 'hear',
    presentThird: 'hears',
    past: 'heard',
    classes: 'red',
    translateRus: 'услышать'
  },
  {
    word: 'play',
    presentThird: 'plays',
    past: '',
    classes: '',
    translateRus: 'играть'
  },
  {
    word: 'run',
    presentThird: 'runs',
    past: 'ran',
    classes: 'red',
    translateRus: 'бежать'
  },
  // 40
  {
    word: 'move',
    presentThird: 'moves',
    past: '',
    classes: '',
    translateRus: 'двигаться'
  },
  {
    word: 'like',
    presentThird: 'likes',
    past: '',
    classes: '',
    translateRus: 'нравиться'
  },
  {
    word: 'live',
    presentThird: 'lives',
    past: '',
    classes: '',
    translateRus: 'жить'
  },
  {
    word: 'believe',
    presentThird: 'believes',
    past: '',
    classes: '',
    translateRus: 'верить'
  },
  {
    word: 'hold',
    presentThird: 'holds',
    past: 'held',
    classes: 'red',
    translateRus: 'держать'
  },
  {
    word: 'bring',
    presentThird: 'brings',
    past: 'brought',
    classes: 'red',
    translateRus: 'приносить'
  },
  {
    word: 'happen',
    presentThird: 'happens',
    past: '',
    classes: '',
    translateRus: 'происходить, оказываться'
  },
  {
    word: 'write',
    presentThird: 'writes',
    past: 'wrote',
    classes: 'red',
    translateRus: 'писать'
  },
  {
    word: 'provide',
    presentThird: 'provides',
    past: '',
    classes: '',
    translateRus: 'снабжать, предусматривать, предоставлять'
  },
  {
    word: 'sit',
    presentThird: 'sits',
    past: 'sat',
    classes: 'red',
    translateRus: 'сидеть'
  },
  // 50
  {
    word: 'stand',
    presentThird: 'stands',
    past: 'stood',
    classes: 'red',
    translateRus: 'стоять'
  },
  {
    word: 'lose',
    presentThird: 'loses',
    past: 'lost',
    classes: 'red',
    translateRus: 'терять'
  },
  {
    word: 'pay',
    presentThird: 'pays',
    past: 'paid',
    classes: 'red',
    translateRus: 'платить'
  },
  {
    word: 'meet',
    presentThird: 'meets',
    past: 'met',
    classes: 'red',
    translateRus: 'встречать'
  },
  {
    word: 'include',
    presentThird: 'includes',
    past: '',
    classes: '',
    translateRus: 'включать(в смысле принадлежности к, например, общему количеству)'
  },
  {
    word: 'continue',
    presentThird: 'continues',
    past: '',
    classes: '',
    translateRus: 'продолжать'
  },
  {
    word: 'set',
    presentThird: 'sets',
    past: 'set',
    classes: 'red',
    translateRus: 'устанавливать'
  },
  {
    word: 'learn',
    presentThird: 'learns',
    past: 'learnt / learned',
    classes: 'red',
    translateRus: 'учиться'
  },
  {
    word: 'change',
    presentThird: 'changes',
    past: '',
    classes: '',
    translateRus: 'менять'
  },
  {
    word: 'lead',
    presentThird: 'leads',
    past: 'led',
    classes: 'red',
    translateRus: 'вести'
  },
  // 60
  {
    word: 'lead',
    presentThird: 'leads',
    past: 'led',
    classes: 'red',
    translateRus: 'вести'
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
  idx = Math.floor(Math.random() * 21),
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
    popupText.textContent = `To ${state.word} - ${state.translateRus}.`;
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
// 2. Readme.md и ссылка на него в футере