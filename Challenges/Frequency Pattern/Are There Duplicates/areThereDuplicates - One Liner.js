// write a function that accepts a variable number of arguments
// checks whether there are any duplicates among the arguments passed in

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

areThereDuplicates(1, 2, 3, 3);
