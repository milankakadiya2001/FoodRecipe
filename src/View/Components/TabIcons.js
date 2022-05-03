import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import COLORS from '../../conts/colors'

const TabIcons = ({focused, icon}) => {
  return (
    <View
    style={styles.iconContainer}
     >
      <Image 
      source={icon}
      resizeMode='contain'
      style={{
          width: 30,
          height: 30,
          tintColor: focused?  COLORS.blue : COLORS.black
        // tintColor: COLORS.red,
  
      }}      
      />
      {focused && 
        <View
            style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                height: 5,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                backgroundColor: COLORS.blue
            }} 
        />

      }
    </View>
  )
}

export default TabIcons

const styles = StyleSheet.create({
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: 50,
    }
})