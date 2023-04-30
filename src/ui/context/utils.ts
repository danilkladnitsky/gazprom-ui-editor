import React, { useContext } from 'react';

export function createContextAndUse<
  IS, IF,
>(): [React.Context<(IS & IF) | any>, () => IS & IF] {
  const Context = React.createContext<(IS & IF) | any>(null);
  return [Context, (): IS & IF => useContext<IS & IF>(Context)];
}

export type ContextProps = {
  children: boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
};
