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
    ScrollView,
    Alert,
    Image
} from 'react-native';
import AccountBaseC from './AccountBaseCell';
import AccountHeaderCell from './AccountHeaderCell';
// import AccountChildView from './AccountChildView';

export default class AccountView extends React.Component {

    static defaultProps = {
        name:"dfsd"
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={{backgroundColor:'#49aee2', height:260}}>
                    <View style={{flexDirection:'row', justifyContent:'space-around' , alignItems:'center', height:130, marginTop:30}}>
                        <Image style={{height:40, width:40}} source={{uri:'account_notification'}}/>
                        <Image style={{height:80, width:80}} source={{uri:'account_notification'}}/>
                        <Image style={{height:40, width:40}} source={{uri:'account_notification'}}/>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <Text style={{opacity:0, paddingRight:10}}>未认证</Text>
                        <Text>dsfsd</Text>
                        <Text style={{paddingLeft:10}}>未认证</Text>
                    </View>
                    <View style={{flexDirection:'row', marginTop:10, backgroundColor:'#167eb3'}}>
                        <AccountHeaderCell title='最新动态' imageName="account_news" callBack ={this.clickCell.bind(this, '最新动态')}/>
                        <AccountHeaderCell title='我的问答' imageName="account_askandanswer" callBack={this.clickCell.bind(this, '我的问答')}/>
                        <AccountHeaderCell title='我的消息' imageName="account_message" callBack={this.clickCell.bind(this, '我的消息')}/>
                        <AccountHeaderCell title='我的活动' imageName="account_activity" callBack={this.clickCell.bind(this, '我的活动')}/>
                    </View>
                </View>
                <AccountBaseC title="我发起的" imageName="account_launch" callBack ={(data)=>{this.clickCell(data)}} isBottom={false}/>
                <AccountBaseC title="我参与的" imageName="account_join" callBack={(data)=>{this.clickCell(data)}} isBottom={false}/>
                <AccountBaseC title="我关注的" imageName="account_attention" callBack={(data)=>{this.clickCell(data)}} isBottom={false}/>
                <AccountBaseC title="我收藏的" imageName="account_collect" callBack={(data)=>{this.clickCell(data)}} isBottom={false}/>
                <AccountBaseC title="安全设置" imageName="account_securitysetting" callBack={(data)=>{this.clickCell(data)}} isBottom={false}/>
                <AccountBaseC title="设置" imageName="account_setting_setcontent" callBack={(data)=>{this.clickCell(data)}}/>
            </ScrollView>
        );
    }

    componentDidMount()
    {

    }

    clickCell(title){
        // alert(settingStr);
        this.props.navigation.navigate('AccountChildView', {'info':title});
    }
}



const styles = StyleSheet.create({
    containerView : {
        // flex:1,
        // flexDirection:"column"
        // alignItems : "center",
        // justifyContent : "center"
    },
    testStyle : {
        alignItems : "center",
        justifyContent : "center"
    }
});

// module.export = AccountView;