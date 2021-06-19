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


import {COLORS, FONTS, fontsFamily, icons, SIZES} from '../../constants';
import {OrderDataResturant} from '../../model/Data';

export default function Statistics({navigation}) {

 

  const header = () => {
    return (
      <View>
        <StatusBar />

        <View style={styles.headerMenue}>
          <View style={styles.meueButtonSec}>
            <TouchableOpacity
              style={styles.MenueButton}
              onPress={() => navigation.goBack()}>
               <Icon name="chevron-back" size={25} color={COLORS.black} />
              
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
            
          </View>
        </View>
        <Text style={{...FONTS.body2,margin:10}}>Statistics</Text>

      </View>
    );
  };

  return (
    <Layout style={{flex: 1, backgroundColor: COLORS.background}}>

   
   
      <View style={{marginHorizontal: 10}}>{header()}</View>
       
     
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
 
});
