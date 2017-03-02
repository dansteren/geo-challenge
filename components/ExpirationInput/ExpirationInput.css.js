import { StyleSheet } from 'react-native';

export const ExpirationInputCSS = StyleSheet.create({
  expirationInput: {
    flexDirection: 'column',
  },
  expirationToggleRow: {
    flexDirection: 'row',
    paddingRight: 16,
    justifyContent: 'space-between',
    height: 48
  },
  icon: {
    justifyContent: 'center',
    marginLeft: 16,
    marginRight: 32
  },
  switchLabel: {
    flex: 1,
    textAlignVertical: 'center',
    fontSize: 16,
    color: '#000000DE'
  },
  switch: {

  },
  expirationDate: {
    paddingLeft: 72,
    paddingRight: 16,
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 16,
    color: '#000000DE'
  }
});
