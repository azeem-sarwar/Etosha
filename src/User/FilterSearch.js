import React from 'react';
import {
  View,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ScrollView,
  StyleSheet,
  FlatList
} from 'react-native';
import {Text, Button, Layout,List} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';


import Cart from './../../assets/SVg/CartIcon';


import { COLORS } from '../../constants';
const width = Dimensions.get('screen').width;

const PriceTag = [
  {
    id: '1',
    tag: '20-30',
  },
  {
    id: '2',
    tag: '50-70',
  },
  {
    id: '3',
    tag: '70-90',
  },
  {
    id: '4',
    tag: '100-130',
  },
];
const RatingTag = [
  {
    id: '1',
    tag: '1',
  },
  {
    id: '2',
    tag: '2',
  },
  {
    id: '3',
    tag: '3',
  },
  {
    id: '4',
    tag: '4',
  },
  {
    id: '5',
    tag: '5',
  },
];
const FoodTag = [
    {
      id: '1',
      tag: 'Fast food',
    },
    {
      id: '2',
      tag: 'Healthy Food',
    },
    {
      id: '3',
      tag: 'Dessert',
    }  ];
  const ReturentTag = [
        {
          id: '1',
          tag: 'Burger king',
        },
        {
          id: '2',
          tag: "McDonald's",
        },
        {
          id: '3',
          tag: 'Pizza Hut',
        }  ];


export default function FilterSearch({navigation}) {
  const [byPrice, setByPrice] = React.useState('default');
  const [byRating, setByRating] = React.useState('default');
  const [byfood, setByFoods] = React.useState('default');
  const [byResturent, setByResturent] = React.useState('default');

  const renderTag = ({item}) => {
    return (
      <View style={{marginVertical:10}}>
          <Button
        style={[
          styles.PriceTag,
          {backgroundColor: byPrice == item.tag ? '#F24F04' : '#fff'},
        ]}
        onPress={() => setByPrice(item.tag)}>
        <Text
          style={[
            styles.PriceTagText,
            {color: byPrice == item.tag ? '#fff' : '#000'},
          ]}>
          {item.tag}
        </Text>
      </Button>
      </View>

    );
  };


  const renderRatingTag = ({item}) => {
    return (
      <Button
        style={[
          styles.PriceTag,
          {backgroundColor: byRating == item.tag ? '#F24F04' : '#fff',flexDirection:'row',justifyContent:'center',alignItems:"center"},
        ]}
        onPress={() => setByRating(item.tag)}>
        <Icon name='star' size={20} color={byRating == item.tag ? '#fff' : '#000'} style={{marginRight:10}} />
        <Text
          style={[
            styles.PriceTagText,
            {color: byRating == item.tag ? '#fff' : '#000',left:10},
          ]}>
          {item.tag}
        </Text>
      </Button>
    );
  };

  const renderFoodTag = ({item}) => {
    return (
      <Button
        style={[
          styles.PriceTag,
          {backgroundColor: byfood == item.tag ? '#F24F04' : '#fff'},
        ]}
        onPress={() => setByFoods(item.tag)}>
        <Text
          style={[
            styles.PriceTagText,
            {color: byfood == item.tag ? '#fff' : '#000'},
          ]}>
          {item.tag}
        </Text>
      </Button>
    );
  };

  const renderResturentTag = ({item}) => {
    return (
      <Button
        style={[
          styles.PriceTag,
          {backgroundColor: byResturent == item.tag ? '#F24F04' : '#fff'},
        ]}
        onPress={() => setByResturent(item.tag)}>
        <Text
          style={[
            styles.PriceTagText,
            {color: byResturent == item.tag ? '#fff' : '#000'},
          ]}>
          {item.tag}
        </Text>
      </Button>
    );
  };

  return (
    <Layout style={styles.Container}>
      <StatusBar />
      {/* Header of Screen */}
      <View>
        <View style={styles.HeaderCon}>
          <View style={styles.headerTitle}>
            <TouchableOpacity
              style={styles.headerMenueBtn}
              onPress={() => navigation.goBack()}>
         <Icon name="chevron-back" size={25} color={COLORS.black} />

            </TouchableOpacity>
            <Text style={styles.headerText}> Search </Text>
          </View>
          <View style={styles.headerrightIconContainer}>
            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => navigation.navigate('Cart')}>
              <Cart />
              <Text style={styles.headerCartItemText}>5</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Text style={styles.ScreenTitle}>Filter Your Search</Text>

      {/* Price Tags */}
      <Text style={styles.FilterTitle}>Price</Text>
      <View>
      <List
        data={PriceTag}
        keyExtractor={item => item.id}
        renderItem={renderTag}
        horizontal
        style={styles.ListStyle}
        
      />
      </View>

{/* Rating Tag */}
        <Text style={styles.FilterTitle}>Rating</Text>
        <View>
      <List
        data={RatingTag}
        keyExtractor={item => item.id}
        renderItem={renderRatingTag}
        horizontal
        style={styles.ListStyle}
        
      />
      </View>

      {/*  */}

      <Text style={styles.FilterTitle}>Food Types</Text>
        <View>
      <List
        data={FoodTag}
        keyExtractor={item => item.id}
        renderItem={renderFoodTag}
        horizontal
        style={styles.ListStyle}
        
      />
      </View>




      <Text style={styles.FilterTitle}>Resturant</Text>
        <View>
      <List
        data={ReturentTag}
        keyExtractor={item => item.id}
        renderItem={renderResturentTag}
        horizontal
        style={styles.ListStyle}
        
      />
      </View>

      <Button
          style={[{
            marginHorizontal: 20,
            height: 50,
            borderRadius: 30,
            marginTop: 25,        
          },
          styles.shadow
          ]}
          onPress={()=>navigation.navigate("Search")}
          >
         Apply Filter
        </Button>

    </Layout>
  );
}
const styles = StyleSheet.create({
  Container: {flex: 1, backgroundColor: '#F7F9FC'},
  HeaderCon: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  tags: {
    marginLeft: 5,
    marginHorizontal: 30,
    backgroundColor: '#D7D9DB',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  headerMenueBtn: {
    height: 40,
    width: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#D7D9DB',
  },
  headerrightIconContainer: {flexDirection: 'row'},
  headerText: {marginLeft: 5, fontFamily: 'Poppins-Light'},
  headerTitle: {flexDirection: 'row', alignItems: 'center'},
  headerCartItemText: {
    fontSize: 10,
    backgroundColor: '#F24F04',
    borderRadius: 50,
    width: 15,
    height: 15,
    textAlign: 'center',
    position: 'absolute',
    right: -5,
    top: -5,
    color: '#fff',
  },
  FilterTitle: {
    fontSize: 15,
    marginHorizontal: 20,
    fontFamily: 'Poppins-Light',
  },
  PriceTag: {
    borderColor: '#D7D9DB',
    height: 50,
    marginHorizontal: 15,
    marginVertical: 10,
    elevation: 5,
    borderRadius:10,
    
  },
  PriceTagText: {fontFamily: 'Poppins-Light', fontSize: 15,marginLeft:10},
  ListStyle: {backgroundColor: '#F7F9FC',},
  ScreenTitle: {fontSize: 20, margin: 20, fontFamily: 'Poppins-Light'},
  shadow: {
    shadowColor: '#F24F04',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 10,
  },
});
