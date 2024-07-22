// DOM

// Selecting and Manipulating Elements
document.getElementById('greeting').textContent = "Hello my name is Vinay"
document.querySelector('.container').style.backgroundColor = 'lightgreen'



// Creating and appending Elements
// create a new div element with some text content and append it to the body
const child = document.createElement('div')
child.innerText = "Whats up there"
document.querySelector('.container').appendChild(child)

// creating a new li element and add it to an existing ul list
const list1 = document.createElement('li')
list1.innerText = "list no 1"
const list2 = document.createElement('li')
list2.innerText = "list no 2"
document.querySelector('.list').appendChild(list1)
document.querySelector('.list').appendChild(list2)



// Removing elements
// Select an html element and remove it from the DOM
document.getElementById('container').removeChild(document.getElementById('greeting'))

// remove the last child of a specific HTML element
const ul = document.querySelector('#list2')
const lastChild = ul.lastElementChild
if(lastChild){
    ul.removeChild(lastChild)
}
console.log(lastChild); //<li id="third">Third</li>



// Modifying Attributes and Classes
// select an html element and change one of its attributes (e.g. src of an img tag)
const checkbox = document.querySelector('.inputCheck')
checkbox.setAttribute("value", "newAge")
// checkbox.setAttribute("id", "newAge")
console.log(checkbox);  //<input class="inputCheck" type="checkbox" checked="" value="newAge" id="newAge">



// Event handling
// Add a click event listner to a button that changes the text content of a paragraph
document.querySelector('button').addEventListener('click', (e) => {
    document.querySelector('#nameIs').innerText = "My name was Harsh but now i'm Harshali"
})

// use mouseovee
document.querySelector('button').addEventListener('mouseover', (e) => {
    document.querySelector('button').style.backgroundColor = "orange"
})