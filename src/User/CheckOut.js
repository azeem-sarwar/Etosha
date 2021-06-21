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


import CartIcon from './../../assets/SVg/CartIcon';
import CrditCard from './../../assets/SVg/creditCard'
import Paypal from './../../assets/SVg/Paypal'
import { COLORS } from '../../constants';

const width = Dimensions.get('screen').width;

const data = [
  {
    id: '1',
    title: 'Home',
    Phone: '+00 555-555-1234',
    Address: '52 Riverside St. Norcross, GA 30092',
  },
  {
    id: '2',
    title: 'Office',
    Phone: '+00 555-555-1234',
    Address: '52 Riverside St. Norcross, GA 30092',
  },
];

export default function CheckOut({navigation, route}) {
  const [selectedIndex, setSelectedIndex] = React.useState(true);

  const randerAddressCar = ({item}) => {
    return (
      <View
        style={[
          {
            height: 160,
            width: width - 100,
            borderRadius: 30,
            marginHorizontal: 20,
            backgroundColor: '#fff',
          },
          styles.shadow,
        ]}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            marginHorizontal: 20,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Radio>
            <Text style={{marginLeft: 10, fontSize: 20}}>{item.title}</Text>
          </Radio>
          <Icon name="edit" size={20} color="#000" />
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            marginLeft: 50,
            alignItems: 'center',
          }}>
          <Icon name="phone" size={15} color="gray" />
          <Text style={{fontSize: 12, marginLeft: 10}} appearance="hint">
            {item.Phone}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            marginLeft: 50,
            alignItems: 'center',
            flexShrink: 1,
            width: 140,
          }}>
          <Icon name="map" size={15} color="gray" />
          <Text style={{fontSize: 12, marginLeft: 10}} appearance="hint">
            {item.Address}
          </Text>
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
               <Iconion name="chevron-back" size={25} color={COLORS.black} />
            </TouchableOpacity>
            <Text style={{marginLeft: 5, fontFamily: 'Poppins-Light'}}>
              CheckOut
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => navigation.navigate('Search')}>
              <Iconion name="search" size={25} color={COLORS.black} />
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
    <ScrollView style={{flex: 1, backgroundColor: '#F6F6F6'}}>
      <StatusBar />
      {header()}

      <View style={{width: 180, flexShrink: 1, margin: 20}}>
        <Text style={{fontSize: 23}}>Order Will {'\n'}Be Delivered To</Text>
      </View>

      <View style={{height: 170}}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={randerAddressCar}
          horizontal
        />
      </View>

      <Text style={{fontSize: 18, marginLeft: 20, marginTop: 10}}>
        Payment Method
      </Text>

      <TouchableOpacity style={{marginLeft:20,flexDirection:'row',justifyContent:'space-between',marginVertical:15,alignItems:'center',marginHorizontal:20}}>
         <View style={{flexDirection:'row',alignItems:'center'}}>
         <View
         style={{marginRight:20,borderRadius:10,borderWidth:0.5,padding:3,borderColor:COLORS.lightGray}}
         >
         <CrditCard height={30} width={30}  />

         </View>
          <Text style={{fontSize:18}}>Credit Card</Text>
         </View>
          <Radio  />
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:20,flexDirection:'row',justifyContent:'space-between',marginHorizontal:20}}>
         <View style={{flexDirection:'row',alignItems:'center'}}>
<View
         style={{marginRight:20,borderRadius:10,borderWidth:0.5,padding:3,borderColor:COLORS.lightGray}}

>
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
          onPress={()=>navigation.navigate("MyCard")}
          >
          Check Out
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
    shadowColor: '#000',
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
