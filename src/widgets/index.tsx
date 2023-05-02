import { lazy } from 'react';

import withSuspense from 'app/router/suspense';

const CentralView = lazy(() => import('./ViewConfiguration'));
const LeftPanel = lazy(() => import('./ComponentsPanel'));
const RightPanel = lazy(() => import('./ComponentSettings'));

export const ComponentsPanel = withSuspense(LeftPanel);
export const Configuration = withSuspense(CentralView);
export const ComponentSettings = withSuspense(RightPanel);
