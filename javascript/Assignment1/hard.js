//question 1

function realType(value) {
  let arr = Object.prototype.toString.call(value);
  let type = arr.split(" ");
  let typeStr = "";

  for (i = 0; i < type[1].length; i++) {
    if (type[1].charAt(i) !== "]") typeStr += type[1].charAt(i);
  }

  return typeStr.toLocaleLowerCase();
}

console.log(realType(1));
console.log(realType("a"));
console.log(realType(true));
console.log(realType([]));
console.log(realType(null));
//question 2

function numstr(string) {
  let finalArray = [];
  for (i = 0; i < string.length; i++) {
    arr = string[i].split("");

    for (j = 0; j < arr.length; j++) {
      if (
        arr[j] == "1" ||
        arr[j] == "2" ||
        arr[j] == "3" ||
        arr[j] == "4" ||
        arr[j] == "5" ||
        arr[j] == "6" ||
        arr[j] == "7" ||
        arr[j] == "8" ||
        arr[j] == "9" ||
        arr[j] == "0"
      ) {
        finalArray.push(arr.join(""));
        break;
      }
    }
  }
  return finalArray;
}

console.log(numstr(["1a", "a", "2b", "b"]));
console.log(numstr(["abc", "abc10"]));
console.log(numstr(["abc", "ab10c", "ab10c", "bcd"]));
console.log(numstr(["this is a test", "test1"]));