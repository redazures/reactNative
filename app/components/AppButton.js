import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import Colors from '../config/Colors'
import AppText from '../components/AppText'

const AppButton = ({ title, onPress, color='primary' }) => {
    return(
        <TouchableOpacity
            style={[ styles.button, {backgroundColor:Colors[color]} ]}
            onPress={ onPress }
        >
            <AppText style={styles.text}>
                { title }
            </AppText>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    button:{
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        width:'100%',
        marginVertical:10,
    },
    text:{
       color:Colors.white,
       fontSize:20,
       textTransform:'uppercase',
       fontWeight:'bold',
    }
})