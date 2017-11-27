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

export default class AccountView extends React.Component {

    static defaultProps = {

    }

    constructor(props) {
        super(props);
        this.state = {
            isBottom : false,
            title : ""
        };
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.callBack}>
                <View style={{width:Dimensions.get('window').width / 4, height:100, alignItems:'center'}}>
                    <Image style={{width:30, height:30, marginTop:10}} source={{uri:this.props.imageName}}/>
                    <Text style={{marginTop:10, color:'white'}}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    containerView : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
        height : 50,
        width : Dimensions.get("window").width
    },
    leftImageStyle : {
        width:20,
        height:20,
        marginLeft : 15
    },
    rightImageStyle : {
        width : 10,
        height : 15,
        marginRight : 15,
        // alignSelf : 'flex-start'
        justifyContent:"flex-end"
    },
    titleStyle : {
        marginLeft:10
    }
});