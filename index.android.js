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
import Navigator from "./js/xiangmujs/navigator"

export default class AwesomeProject extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Navigator />
            </View>
        );

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#FF55ff',

    },
    iconStyle: {
        width: 50,
        height: 50,
        margin: 20,
    },
});
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
