var btnAdd = document.getElementById('btnAdd');  // button 'add'
var search = document.getElementById('search');  // field 'search'
var input = document.getElementById('input');  // field input for ToDo
var form = document.forms['form']; // form
var ul = document.querySelectorAll('.lists ul'); // NodeList of ul which are in div.list
var searchList = document.querySelector('#search-list');

// Getting submit event on form
form.addEventListener('submit', function(event){
	// Prevent form from submitting
	event.preventDefault();
	// Checking if the value of input field for ToDo is not empty
	if (input.value) {
		var li = document.createElement('LI');
		li.classList.add('todo-li');
		li.innerHTML = '<span class="title">'+input.value.trim()+'</span>'+'<span class="delete">'+'<button class="delete-btn">Delete</button>'+'</span>'+'<span class="done">'+'<button class="done-btn">Done</button>'+'</span>';
		todo.insertBefore(li, todo.childNodes[0]);
		input.value = '';
	}
});

// get Array from NodeList
Array.from(ul).forEach(function(ul){
	// Getting click event on every UL
	ul.addEventListener('click', function(event){
		// Getting array from NodeList of 'Delete' buttons
		var btnDelArr = Array.from(ul.querySelectorAll('.delete-btn'));
		// Getting array from NodeList of 'Done' buttons
		var btnDoneArr = Array.from(ul.querySelectorAll('.done-btn'));
		// Click event on 'Delete'
		btnDelArr.forEach(function(btnDel) {
			if (event.target == btnDel) {
				ul.removeChild(ul.childNodes[0]);
			}
		});
		// Click event on 'Done'
		btnDoneArr.forEach(function(btnDone) {
			
			if (event.target == btnDone) {
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
	});
});



// var getLis = function(){
// 	var lis = document.querySelectorAll('.todo-li');
// 	console.log(lis)
// };

// getLis()



search.addEventListener('keyup', function(){
	var lis = document.querySelectorAll('.todo-li');
	// var cloneArrLi = [];
	// for (var i = 0; i < lis.length; i++) {
	// 	cloneArrLi.push(lis[i].cloneNode(true));
	// }

	// for (var j = 0; j < cloneArrLi.length; j++) {
	// 	var title = cloneArrLi[j].querySelector('.title').textContent;

	// 	if (title.toLowerCase().indexOf(input.value.toLowerCase()) != -1) {
	// 		searchList.appendChild('asd')
	// 	}
	// }



	Array.from(lis).forEach(function(li) {
		var title = li.firstElementChild.textContent;

		if (title.toLowerCase().indexOf(input.value.toLowerCase()) != -1) {
			searchList.insertBefore(li, searchList.childNodes[0]);
		} else {
			while (searchList.firstElementChild) {
				searchList.removeChild(searchList.firstElementChild);
			}
		}	
	});
});













// todo.addEventListener('click', function(event){
// 	var btnDelArr = Array.from(todo.querySelectorAll('.delete-btn'));
// 	var btnDoneArr = Array.from(todo.querySelectorAll('.done-btn'));

// 	btnDelArr.forEach(function(btnDel) {
// 		if (event.target == btnDel) {
// 			todo.removeChild(todo.childNodes[0]);
// 		}
// 	});

// 	btnDoneArr.forEach(function(btnDone) {
// 		if (event.target == btnDone) {
// 			console.log(btnDone.parentNode)
// 			done.insertBefore(todo.childNodes[0], done.childNodes[0]);
// 		}
// 	})
// });

