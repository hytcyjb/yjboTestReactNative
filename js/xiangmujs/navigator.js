// 引入依赖
import React from 'react';
import {StackNavigator} from 'react-navigation';
import App from "./login";
import Joklist from "./joklist";
import JokDetail from "./jokDetail";


//界面导航
export default NavHome = StackNavigator({
        Home: {
            screen: App,
        },
        Joklist: {//显示笑话列表
            screen: Joklist,
        },
        JokDetail:{//显示笑话详情
            screen: JokDetail,
        }

    },
    {//设置起始显示的页面
        initialRouteName: 'Home',
    });

