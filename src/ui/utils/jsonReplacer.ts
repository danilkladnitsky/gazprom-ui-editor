export const clearJson = (forbidden: string[]) => {
  return (key: string, value: unknown) => {
    return forbidden.includes(key) ? undefined : value;
  };
};
