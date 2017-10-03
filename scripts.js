var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
  var listNumber = list.getElementsByTagName('li').length;
  var element = document.createElement('li');
      element.innerHTML = 'item '+listNumber;
      list.appendChild(element);
});
