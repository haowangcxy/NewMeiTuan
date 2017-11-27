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
    Alert
} from 'react-native';

export default class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount() {
        alert('componentWillMount')
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <View style={styles.containerView}>
                <Text style={styles.testStyle}>
                    Demo
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerView : {
        flex:1,
        alignItems : "center",
        justifyContent : "center"
    },
    testStyle : {
        alignItems : "center",
        justifyContent : "center"
    }
});

// module.export = HomeView;