/* global $ */
/* jshint esversion: 11 */
let result = document.getElementById('result');
let reset = document.getElementById('reset');
let horseImage = document.getElementById("image");
let heartGirthInput = document.getElementById('heartgirth');
let lengthInput = document.getElementById('bodyLength');
let weightKg, heartGirth, length = 0;
let heartGirthValid, lengthValid = false;
let resultsLink = document.getElementById("results-link");
let modalInfo = document.getElementById("modal");
document.getElementById('heartgirth_units').addEventListener("change", calculateWeight);
document.getElementById('length_units').addEventListener("change", calculateWeight);
let calcCm = 0.393700787;
let calcM = 39.3700787;
const icons = document.querySelectorAll('.logo');

//* Add hover effect to each icon
icons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        // Add class to trigger animation
        icon.classList.add('jiggle');
    });

    icon.addEventListener('mouseleave', () => {
        // Remove class to stop animation
        icon.classList.remove('jiggle');
    });
});
//* Stop iframe video playing when modal is closes *//
$(document).ready(function() {
    $('#modalInfo').on('hidden.bs.modal', function (e) {
        // Find the iframe within the modal
        var $iframe = $(this).find("iframe");
        var src = $iframe.attr('src');
        // Pause the video by removing the source
        $iframe.attr('src', '');
        $iframe.attr('src', src);
    });
});

//* Calculator functions *//
function calculateWeight() {
    // Convert heart girth to inches
    heartGirth = parseFloat(heartGirthInput.value);
    switch (document.getElementById('heartgirth_units').value) {
        case 'cm':
            heartGirth = heartGirth * calcCm;
            break;

        case 'm':
            heartGirth = heartGirth * calcM;
            break;
    }

    // Convert length to inches
   length = parseFloat(lengthInput.value);
    switch (document.getElementById('length_units').value) {
        case 'cm':
            length = length * calcCm;
            break;

        case 'm':
            length = length * calcM;
            break;
    }
    updateResults();
}

function updateResults() {
    // Displays for result
    result.innerHTML = "Results displayed.";
    resultsLink.style.display = "inline";
    modalInfo.style.display = "none";

    // Calculate weight in kg
    weightKg = (heartGirth * heartGirth * length) / 330 / 2.20462; // Convert pounds to kg

    // Result
    result.innerText =  + Math.floor(weightKg) + " kg";
    let weightCatagory;
    // Determine horse image based on weight
    if (weightKg >=1500) {
        weightCatagory = 'elephant';
    }
    else if (weightKg >= 850) {
        weightCatagory = 'overweight';
    } else if (weightKg >= 550) {
        weightCatagory = 'healthy';
    } else if (weightKg >= 250) {
        weightCatagory = 'underweight';
    } else if (weightKg >= 50) {
        weightCatagory = 'small';
    } else {
        weightCatagory = 'invalid';
    }
    let img, txt;
    switch (weightCatagory) {
        case 'elephant':
            img = "elephant";
            txt = "\nIs that an elephant?";
            break;
        case 'overweight':
            img = "fat-horse";
            txt = "\nYour horse is overweight.";
            break;
        case 'healthy':
            img = "healthy-horse";
            txt = "\nYour horse is a healthy weight.";
            break;
        case 'underweight':
            img = "skinny-horse";
            txt = "\nYour horse is underweight.";
            break;
        case 'small':
            img = "shetland";
            txt = "\nYour horse is healthy for its small size.";
            break;
        case 'invalid':
            img = "laughing-icon";
            txt = "\nPlease enter valid results (weight must be at least 50kg).";
            break;
    }
    horseImage.src = `assets/images/${img}.png`;
    horseImage.alt = `image of ${weightCatagory} horse`;
    result.innerText += txt;
}

// Listen to the user typing live in each input
heartGirthInput.addEventListener("input", getHeartGirth);
lengthInput.addEventListener ("input", getLength);


function getHeartGirth() {
     // grab the value of the heartgirth based on user input
    heartGirth = heartGirthInput.value;
    if (heartGirthInput.value == "") {
        heartGirth = 0;
        heartGirthValid = false;
    } else {
        heartGirthValid = true;
    }
    // check if both are now valid
    checkIfValid();
}

function getLength() {
    // grab the value of the length based on user input
    length = lengthInput.value;
    if (lengthInput.value == "") {
        length = 0;
        lengthValid = false;
    } else {
        lengthValid = true;
    }
    // check if both are now valid
    checkIfValid();
}

function checkIfValid() {
     // grab the value of both varibales based on user input
    if (heartGirthValid && lengthValid) {
        calculateWeight();
        modalInfo.style.display = "none";
    } else {
        result.innerText = "";
        // Show modal info and original horse image
        resultsLink.style.display = "none";
        horseImage.src = "assets/images/jumping-icon.png";
        modalInfo.style.display = "";
    }
}

// reset button
reset.addEventListener("click", function () {
    heartGirthInput.value = "";
    lengthInput.value = "";
    result.innerText = "";
    resultsLink.style.display = "none";
    horseImage.src = "assets/images/jumping-icon.png";
    modalInfo.style.display = 'block';
});