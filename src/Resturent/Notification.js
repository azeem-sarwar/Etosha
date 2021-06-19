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
import {Text, Button, Avatar, Layout, List} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import NotifyData from 'react-native-vector-icons/Entypo';


import {COLORS, FONTS, fontsFamily, icons, SIZES} from '../../constants';
import {NotificcationData} from '../../model/Data';

export default function Notification({navigation}) {


  const renderNotification = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.Cards}
          onPress={() =>
          { 
            navigation.navigate('MyReview',{rating:5,message:'"Bun was really soft, Enjoyedthe inner chicken piece too"'})
          
          }}
      >
        <View style={{flexDirection:'row'}}>

        <View style={styles.cardImage}>
        <NotifyData
          name="notification"
          size={25}
          color={COLORS.black}
        />
        </View>

<View style={{marginLeft:5,flexShrink:5}}>
<Text style={styles.CardTitle}>{item.fromresturant}</Text>
<Text style={{...FONTS.body5}}>{item.inTime}</Text>
</View>
        </View>
        

       
      </TouchableOpacity>
    );
  };

  const header = () => {
    return (
      <View style={{marginHorizontal:20}}>
      <StatusBar />
        <View style={styles.headerMenue}>
          <View style={styles.meueButtonSec}>
            <TouchableOpacity
              style={styles.MenueButton}
              onPress={() => navigation.goBack()}>
              <Icon name="chevron-back" size={25} color={COLORS.black} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Notification</Text>
          </View>
          
        </View>
        <Text style={{fontSize:20,marginVertical:20,fontFamily:'Poppins-Light'}}>Notification</Text>

      </View>
    );
  };

  return (
    <Layout
      style={{
        backgroundColor:COLORS.white,
        flex: 1,
        
      }}>
    

        <FlatList
          data={NotificcationData}
          ListHeaderComponent={header}
          keyExtractor={item => item.id}
          renderItem={renderNotification}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{height:SIZES.height}}
        />
     
    </Layout>
  );
}
const styles = StyleSheet.create({
  ASAPbtn: {
    position: 'absolute',
    top: 10,
    left: 15,
    borderRadius: 50,
  },
  CardTitle: {
  
    marginVertical: 5,
    ...FONTS.h4,
  },
  CardDetailtxt: {justifyContent: 'space-between', marginLeft: 3},
  txt: {marginVertical: 5, fontSize: 20, ...FONTS.h4},
  ButtonIcon: {height: 20, width: 20},
  LeftAccessory: {
    backgroundColor: COLORS.white,
    borderRadius: 50,
    padding: 5,
    marginRight: 5,
  },
  CardDetail: {flexDirection: 'row', marginLeft: 10},
  Cards: {
    width: SIZES.width - 40,
    alignSelf:'center',
    borderRadius: 20,
    backgroundColor: COLORS.white,
    paddingBottom: 10,
    elevation: 5,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    
    elevation: 18,
  },
   cardImage:{borderWidth:2,borderColor:COLORS.lightGray,marginLeft:10,marginTop:10,borderRadius:10,height:50,width:50,
justifyContent:'center',alignItems:'center'
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
