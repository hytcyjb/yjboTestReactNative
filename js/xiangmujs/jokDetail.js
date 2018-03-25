import React from 'react';
import {
    Text, View, StyleSheet, TouchableOpacity, Alert, TouchableHighlight
    , Button, Image, FlatList,
} from 'react-native';
// import NavHome from "./navigator";
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
/**
 * 笑话详情页面
 * @yjbo 2018年3月24日22:54:433
 */
export default class jokDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datalist: "",
            // refreshing:false,
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
        //    let refreshing = this.state.refreshing;
        //    console.log("=refreshing=="+refreshing);
        return (
            <View style={styles.container}>
                {this.renderItem()}
            </View>
        )
    }
    onRefresh = () => {
        // this.setState({refreshing: true})//开始刷新
        // this.setState({
        //     refreshing: true//开始刷新
        // });
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
            <View style={{ height: 1, backgroundColor: '#999999' }} />
        );
    }
    createEmptyView() {
        return (
            <Text style={{ fontSize: 40, alignSelf: 'center', flex: 1 }}>还没有数据哦！</Text>
        );
    }
    renderItem() {
        const { navigate } = this.props.navigation;
        let item = navigate.pramas.item;
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.activeEvent(item)}>
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
            </TouchableOpacity>
        );
    }
    activeEvent(item) {
        // alert("=点击了=" + item["item"]["text"]);
        // this.props.navigation.goBack();
        const { navigate } = this.props.navigation;
        // navigate("Home");
        this.props.navigation.goBack();
    }
    //网络请求
    getMoviesFromApiAsync(page) {
        let urlStr = 'https://www.apiopen.top/satinApi?type=1&page=' + page;
        console.log("请求的接口为:" + urlStr);
        return fetch(urlStr)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("请求的返回值为:" + responseJson);
                this.setState({
                    datalist: responseJson.data,
                    // refreshing: false//停止刷新
                });
                return responseJson;
            })
            .catch((error) => {
                console.log("请求的错误为:" + error);
                console.error(error);
                // this.setState({
                //     refreshing: false//停止刷新
                // });
            });
    }
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: ScreenHeight,
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
        width: ScreenWidth,
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