import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, WebView } from 'react-native';


class Breeds extends React.Component {
  render() {
    return (
        <Text>Here Will Lie The Breed API Info</Text>
      );
  }
  componentDidMount() {
    return fetch('http://shelby-capstone-server.herokuapp.com/breeds')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
    })
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

export default Breeds;
