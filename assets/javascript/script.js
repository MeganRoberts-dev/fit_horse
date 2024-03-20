let result = document.getElementById('result');
let horseImage = document.getElementById("image");
let heartGirthInput = document.getElementById('heartgirth');
let lengthInput = document.getElementById('length');
let weightKg, heartGirth, length = 0;
let heartGirthValid, lengthValid = false;
let resultsLink = document.getElementById("results-link");
let modalInfo = document.getElementById("modalInfo");
document.getElementById('heartgirth_units').addEventListener("change", calculateWeight);
document.getElementById('length_units').addEventListener("change", calculateWeight);


function calculateWeight() {
    // Convert heart girth to inches
    heartGirth = parseFloat(heartGirthInput.value);
    switch (document.getElementById('heartgirth_units').value) {
        case 'cm':
            heartGirth = heartGirth * 0.393700787;
            break;

        case 'm':
            heartGirth = heartGirth * 39.3700787;
            break;
    }

    // Convert length to inches
    length = parseFloat(lengthInput.value);
    switch (document.getElementById('length_units').value) {
        case 'cm':
            length = length * 0.393700787;
            break;

        case 'm':
            length = length * 39.3700787;
            break;
    }
 // Your logic to calculate results and display them
 result.innerHTML = "Results displayed.";

 // Show the link
 resultsLink.style.display = "inline"; 
 modalInfo.style.display = "none";

 if (!heartGirth || !length) {
    // Show modal info and original horse image
    modalInfo.style.display = "inline";
    horseImage.src = "assets/images/jumping-icon.png";
    return;
}

    // Calculate weight in kg
    weightKg = (heartGirth * heartGirth * length) / 330 / 2.20462; // Convert pounds to kg


    // Display result
    result.innerText = "Horse's Weight: " + Math.floor(weightKg) + " kg";

    // Determine horse image based on weight
    if (weightKg >= 800) {
        horseImage.src = "assets/images/fat-horse.png";
        result.innerText += "\nYour horse is overweight.";
    } else if (weightKg >= 550) {
        horseImage.src = "assets/images/healthy-horse.png";
        result.innerText += "\nYour horse is a healthy weight";
    } else if (weightKg >= 250) {
        horseImage.src = "assets/images/skinny-horse.png";
        result.innerText += "\nYour horse is underweight";
    } else if (weightKg >= 50) {
        horseImage.src = "assets/images/shetland.png";
        result.innerText += "\nYour horse is healthy for its small size.";
    } else  {
        horseImage.src = "assets/images/laughing-icon.png";
        result.innerText += "\nPlease enter valid results (weight must be at least 150 kg)";
        return;
    
    }
}

// Listen to the user typing live in each input
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
        calculateWeight();
    } else {
        result.innerText = "";
    }
}

// reset button
reset.addEventListener("click", function() {
    heartGirthInput.value = "";
    lengthInput.value = "";
    result.innerText = "";
    modalInfo.style.display = "inline";
    resultsLink.style.display = "none";
    horseImage.src = "assets/images/jumping-icon.png";
});