import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import style from '../style/style'
export default class tab1 extends Component {
    render() {
        console.log(this.props.route);
        
        return (
            <View style={style.container}>
                <Text style={style.textView} > {this.props.route.params.nama}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
