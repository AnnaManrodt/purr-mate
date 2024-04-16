function generateMatchRows(savedCats) {
  console.log('savedCats:', savedCats); // Log the value of savedCats
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
      const nameDivElement = $(`<div class = "col-4 mb-3 " style="font-size: 25px; " >Name: ${cat.name} </div>`);
      const genderDivElement = $(`<div class="col-4 mb-3">Gender: ${cat.gender}</div>`);
      const breedDivElement = $(`<div class="col-4 mb-3">Breed: ${cat.breed}</div>`);
      const secondRowDivElement = $(`<div class="row">`);
      const imageDivElement = $(`<div class="col-8 mb-3">`);
      const aDivElement = $(`<a class="link" href=${cat.image}>Image: ${cat.image}</a>`)
      const locationDivElement = $(`<div class="col-4 mb-3">Location: ${cat.resident}</div>`);
      const thirdRowDivElement = $(`<div class="row justify-content-between mb-3">`);
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
      const deleteButton = $(`<button class="btn btn-outline-danger  delete-button col-1 mb-3 " >Delete</button>`);
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
      function displayRating() {
        savedCats.forEach((cat, index) => {
            const ratingValue = cat.rating;
            $(`input[name="rating-${index}"][value="${ratingValue}"]`).prop('checked', true);
        });
    }
    
    // Call the function to display the rating
    displayRating();
  });
}


// Load saved cats from local storage
let savedCats = JSON.parse(localStorage.getItem('favoriteCats')) || [];

// Generate match rows
generateMatchRows(savedCats);

// fix so it appears once all favorites are deleted. 
function toggleNoSavedPurrMateMessage() {
    const noSavedPurrMateMessage = document.getElementById('noSavedPurrMateMessage');
    const contentPresent = document.querySelector('.centered-text'); // Change '.someContentClass' to the appropriate selector

    if (contentPresent) {
        noSavedPurrMateMessage.style.display = 'none'; // Hide the message
    } else {
        noSavedPurrMateMessage.style.display = 'block'; // Show the message
    }
}

toggleNoSavedPurrMateMessage();

 




