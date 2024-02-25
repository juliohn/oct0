import styled from 'styled-components/native';

export const Container = styled.View`
  border-color: ${({theme}) => theme.colors.backgroundOpposite};
  border-radius: 3px;
  border-width: 0.5px;
  /* padding: 2px; */
  margin: 2px;
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
  min-height: 100px;
  justify-content: 'space-between';
`;

export const Main = styled.View`
  justify-content: 'space-between';
  padding: 4px;
`;

export const TitleContainer = styled.View`
  max-width: 310px;
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.backgroundOpposite};
`;

export const DescriptionContainer = styled.View`
  max-width: 310px;
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.colors.backgroundOpposite};
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  border-color: ${({theme}) => theme.colors.backgroundOpposite};
  border-top-width: 0.2px;
  margin-top: 8px;
  min-height: 40px;
  justify-content: space-around;
  align-items: center;
`;

export const ActionButton = styled.TouchableOpacity``;
