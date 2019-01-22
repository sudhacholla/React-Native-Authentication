import React from 'react'
import { Text, View } from 'react-native'

const Header = (props) => {
    const { textStyle, viewStyle } = styles
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.text}</Text>
        </View>

    )
}

const styles = {
    viewStyle: {
        backgroundColor: 'violet'
    },
    textStyle: {
        fontSize: 20,
        color:'black'
    }
}
export { Header }