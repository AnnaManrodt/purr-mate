
//declared varibles gobally so we can use them through out the code
const form = $(".form-group")
let zipCodeInput = $("#zipCode")
let translatedNeeds = "";
let translatedColor = "";
let translatedfurType = "";
let transatedAge = "";
let translatedGeoRange = "";
let translatedGender = "";

//this submits the form and checks that each field has been filled out 
$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault();
    specialNeedsTranslation(0);
    if (!form[0].checkValidity()) {
      console.log("form invalid");
      form.querySelectorAll("input").forEach(i => {
        i.classList.add("invalid");
      });

    }
    else if(zipCodeInput.val().length == 5){
      alert('Please enter a number with at least 5 digits.');
      event.preventDefault();
    }
    //if the form is filled out correct it moves on to this 
    else {
      //translated the data from what was inputed into the feild into what the api can actaully read and fetch the things we want it
      translatedNeeds = specialNeedsTranslation($("#special_needs").val());
      translatedColor = getColorFromNumber($("#color").val());
      translatedfurType = furTypeTranslation($("#furType").val());
      translatedAge = ageTranslation($("#age").val());
      translatedGeoRange = geoRangeTranslation($("#geoRange").val());
      translatedGender = genderTranslation($("#gender").val());
      //furType is connected to do you like a clean house 
    }
    //this object stores all the user data so it can be saved in local and pull out in our results js
    let userInfo = {
      email: $("#email").val(),
      specialNeeds: translatedNeeds,
      color: translatedColor,
      hair: translatedfurType,
      geoRange: translatedGeoRange,
      location: Number($("#zipCode").val()),
      age: translatedAge,
      gender: translatedGender,

    };
    //saves the object to local storage 
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    // console.log(userInfo);  
    //tells the submit button to take your to results page
    window.location.href = "../html/results.html";
  })
})

// from here down is all the translation functions for each of the form fields that needed to be translated 
function specialNeedsTranslation(special_needs) {
  const special_needsTranslationObject = {

    "Yes": 1,
    "No": 0
  };
  console.log(special_needs)
  console.log(special_needsTranslationObject[special_needs])
  return special_needsTranslationObject[special_needs] || null;
}

function getColorFromNumber(color) {
  const catColorObject = {
    "Black": 46,
    "Black & White or Tuxedo": 47,
    "Brown or Chocolate": 48,
    "Orange or Red": 54,
    "Spotted Tabby/Leopard Spotted": 56,
    "Tan or Fawn": 57
  };

  return catColorObject[color];
}

function furTypeTranslation(furType) {
  const furTypeTranslationObject = {
    "Yes": "short",
    "Sort of": "medium",
    "No": "long"
  };

  return furTypeTranslationObject[furType];
}

function geoRangeTranslation(geoRange) {
  const geo_rangeObjects = {
    "Less than 35 miles": 35,
    "Less than 50 miles": 50,
    "Less than 75 miles": 75,
    "Less than 100 miles": 100,
    "Less than 250 miles": 250
  };

  return geo_rangeObjects[geoRange] || null;
}

function ageTranslation(age) {
  const ageTranslationObject = {
    "Kitten": "kitten",
    "Young": "young",
    "Adult": "adult",
    "Senior": "senior"
  };
  console.log(age)
  return ageTranslationObject[age] || null;
}



function genderTranslation(gender) {
  const genderTranslationObject = {
    "Female": "f",
    "Male": "m",
    "I don't care, as long as they are a cat!": null
  };

  return genderTranslationObject[gender] || null;
}


