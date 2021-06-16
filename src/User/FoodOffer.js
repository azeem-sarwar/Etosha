import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  FlatList,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Text, Button, Layout, StyleService} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';

import CartIcon from './../../assesst/Icon/Cart.svg';

import {COLORS, FONTS, fontsFamily, SIZES} from '../../constants';



const FoodOffers = [
  {
    id: '1',
    title: 'Italian Large Pizza',
    img: require('./../../assesst/foodOfferPizz.png'),
    percentage:"35"
  },
  {
    id: '2',
    title: 'Food Package Offer',
    img: require('./../../assesst/FoodOfferDish.png'),
    percentage:"23"
  },
];

export default function FoodOffer({navigation}) {
  
  
    const rendertags = ({item}) => {
    return (
      <Text appearance="hint" style={styles.tags}>
        {item.tag}
      </Text>
    );
  };
  
  const renderOfferCard =({item})=>{
      return(
        <TouchableOpacity style={[styles.FoodOfferCard, styles.shadow,{backgroundColor:'#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)}]}>
        <View style={styles.foodCardtextSection}>
          <Text style={styles.cardTextTitle}>{item.title}</Text>
          <View>
            <Text style={styles.cardTextdiscoutText}>{item.percentage} %</Text>
            <Text style={styles.discounttxt}>Discount</Text>
          </View>
        </View>
        <View style={styles.cardImageSection}>
          <Image
            source={item.img}
            style={styles.Imagecard}
          />
        </View>
      </TouchableOpacity>
      )
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header Sction */}
      <StatusBar />
      <Layout style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            marginHorizontal: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 0.5,
                borderColor: '#D7D9DB',
              }}
              onPress={() => navigation.openDrawer()}>
              <Icon name="chevron-back" size={25} color={COLORS.black} />
            </TouchableOpacity>
            <Text style={{marginLeft: 5, ...fontsFamily.Light}}>
              {' '}
              Food offer{' '}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => navigation.navigate('Search')}>
              <Icon name="search" size={25} color={COLORS.black} />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 10}}
      onPress={()=>navigation.navigate("Cart")}
            
            >
              <CartIcon />
              <Text
                style={{
                  fontSize: 10,
                  backgroundColor: COLORS.primary,
                  borderRadius: 50,
                  width: 15,
                  height: 15,
                  textAlign: 'center',
                  position: 'absolute',
                  right: -5,
                  top: -5,
                  color: COLORS.white,
                  ...fontsFamily.Light,
                }}>
                5
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar input */}

        <TouchableOpacity
          style={{
            backgroundColor: '#F6F6F6',
            flexDirection: 'row',
            height: 50,
            marginHorizontal: 20,
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'space-between',
            borderWidth: 0.5,
            borderColor: COLORS.lightGray,
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate('Search')}>
          <Text
            style={{marginLeft: 10, ...fontsFamily.Light}}
            appearance="hint">
            Search
          </Text>
          <View
            status="primary"
            style={{
              height: 50,
              width: 50,
              backgroundColor: COLORS.primary,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="search" size={25} color={COLORS.white} />
          </View>
        </TouchableOpacity>

        {/* Food Offer Card  */}

            <FlatList 
                data={FoodOffers}
                keyExtractor={(item)=>item.id}
                renderItem={renderOfferCard}
                horizontal
            />
  

        {/* Near By resturant */}
        <View
          style={styles.nearByresturentTextSec}>
          <Text style={fontsFamily.Light}>Nearby Resturent</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('nearbyResturen')}>
            <Text style={fontsFamily.Light} appearance="hint">
              View All
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={styles.nearBycard}>
          <Image
            source={require('./../../assesst/dish.jpg')}
            style={styles.nearbyCardFoodImage}
          />
          <View
            style={styles.bookmark}>
            <Icon
              onPress={() => alert('Book Mark icon is pressed')}
              name="bookmark"
              size={25}
              color={COLORS.primary}
            />
          </View>
         

          <View>
            <Text
              style={{marginLeft: 10, marginVertical: 5, fontSize: 20}}
              appearance="hint">
              Burger King
            </Text>

            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assesst/Icon/Star.png')}
                style={{height: 20, width: 20, marginLeft: 10}}
              />
              <Text appearance="hint" style={{marginLeft: 5}}>
                4.6
              </Text>
              <Image
                source={require('../../assesst/Icon/Clock.png')}
                style={{height: 20, width: 20, marginLeft: 10}}
              />
              <Text appearance="hint" style={{marginLeft: 5}}>
                30 Min
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <FlatList
                data={[
                  {id: '1', tag: 'Foods'},
                  {id: '2', tag: 'Buger'},
                  {id: '3', tag: 'Pizza'},
                ]}
                horizontal
                keyExtractor={item => item.id}
                renderItem={rendertags}
              />
            </View>
          </View>
        </View>
      </Layout>
    </ScrollView>
  );
}
const styles = StyleService.create({
  container: {flex: 1, backgroundColor: '#F7F9FC'},
  tags: {
    marginLeft: 5,
    marginHorizontal: 30,
    backgroundColor: '#D7D9DB',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  CatContainer: {
    height: 50,
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    width: 110,
  },
  CatImgsec: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CatIMg: {height: 20, width: 20, marginRight: 5},
  FoodOfferCard: {
    height: 253,
    width: SIZES.width - 20,
    // backgroundColor: '#FFB125',
    elevation: 10,
    margin: 10,
    borderRadius: 30,
    padding: 10,
    flexDirection: 'row',
  },
  foodCardtextSection: {flex: 3, justifyContent: 'space-between'},
  cardTextTitle: {...FONTS.h2, color: COLORS.white},
  cardTextdiscoutText: {...FONTS.largeTitle, color: COLORS.white},
  discounttxt: {...FONTS.h1, color: COLORS.white},
  cardImageSection: {flex: 3, justifyContent: 'center', alignItems: 'center'},
  Imagecard: {height: 145, width: 190,borderRadius:20},
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 20,
  },
  nearByresturentTextSec:{
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  nearBycard:{
    height: 290,
    width: SIZES.width - 20,
    margin: 15,
    borderRadius: 30,
    backgroundColor: COLORS.white,
    marginBottom: 80,
    elevation: 10,
  },
  nearbyCardFoodImage:{height: 200, width: SIZES.width - 20, borderRadius: 30},
  bookmark:{
    position: 'absolute',
    top: 10,
    right: 15,
    backgroundColor: COLORS.white,
    borderRadius: 50,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
});
