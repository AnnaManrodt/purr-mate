/*
XX-TO DO: need dummy data userInfo object
XX-TO DO: get info from local storage and prase (JSON.Prase......)
XX-TO DO: fetch from api based off of saved results we just prased 

XX-go in make sure you are passing the correct parameters to the api using spilt and repalcing (for hints look at the mini prject )


TO DO: dynamtically display each pet with stying and information, 
things to display (if time display img, if not dont worry about it we can give them a link t othe img instead of displaying each img and saving it and all that)
we do want what age the cat will be, we want the name, display breed, display color, display discription, display address and conteact info, (inside of a contact object we could display)  display cat disability

--Call to request initial search of cat
https://api-staging.adoptapet.com/search/pet_search?key=hg4nsv85lppeoqqixy3tnlt3k8lj6o0c&v=3&output=json&city_or_zip=47374&geo_range=50&species=cat&sex=&age=young&color_id=54&pet_size_range_id=2&hair=&bonded_pair=&special_needs=&include_mixes=&added_after=&start_number=1&end_number=30&meta_only=0

--If you want more details, need to call url listed under details_url

capture abd put into an different object called
let favResults = {
  name: text
  breed: text
  color: text
  img: url, text 
  discr: text
  addr_city: object: city -text, state - text 
  disabilty: boolean
  
}

XX-TO DO: dynamtically display this object, 
XX-TO DO: style this guy with bootstrap good luck! (dont forget the save button)
XX-TO DO: use th api to limit results too display 2 pages 

XX-TO DO: save button, add event listener to a button that look like a heart or paw print or if htat to hard just text
when the button is pressed it should store that animal into local storage as a sperate thing from userInfo, mayeb store as favResults
clicking favs should  NOT bring you to th favs page!!!!!


if we have time give this page a saved abailty so that the user can go back and forth between reults and saved cats

*/


////////////
// Dummy Data
////////////

// Need to remove this once the form js is saving the userInfo to the localstorage
// Setup for userInfo to mock the user saving their prefs to localStorage
// Temporary file, don't forget to remove 
let userInfoData = {
  specialNeeds: 0,
  color: 46,
  hair: 'medium',
  geoRange: 50,
  location: 55449,
  age: 'young',
  gender: 'm'
}

localStorage.setItem('userInfo', JSON.stringify(userInfoData));

/////////////
// Execute Code Flow
/////////////

// Get the userInfo
const userInfo = JSON.parse(localStorage.getItem('userInfo'));

// Query the API for matches for our cat
const apiUrl = `https://api-staging.adoptapet.com/search/pet_search?key=hg4nsv85lppeoqqixy3tnlt3k8lj6o0c&v=3&output=json&city_or_zip=${userInfo.location}&geo_range=${userInfo.geoRange}&species=cat&sex=${userInfo.gender}&age=${userInfo.age}&color_id=${userInfo.color}&pet_size_range_id=2&hair=${userInfo.hair}&bonded_pair=&special_needs=${userInfo.specialNeeds}&include_mixes=&added_after=&start_number=1&end_number=30&meta_only=0`

// Make call to API
fetch(apiUrl)
.then( (response) => {
  return response.json();
})
.then ( (data) => {
  // Creating match results array 
  const catResults = data.pets;
  console.log(catResults);
  
  // Save the cat results to the localStorage
  localStorage.setItem('catResults', JSON.stringify(catResults));
  
  // Display the rows with the cat results
  generateMatchRows(catResults);
  
  // Mark the entries that have been added as favorites
  const favoriteCats = JSON.parse(localStorage.getItem('favoriteCats'));
  if (favoriteCats) {
    favoriteCats.forEach( (cat) => {
      $(`span[data-index="${cat.index}"]`).removeAttr('hidden');
    })
  }
})



//////////
// Event Listners
//////////
const resultsDivElement = $('.results');
let favoriteCat = {};

resultsDivElement.on('click', (event) => {
  
  
  const catResults = JSON.parse(localStorage.getItem('catResults'));
  
  // create the favorite cat object being added
  
  if (!jQuery.isEmptyObject($(event.target).data())) { // only execute if on a button with a data-index attribute
    favoriteCat = {
      name: catResults[$(event.target).data('index')].pet_name,
      // specialNeeds: catResults[$(event.target).data('index')].special_needs,
      breed: catResults[$(event.target).data('index')].primary_breed,
      image: catResults[$(event.target).data('index')].large_results_photo_url,
      gender: catResults[$(event.target).data('index')].sex,
      age: catResults[$(event.target).data('index')].age,
      resident: `${catResults[$(event.target).data('index')].addr_city}, ${catResults[$(event.target).data('index')].addr_state_code}`,
      index: $(event.target).data('index')
    }
    
    
    // generate the list of favorite cats
    // check to see if there is an existing array with favorite cats.  If not then create a new array.
    let favoriteCats = JSON.parse(localStorage.getItem('favoriteCats'));
    
    if (favoriteCats) {
      // Checking if the favorit cat already exists because we don't want to add another one of the same one to the list
      if ( !favoriteCats.find( (cat) => {
        return JSON.stringify(cat) === JSON.stringify(favoriteCat);
      })) {
        // Add to favorite list
        favoriteCats.push(favoriteCat);  
        
        // Show the favorite list icon for selected cats
        $(event.target).siblings('span').removeAttr('hidden');
        localStorage.setItem('favoriteCats', JSON.stringify(favoriteCats));
      }
    } else {
      favoriteCats = [favoriteCat];
      localStorage.setItem('favoriteCats', JSON.stringify(favoriteCats));
      $(event.target).siblings('span').removeAttr('hidden');
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
    const aDivElement = $(`<a class="link" href=${catResults[i].large_results_photo_url}>Image: ${catResults[i].large_results_photo_url}</a>`)
    const locationDivElement = $(`<div class="col-4 mb-3">Location: ${catResults[i].addr_city}, ${catResults[i].addr_state_code}</div>`);
    const thirdRowDivElement = $(`<div class="row justify-content-center mb-3">`);
    const addToFavButtonElement = $(`<button class="col-2" data-index=${i}>Add to Favorite List</button>`)
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