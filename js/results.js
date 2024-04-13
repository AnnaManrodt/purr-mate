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

    TO DO: dynamtically display this object, 
    TO DO: style this guy with bootstrap good luck! (dont forget the save button)
    TO DO: use th api to limit results too display 2 pages 

    TO DO: save button, add event listener to a button that look like a heart or paw print or if htat to hard just text
    when the button is pressed it should store that animal into local storage as a sperate thing from userInfo, mayeb store as favResults
    clicking favs should  NOT bring you to th favs page!!!!!


    if we have time give this page a saved abailty so that the user can go back and forth between reults and saved cats

*/


////////////
// Dummy Data
////////////

// Setup for userInfo to mock the user saving their prefs to localStorage
let userInfoData = {
	special_needs: 0,
	color: 46,
	hair: 'medium',
	geo_range: 50,
	zip: 55449,
	age: 'young',
	sex: 'm'
}

localStorage.setItem('userInfo', JSON.stringify(userInfoData));

/////////////
// Execute Code Flow
/////////////

// Get the userInfo
const userInfo = JSON.parse(localStorage.getItem('userInfo'));

// Query the API for matches for our cat
const apiUrl = `https://api-staging.adoptapet.com/search/pet_search?key=hg4nsv85lppeoqqixy3tnlt3k8lj6o0c&v=3&output=json&city_or_zip=${userInfo.zip}&geo_range=${userInfo.geo_range}&species=cat&sex=${userInfo.sex}&age=${userInfo.age}&color_id=${userInfo.color}&pet_size_range_id=2&hair=${userInfo.hair}&bonded_pair=&special_needs=${userInfo.special_needs}&include_mixes=&added_after=&start_number=1&end_number=30&meta_only=0`

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
const nameDivElement = $(`<div class="col-md mb-3">Name: ${catResults[i].pet_name}</div>`);
const genderDivElement = $(`<div class="col-md mb-3">Gender: ${catResults[i].sex}</div>`);
const breedDivElement = $(`<div class="col-md mb-3">Breed: ${catResults[i].primary_breed}</>`);
const secondRowDivElement = $(`<div class="row">`);
const imageDivElement = $(`<div class="col-md mb-3">Image: ${catResults[i].large_results_photo_url}</div>`);
const locationDivElement = $(`<div class="col-md mb-3">Location: ${catResults[i].addr_city}, ${catResults[i].addr_state_code}</div>`);


// Appending them back to the HTML to the results div element
firstRowDivElement.append(nameDivElement);
firstRowDivElement.append(genderDivElement);
firstRowDivElement.append(breedDivElement);
secondRowDivElement.append(imageDivElement);
secondRowDivElement.append(locationDivElement);
rowDivElement.append(firstRowDivElement);
rowDivElement.append(secondRowDivElement);
divContainerElement.append(rowDivElement);
resultsDivElement.append(divContainerElement);
}

{/* <div class="container">
        <div class="row text-center">
          <div class="row">
            <div class="col-md">
              Name: 
            </div>
            <div class="col-md">
              Gender: 
            </div>
            <div class="col-md">
              Breed: 
            </div>
          </div>
          <div class="row">
            <div class="col-md">
              Image: 
            </div>
            <div class="col-md">
              Location: 
            </div>
          </div>
        </div>
      </div> */}


}