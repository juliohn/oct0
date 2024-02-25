export const ToCamelCase = (str: string | null) => {
  if (str === null || str === undefined) {
    return '';
  }
  const first = str[0].toUpperCase();
  const strLower = str.toLowerCase();
  return strLower.replace(strLower[0], first);
};
