/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import CarouselView from './Caroucel/CarouselView';
import { ENTRIES1, ENTRIES2 } from './Caroucel/entries';
import FlatListV from './FlatListV/FlatListView';

export default class HomeView extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollableTabView
                style={{flex: 1, backgroundColor: '#FBFCFE'}}
                tabBarBackgroundColor="#ffffff"
                tabBarActiveTextColor="#D43C33"
                tabBarInactiveTextColor="#000000"
                tabBarUnderlineStyle={{backgroundColor: '#D43C33'}}
                renderTabBar={() => <DefaultTabBar />}
            >
                <FlatListV  key={0} tabLabel='Tableview' navigation={this.props.navigation}  dataList = {[
                {
                    type: 'playlist',
                    title: '推荐音乐',
                    data: [{title: '听完这些歌我觉得自己变成了祥林嫂', image: require('../../imgs/Home/slider4.jpg')},
                    {title: '有一种情歌的语言，有一种英文的自传。', image: require('../../imgs/Home/19145795974784949.jpg')},
                    {title: '有一种情歌的语言，有一种英文的自传。', image: require('../../imgs/Home/528865105234307.jpg')},
                    {title: '有一种情歌的语言，有一种英文的自传。', image: require('../../imgs/Home/528865105234307.jpg')},
                    {title: '有一种情歌的语言，有一种英文的自传。', image: require('../../imgs/Home/19145795974784949.jpg')},
                    {title: '听完这些歌我觉得自己变成了祥林嫂', image: require('../../imgs/Home/slider4.jpg')},
                    ]
                },
                {
                    type: 'special',
                    title: '独家放送',
                    data: [{title: '软萌小姐姐原创曲弹唱，全程微笑甜到飞起！', image: require('../../imgs/Home/slider4.jpg'), width: 0.49},
                    {title: '清新小调 喜欢这种刚刚好', image: require('../../imgs/Home/19145795974784949.jpg'), width: 0.49},
                    {title: '⚡️17年8月新热电音推送。', image: require('../../imgs/Home/528865105234307.jpg'), width: 1},
                    ]
                },
                {
                    type: 'newsongs',
                    title: '最新音乐',
                    data: [{title: '忘不掉', subTitle: '孙俪', image: require('../../imgs/Home/slider4.jpg')},
                    {title: '初梦', subTitle: '初音ミク  /  MusikM', image: require('../../imgs/Home/19074327718953837.jpg')},
                    {title: '初梦', subTitle: '初音ミク  /  MusikM', image: require('../../imgs/Home/109951162819638071.jpg')},
                    ]
                },
                {
                    type: 'mv',
                    title: '推荐MV',
                    data: [{title: '给大家的歌', subTitle: '鹿先森乐队', image: require('../../imgs/Home/slider4.jpg'), width: 0.49},
                    {title: '英雄归来', subTitle: 'PG One', image: require('../../imgs/Home/19074327718953837.jpg'), width: 0.49},
                    {title: '清白之年', subTitle: '朴树', image: require('../../imgs/Home/109951162819638071.jpg'), width: 0.49},
                    {title: 'Papillon', subTitle: '王嘉尔 - (Jackson of GOT7)', image: require('../../imgs/Home/109951163013685863.jpg'), width: 0.49},
                    ]
                },
                ]}>

                </FlatListV>
                <CarouselView key={1} tabLabel='CarouselView' navigation={this.props.navigation} imageData={ENTRIES2}/>
            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    containerView : {
        alignItems : "center",
        justifyContent : "flex-start"
    },
    testStyle : {
        alignItems : "center",
        justifyContent : "center"
    }
});

// module.export = HomeView;