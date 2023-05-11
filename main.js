let myImage = document.querySelector ('img' );

myImage.onclick = function() {
    let mySrc = myImage. getAttribute('src');
    if(mySrc === 'firefox-icon.png') {
        myImage.setAttribute ('src', 'firefox2.jpeg');
        myImage.style.width = '256px';
        myImage.style.height = '256px';
    } else {
        myImage. setAttribute ('src', 'firefox-icon.png');
    }
}
let myButton = document.querySelector('button'),
    myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt( 'Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading. innerHTML = 'Mozilla is cool,' + myName;

    }
}
if(!localStorage.getItem('name')) {
    setUserName() ;
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool,' + storedName;
}
myButton.onclick = function (){
    setUserName();
}