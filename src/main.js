//import _ from 'lodash';
import dec from 'decimal.js';

function gg() {
  const input1 = document.createElement('input');
  input1.id = 'num1';
  document.body.prepend(input1);

  const input2 = document.createElement('input');
  input2.id = 'num2';
  input1.after(input2);

  const button = document.createElement('button');
  document.body.append(button);
  button.innerHTML = 'Посчитать';
  button.id = 'button';

  const div = document.createElement('div');
  div.id = 'result';
  div.innerHTML = '';
  button.after(div);

  const divError1 = document.createElement('div');
  input1.after(divError1);
  divError1.id = 'divError1';
  divError1.className = 'error-message';
  divError1.innerHTML = '';

  const divError2 = document.createElement('div');
  input2.after(divError2);
  divError2.id = 'divError2';
  divError2.className = 'error-message';
  divError2.innerHTML = '';

  button.addEventListener('click', (event) => {
    const num1 = document.querySelector('#num1');
    const num2 = document.querySelector('#num2');

    document.querySelector('#divError1').innerHTML = '';
    if (isNum(String(num1.value)) === true) {
      document.querySelector('#divError1').innerHTML = 'Это не число';
    }
    document.querySelector('#divError2').innerHTML = '';
    if (isNum(String(num2.value)) === true) {
      document.querySelector('#divError2').innerHTML = 'Это не число';
    }

    document.querySelector('#result').innerHTML = '';
    if (isNum(String(num1.value)) === false && isNum(String(num2.value)) === false) {
      if (divError1.innerHTML !== '') {
        divError1.innerHTML = '';
      }
      if (divError2.innerHTML !== '') {
        divError2.innerHTML = '';
      }

      document.querySelector('#result').innerHTML = String(dec.Decimal.add(num1.value, num2.value));
    }
  });

  function isNum(num) {
    if (num === 'Infinity') return true;
    if (num === '-Infinity') return true;
    if (num.includes('e')) return true;
    if (num === '') return true;
    if (num.includes(' ')) return true;
    return isNaN(num);
  }
}

window.addEventListener('DOMContentLoaded', function (event) {
  document.body.appendChild(component());
  gg();
});
//
// function component() {
//   const element = document.createElement('div');
//
//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//
//   return element;
// }
