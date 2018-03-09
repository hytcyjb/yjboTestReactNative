/**
 * Created by on 2017/5/17.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Picker,
    Text,
} from 'react-native';

export default class PickerDemo extends Component {

    static navigationOptions = {
        title: 'Picker',
    };

    state = {
        language: 'java',
        position: 0,
    }

    render() {
        // data: [{ label: "北京分公司", value: "105" },
        // { label: "上海分公司", value: "106" },
        // { label: "深圳分公司", value: "107" },
        // { label: "苏皖区", value: "108" },
        // { label: "华南区", value: "109" },
        // { label: "西北区", value: "110" },
        // { label: "西南区", value: "111" },
        // { label: "华中区", value: "112" },
        // { label: "东北区", value: "113" },
        // { label: "津冀区", value: "114" },
        // { label: "浙江区", value: "115" },
        // { label: "山东区", value: "116" },
        // { label: "福建区", value: "117" },
        // { label: "中央大客户事业部", value: "118" },
        // { label: "军工客户事业部", value: "119" },
        // { label: "海外客户事业本部", value: "120" },
        // ];
        return (
            <View style={{ flex: 1 }}>
                <Text>value:{this.state.language}----position:{this.state.position}</Text>
                <Picker
                    data={[{ label: "北京分公司", value: "105" },
                    { label: "上海分公司", value: "106" },
                    { label: "深圳分公司", value: "107" },
                    { label: "苏皖区", value: "108" },
                    { label: "华南区", value: "109" },
                    { label: "西北区", value: "110" },
                    { label: "西南区", value: "111" },
                    { label: "华中区", value: "112" },
                    { label: "东北区", value: "113" },
                    { label: "津冀区", value: "114" },
                    { label: "浙江区", value: "115" },
                    { label: "山东区", value: "116" },
                    { label: "福建区", value: "117" },
                    { label: "中央大客户事业部", value: "118" },
                    { label: "军工客户事业部", value: "119" },
                    { label: "海外客户事业本部", value: "120" },
                    ]}
                    cols={1}
                    style={{ backgroundColor: 'red' }}
                    itemStyle={{ color: 'blue' }}
                    prompt='Picker'
                    mode='dropdown'
                    selectedValue={this.state.language}
                    onChange={(lang, position) => this.setState({ language: lang, position: position })}>
                    {/* <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="Net" value="net" />
                    <Picker.Item label="ReactNative" value="rn" />
                    <Picker.Item label="c#" value="c" />
                    <Picker.Item label="php" value="php" /> */}
                </Picker>
            </View>
        );
    }
}