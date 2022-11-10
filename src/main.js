import './style.css';
import { fillData, cleanPage } from '../utils/updateUI';
import Swal from 'sweetalert2';

const BASE_URL = 'https://api.exchangerate.host/latest';

const searchBtn = document.getElementById('find-button');

searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const CURRENCY = document.getElementById('currency-input').value.toUpperCase();
  if (!CURRENCY) {
    cleanPage();
    return Swal.fire({
      title: 'Opss...',
      text: 'Você precisa passar uma moeda',
      icon: 'error',
      confirmButtonText: 'Cool',
  })
  }
  fetch(`${BASE_URL}?base=${CURRENCY}`)
    .then((response) => response.json())
    .then((data) => {
      if (CURRENCY !== data.base) {throw new Error('Moeda não existente');}
      const { rates } = data;
      const keys = Object.keys(rates);
      const values = Object.values(rates);
      fillData(keys, values);
      const title = document.getElementById('title-container');
      title.innerHTML = `Valores referentes a 1 ${CURRENCY}`;
    })
    .catch((error) => {
      cleanPage();
      return Swal.fire({
      title: 'Opss...',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    })
  });
});
