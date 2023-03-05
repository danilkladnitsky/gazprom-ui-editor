import classNames from 'classnames';
import React, { ReactNode, Suspense } from 'react'
import Loader from 'shared/ui/Loader/Loader';

const DEFAULT_FALLBACK = <Loader />;

import styles from "./styles.module.scss";

type ComponentProps = {
  className?: string;
}

const withSuspense = (Component: React.FunctionComponent<ComponentProps>, fallback?:ReactNode) => {
  return ({ className }:ComponentProps) => (
    <div className={classNames(styles.suspenseWrapper, className)}>
      <Suspense fallback={fallback || DEFAULT_FALLBACK}>
      <Component className={className} />
    </Suspense>
    </div>
  )
}

export default withSuspense;