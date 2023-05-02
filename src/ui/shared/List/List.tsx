import React, { ComponentType } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Button, Stack, Typography } from '@mui/material';

import styles from './styles.module.scss';

export type ListItem = object & { name: string; id: EntityId };
export type ListItemProps = { item: object & ListItem };

type Props = {
  data: Array<ListItemProps>;
  listItem?: ComponentType<ListItemProps>;
};
export const List = ({ data, listItem }: Props) => {
  const [parent] = useAutoAnimate();

  const CustomListItem = listItem;
  return (
    <Stack className={styles.list} spacing={1} ref={parent}>
      {data.map(({ item }) =>
        CustomListItem ? (
          <CustomListItem item={item} key={item.id} />
        ) : (
          <ListItem name={item.name} key={item.id} />
        ),
      )}
    </Stack>
  );
};

const ListItem = ({ name }: { name: string }) => {
  return (
    <Typography className={styles.item} variant="body2">
      {name}
    </Typography>
  );
};
