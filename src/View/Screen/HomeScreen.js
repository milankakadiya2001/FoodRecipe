import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React from 'react';

import dummyData from '../../conts/dummyData.js';
import COLORS from '../../conts/colors';
import CategorieCard from '../Components/CategorieCard';
import {FONTS, icons, images, SIZES} from '../../conts';
import TrendingRecipeCard from '../Components/TrendingRecipeCard';

const HomeScreen = ({navigation}) => {
  function renderHeader() {
    return (
      <View style={styles.header}>
        <View style={{flex: 1}}>
          <Text style={styles.user}>Hello User!</Text>
          <Text style={styles.desc}>what you want to cook today?</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Image style={{height: 65, width: 65}} source={images.user} />
        </TouchableOpacity>
      </View>
    );
  }

  function renderSearchBar() {
    return (
      <View style={styles.searchContainer}>
        <Image source={icons.search} style={styles.searchIcon} />
        <TextInput placeholder="search recipe" style={styles.searchInput} />
      </View>
    );
  }
  function renderSeeRecipeCard() {
    return (
      <View style={styles.SeeRecipeContainer}>
        <Image source={images.seeFood} style={styles.seeFood} />
        <View style={styles.SeeRecipeDesc}>
          <Text style={styles.SeeTitle}>
            You have 12 recipes that you haven't tried yet
          </Text>
          <TouchableOpacity style={{marginTop: 10}}>
            <Text style={styles.SeeOptions}>See Recipe</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderTrendingRecipe() {
    return (
      <View style={{marginTop: SIZES.padding3}}>
        <Text style={styles.title}>Trending Recipe</Text>
        <FlatList
          data={dummyData.trendingRecipes}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TrendingRecipeCard
              containerStyle={{marginLeft: index == 3 ? SIZES.padding : 0 }}
               recipeItem={item}
               onPress={() => navigation.navigate('Recipe', {recipe : item})}
              />
            );
          }}
        />
      </View>
    );
  }

  function renderCategoryHeader() {
    return(
      <View style={styles.categoryContainer} >
        <Text style={styles.title} >Category</Text>
        <TouchableOpacity activeOpacity={0.7} ><Text style={{color: COLORS.grey}} >View All</Text></TouchableOpacity>
        
      </View>
    )
  }

  return (
    <SafeAreaView styles={styles.root}>
      <View style={{marginHorizontal: 15}}>
        <FlatList
          data={dummyData.categories}
          keyExtractor={item => `${item.id}`}
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View>
              {renderHeader()}
              {renderSearchBar()}
              {renderSeeRecipeCard()}
              {renderTrendingRecipe()}
              {renderCategoryHeader()}
            </View>
          }
          renderItem={({item}) => {
            return (
              <View>
                <CategorieCard
                  categoryItem={item}
                  onPress={() => navigation.navigate('Recipe')}
                />
              </View>
            );
          }}
          ListFooterComponent={<View></View>}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: SIZES.padding,
    alignItems: 'center',
    height: 80,
  },
  user: {
    fontSize: SIZES.h2,
    fontWeight: 'bold',
    color: COLORS.darkBlue,
  },
  desc: {
    color: COLORS.grey,
    fontSize: SIZES.body3,
  },
  searchContainer: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: COLORS.grey2,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchIcon: {
    height: 23,
    width: 23,
    tintColor: '#787878',
  },
  searchInput: {
    fontSize: SIZES.h4,
    marginLeft: SIZES.radius,
  },
  SeeRecipeContainer: {
    flexDirection: 'row',
    height: 90,
    backgroundColor: COLORS.darkBlue,
    // marginVertical: SIZES.radius,
    borderRadius: SIZES.radius,
    marginTop: SIZES.padding2,
    alignItems: 'center',
  },
  seeFood: {
    height: 70,
    width: 70,
    marginHorizontal: SIZES.padding,
  },
  SeeRecipeDesc: {
    width: '70%',
    paddingHorizontal: 10,
  },
  SeeTitle: {
    fontSize: SIZES.body3,
    color: COLORS.white,
  },
  SeeOptions: {
    textDecorationLine: 'underline',
    color: COLORS.black,
    ...FONTS.body4,
  },
  title: {
    fontSize: SIZES.h2,
    fontWeight: 'bold',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZES.padding3,

  }
});
