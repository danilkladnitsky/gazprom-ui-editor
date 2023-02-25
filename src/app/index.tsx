import React from 'react';
import { ComponentSettings, ComponentsPanel, ViewConfiguration } from 'widgets';

export const App: React.FC = () => {
  return <div>
    <ComponentsPanel />
    <ViewConfiguration />
    <ComponentSettings />
  </div>;
};

