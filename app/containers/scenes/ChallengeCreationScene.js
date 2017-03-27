import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, ScrollView, Button, TouchableOpacity } from 'react-native';

import { ChallengeCreationCSS as Css } from './ChallengeCreationScene.css'
import { DescriptionInput, ExpirationInput, ListDivider, LocationsList } from '../../components';
import { Colors } from '../../theme/theme';
import * as GeoServer from '../../services/GeoServer';

export default class ChallengeCreationScene extends Component {
  constructor(props) {
    super(props);
    if (this.props.challenge) {
      this.state = {
        title: this.props.challenge.title,
        description: this.props.challenge.description,
        expiration: this.props.challenge.expiration,
        locations: this.props.challenge.locations
      };
    } else {
      this.state = {
        title: '',
        description: '',
        expiration: undefined,
        locations: []
      }
    }
  }

  render() {
    return (
      <View style={Css.page}>
        <TextInput
          style={Css.challengeTitle}
          autoCapitalize='sentences'
          placeholderTextColor={Colors.hintTextWhite}
          underlineColorAndroid='transparent'
          onChangeText={(title) => this.setState({ title })}
          value={this.state.title}
          placeholder='Enter a title for your challenge'
        />
        <ScrollView>
          <View style={{height: 8}}/>
          <ExpirationInput
            expiration={this.state.expiration}
            onChange={(expiration) => this.setState({ expiration })}
          />
          <ListDivider/>
          <DescriptionInput
            description={this.state.description}
            onChange={(description) => this.setState({ description })}
          />
          <View style={{height: 8}}/>
          <LocationsList
            locations={this.state.locations}
            navigator={this.props.navigator}
            onChange={(locations) => this.setState({ locations })}
          />
        </ScrollView>
        <TouchableOpacity
          onPress={() => GeoServer.createChallenge({
              title: this.state.title,
              description: this.state.description,
              points: this.state.locations
            },
            () => {this.props.navigator.pop()},
            (error) => {console.log('Error: ', error)},
          )}
        >
        <View style={Css.footer}>
          <Text style={Css.submitButton}>SUBMIT</Text>
        </View>
        </TouchableOpacity>
      </View>
    )
  }
}

ChallengeCreationScene.propTypes = {
  challenge: PropTypes.object,
  navigator: PropTypes.object.isRequired
};