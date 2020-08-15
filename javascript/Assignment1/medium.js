//question 1
function specialReverse(string, ch) {
  let arr = string.split(" ");
  let len = arr.length;
  for (i = 0; i < len; i++) {
    if (arr[i].substr(0, 1) == ch) {
      let newarr = arr[i].split("");
      arr[i] = newarr.reverse().join("");
    }
  }
  return arr.join(" ");
}
console.log(specialReverse("word searches are super fun", "s"));
console.log(specialReverse("first man to walk on the moon", "m"));
console.log(specialReverse("peter piper picked pickled peppers", "p"));
//question 2
function testJackpot(arr) {
  if (
    arr[0] == arr[1] &&
    arr[1] == arr[2] &&
    arr[2] == arr[3] &&
    arr[3] == arr[0]
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(testJackpot(["@", "@", "@", "@"]));
console.log(testJackpot(["abc", "abc", "abc", "abc"]));
console.log(testJackpot(["SS", "SS", "SS", "SS"]));
console.log(testJackpot(["&&", "&", "&&&", "&&&&"]));
console.log(testJackpot(["SS", "SS", "SS", "Ss"]));

//question 3
function removeDups(array) {
  return array.filter((a, b) => array.indexOf(a) == b);
}
console.log(removeDups([1, 0, 1, 0]));
console.log(removeDups(["The", "big", "cat"]));
console.log(removeDups(["John", "Taylor", "John"]));