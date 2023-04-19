export const insertElementToArray = <T extends { id: EntityId }>(
  arr: T[],
  el: T,
  pos: number
) => {
  return [...arr.slice(0, pos), el, ...arr.slice(pos)];
};
