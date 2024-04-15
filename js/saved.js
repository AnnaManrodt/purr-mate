  
  
  // //TO DO: JSON parse the saved cats from the results page
  // })
//   localStorage.setItem('savedData', JSON.stringify(catFavorites));
  

  
const savedCats = JSON.parse(localStorage.getItem('favoriteCats'));
console.log(savedCats);

function generateMatchRows(savedCats) {
    console.log(savedCats)
    const resultsDivElement = $('.dataContainer');
    
    // Creating the elements
    const divContainerElement = $(`<div class="container">`);
    

for (let i = 0; i < savedCats.length; i++) {
    
    
    const rowDivElement = $(`<div class="row text-left border">`)
    const firstRowDivElement = $(`<div class="row">`);
    const nameDivElement = $(`<div>Name: ${savedCats[i].name} </div>`);
    const genderDivElement = $(`<div class="col-4 mb-3">Gender: ${savedCats[i].sex}</div>`);
    const breedDivElement = $(`<div class="col-4 mb-3">Breed: ${savedCats[i].primary_breed}</>`);
    const secondRowDivElement = $(`<div class="row">`);
    const imageDivElement = $(`<div class="col-8 mb-3">`);
    const aDivElement = $(`<a class="link" href=${savedCats[i].large_results_photo_url}>Image: ${savedCats[i].large_results_photo_url}</a>`)
    const locationDivElement = $(`<div class="col-4 mb-3">Location: ${savedCats[i].addr_city}, ${savedCats[i].addr_state_code}</div>`);
    const thirdRowDivElement = $(`<div class="row justify-content-center mb-3">`);
    const heartImageElement = $(`<span class="col-1" hidden data-index=${i}>😻</span>`);
    const deleteButton = $ (`<button class = "btn btn-outline-secondary"> Delete </button>`
    );
    const starRating = $(`<fieldset class="starability-basic">
    <legend>First rating:</legend>
    <input type="radio" id="no-rate" class="input-no-rate" name="rating" value="0" checked aria-label="No rating." />
    <input type="radio" id="first-rate1" name="rating" value="1" />
    <label for="first-rate1" title="Terrible">1 star</label>
    <input type="radio" id="first-rate2" name="rating" value="2" />
    <label for="first-rate2" title="Not good">2 stars</label>
    <input type="radio" id="first-rate3" name="rating" value="3" />
    <label for="first-rate3" title="Average">3 stars</label>
    <input type="radio" id="first-rate4" name="rating" value="4" />
    <label for="first-rate4" title="Very good">4 stars</label>
    <input type="radio" id="first-rate5" name="rating" value="5" />
    <label for="first-rate5" title="Amazing">5 stars</label>
  </fieldset>`)

    
    
    // Appending them back to the HTML to the results div element
    divContainerElement.append(nameDivElement);
    firstRowDivElement.append(genderDivElement);
    firstRowDivElement.append(breedDivElement);
    secondRowDivElement.append(imageDivElement);
    imageDivElement.append(aDivElement);
    secondRowDivElement.append(locationDivElement);
    thirdRowDivElement.append(deleteButton);
    thirdRowDivElement.append(heartImageElement);
    rowDivElement.append(firstRowDivElement);
    rowDivElement.append(secondRowDivElement);
    rowDivElement.append(thirdRowDivElement)
    divContainerElement.append(rowDivElement);
    divContainerElement.append(starRating);
    resultsDivElement.append(divContainerElement);
    
  }
}

 generateMatchRows(savedCats); 





/*addd event listener for delete button 
maybe a toggle button? 
have a default message of no cats saved yet
*/




// export default ItemList;



// /*
// figure out star rating 
// for passed int favResults  make an star attribute to save that represents the saved stars 
// figure out how to save rating in local storage 
// */




// /*
// once cat is deleted remove it from local storage and then resave list of save cats 
// import React, { useState, useEffect } from 'react';*/

// const ItemList = () => {
//   const [items, setItems] = useState(['userFavorite']);





