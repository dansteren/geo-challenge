import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { ChallengeCreationCSS as Css } from './ChallengeCreationView.css'
import DescriptionInput from '../DescriptionInput/DescriptionInput'
import ExpirationInput from '../ExpirationInput/ExpirationInput'
import ListDivider from '../ListDivider/ListDivider'
import LocationsList from '../LocationsList/LocationsList'

export default class ChallengeCreationView extends Component {
  constructor(props) {
    super(props);
    if (this.props.challenge) {
      this.state = {
        title: this.props.challenge.title,
        description: this.props.challenge.description,
        expiration: this.props.challenge.expiration,
        locations: this.props.challenge.locations
      };
    }
  }

  render() {
    return (
      <View style={Css.page}>
        <TextInput
          style={Css.challengeTitle}
          autoCapitalize='sentences'
          placeholderTextColor='#FFFFFFDE'
          underlineColorAndroid='transparent'
          onChangeText={(title) => this.setState({ title })}
          value={this.state.title}
          placeholder='Enter a title for your challenge'
        />
        <ScrollView>
          <View style={{height: 8}}/>
          <ExpirationInput
            expires={this.state.expiration}
          />
          <ListDivider/>
          <DescriptionInput
            description={this.state.description}
            onChange={(description) => this.setState({description})}
          />
          <View style={{height: 8}}/>
          <LocationsList locations={this.state.locations}/>
        </ScrollView>
        <View style={Css.footer}>
          <Text style={Css.submitButton}>SUBMIT</Text>
        </View>
      </View>
    )
  }
}


ChallengeCreationView.propTypes = {
  challenge: PropTypes.object,
};
