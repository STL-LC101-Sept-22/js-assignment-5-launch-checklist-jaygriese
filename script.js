// Write your JavaScript code here!

// const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()

   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list
        // of planets and add that information to your destination.

    const planet = pickPlanet(listedPlanets);
    const name = planet.name;
    const diameter = planet.daimeter;
    const star = planet.star;
    const distance = planet.distance;
    const moons = planet.moons;
    const imageUrl = planet.image;
    addDestinationInfo(document,name, diameter, star, distance, moons, imageUrl);
   })
   
});

/* <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>


                // <img src="${imageUrl}"> ` */

              