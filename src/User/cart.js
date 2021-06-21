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
import CartIcon from './../../assets/SVg/CartIcon';
import { COLORS, fontsFamily } from '../../constants';
import {NearByReturent} from '../../model/ResturantDishData'


const width = Dimensions.get('screen').width;



export default function Cart({navigation, route}) {
  const renderResturent = ({item}) => {
    return (
      <View
        style={{
          marginHorizontal: 10,
          borderRadius: 30,
          backgroundColor: COLORS.white,
          marginTop: 20,
          flexDirection: 'row',
          marginBottom: 10,
          shadowColor: COLORS.black,
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
              backgroundColor: COLORS.white,
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
              color={COLORS.primary}
            />
          </View>
        </View>

        <View style={{justifyContent: 'space-between'}}>
          <View style={{justifyContent: 'space-between', flexShrink: 1}}>
            <Text style={{marginLeft: 10, marginVertical: 5, fontSize: 15,...fontsFamily.Light}}>
              {item.FoodName}
            </Text>

            <Text
              style={{marginLeft: 10, marginVertical: 5, fontSize: 10,...fontsFamily.Light}}
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
                flex: 1
                ,...fontsFamily.Light
              }}>
              {item.price}
            </Text>
            <View
              style={[{
                backgroundColor: COLORS.primary,
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
                <ADDICon name="minus" color={COLORS.white} size={20} />
              </TouchableOpacity>

              <Text style={{color: COLORS.white, fontSize: 20,...fontsFamily.Light}}>3</Text>

              <TouchableOpacity>
                <ADDICon name="plus" color={COLORS.white} size={20} />
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
                borderColor: COLORS.lightGray,
              }}
              onPress={() => navigation.goBack()}>
               <Icon name="chevron-back" size={25} color={COLORS.black} />
            </TouchableOpacity>
            <Text style={{marginLeft: 5,...fontsFamily.Light}}>
              Cart
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => navigation.navigate('Search')}>
              <Icon name="search" color={COLORS.black} size={25} />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 10}}>
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
                  color:COLORS.white
                  ,...fontsFamily.Light
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
          backgroundColor: COLORS.white,
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
          <Text style={{...fontsFamily.Light}}>10 Selected Food{'\n'}Items</Text>
          <Text style={{...fontsFamily.Light}}>Total Amount :{'\n'}$90.00</Text>
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
          <Text style={{...fontsFamily.Light,color:COLORS.white}}>
          Check Out
          </Text>
          
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
    backgroundColor: COLORS.lightGray,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  shadow:{shadowColor: COLORS.primary,
  shadowOffset: {
      width: 0,
      height: 8,
  },
  shadowOpacity: 0.46,
  shadowRadius: 11.14,
  
  elevation: 24,}
});
