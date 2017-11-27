/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Alert,
    FlatList
} from 'react-native';
import Swiper from './SwiperView';
import Utils from '../../../Utils/Utils';
import BottomLineV from '../../../Utils/BottomLineView';
import ListContainer from './ListContainer';

export default class FlatListView extends PureComponent {

    static defaultProps = {
        dataList : [],
        refreshing : true,
    }

    render() {
        return (
            <View style={styles.containerView}>
                <View style={{flex:1}}>
                    <FlatList
                        data={this.props.dataList}
                        // refreshing={this.props.refreshing}
                        // onRefresh={this.requestData}
                        keyExtractor={(item, index) => index}
                        ListHeaderComponent={this.renderHeader}
                        renderItem={this.renderItem}
                        ListFooterComponent={() => <Text style={{textAlign: 'center', padding: 10, transform: [{scale: 0.857143}]}}>已加载完全部数据</Text>}
                    />
                </View>
            </View>
        );
    }

    componentDidMount() {
        // alert(this.props.dataList);
        // console.log(this.props.dataList);
    }

    renderItem = (item, index) => (
        <ListContainer title={item.item.title} dataList={item.item.data} navigation={this.props.navigation} type={item.item.type}/>
)

    renderHeader = () => (
        <View>
            <Swiper/>
        </View>
        )


}

const styles = StyleSheet.create({
    containerView : {
        // height : Utils.screenW / 3,
        flex : 1,
        alignItems : "center",
        justifyContent : "flex-start"
    },
});

