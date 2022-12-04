require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

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


function formSubmission(document, pilotName, copilotName, fuelLevel, cargoMass) {  
    let testFormButton = document.getElementById("testForm");
    testFormButton.addEventListener("submit", function(event) {
 
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
 
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    let launchStatus = document.getElementById("input[name=launchStatus]");
 
    if (validateInput(pilotName.value) === "" || validateInput(copilotName.value) === "" || 
    validateInput(fuelLevel.value) === "" || validateInput(cargoMass.value) === "") {
     alert("All fields are required");
     event.preventDefault();
    } else {pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch.`
    copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch.`

    }  if (fuelLevel < 10000) { 
        fuelStatus.innerHTML = "Not enough fuel for the journey";
        faultyItems.style.visibility = 'visible';
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
   } 
   
   else { 
    fuelStatus.innerHTML = "Fuel level is high enough for Launch."
   }
   
   if (cargoLevel > 10000) {
        faultyItems.style.visibility = "visible";
        cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";

   } else {
    cargoStatus.innerHTML = "Cargo Mass low enough for launch";

   } if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        launchStatus.style.color = "green";
        launchStatus.innerHTML = "Shuttle ready for launch";   
        faultyitems.style.visibility
    } else {
        launchStatus.style.color = "green";
        launchStatus.innerHTML = "Shuttle ready for launch";    
    }
})
}

async function myFetch() {
    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
    let data = await planetsReturned.json()
    return data
};

function pickPlanet(planets) { 
    let planetIndex = Math.round(Math.random() * planets.length);
    return planets[planetIndex];
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;