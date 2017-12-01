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
    View,
    Alert,
    FlatList,
    TouchableOpacity
} from 'react-native';
import DatabaseTest from './DatabaseTest/DatabaseTest';
import NetWorkTest from './NetWorkTest/NetWorkTest';
import FlatlistTest from './FlatlistTest/FlatlistTest';
import BottomLineV from '../../Utils/BottomLineView';

export default class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{'title': "FlatlistTest"}, {'title' : 'NetWorkTest'}, {'title' : 'DatabaseTest'}],
        }
    }
    componentWillMount() {
        // alert('componentWillMount')
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <View style={styles.containerView}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => index}
                    ListHeaderComponent= {null}
                    renderItem={this.renderItem}
                    ListFooterComponent={() => <Text
                        style={{textAlign: 'center', padding: 10, transform: [{scale: 0.857143}]}}>已加载完全部数据</Text>}
                >
                </FlatList>
            </View>
        );
    }

    renderItem = (item, index) => (
        <TouchableOpacity onPress={
            this.pushToDetailV.bind(this, item.item.title)
        }
        >
            <View style={{height :50, justifyContent:'center', alignItems:'flex-start', backgroundColor:'white'}}>
                <View style={{height : 49, justifyContent:'center'}}>
                    <Text style={{fontSize : 16, marginLeft:15, color:'#333333'}}>
                        {item.item.title}
                    </Text>
                </View>

                <BottomLineV/>
            </View>
        </TouchableOpacity>
    )

    pushToDetailV = (title) => {
        if (title === 'FlatlistTest') {
            this.props.navigation.navigate('FlatlistTest');
        } else if (title === 'NetWorkTest') {
            this.props.navigation.navigate('NetWorkTest');
        } else if (title === 'DatabaseTest') {
            this.props.navigation.navigate('DatabaseTest')
        }
    }
}

const styles = StyleSheet.create({
    containerView : {
        flex:1,
        // alignItems : "center",
        // justifyContent : "center"
    },
    testStyle : {
        alignItems : "center",
        justifyContent : "center"
    }
});

// module.export = HomeView;