let numberOfFlames = 5;
const theLeftSide = document.getElementById('leftSide');
const theRightSide = document.getElementById('rightSide');

// function to generate flames on the left and right sides of the web page.
const generateFlames = () => {
    for(i = 0; i < numberOfFlames; i++) {
        let newFlame = document.createElement('img');
        newFlame.src = './image-folder/fire emoji.png';
        
        const randomTop = Math.floor(Math.random() * 400) + 1;
        const randomLeft = Math.floor(Math.random() * 400) + 1;
        newFlame.style.top = randomTop + 'px';
        newFlame.style.left = randomLeft + 'px';
        theLeftSide.appendChild(newFlame);

        const leftSideImages = theLeftSide.cloneNode(true);  // clones the left side flames to a new variable
        leftSideImages.removeChild(leftSideImages.lastChild); // removes the last child from the left side
        theRightSide.appendChild(leftSideImages); // cop
    } 
        theLeftSide.lastElementChild.addEventListener('click', nextLevel); //adds an event listener for when the user clicks on the extra flame
        document.body.addEventListener('click', gameOver);
}
//function to generate more flames when the user clicks the missing flame
const nextLevel = (event) => {
    event.stopPropagation();
    numberOfFlames += 5;
    generateFlames();
}

const gameOver = () => {
    alert('Game Over!');
}

