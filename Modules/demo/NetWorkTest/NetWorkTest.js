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
    TouchableOpacity
} from 'react-native';

export default class NetWorkTest extends React.Component {

    static navigationOptions = {
        title : 'NetWorkTest'
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.containerView}>
                <TouchableOpacity onPress={() => {
                    this.getNetworkData()
                }}>
                    <Text style={{backgroundColor:'white', marginRight : 30}}>
                        get
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    // alert('post');
                    this.postNetworkData()
                }}>
                    <Text style={{backgroundColor:'white', marginLeft : 30}}>
                        post
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    getNetworkData = () => {
        // alert('get');
        fetch('http://10.110.1.156:3002/rnget?name=wanghao&height=1000', {
            method: 'GET',
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            // body: "key=fsd"
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // return responseJson.movies;
                const result = responseJson;
                alert(result.code + result.message + result.data);
            })
            .catch((error) => {
                console.error(error);
                alert('error:' + error);
            });
    }

    postNetworkData = () => {
        // alert('post');
        fetch('http://10.110.1.156:3002/rnpost', {
            method: 'POST',
            mode: "cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: 'name=wanghao&height=1000'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // return responseJson.movies;
                const result = responseJson;
                alert(result.code + result.message + result.data);
            })
            .catch((error) => {
                console.error(error);
                alert('error:' + error);
            });
    }
}

const styles = StyleSheet.create({
    containerView : {
        flex:1,
        flexDirection : 'row',
        alignItems : "center",
        justifyContent : "center"
    },
});
