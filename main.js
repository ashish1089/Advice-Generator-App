import './style.css';

const adviceBtn = document.querySelector('#advice_btn');
const advice_id = document.querySelector('#advice__id');
const advice = document.querySelector('#advice');
const Api_URL = "https://api.adviceslip.com/advice";

async function getAdvice() {
  const response = await fetch(Api_URL);
  const advice = await response.json();
  return advice;
}

window.onload = getAdvice()
.then(data => {
  advice_id.textContent = data.slip.id;
  advice.textContent = `"${data.slip.advice}"`;
})

adviceBtn.addEventListener('click', () => {
  getAdvice()
    .then(data => {
      advice_id.textContent = data.slip.id;
      advice.textContent = `"${data.slip.advice}"`;
    }) 
})

