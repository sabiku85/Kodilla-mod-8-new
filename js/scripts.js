var list = document.getElementById('list'),
	add = document.getElementById('addElem'),
	nextNumber = document.getElementsByTagName('li');
	

add.addEventListener('click', function() {
	list.innerHTML += '<li>item ' + nextNumber.length + '</li>';
});
