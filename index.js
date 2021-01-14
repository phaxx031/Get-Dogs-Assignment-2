'use strict';

function getDogImage(realDogCategory) {
    fetch(`https://dog.ceo/api/breeds/image/random/${realDogCategory}`)
    .then(response => response.json())
    .then(responseJson =>
        displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    let templateString = "";
    console.log(responseJson);
    for (let i = 0; i < responseJson.message.length; i++) {
        templateString += `<img src="${responseJson.message[i]}" class="results-img">`;
    }
    $('.results').html(templateString);
    $('.results').removeClass('hidden');
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        $("#dropdown-list").val();
        let dogCategory = $("#dropdown-list").val();
        if (dogCategory === "hound") {
          getDogImage(dogCategory);
        } else if (dogCategory === "wolf") {
          window.location.href = "https://dog.ceo/api/breed/wolf/images"
        } else if (dogCategory === "shepherd") {
          window.location.href = "https://dog.ceo/api/breed/shepherd/images"
        }
    });
}

$(function() {
    console.log('App loaded! Waiting for submit!')
    watchForm();
});