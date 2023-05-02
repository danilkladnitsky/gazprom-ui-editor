import { ReactNode } from 'react';

import { IComponent } from 'domain/component';

export type ViewFormItemProps<Item> = {
    item: Item;
    children?: ReactNode;
    onClick?: (component: IComponent) => void;
    position: number;
}
