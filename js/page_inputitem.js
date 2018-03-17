import { InputItem } from 'antd-mobile';
import React from 'react';
// import { Text } from 'react-native';
/**@success
 * 学习阿里的antd-mobile组件之InputItem
 * yjbo 2018年03月18日00:58:39
 */
export default class page_inputitem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           value : "我是默认value",
        };
    }
    render() {
        return (
            <InputItem 
            defaultValue="defaultValue"
            placeholder="placeholder"
            value={this.state.value}
            clear
            editable
            disabled
            textAlign="right"
            maxLength={20}
            onChange={(value) => this.onChange(value)}
            extra="extra"
            onExtraClick={value => this.onExtraClick(value)}
            >
                我是InputItem文本
            </InputItem>
        )
    }
//修改数据及时打印
onChange =(v) =>{
    this.setState({
        value: v
    });
    console.log("InputItem==onChange=="+v);
}
//点击Extra的效果,通过控件带不到value值，
onExtraClick =(v) =>{
    console.log("InputItem==onExtraClick=当前值="+this.state.value);
}
}