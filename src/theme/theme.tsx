import {Appearance} from 'react-native';

import {createContext, useState} from 'react';

import {ThemeProvider as ThemeProviderStyled} from 'styled-components';
import darkTheme from './dark';
import lightTheme from './light';

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

export const ThemeContext = createContext({
  theme: ThemeType.light,
  toogleTheme: () => {},
});

export const ThemeProvider: Element = ({children}: React.JSX.Element) => {
  let colorScheme = Appearance.getColorScheme();

  const [theme, setTheme] = useState<string | null | undefined>(colorScheme);

  const updateTheme = () => {
    colorScheme = Appearance.getColorScheme();
    setTheme(colorScheme);
  };

  Appearance.addChangeListener(() => {
    updateTheme();
  });

  function toggleTheme() {
    if (theme === ThemeType.light) {
      setTheme(ThemeType.dark);
    } else {
      setTheme(ThemeType.light);
    }
  }

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <ThemeProviderStyled theme={themes[theme]}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};
