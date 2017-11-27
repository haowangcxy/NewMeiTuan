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
    Alert,
    Image
} from 'react-native';
import Swiper from 'react-native-swiper';
import Utils from '../../../Utils/Utils';

export default class SwiperView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount(){
    }

    render() {
        return (
        <View style={styles.containerView}>
            <Swiper style={styles.wrapper} height={Utils.screenW / 3}
                    dot={<View style={{backgroundColor: '#ffffff', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    activeDot={<View style={{backgroundColor: '#D43C33', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    paginationStyle={{
                        bottom: 0, left: null, right: 10
                    }}
                    loop
                    autoplay
                    removeClippedSubviews={false}
            >
                {/*{*/}
                {/*banner.map((v, i) => (*/}
                {/*<View style={styles.slide} key={i}>*/}
                {/*<Image resizeMode='stretch' style={styles.image} source={{uri: v.pic + '?param=500y200'}} />*/}
                {/*</View>*/}
                {/*))*/}
                {/*}*/}
                <View style={styles.slide}>
                    <Image resizeMode='stretch' style={styles.image} source={require('../../../imgs/Home/slider1.jpg')} />
                </View>
                <View style={styles.slide}>
                    <Image resizeMode='stretch' style={styles.image} source={require('../../../imgs/Home/slider2.jpg')} />
                </View>
                <View style={styles.slide}>
                    <Image resizeMode='stretch' style={styles.image} source={require('../../../imgs/Home/slider3.jpg')} />
                </View>
                <View style={styles.slide}>
                    <Image resizeMode='stretch' style={styles.image} source={require('../../../imgs/Home/slider4.jpg')} />
                </View>
            </Swiper>
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
    wrapper: {
    },
    slide: {
        width: Utils.screenW,
        height: Utils.screenW / 3,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        flex: 1,
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width: Utils.screenW,
        height: Utils.screenW / 3,
    }
});