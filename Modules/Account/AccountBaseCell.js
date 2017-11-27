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
        callBackFuc1 : null,
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
            <TouchableOpacity onPress={this.onPressCell}>
                <View style={{width:Dimensions.get('window').width, alignItems:'center'}}>
                    <View style={styles.containerView} backgroundColor={'white'}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Image style={styles.leftImageStyle} source={{uri:this.props.imageName}}/>
                            <Text style={styles.titleStyle}>{this.props.title}</Text>
                        </View>

                        <Image style={styles.rightImageStyle} source={{uri:"account_inter"}}/>

                    </View>
                    {this.renderBottoMLine()}
                </View>
            </TouchableOpacity>
        );
    }

    onPressCell = () => {
        if (this.props.callBack)
            this.props.callBack(this.props.title);
    }

    renderBottoMLine(){
        if (this.props.isBottom === false) {
            return (
                <View style={{backgroundColor:'#dddddd', width:Dimensions.get('window').width - 30, height:1}}></View>
            )
        }
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