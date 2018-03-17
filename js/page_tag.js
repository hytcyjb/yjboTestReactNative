// tslint:disable:jsx-no-multiline-js
/* tslint:disable:no-console */
import { Tag, WhiteSpace } from 'antd-mobile';
import React from 'react';
import { View } from 'react-native';

function onChange(selected) {
    console.log(`tag selected: ${selected}`);
}
/**@success
 * 学习阿里的antd-mobile组件之Tag
 * yjbo 2018年03月18日00:13:39
 */
export default class page_tag extends React.Component {
    render() {
        return (
            <View style={{ padding: 10 }}>
                <Tag>Basic</Tag>
                <WhiteSpace />
                <Tag selected>Selected</Tag>
                <WhiteSpace />
                <Tag disabled>Disabled</Tag>
                <WhiteSpace />
                <Tag onChange={onChange}>Callback</Tag>
                <WhiteSpace />
                <Tag
                    closable
                    onClose={() => {
                        console.log('onClose');
                    }}
                    afterClose={() => {
                        console.log('afterClose');
                    }}
                >
                    Closable
        </Tag>
                <WhiteSpace />
                <Tag small>Small and Readonly</Tag>
            </View>
        );
    }
}