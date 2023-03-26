export default (arr: string[]) => {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
};
