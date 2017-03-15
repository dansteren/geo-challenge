import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight
} from 'react-native';

export default class ProfileScene extends Component {

  constructor(props) {
    super(props);
    let data = JSON.parse('{"id":"0a9ds7a767ac7vr5as4de4465464646","firstName":"Tina","lastName":"Turner","displayName":"Tina Turner","email":"tina@singer.com","birthday":"Aug 20, 1998","interestedChallenges":["d53h338383hjsjbs623yjb923u2h2939","9a7a5d5d7v8a7hwh11199dhsdjb2387y"],"completedChallenges":["6a6a5a55sdfh12j3jb1423123412jhkjs"],"createdChallenges":["6a6a5a55sdfh12j3jb1423123412jhkjs"],"created":"Mon Feb 06 2017 00:45:48 GMT-0700 (MST)"}')
    this.state = {
      userData: data,
      completedCount: data.completedChallenges.length,
      createdCount: data.createdChallenges.length,
      profChar: data.firstName.charAt(0),
      edit: false
    };
  }

  // TODO: load profile image into circle,
  // TODO: have default but maybe customizable image behind

  editDisplayName() {
    console.log('editing')
    this.setState(prevState => ({
      edit: this.state.edit ? false : true
    }));
  }

  endEdit() {
    console.log('end edit called')
  }

  // if the name goes unchanged it will be null
  submitNameChange(name) {
    console.log('submitting')
    console.log(name)
    if(name != undefined) {
      // change the name
    }
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.bottom}>
          <View>
            <Image
            style={styles.backgroundImage}
            source={{uri:'https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/capitolreef%2FUNADJUSTEDNONRAW_thumb_2a6.jpg?alt=media&token=695339ef-25ff-49d7-999f-80648ca37fcd'}}/>
            <View style={styles.icon}>
              <Text style={styles.profPic}>{this.state.profChar}</Text>
            </View>
          </View>
          <View style={styles.bottomText}>
            {
              !this.state.edit ?
              <Text style={styles.displayName}>{this.state.userData.displayName}
                <TouchableHighlight
                  onPress={() => this.editDisplayName()}
                  style={styles.editIconTH}>
                  <Image style={styles.editIcon}
                    source={{uri:'https://iconshow.me/media/images/ui/ios7-icons/png/48/compose_1.png'}}/>
                </TouchableHighlight>
              </Text>
              : <TextInput
                  style={styles.displayNameEdit}
                  defaultValue={this.state.userData.displayName}
                  maxLength={18}
                  keyboardType='default'
                  returnKeyType='done'
                  ref='NameInput'
                  onSubmitEditing={() => this.submitNameChange(this.refs.NameInput._lastNativeText)}>
                    <TouchableHighlight
                      onPress={() => this.editDisplayName()}
                      style={styles.cancelEditIconTH}>
                      <Image style={styles.cancelEditIcon}
                        source={{uri:'https://iconshow.me/media/images/ui/ios7-icons/png/128/undo.png'}}/>
                    </TouchableHighlight>
                </TextInput>
            }
            <Text style={styles.textBelow}>Challenges Completed: {this.state.completedCount}</Text>
            <Text style={styles.textBelow}>Challenges Created: {this.state.createdCount}</Text>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
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
    // flex:1, // this makes everything stay in the middle
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
});
