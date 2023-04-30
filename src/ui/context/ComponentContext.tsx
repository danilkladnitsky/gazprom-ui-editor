import React from 'react';

import { createContextAndUse } from './utils';

type IState = {
};

type IFunc = {
};

const [ComponentContext, useContext] = createContextAndUse<IState, IFunc>();
export const useComponentContext = useContext;

type Props = {
  children: boolean
        | React.ReactChild
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined;
};

export default function useComponentContextContainer(props: Props) {

  return (
    <ComponentContext.Provider
      value={{}}
    >
      {props.children}
    </ComponentContext.Provider>
  );
}
