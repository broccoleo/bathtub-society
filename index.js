const reviews = [
    {
        id: 1,
        author: "Anne",
        text: "super happy",
    },
    {
        id: 2,
        author: "Mary",
        text: "super happy",
    },
    {
        id: 3,
        author: "John",
        text: "super happy",
    },
    {
        id: 4,
        author: "Max",
        text: "super happy",
    },
];

const author = document.getElementById('reviewauthor');
const text = document.getElementById('reviewtext');

const previousButton = document.querySelector('prev-btn');
const nextButton = document.querySelector('next-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
    const item = reviews[currentItem];
    author.textContent = reviews.author;
    text.textContent = reviews.text;
});

function showReview (review) {
    const item=reviews[review];
    author.textContent = reviews.author;
    text.textContent = reviews.text;
}

nextButton.addEventListener("click", function (){
    currentItem++;
    if (currentItem > reviews.length-1) {
        currentItem=0;
    }
    showReview(currentItem);
    console.log("hello");
});

previousButton.addEventListener("click", function (){
    currentItem--;
    if (currentItem<0) {
        currentItem=reviews.length-1;
    }
    showReview(currentItem);
    console.log("hello");
});

