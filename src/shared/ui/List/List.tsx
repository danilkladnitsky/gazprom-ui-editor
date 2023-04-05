import React, { ComponentType } from "react";

import { Button } from "@mui/material";

import styles from "./styles.module.scss";

export type ListItem = object & { name: string; id: EntityId };
export type ListItemProps = { item: object & ListItem };

type Props = {
  data: Array<ListItem>;
  listItem?: ComponentType<ListItemProps>;
};
const List = ({ data, listItem }: Props) => {
  const CustomListItem = listItem;
  return (
    <div className={styles.list}>
      {data.map(({ item }) =>
        CustomListItem ? (
          <CustomListItem item={item} key={item.id} />
        ) : (
          <ListItem name={item.name} key={item.id} />
        )
      )}
    </div>
  );
};

const ListItem = ({ name }: { name: string }) => {
  return (
    <Button className={styles.item} size="medium" variant="text">
      {name}
    </Button>
  );
};

export default List;
