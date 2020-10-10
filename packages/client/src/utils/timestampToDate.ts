export const timestampToDate = (date: string) =>
  new Date(parseInt(date, 10)).toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
