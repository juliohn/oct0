import React, {useContext} from 'react';

import LottieView from 'lottie-react-native';
import {Switch} from 'react-native';

import {Container, LabelMode, ContainerLottie} from './styles';

import {ThemeContext, ThemeType} from '../../theme/theme';

export const Settings = () => {
  const {toggleTheme, theme} = useContext(ThemeContext);

  const isDarkMode = theme === ThemeType.dark;
  return (
    <Container>
      <ContainerLottie>
        <LottieView
          source={require('../../assets/AnimationSettings.json')}
          style={{width: '100%', height: '100%'}}
          autoPlay
        />
      </ContainerLottie>
      <LabelMode>Dark Mode</LabelMode>
      <Switch value={isDarkMode} onValueChange={toggleTheme} />
    </Container>
  );
};
