'use strict';

var addButton = document.getElementById('add');
var removeButton = document.getElementById('remove');
var display = document.querySelector('.display');
var select = document.getElementById('select');
var properties = document.querySelectorAll('[type="number"]');
var block = document.getElementById('block');
var inlineBlock = document.getElementById('inline-block');
var flex = document.getElementById('flex');
var resetButton = document.getElementById('reset');
var dataKeys = document.querySelectorAll('[data-key]');
var color = document.querySelector('[type="color"]');

function createBox() {
  let newBox = document.createElement('div');
  newBox.classList.add('box');
  display.append(newBox);
  displayError();
}

function deleteBox() {
  if (display.lastElementChild){
    display.lastElementChild.remove();
  }
  displayError();
}

function applyProperties() {
  if (select.value && display.childElementCount && (select.value <= display.childElementCount)) {
    let target = display.children[select.value - 1];
    if (this.name === 'border') {
      var propVal = `${this.name}: ${this.value}px solid black`;
    }
    else if (this.name === 'backgroundColor') {
      propVal = propVal = `${this.name}: ${this.value};`;
    }
    else {
      propVal = `${this.name}: ${this.value}px;`;
    }
    target.style.cssText += propVal;
  }
}

function uncheck(props) {
  var allProperties = Array.from(document.querySelectorAll('input'));
  if (props){
    allProperties.shift();
  }
  allProperties.forEach(property => { property.value = ''; property.checked = ''; });
}

function reset() {
  for (var children in display.children) {
    deleteBox();
  }
  if (display.classList.contains('display--flex')) {
    display.classList.toggle('display--flex');
  }
  uncheck();
}

function setStats() {
  let target = display.children[select.value - 1];
  dataKeys.forEach(key => key.textContent = (target.style[key.dataset.key]));
  dataKeys[0].textContent = select.value;
}

function displayError () {
  let error = document.getElementById('error');
  if (select.value > display.childElementCount) {
    error.classList.remove('hidden');
  }
  if (select.value <= display.childElementCount) {
    error.classList.add('hidden');
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

properties.forEach(property => property.addEventListener('input', setStats));

select.addEventListener('input', () => uncheck('select'));
select.addEventListener('input', displayError);