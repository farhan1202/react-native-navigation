import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import style from './style/style'

export default class home2 extends Component {
    render() {
        return (


            <View style={style.container}>
                <Text style={style.textView} > {this.props.route.params.title} </Text>
                <Button
                    style={style.buttons}
                    title="Go to top tab screen"
                    onPress={() => {
                        this.props.navigation.navigate('Top Tab', { title: "top top" })
                    }}
                />
                <Button
                    style={style.buttons}
                    title="Go to bottom tab screen"
                    onPress={() => {
                        this.props.navigation.navigate('Bottom Tab', { title: "top top" })
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
