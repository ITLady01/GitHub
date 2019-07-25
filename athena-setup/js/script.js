/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  I created the array of quote objects and name it `quotes`.
  Their are five arrays listed `quotes` array.
  Each object has been assigned a `quote` and `source` property.
  In addition, I added the `year` property to at least one object in the array.
  Then in the end I used console.log() to test the code and it worked. I tested this code in google chrome and it seemed to work pretty well**/

let quotes = [
  {
    quote: 'Things change. And friends leave. Life doesn\'t stop for anybody.',
    source: 'Stephen Chbosky',
    year: 1970,
    citation: 'Good reads-https://www.goodreads.com/quotes'
  },

  {
    quote: 'Be yourself, everyone else is already taken.',
    source: 'Oscar Wilde',
    year: 1942,
    citation: 'Good Reads-https://www.goodreads.com/quotes'
  },

  {
    quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
    source: 'Albert Einstein',
    year: 1955,
    citation: 'Good reads-https://www.goodreads.com/quotes'
  },

  {
    quote: 'The Way Get Started Is To Quit Talking And Begin Doing.',
    source: 'Walt Disney',
    year: 1963,
    citation: 'Goal Cast-https://www.goalcast.com/2017/06/06/walt-disney-quotes-awaken-dreamer-in-you/'
  },

  {
    quote: 'You can have data without information, but you cannot have information without data,',
    source: 'Daniel Keys Moran',
    year: 2001,
    citation: 'Brainy Quote-https://www.brainyquote.com/quotes/daniel_keys_moran_230911'
  }

];

/***console.log(quotes.length [5]);
console.log(quotes[quotes.length - 1]);
quotes.push('Go');
quotes.log(quotes.join());

/***
  I created the function`getRandomQuote` and a variable has been created to store a random number. 
  The `return` has been set to quotes and will return the randomNumber to***/

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}
//console.log(getRandomQuote())  This is what I used to test the actually code;

/**Created the `printQuote` function to: 
   - I called the `getRandomQuote` function and assign it to a variable.
   - Created a variable for the HTML string and set it equal to an empty string.
   - I used the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote variable to build your HTML string.
   - Then I put the quote and source section into the HTML string.
   - Then the if statement has been added to check for the citation property.
   - Then the if statement has been added to check for the year property.
   - I have set the `innerHTML` of the `quote-box` div to the HTML string.
   - Then I tested the print quote function and it is working. 
***/
function printQuote() {
  var randomquotes = getRandomQuote();
  var message = '';
  message += "<p class='quote'> " + randomquotes.quote + " </p>";
  message += "<p class='source'>" + randomquotes.source;
  console.log(Object.keys(randomquotes));
  if ('citation' in Object.keys(randomquotes) ) {
    console.log("j")
  }
  if (typeof randomquotes.citation != 'undefined') {
    message += '<span class="citation">' + randomquotes.citation + ' </span>';
  }

  if (typeof randomquotes.citation != 'undefined') {
    message += "<span class='year'>" + randomquotes.year + " </span>";
  }
  message += '</p>';
  document.getElementById('quote-box').innerHTML = message;

}

printQuote();


/***
  The button .
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.