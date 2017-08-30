import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

class Home extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
      <Image
        style={{width: 400, height: 610, opacity: .7}}
        source={require('../bells.jpg')}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

export default Home;
