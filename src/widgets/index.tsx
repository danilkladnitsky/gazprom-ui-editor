import { lazy } from "react";
import withSuspense from "shared/router/suspense";

const CentralView = lazy(() => import("./ViewConfiguration"));
const LeftPanel = lazy(() => import("./ComponentsPanel"));
const RightPanel = lazy(() => import("./ComponentSettings"));


export const Configuration =  withSuspense(LeftPanel);
export const ComponentsPanel = withSuspense(CentralView);
export const ComponentSettings = withSuspense(RightPanel);

