/*
TO DO: reterive infomration form form page make sure to be able to gather data from radio, check boxes, text input and make sure form in valid
*/
// const submit = $("#submit");

// $("submit").on("click", function(){

const form = $(".ourForm")

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
      email: $("#exampleInputEmail1"),
      specialNeeds: $("#special_needs").val(),
      color: $("#color").val(),
      hair: $("#furType").val(),
      geoRange: $("#geoRange").val(),
      location: $("#location").val(),
      age: $("#furType").val(),
      gender: $("#age").val() ,
      };
  localStorage.setItem('userInfo', JSON.stringify(userInfoData));
  window.location.href = "./html/results.html"
}
  // doesnt work yet
  }) 
})

// })

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