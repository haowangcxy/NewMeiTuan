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
import Utils from './Utils'

export default class BottomLineView extends React.Component {

    render() {
        return (
            <View style={styles.containerView}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerView : {
        width: Utils.screenW - 30,
        height: 0.5,
        backgroundColor: Utils.colors.border
    }
});
