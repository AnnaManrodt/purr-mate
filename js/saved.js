function generateMatchRows(savedCats) {
  // Your existing code for generating rows goes here
  const resultsDivElement = $('.dataContainer');
    
  // Creating the elements
  const divContainerElement = $(`<div class="container">`);

  
  // Loop over each saved cat
  savedCats.forEach((cat, index) => {
      // Creating the elements for each cat
      const divContainerElement = $(`<div class="container">`);
      
      const rowDivElement = $(`<div class="row text-left border">`);
      const firstRowDivElement = $(`<div class="row">`);
      const nameDivElement = $(`<div>Name: ${cat.name} </div>`);
      const genderDivElement = $(`<div class="col-4 mb-3">Gender: ${cat.sex}</div>`);
      const breedDivElement = $(`<div class="col-4 mb-3">Breed: ${cat.primary_breed}</div>`);
      const secondRowDivElement = $(`<div class="row">`);
      const imageDivElement = $(`<div class="col-8 mb-3">`);
      const aDivElement = $(`<a class="link" href=${cat.large_results_photo_url}>Image: ${cat.large_results_photo_url}</a>`)
      const locationDivElement = $(`<div class="col-4 mb-3">Location: ${cat.addr_city}, ${cat.addr_state_code}</div>`);
      const thirdRowDivElement = $(`<div class="row justify-content-center mb-3">`);

      const heartImageElement = $(`<span class="col-1" hidden data-index=${index}>😻</span>`);
      const starRating = $(`<fieldset class="starability-basic">
          <legend>Purr Rating:</legend>
          <input type="radio" id="no-rate-${index}" class="input-no-rate" name="rating-${index}" value="0" checked aria-label="No rating." />
          <input type="radio" id="first-rate1-${index}" name="rating-${index}" value="1" />
          <label for="first-rate1-${index}" title="Terrible">1 star</label>
          <input type="radio" id="first-rate2-${index}" name="rating-${index}" value="2" />
          <label for="first-rate2-${index}" title="Not good">2 stars</label>
          <input type="radio" id="first-rate3-${index}" name="rating-${index}" value="3" />
          <label for="first-rate3-${index}" title="Average">3 stars</label>
          <input type="radio" id="first-rate4-${index}" name="rating-${index}" value="4" />
          <label for="first-rate4-${index}" title="Very good">4 stars</label>
          <input type="radio" id="first-rate5-${index}" name="rating-${index}" value="5" />
          <label for="first-rate5-${index}" title="Amazing">5 stars</label>
      </fieldset>`);      
      const deleteButton = $(`<button class="btn btn-outline-danger delete-button">Delete</button>`);
      // Set a custom data attribute to store the index of the saved cat
      deleteButton.attr('data-index', index);

      firstRowDivElement.append(nameDivElement);
      firstRowDivElement.append(genderDivElement);
      firstRowDivElement.append(breedDivElement);
      secondRowDivElement.append(imageDivElement);
      imageDivElement.append(aDivElement);
      secondRowDivElement.append(locationDivElement);
      thirdRowDivElement.append(starRating);
      thirdRowDivElement.append(deleteButton);
      thirdRowDivElement.append(heartImageElement);
      rowDivElement.append(firstRowDivElement);
      rowDivElement.append(secondRowDivElement);
      rowDivElement.append(thirdRowDivElement)
      divContainerElement.append(rowDivElement);
   
      resultsDivElement.append(divContainerElement);

      // Event listener for delete button
      deleteButton.on('click', function() {
          const indexToDelete = $(this).data('index');
          savedCats.splice(indexToDelete, 1); // Remove the cat from the array
          localStorage.setItem('favoriteCats', JSON.stringify(savedCats)); // Update local storage
          $(this).closest('.container').remove(); // Remove the container from the UI
  });

        // Event listener for star rating
        $(`input[name="rating-${index}"]`).on('change', function() {
          console.log("Rating changed:", $(this).val());
          const ratingValue = $(this).val();
          // Ensure that savedCats[index] exists before updating the rating property
          if (savedCats[index]) {
              savedCats[index].rating = ratingValue; // Update the rating for the corresponding saved cat
              console.log("Saved cats after rating update:", savedCats);
              localStorage.setItem('favoriteCats', JSON.stringify(savedCats)); // Update local storage
              console.log("Saved cats in local storage:", JSON.parse(localStorage.getItem('favoriteCats')));
          }
      });
  });
}

// Load saved cats from local storage
let savedCats = JSON.parse(localStorage.getItem('favoriteCats')) || [];

// Generate match rows
generateMatchRows(savedCats);



 

// have a default message of no cats saved yet


// import React, { useState, useEffect } from 'react';*/



