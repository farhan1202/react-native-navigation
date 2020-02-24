import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import style from './style/style'

export default class home extends Component {
    render() {
        return (
            <View style={style.container}>
                <View>
                    <Text style={style.textView} > Ini Home </Text>

                    <Button
                        title="Go to another screen"
                        onPress={() => {
                            this.props.navigation.navigate('Menu', { title: "Ganteng" })
                        }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
