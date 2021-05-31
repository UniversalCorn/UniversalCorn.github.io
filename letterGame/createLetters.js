'use strict';
export function createLetters(picsAmount) {
  let obj = {};
  for (let i = 0; i < picsAmount; i++) {
    obj = document.createElement('div');
    if (i < 6) {
      obj.innerText = String.fromCharCode(i + 1040) +
    String.fromCharCode(i + 1072);
    } else if (i > 6) {
      obj.innerText = String.fromCharCode(i + 1039) +
    String.fromCharCode(i + 1071);
    } else {
      obj.innerText = String.fromCharCode(1025) +
    String.fromCharCode(1105);
    }
    document.body.appendChild(obj);
    obj.setAttribute('class', 'letter');
  }
}
