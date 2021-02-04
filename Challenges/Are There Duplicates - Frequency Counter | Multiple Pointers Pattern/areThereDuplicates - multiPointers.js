// write a function that accepts a variable number of arguments
// checks whether there are any duplicates among the arguments passed in

function areThereDuplicates(...args) {
  let start = 0;
  let next = 1;
  args.sort((a, b) => a > b);
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

areThereDuplicates(1, 2, 3, 3);
