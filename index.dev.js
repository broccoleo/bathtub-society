"use strict";

var reviews = [{
  id: 1,
  author: "Anne",
  text: "super happy"
}, {
  id: 2,
  author: "Mary",
  text: "super happy"
}, {
  id: 3,
  author: "John",
  text: "super happy"
}, {
  id: 4,
  author: "Max",
  text: "super happy"
}];
var author = document.getElementById('reviewauthor');
var text = document.getElementById('reviewtext');
var previousButton = document.querySelector('prev-btn');
var nextButton = document.querySelector('next-btn');
var currentItem = 0;
window.addEventListener('DOMContentLoaded', function () {
  var item = reviews[currentItem];
  author.textContent = reviews.author;
  text.textContent = reviews.text;
});

function showReview(review) {
  var item = reviews[review];
  author.textContent = reviews.author;
  text.textContent = reviews.text;
}

nextButton.addEventListener("click", function () {
  currentItem++;

  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }

  showReview(currentItem);
  console.log("hello");
});
previousButton.addEventListener("click", function () {
  currentItem--;

  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }

  showReview(currentItem);
  console.log("hello");
});