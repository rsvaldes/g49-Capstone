import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, WebView, Button } from 'react-native';


class Options extends React.Component {

  constructor(){
    super()
    this.state = {
      breedList: [],
    }
  }
  componentDidMount() {

    return fetch('https://shelby-capstone-server.herokuapp.com/breeds')
    .then((res) => res.json())
    .then((resJson) => {
      this.setState({
        breedList: resJson
      });
    })
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Button
        onPress={() => navigate('PersonalityTest')}
        title="What Breed Of Dog Will Best Suit My Lifestyle?"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />

        <Button
        onPress={() => navigate('AmIReady')}
        title="Am I Ready To Be A Dog Owner?"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />

        <Button
        onPress={ () => navigate('Breed', this.state.breedList) }
        title="Learn More About Some Common Breeds"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />

        <Button
        onPress={() => navigate('FureverHomes')}
        title="Check Out Adoptable Dogs In My Area"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
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
  },
});

export default Options;
