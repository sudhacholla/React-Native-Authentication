import React from 'react';
import { Text, TouchableOpacity } from 'react-native'

const Button = ({onPress,buttonText}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>{buttonText}</Text>
        </TouchableOpacity>
    )
}
const styles = {
    textStyle:{
        alignSelf:'center',
        color:'#007aff',
        fontWeight:'600',
        fontSize:16,
        paddingTop:10,
        paddingBottom:10
    },
    buttonStyle: {
        flex:0,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
}

export {Button}