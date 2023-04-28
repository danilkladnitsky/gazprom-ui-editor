import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from '@mui/material';
import { useComponentsStore } from 'store/componentStore';

import { EditName } from './sub/EditName';
import { SelectDatasource } from './sub/SelectDatasource';

import styles from './styles.module.scss';

export const EditComponent = () => {
  const { components } = useComponentsStore();

  const isActive = Boolean(components.length);

  return (
    <div className={styles.wrapper}>
      <Typography variant="h6">Редактирование компонента</Typography>
      <Accordion>
        <AccordionSummary disabled={!isActive}>
          <Typography>Имя компонента</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <EditName />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary disabled={!isActive}>
          <Typography>Источник данных</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SelectDatasource />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
