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
import Bell from 'react-native-vector-icons/EvilIcons';
import Dots from 'react-native-vector-icons/MaterialCommunityIcons';


import {COLORS, FONTS, fontsFamily, icons, SIZES} from '../../constants';
import {RiderData} from '../../model/Data';

export default function DeliveriesNearMe({navigation}) {


  const renderDelveries = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.Cards}
         onPress={() => navigation.navigate('Rider Delivery Tracking')}
      >
        <View style={{flexDirection:'row'}}>

        <View style={styles.cardImage}>
        <Image
          source={item.img}
          style={{height: 35, width: 35, borderRadius: 5,}}
        />
        </View>

<View style={{marginLeft:5}}>
<Text style={styles.CardTitle}>{item.resturantName}</Text>
<Text style={{...FONTS.body5}}>{item.inTime}</Text>
</View>
        </View>
        

        <View>
          

          <View style={styles.CardDetail}>
            <View style={{justifyContent: 'center'}}>
              <Icon
                name="radio-button-on-sharp"
                size={22}
                color={COLORS.primary}
              />
              <Dots name="dots-vertical" size={22} color={COLORS.primary} />
              <Icon
                name="radio-button-off-sharp"
                size={22}
                color={COLORS.primary}
              />
            </View>
            <View style={styles.CardDetailtxt}>
              <Text style={styles.txt}>{item.fromLocation}</Text>

              <Text style={styles.txt}>{item.toLocation}</Text>
            </View>
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
            <Text style={styles.headerTitle}> Deliveries Near me </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={{margin: 10}}
            onPress={()=>navigation.navigate("Notification")}
            
            >
              <Bell name="bell" size={30} color={COLORS.black} />
              <Text style={styles.textNotify}>5</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{fontSize:20,marginVertical:20,fontFamily:'Poppins-Light'}}>Deliveries {'\n'}Near me</Text>

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
          data={RiderData}
          ListHeaderComponent={header}
          keyExtractor={item => item.id}
          renderItem={renderDelveries}
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
    fontSize: 20,
    ...FONTS.h3,
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
    borderRadius: 30,
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
