const btnTasks = document.querySelectorAll('.btnDisplay');
const menuTasks = document.querySelectorAll('.tasks-content');

function showTask(index) {
	menuTasks[index].classList.toggle('active-task');
}

for (let i = 0; i < btnTasks.length; i++) {
	btnTasks[i].addEventListener("click", function() {
		showTask(i);
		btnTasks[i].classList.toggle('actived');
	});
}



