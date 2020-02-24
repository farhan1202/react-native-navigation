import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import style from './style/style'
export default class setting extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text style={style.textView} > Ini Setting </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
