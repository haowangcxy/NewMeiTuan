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
import RefreshListView, {RefreshState} from 'react-native-refresh-list-view'


export default class FlatlistTest extends React.Component {

    static navigationOptions = {
        headerTitleStyle:{alignSelf : 'center'},
        title : 'FlatlistTest',
        headerRight:(<View/>)
    }

    constructor(props) {
        super(props);
        this.state = {
            data : [{title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'},{title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'},{title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'},{title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'},{title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'},{title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'},{title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'},{title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'},{title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'},{title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'},{title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'},{title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'},{title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'}],
            refreshState : RefreshState.Idle,
        };
    }

    keyExtractor = (item: any, index: number) => {
        return index
    }

    render() {
        return (
            <View style={styles.containerView}>
                <RefreshListView
                    data={this.state.data}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderCell}
                    refreshState={this.state.refreshState}
                    onHeaderRefresh={this.onHeaderRefresh}
                    onFooterRefresh={this.onFooterRefresh}

                    // 可选
                    footerRefreshingText= '玩命加载中 >.<'
                    footerFailureText = '我擦嘞，居然失败了 =.=!'
                    footerNoMoreDataText= '-我是有底线的-'
                />
            </View>
        );
    }

    onHeaderRefresh = () => {
        console.log('1111111');
        this.setState({
            refreshState:RefreshState.HeaderRefreshing
        });
        setTimeout(() => {
            console.log('2222222');
            this.setState({
                refreshState:RefreshState.Idle,
                data : [{title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'},{title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'},{title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'},{title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'},{title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'},{title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'},{title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'},{title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'},{title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'},{title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'},{title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'},{title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'},{title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'}, {title : '上拉刷新，下拉加载'}],

        })
        }, 2000);
    }

    renderCell = (item) => (
        <View>
            <Text>
                {item.item.title}
            </Text>
        </View>
    )

    onFooterRefresh = () => {
        this.setState({refreshState: RefreshState.FooterRefreshing})

        // 模拟网络请求
        setTimeout(() => {
            // 模拟网络加载失败的情况
            if (Math.random() < 0.2) {
                this.setState({refreshState: RefreshState.Failure})
                return
            }

            //获取测试数据
            // let dataList = this.getTestList(false)

            this.setState({
                dataList: this.state.data.push({title : '1上拉刷新，下拉加载'}),
                refreshState: this.state.data.length > 50 ? RefreshState.NoMoreData : RefreshState.Idle,
            })
        }, 2000)
    }
}

const styles = StyleSheet.create({
    containerView : {
        flex:1,
        // alignItems : "center",
        // justifyContent : 'flex-start'
    },
    testStyle : {
        alignItems : "center",
        justifyContent : "center"
    }
});
