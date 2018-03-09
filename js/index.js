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
import Page1 from './page1.js'
import Page3 from './page3.js'
import Page6_customerDetail from './page6_customerDetail.js'

export default class AwesomeProject extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Page6_customerDetail /> 
            </ScrollView>
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
