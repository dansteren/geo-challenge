import { StyleSheet } from 'react-native'

export const ProfileSceneCss = StyleSheet.create({
  icon: {
    alignSelf: 'center',
    height: 120,
    width: 120,
    borderRadius: 60,
    marginTop: -60,
    backgroundColor: 'grey',
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundImage: {
    height: 230, backgroundColor: 'steelblue', zIndex: 1
  },
  profPic: {
    color: '#fff',
    fontSize: 68,
  },
  bottom: {
    flex:1,
    backgroundColor:'#ddd'
  },
  bottomText: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  displayName: {
    fontSize: 34,
    fontWeight: 'bold',
    padding: 6,
  },
  displayNameEdit: {
    fontSize: 34,
    height: 42,
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    marginLeft: 32,
    fontWeight: 'bold',
    marginTop: 6,
    marginRight: 32,
    marginBottom: 12
  },
  textBelow: {
    fontSize: 20,
    padding: 3
  },
  editIconTH: {
    width: 26,
    height: 26,
    marginLeft: 12,
    marginTop: 6
  },
  editIcon: {
    width: 30,
    height: 30
  },
  cancelEditIconTH: {
    width: 26,
    height: 26,
    marginLeft: 12,
    alignSelf: 'flex-end'
  },
  cancelEditIcon: {
    width: 30,
    height: 30  }
})
