import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/theme';

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
    color: Colors.primaryTextBlack,
    height: 80
  }
});
