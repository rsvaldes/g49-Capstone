import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';


class PersonalityTest extends React.Component {
  render() {
    return (
        <WebView
          source={{uri: 'http://dogtime.com/quiz/dog-breed-selector'}}
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

export default PersonalityTest;
