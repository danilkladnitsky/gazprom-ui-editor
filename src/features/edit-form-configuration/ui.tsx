import React from "react";

import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/ru";

import styles from "./styles.module.scss";

export const EditFormConfiguration = () => {
  return (
    <div className={styles.schema}>
      <JSONInput
        locale={locale}
        height="100%"
        width="100%"
        theme="default"
        confirmGood={false}
      />
    </div>
  );
};
