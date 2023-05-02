import React, { ReactNode } from 'react';
import { DroppingProps, withDropping } from 'ui/hocs/withDropping';

import { IBaseComponent } from 'domain/component';

type Props<I extends IBaseComponent> = DroppingProps<I> & {
    children: ReactNode;
}

export const DropAndAdd = <I extends IBaseComponent>(hocProps: Props<I>) => {
  return withDropping(hocProps);
};
