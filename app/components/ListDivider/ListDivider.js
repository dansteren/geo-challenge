import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class ListDivider extends Component {
  render() {
    const css = StyleSheet.create({
      divider: {
        backgroundColor: 'transparent'
      },
      line: {
        height: 1,
        backgroundColor: 'rgba(0, 0, 0, .12)'
      },
      padding: {
        height: 8
      }
    });
    return (
      <View style={css.divider}>
        <View style={css.padding}/>
        <View style={css.line}/>
        <View style={css.padding}/>
      </View>
    )
  }
}
