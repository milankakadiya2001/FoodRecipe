import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import COLORS from '../../conts/colors';
import {FONTS, SIZES} from '../../conts';

const CategorieCard = ({categoryItem, onPress}) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress} activeOpacity={0.6}
    >
      <Image source={categoryItem.image} style={styles.foodImg} />
      <View style={styles.foodDetail} >
        <Text style={styles.foodName} >{categoryItem.name}</Text>
        <Text style={styles.foodTime} >{categoryItem.duration} | {categoryItem.serving}</Text>  
      </View>
    </TouchableOpacity>
  );
};

export default CategorieCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.grey2,
    marginTop: 10,
    padding: 10,
    borderRadius: SIZES.radius,
    // marginHorizontal: 15
  },
  foodImg: {
    height: 100,
    width: 100,
    marginRight: 10,
    borderRadius: SIZES.radius
  },
  foodDetail: {
      width: '70%',
      paddingHorizontal: 10
  },
  foodName :{
      fontSize: SIZES.h3,
      flex: 1,
      fontWeight: 'bold'
  },
  foodTime: {
      color: COLORS.grey
  }
});
