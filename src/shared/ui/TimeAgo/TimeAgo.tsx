import React from "react";

import TimeAgoComponent from "react-timeago";

import styles from "./styles.module.scss";

type Props = {
  date: number;
};

export function TimeAgo({ date }: Props) {
  return (
    <div className={styles.time}>
      <TimeAgoComponent
        unit="minute"
        minPeriod={30}
        date={date}
        style={{ fontSize: 8 }}
      />
    </div>
  );
}
