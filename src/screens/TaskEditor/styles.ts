import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  row-gap: 8px;
  margin: 10px;
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
  flex: 1;
`;

export const ErrorMessage = styled.Text`
  margin-left: 2px;
  color: ${({theme}) => theme.colors.danger};
`;

export const TextArea = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.colors.textInput,
  placeholder: 'Description',
  multiline: true,
}))`
  background-color: ${({theme}) => theme.colors.textInputBackground};
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.neutralDark};
  padding: 2px;
  color: ${({theme}) => theme.colors.textInput};
  border-radius: 3px;
  flex: 2;
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

export const Submit = styled.TouchableOpacity`
  flex: 1;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.success};
  background: ${({theme}) => theme.colors.success};
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

export const Input = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.colors.textInput,
  placeholder: 'Title',
}))`
  background-color: ${({theme}) => theme.colors.textInputBackground};
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.neutralDark};
  border-radius: 3px;
  padding: 2px;
  color: ${({theme}) => theme.colors.textInput};
`;
