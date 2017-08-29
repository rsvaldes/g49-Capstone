import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, WebView, FlatList } from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";

class Breeds extends React.Component {
  constructor() {
    super()
      this.state = {
        breedList: []
      }
  }
 //  static navigationOptions = {
 //   title: 'Breeds'
 // };
componentDidMount() {
  return fetch('https://shelby-capstone-server.herokuapp.com/breeds')
  .then((response) => response.json())
  .then((responseJson) => {
    // this.setState({
    //   breedList: responseJson,
    // })
    console.log(responseJson);
  })
}

  render() {
    return (
      // <View>
      // <List>
      //   <FlatList
      //     data={this.state.breedList}
      //     keyExtractor={ breed => breed.id }
      //     renderItem={({ breed }) => (
      //       <ListItem
      //         breedList
      //         title={breed.name}
      //         subtitle={breed.description}
      //       />
      //     )}
      //   />
      // </List>
      // </View>
      <Text>Test Test</Text>
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

export default Breeds;
