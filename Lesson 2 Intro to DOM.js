for (i = 1; i <= 3; i++) {

  var boxElement = document.createElement('div');
  boxElement.className = 'box-' + i;
  document.getElementsByTagName('body')[0].appendChild(boxElement);
  
}