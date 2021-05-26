'use strict';

const generateList = document.querySelector('#generateList');

const myList = document.querySelector('#myList');



function grabValues() {

    //Creates title:
    const titleElement = document.createElement('h2');
    titleElement.innerText = 'My Shopping List';
    myList.append(titleElement);

    //Creates ul:
    const ulElement = document.createElement('ul');
    ulElement.classList.add('listItems');
    myList.append(ulElement);

    // empties the list each time. 
    // ulElement.innerHTML = "";

    const userInput = document.querySelectorAll('input');
    const userArray = Array.from(userInput);

    userArray.forEach((item) => {
        const liItem = document.createElement('li');
        liItem.innerText = item.value;
        ulElement.append(liItem);
  
    })

}


generateList.addEventListener('click', function() {
    grabValues();
}); 


