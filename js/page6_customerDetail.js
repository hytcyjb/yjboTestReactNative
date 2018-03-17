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
      title: {
        value1: "--", value2: "--", value3: "--", value4: "--", value5: "--", value6: "--", value7: "--",
        value8: "--", value9: "--", value10: "--", value11: "--", value12: "--", value13: "--", value14: "--",
      }

    };
  }
  // 接收触发信息
  activeEvent = (event) => {
    this.setState({
      title: {
        value1: "内容1", value2: "内容2", value3: "内容3", value4: "内容4", value5: "内容5", value6: "内容6", value7: "内容7",
        value8: "内容8", value9: "内容9", value10: "内容10", value11: "内容11", value12: "内容12", value13: "内容13", value14: "内容14",
      }
    });
  }
  clickImage1 = (event) => {
    alert("===="+event);
    this.activeEvent(event);
    this.props.update();
  }
  render() {
    return (
      <View style={styles.container}>
        <View key="1">
          <TouchableOpacity
            style={styles.outViewStyle}
            activeOpacity={1}
            onPress={() => this.activeEvent('点击')}
          >
            <View style={styles.innelContent}>
              <Image style={styles.iconStyleLeft} source={require('../img/ic_launcher.png')}></Image>
              <View style={styles.midViewStyle}>
                <Text style={styles.textitem2}>{"标题"}</Text>
                <Text style={styles.textitem2} ref='text'>{this.state.title.value1}</Text>
              </View>
            </View>
            <View style={styles.innelContent}>
              <Text style={styles.textitem2} ref='text'>{this.state.title.value1}</Text>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.clickImage1('点击')}
              >
                <Image style={styles.iconStyleRight} source={require('../img/ic_launcher.png')}></Image>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
        <View key="2" style={styles.outViewStyle}>
          <Image style={styles.iconStyleLeft} source={require('../img/ic_launcher.png')}></Image>
          <View style={styles.midViewStyle}>
            <Text style={styles.textitem2}>{"标题2"}</Text>
            <Text style={styles.textitem2} ref='text'>{this.state.title.value2}</Text>
          </View>
          <Image style={styles.iconStyleRight} source={require('../img/ic_launcher.png')}></Image>
        </View>
      </View>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    top: 50,
    flexDirection: 'column'
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
    marginBottom: 1,
    justifyContent: 'space-between',
    paddingLeft: 10,
    alignItems: 'center'
  },
  midViewStyle: {
    // width: width - width / 2,
    // height: imageHight,
    // justifyContent: 'center'
    alignItems: 'center',
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
  },
  innelContent: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'white',
  },
  iconStyleLeft: {
    width: imageHight,
    height: imageHight,
    justifyContent: 'flex-start',
    borderRadius: imageHight / 2,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white'
  },
  iconStyleRight: {
    width: imageHight,
    height: imageHight,
    // justifyContent: 'flex-end',
    borderRadius: imageHight / 2,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    // alignItems: 'center',
    marginRight: 20,
    marginLeft: 20
  },
  bigblue: {/*设置颜色和字体大小*/
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
    fontSize: 10,
  },
  textitem: {
    justifyContent: 'center',
    textAlign: 'center'
  },
  textitem1: {
    alignItems: 'center',
    textAlign: 'center',
  },
  textitem2: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

