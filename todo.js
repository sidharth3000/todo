let box = document.getElementById("box");
let save = document.getElementById("save");
let due = document.getElementById("due");
let done = document.getElementById("done");
let trash = document.getElementById("trash");
let check = document.getElementById("check");
let li = document.getElementsByTagName("li");
let i = document.getElementsByTagName("i");


save.addEventListener("click",function(){

	if(box.value.length>0)
	{
	let del = document.createElement("i");
	del.classList.add("fa");
	del.classList.add("fa-check");
	del.setAttribute("id","check");

	let task = document.createTextNode(box.value);
	let li = document.createElement("li");

	li.appendChild(task);
	li.appendChild(del);
	due.appendChild(li);
	
	box.value="";
	}
	
})


box.addEventListener("keypress",function(a){

	if(a.keyCode===13 && box.value.length>0)
	{
	let del = document.createElement("i");
	del.classList.add("fa");
	del.classList.add("fa-check");
	// del.setAttribute("id")

	let task = document.createTextNode(box.value);
	let li = document.createElement("li");

	li.appendChild(task);
	due.appendChild(li);

	li.appendChild(del);
	box.value="";
	}
	
})

li.addEventListener("click",function()
{
	li.remove();
	event.target.parentNode.remove();
})
 