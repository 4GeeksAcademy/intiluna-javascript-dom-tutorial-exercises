let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here

// append elements
for(let i=0; i<countries.length;i++){
    let myElement = document.createElement("option");
    myElement.innerHTML=countries[i];
    myElement.value = i;
    document.getElementById("mySelect").appendChild(myElement);    
}

// onClick shows alert
let button = document.querySelector("#mySelect");
//let inTarget = document.querySelector("#myList");
button.addEventListener("click", function() {
	//your code here
	alert("hi")
	//console.log(inTarget.children); 

});


