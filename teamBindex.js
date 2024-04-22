console.log("hi");

// 1a
document.getElementById(title); // this is not being used
console.log(title);

//1b
document.getElementsByClassName("content");
console.log(document.getElementsByClassName("content"));

//1c
document.querySelectorAll("li");
console.log(document.querySelectorAll("li"));

//1d
document.querySelector(".highlight");
console.log(document.querySelector(".highlight"));

//1e
// try to use more descriptive names for variables
const elements = document.querySelectorAll(".highlight");

document.querySelectorAll(".highlight"); // this is redundant
console.log(document.querySelectorAll(".highlight"));

for (var i = 0; i < elements.length; i++) {
  // use let for declaring variables (i) in for loops
  console.log(elements[i].textContent);
}

// good use of a for loop, as elements is an array, could an array method be used here to simplify?

//2a
document.getElementById("itemList");
console.log(document.getElementById("itemList"));

const itemList = document.getElementById("itemList");
itemList.querySelector("li");
console.log(itemList.querySelector("li"));

const item = itemList.querySelector("li");
console.log(item.parentNode);

// 2b

console.log(itemList.childNodes);

//2c

console.log(itemList.children);

//2d
console.log(itemList.firstElementChild);
console.log(itemList.lastElementChild);
console.log(itemList.querySelector(".highlight"));

//2e
const cherry = itemList.querySelector(".highlight");
console.log(cherry.previousElementSibling);
console.log(cherry.nextElementSibling);

//3a
document.getElementById("title").style.color = "red";
document.getElementById("title").style.fontSize = "30px";

//3b
const newElement = document.createElement("p");

newElement.textContent = "This is a dynamically added paragraph.";

const parentElement = document.querySelector("body");

parentElement.appendChild(newElement);

//3c

console.log(document.querySelector(".content"));

let firstParagraph = document.querySelector(".content");

firstParagraph.textContent = "This paragraph has been updated";

//3d

//3e

//3f

/* 
feedback - Team B
+ Tasks 1/2 completed well, minor changes needed
+ good use of a for loop in 1e, as mentioned below look into array methods (forEach specifically in this case)
* add comments between each task to improve readability - difficult to tell what is what for each task
* storing your workings in variables and then console logging variables also improves readability 
* when you use the document.getElementsByClassName("content"); like on line 4, 8, 12 etc and don't assign 
it to a variable it isn't necessary/doing anything to impact the output 
* try and finish 3d,e,f if you can - ask for help and we can work through if needed
*/
