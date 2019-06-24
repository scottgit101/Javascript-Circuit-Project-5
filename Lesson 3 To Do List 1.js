function addItem() {
  var input = document.getElementsByTagName('input')[0];
  var newItemText = input.value;
  input.value = '';

  var newItem = document.createElement('li');
  newItem.innerHTML = newItemText;
  document.getElementById('todoList').appendChild(newItem);
}

document.getElementsByTagName('button')[0].addEventListener('click', addItem);