'use strict';

function getDogImage(dogBreed) {
    fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then(response => response.json())
    .then(responseJson => {
        if (responseJson.status == "success") {
            displayResults(responseJson);
        } else {
            alert('Something went wrong. Try again later.')
        }
    })
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    let templateString = "";
    console.log(responseJson);
    templateString += `<img src="${responseJson.message}" class="results-img">`;
    $('.results').html(templateString);
    $('.results').removeClass('hidden');
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        $("#dropdown-list").val();
        let dogBreed = $("#textbox").val();
        console.log (dogBreed);
        getDogImage(dogBreed);
    });
}

$(function() {
    console.log('App loaded! Waiting for submit!')
    watchForm();
});