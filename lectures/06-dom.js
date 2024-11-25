let topNode = window.document.body;

console.dir(topNode);

const bodyHeaders = document.querySelector(".headers").tagName;
console.log(bodyHeaders);

// dom tree give
// text node
// comment node
// element node

// DOM manipulation
// Properties
// tagName : returns tag for element nodes
// innerText : returns the text content of the element and all the children
// innerHtml : returns the plain text or HTML content in the element
// textContent : returns textual content even for hidden element

// Qs. Create a H2 heading element with text - "Hello JavaScript". Append "from Apna college students" to this text using JS.

const heading = document.querySelector("h2");
heading.append(" from Apna college students");

// heading.innerText = heading.innerText + " from Apna college students";

// Qs. Create 3 divs withs common class name - "box". Access them & add some unique text to each of them.
const divs = document.querySelectorAll(".box");

let idx = 1;
for (div of divs) {
  div.innerText = `some unique text ${idx}`;
  idx++;
}

// attributes
// insert
// node.append(el) adds at the end if node (inside)
// node.prepend(el) adds at the start of the node (inside)
// node.before(el) adds before the node (outside)
// node.after(el) adds after the node (outside)
// delete
// node.remove() removes the node

// Qs. Crate a new button element. Give it a text "click me", bakground color of red & text color of white.

// insert the button as the first element onside the body tag

const newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

const body = document.querySelector("body");
body.prepend(newBtn);

// Qs. Create a <p> tag in html, give it a class &some styling.
//  Now create a new class in css and try to append this class to the <p> element.

// Did you notice, how you overwrite the class name when you add a new one? solve this problem using classList.

const para = document.querySelector("p");
console.log(para);
para.classList.add("para-newClass");
