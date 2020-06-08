'use strict';
export function setTheme(obj) {
  const theme = {
    0: 'first',
    1: 'second',
    2: 'third',
    3: 'fourth',
  };
  obj.setAttribute('class', theme[rand]);
}