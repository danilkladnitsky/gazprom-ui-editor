import React from 'react';
import { ComponentSettings, ComponentsPanel, Configuration } from 'widgets';

export const App: React.FC = () => {
  return <div>
    <ComponentsPanel />
    <Configuration />
    <ComponentSettings />
  </div>;
};

