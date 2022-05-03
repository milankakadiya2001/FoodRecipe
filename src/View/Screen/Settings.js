import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../../conts/colors';
import {icons, images, SIZES} from '../../conts';

const Settings = () => {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.profileContainer}>
        <Image source={images.user} style={styles.imgUser} />
      </View>
      <Text style={styles.description} >Change Profile Photo</Text>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.grey2,
    width: 90,
    height: 90,
    borderRadius: SIZES.radius,
    marginTop: SIZES.padding2
  },
  imgUser: {
      width: 90,
      height: 90,
  },
  description: {
      fontWeight: '400',
      fontSize: SIZES.h5,
      marginVertical: 10
  }
});
