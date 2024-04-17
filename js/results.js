// Gets the userInfo
const userInfo = JSON.parse(localStorage.getItem('userInfo'));

if (userInfo) {
  // Query the API for matches for our cat
  const apiUrl = `https://api-staging.adoptapet.com/search/pet_search?key=hg4nsv85lppeoqqixy3tnlt3k8lj6o0c&v=3&output=json&city_or_zip=${userInfo.location}&geo_range=${userInfo.geoRange}&species=cat&sex=${userInfo.gender}&age=${userInfo.age}&color_id=${userInfo.color}&pet_size_range_id=&hair=${userInfo.hair}&bonded_pair=&special_needs=${userInfo.specialNeeds}&include_mixes=&added_after=&start_number=1&end_number=15&meta_only=0`
  
  // Make call to API
  fetch(apiUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // Creating match results array 
    const catResults = data.pets;
    
    // Save the cat results to the localStorage
    localStorage.setItem('catResults', JSON.stringify(catResults));
    
    if ('exception' in data) { // Check for no pets found
      generateNoPetsMessage();
    } else {
      const favoriteCats = JSON.parse(localStorage.getItem('favoriteCats'));
      
      // Display the rows with the cat results
      generateMatchRows(catResults);
      
      // Mark the entries that have been added as favorites
      if (favoriteCats) {
        favoriteCats.forEach((favoriteCat) => {
          for (let i = 0; i < catResults.length; i++) {
            if(catResults[i].pet_name.includes(favoriteCat.name)) {
              $(`span[data-index="${i}"]`).removeAttr('hidden');
            }
          } 
        }) 
      } 
    }
  })
} else generateNoPetsMessage();


//////////
// Event Listeners
//////////
const resultsDivElement = $('.results');
let favoriteCat = {};

resultsDivElement.on('click', (event) => {
  
  
  const catResults = JSON.parse(localStorage.getItem('catResults'));
  
  // create the favorite cat object being added
  
  if (!jQuery.isEmptyObject($(event.target).data())) { // only execute if on a button with a data-index attribute
    favoriteCat = {
      name: catResults[$(event.target).data('index')].pet_name,
      breed: catResults[$(event.target).data('index')].primary_breed,
      image: catResults[$(event.target).data('index')].large_results_photo_url,
      gender: catResults[$(event.target).data('index')].sex,
      age: catResults[$(event.target).data('index')].age,
      resident: `${catResults[$(event.target).data('index')].addr_city}, ${catResults[$(event.target).data('index')].addr_state_code}`,
    }
    
    
    // generate the list of favorite cats
    // check to see if there is an existing array with favorite cats.  If not then create a new array.
    let favoriteCats = JSON.parse(localStorage.getItem('favoriteCats'));
    
    if (favoriteCats) {
      // Checking if the favorite cat already exists because we don't want to add another one of the same one to the list
      if (!favoriteCats.find((cat) => {
        return JSON.stringify(cat) === JSON.stringify(favoriteCat);
      })) {
        // Add to favorite list
        favoriteCats.push(favoriteCat);
        
        // Show the favorite list icon for selected cats
        $(event.target).siblings('span').removeAttr('hidden');
        localStorage.setItem('favoriteCats', JSON.stringify(favoriteCats));
      }
      else if (favoriteCats.find((cat) => {
        return JSON.stringify(cat) === JSON.stringify(favoriteCat);
      })) {// remove favorites if they exist in the favorite array
        favoriteCats.filter((cat, index, array) => {
          if (cat.name === favoriteCat.name) {
            array.splice(index,1);
            localStorage.setItem('favoriteCats', JSON.stringify(favoriteCats));
            $(event.target).siblings('span').attr('hidden', '');
          }
        })
      }  
      else { // no favorite array yet so create one
        favoriteCats = [favoriteCat];
        localStorage.setItem('favoriteCats', JSON.stringify(favoriteCats));
        $(event.target).siblings('span').removeAttr('hidden');
      }
    }
  }
})


//////////
// Function Delcarations
//////////
function generateMatchRows(catResults) {
  const resultsDivElement = $('.results');
  
  // Creating the elements
  const divContainerElement = $(`<div class="container">`);
  
  for (let i = 0; i < catResults.length; i++) {
    
    
    const rowDivElement = $(`<div class="row text-left border">`)
    const firstRowDivElement = $(`<div class="row">`);
    const nameDivElement = $(`<div class="col-4 mb-3 catName">Name: ${catResults[i].pet_name}</div>`);
    const genderDivElement = $(`<div class="col-4 mb-3">Gender: ${catResults[i].sex}</div>`);
    const breedDivElement = $(`<div class="col-4 mb-3">Breed: ${catResults[i].primary_breed}</>`);
    const secondRowDivElement = $(`<div class="row">`);
    const imageDivElement = $(`<div class="col-8 mb-3">`);
    const aDivElement = $(`<a class="link" target="_blank" href=${catResults[i].large_results_photo_url}>Click here for your Purr-fect image</a>`)
    const locationDivElement = $(`<div class="col-4 mb-3">Location: ${catResults[i].addr_city}, ${catResults[i].addr_state_code}</div>`);
    const thirdRowDivElement = $(`<div class="row justify-content-center mb-3">`);
    const addToFavButtonElement = $(`<button  type= "button" class="col-2 btn btn-outline-secondary" data-index=${i}>Add/Remove to Favorite</button>`)
    const heartImageElement = $(`<span class="col-1" hidden data-index=${i}>😻</span>`);
    
    
    // Appending them back to the HTML to the results div element
    firstRowDivElement.append(nameDivElement);
    firstRowDivElement.append(genderDivElement);
    firstRowDivElement.append(breedDivElement);
    secondRowDivElement.append(imageDivElement);
    imageDivElement.append(aDivElement);
    secondRowDivElement.append(locationDivElement);
    thirdRowDivElement.append(addToFavButtonElement);
    thirdRowDivElement.append(heartImageElement);
    rowDivElement.append(firstRowDivElement);
    rowDivElement.append(secondRowDivElement);
    rowDivElement.append(thirdRowDivElement)
    divContainerElement.append(rowDivElement);
    resultsDivElement.append(divContainerElement);
  }
}

function generateNoPetsMessage() {
  const resultsDivElement = $('.results'); 
  const rowDivElement = $(`<div class="row text-left">`)
  const messageH2Element = $(`<h2 >No Purr mate found 😿.  Please enter new search criteria on the Form page.</h2>`);
  
  rowDivElement.append(messageH2Element);
  resultsDivElement.append(rowDivElement);
}