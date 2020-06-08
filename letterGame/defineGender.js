'use strict';
export let genderStr = '';
export function defineGender() {
  export const urlIfMale =
  'https://universalcorn.github.io/letterGame/main.html?gender=Male';
  genderStr = (document.referrer === urlIfMale) ? 'M.mp3' : 'F.mp3';
}