export type DragAndDropAlias = "app-form" | "form-list" | "component-list";

export type DragItem<Item> = {
  alias: DragAndDropAlias;
  item: Item;
};

export type OnDragFn<Item> = (item: DragItem<Item>) => void;
export type OnDropFn<Item> = (item: DragItem<Item>) => void;
