import { StyleSheet } from 'react-native';
import { Colors } from './../../theme/theme';

export const LocationCreationCSS = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  locationTitle: {
    backgroundColor: Colors.accentColor,
    color: Colors.primaryTextWhite,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 16
  },
	map: {
		flex: 1,
	},
  footer: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderTopColor: 'rgba(0,0,0,.2)',
    // borderTopWidth: 1,
    backgroundColor: Colors.accentColor,
  },
  addButton: {
    fontSize: 14,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 2,
    color: Colors.primaryTextWhite
  }
});
