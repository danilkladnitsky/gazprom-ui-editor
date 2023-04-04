import { DragAndDropAlias, DragItem } from "./domain";

export const toDragItem = <T>(
  item: T,
  alias: DragAndDropAlias
): DragItem<T> => {
  return { item, alias };
};

export const aliasToStatus = (alias: DragAndDropAlias) => {
  switch (alias) {
    case "component-list":
    default:
      return "Создать компонент";
  }
};
