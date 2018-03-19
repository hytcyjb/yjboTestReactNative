import { InputItem } from 'antd-mobile';
import React from 'react';
import {
    Text, View, StyleSheet, TouchableOpacity, Alert, TouchableHighlight
    , Button, Image
} from 'react-native';
/**
 * 登录页面
 * yjbo 2018年03月18日13:58:39
 */
export default class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userStr: "",
            pwdStr: ""
        };
    }
   
    _onLoginButton = () => {
        // console.log("你好");

        // alert("当前的用户名，密码是："+this.state.userStr+"===="+this.state.pwdStr,
        //         "","",[],"","");

        Alert.alert(
            '当前的用户名，密码是：',
            this.state.userStr + "====" + this.state.pwdStr,
            [
                { text: '稍后再说', onPress: () => console.log('Ask me later pressed') },
                { text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: '确定', onPress: () => { 
                    const { navigate } = this.props.navigation;
                    navigate("Message");
                } },
            ],
            { cancelable: false }
        )
    }
    render() {
        console.log("render是：" + this.state.userStr + "====" + this.state.pwdStr);
        return (
            <View style={styles.container}>
                {/* <View style={styles.imgOutStyle}> */}
                    <Image style={styles.imgstyle} source={require("../../img/ic_launcher.png")} />
                {/* </View> */}
                <View style={styles.userNameOutStyle} >
                    {/* <Text></Text> */}
                    <InputItem
                        defaultValue="defaultValue"
                        placeholder="请输入用户名"
                        value={this.state.userStr}
                        clear
                        editable
                        disabled
                        // textAlign="right"
                        maxLength={20}
                        onChange={(value) => this.onChangeUserStr(value)}
                    // extra="extra"
                    // onExtraClick={value => this.onExtraClick(value)}
                    >
                        用户名：
                    </InputItem>
                </View>
                <View style={styles.userNameOutStyle} >
                    <InputItem
                        defaultValue="defaultValue"
                        placeholder="请输入密码"
                        value={this.state.pwdStr}
                        clear
                        editable
                        disabled
                        onChange={(value) => this.onChangePwdStr(value)}
                        maxLength={20} >
                        密 码：
                    </InputItem>
                </View>
                <View style={styles.buttomStyle}>
                    {/* <TouchableHighlight
                     activeOpacity={1}
                     onPressOut={this._onLoginButton()}> */}
                    <Button
                        title="登录"
                        onPress={this._onLoginButton}></Button>
                    {/* </TouchableHighlight> */}
                </View>
            </View>
        )
    }

    //修改数据及时打印
    onChangeUserStr = (v) => {
        this.setState({
            userStr: v
        });
    }
    onChangePwdStr = (v) => {
        this.setState({
            pwdStr: v
        });
    }
    //网络请求
    getMoviesFromApiAsync() {
        let urlStr = 'https://www.apiopen.top/satinApi?type=1&page=1';
        console.log("请求的接口为:"+urlStr);
        return fetch(urlStr)
          .then((response) => response.json())
          .then((responseJson) => {
            console.log("请求的返回值为:"+responseJson);
            return responseJson;
          })
          .catch((error) => {
            console.log("请求的错误为:"+error);
            console.error(error);
          });
      }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        flexDirection: 'column',
    },
    userNameOutStyle: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 50,
    },
    buttomStyle: {
        marginTop: 50,
    },
    imgOutStyle: {
        width: 500,
        backgroundColor:'red'
    },
    imgstyle: {
        flex:1,
        justifyContent: "center",
        alignItems:"center",
        // textAlign:"center",
        marginBottom: 20,
    }
});