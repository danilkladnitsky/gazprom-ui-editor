import React, { Suspense } from 'react';
import classNames from 'classnames';
import Loader from 'ui/shared/Loader/Loader';

const DEFAULT_FALLBACK = <Loader />;

import styles from './styles.module.scss';

type ComponentProps = {
  className?: string;
};

const withSuspense = (
  Component: React.FunctionComponent<ComponentProps>,
  fallback = DEFAULT_FALLBACK,
) => {
  // eslint-disable-next-line react/display-name
  return ({ className }: ComponentProps) => (
    <div className={classNames(styles.suspenseWrapper, className)}>
      <Suspense fallback={fallback}>
        <Component className={className} />
      </Suspense>
    </div>
  );
};

export default withSuspense;
