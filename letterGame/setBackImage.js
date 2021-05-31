'use strict';
import {randBack, randVertBack} from './setBackAndRand.js';
export function setBackImage(obj) {
  setInterval(() => {
  obj.style.backgroundImage = (window.innerWidth <
    window.innerHeight) ? `url(${randVertBack})` : `url(${randBack})`
  });
}