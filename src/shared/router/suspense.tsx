import React, { Suspense } from 'react'

const DEFAULT_FALLBACK = "Loading...";

const withSuspense = (Component: React.FunctionComponent, fallback = DEFAULT_FALLBACK) => {
  return () => (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  )
}

export default withSuspense;