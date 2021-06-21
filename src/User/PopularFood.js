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
import Cart from './../../assets/SVg/CartIcon'

import {NearByReturent} from '../../model/ResturantDishData'
import { COLORS, SIZES } from '../../constants';
import StarIcon from '../../assets/SVg/Star';
import ClockIcon from '../../assets/SVg/Clock';




export default function PopularFood({navigation}) {





  const renderResturent=({item})=>{
    return(
      <TouchableOpacity
      style={{
        height: 230, 
        width: SIZES.width/2.25,
        marginTop:40,
        marginHorizontal:10,
        borderRadius: 30,
        backgroundColor: '#fff',
        bottom:60,
        shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
       
      }}
      onPress={()=>navigation.navigate('FoodPage')}
      >
      
        <Image
          source={require('./../../assets/DummyImages/dish.jpg')}
          style={{height: 150, width: SIZES.width/2.25, borderRadius: 30}}
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
            onPress={() => alert('heart icon is pressed')}
            name="heart"
            size={25}
            color="#F24F04"
          />
        </View>
       
      
      <View>
        <Text style={{marginLeft: 10, marginVertical: 5,fontSize:20}} appearance="hint">
          Burger King
        </Text>
        
        <View style={{flexDirection: 'row'}}>
          <View style={{ marginLeft: 10}}>
            <StarIcon />
          </View>
          <Text appearance="hint" style={{marginLeft: 5}}>
            4.6
          </Text>
          <View style={{ marginLeft: 10}}>
            <ClockIcon />
          </View>
          <Text appearance="hint" style={{marginLeft: 5}}>
            30 Min
          </Text>
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
        marginHorizontal:20
        
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
          <Icon name="chevron-back" size={25} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={{marginLeft: 5,fontFamily:'Poppins-Light'}}>
          {' '}
          Popular Food{' '}
          
        </Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={{marginLeft:10}}
      onPress={()=>navigation.navigate("Search")}
      >
      <Icon name="search" size={25} color={COLORS.black} />
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:10}}
      onPress={()=>navigation.navigate("Cart")}
      >

      <Cart />
      <Text style={{fontSize:10,backgroundColor:'#F24F04',borderRadius:50,width:15,height:15,textAlign:'center',position:'absolute',right:-5,top:-5,color:COLORS.white}}>5</Text>
      </TouchableOpacity>
      
      </View>
    </View>

    <Text style={{fontSize:20,margin:20,fontFamily:'Poppins-Light'}}>Popular Food {"\n"}Item</Text>


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
       numColumns={2}
     />
    
     

     
            
        </Layout>
    )
}
const styles=StyleSheet.create({
  tags:{marginLeft: 5,marginHorizontal:30,backgroundColor:"#D7D9DB",borderRadius:10,paddingHorizontal:10},

})