import styled from 'styled-components/native';

interface SubmitProps {
  type: string;
}

export const Container = styled.SafeAreaView`
  margin-top: auto;
  height: 30%;
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
  justify-content: space-around;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
  min-height: 45px;
  border-bottom-width: 0.2px;
  border-color: ${({theme}) => theme.colors.backgroundOpposite};
`;

export const Content = styled.View`
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.neutralDark};
  font-size: 20px;
  font-weight: bold;
`;

export const Message = styled.Text`
  color: ${({theme}) => theme.colors.neutralDark};
  text-align: center;
  line-height: 24px;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Cancel = styled.TouchableOpacity`
  flex: 1;
  padding: 7px;
  margin-right: 12px;
  background: ${({theme}) => theme.colors.backgroundPrimary};
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.backgroundOpposite};
`;

export const CancelText = styled.Text`
  color: ${({theme}) => theme.colors.backgroundOpposite};
  font-size: 18px;
`;

export const Submit = styled.TouchableOpacity<SubmitProps>`
  flex: 1;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${({type, theme}) =>
    type === 'Positive'
      ? theme.colors.success
      : type === 'Negative'
      ? theme.colors.danger
      : theme.colors.neutralDark};
  background: ${({type, theme}) =>
    type === 'Positive'
      ? theme.colors.success
      : type === 'Negative'
      ? theme.colors.danger
      : theme.colors.neutralDark};
`;

export const SubmitText = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.backgroundOpposite};
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 14px;
`;
