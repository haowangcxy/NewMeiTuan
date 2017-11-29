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
    TextInput,
    Alert,
    Button
} from 'react-native';

export default class DatabaseTest extends React.Component {

    static navigationOptions = {
        title : 'DatabaseTest'
    }

    constructor(props) {
        super(props);
        this.state = {
            addKey : '',
            addValue : '',
            searchKey : '',
            deleteKey : '',
        };
    }

    render() {
        return (
            <ScrollView style={styles.containerView}>
                <Text style={styles.testStyle}>
                    react-native-storage
                </Text>
                <View>
                    <View>
                        <Text>
                            增／改
                        </Text>
                        <TextInput placeholder={'key'} onChangeText={(text) => {
                            this.setState({addKey:text})
                        }}/>
                        <TextInput placeholder={'value'} onChangeText={(text) => {
                            this.setState({addValue : text});
                        }}/>
                        <Button title="提交" onPress={() => {
                            let strValue = this.state.addValue;
                            let strKey = this.state.addKey;
                            if (strKey !== null && strKey.length > 0 && strValue !== null && strValue.length > 0) {
                                storage._sava(strKey, strValue);
                                alert('save success');
                            } else {
                                alert('key 或 value 不能为空');
                            }
                        }}/>
                    </View>
                    <View>
                        <Text>
                            查找
                        </Text>
                        <TextInput placeholder={'key'} onChangeText={(text)=>{
                            this.setState({searchKey:text});
                        }}/>
                        <Button title="提交" onPress={() => {
                            let keyInput = this.state.searchKey;
                            if (keyInput !== null && keyInput.length > 0) {
                                storage._load(keyInput, function (ret) {
                                    alert(ret);
                                })
                            } else {
                                alert('key 或 value 不能为空');
                            }

                        }}/>
                    </View>
                    <View>
                        <Text>
                            删除
                        </Text>
                        <TextInput placeholder={'key'} onChangeText={(text) => {
                            this.setState({deleteKey:text});
                        }}/>
                        <Button title="提交" onPress={() => {
                            let deleteInput = this.state.deleteKey;
                            if (deleteInput !== null && deleteInput.length > 0) {
                                storage._remove(deleteInput);
                                alert('success delete');
                            } else {
                                alert('key 或 value 不能为空');
                            }
                        }}/>
                    </View>
                    <TextInput/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    containerView : {
        flex:1,
    },
    testStyle : {
        alignItems : "center",
        justifyContent : "center"
    }
});
