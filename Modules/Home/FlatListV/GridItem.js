/**
 * Created by 叶子 on 2017/9/3.
 */
import React, { PureComponent } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Utils from '../../../Utils/Utils';
import Icon from 'react-native-vector-icons/Ionicons';


class GridItem extends PureComponent {
    render() {
        const { width = 0.325, height = 0.325, title, subTitle, image, picUrl, item } = this.props;
        const styles = StyleSheet.create({
            container: {
                marginTop: 10,
                width: Utils.screenW * width
            },
            imgContainer: {
                width: Utils.screenW * width,
                height: Utils.screenW * height,
                backgroundColor: 'transparent'
            },
            img: {
                width: '100%',
                height: '100%',
                position: 'absolute',
                zIndex: 1,
            },
            tipText: {
                position: 'absolute',
                top: 2,
                right: 5,
                zIndex: 10,
                flexDirection: 'row',
                alignItems: 'center'
            },
            textContainer: {
                width: Utils.screenW * width,
                padding: 5,
            }
        });
        const calculateCount = count => count > 10000 && ((count / 10000).toFixed(0) + '万') || count;
        return (
            <TouchableOpacity style={[styles.container, this.props.style]} onPress={this.props.onPress}>
                <View style={styles.imgContainer}>
                    {
                        image && <Image source={image} style={styles.img} />
                    }
                    {
                        picUrl && <Image source={{uri: picUrl}} style={styles.img} />
                    }
                    {
                        item.playCount && (
                            <View style={styles.tipText} >
                                <Icon name="ios-volume-down-outline" color="#ffffff" size={16} />
                                <Text style={{color: '#ffffff',fontSize: 10}}>
                                    {calculateCount(item.playCount)}
                                </Text>
                            </View>
                        )
                    }
                </View>
                <View style={styles.textContainer}>
                    {/*小标题存在则限制显示一行*/}
                    {/*"[日系]一开始就被前奏秒杀系列2"*/}
                    {/*<Normal title={title} numberOfLines={subTitle ? 1 : 2} />*/}
                    <Text numberOfLines={subTitle ? 1 : 2} style={{fontSize: 12,
                        color: Utils.colors.black}}>
                        {title}
                    </Text>
                    {subTitle && (<Text numberOfLines={1} style={{fontSize: 11}}>
                        {subTitle}
                    </Text>)}
                </View>
            </TouchableOpacity>


        )
    }
}


export default GridItem;
