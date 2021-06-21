import React from 'react';
import {
  View,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import {Text, Button, Layout, Radio, RadioGroup, Input} from '@ui-kitten/components';

import Icon from 'react-native-vector-icons/Ionicons'


import CartIcon from './../../assets/SVg/CartIcon'
import CardSVG from '../Component/Card';
import { COLORS } from '../../constants';

 






export default function EditCard({navigation, route}) {
  const [selectedIndex, setSelectedIndex] = React.useState(true);
  const [name,setName] = React.useState('')
const [cardNo,setCardNo] = React.useState('')
const [cvv,setVv] = React.useState('')
const [expiryDate,setExpiryDate] = React.useState('')

 
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
                <Icon name="chevron-back" size={25} color={COLORS.black} />

            </TouchableOpacity>
            <Text style={{marginLeft: 5, fontFamily: 'Poppins-Light'}}>
              My Card
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => navigation.navigate('Search')}>
      <Icon name="search" size={25} color={COLORS.black} />

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
  <KeyboardAvoidingView
  behavior={Platform.OS === "ios" ? "padding" : "position"}
  style={{flex: 1, backgroundColor: '#F6F6F6'}}
  >

  {header()}

    
{/* pass the Card Information */}
     <View style={[{marginHorizontal:10,height:250,marginTop:20},styles.shadow]}>
     <CardSVG Name="John Newton" amount={1990} cardNo={8881} />
     </View>
     {/* Input section  */}

     <View style={{marginHorizontal:20}}>
         <Input 
         value={name}
         onChangeText={(text)=>setName(text)}
         size="large"
         style={{borderRadius:10,marginVertical:10}}
         placeholder="Name"
          />

        <Input 
         value={cardNo}
         onChangeText={(text)=>setCardNo(text)}
         size="large"
         style={{borderRadius:10,marginVertical:10}}
         placeholder="Card No"
          />

          <View style={{flexDirection:'row',justifyContent:"space-between"}} >
          <Input 
         value={cvv}
         onChangeText={(text)=>setCvv(text)}
         size="large"
         style={{borderRadius:10,width:100}}
         placeholder="CVV"
          />
          <Input 
         value={expiryDate}
         onChangeText={(text)=>setExpiryDate(text)}
         size="large"
         style={{borderRadius:10,width:200}}
         placeholder="Expiry Date"
          />
          </View>
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
          Save
        </Button>
      <View style={{height: 50, width: '100%'}} />

  </KeyboardAvoidingView>
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
