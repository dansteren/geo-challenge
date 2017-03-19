import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, Switch } from 'react-native';
import { ExpirationInputCSS as Css } from './ExpirationInput.css'
import ExpirationIcon from '../Icons/ExpirationIcon'

import renderIf from './renderIf'

export default class ExpirationInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      expiration: this.props.expiration
    }
  }

  render() {
    return (
      <View style={Css.expirationInput} >
        <View style={Css.expirationToggleRow}>
          <ExpirationIcon size={24} style={Css.icon}/>
          <Text style={Css.switchLabel}>Expires</Text>
          <Switch
            onValueChange={(value) => {
              const expiration = value ? Date.now() : undefined;
              this.setState({ expiration })
              this.props.onChange(expiration);
            } }
            value={this.state.expiration ? true : false}
          />
        </View>
        {renderIf(this.state.expiration)(
          <Text style={Css.expirationDate}>
            {this.timestampToString(this.state.expiration)}
          </Text>
        )}
      </View>
    )
  }

  timestampToString(timestamp) {
    if(timestamp) {
      const o = new Date(timestamp);
      const day = o.getDay();
      const month = o.getMonth();
      const date = o.getDate();
      const year = o.getFullYear();
      const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
      return weekdays[day] + ', ' + months[month] + ' ' + date + ', ' + year;
    } else {
      return '';
    }
  }
}

ExpirationInput.propTypes = {
  expiration: PropTypes.number,
  onChange: PropTypes.func
};
