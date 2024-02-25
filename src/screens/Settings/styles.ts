import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  row-gap: 8px;
  margin: 10px;
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LabelMode = styled.Text`
  margin-left: 2px;
  color: ${({theme}) => theme.colors.ba};
`;
