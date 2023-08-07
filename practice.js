function all(arr, callback) {
  let arrCopy = [...arr];
  if (!arrCopy[0]) return true;
  if (callback(arrCopy[0])) {
    arrCopy.shift();
    return all(arrCopy[0], callback);
  } else return false;
}
