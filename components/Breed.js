import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, StyleSheet, Text, View, WebView, FlatList, ListView } from 'react-native';
// import { List, ListItem, SearchBar } from "react-native-elements";

class Breed extends React.Component {

  constructor(props) {
    super(props);
    let arr = this.props.navigation.state.params;
      let nameArr = arr.map((element) => element.name);
    // console.log('state array',array);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(nameArr),
    };
    // console.log('props',this.props.navigation.state.params[0]);
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(data) => <View><Text>{data}</Text></View>}
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
  }
});

export default Breed;
