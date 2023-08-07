function all(arr, callback, arrCopy = [...arr]) {
  if (!arrCopy[0]) return true;
  if (callback(arrCopy[0])) {
    return all(arr, callback, arrCopy.slice(1));
  }
  return false;
}
