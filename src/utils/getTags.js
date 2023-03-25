export default (string) => {
  const tagsArr = string.match(/#[a-zа-яё|\d]+(?=\b)/gim);

  if (tagsArr) {
    return tagsArr.map((item) => item.slice(1));
  }
};
