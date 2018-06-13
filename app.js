'use strict';

var addButton = document.getElementById('add');
var removeButton = document.getElementById('remove');
var display = document.querySelector('.display');
var select = document.getElementById('select'); // possible to remove
var properties = document.querySelectorAll('[type="number"]');
var radioProperties = document.querySelectorAll('[type="radio"]');

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

addButton.addEventListener('click', createBox);
removeButton.addEventListener('click', deleteBox);
properties.forEach(property => property.addEventListener('input', applyProperties));