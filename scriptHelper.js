// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    console.log(imageUrl);
    console.log(name);
    console.log(diameter);
    console.log(star);
    console.log(distance);
    console.log(moons);


    let missionTarget = document.getElementById("missionTarget");
   // Here is the HTML formatting for our mission target div.
   missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}"> `
   }

function validateInput(testInput) {
   if(testInput === "") {
    return "Empty";
   } else if (isNan(testInput) === true) {
    return "Not a Number";
   } else if (testInput = Number) {
    return "Is a Number";
   }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
//    let testForm = document.getElementById("testForm");

   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");

//    testForm.addEventListener("submit", function(event) {

   if (validateInput(pilot) === "" || validateInput(copilot) === "" || 
   validateInput(fuel) === "" || validateInput(cargoLevel) === "") {
    alert("All fields are required");
    event.preventDefault();
    
   } if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" ||
    validateInput(fuel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("You entered invalid information");
    } else {pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch.`
    copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch.`

    let launchStatus = document.getElementById("input[name=launchStatus]");

   }  if (Number(fuel) < 10000) { 
        fuelStatus.innerHTML = "Not enough fuel for the journey";
        faultyItems.style.visibility = 'visible';
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";

   } if (Number(cargoMass) > 10000) {
        faultyItems.style.visibility = "visible";
        cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";

   } else {
        launchStatus.style.color = "green";
        launchStatus.innerHTML = "Shuttle ready for launch";    
    };
};

async function myFetch() {
    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
    let data = await planetsReturned.json()
    return data
};

function pickPlanet(planets) { 
    let planetIndex = Math.round(Math.random() * planets.length);
    return planetIndex;
    // return one planet from the list with a randomly-selected index.
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
