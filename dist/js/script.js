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
    pastN = document.querySelector("#pastN");

  idx = Math.floor(Math.random() * 11);

  const state = statesArray[idx];
  // console.log(state);

  const irregularVerbsMainInTable = [futureQ, futureA, futureN, presentQ, presentAFirst, presentN],
    regularVerbsMainInTable = [...irregularVerbsMainInTable, pastQ, pastN],
    // regularVerbsThirdInTable = [presentAThird],
    // regularVerbsPastInTable = [pastA],
    irregularVerbsPastInTable = [pastQ, pastA, pastN];

  // Далее надо будет зафигачить innerHTTML глаголы. 
  // Сначала Test
  // Потом regular
  // Потом irregular, и разобраться со словом перед whowhat

  // => если неправильный, добавлять opasity .3 и перечёркивать слово перед whowhat
  // там ведь так и надо???

  const irregularVerbsPaint = [futureQ, futureA, futureN, presentQ, presentAFirst, presentAThird, presentN, pastQ, pastA, pastN];
  
  paintWord = () => {
    irregularVerbsPaint.forEach(item => item.className = state.classList);
  }
  paintWord();
})