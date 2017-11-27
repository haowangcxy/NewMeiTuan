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

export default class Thirty extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.containerView}>
                <Text style={styles.testStyle}>
                    Thirty
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