import {
  Button,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {FONTS, images, SIZES} from '../../conts';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../conts/colors';
import {transparent} from 'react-native-paper/lib/typescript/styles/colors';

const OnBoardScreen = ({navigation}) => {
  function renderHeader() {
    return (
      <View style={styles.root}>
        <ImageBackground
          source={images.BGImg}
          style={styles.BGImage}
          resizeMode="cover">
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={[COLORS.transparent, COLORS.black]}
            style={{
              height: 200,
              justifyContent: 'flex-end',
              paddingHorizontal: SIZES.padding,
              marginTop: 'auto',
            }}>
            <Text style={styles.title}>Cooking a Delicious Food Easily</Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
  function renderDetail() {
    return (
      <View style={styles.descContainer}>
        <Text style={styles.description}>
          Discover more than 1200 food recipes in your hands and cooking it easily!
        </Text>
        <View >
          <TouchableOpacity 
          onPress={() => navigation.navigate("Login")}
          style={styles.btn} activeOpacity={0.8}>
            <Text style={styles.btnFont}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}
          onPress={() => navigation.navigate("Register")}
            style={[
              styles.btn,
              {backgroundColor: COLORS.transparent, borderColor: COLORS.darkBlue},
            ]}>
            <Text style={[styles.btnFont, {color: COLORS.white}]}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <View style={{backgroundColor: COLORS.black, height: '100%'}}>
      <StatusBar barStyle="light-content" />
      {renderHeader()}
      {renderDetail()}
    </View>
  );
};

export default OnBoardScreen;

const styles = StyleSheet.create({
  root: {
    height: SIZES.height > 700 ? '65%' : '60%',
  },
  BGImage: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    width: '80%',
    color: COLORS.white,
    ...FONTS.largeTitle,
    lineHeight: 50,
    fontWeight: '600',
  },
  descContainer: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
  },
  description: {
    color: COLORS.grey,
    ...FONTS.body3,
    marginTop: SIZES.radius,
    width: '70%',
    marginBottom: 10,
  },
  btn: {
    padding: 15,
    backgroundColor: COLORS.blue,
    borderRadius: 13,
    alignItems: 'center',
    marginVertical: 7,
    borderWidth: 1,
    // width: '90%',
  },
  btnFont: {
    fontSize: SIZES.body2,
    fontWeight: 'bold',
    color: COLORS.white
  },
});
