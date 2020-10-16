export const dateDiff = (a: Date, b: Date) => {
  return (b.getTime() - a.getTime()) / 1000;
};
