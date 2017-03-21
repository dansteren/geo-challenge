import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { LocationCreationCSS as Css } from './LocationCreationScene.css'
import { Colors } from '../../theme/theme';

export default class LocationCreationScene extends Component {

  constructor(props) {
    super(props);
    const location = this.props.location;
    if (location) {
      this.state = {
        longitude: location.longitude,
        latitude: location.latitude,
        title: location.latitude,
        content: location.content,
        lockType: location.lockType
      }
    } else {
      this.state = {
        longitude: undefined,
        latitude: undefined,
        title: '',
        content: {
          text: '',
          image: '',
          video: ''
        },
        lockType: 'auto'
      }
    }
  }

  render() {
    return (
      <View style={Css.page}>
        <TextInput
          style={Css.locationTitle}
          autoCapitalize='sentences'
          placeholderTextColor={Colors.hintTextWhite}
          underlineColorAndroid='transparent'
          onChangeText={(title) => this.setState({ title })}
          value={this.state.title}
          placeholder='Enter a title for this location'
        />
        <TouchableOpacity
          onPress={() => {
            this.props.onSave({
              'longitude': this.state.longitude,
              'latitude': this.state.latitude,
              'title': this.state.title,
              'content': {
                'text': this.state.content.text,
                'image': this.state.content.image,
                'video': this.state.content.video
              },
              'lockType': this.state.lockType
            });
            this.props.navigator.pop();
          }}
        >
          <View style={Css.footer}>
            <Text style={Css.addButton}>ADD</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

LocationCreationScene.propTypes = {
  onSave: PropTypes.func,
  location: PropTypes.object,
  navigator: PropTypes.object.isRequired
};
