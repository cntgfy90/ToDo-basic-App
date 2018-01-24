var btnAdd = document.getElementById('btnAdd');  // button 'add'
var search = document.getElementById('search');  // field 'search'
var input = document.getElementById('input');  // field input for ToDo
var form = document.forms['form']; // form
var ul = document.querySelectorAll('.lists ul'); // NodeList of ul which are in div.list
var searchList = document.querySelector('#search-list');

// Getting submit event on form
form.addEventListener('submit', createItem);

function createItem(e) {
	// Prevent form from submitting
	e.preventDefault();
	// Checking if the value of input field for ToDo is not empty
	if (input.value) {
		var li = document.createElement('LI');
		li.classList.add('todo-li');
		li.innerHTML = '<span class="title">'+input.value.trim()+'</span>'+'<span class="delete">'+'<button class="delete-btn">Delete</button>'+'</span>'+'<span class="done">'+'<button class="done-btn">Done</button>'+'</span>';
		todo.insertBefore(li, todo.childNodes[0]);
		input.value = '';
	}
}

// get Array from NodeList
Array.from(ul).forEach(function(ul){
	// Getting click event on every UL
	ul.addEventListener('click', doneDeleteItem);

	function doneDeleteItem(e) {
		// Getting array from NodeList of 'Delete' buttons
		var btnDelArr = Array.from(ul.querySelectorAll('.delete-btn'));

		// Getting array from NodeList of 'Done' buttons
		var btnDoneArr = Array.from(ul.querySelectorAll('.done-btn'));

		// Click event on 'Delete'
		btnDelArr.forEach(function(btnDel) {
			if (e.target == btnDel)	ul.removeChild(ul.childNodes[0]);
		});

		// Click event on 'Done'
		btnDoneArr.forEach(function(btnDone) {
			
			if (e.target == btnDone) {
				var ulNext = ul.nextElementSibling;
				ul.nextElementSibling.insertBefore(ul.childNodes[0], ul.nextSibling.childNodes[0]);

				var btnDoneInDone = ul.nextElementSibling.querySelectorAll('.done-btn');

				for (var i = 0; i < btnDoneInDone.length; i++) {
					btnDoneInDone[i].setAttribute('disabled', '');
					Object.assign(btnDoneInDone[i].style, {
						backgroundColor: 'grey',
						cursor: 'default',
					});
				}
			}
		});
	}	
});





search.addEventListener('keyup', searchItem);

function searchItem() {
	var lis = document.querySelectorAll('.todo-li');

	Array.from(lis).forEach(function(li){
		li.textContent.toLowerCase().indexOf(search.value.toLowerCase()) != -1 ?
		li.style.display = '' :
		li.style.display = 'none';
	});
}
