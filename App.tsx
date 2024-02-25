import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {GlobalStateProvider} from './src/contexts/GlobalContext';

import {MainNavigation} from './src/navigation/Navigation';

import {ThemeProvider} from './src/theme/theme';


const App = () => {
  return (
    <NavigationContainer>
      <GlobalStateProvider>
        <ThemeProvider>
          <MainNavigation />
        </ThemeProvider>
      </GlobalStateProvider>
    </NavigationContainer>
  );
};

export default App;
