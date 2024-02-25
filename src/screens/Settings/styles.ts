import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  row-gap: 8px;
  margin: 10px;
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
  flex: 1;
  align-items: center;
`;

export const ContainerLottie = styled.SafeAreaView`
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  margin: 60px;
`;

export const LabelMode = styled.Text`
  margin-left: 2px;
  color: ${({theme}) => theme.colors.backgroundOpposite};
`;
