const updateWordBtn = document.querySelector("#updateWordBtn");

const statesArray = [
// classes: 'red' - неправильный глагол
  {
    word: 'start',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'начать'
  },
  {
    word: 'love',
    presentThird: '',
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
    presentThird: '',
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
    presentThird: '',
    past: 'got',
    classes: 'red',
    translateRus: 'получать'
  },
  {
    word: 'make',
    presentThird: '',
    past: 'made',
    classes: 'red',
    translateRus: 'сделать'
  },
  {
    word: 'know',
    presentThird: '',
    past: 'knew',
    classes: 'red',
    translateRus: 'знать'
  },
  {
    word: 'think',
    presentThird: '',
    past: 'thought',
    classes: 'red',
    translateRus: 'думать'
  },
  //10
  {
    word: 'take',
    presentThird: '',
    past: 'took',
    classes: 'red',
    translateRus: 'брать'
  },
  {
    word: 'see',
    presentThird: '',
    past: 'saw',
    classes: 'red',
    translateRus: 'видеть'
  },
  {
    word: 'come',
    presentThird: '',
    past: 'came',
    classes: 'red',
    translateRus: 'приходить'
  },
  {
    word: 'want',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'хотеть'
  },
  {
    word: 'look',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'смотреть'
  },
  {
    word: 'use',
    presentThird: '',
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
    presentThird: '',
    past: 'gave ',
    classes: 'red',
    translateRus: 'давать'
  },
  {
    word: 'tell',
    presentThird: '',
    past: 'told ',
    classes: 'red',
    translateRus: 'рассказать'
  },
  {
    word: 'work',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'работать'
  },
  // 20
  {
    word: 'call',
    presentThird: '',
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
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'нуждаться'
  },
  {
    word: 'feel',
    presentThird: '',
    past: 'felt',
    classes: 'red',
    translateRus: 'чувствовать'
  },
  {
    word: 'become',
    presentThird: '',
    past: 'became',
    classes: 'red',
    translateRus: 'становиться'
  },
  {
    word: 'leave',
    presentThird: '',
    past: 'left',
    classes: 'red',
    translateRus: 'уходить'
  },
  {
    word: 'put',
    presentThird: '',
    past: 'put',
    classes: 'red',
    translateRus: 'положить'
  },
  {
    word: 'mean',
    presentThird: '',
    past: 'meant',
    classes: 'red',
    translateRus: 'иметь ввиду'
  },
  {
    word: 'keep',
    presentThird: '',
    past: 'kept',
    classes: 'red',
    translateRus: 'держать'
  },
  // 30
  {
    word: 'let',
    presentThird: '',
    past: 'let',
    classes: 'red',
    translateRus: 'позволять'
  },
  {
    word: 'begin',
    presentThird: '',
    past: 'began',
    classes: 'red',
    translateRus: 'начать'
  },
  {
    word: 'seem',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'выглядеть, казаться'
  },
  {
    word: 'help',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'помогать'
  },
  {
    word: 'talk',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'говорить'
  },
  {
    word: 'turn',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'поворачиваться'
  },
  {
    word: 'show',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'показывать'
  },
  {
    word: 'hear',
    presentThird: '',
    past: 'heard',
    classes: 'red',
    translateRus: 'услышать'
  },
  {
    word: 'play',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'играть'
  },
  {
    word: 'run',
    presentThird: '',
    past: 'ran',
    classes: 'red',
    translateRus: 'бежать'
  },
  // 40
  {
    word: 'move',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'двигаться'
  },
  {
    word: 'like',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'нравиться'
  },
  {
    word: 'live',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'жить'
  },
  {
    word: 'believe',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'верить'
  },
  {
    word: 'hold',
    presentThird: '',
    past: 'held',
    classes: 'red',
    translateRus: 'держать'
  },
  {
    word: 'bring',
    presentThird: '',
    past: 'brought',
    classes: 'red',
    translateRus: 'приносить'
  },
  {
    word: 'happen',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'происходить, оказываться'
  },
  {
    word: 'write',
    presentThird: '',
    past: 'wrote',
    classes: 'red',
    translateRus: 'писать'
  },
  {
    word: 'provide',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'снабжать, предусматривать, предоставлять'
  },
  {
    word: 'sit',
    presentThird: '',
    past: 'sat',
    classes: 'red',
    translateRus: 'сидеть'
  },
  // 50
  {
    word: 'stand',
    presentThird: '',
    past: 'stood',
    classes: 'red',
    translateRus: 'стоять'
  },
  {
    word: 'lose',
    presentThird: '',
    past: 'lost',
    classes: 'red',
    translateRus: 'терять'
  },
  {
    word: 'pay',
    presentThird: '',
    past: 'paid',
    classes: 'red',
    translateRus: 'платить'
  },
  {
    word: 'meet',
    presentThird: '',
    past: 'met',
    classes: 'red',
    translateRus: 'встречать'
  },
  {
    word: 'include',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'включать(в смысле принадлежности к, например, общему количеству)'
  },
  {
    word: 'continue',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'продолжать'
  },
  {
    word: 'set',
    presentThird: '',
    past: 'set',
    classes: 'red',
    translateRus: 'устанавливать'
  },
  {
    word: 'learn',
    presentThird: '',
    past: 'learnt / learned',
    classes: 'red',
    translateRus: 'учиться'
  },
  {
    word: 'change',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'менять'
  },
  {
    word: 'lead',
    presentThird: '',
    past: 'led',
    classes: 'red',
    translateRus: 'вести'
  },
  // 60
  {
    word: 'understand',
    presentThird: '',
    past: 'understood',
    classes: 'red',
    translateRus: 'понимать'
  },
  {
    word: 'watch',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'смотреть'
  },
  {
    word: 'follow',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'следовать'
  },
  {
    word: 'stop',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'остановиться'
  },
  {
    word: 'create',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'создавать'
  },
  {
    word: 'speak',
    presentThird: '',
    past: 'spoke',
    classes: 'red',
    translateRus: 'говорить'
  },
  {
    word: 'read',
    presentThird: '',
    past: 'read',
    classes: 'red',
    translateRus: 'читать'
  },
  {
    word: 'allow',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'разрешать, позволять'
  },
  {
    word: 'add',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'добавлять'
  },
  {
    word: 'spend',
    presentThird: '',
    past: 'spent',
    classes: 'red',
    translateRus: 'тратить, проводить, израсходовать, уделять'
  },
  // 70
  {
    word: 'grow',
    presentThird: '',
    past: 'grew',
    classes: 'red',
    translateRus: 'расти, выращивать, отрастить, отрастать, увеличиваться'
  },
  {
    word: 'open',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'открывать'
  },
  {
    word: 'walk',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'ходить'
  },
  {
    word: 'win',
    presentThird: '',
    past: 'won',
    classes: 'red',
    translateRus: 'выигрывать'
  },
  {
    word: 'offer',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'предлагать'
  },
  {
    word: 'remember',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'помнить, вспоминать, поминать'
  },
  {
    word: 'consider',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'считать, размышлять, учитывать, рассматривать, считаться'
  },
  {
    word: 'appear',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'появляться, казаться, издаваться, возникать'
  },
  {
    word: 'buy',
    presentThird: '',
    past: 'bought',
    classes: 'red',
    translateRus: 'покупать'
  },
  {
    word: 'wait',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'ожидать, надеяться, быть готовым'
  },
  // 80
  {
    word: 'serve',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'служить'
  },
  {
    word: 'die',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'умирать'
  },
  {
    word: 'send',
    presentThird: '',
    past: 'sent',
    classes: 'red',
    translateRus: 'отправлять, передавать'
  },
  {
    word: 'expect',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'ожидать'
  },
  {
    word: 'build',
    presentThird: '',
    past: 'built',
    classes: 'red',
    translateRus: 'строить, создавать, нарастать'
  },
  {
    word: 'stay',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'оставаться'
  },
  {
    word: 'fall',
    presentThird: '',
    past: 'fell',
    classes: 'red',
    translateRus: 'падать, снижаться, перейти в какое-либо состояние'
  },
  {
    word: 'cut',
    presentThird: '',
    past: 'cut',
    classes: 'red',
    translateRus: 'резать, сокращать, кроить, сокращать путь'
  },
  {
    word: 'reach',
    presentThird: 'reach / reachs',
    past: '',
    classes: '',
    translateRus: 'добираться, достигать, связываться'
  },
  {
    word: 'kill',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'убивать, прекращать, сильно смешить'
  },
  // 90
  {
    word: 'remain',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'оставаться, сохраняться'
  },
  {
    word: 'suggest',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'подсказывать, предлагать, советовать, наводить на мысль'
  },
  {
    word: 'raise',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'поднимать, повышать, собирать финансовые средства, выращивать'
  },
  {
    word: 'pass',
    presentThird: 'pass',
    past: '',
    classes: '',
    translateRus: 'проходить, происходить, передавать'
  },
  {
    word: 'sell',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'продавать, торговть, продаваться, убеждать'
  },
  {
    word: 'require',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'требовать'
  },
  {
    word: 'report',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'сообщать, представлять, жаловаться'
  },
  {
    word: 'decide',
    presentThird: 'decide / decides',
    past: '',
    classes: '',
    translateRus: 'принимать решение, разрешить, определять, решить'
  },
  {
    word: 'acknowledge',
    presentThird: 'acknowledge',
    past: '',
    classes: '',
    translateRus: 'сознавать'
  },
  {
    word: 'realize',
    presentThird: '',
    past: '',
    classes: '',
    translateRus: 'понимать'
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
  idx = Math.floor(Math.random() * 100),
  state = statesArray[idx],
  verbsMainInTable = [futureQ, futureA, futureN, presentQ, presentAFirst, presentN, pastQ, pastN],
  allVerbs = [...verbsMainInTable, presentAThird, pastA],
  lastSymbol = state.word.substr(-1);

  paintWord = () => {allVerbs.forEach(item => item.className = `clickable ${state.classes}`)}
  
  let statePresentThird,
    statePast;
  switch (state.presentThird) {
    case '':
      statePresentThird = `${state.word}s`;
      break;
    default:
      statePresentThird = `${state.presentThird}`;
  }
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
    presentAThird.textContent = statePresentThird;
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