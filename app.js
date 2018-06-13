'use strict';

var addButton = document.getElementById('add');
var removeButton = document.getElementById('remove');
var display = document.querySelector('.display');

function createBlock() {
  let newBox = document.createElement('div');
  newBox.classList.add('box');
  display.append(newBox);
}