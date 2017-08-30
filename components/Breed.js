import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, StyleSheet, Text, View, WebView, FlatList, ListView, Image } from 'react-native';
// import { List, ListItem, SearchBar } from "react-native-elements";

class Breed extends React.Component {

  constructor(props) {
    super(props);
      let arr = this.props.navigation.state.params.map((element) => element);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(arr),
      modalVisible: false,
    }
    // setModalVisible(visible) {
    // this.setState({modalVisible: visible});
    // }
  }
  render() {
    return (
      // <View>
      // <Modal
      //     animationType={"slide"}
      //     transparent={false}
      //     visible={this.state.modalVisible}
      //     onRequestClose={() => {alert("Modal has been closed.")}}
      //     >
      //    <View style={{marginTop: 22}}>
      //     <View>
      //       <Text>Hello World!</Text>
      //
      //       <TouchableHighlight onPress={() => {
      //         this.setModalVisible(!this.state.modalVisible)
      //       }}>
      //         <Text>Hide Modal</Text>
      //       </TouchableHighlight>
      //
      //     </View>
      //    </View>
      //   </Modal>
      //   </View>
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) =>
         <Text
         style={styles.text}
         onPress={() => {
          this.setModalVisible(!this.state.modalVisible)}}>
        {data.name}
         </Text>
       }
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#8E8E8E',
    marginTop: 12,
    marginBottom: 12
  },
  container: {
    flex: 1,
    paddingTop: 12,
    paddingBottom: 12,
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  text: {
   marginLeft: 12,
   fontSize: 16,
 },
 photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

export default Breed;
