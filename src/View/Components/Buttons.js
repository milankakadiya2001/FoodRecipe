import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import COLORS from '../../conts/colors'

const Buttons = ({title, onPres = () => {},}) => {
  return (
    <TouchableOpacity 
    onPress={onPres}
    activeOpacity={0.5}
    style={{
        height: 55,
        width: '100%',
        backgroundColor: COLORS.blue,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}
     >
        <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 18}}  >{title}</Text>
    </TouchableOpacity>
  )
}

export default Buttons

const styles = StyleSheet.create({})
