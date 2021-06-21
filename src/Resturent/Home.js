import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Text, Button, Avatar, Layout, List} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import Bell from 'react-native-vector-icons/EvilIcons';
import Menue from '../../assets/SVg/MenuIcon';

import {COLORS, FONTS, fontsFamily, icons, SIZES} from '../../constants';
import {OrderDataResturant} from '../../model/Data';


export default function Home({navigation}) {
  const [search, setSearch] = React.useState('');

  const renderFoods = ({item})=>{
    return(
      <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: item.id=="3"?0:1,
        borderBottomColor: COLORS.lightGray,
        alignItems: 'center',
        marginRight: 15,
        marginTop:10
      }}>
      <View style={{}}>
        <Text style={{...FONTS.body4}}>{item.FoodName}</Text>
        <Text style={{...FONTS.body4}}>{item.size}</Text>
      </View>
      <Text style={{...FONTS.body4}}>{item.Quantity}</Text>
    </View>
    )
  }

  const RenderOrders=({item})=>{
    console.log(item)
    return(
      
      <View
        style={{
          flexDirection: 'row',
          borderRadius: 20,
          backgroundColor: COLORS.white,
          padding: 10,
          width: SIZES.width-20,
          alignSelf:'center',
          elevation:10,
          marginVertical:10
          
        }}>
        {/* Profile section */}
        <View style={{width: '20%'}}>
          <Image
            source={item.customerImg}
            style={{height: 60, width: 60, borderRadius: 10}}
          />
        </View>

        {/* Text Section */}
        <View style={{marginLeft: 10, width: '80%'}}>
          {/* Title section */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{justifyContent: 'space-between'}}>
              <Text style={{...FONTS.h3}}>{item.CustomerName}</Text>
              <Text style={{...FONTS.body4, marginTop: 10}}>{item.Time}</Text>
            </View>

            <Button
              size="tiny"
              style={[
                {borderRadius: 30, width: 100, height: 40, marginRight: 10},
                styles.Shadow,
              ]}>
              <Text style={{color: COLORS.white, ...FONTS.body5}}>$ {item.totalPrice}</Text>
            </Button>
          </View>

          <View style={{marginTop: 10}}>
            {/* OrderS Flat list will display here */}
          {/* Render List Of Food that are order by Customer */}

          <FlatList 
          data={item.orderList}
          keyExtractor={(itema)=>itema.id}
          renderItem={renderFoods}
          />
          
          </View>
        </View>
      </View>
   
    )
  }

  const header = () => {
    return (
      <View>
        <StatusBar />

        <View style={styles.headerMenue}>
          <View style={styles.meueButtonSec}>
            <TouchableOpacity
              style={styles.MenueButton}
              onPress={() => navigation.openDrawer()}>
              <Menue />
            </TouchableOpacity>
            <Text style={styles.headerTitle}> Home </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={{margin: 10}}
              onPress={() => navigation.navigate('ResturantNotification')}>
              <Bell name="bell" size={30} color={COLORS.black} />
              <Text style={styles.textNotify}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Avatar
                onPress={() => {
                  alert('ok');
                }}
                source={require('../../assets/images/KFC.png')}
                style={styles.ProfileAvatar}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar input */}

        <TouchableOpacity
          style={styles.searchBar}
          // onPress={() => navigation.navigate('Search')}
        >
          <Text style={styles.searchTitle} appearance="hint">
            Search
          </Text>
          <View status="primary" style={styles.searchButton}>
            <Icon name="search" size={25} color={COLORS.white} />
          </View>
        </TouchableOpacity>

        <View style={styles.titleCArds}>
          <Text style={{...FONTS.body3}}>Statistics</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Returant State')}>
            <Text style={{...FONTS.body4}}>View All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          contentContainerStyle={{height: 130, alignItems: 'center'}}>
          <View style={styles.stateCard}>
            <Text style={{...FONTS.body4}}>Daily {'\n'}Revenue</Text>
            <Text style={{...FONTS.h3}} status="primary">
              $ 786
            </Text>
          </View>
          <View style={styles.stateCard}>
            <Text style={{...FONTS.body4}}>Earning {'\n'}in May</Text>
            <Text style={{...FONTS.h3}} status="primary">
              $ 19,789
            </Text>
          </View>

          <View style={styles.stateCard}>
            <Text style={{...FONTS.body4}}>Active {'\n'}Orders</Text>
            <Text style={{...FONTS.h3}} status="primary">
              8
            </Text>
          </View>
        </ScrollView>

        <View style={styles.titleCArds}>
          <Text style={{...FONTS.body3}}>New Orders</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Orders')}>
            <Text style={{...FONTS.body4}}>View All</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Layout style={{flex: 1, backgroundColor: COLORS.background}}>

   
      <FlatList 
      ListHeaderComponent={()=>(
      <View style={{marginHorizontal: 10}}>{header()}</View>
       )} 
        data={OrderDataResturant}
        keyExtractor={(item)=>item.id}
        renderItem={RenderOrders}
    
      />
     
 </Layout>
  );
}
const styles = StyleSheet.create({
  Shadow: {
    shadowColor: '#F24F04',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 24,
  },
  titleCArds: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  searchButton: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchTitle: {marginLeft: 10, ...fontsFamily.Light},
  searchBar: {
    backgroundColor: COLORS.lightGray,
    flexDirection: 'row',
    height: 50,

    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: COLORS.lightGray,
    borderRadius: 10,
  },
  ProfileAvatar: {height: 40, width: 40, borderRadius: 10},
  headerTitle: {marginLeft: 5, ...fontsFamily.Light},
  MenueButton: {
    height: 40,
    width: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: COLORS.lightGray,
  },
  meueButtonSec: {flexDirection: 'row', alignItems: 'center'},
  headerMenue: {
    flexDirection: 'row',
    marginTop: 20,

    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textNotify: {
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
  },
  stateCard: {
    flexShrink: 1,
    width: SIZES.width / 3,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    elevation: 5,
    padding: 10,
    justifyContent: 'space-between',
    height: 120,
    marginHorizontal: 5,
  },
});
