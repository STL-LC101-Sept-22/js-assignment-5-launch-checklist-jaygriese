

window.addEventListener("load", function() {

    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
       
 
     const planet = pickPlanet(listedPlanets);
     const name = planet.name;
     const diameter = planet.daimeter;
     const star = planet.star;
     const distance = planet.distance;
     const moons = planet.moons;
     const imageUrl = planet.image;
     addDestinationInfo(document,name, diameter, star, distance, moons, imageUrl);

     formSubmission();
    })

 });
// ****!!*!***!*!*!**!*!*!*!*!*!*!*!*!*!**!*!**!***!*!*!*!*
//  Make sure to call your formSubmission() function at the appropriate time in your script.js file!
