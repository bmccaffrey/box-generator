'use strict';

var addButton = document.getElementById('add');
var removeButton = document.getElementById('remove');
var display = document.querySelector('.display');
var select = document.getElementById('select'); // possible to remove
var properties = document.querySelectorAll('[type="number"]');
var block = document.getElementById('block');
var inlineBlock = document.getElementById('inline-block');
var flex = document.getElementById('flex');
var resetButton = document.getElementById('reset');

function createBox() {
  let newBox = document.createElement('div');
  newBox.classList.add('box');
  display.append(newBox);
}

function deleteBox() {
  if (display.lastElementChild){
    display.lastElementChild.remove();
  }
}

function applyProperties() {
  if (select.value && display.childElementCount && (select.value <= display.childElementCount)) {
    let target = display.children[select.value - 1];
    if (this.name === 'border') {
      var propVal = `${this.name}: ${this.value}px solid black`;
    }
    else {
      propVal = `${this.name}: ${this.value}px;`;
    }
    target.style.cssText += propVal;
  }
}

function applyRadioProperties() {
  Array.from(display.children).forEach(child => child.classList.toggle(`${this.id}`));
}

function reset() {
  for (var children in display.children) {
    deleteBox();
  }
  if (display.classList.contains('display--flex')) {
    display.classList.toggle('display--flex');
  }
}

addButton.addEventListener('click', createBox);

removeButton.addEventListener('click', deleteBox);

properties.forEach(property => property.addEventListener('input', applyProperties));

block.addEventListener('change', function() {
  let children = Array.from(display.children);
  children.forEach(child => child.style.display = 'block');
});

inlineBlock.addEventListener('change', function() {
  let children = Array.from(display.children);
  children.forEach(child => child.style.display = 'inline-block');
});

flex.addEventListener('change', function() {
  display.classList.toggle('display--flex');
});

resetButton.addEventListener('click', reset);
