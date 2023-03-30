import React from "react";

import { Button } from "@mui/material";

import styles from "./styles.module.scss";

type Props<T> = {
  data: Array<T & { name: string; id?: EntityId }>;
};
const List = <T,>({ data }: Props<T>) => {
  return (
    <div className={styles.list}>
      {data.map((item, index) => (
        <ListItem name={item.name} key={item.id || index} />
      ))}
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
