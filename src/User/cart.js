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
import {Text, Button, Layout} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import ADDICon from 'react-native-vector-icons/AntDesign';

import Arrow from '../../assesst/Icon/arrowBack.svg';
import Search from '../../assesst/Icon/SearchBlack.svg';
import CartIcon from './../../assesst/Icon/Cart.svg';
const width = Dimensions.get('screen').width;

const NearByReturent = [
  {
    id: '1',
    FoodName: 'Shrimps and Arugula',
    img: require('./../../assesst/dish.jpg'),
    price: 200.0,
    Rating: 4.9,
    Time: '20 min',
    tags: [
      {id: '1', tag: 'Foods'},
      {id: '2', tag: 'Buger'},
      {id: '3', tag: 'Pizza'},
    ],
  },
  {
    id: '2',
    FoodName: 'Shrimps and Arugula',
    img: require('./../../assesst/popularFood.png'),

    price: 200.0,
    Rating: 4.9,
    Time: '20 min',
    tags: [
      {id: '1', tag: 'Foods'},
      {id: '2', tag: 'Buger'},
      {id: '3', tag: 'Pizza'},
    ],
  },
  {
    id: '3',
    FoodName: 'Shrimps and Arugula',
    img: require('./../../assesst/popularFood.png'),

    price: 200.0,
    Rating: 4.9,
    Time: '20 min',
    tags: [
      {id: '1', tag: 'Foods'},
      {id: '2', tag: 'Buger'},
      {id: '3', tag: 'Pizza'},
    ],
  },
  {
    id: '4',
    FoodName: 'Shrimps and Arugula',
    img: require('./../../assesst/dish.jpg'),
    price: 200.0,
    Rating: 4.9,
    Time: '20 min',
    tags: [
      {id: '1', tag: 'Foods'},
      {id: '2', tag: 'Buger'},
      {id: '3', tag: 'Pizza'},
    ],
  },
  {
    id: '5',
    FoodName: 'Shrimps and Arugula',
    img: require('./../../assesst/popularFood.png'),

    price: 200.0,
    Rating: 4.9,
    Time: '20 min',
    tags: [
      {id: '1', tag: 'Foods'},
      {id: '2', tag: 'Buger'},
      {id: '3', tag: 'Pizza'},
    ],
  },
  {
    id: '6',
    FoodName: 'Shrimps and Arugula',
    img: require('./../../assesst/popularFood.png'),

    price: 20.0,
    Rating: 4.9,
    Time: '20 min',
    tags: [
      {id: '1', tag: 'Foods'},
      {id: '2', tag: 'Buger'},
      {id: '3', tag: 'Pizza'},
    ],
  },
];

export default function Cart({navigation, route}) {
  const renderResturent = ({item}) => {
    return (
      <View
        style={{
          marginHorizontal: 10,
          borderRadius: 30,
          backgroundColor: '#fff',
          marginTop: 20,
          flexDirection: 'row',
          marginBottom: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.46,
          shadowRadius: 11.14,

          elevation: 17,
        }}
        onPress={() => navigation.navigate('FoodPage')}>
        <View>
          <Image
            source={item.img}
            style={{height: 130, width: width / 2.6, borderRadius: 30}}
          />
          <View
            style={{
              position: 'absolute',
              top: 10,
              right: 15,
              backgroundColor: '#fff',
              borderRadius: 50,
              height: 30,
              width: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              onPress={() => alert('heart icon is pressed')}
              name="heart"
              size={25}
              color="#F24F04"
            />
          </View>
        </View>

        <View style={{justifyContent: 'space-between'}}>
          <View style={{justifyContent: 'space-between', flexShrink: 1}}>
            <Text style={{marginLeft: 10, marginVertical: 5, fontSize: 15}}>
              {item.FoodName}
            </Text>

            <Text
              style={{marginLeft: 10, marginVertical: 5, fontSize: 10}}
              appearance="hint">
              {item.FoodName}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 15,
                textAlign: 'center',
                marginLeft: 10,
                flex: 1,
              }}>
              {item.price}
            </Text>
            <View
              style={[{
                backgroundColor: '#F24F04',
                borderRadius: 20,
                marginVertical: 10,
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'row',
                flex: 1,
                marginLeft: 20,
                marginRight: -30,
              },styles.shadow]}>
              <TouchableOpacity>
                <ADDICon name="minus" color="#fff" size={20} />
              </TouchableOpacity>

              <Text style={{color: '#fff', fontSize: 20}}>3</Text>

              <TouchableOpacity>
                <ADDICon name="plus" color="#fff" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const header = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 20,
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
              onPress={() => navigation.goBack()}>
              <Arrow />
            </TouchableOpacity>
            <Text style={{marginLeft: 5, fontFamily: 'Poppins-Light'}}>
              Cart
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => navigation.navigate('Search')}>
              <Search />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 10}}>
              <CartIcon />
              <Text
                style={{
                  fontSize: 10,
                  backgroundColor: '#F24F04',
                  borderRadius: 50,
                  width: 15,
                  height: 15,
                  textAlign: 'center',
                  position: 'absolute',
                  right: -5,
                  top: -5,
                }}>
                5
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <Layout style={{flex: 1}}>
      <StatusBar />

      <FlatList
        ListHeaderComponent={header}
        data={NearByReturent}
        keyExtractor={item => item.id}
        renderItem={renderResturent}
      />

      <View
        style={{
          height: 150,
          backgroundColor: '#fff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <View
          style={{
            flexShrink: 1,
            flexDirection: 'row',
            marginTop: 20,
            marginHorizontal: 20,
            justifyContent: 'space-between',
          }}>
          <Text>10 Selected Food{'\n'}Items</Text>
          <Text>Total Amount :{'\n'}$90.00</Text>
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
          onPress={()=>navigation.navigate("CheckOut")}
          >
          Check Out
        </Button>
      </View>

      <View style={{height: 50, width: '100%'}} />
    </Layout>
  );
}
const styles = StyleSheet.create({
  tags: {
    marginLeft: 5,
    marginHorizontal: 30,
    backgroundColor: '#D7D9DB',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  shadow:{shadowColor: "#F24F04",
  shadowOffset: {
      width: 0,
      height: 8,
  },
  shadowOpacity: 0.46,
  shadowRadius: 11.14,
  
  elevation: 24,}
});
