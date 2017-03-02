import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput } from 'react-native';
import { ChallengeCreationCSS as Css } from './ChallengeCreationView.css'
import DescriptionInput from '../DescriptionInput/DescriptionInput'
import ExpirationInput from '../ExpirationInput/ExpirationInput'
import ListDivider from '../ListDivider/ListDivider'
import LocationsList from '../LocationsList/LocationsList'

export default class ChallengeCreationView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      expiration: this.props.expiration
    };
  }

  render() {
    return (
      <View style={Css.page}>
        <TextInput
          style={Css.challengeName}
          autoCapitalize='sentences'
          placeholderTextColor='#FFFFFFDE'
          underlineColorAndroid='transparent'
          onChangeText={(name) => this.updateName(name)}
          value={this.state.name}
          placeholder='Enter a name for your challenge'
        />
        <View style={{height: 8}}/>
        <ExpirationInput
          expires={this.state.expiration}
        />
        <ListDivider/>
        <DescriptionInput
          description={this.props.description}
          onChange={(description) => this.props.onDescriptionChange(description)}
        />
        <View style={{height: 8}}/>
        <LocationsList locations={this.state.locations}/>
      </View>
    )
  }

  updateName(name) {
    this.setState({ name });
  }
}


ChallengeCreationView.propTypes = {
  name: PropTypes.string,
  expiration: PropTypes.string,
  description: PropTypes.string,
  onDescriptionChange: PropTypes.func,
  locations: PropTypes.array
};
