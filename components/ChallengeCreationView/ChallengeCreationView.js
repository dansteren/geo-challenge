import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput } from 'react-native';
import { ChallengeCreationCSS as Css } from './ChallengeCreationView.css'
import DescriptionInput from '../DescriptionInput/DescriptionInput'

export default class ChallengeCreationView extends Component {

  render() {
    return (
      <View style={Css.page} >
        <Text>Name: {this.props.name}</Text>
        <Text>Expiration: {this.props.expiration}</Text>
        <DescriptionInput
          description={this.props.description}
          onChange={(description) => this.props.onDescriptionChange(description)}
        />
        <DescriptionInput
          description='another description'
          onChange={(description) => this.props.onDescriptionChange(description)}
        />
      </View>
    )
  }
}

ChallengeCreationView.propTypes = {
  name: PropTypes.string,
  expiration: PropTypes.string,
  description: PropTypes.string,
  onDescriptionChange: PropTypes.func,
  locations: PropTypes.array
};
