import { ReactNode } from 'react';

import { IBaseComponent } from 'domain/component';

export type FormItemProps<Component extends IBaseComponent> = {
    element: Component;
    children?: ReactNode;
};
