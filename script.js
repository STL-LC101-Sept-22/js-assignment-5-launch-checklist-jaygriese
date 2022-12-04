window.addEventListener("load", function () {
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse
      .then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
      })
      .then(function () {
        console.log(listedPlanets);
  
        const planet = pickPlanet(listedPlanets);
        const name = planet.name;
        const diameter = planet.daimeter;
        const star = planet.star;
        const distance = planet.distance;
        const moons = planet.moons;
        const imageUrl = planet.image;
        addDestinationInfo(
          document,
          name,
          diameter,
          star,
          distance,
          moons,
          imageUrl
        );
      });
  
    let form = document.querySelector("form");
    // console.log(form)

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
        
      formSubmission(document, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
    //   console.log(document, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
    });
  });