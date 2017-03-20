import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight
} from 'react-native';

import { ProfileSceneCss as styles } from './ProfileScene.css.js'

export default class ProfileScene extends Component {

  constructor(props) {
    super(props)
    let data = JSON.parse('{"id":"0a9ds7a767ac7vr5as4de4465464646","firstName":"Tina","lastName":"Turner","displayName":"Tina Turner","email":"tina@singer.com","birthday":"Aug 20, 1998","interestedChallenges":["d53h338383hjsjbs623yjb923u2h2939","9a7a5d5d7v8a7hwh11199dhsdjb2387y"],"completedChallenges":["6a6a5a55sdfh12j3jb1423123412jhkjs"],"createdChallenges":["6a6a5a55sdfh12j3jb1423123412jhkjs"],"created":"Mon Feb 06 2017 00:45:48 GMT-0700 (MST)"}')
    this.state = {
      userData: data,
      completedCount: data.completedChallenges.length,
      createdCount: data.createdChallenges.length,
      profChar: data.firstName.charAt(0),
      edit: false
    }
  }

  // TODO: load profile image into circle,
  // TODO: have default but maybe customizable image behind

  editDisplayName() {
    this.setState(prevState => ({
      edit: this.state.edit ? false : true
    }))
  }

  endEdit() {
  }

  // if the name goes unchanged it will be null
  submitNameChange(name) {
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
    )
  }
}
