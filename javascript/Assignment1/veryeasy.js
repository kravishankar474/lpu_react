function convert(first) {
    return first * 60;
  }
  console.log(convert(10));
  console.log(convert(12));
  console.log(convert(15));
  
  console.log("question2");
  function dividesEvenly(first, second) {
    if (first % second == 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log(dividesEvenly(98, 7));
  console.log(dividesEvenly(85, 4));