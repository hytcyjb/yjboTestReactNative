/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  SectionList,
  TouchableOpacity,
} from 'react-native';
var width = require('Dimensions').get('window').width;
var imageHight = 30;
export default class page6_customerDetail extends Component {
  _keyExtractor = (item, index) => item.id;
  constructor(props) {
    super(props);
    this.state = {
      title: "aaa"
    };
  }
  // 接收触发信息
  activeEvent = (event) => {
    this.setState({
      title: event
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.outViewStyle}
          activeOpacity={1}
          onPress={() => this.activeEvent('点击')}
          onPressIn={() => this.activeEvent('按下')}
          onPressOut={() => this.activeEvent('收回')}
          onLongPress={() => this.activeEvent('长按')}
        >
          <Image style={styles.iconStyle}
            source={{ uri: 'http://a.cphotos.bdimg.com/timg?image&quality=100&size=b4000_4000&sec=1519442257&di=071a01220d5340fae68baa7cbdbb1e15&src=http://imgsrc.baidu.com/imgad/pic/item/bd315c6034a85edf0bc4c71842540923dd547544.jpg' }}></Image>
          <View style={styles.midViewStyle}>
            {/* <Text style={styles.textitem1}>{"yjbo::0:" + item.position}</Text> */}
            <Text style={styles.textitem2}>{"标题"}</Text>
            <Text style={styles.textitem2} ref='text'>{this.state.title}</Text>
          </View>
          <Image style={styles.iconStyle} source={require('../img/ic_launcher.png')}></Image>
        </TouchableOpacity>
      </View>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  outViewStyle: {
    flex: 1,
    height: imageHight + 20,
    width: width,
    flexDirection: 'row',
    backgroundColor: 'red',
    // marginLeft:10,
    // marginRight:10,
    // marginTop:1,
    marginBottom: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  midViewStyle: {
    width: width - width / 2,
    height: imageHight,
    justifyContent: 'center'
  },
  iconStyle: {
    width: imageHight,
    height: imageHight,
    justifyContent: 'center',
    // borderRadius: (width / 4 - 20) / 2,
    // borderWidth: 1,
    // borderColor: 'white',
  }, bigblue: {/*设置颜色和字体大小*/
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
    fontSize: 10,
  }, textitem: {
    justifyContent: 'center',
    textAlign: 'center'
  }, textitem1: {
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderBottomColor: 'red',
    alignItems: 'center',
    textAlign: 'center',
  }, textitem2: {
    justifyContent: 'center',
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderBottomColor: 'blue',
    alignItems: 'center',
    textAlign: 'center',
  },
});

