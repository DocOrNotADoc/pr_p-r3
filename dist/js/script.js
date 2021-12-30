
let state = {
  classlist: 'red',
  word: 'love',
  presentthird: 'loves',
  past: 'loved'
}

const futureQ = document.querySelector("#futureQ"),
  futureA = document.querySelector("#futureA"),
  futureN = document.querySelector("#futureN"),
  presentQ = document.querySelector("#presentQ"),
  presentAFirst = document.querySelector("#presentAFirst"),
  presentAThird = document.querySelector("#presentAFirst"),
  presentN = document.querySelector("#presentN"),
  pastQ = document.querySelector("#pastQ"),
  pastA = document.querySelector("#pastA"),
  pastN = document.querySelector("#pastN");

const irregularVerbsPaint = [futureQ, futureA, futureN, presentQ, presentAFirst, presentAThird, presentN, pastQ, pastA, pastN];

paintWord = () => {
  irregularVerbsPaint.forEach(item => item.className = state.classlist);
}
paintWord();