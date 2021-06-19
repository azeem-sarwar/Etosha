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
import {LineChart} from 'react-native-chart-kit'


import {COLORS, FONTS, fontsFamily, icons, SIZES} from '../../constants';
import { Size } from '@ui-kitten/components/devsupport';


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
  
      
<View style={{borderRadius: 20,elevation:10,backgroundColor:COLORS.white,width:SIZES.width-20,alignSelf:'center',elevation:10}}>
<Text style={{...FONTS.body2,margin:10}}>Earnings</Text>

<LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={SIZES.width-20} // from react-native
    height={220}
    
    yAxisLabel="$"
    yAxisSuffix="k"
    
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: COLORS.white,
      backgroundGradientFrom: COLORS.white,
      backgroundGradientTo: COLORS.background,
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,alignSelf:'center',
    }}
  />
</View>

            <View        
          style={{height: 130, flexDirection:'row',alignSelf:'center',marginVertical:10}}>
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

          
        </View>

        <View         
          style={{height: 130, flexDirection:'row',alignSelf:'center',marginVertical:10}}>
          
          <View style={styles.stateCard}>
            <Text style={{...FONTS.body4}}>Active {'\n'}Orders</Text>
            <Text style={{...FONTS.h3}} status="primary">
              8
            </Text>
          </View>

          <View style={styles.stateCard}>
            <Text style={{...FONTS.body4}}>Daily {'\n'}Orders</Text>
            <Text style={{...FONTS.h3}} status="primary">
              190
            </Text>
          </View>
             </View>

     
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
  }, stateCard: {
    flexShrink: 1,
    width: SIZES.width / 2.2,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    elevation: 5,
    padding: 10,
    justifyContent: 'space-between',
    height: 120,
    marginHorizontal: 5,
  },
 
});
