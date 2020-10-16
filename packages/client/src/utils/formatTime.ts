export const formatTime = (time: number) => {
  return new Date(time * 1000).toISOString().substr(11, 8);
};
