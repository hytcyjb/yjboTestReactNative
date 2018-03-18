import { InputItem } from 'antd-mobile';
import React from 'react';
import {
    Text, View, StyleSheet, TouchableOpacity, Alert, TouchableHighlight
    , Button, Image, FlatList,
} from 'react-native';
/**
 * 笑话列表页面
 * yjbo 2018年03月18日14:32:39
 */
export default class joklist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datalist: "",
            refreshing:false,
        };
    }


    componentWillMount() {
        let requestVal = this.getMoviesFromApiAsync(1);
        console.log("返回值为==" + requestVal);
        //    this.setState({
        //         datalist:requestVal.data
        //    });
    }
    componentWillReceiveProps(nexProps) {
        console.log("返回值为==" + requestVal);
    }

    render() {
        let datalist = this.state.datalist;
        return (
            <View style={styles.container}>
                <Text style={styles.textstyle}>笑话列表页面</Text>
                {/*列表*/}
                <FlatList
                    keyExtractor={this._keyExtractor}
                    data={datalist}
                    renderItem={(item) => this.renderItem(item)}
                    ItemSeparatorComponent={this.ItemDivideComponent}//分割线组件
                    ListEmptyComponent={this.createEmptyView()}
                    onRefresh={this.onRefresh}
                    refreshing={this.state.refreshing}
                    onEndReachedThreshold={0.1}
                    // onEndReached={({distanceFromEnd}) => (
                    //       this.getMoviesFromApiAsync(3))}
                />
            </View>
        )
    }
    onRefresh =()=>{
        // this.setState({refreshing: true})//开始刷新
        this.setState({
            refreshing: true//开始刷新
        });
        this.getMoviesFromApiAsync(2);
    }
    _keyExtractor = (item, index) => index;
    
    // item["item"]["t"]
    // _keyExtractor(item, index) {
    //     console.log(index+"==标志="+item)
    //     return "index" + index + item;
    // };
    ItemDivideComponent() {
        return (
            <View style={{ height: 1, backgroundColor: 'skyblue' }} />
        );
    }
    createEmptyView() {
        return (
            <Text style={{ fontSize: 40, alignSelf: 'center',flex:1 }}>还没有数据哦！</Text>
        );
    }
    renderItem(item) {
        return (
            <View style={styles.itemOutstyle}>
                <Image style={styles.itemImgstyle}
                    source={{ uri: item["item"]["profile_image"] }} />
                <View style={styles.contantInstyle}>
                    <Text style={styles.itemTextStyle}>{item["item"]["text"]}</Text>
                    <View style={styles.contantInInstyle}>
                        <Text style={styles.contantInInTextstyle}>{item["item"]["name"]}</Text>
                        <Text style={styles.contantInInTextstyle}>{item["item"]["created_at"]}</Text>
                    </View>
                </View>
            </View>
        );
    }
    //网络请求
    getMoviesFromApiAsync(page) {
        let urlStr = 'https://www.apiopen.top/satinApi?type=1&page='+page;
        console.log("请求的接口为:" + urlStr);
        return fetch(urlStr)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("请求的返回值为:" + responseJson);
                this.setState({
                    datalist: responseJson.data,
                    refreshing: false//停止刷新
                });
                return responseJson;
            })
            .catch((error) => {
                console.log("请求的错误为:" + error);
                console.error(error);
                this.setState({
                    refreshing: false//停止刷新
                });
            });
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'green',
        marginTop: 20,
        marginBottom: 20,
    },
    userNameOutStyle: {
        // flex: 1,
        // justifyContent:"flex-start",
        // // alignItems: 'center',
        // backgroundColor: 'green',
        // flexDirection: 'row',
    },
    buttomStyle: {
        marginTop: 50,
    },
    imgOutStyle: {
        width: 500,
        backgroundColor: 'red'
    },
    imgstyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // textAlign:"center",
        marginBottom: 20,
    },
    itemOutstyle: {
        flex: 1,
        flexDirection: "row",
        // justifyContent:'space-between',
        alignItems: "center",//列表中的某个元素居中显示
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
    },
    itemImgstyle: {
        // flex:1,
        flexDirection: "row",
        width: 50,
        height: 50,
        marginRight: 5,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'grey',
    },
    itemTextStyle: {
        flex: 1,
        color: "#333333"
    },
    contantInstyle: {
        flex: 1,
        flexDirection: "column",
        // justifyContent:'space-between',
        // alignItems: "center",//列表中的某个元素居中显示
    },
    contantInInstyle: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 5,
    },
    contantInInTextstyle: {
        color: "#999999",
    },
    textstyle: {
        color: "#333333",
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: "center",
        marginBottom: 20,
    }
});