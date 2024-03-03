const staircase = (num) => {
  let result = "";
  for (let i = 0; i <= num; i++) {
    for (let j = 0; j <= num - i; j++) {
      result += " ";
    }
    for (let k = 0; k < i; k++) result += "#";
    result += "\n"
  }
  
  return result;
};

console.log(staircase(4));
