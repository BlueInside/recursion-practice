const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2222',
          },
        },
      },
    },
  },
};

function contains(objectToSearch, value) {
  const keys = Object.keys(objectToSearch);
  for (let key of keys) {
    if (objectToSearch[key] === value) return true;
    else if (typeof objectToSearch[key] === 'object') {
      return contains(objectToSearch[key], value);
    }
  }
  return false;
}
