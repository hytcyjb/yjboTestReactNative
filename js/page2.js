/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
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

export default class Page2 extends Component {
    render() {
        return (
            <View>{/* style={styles.container}*/}
                <Image source={require('./android/app/src/main/res/mipmap-hdpi/ic_launcher.png')}
                       style={styles.iconStyle}></Image>
                {/*<Image source={{uri: 'ic_launcher'}} style={{width: 30, height: 30}} />*/}
                {/*<Image source={require('./images/apple_logo.png')}/>*/}
                <Image
                    style={styles.iconStyle}
                    source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
                />
                <Text style={styles.welcome}>
                    Welcome to React Native!---yjbo22226
                    sss
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>你好呀</Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
                {/*// 尝试把`flexDirection`改为`column`看看*/}
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text style={styles.instructions}>你好呀</Text>
                    <Text style={styles.instructions}>你好呀</Text>
                    <Text style={styles.instructions}>你好呀</Text>
                </View>

                <View>
                    <Blink text='I love to blink' />
                    <Blink text='Yes blinking is so great' />
                    <Blink text='Why did they ever take this out of HTML' />
                    <Blink text='Look at me look at me look at me' />
                </View>
                <View>
                    <Greeting name='Rexxar'/>
                    <Greeting name='Jaina'/>
                    <Greeting name='Valeera'/>
                </View>
                <View>
                    <Text style={styles.red}>just red</Text>
                    <Text style={styles.bigblue}>just bigblue</Text>
                    <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
                    <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
                </View>
                <View>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
                    <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
                </View>
                <View style={{width:200,height:200}}>
                    <View style={{flex:1, backgroundColor: 'powderblue'}} />
                    <View style={{flex:1, backgroundColor: 'skyblue'}} />
                    <View style={{flex:1, backgroundColor: 'steelblue'}} />
                </View>
                <View>
                    {/*监听输入数据*/}
                    <PizzaTranslator name='Rexxar'/>
                </View>
                <View>
                    <Image source={require('./android/app/src/main/res/mipmap-hdpi/ic_launcher.png')} />
                </View>
                {/*列表*/}
                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
                {/*列表*/}
                <SectionList
                    sections={[
                        {title: 'D', data: ['Devin']},
                        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                />
            </View>
        );
    }
}


class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}
class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { showText: true };
        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });
        }, 1000);
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}
class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    iconStyle: {
        width: 50,
        height: 50
    },bigblue: {/*设置颜色和字体大小*/
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
        fontSize: 10,
    },
});
