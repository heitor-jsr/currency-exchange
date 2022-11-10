export function fillData(key, val) {
  key.forEach((element, index) => {
    const currContainer = document.getElementById('matching-currency');
    const newCurrContainer = document.createElement('div');
    newCurrContainer.setAttribute('class', 'currency-data')
    const newCurrName = document.createElement('p');
    newCurrName.innerHTML = element.toUpperCase();
    newCurrName.setAttribute('class', 'currency-name')
    const newVal = document.createElement('p');
    newVal.innerHTML = val[index].toFixed(2);
    newVal.setAttribute('class', 'currency-val')
    newCurrContainer.appendChild(newCurrName);
    newCurrContainer.appendChild(newVal)
    currContainer.appendChild(newCurrContainer);
  })
}

export function cleanPage() {
  const currContainer = document.getElementById('matching-currency');
  currContainer.innerHTML = '';
  const CURRENCY = document.getElementById('currency-input');
  CURRENCY.value = '';
}
