import { StyleSheet } from 'react-native';

export const ChallengeCreationCSS = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  challengeTitle: {
    backgroundColor: '#FF5722',
    color: '#FFFFFFDE',
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 16
  },
  footer: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderTopColor: 'rgba(0,0,0,.2)',
    // borderTopWidth: 1,
    backgroundColor: '#FF5722',
  },
  submitButton: {
    fontSize: 14,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 2,
    color: '#FFFFFF'
  }
});
