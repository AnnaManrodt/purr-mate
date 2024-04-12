let catFactsUrl = 'https://cat-fact.herokuapp.com/facts';
const jokesDiv = $('.jokes');

fetch(catFactsUrl)
  .then(function(response){
  return response.json();
})
  .then(function(data){
  console.log(data);

  for( let i=0; i < data.length; i++){
    const object = data[i]
    console.log(object.text);
      const pTag = $("<p>")
      pTag.text(object.text);
      jokesDiv.append(pTag);

  }

})

