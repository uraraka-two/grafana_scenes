import React from 'react';
import { GrafanaThemeProvider } from '@grafana/ui';
import { getScene } from './helloScene';

export const App: React.FC = () => {
  const scene = getScene();
  return (
    <GrafanaThemeProvider mode="light">
      <scene.Component model={scene} />
    </GrafanaThemeProvider>
  );
};
