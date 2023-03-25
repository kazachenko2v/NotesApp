export default (string) => {
  if (!string) {
    return "";
  }
  return string.replace(/#/g, "");
};
