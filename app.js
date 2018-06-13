'use strict';

var addButton = document.getElementById('add');
var removeButton = document.getElementById('remove');
var display = document.querySelector('.display');
var select = document.getElementById('select');
var height = document.getElementById('height');

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

function selectBox() {
  if (select.value) {
    console.log(select.value);
    return (display.children[select.value - 1]);
  }
}

addButton.addEventListener('click', createBox);
removeButton.addEventListener('click', deleteBox);
select.addEventListener('input', selectBox);
