let box = document.getElementById("box");
let save = document.getElementById("save");
let due = document.getElementById("due");
let done = document.getElementById("done");
var ul = document.querySelector("ul");

const count = 0;

save.addEventListener("click",function(){

	if(box.value.length>0)
	{
	let del = document.createElement("i");
	del.classList.add("fa");
	del.classList.add("fa-trash");
	del.classList.toggle("button1")
	del.onclick=removeParent;

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
	del.classList.add("fa-trash");
	del.classList.toggle("button1")
	del.onclick=removeParent;

	let task = document.createTextNode(box.value);
	let li = document.createElement("li");

	li.appendChild(task);
	li.appendChild(del);

	due.appendChild(li);

	box.value="";
	}
	
})


function removeParent(evt){

	let task = document.createTextNode("task added");
	let li = document.createElement("li");
	li.appendChild(task);
	done.appendChild(li);

	evt.target.parentNode.remove();
	console.log(evt.target.parentNode.innerHTML);
	
}