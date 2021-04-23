// An instance of our SimpleMap, created below when the window loads.
let map;

// Update the map to show markers for the set of observations
function updateMap(observations, map) {
  // Clear the current markers on the map (if any)
  map.clear();

  // TODO: call the Simple Map's addObservation method for every one
  // of the observations in order to add markers to the map.
  observations.forEach((observation) => {
    // observation.addObservation;
    map.addObservation(observation);
  });
}

// Update the table to show markers for the set of observations
function updateCards(observations) {
  // Remove any current data from the table
  clearAllCards();

  // Populate the table with all observation data we want to show
  observations.forEach((observation) => {
    // TODO: call the buildRowForObservation function with the current observation
    // and use that to add it to the table with the addRowToTable function.

    addCards(buildCardForObservation(observation));
  });
}

// Generic function to show a set of observations with the given title
function showObservations(observations, title) {
  updateMap(observations, map);
  updateCards(observations);
  updateTitle(`${title} (${observations.length})`);
}


// Show all species on the map and table
function showAll() {
  // Get all the observations from our data.js and format them so we can work with the data
  const observations = getAllObservations();
  showObservations(observations, 'All Species');
  // Update the map and table
  updateMap(observations, map);
  updateCards(observations);
  updateCardsTitle(`All Species (${observations.length})`);
}

// Show native species on the map and table
function showOnlyNative() {
  // Get all the observations from our data.js and format them so we can work with the data
  const observations = getAllObservations();
  // Filter out any that aren't native species
  const native = filterOnlyNative(observations);

  // Update the map and table
  updateMap(native, map);
  updateCards(native);
  updateCardsTitle(`Only Native Species (${native.length})`);
}

// Show introduced species on the map and table
function showOnlyIntroduced() {
  // Get all the observations from our data.js and format them so we can work with the data
  const observations = getAllObservations();
  // Filter out any that aren't introduced species
  const introduced = filterOnlyIntroduced(observations);

  // Update the map and table
  updateMap(introduced, map);
  updateCards(introduced);
  updateCardsTitle(`Only Introduced Species (${introduced.length})`);
}

function start() {
  // Create our map object for Seneca's Newnham campus
  map = new SimpleMap("map-container", 43.7955, -79.3496);

  // TODO: create click handlers for all three buttons.
  // The "All Species" button should call the showAll function.
  // The "Only Native Species" button should call the showOnlyNative function.
  // The "Only Introduced Species" button should call the showOnlyIntroduced function.
  // In your solution, show both ways of creating click event handlers (i.e.,
  // using the on* property and also addEventListener function).
  observations = getAllObservations();
  document.getElementById("show-all").onclick = function () {
    showAll();
  };
  document.getElementById("show-native").onclick = function () {
    showOnlyNative();
  };
  document.getElementById("show-introduced").onclick = function () {
    showOnlyIntroduced();
  };

  // Connect the search form
  const searchForm = document.querySelector('form');
  searchForm.onsubmit = function(event) {
    // Stop the form from trying to submit over the network. We'll process the data here.
    event.preventDefault();

    // TODO: get the value from the search form input and pass it to the
    // search() function (already defined in js/search.js)
    search(searchForm.search_query.value);
    return false;
  };
  // Show all species observations by default when we start.
  showAll();
}

// TODO: replace this console.log with the code necessary to call the start
// function when the page has finished fully loading.
console.log(`OK, let's begin!`);
document.addEventListener("DOMContentLoaded", start);
