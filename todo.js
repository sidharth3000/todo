let box = document.getElementById("box");
let save = document.getElementById("save");
let due = document.getElementById("due");
let done = document.getElementById("done");
let progress = document.getElementById("progress");
var ul = document.querySelector("ul");

const count = 0;

save.addEventListener("click",function(){

	if(box.value.length>0)
	{
		
	let txt = document.createElement("span");
	let del = document.createElement("i");
	del.classList.add("fa");
	del.classList.add("fa-hourglass-start");
	due.classList.add("animation");

	del.onclick=removeParent;

	let task = document.createTextNode(box.value);
	let space = document.createTextNode('   ');
	let li = document.createElement("li");

	txt.appendChild(task);
	li.appendChild(txt);
	li.appendChild(space);
	li.appendChild(del);
	// console.log(li)

	setTimeout(function(){ due.classList.remove("animation"); }, 500);
	due.appendChild(li);

	box.value="";

		
	}
	
})
// <i class="fas fa-hourglass-start"></i>

box.addEventListener("keypress",function(a){

	if(a.keyCode===13 && box.value.length>0)
	{
		
	let del = document.createElement("i");
	let txt = document.createElement("span");
	del.classList.add("fa");
	del.classList.add("fa-hourglass-start");
	due.classList.add("animation");
	del.onclick=removeParent;

	let task = document.createTextNode(box.value);
	let space = document.createTextNode('   ');
	let li = document.createElement("li");

	txt.appendChild(task);
	li.appendChild(txt);
	li.appendChild(space);
	li.appendChild(del);
	console.log(li)

	due.appendChild(li);

	box.value="";

	setTimeout(function(){ due.classList.remove("animation"); }, 500);
	}
	
})


function removeParent(evt){

	progress.classList.add("animation");

	let tick = document.createElement("i");
	tick.classList.add("fa");
	tick.classList.add("fa-check");
	tick.onclick=completed;

	let txt = document.createElement("span");
	let space = document.createTextNode('   ');
	txt.appendChild(space);

	let task = document.createTextNode(evt.target.parentNode.children[0].innerHTML);

	let li = document.createElement("li");
	li.appendChild(task);
	li.appendChild(txt);
	li.appendChild(tick);

	let work = evt.target.parentNode.children[0];
	let list = document.createElement("li");
	list.appendChild(work);
	list.appendChild(txt);
	list.appendChild(tick);

	progress.appendChild(list);

	evt.target.parentNode.remove();

	console.log(work);

	setTimeout(function(){ progress.classList.remove("animation"); }, 500);

	
}

function completed(evt){

	done.classList.add("animation");

	let list =  evt.target.parentNode;

	
	let task = document.createTextNode(evt.target.parentNode.children[0].innerHTML);


	let li = document.createElement("li");
	li.appendChild(task);
	done.appendChild(li);

	evt.target.parentNode.remove();
	console.log(evt.target.parentNode);

	setTimeout(function(){ done.classList.remove("animation"); }, 500);

	
}
