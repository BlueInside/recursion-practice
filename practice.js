function sumSquare(list, result = 0) {
  if (Number.isInteger(list)) return (result += list ** 2);
  if (Array.isArray(list)) {
    list.forEach((element) => {
      result = sumSquare(element, result);
    });
  }
  return result;
}
