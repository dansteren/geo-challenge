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
        title: location.latitude,
        latitude: location.latitude,
        longitude: location.longitude,
        content: location.content,
      }
    } else {
      this.state = {
        title: '',
        latitude: undefined,
        longitude: undefined,
        content: '',
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
        <TextInput
          keyboardType='numeric'
          placeholderTextColor={Colors.hintTextBlack}
          underlineColorAndroid='transparent'
          onChangeText={(latitude) => this.setState({latitude})}
          value={this.state.latitude}
          placeholder='Latitude'
        />
        <TextInput
          keyboardType='numeric'
          placeholderTextColor={Colors.hintTextBlack}
          underlineColorAndroid='transparent'
          onChangeText={(longitude) => this.setState({longitude})}
          value={this.state.longitude}
          placeholder='Longitude'
        />
        <TextInput
          placeholderTextColor={Colors.hintTextBlack}
          autoCapitalize='sentences'
          underlineColorAndroid='transparent'
          onChangeText={(text) => this.setState({content: {text}})}
          value={this.state.content.text}
          placeholder='Content'
        />
        <TouchableOpacity
          onPress={() => {
            this.props.onSave({
              'title': this.state.title,
              'latitude': parseFloat(this.state.latitude),
              'longitude': parseFloat(this.state.longitude),
              'content': this.state.content.text
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
