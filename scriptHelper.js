require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
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
                <img src="${imageUrl}"> `;
}

function validateInput(testInput) {

  let numberInput = Number(testInput);

  if (testInput === "") {
    return "Empty";
  } else if (isNaN(numberInput)) {
    return "Not a Number";
  } else if (isNaN(numberInput) === false) {
    return "Is a Number";
  }
}

function formSubmission(
  document,
  pilotName,
  copilotName,
  fuelLevel,
  cargoMass
) {
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  let launchStatus = document.getElementById("launchStatus");

  if (
    validateInput(pilotName) === "Empty" ||
    validateInput(copilotName) === "Empty" ||
    validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoMass) === "Empty"
  ) {
    launchStatus.innerHTML = "Awaiting Information Before Launch";
    launchStatus.style.color = "black";
    alert("All fields are required");
    pilotStatus.style.visibility= "hidden";
    copilotStatus.style.visibility= "hidden";
    fuelStatus.style.visibility= "hidden";
    cargoStatus.style.visibility= "hidden";
    return

  } if (
    validateInput(pilotName) === "Is a Number" ||
    validateInput(copilotName) === "Is a Number" ||
    validateInput(fuelLevel) === "Not a Number" ||
    validateInput(cargoMass) === "Not a Number"
    ) {
    launchStatus.innerHTML = "Awaiting Information Before Launch";
    launchStatus.style.color = "black";
    pilotStatus.style.visibility= "hidden";
    copilotStatus.style.visibility= "hidden";
    fuelStatus.style.visibility= "hidden";
    cargoStatus.style.visibility= "hidden";
    alert("Make sure to enter valid information for each field!");
    return

  } else {
    console.log("assigning names");
    pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch.`;
    copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch.`;
    faultyItems.style.visibility = "visible";
  }

  if (fuelLevel < 10000) {
    fuelStatus.innerHTML = "Not enough fuel for the journey";
    faultyItems.style.visibility = "visible";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "#C7254E";
  } else {
    fuelStatus.innerHTML = "Fuel level is high enough for Launch.";
  }

  if (cargoMass > 10000) {
    faultyItems.style.visibility = "visible";
    cargoStatus.innerHTML ="There is too much mass for the shuttle to take off";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "#C7254E";
  } else {
    cargoStatus.innerHTML = "Cargo Mass low enough for launch";
  }
  if (fuelLevel >= 10000 && cargoMass <= 10000) {
    launchStatus.style.color = "green";
    launchStatus.innerHTML = "Shuttle ready for launch";
    faultyItems.style.visibility = 'visible';
  } else {
    launchStatus.style.color = "red";
    launchStatus.innerHTML = "Shuttle not ready for launch";
  }

}

async function myFetch() {
  let planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  );
  let data = await planetsReturned.json();
  return data;
}

function pickPlanet(planets) {
  let planetIndex = Math.round(Math.random() * planets.length);
  return planets[planetIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;