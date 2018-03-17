import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  SectionList
} from 'react-native';
export default class pagenav extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>你好111</Text>
        <View style={styles.navStyle}>
          <NavBar
            mode="light"
            // icon={<Icon type="left" />}
            onLeftClick={() => console.log('onLeftClick')}
            // rightContent={[
            //   <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            //   <Icon key="1" type="ellipsis" />,
            // ]}
          >NavBar</NavBar>
        </View>
      </View>)
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'green',

  },
  navStyle: {
    flex: 1,
    backgroundColor: 'red',
  },
});