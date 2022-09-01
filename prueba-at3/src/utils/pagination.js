export const totalPageFunc = (arrayLength, countPage) =>
  Math.floor(arrayLength / countPage) + (arrayLength % countPage > 0 ? 1 : 0);
