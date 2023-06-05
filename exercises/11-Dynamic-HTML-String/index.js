const myDate = new Date();
let thisYear = myDate.getFullYear()
console.log(thisYear);
//let myString2 = `<p>we are in the year: ${thisYear} </p> `;
//let myString = `<p>Hello!</p> <strong>My friend</strong>, we are in the year: ${thisYear}`;
let myString = "<p>Hello!</p> <strong>My friend</strong>, we are in the year: " + thisYear
document.write(myString);