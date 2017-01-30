// Write a function called `isVowel` that returns `true` if the input is a
// single character and either an upper or lower-case a, e, i, o, or
// u. It should return false otherwise.
//
//    isVowel("a");
//    //=> true
//
//    isVowel("E");
//    //=> true
//
//    isVowel(1);
//    //=> false
//
//    isVowel("Ea");
//    //=> false
//
//    isVowel("Y");
//    //=> false

  var isVowel = function (x) {
   return "aeiou".indexOf(x.toLowerCase())>=0;
  };

  console.log(isVowel("f"));


// Write a function called `isLowerCaseLetter` that returns `true` if
// the input is a single letter and lower-case. It should return false otherwise.
//
//    isLowerCaseLetter("a");
//    //=> true
//
//    isLowerCaseLetter("A");
//    //=> false
//
//    isLowerCaseLetter(1);
//    //=> false
//
//    isLowerCaseLetter("ae");
//    //=> false
//
//    isLowerCaseLetter(true);
//    //=> false
//
var isLowerCaseLetter = function (y) {
  var letter=["a","b","c","d","e"];
  for(var i=0;i<letter.length;i++){
if (y===letter[i]){
  return true;
  }
}
  return false;
 };

 console.log(isLowerCaseLetter("j"));



// Write a function called `sumUpTo` so that it accepts a positive number `n`
// and sums the first `n` positive integers. For example, if you call `sumUpTo(5)`
// it should sum the numbers 1 through 5 inclusive. It should throw an error if the
// input number is negative.
//     sumUpTo(100);
//     //=> 5050
//
//     sumUpTo(10);
//     //=> 55
//
//     sumUpTo(0);
//     //=> 0
//
//     sumUpTo(-10);
//     //=> input must be a zero or a positive number!
//
var sumUpTo = function (n) {
  var total=0;
for (var i=1;i<=n;i++){
      total+=i;
}
return total;
};
console.log(sumUpTo(10));

// Write a function called `sumAToB` so that it accepts two parameters
// `a` and `b` and sums the numbers between `a` and `b` inclusive. Note
// that `a` may be larger than `b`, in which case you'll need to work
// backawards.
//     sumAToB(10, 20);
//     //=> 165
//
//     sumAToB(0, -15);
//     //=> 120
//
//     sumAToB(-10, 500);
//     //=> 125195
//
//     sumAToB(10, 10);
//     //=> 10
//     sumAToB("hello", "world");
//     //=> inputs should be numbers!
var sumAToB = function (j,k) {
  var total=0;
for (var i=j;i<=k;i++){
      total+=i;
}
return total;
};
console.log(sumAToB(10,20));

// Write a function called `countVowels` that accepts a string and
// returns the number of vowels contained in that string. You'll want
// to use the `isVowel` helper function from above. It should throw an
// error if the input is not a string
//
//     countVowels("hello world!");
//     //=> 3
//
//     countVowels("omg this is a hilarious tweet about nothing");
//     //=> 16
//
//     countVowels("");
//     //=> 0
//
//     countVowels(true);
//     //=> input to countVowels must be a string!
//
var countVowels = function (str) {
  var vowelsCount = 0;
   var string = str.toString();
for (var i = 0; i <= string.length - 1; i++) {
    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
        vowelsCount += 1;
      }
    }
    return vowelsCount;
};
console.log(countVowels('ii'))

// Write a function that accepts a string and returns the same string, only in
// reverse!
//
//     reverse("hello world!");
//     //=> !dlrow olleh
//
//     reverse("omg this is a hilarious tweet about nothing");
//     //=> gnihton tuoba teewt suoiralih a si siht gmo
//
//     reverse("");
//     //=>
//
//     reverse(true);
//     //=> input to reverseString must be an string!
//
var reverseString = function(str) {
  return str.split('').reverse('').join('');

};
console.log(reverseString('indra'));


// A number is a prime number if it is only evenly divisible by 1 and itself
// (although we don't consider 1 a prime number, so 2 is the first prime
// number). Write a function called `isPrime` that accepts a number `p` as an
// argument and returns `true` if it is prime, `false` otherwise.
//
//     isPrime(101);
//     //=> true
//
//     isPrime(13);
//     //=> true
//
//     isPrime(1);
//     //=> false
//
//     isPrime(2);
//     //=> true
//
//     isPrime("hello");
//     //=> false
//
//     isPrime(-101);
//     //=> false
//
var isPrime = function (n) {
  if(n===1 || typeof(n) !== "number" || n<1){
    return false;
  }

 for(var p=n-1;p>1;p--){
    if(n%p===0){
      return false;
    }
  }

 return true;
};
console.log(isPrime(3))
// Using the `isPrime` function, write a function that accepts a number as
// input sums all the primes smaller than that number.
//
//     sumPrimesUpTo(100);
//     //=> 1060
//
//     sumPrimesUpTo(0);
//     //=> 0
//
//     sumPrimesUpTo(1000);
//     //=> 76127
//
//     sumPrimesUpTo(2);
//     //=> 2
//
//     sumPrimesUpTo("whatever");
//     //=> input should be a number
//
var sumPrimesUpTo = function(k) {
var l = 0;
for(var i = 2; i <= k; i++){
if(isPrime(i)){
  l += i;
}
}
return l;
}
console.log(sumPrimesUpTo(1000));
// Using the `isPrime` function, write a function that takes in a
// positive integer, n, and returns the first n numbers.
//
//     sumOfFirstNPrimes(10);
//     //=> 129
//
//     sumOfFirstNPrimes(100);
//     //=> 24133
//
//     sumOfFirstNPrimes(1000);
//     //=> 3672913
//
//     sumOfFirstNPrimes(0);
//     //=> 0
//
//     sumOfFirstNPrimes(1);
//     //=> 2
//
//     sumOfFirstNPrimes(-10);
//     //=> input number should be zero or a positive number!
//
var sumOfFirstNPrimes = function (n) {
  var y= 0;
  for(var i = n; i <= n; i++){
  if(isPrime(i)){
    y += i;
  }
  }
  return i;

};

console.log(sumOfFirstNPrimes(100));


// A _palindrome_ is a string that reads the same forwards and backwards. Write
// a function that accepts a string of arbitrary letters, numbers, and symbols, and
// returns true if it's a palindrome. For example:
//
//      isPalindrome("kayak");
//      //=> true
//
//      isPalindrome("A man, a plan, a canal, Panama");
//      //=> true
//
//      isPalindrome("hello world");
//      //=> false
// Let's start by writing a function to remove all non-letter characters
// from the input.
//
//     removeNonLetters("A man, a plan, a canal, Panama");
//     //=> AmanaplanacanalPanama
//
//     removeNonLetters("this is a string; it has some punctuation!");
//     //=> thisisastringithassomepunctuation
//

var removeNonLetters = function (s) {
  var letters=s.split('');
  var alphabet="abcdefghijklmnopqrstuvwABCDEFIJKLMNOPQRSTUVWXYZ";
  var newLetters=[];
  for(var i=0;i<letters.length;i++){
    if(alphabet.indexOf(letters[i])>=0){
      newLetters.push(letters[i]);
    }
  }

  return newLetters.join('')

}

console.log(removeNonLetters('A man, a plan, a canal, Panama'))





var removeNonLetters = function (p) {
  return p= p.replace(/\W/g, '')
     if(p==0)
{
      return true;
     }
{
     return false;
     }
};
console.log(removeNonLetters('A man, a plan, a canal, Panama'))


// Now use `removeNonLetters`, along with the `reverse` function from above to
// determine if the string is a palindrome.

var isPalindrome = function (s){
  var original=removeNonLetters(s);
  var reverse=reverseString(original);
  if(reverse == original){
       return "The string is not palindrome";
    }
  else {
      return "The string is palindrome";
    }
};
console.log(isPalindrome('malayalam'))
