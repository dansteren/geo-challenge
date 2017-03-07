import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, Switch } from 'react-native';
import { ExpirationInputCSS as Css } from './ExpirationInput.css'
import ExpirationIcon from '../Icons/ExpirationIcon'

import renderIf from './renderIf'

export default class ExpirationInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      expires: this.props.expires
    }
  }

  render() {
    return (
      <View style={Css.expirationInput} >
        <View style={Css.expirationToggleRow}>
          <ExpirationIcon size={24} style={Css.icon}/>
          <Text style={Css.switchLabel}>Expires</Text>
          <Switch
            onValueChange={(value) => this.setState( value ? {expires: 'Sun, Jun 11, 2017'}: {expires: ''})}
            value={this.state.expires ? true : false}
          />
        </View>
        {renderIf(this.state.expires)(
          <Text style={Css.expirationDate}>
            {this.state.expires}
          </Text>
        )}
      </View>
    )
  }
}

ExpirationInput.propTypes = {
  expires: PropTypes.string
};
