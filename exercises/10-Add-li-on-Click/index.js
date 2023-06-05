let button = document.querySelector("#superDuperButton");
//let inTarget = document.querySelector("#myList");
button.addEventListener("click", function() {
	//your code here
	let myElement = document.createElement("li");
	myElement.innerHTML = "Forth element";
	//document.body.appendChild(myElement);
	document.getElementById("myList").appendChild(myElement)
	//console.log(inTarget.children); 

});

