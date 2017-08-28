import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, WebView } from 'react-native';


class AmIReady extends React.Component {
  render() {
    return (
        <WebView
          source={{uri: 'http://dogtime.com/quiz/am-i-ready-for-a-dog'}}
          style={{paddingTop: 20}}
        />
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AmIReady;
