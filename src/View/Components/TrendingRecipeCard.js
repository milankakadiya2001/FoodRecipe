import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {icons, SIZES} from '../../conts';
import COLORS from '../../conts/colors';
import {BlurView} from '@react-native-community/blur';

const RecipeCardDetail = ({recipeItem}) => {
  const [bookmarkDone, SetBookmarkDone] = useState(false);

  const BookmarkBtn = () => {
    SetBookmarkDone(!bookmarkDone);
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.detail}>
        <Text style={styles.detailName}>{recipeItem.name}</Text>
        <TouchableOpacity onPress={() => BookmarkBtn()} >
          <Image source={bookmarkDone ? icons.bookmark : icons.wbookmark} style={styles.bookmark} />
        </TouchableOpacity>
      </View>
      <Text style={{color: COLORS.grey1}}>
        {recipeItem.duration} | {recipeItem.serving}
      </Text>
    </View>
  );
};

const RecipeCardInfo = ({recipeItem}) => {
  if (Platform.OS == 'ios') {
    return (
      <BlurView blurType="light" style={styles.cardInfo}>
        <RecipeCardDetail recipeItem={recipeItem} />
      </BlurView>
    );
  } else {
    <View style={{...styles.cardInfo, backgroundColor: COLORS.grey2}}>
      <RecipeCardDetail recipeItem={recipeItem} />
    </View>;
  }
};

const TrendingRecipeCard = ({recipeItem, onPress, containerStyle}) => {
  return (
    <TouchableOpacity
      style={[styles.root, {...containerStyle}]}
      onPress={onPress}>
      <Image
        style={styles.bgFoodImg}
        source={recipeItem.image}
        resizeMode="cover"
      />
      <View style={styles.category}>
        <Text style={styles.categoryText}>{recipeItem.category}</Text>
      </View>
      <RecipeCardInfo recipeItem={recipeItem} />
    </TouchableOpacity>
  );
};

export default TrendingRecipeCard;

const styles = StyleSheet.create({
  root: {
    height: 350,
    width: 250,
    marginRight: SIZES.padding3,
    borderRadius: SIZES.radius,
    marginTop: SIZES.radius,
  },
  bgFoodImg: {
    height: 350,
    width: 250,
    borderRadius: SIZES.radius,
  },
  category: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#696969',
    paddingVertical: 5,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
  },
  categoryText: {
    fontSize: SIZES.body4,
    color: COLORS.white,
  },
  cardInfo: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    height: 100,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
  },
  detail: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  detailName: {
    fontSize: SIZES.h3,
    fontWeight: 'bold',
    width: '70%',
  },
  bookmark: {
    height: 30,
    width: 30,
    tintColor: COLORS.darkBlue
  },
});
