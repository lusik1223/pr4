let myImage = document.querySelector ('img' );

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'fr.jpg') {
        myImage.setAttribute('src', 'bk.jpg');
    } else if (mySrc === 'bk.jpg') {
        myImage.setAttribute('src', 'sl.jpg');
    } else {
        myImage.setAttribute('src', 'fr.jpg');
    }

    myImage.style.width = '450px';
    myImage.style.height = '350px';
}


let myButton = document.querySelector('button'),
    myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt( 'Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading. innerHTML = 'Audi is the best choise,' + myName;

    }
}
if(!localStorage.getItem('name')) {
    setUserName() ;
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Audi is the best choise,' + storedName;
}
myButton.onclick = function (){
    setUserName();
}