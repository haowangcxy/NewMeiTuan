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
    Image,
    TouchableOpacity,
    Dimensions,
    Alert
} from 'react-native';

export default class AccountChildView extends React.Component {

    componentWillMount() {
    }

    render() {
        return (
            <TouchableOpacity onPress={this.clickText.bind(this, 'fdsf')}>
            <View style={styles.containerView}>
                <Text>
                    account child page {this.props.navigation.state.params.info}
                </Text>
            </View>
            </TouchableOpacity>
        );
    }

    clickText(str){
    }

    componentDidMount() {
    }
    
    static navigationOptions = {
        title:'childPage'
    }
}



const styles = StyleSheet.create({
    containerView : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center",
    }
});