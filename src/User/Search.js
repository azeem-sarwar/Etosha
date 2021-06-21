import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {
  Text,
  Button,
  Layout,
  List,
  Input,
  Card
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';

import Cart from './../../assets/SVg/CartIcon'
import { COLORS, fontsFamily, SIZES } from '../../constants';



import {NearByReturent} from '../../model/ResturantDishData'
import StarIcon from '../../assets/SVg/Star';
import ClockIcon from '../../assets/SVg/Clock';




export default function SearchScreen({navigation}) {


const [index,setIndex] =React.useState(1);


  const RanderFoods=({item})=>{
    return(
      <TouchableOpacity
      style={{
        paddingBottom:10, 
        width: SIZES.width/2.25,
        marginTop:10,
        marginHorizontal:10,
        borderRadius: 30,
        backgroundColor: '#fff',     
      }}
      onPress={()=>navigation.navigate("FoodPage")}
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
       
        <View
          style={{
              marginLeft: 10,  
              backgroundColor:COLORS.primary,
              width:70,borderRadius:20,
              alignSelf:'center',
              marginTop:-10,
              justifyContent:"center",alignItems:'center'
            }}
          >
          <Text
            style={{
              marginLeft: 10,
              fontFamily: 'Poppins-Regular',
              fontSize: 15,
              textAlign:'center',
              color:'#fff'
              
              
            }}>
            $ {item.price}
          </Text>
          </View>
      <View>
        <Text style={{marginLeft: 10, marginVertical: 5,fontSize:20}} appearance="hint">
          Burger King
        </Text>
        
        <View style={{flexDirection: 'row'}}>
         <View style={{height: 20, width: 20, marginLeft: 10}}>
         <StarIcon />
         </View>
          <Text appearance="hint" style={{marginLeft: 5}}>
            4.6
          </Text>
          <View style={{height: 20, width: 20, marginLeft: 10}}>
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

 const renderResturent = () =>{
     return(
         <Card
         style={{borderRadius:20,
         marginHorizontal:20}}
         onPress={()=>navigation.navigate("ResturentProfile")}
         >
         <Text category='h6'>McDonald's</Text>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <Image source={{uri:"https://c.ndtvimg.com/2020-01/dd46j918_chilli-chicken_625x300_21_January_20.jpg"}} style={{
             height:170,width:160,borderRadius:20,marginRight:5
         }} />
         <View style={{marginLeft:5}}>
         <Image source={{uri:"https://c.ndtvimg.com/2020-01/dd46j918_chilli-chicken_625x300_21_January_20.jpg"}} style={{
             height:80,width:110,borderRadius:20,margin:2
         }} />
         <View style={{
             height:80,width:110,borderRadius:20,margin:2,justifyContent:'center',alignItems:'center'
         }}>
         <Image source={{uri:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"}} 
         style={{
             height:80,width:110,borderRadius:20,opacity:0.5
         }} />
         <Text style={{position:'absolute',fontSize:20,color:"#fff",backgroundColor:"#000",opacity:0.8,borderRadius:50}} >19+</Text>
         </View>
         </View>
         </View>
         </Card>
     )
 }
    return (
        <Layout style={{flex: 1, backgroundColor: '#F7F9FC',}}>
              <StatusBar />
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
          Search{' '}
          
        </Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={{marginLeft:10}} 
      onPress={()=>navigation.navigate("FilterSearch")}
      >
      <Icon name="filter-outline" size={25} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:10}}
      onPress={()=>navigation.navigate("Cart")}
      >

      <Cart />
      <Text style={{fontSize:10,backgroundColor:COLORS.primary,borderRadius:50,width:15,height:15,textAlign:'center',position:'absolute',right:-5,top:-5,color:'#fff'}}>5</Text>
      </TouchableOpacity>
      
      </View>
    </View>
{/* Search input field */}
    <View
        style={{
          backgroundColor: '#F6F6F6',
          flexDirection: 'row',
          height: 50,
          marginHorizontal: 20,
          marginTop: 20,
          marginBottom:2,
          alignItems: 'center',
                 
          borderColor: '#D7D9DB',
          borderRadius: 10,
        }}
        
        >
        <Input
        style={{
          backgroundColor: '#F6F6F6',
          marginRight: 10,   
          borderRadius: 10,
          flex:9
        }}
        size="large"
         />
        <View
          status="primary"
          style={{
            height: 50,
            width: 50,
            backgroundColor: COLORS.primary,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="search" size={25} color={COLORS.white} />
        </View>
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,marginHorizontal:20}}>

          <Button size="giant" style={{width:150,borderRadius:40}} onPress={()=>setIndex(1)} status={index!==1?"info":"primary"} >
             <Text style={{...fontsFamily.Light,color:index==1? COLORS.white : COLORS.black}} >Foods</Text> 
          </Button>
          <Button size="giant" style={{width:150,borderRadius:40}} onPress={()=>setIndex(2)} status={index!==2?"info":"primary"} >
            <Text style={{...fontsFamily.Light,color:index==2? COLORS.white : COLORS.black}} >Resturants</Text>   
          </Button>
      </View>

     </View>
 
    
    {index===1?(<List 
       data={NearByReturent}
       keyExtractor={(item)=>item.id}
       renderItem={RanderFoods}
       numColumns={2}
       ListFooterComponent={()=>(<View style={{height:60,width:"100%"}} />)}
      
     />):null}
    
    {index===2?(
        <List 
       data={NearByReturent}
       keyExtractor={(item)=>item.id}
       renderItem={renderResturent}
       
       ListFooterComponent={()=>(<View style={{height:60,width:"100%"}} />)}
      
     />):null}

     
            
        </Layout>
    )
}
const styles=StyleSheet.create({
  tags:{marginLeft: 5,marginHorizontal:30,backgroundColor:"#D7D9DB",borderRadius:10,paddingHorizontal:10},

})