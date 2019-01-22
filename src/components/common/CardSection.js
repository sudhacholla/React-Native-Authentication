import React from 'react';
import {View} from 'react-native';

const CardSection = (props) =>{
    return(
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
}

const styles = {
    containerStyle: {
        borderColor: '#ddd',
        borderBottonWidth: 1,
        padding :5,
        backgroundColor: "#fyy",
        flexDirection:"row",
        justifyContent:"flex-start",
        position:'relative',
    }
}
export {CardSection}