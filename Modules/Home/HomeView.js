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
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import CarouselView from './Caroucel/CarouselView';
import { ENTRIES1, ENTRIES2 } from './Caroucel/entries';
import FlatListV from './FlatList/FlatList';

export default class HomeView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollableTabView
                style={{flex: 1, backgroundColor: '#FBFCFE'}}
                tabBarBackgroundColor="#ffffff"
                tabBarActiveTextColor="#D43C33"
                tabBarInactiveTextColor="#000000"
                tabBarUnderlineStyle={{backgroundColor: '#D43C33'}}
                renderTabBar={() => <DefaultTabBar />}
            >
                <FlatListV  key={0} tabLabel='Tableview' navigation={this.props.navigation}>

                </FlatListV>
                <CarouselView key={1} tabLabel='CarouselView' navigation={this.props.navigation} imageData={ENTRIES2}/>
            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    containerView : {
        alignItems : "center",
        justifyContent : "flex-start"
    },
    testStyle : {
        alignItems : "center",
        justifyContent : "center"
    }
});

// module.export = HomeView;