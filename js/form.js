

const form = $(".form-group")

$(document).ready(function(){
$('form').submit(function(event){
  event.preventDefault(); 
  if (!form[0].checkValidity()){
    console.log("form invalid");
    form.querySelectorAll("input").forEach(i=>{
      i.classList.add("invalid");
    });
  }

  else {
    let  userInfoData = { 
      email: $("#email").val(),
      specialNeeds: $("#special_needs").val(),
      color: $("#color").val(),
      hair: $("#furType").val(),
      geoRange: $("#geoRange").val(),
      location: $("#zipCode").val(),
      age: $("#age").val(), 
      gender: $("#gender").val(),
      };

      function specialNeedsTranslation(special_needs){
        const special_needsTranslationObject = {
        "yes" : 1,
        "No" : 0
        }
      }

      function getColorFromNumber(color) {
        const catColorObject = {
          "Black" : 46,
          "Black & White or Tuxedo" : 47,
          "Brown or Chocolate" : 48,
          "Orange or Red" : 54,
          "Spotted Tabby/Leopard Spotted" : 56,
          "Tan or Fawn" : 57 
        }   
      }

      function furTypeTranslation(furType){
        const furTypeTranslationObject = {
            "Yes" : 1,
            "No" : 0
        }
      } 

      function geoRangeTranslation(geoRange){
        const geo_rangeObjects = {
          "less than 35 miles" : 35,
          "Less than 50 miles" : 50,
          "Less than 75 miles" : 75,
          "Less than 100 miles" : 100,
          "Less than 250 miles" : 250
        }
      }

      function ageTranslation(age){
        const ageTranslationObject = {
        "Kitten" : kitten,
        "Young" : young,
        "Adult" : adult,
        "Senior" : senior
        }
      }

      function genderTranslation(gender){
        const genderTranslationArray = {
        "Female" : f,
        "Male" : m,
        "I don't care, as long as they are a cat!" : null 
        }
      }

  localStorage.setItem('userInfo', JSON.stringify(userInfoData));
  window.location.href = "./html/results.html"
}
  // doesnt work yeta
  }) 
})
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