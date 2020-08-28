module.exports = (filename) => {
  let regex = /(.txt)$/;

  return regex.test(filename);
};
