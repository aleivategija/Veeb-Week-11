const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg"];



myButton.addEventListener('click', changeImage);

function changeImage() {
    
    console.log(image);
    let randomImages =  Math.floor(Math.random() * images.length);
    image.src = "img/" + images[randomImages];
    console.log(randomImages);
    image.style.backgroundImage = images[randomImages];

    
}