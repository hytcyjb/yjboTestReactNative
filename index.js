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
// import Page1 from './page1.js'
// import Page3 from './page3.js'
// import Page6_customerDetail from './page6_customerDetail.js'
// import Page7_Navigator from './page7_Navigator'
// import Page_nav from './pagenav.js'
// import Page_tag from './page_tag.js'
// import Page_text from './page_text.js'
// import Page_inputitem from './page_inputitem.js'
// import Login from './xiangmujs/login'
// import Joklist from './xiangmujs/joklist'
// import Pagefaltlist from "./page_faltlist"
// import Pagefaltlist2 from "./page_faltlist2"
// import Pagefaltlist3 from "./page_faltlist3"
import Navigator from "./js/xiangmujs/navigator"

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                {/* <Page6_customerDetail { ...this.props.update=this.update}/>  */}
                {/* {...this.props}  */}
                {/* <Page_nav /> */}
                {/* <Page1/> */}
                {/* <Page_tag/> */}
                {/* <Page_text/> */}
                 {/*<Page_inputitem/>*/}
                <Navigator/>
            </ScrollView>
        );
    }
    update =() => {
        alert("更新呗");
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'green',

    },
    iconStyle: {
        width: 50,
        height: 50,
        margin: 20,
    },
});
// AppRegistry.registerComponent('AwesomeProject', () => index);