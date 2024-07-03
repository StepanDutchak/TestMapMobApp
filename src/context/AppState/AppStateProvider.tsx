import React, {useState} from 'react';

import {AppStateContext} from './AppStateContext';

interface AppState {
  children: React.ReactNode;
}

export const AppStateProvider = ({children}: AppState) => {
  const [selectedRoute, setSelectedRoute] = useState();

  const context = {
    selectedRoute,
    setSelectedRoute,
  };

  return (
    <AppStateContext.Provider value={context}>
      {children}
    </AppStateContext.Provider>
  );
};
