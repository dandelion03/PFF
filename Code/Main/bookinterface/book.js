'use strict';
const toread = document.querySelector('#toread');
const read = document.querySelector('#read');
const add = document.querySelector('#add');
let addpopup = document.querySelector('.add');
let overlaypopup = document.querySelector('.addoverlay');
let createPopup = document.querySelector('.create');
const backTo = document.querySelector('.return');
let createOverlayPopup = document.querySelector('.createoverlay');
const closeBtn = document.querySelector('.close-modal');
const closeBtn2 = document.querySelector('.close2');
const createColl = document.querySelector('#createcoll');
const finished = document.querySelector('.read');
const finishedOverlay = document.querySelector('.reviewoverlay');
const closeBtn3 = document.querySelector('.close3');
const closeShowColl = function () {
  addpopup.classList.toggle('hidden');
  overlaypopup.classList.toggle('hidden');
  document.querySelector('.create').classList.toggle('hidden');
  document.querySelector('.createoverlay').classList.toggle('hidden');
};
const close = function () {
  createPopup.classList.add('hidden');
  createOverlayPopup.classList.add('hidden');
  addpopup.classList.add('hidden');
  overlaypopup.classList.add('hidden');
};

toread.addEventListener('mouseover', function () {
  toread.textContent = 'Save For Later';
});

toread.addEventListener('mouseout', function () {
  toread.textContent = 'To Read';
});
read.addEventListener('mouseover', function () {
  read.textContent = 'Mark As Finished';
});

read.addEventListener('mouseout', function () {
  read.textContent = 'Read';
});
add.addEventListener('mouseover', function () {
  add.textContent = 'Add To A List';
});

add.addEventListener('mouseout', function () {
  add.textContent = 'Add';
});

add.addEventListener('click', function () {
  addpopup.classList.toggle('hidden');
  overlaypopup.classList.toggle('hidden');
});
createColl.addEventListener('click', closeShowColl);
closeBtn.addEventListener('click', close);
closeBtn2.addEventListener('click', close);
backTo.addEventListener('click', function () {
  createPopup.classList.toggle('hidden');
  createOverlayPopup.classList.toggle('hidden');
  addpopup.classList.toggle('hidden');
  overlaypopup.classList.toggle('hidden');
});

read.addEventListener('click', function () {
  finished.classList.toggle('hidden');
  finishedOverlay.classList.toggle('hidden');
});
closeBtn3.addEventListener('click', function () {
  finished.classList.add('hidden');
  finishedOverlay.classList.add('hidden');
});
