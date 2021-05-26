'use strict';

const generateList = document.querySelector('#generateList');

const myList = document.querySelector('#myList');



function grabValues() {
    const userInput = document.querySelectorAll('input');
    const userArray = Array.from(userInput);

    // Creates the Title:
    const titleElement = document.createElement('h2');
    titleElement.innerText = 'My Shopping List';
    myList.append(titleElement);

    // Creates the ul 
    const ulElement = document.createElement('ul');
    ulElement.classList.add('listItems');
    myList.append(ulElement);
    userArray.forEach((item) => {
        const liItem = document.createElement('li');
        liItem.innerText = item.value;
        ulElement.append(liItem);
        console.log(liItem);
    })

}


generateList.addEventListener('click', function() {
    grabValues();
}); 


