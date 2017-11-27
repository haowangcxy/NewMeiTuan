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
import Swiper from './SwiperView';
import Utils from '../../../Utils/Utils';

export default class FlatList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.containerView}>
                <Swiper/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerView : {
        height : Utils.screenW / 3,
        alignItems : "center",
        justifyContent : "flex-start"
    },
});

