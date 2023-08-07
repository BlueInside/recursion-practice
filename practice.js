function productOfArray(numArray, result = 1) {
  let copy = numArray.slice();
  if (!copy[0]) return result;
  result *= copy[0];
  copy.shift();
  return productOfArray(copy, result);
}
