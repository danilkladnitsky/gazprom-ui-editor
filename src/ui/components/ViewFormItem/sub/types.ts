import { ReactNode } from 'react';

export type ViewFormItemProps<Item> = {
    item: Item;
    children?: ReactNode;
}
