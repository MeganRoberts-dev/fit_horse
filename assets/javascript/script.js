let horseImage = document.getElementById("image");
let heartGirthInput = document.getElementById('heartgirth');
let lengthInput = document.getElementById('length');
// let playButton = document.getElementById("playButton");
let result = document.getElementById('result');
let weightKg, heartGirth, length = 0;
let heartGirthValid, lengthValid = false;
let resultsLink = document.getElementById("results-link");
let modalInfo = document.getElementById("modalInfo");

function calculateWeight() {

    // Calculate weight in kg
    weightKg = (heartGirth * heartGirth * length) / 330 / 2.20462; // Convert pounds to kg

    // Display result
    result.innerText = "Horse's Weight: " + Math.floor(weightKg) + " kg";

    
    
    if (weightKg >= 800) {
        horseImage.src = "assets/images/fat-horse.png";
     result.innerText += "\nYour horse is overweight.";
     informationButton.innerText = "Overweight Information";
    } else if (weightKg >= 600) {
        horseImage.src = "assets/images/healthy-horse.png";
        result.innerText += "\nYour horse is a healthy weight";
        
    } else if (weightKg >= 300) {
        horseImage.src = "assets/images/skinny-horse.png";
        result.innerText += "\nYour horse is underweight";
    } else if (weightKg >= 150) {
        horseImage.src = "assets/images/jumping-icon";
        result.innerText += "\nYour horse is healthy for it's small size.";
       
    } else {
        horseImage.src = "assets/images/jumping-icon.png";
        result.innerText += "\nPlease enter vaild results";

    }
    resultsLink.style.display = "inline"; 
    modalInfo.style.display = "none";
}

// playButton.addEventListener("click", function (e) {
//     e.preventDefault();
//     getValues();
// });

function getValues() {
    
}

// listen to the user typing live in each input
heartGirthInput.addEventListener("input", getHeartGirth);
lengthInput.addEventListener("input", getLength);

function getHeartGirth() {
    // grabs the value of the heartGirth based on user input
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
    // grabs the value of the length based on user input
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
    if (heartGirthValid && lengthValid) {
        // playButton.disabled = false;
        calculateWeight();
    } else {
        // playButton.disabled = true;
        result.innerText = "";
    }
}

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function() {
    location.reload();
});