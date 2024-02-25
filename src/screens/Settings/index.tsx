import React, {useContext} from 'react';
import {Text, Switch} from 'react-native';

import {Container,LabelMode} from './styles';

import {ThemeContext, ThemeType} from '../../theme/theme';

export const Settings = () => {
  const {toggleTheme, theme} = useContext(ThemeContext);

  const isDarkMode = theme === ThemeType.dark;
  return (
    <Container>
      <LabelMode>Dark Mode</LabelMode>
      <Switch value={isDarkMode} onValueChange={toggleTheme} />
    </Container>
  );
};
