export const insertElementToArray = <T>(arr: T[], el: T, pos: number) => {
  return [...arr.slice(0, pos), el, ...arr.slice(pos)];
};
