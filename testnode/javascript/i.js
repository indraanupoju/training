var maxnum =foreach.function (item)
  var vowelsCount = 0;
   var item = names.toString();{
    for (var i = 0; i <= names.length - 1; i++) {
    if (names.charAt(i) == "a" || names.charAt(i) == "e" || names.charAt(i) == "i" || names.charAt(i) == "o" || names.charAt(i) == "u") {
        vowelsCount += 1;
      }

  return vowelsCount;
}
};
console.log(maxnum)
