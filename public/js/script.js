
const gameImages = [
    './style/images/gull.jpg',
    './style/images/gull2.jpg',
    './style/images/lion.jpg',
    './style/images/lion2.jpg',
    './style/images/seahorse.jpg'
];

const gameButton = document.querySelector('#game-button');
const gameContainer = document.querySelector('#game-container');
let currentIndex = 0;

function displayImage() {
    gameContainer.innerHTML = '';
    const img = document.createElement('img');
    img.src = gameImages[currentIndex];
    gameContainer.appendChild(img);
}

displayImage();  // Display the first image on page load

gameButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % gameImages.length;
    displayImage();
});


