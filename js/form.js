

const form = $(".form-group")
let translatedNeeds = "";
let translatedColor = "";
let translatedfurType = "";
let transatedAge = "";
let translatedGeoRange = "";
let translatedGender = "";
specialNeedsTranslation(0);

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

    else {

      specialNeedsTranslation(special_needs)

      translatedNeeds = specialNeedsTranslation($("#special_needs").val());
      translatedColor = getColorFromNumber($("#color").val());
      translatedfurType = furTypeTranslation($("#furType").val());
      translatedAge = ageTranslation($("#age").val());
      translatedGeoRange = geoRangeTranslation($("#geoRange").val());
      translatedGender = genderTranslation($("#gender").val());

    }
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
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    console.log(userInfo);

    window.location.href = "html/results.html";
  })
})


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
    "Sort of" : "medium",
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

function addNum(num1, num2){
  const added = num1 + num2;
  return added
}
console.log(addNum(1,2));

specialNeedsTranslation(0);

//transation for string
// })

//zip code form validation if statement

// submit.addEventListener('click', function(event){
//   if (form.checkValidity() === false){
//     console.log("form invalid");
//     form.querySelectorAll("input").forEach(i=>{
//       i.classList.add("invalid");
//     });
//   }


// let translatedNeeds = specialNeedsTranslation();
// let translatedColor = getColorFromNumber();
// let translatedfurType = furTypeTranslation();
// let translatedGeoRange = ageTranslation();
// let translatedGender = genderTranslation();
/*
make sure to validtate location text 
TO DO: add event listener for sumbit button to save data, event listener should also redirect the user to the results page 

save data in an user object, in the obejct eadch anwser should be its own poperty,
    do you like a needy animal (spec needs animal)
  let userInfo = {
    special_needs: true or false answer bool value
    color: text, (radio choice for set and limited number of colors)
    hair : text, (radio chocie, clean house = hairless cat, modorate = short haired cat, idk = long haired cat )
    these will all be group in one question on the form, with checkboxes for each option 
    geo_range: int, in miles(num)
    location: string text,  in terms of zipcode (if statement giving and error if this is not a number part of valditon)
    age: string/text, 
    gender: string, male, female. if idk is picked igngore this part 
}
    then the needLevel related to the api if the cat has special needs 
TO DO: save input to local storage
*/