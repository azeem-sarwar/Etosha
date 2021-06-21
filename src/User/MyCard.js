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
import {Text, Button, Layout, Radio, RadioGroup} from '@ui-kitten/components';

import Icon from 'react-native-vector-icons/FontAwesome';
import Iconion from 'react-native-vector-icons/Ionicons';


import Arrow from '../../assesst/Icon/arrowBack.svg';
import Search from '../../assesst/Icon/SearchBlack.svg';


import CardSVG from '../Component/Card';
import CartIcon from './../../assets/SVg/CartIcon';
import CrditCard from './../../assets/SVg/creditCard'
import Paypal from './../../assets/SVg/Paypal'
import { COLORS } from '../../constants';



export default function MyCard({navigation, route}) {
  const [selectedIndex, setSelectedIndex] = React.useState(true);

 
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
               <Iconion name="chevron-back" size={25} color={COLORS.black} />
            </TouchableOpacity>
            <Text style={{marginLeft: 5, fontFamily: 'Poppins-Light'}}>
              My Card
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => navigation.navigate('Search')}>
               <Iconion name="search" size={25} color={COLORS.black} />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 10}}
      onPress={()=>navigation.navigate("Cart")}
            
            >
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
                  color:COLORS.white
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
    <ScrollView style={{flex: 1, backgroundColor: '#F6F6F6'}}>
      <StatusBar />
      {header()}

      <View style={{ flexShrink: 1, margin: 20,flexDirection:'row'}}>
        <Text style={{fontSize: 17}}>Edit card Information</Text>
        

        <TouchableOpacity style={{marginLeft:20}}
        onPress={()=>navigation.navigate("EditCard")}
        >
        <Icon name="edit" size={20} color="#000" />
        </TouchableOpacity>
      </View>
{/* pass the Card Information */}
     <View style={[{marginHorizontal:10,height:250},styles.shadow]}>
     <CardSVG Name="John Newton" amount={1990} cardNo={8881} />
     </View>

      <Text style={{fontSize: 18, marginLeft: 20, marginTop: -10}}>
        Payment Method
      </Text>

      <TouchableOpacity style={{marginLeft:20,flexDirection:'row',justifyContent:'space-between',marginVertical:15,alignItems:'center',marginHorizontal:20}}>
         <View style={{flexDirection:'row',alignItems:'center'}}>
         <View style={{marginRight:20,borderRadius:10,borderWidth:0.5,padding:5,borderColor:COLORS.lightGray}}>
           <CrditCard height={30} width={30} />
         
         </View>
          <Text style={{fontSize:18}}>Credit Card</Text>
         </View>
          <Radio  />
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:20,flexDirection:'row',justifyContent:'space-between',marginHorizontal:20}}>
         <View style={{flexDirection:'row',alignItems:'center'}}>
         <View style={{marginRight:20,borderRadius:10,borderWidth:0.5,padding:4,borderColor:COLORS.lightGray}}>
           <Paypal  />
         </View>
         
          <Text style={{fontSize:18}}>Paypal</Text>
         </View>
          <Radio  />
      </TouchableOpacity>

      
      <View
        style={styles.chargesSection}>
        <View
          style={styles.ChaergesText}>
          <Text>Daily Charges</Text>
          <Text>$0.0</Text>
        </View>
        <View
          style={styles.ChaergesText}>
          <Text>SubTotal</Text>
          <Text>$ 90</Text>
        </View>
        
        <View
          style={styles.ChaergesText}>
          <Text>Total</Text>
          <Text>$ 90</Text>
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
          onPress={()=>navigation.navigate("MyOrder")}
          >
          Pay
        </Button>
      </View>


      <View style={{height: 50, width: '100%'}} />
    </ScrollView>
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
  shadow: {
    shadowColor: 'orange',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 5,
  },
  ChaergesText:{
    flexShrink: 1,
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  chargesSection:{
   
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom:20,
    marginTop:10,
  }
});
