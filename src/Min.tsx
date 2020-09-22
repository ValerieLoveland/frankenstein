export const Min = (a: number, b: number): number => {
  let minNum = 0;
  if (a < b) {
    minNum = a;
  } else {
    minNum = b;
  }
  console.log(minNum);
  return minNum;
};
