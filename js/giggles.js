//an array of cat jokes 
catJokes = [
  "Why did the cats ask for a drum set? They wanted to make some mewsic!",
  " What's a cat's favorite TV show? Claw and Order.",
  "What normally happens when kitties go on a first date? They hiss.",
  "What's a cat's favorite cereal? Mice Krispies.",
  "What color do kittens love the most? Purrple.",
  " What does the cat say after making a joke? Just kitten!",
  " When cats need to go to the airport, who do they call? A tabby.",
  "Why did the cat have to go to an accountant? They got caught up in a purramid scheme.",
  " What made the cat upgrade his phone? He wanted to finally get pawtrait mode.",
  "Why are kittens actually excellent bosses? They have great littership.",
  "What's it called when all the treats are gone? A cat-astrophe",
  " What does a choir of cats like to sing? Do-Re-Mew.",
  "Before going after a mouse, what did the dad cat say to his family? Let us prey.",
  "What did the kitten have at their birthday party? A pounce house.",
  "What do you call it when a cat is super-stylish? Haute cat-ture.",
  "Why did the kitty get an A on their English assignment? They properly used an independent claws.",
  "When a cat doesn't want to say goodbye, what do they say instead? See ya litter!",
  "Why don't you want to play Monopoly with a cat? They tend to be cheetahs.",
  "What title does a cat go by in the kitchen? The Whisker.",
  "What was the kitten bowling league called? Alley Cats.",
  "Why is it hard to trust cats? They have many tall tails.",
  "What did the cats do when they realized they had a bad plan? They decided to (cat)nip it in the bud.",
  "Before a cat fight, what is usually said? Hold my purrse.",
  "What do cats quote from the movie Bridesmaids? Help me, I'm paw!",
  "What do cats look for in a significant other? A great purrsonality.",
  "What did the mom cat say about her intuition? I just had a strong feline.",
  "Why was the teenage cat sent to his room? He was in a bad meowd.",
  "What did one cat say while her friend was complaining? Tail me about it.",
  "What do cats call a big pile of laundry? A meowtain to climb.",
  "Why did the cat avoid eating lemons? They made him a sour-puss.",
  "What song do kittens always request at dances? Mice Mice Baby.",
  "Why are cats bad at making decisions? They become so purrr-plexed.",
  "What's a cat's favorite sport? Hairball.",
  "Why do cats hate laptops? They don't have a mouse.",
  "How did one cat break up with another? She said, We're hisss-tory!",
  "Why don't cats ever say YOLO? They have nine lives.",
  "Why do cats make horrible DJs? They always paws the tunes.",
  "What did the mom and dad cat say about their wedding day? It was un-fur-getable!",
  "What's a kitten's fave way to shop? By cat-alogue.",
  "How did the cat comic know he was funny? The audience was meow-ling with laughter.",
  "Why was the animal lover so untrustworthy? She kept letting the cat out of the bag!",
  "What do cats call a nice dinner? A fancy feast.",
  "What did the sick cat say? I feel clawful!",
  "Why did some cat friends go to the mall? There was a buy-one-get-one-furry deal.",
  "Where do cats enjoy spending a family day? The mew-seum.",
  "What's a kitten's favorite kind of sticker? Scratch and sniff."
]
//a function that generates a random cat joke from the array each time a button is pressed
function getRandomCatJoke() {
  const randomIndex = Math.floor(Math.random() * catJokes.length);
  return catJokes[randomIndex];
}

$(document).ready(function () {
  $('#catJokeButton').on('click', function () {
    let catJokeDiv = $(`<div class="jokeButton">`);
    catJokeDiv.text(getRandomCatJoke());
    $('#jokesGoHere').append(catJokeDiv);
  });
});
