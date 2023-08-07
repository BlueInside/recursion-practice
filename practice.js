function replicate(times, value, result = []) {
  if (times <= 0) return result;
  else {
    result.push(value);
    return replicate(times - 1, value, result);
  }
}
