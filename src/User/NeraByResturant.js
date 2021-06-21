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
import {
  Text,
  Button,
  Layout
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import LeftArrow from 'react-native-vector-icons/Entypo';

import { COLORS, FONTS, SIZES } from '../../constants';
import CartIcon from '../../assets/SVg/CartIcon';

import StarIcon from '../../assets/SVg/Star';
import ClockIcon from '../../assets/SVg/Clock';

import {NearByReturent} from '../../model/ResturantDishData'





export default function NeraByResturent({navigation}) {
  const rendertags=({item})=>{
    return(
      <Text appearance="hint" style={styles.tags}>
     {item.tag}
    </Text>
    )
}
  const renderResturent=({item})=>{
    return(
      <TouchableOpacity

      style={{
        height: 290, 
        width: SIZES.width - 20,
        marginTop:40,
        alignSelf:'center',
        borderRadius: 30,
        backgroundColor: '#fff',
        bottom:60,
        elevation:10
       
      }}
      onPress={()=>navigation.navigate("ResturentProfile")}
      >
      
        <Image
          source={require('./../../assesst/dish.jpg')}
          style={{height: 200, width: SIZES.width - 20, borderRadius: 30}}
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
            onPress={() => alert('Book Mark icon is pressed')}
            name="bookmark"
            size={25}
            color="#F24F04"
          />
        </View>
        <Button
          style={{
            position: 'absolute',
            top: 10,
            left: 15,
            borderRadius: 50,
          }}>
          Free Delivery
        </Button>
      
      <View>
        <Text style={{marginLeft: 10, marginVertical: 5,...FONTS.h3}} >
          Burger King
        </Text>
        
        <View style={{flexDirection: 'row'}}>
          
          <View  style={{marginLeft: 10}}>
            <StarIcon/>
          </View>
          <Text appearance="hint" style={{marginLeft: 5}}>
            4.6
          </Text>
          <View  style={{marginLeft: 10}}>
          <ClockIcon />
          </View>
          <Text appearance="hint" style={{marginLeft: 5}}>
            30 Min
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
         
          <FlatList 

          data={item.tags}
          horizontal
          keyExtractor={(item)=>item.id}
          renderItem={rendertags}
          />
          
           
        </View>
      </View>
    </TouchableOpacity>
  
    )
  }

  const header=()=>{
    return(
     <View>
        <View
      style={{
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal:10
        
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
          onPress={()=>navigation.goBack()}
          >
         <LeftArrow  name="chevron-small-left" size={25} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={{marginLeft: 5,fontFamily:'Poppins-Light'}}>
          {' '}
          Nearby{' '}
        </Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={{marginLeft:10}} 
      onPress={()=>navigation.navigate("Search")}
      >
     <Icon name='search' size={25} color={COLORS.black} />
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>navigation.navigate("Cart")}
       style={{marginLeft:10}}>

      <CartIcon />
      <Text style={{fontSize:10,backgroundColor:COLORS.primary,color:COLORS.white,borderRadius:50,width:15,height:15,textAlign:'center',position:'absolute',right:-5,top:-5}}>5</Text>
      </TouchableOpacity>
      
      </View>
    </View>

    <Text style={{fontSize:20,marginVertical:20,marginLeft:10,fontFamily:'Poppins-Light'}}>Nearby {"\n"}Resturent</Text>


     </View>
    )
  }
    return (
        <Layout style={{flex: 1, backgroundColor: '#F7F9FC',}}>
              <StatusBar />
   
    
    <FlatList 
     ListHeaderComponent={header}
       data={NearByReturent}
       keyExtractor={(item)=>item.id}
       renderItem={renderResturent}
       
     />
    
     

     
            
        </Layout>
    )
}
const styles=StyleSheet.create({
  tags:{marginLeft: 5,marginHorizontal:30,backgroundColor:COLORS.background,borderRadius:10,paddingHorizontal:10},
  CatContainer:{
      height: 50,
      marginVertical: 20,
      marginHorizontal: 10,
      borderRadius: 50,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor:'#fff',
      padding:10,
      width:110
    },CatImgsec:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    CatIMg:{height: 20, width: 20, marginRight: 5},
})