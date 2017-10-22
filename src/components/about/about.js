import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class About extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://mishipay.com/home'}}
        style={{marginTop: 20}}
      />
    );
  }
}