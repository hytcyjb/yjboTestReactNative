import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Button,
    Dimensions
} from 'react-native';
const {width,height}=Dimensions.get('window')

export default class page_faltlist3 extends Component{
    // 构造
    constructor(props) {
        super(props);
        this.state ={
            refreshingFlag:false,
        };
    }
    refreshing(){
        this.setState({
            refreshingFlag:true,
        },()=>{
            let timer =  setTimeout(()=>{
                clearTimeout(timer)
                alert('刷新成功')
                this.setState({
                    refreshingFlag:false,
                });
            },1500)
        });
    }
    _onload(){
        this.setState({
            refreshingFlag:true,
        },()=>{
            let timer =  setTimeout(()=>{
                clearTimeout(timer)
                alert('加载成功')
                this.setState({
                    refreshingFlag:false,
                });
            },1500)
        });
    }
    render() {
        var data = [];
        for (var i = 0; i < 100; i++) {
            data.push({key: i, title: i + ''});
        }

        return (
            <View style={{flex:1}}>
                <Button title='滚动到指定位置' onPress={()=>{
                    this._flatList.scrollToOffset({animated: true, offset: 2000});
                }}/>
                <View style={{flex:1}}>
                    <FlatList
                        ref={(flatList)=>this._flatList = flatList}
                        ListHeaderComponent={this._header}
                        ListFooterComponent={this._footer}
                        ItemSeparatorComponent={this._separator}
                        renderItem={this._renderItem}
                        onRefresh={this.refreshing}
                        refreshing={this.state.refreshingFlag}
                        onEndReachedThreshold={0}
                        onEndReached={
                            this._onload
                        }
                        numColumns ={3}
                        columnWrapperStyle={{borderWidth:2,borderColor:'black',paddingLeft:20}}

                        //horizontal={true}

                        getItemLayout={(data,index)=>(
                        {length: 100, offset: (100+2) * index, index}
                        )}

                        data={data}>
                    </FlatList>
                </View>

            </View>
        );
    }


    _renderItem = (item) => {
        var txt = '第' + item.index + '个' + ' title=' + item.item.title;
        var bgColor = item.index % 2 == 0 ? 'red' : 'blue';
        return <Text style={[{flex:1,height:100,backgroundColor:bgColor},styles.txt]}>{txt}</Text>
    }

    _header = () => {
        return <Text style={[styles.txt,{backgroundColor:'black'}]}>这是头部</Text>;
    }

    _footer = () => {
        return <Text style={[styles.txt,{backgroundColor:'black'}]}>这是尾部</Text>;
    }

    _separator = () => {
        return <View style={{height:2,backgroundColor:'yellow'}}/>;
    }


}
const styles=StyleSheet.create({
    container:{

    },
    content:{
        width:width,
        height:height,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'
    },
    cell:{
        height:100,
        backgroundColor:'purple',
        alignItems:'center',
        justifyContent:'center',
        borderBottomColor:'#ececec',
        borderBottomWidth:1

    },
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    }

})
