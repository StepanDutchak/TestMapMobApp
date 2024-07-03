import React from 'react';

import {Navigation} from './src/navigators';
import {AppStateProvider} from 'context/AppState/AppStateProvider';

const App = (): JSX.Element => {
  return (
    <AppStateProvider>
      <Navigation />
    </AppStateProvider>
  );
};

export default App;
