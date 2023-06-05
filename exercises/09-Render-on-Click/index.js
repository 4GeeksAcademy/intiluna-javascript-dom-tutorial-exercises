let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let myElement = document.createElement("div");
	myElement.innerHTML = "Hello World";
	myElement.style.background = "yellow";
	document.body.appendChild(myElement);
});