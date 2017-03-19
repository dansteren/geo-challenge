import { StyleSheet } from 'react-native';

export const LocationsListCSS = StyleSheet.create({
  locationsList: {
    backgroundColor: '#EEEEEE',
  },
  card: {
    margin: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    padding: 16,
    elevation: 2
  },
  emptyCard: {
    height: 200,
    margin: 5,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.1)'
  }
});
