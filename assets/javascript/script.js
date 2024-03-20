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
let calcCm = 0.393700787;
let calcM = 39.3700787;

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
    // Your logic to calculate results and display them
    result.innerHTML = "Results displayed.";

    // Show the link
    resultsLink.style.display = "inline";
    modalInfo.style.display = "none";

    

    // Calculate weight in kg
    weightKg = (heartGirth * heartGirth * length) / 330 / 2.20462; // Convert pounds to kg


    // Display result
    result.innerText = "Horse's Weight: " + Math.floor(weightKg) + " kg";
    let weightCatagory;
    // Determine horse image based on weight
    if (weightKg >= 800) {
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
        case 'overweight':
            img = "fat-horse";
            txt = "\nYour horse is overweight.";
            break;
        case 'healthy':
            img = "healthy-horse";
            txt = "\nYour horse is a healthy weight";
            break;
        case 'underweight':
            img = "skinny-horse";
            txt = "\nYour horse is underweight";
            break;
        case 'small':
            img = "shetland";
            txt = "\nYour horse is healthy for its small size.";
            break;
        case 'invalid':
            img = "laughing-icon";
            txt = "\nPlease enter valid results (weight must be at least 150; kg)";
            break;
    }
    horseImage.src = `assets/images/${img}.png`;
    horseImage.alt = `image of ${weightCatagory} horse`;
    result.innerText += txt;
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
        // Show modal info and original horse image
        modalInfo.style.display = "inline";
        resultsLink.style.display = "none";
        horseImage.src = "assets/images/jumping-icon.png";
    }
}

// reset button
reset.addEventListener("click", function () {
    heartGirthInput.value = "";
    lengthInput.value = "";
    result.innerText = "";
    modalInfo.style.display = "inline";
    resultsLink.style.display = "none";
    horseImage.src = "assets/images/jumping-icon.png";
});