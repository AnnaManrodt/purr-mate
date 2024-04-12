/*
TO DO: reterive infomration form form page make sure to be able to gather data from radio, check boxes, text input and make sure form in valid
make sure to validtate location text 
TO DO: add event listener for sumbit button to save data, event listener should also redirect the user to the results page 

save data in an user object, in the obejct eadch anwser should be its own poperty,
    do you like a needy animal (spec needs animal)
  let userInfo = {
    special_needs: true or false answer bool value
    color: text, (radio choice for set and limited number of colors)
    coat: text, (radio chocie, clean house = hairless cat, modorate = short haired cat, idk = long haired cat )
    these will all be group in one question on the form, with checkboxes for each option 
      good_with_children: true or false booleans
      good_with_cats: true or flase booleans
    good_with_dogs: ture or flasebooleans
    distance: int, radio willing to travel (num)
    location: string text,  in terms of zipcode (if statement giving and error if this is not a number part of valditon)
    age: string/text, 
    gender: string, male, female. if idk is picked igngore this part 
   }
    then the needLevel related to the api if the cat has special needs 
TO DO: save input to local storage


*/