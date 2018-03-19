// 引入依赖
import React from 'react';
import { StackNavigator } from 'react-navigation';
import {
  Button,
} from 'react-native';
import App from "./login";
import MessageContainer from "./joklist";

//界面导航
export default NavHome = StackNavigator({
    Home: {
      screen: App,
      navigationOptions: ({navigation}) => ({
        title: 'Home',//navigation.navigate('DrawerToggle')
        headerLeft: (<Button onPress={() => alert("暂无内容")} title={'User'} />),
        headerRight: (<Button onPress={() => navigation.navigate('Message')} title={'Message'} />),
      })
    },
    Message: {
      screen: MessageContainer,
      navigationOptions: ({navigation}) => ({
        title: "Message",
        headerLeft: (<Button title='Back' onPress={() => navigation.goBack()} />)
      })
    },
  });