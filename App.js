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
    Alert
} from 'react-native';
// import TabNavigator from 'react-native-tab-navigator';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
// import Icon from 'react-native-vector-icons/Ionicons';
import HomeView from './Modules/Home/HomeView';
import AccountView from './Modules/Account/AccountView';
import Demo from './Modules/demo/Demo';
import Thrity from './Modules/thirty/Thirty';
import AccountChildView from './Modules/Account/AccountChildView';
import DatabaseTest from './Modules/demo/DatabaseTest/DatabaseTest';
import NetWorkTest from './Modules/demo/NetWorkTest/NetWorkTest';
import FlatlistTest from './Modules/demo/FlatlistTest/FlatlistTest';

// var homeView = require("./Modules/Home/HomeView");
// var accountView = require("./Modules/Account/AccountView");

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const tab = TabNavigator({
        Home: {
            screen: HomeView,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '首页',
                title:'首页',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image source={{uri : "tabbar_home"}} style={[{tintColor: tintColor}, {width:25, height:25}]}/>
//     <Icon name="tabbar_home" size={30} color={tintColor} />
                //
                ),
                selectedIcon:({focused, tintColor }) => (
                    <Image source={{uri : "tabbar_home_highlighted"}} style={[{tintColor: tintColor}, {width:30, height:30}]}/>
                )
            })
        },
        Demo: {
            screen: Demo,
            navigationOptions: {
                tabBarLabel: 'Demo',
                title:'demo',
                tabBarIcon: ({ focused, tintColor }) => (
                    //     <Icon name="tabbar_home" size={30} color={tintColor} />
                    <Image source={{uri : "tabbar_message_center"}} style={[{tintColor: tintColor},{width:25, height:25}]}/>
                ),
                selectedIcon:({focused, tintColor}) => (
                    <Image source={{uri : "tabbar_profile_highlighted"}} style={[{tintColor: tintColor},{width:30, height:30}]}/>
                )
            }
        },
        Thirty: {
            screen: Thrity,
            navigationOptions: {
                tabBarLabel: 'Thrity',
                title:'Thirty',
                tabBarIcon: ({ focused, tintColor }) => (
                    //     <Icon name="tabbar_home" size={30} color={tintColor} />
                    <Image source={{uri : "tabbar_discover"}} style={[{tintColor: tintColor},{width:25, height:25}]}/>
                ),
                selectedIcon:({focused, tintColor}) => (
                    <Image source={{uri : "tabbar_profile_highlighted"}} style={[{tintColor: tintColor},{width:30, height:30}]}/>
                )
            }
        },
        Account: {
            screen: AccountView,
            navigationOptions: {
                tabBarLabel: '我的',
                header:null,
                tabBarIcon: ({ focused, tintColor }) => (
                //     <Icon name="tabbar_home" size={30} color={tintColor} />
                    <Image source={{uri : "tabbar_profile"}} style={[{tintColor: tintColor},{width:25, height:25}]}/>
                ),
                selectedIcon:({focused, tintColor}) => (
                    <Image source={{uri : "tabbar_profile_highlighted"}} style={[{tintColor: tintColor},{width:30, height:30}]}/>
                )
            }
        }
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        initialRouteName: 'Home',
        lazy: true,
        tabBarOptions: {
            activeTintColor: 'orange',
            inactiveTintColor: '#cccccc',
            style: {
                backgroundColor: '#ffffff'
            }
        }
    })

const Navigator = StackNavigator({
        Tab : {screen : tab},
        Home : {screen : HomeView},
        Account : {screen : AccountView},
        Demo : {screen : Demo},
        Thirty : {screen : Thrity},
    AccountChildView: {screen : AccountChildView},
    FlatlistTest : {screen : FlatlistTest},
    NetWorkTest : {screen : NetWorkTest},
    DatabaseTest : {screen : DatabaseTest}
    },
    {
        navigationOptions: {
            headerBackTitle: '返回',
            headerTintColor: '#333333',
            showIcon: true
        }
    }
)

const ModalNavigator = StackNavigator(
    {
        MainNavigator: { screen: Navigator },
        // ModalMenu: { screen: ModalRoute},
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
)

export default class App extends Component<{}> {

    constructor(props) {
      super(props);
      this.state = {
          selectedTab : 'account'
      };
    }


  render() {
    return (
        <View style={{flex:1}}>
            <ModalNavigator/>
        </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
