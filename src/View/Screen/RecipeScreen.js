import {
  Animated,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import COLORS from '../../conts/colors';
import {FONTS, icons, SIZES} from '../../conts';
import {BlurView} from '@react-native-community/blur';
import Viewers from '../Components/Viewers';

const HEADER_HIGHT = 350;

function RecipeCardDetails({selectedRecipe}) {
  return (
    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
      <View style={{width: 40, height: 40, marginLeft: 20}}>
        <Image
          source={selectedRecipe?.author?.profilePic}
          style={{width: 40, height: 40, borderRadius: SIZES.radius}}
        />
      </View>
      <View style={{flex: 1, marginHorizontal: 20}}>
        <Text style={{color: COLORS.black, fontSize: SIZES.body4}}>
          Recipe by:
        </Text>
        <Text style={{color: COLORS.white, ...FONTS.h3, fontWeight: 'bold'}}>
          {selectedRecipe?.author?.name}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          borderRadius: SIZES.radius,
          borderWidth: 1,
          marginRight: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={icons.rightArrow} style={{width: 15, height: 15}} />
      </TouchableOpacity>
    </View>
  );
}

function RecipeCreateCardInfo({selectedRecipe}) {
  if (Platform.OS == 'ios') {
    return (
      <BlurView style={{flex: 1, borderRadius: SIZES.radius}} blurType="light">
        <RecipeCardDetails selectedRecipe={selectedRecipe} />
      </BlurView>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.grey2,
        }}>
        <RecipeCardDetails selectedRecipe={selectedRecipe} />
      </View>
    );
  }
}

const RecipeScreen = ({navigation, route}) => {
  const [selectedRecipe, SetSelectedRecipe] = useState(null);

  const [bookmarkDone, SetBookmarkDone] = useState(false);

  const BookmarkBtn = () => {
    SetBookmarkDone(!bookmarkDone);
  };

  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let {recipe} = route.params;
    SetSelectedRecipe(recipe);
  }, []);

  function renderTopHeader() {
    return (
      <View style={styles.headerContainer}>
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: COLORS.black,
            opacity: scrollY.interpolate({
              inputRange: [HEADER_HIGHT - 100, HEADER_HIGHT - 70],
              outputRange: [0, 1],
            }),
          }}
        />
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: 10,
            opacity: scrollY.interpolate({
              inputRange: [HEADER_HIGHT - 100, HEADER_HIGHT - 50],
              outputRange: [0, 1],
            }),
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [HEADER_HIGHT - 100, HEADER_HIGHT - 50],
                  outputRange: [50, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <Text style={{color: COLORS.grey, ...FONTS.body4}}>Recipe by:</Text>
          <Text style={{color: COLORS.white, ...FONTS.h3, fontWeight: 'bold'}}>
            {selectedRecipe?.author?.name}
          </Text>
        </Animated.View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}>
          <Image
            source={icons.back}
            style={{width: 15, height: 15, tintColor: COLORS.grey}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => BookmarkBtn()}
          style={styles.bookmarkBtn}>
          <Image
            source={bookmarkDone ? icons.bookmark : icons.wbookmark}
            style={{width: 35, height: 35, tintColor: COLORS.darkBlue}}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderRecipeHeader() {
    return (
      <View
        style={{
          alignItems: 'center',
          overflow: 'hidden',
          marginTop: -1000,
          paddingTop: 1000,
        }}>
        <Animated.Image
          source={selectedRecipe?.image}
          style={{
            width: '150%',
            height: HEADER_HIGHT,

            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-HEADER_HIGHT, 0, HEADER_HIGHT],
                  outputRange: [-HEADER_HIGHT / 2, 0, HEADER_HIGHT * 0.75],
                }),
              },
              {
                scale: scrollY.interpolate({
                  inputRange: [-HEADER_HIGHT, 0, HEADER_HIGHT],
                  outputRange: [2, 1, 0.75],
                }),
              },
            ],
          }}
          resizeMode="cover"
        />
        <Animated.View
          style={{
            position: 'absolute',
            left: 30,
            bottom: 15,
            right: 30,
            height: 80,
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, 170, 300],
                  outputRange: [0, 0, 150],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <RecipeCreateCardInfo selectedRecipe={selectedRecipe} />
        </Animated.View>
      </View>
    );
  }

  function renderRecipeInfo() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 130,
          width: SIZES.width,
          paddingHorizontal: 30,
          paddingTop: 20,
          alignItems: 'center',
        }}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{fontSize: SIZES.h2, fontWeight: 'bold'}}>
            {selectedRecipe?.name}
          </Text>
          <Text
            style={{fontSize: SIZES.body3, color: COLORS.grey, marginTop: 10}}>
            {selectedRecipe?.duration} | {selectedRecipe?.serving}
          </Text>
        </View>
        {/* <View style={{flex: 1, justifyContent: 'center'}} >
          <Viewers viewerList={selectedRecipe?.viewers} />
        </View> */}
      </View>
    );
  }

  function renderMainHeader() {
    return(
      <View style={styles.categoryContainer} >
        <Text style={styles.title} >Category</Text>
        <TouchableOpacity activeOpacity={0.7} ><Text style={{color: COLORS.grey}} >View All</Text></TouchableOpacity>
        
      </View>
    )
  }

  function renderRecipeDetailsHeader() {
    return(
      <View style={styles.categoryContainer} >
        <Text style={styles.title} >Recipe</Text>        
      </View>
    )
  }

  function renderRecipeDetails() {
    console.log(selectedRecipe?.details, "hureee")
    return(
      
      <View style={{marginHorizontal: 25, paddingHorizontal: 15, backgroundColor: COLORS.grey2, paddingVertical: 25, borderRadius: SIZES.radius, marginBottom: 15}} >
        <Text  style={{fontSize: SIZES.body3}}
         >{selectedRecipe?.details}</Text>
      </View>
    )
  }

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <Animated.FlatList
        data={selectedRecipe?.ingredients}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {renderRecipeHeader()}
            {renderRecipeInfo()}
            {renderMainHeader()}
          </View>
        }
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item}) => {
          console.log(item.description);
          return (
            <View style={styles.root}>
              <View style={styles.imgContainer}>
                <Image style={styles.icon} source={item.icon} />
              </View>
              <View style={{marginLeft: SIZES.padding2, flex: 1}}>
                <Text style={styles.desc}>{item.description}</Text>
              </View>
              <View
                style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                <Text style={{fontSize: SIZES.body3}}>{item.quantity}</Text>
              </View>
            </View>
          );
        }}
        ListFooterComponent={
          <View>
            {renderRecipeDetailsHeader()}
            {renderRecipeDetails()}

          </View>
        }
      />
      {renderTopHeader()}
    </View>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    marginVertical: 5,
    alignItems: 'center',
    width: '100%',
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.grey2,
    borderRadius: SIZES.radius,
    height: 50,
    width: 50,
  },
  icon: {
    height: 40,
    width: 40,
  },
  desc: {
    fontSize: SIZES.body3,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 90,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding3,
    paddingBottom: 10,
  },
  backBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 35,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.grey,
    backgroundColor: COLORS.transparent,
  },
  bookmarkBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 35,
    borderColor: COLORS.grey,
    backgroundColor: COLORS.transparent,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZES.padding3,
    paddingHorizontal: 25,
    marginBottom: 10
  },
  title: {
    fontSize: SIZES.h2,
    fontWeight: 'bold',
  },
});
