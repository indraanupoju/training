// In one of the previous sections, we had an practice problem where you had to
// reverse a string. Do the same thing with an array, but use the `reduce` and
// `concat` methods to avoid local variables.
//
//      reverse([ 1, 2, 3, 4, 5 ]);
//      //=> [ 5, 4, 3, 2, 1 ]
//
//      reverse([ "hello", "world" ]);
//      //=> [ "world", "hello" ]
//
var reverse = function (arr) {
return arr.reduce((a,b) => [b].concat(a));
  };
console.log(reverse([ 1, 2, 3, 4, 5 ]))


// Did you know that you could have arrays within arrays? This is perfectly
// legal JavaScript:
//
//     var nestedArray = [ 1, 2, [ 10, 20 ], 3, 4, 5 ];
//
//     nestedArray[0];
//     //=> 1
//
//     nestedArray[1];
//     //=> 2
//
//     nestedArray[2];
//     //=> [ 10, 20 ]
//
//     nestedArray[2][0];
//     //=> 10
//
// For this problem, write a function using `reduce` that "flattens" a possibly
// nested array into a single array.
//
//     flatten(nestedArray);
//     //=> [ 1, 2, 10, 20,  3, 4, 5 ]
//
//     flatten([ 1, [2, 3], 4, [5, 6, 7], 8 ]);
//     //=> [ 1, 2, 3, 4, 5, 6, 7, 8 ]
//
// You'll also want to use the `concat` method to make this work.
//
var flatten = function () {
};

// Using `range` and a chain of array methods, write a function that accepts a
// number `n` and returns the sum of all of the positive multiples of 3 and 5 that
// are smaller than or equal to `n`.
//
//     sumOfMultiplesOf3And5(100);
//     //=> 2418
//
//     sumOfMultiplesOf3And5(50);
//     //=> 593
//
//     sumOfMultiplesOf3And5(0);
//     //=> 0
//
var range = function(a,b){
var nums = [];
if (typeof(a) != 'number' && typeof(b) != 'number'){
return "Both the inputs must be numbers"
}
else{
  if(a<b){
    for(i=a; i<=b; i++){
      nums.push(i);
    }
  }
  else if(a>b) {
    for(i=a;i>=b;i--){
      nums.push(i);
    }
  }
  return nums;
}
}
var sumOfMultiplesOf3And5 = function(n){
var numsBet3AndN = range(3,n);
var numsBet5AndN = range(5,n);
var multiplesOf3 = numsBet3AndN.filter(function(item){
                                            return item%3 === 0;
                                                    });
var multiplesOf5 = numsBet5AndN.filter(function(item){
                                            return item%5 === 0;
                                                    });
var multiplesOf3And5 = multiplesOf3.concat(multiplesOf5);
var multiplesOf3And5Sum = multiplesOf3And5.reduce(function(a,b){
                                return a+b;
                                            });
return multiplesOf3And5Sum;
}

console.log(sumOfMultiplesOf3And5 (50));



// Write a function called atLeastOneVowel that accepts a string and
// returns true if that word contains at least one vowel. Do not use a
// `for` loop or a `forEach` loop.
//
//     atLeastOneVowel("hello");
//     //=> true
//
//     atLeastOneVowel("dry");
//     //=> false
//
//     atLeastOneVowel("sdfjkl");
//     //=> false
//

var atLeastOneVowel = function (word){
var word_Array = word.split("");
return word_Array.some(function(el){
    return "aeiou".indexOf(el) != -1;
})}
console.log(atLeastOneVowel("dry"));


// Write a function that accepts a list of tweets, and returns the
// longest tweet that contains the word `awesome` or the empty string
// if no tweet contains the word awesome.
//
//     logestAwesomeTweet([ "awesome", "longer tweet with awesome", "not awesome", "empty" ]);
//     //=> "longer tweet with awesome"
//
//     longestAwesomeTweet([ "hello", "world" ]);
//     //=> ""
//

var longestAwesomeTweet = function (arr) {
var awesomeTweetLong = "";
if(Array.isArray(arr) && arr.length !=0){ //cheking if input is array & also whether it is not an empty array//
    if( arr.every(function(item){ //cheking if each element of the array is a string//
      return typeof(item) === "string"})
    ){
      var awesomeTwetsArray = arr.filter(function(item){ //cheking for the word 'awesome' in each string & creating a new array with all such strings with the word 'awesome' in it//
        return item.indexOf("awesome")>=0;})

       awesomeTwetsArray.forEach(function(item){ //cheking for the longest length string - in the newly created array(of strings with the word 'awesome' in it)
          if(item.length > awesomeTweetLong.length){
            awesomeTweetLong = item;
          }
        }
      )
    }
else{
    throw "All elements of the array must be strings";
    }
    return awesomeTweetLong;
    }
else {
    throw "Argument must be array";
    }
    }
console.log(longestAwesomeTweet([ "hello", "world" ]))



// Write a function that accepts an array of HTMLElements and returns an
// array of their content.
//
//     elementsToContent(["<p>this is a paragraph</p>", "<li>list item</li>", "<a>link!</a>" ]);
//     //=> [ "this is a paragraph", "list item", "link!" ]
//
//     elementsToContent([ "<h1>This is an important heading!</h1>", "<h5>this is not as important</h5>" ]);
//     //=> [ "This is an important heading!", "this is not as important" ]
//
var isHTMLElement = function (txt)
{
 var startTag=txt.slice(txt.indexOf('<')+1, txt.indexOf('>'));
 var endTag=txt.slice(txt.lastIndexOf('<')+2, txt.lastIndexOf('>'));
 return startTag===endTag;
}
var getTxt = function (txt) {
  if ( txt.slice(txt.indexOf('<')+1, txt.indexOf('>')) ===
  txt.slice(txt.lastIndexOf('<')+2, txt.lastIndexOf('>'))){
    return txt.slice(txt.indexOf('>')+1, txt.lastIndexOf('<'));
  }
  else{
    throw "Not an HTML Element!"
  }
};

var elementsToContent = function(arr){
  if(Array.isArray(arr)){
    return arr.map(function(item){
      if(isHTMLElement(item)){
        return getTxt(item);
      }
      else {
        throw "Make sure your input array has valid HTML elements!!";
      }
    })

 }
  else {
    throw "Enter a valid array, with valid HTML elements!!";
  }
}
console.log(elementsToContent([ "<h1>This is an important heading!</h1>", "<h5>this is not as important</h5>" ]))

// returned a random integer up to an upper bound. Using that function
// along with the `range` function, write a method called
// `randomArray` that accepts two numbers, `length`, and `max`. It
// should return an array of length `length` that contains random
// numbers up to the value `max`.
//
//     randomArray(10, 100);
//     //=> [ 56, 32, 4, 92, 73, 75, 11, 10, 26, 4 ]
//
//     randomArray(5, 10);
//     //=> [ 2, 0, 3, 9, 10 ]
//
var randomArray = function (length, max) {
var randArr = [];
for(var i=0; i<length;i++){
randArr.push(Math.floor(Math.random()*max));
}
return randArr;
}
console.log(randomArray(5,10))

// Using the `randomNums` function from above, write a function called
// `randomElements` that accepts an array, and a number, `n` and
// returns a new array that consists of `n` random elements selected
// from the input array. Duplicates are allowed.
//
// randomElements([ "red", "orange", "yellow", "green", "blue", "purple", "gray", "black", "white" ], 5);
// //=> [ "green", "green", "blue", "orange", "black" ]
//
// randomElements([ "clubs", "diamonds", "hearts", "spades" ], 3);
// //=> [ "hearts", "diamonds", "hearts" ]
//
var randomElements = function (arr, n) {
var randArr = [];
for(var i=0; i<n;i++){
randArr.push(arr[Math.floor(Math.random()*arr.length)]);
}
return randArr;
}
console.log(randomElements([ "clubs", "diamonds", "hearts", "spades" ], 3))
