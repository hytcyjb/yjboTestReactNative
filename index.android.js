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
    SectionList
} from 'react-native';
import PageHome from './js/index.js' 
import Page1 from './js/page1.js'
import Page3 from './js/page3.js'
import Page4 from './js/page4.js'

export default class AwesomeProject extends Component {
    render() {
        return (
            <PageHome />
        );

    }
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',

    },
    iconStyle: {
        width: 50,
        height: 50,
        margin: 20,
    },
});
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
