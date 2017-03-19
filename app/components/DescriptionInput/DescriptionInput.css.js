import { StyleSheet } from 'react-native';

export const DescriptionInputCSS = StyleSheet.create({
  descriptionInput: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
  },
  icon: {
    justifyContent: 'flex-start',
    marginRight: 32
  },
  textInput: {
    flex: 1,
    textAlignVertical: 'top',
    padding: 0,
    fontSize: 16,
    color: '#000000DE',
    height: 80
  }
});
