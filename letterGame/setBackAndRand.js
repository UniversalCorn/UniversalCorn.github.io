'use strict';
const back = ['b1.jpg', 'b2.jpg', 'b3.jpg', 'b4.jpg'];
const backVert = ['b1vert.jpg', 'b2vert.jpg', 'b3vert.jpg', 'b4vert.jpg'];

const rand = Math.floor(Math.random() * back.length);
const randBack = back[rand];
const randVertBack = backVert[rand];

export {back, backVert, rand, randBack, randVertBack};