import { StyleSheet } from 'react-native';
import { Colors} from '../../theme/theme';

export const LocationCardCSS = StyleSheet.create({
  card: {
    margin: 5,
    backgroundColor: Colors.cardBackground,
    borderRadius: 2,
    elevation: 2,
    height: 274
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.cardBackground,
    padding: 16
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,.18)',
  },
  headerText: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    color: Colors.primaryTextBlack
  },
  subhead: {
    fontSize: 14,
    color: Colors.primaryTextBlack
  },
  rightButton: {
    height: 40,
    justifyContent: 'center'
  },
  mapPlaceholder: {
    backgroundColor: '#9E9E9E',
    height: 150,
  },
  content: {
    padding: 16,
    fontSize: 14,
    color: Colors.primaryTextBlack
  }
});
