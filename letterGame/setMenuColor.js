'use strict';
export let menuColor = '';
export function setMenuColor() {
  const theme = {
    0 : 'rgba(18, 42, 128, 0.9)',
    1 : 'rgba(128, 122, 138, 0.9)',
    2 : 'rgba(34, 136, 256, 0.9)',
    3 : 'rgba(82, 96, 256, 0.9)',
  };
  menuColor = theme[rand];
}