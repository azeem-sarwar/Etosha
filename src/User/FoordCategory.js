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
import Arrow from '../../assesst/Icon/arrowBack.svg';
import Search from '../../assesst/Icon/SearchBlack.svg';
import Cart from './../../assesst/Icon/Cart.svg'
const width = Dimensions.get('screen').width;



const NearByReturent = [
  {
    id: '1',
    FoodName: 'Shrimps and Arugula',
    img: require('./../../assesst/dish.jpg'),
    price: 200.0,
    Rating: 4.9,
    Time: '20 min',
    tags:[{id:"1",tag:"Foods"},{id:"2",tag:"Buger"},{id:"3",tag:"Pizza"}]
  },
  {
    id: '2',
    FoodName: 'Shrimps and Arugula',
    img: require('./../../assesst/popularFood.png'),

    price: 200.0,
    Rating: 4.9,
    Time: '20 min',
    tags:[{id:"1",tag:"Foods"},{id:"2",tag:"Buger"},{id:"3",tag:"Pizza"}]

  },
  {
    id: '3',
    FoodName: 'Shrimps and Arugula',
    img: require('./../../assesst/popularFood.png'),

    price: 200.0,
    Rating: 4.9,
    Time: '20 min',
    tags:[{id:"1",tag:"Foods"},{id:"2",tag:"Buger"},{id:"3",tag:"Pizza"}]

  },
  {
    id: '4',
    FoodName: 'Shrimps and Arugula',
    img: require('./../../assesst/dish.jpg'),
    price: 200.0,
    Rating: 4.9,
    Time: '20 min',
    tags:[{id:"1",tag:"Foods"},{id:"2",tag:"Buger"},{id:"3",tag:"Pizza"}]
  },
  {
    id: '5',
    FoodName: 'Shrimps and Arugula',
    img: require('./../../assesst/popularFood.png'),

    price: 200.0,
    Rating: 4.9,
    Time: '20 min',
    tags:[{id:"1",tag:"Foods"},{id:"2",tag:"Buger"},{id:"3",tag:"Pizza"}]

  },
  {
    id: '6',
    FoodName: 'Shrimps and Arugula',
    img: require('./../../assesst/popularFood.png'),

    price: 200.0,
    Rating: 4.9,
    Time: '20 min',
    tags:[{id:"1",tag:"Foods"},{id:"2",tag:"Buger"},{id:"3",tag:"Pizza"}]

  },
];




export default function FoodCategory({navigation,route}) {

let ScreenName= route.params.CategoryName;


  const renderResturent=({item})=>{
    return(
      <TouchableOpacity
      style={{
         
        width: width-20,
        
        marginHorizontal:10,
        borderRadius: 30,
        backgroundColor: '#fff',
        marginTop:20,
        flexDirection:'row'
       
      }}
      onPress={()=>navigation.navigate('FoodPage')}
      >
      
       <View>
       <Image
          source={item.img}
          style={{height: 170, width: width/2.6, borderRadius: 30}}
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
       </View>
       
      
      <View style={{flexShrink: 1}}>
        <Text style={{marginLeft: 10, marginVertical: 10,fontSize:15,}} >
          {item.FoodName}
        </Text>
        <Text style={{marginLeft: 10, marginVertical: 10,fontSize:10}} appearance="hint" >
          Fresh Foods
        </Text>
        
        <View style={{flexDirection: 'row',marginVertical: 10}}>
          <Image
            source={require('../../assesst/Icon/Star.png')}
            style={{height: 20, width: 20, marginLeft: 10}}
          />
          <Text appearance="hint" style={{marginLeft: 5}}>
            {item.Rating}
          </Text>
          <Image
            source={require('../../assesst/Icon/Clock.png')}
            style={{height: 20, width: 20, marginLeft: 10}}
          />
          <Text appearance="hint" style={{marginLeft: 5}}>
            {item.Time}
          </Text>
        </View>
        <View
          style={{
              marginLeft: 10,  
              backgroundColor:'#F24F04',
              width:70,borderRadius:20,
              marginVertical:10,
              justifyContent:"center",alignItems:'center'
             
            }}
          >
          <Text
            style={{
              
              fontFamily: 'Poppins-Regular',
              fontSize: 15,
              color:"#fff"
              ,textAlign:'center'
              
            }}>
            $ 40.00
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
          <Arrow />
        </TouchableOpacity>
        <Text style={{marginLeft: 5,fontFamily:'Poppins-Light'}}>
         
          {ScreenName}
          
        </Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={{marginLeft:10}}
      onPress={()=>navigation.navigate("Search")}
      >
      <Search  />
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:10}}>

      <Cart />
      <Text style={{fontSize:10,backgroundColor:'#F24F04',borderRadius:50,width:15,height:15,textAlign:'center',position:'absolute',right:-5,top:-5}}>5</Text>
      </TouchableOpacity>
      
      </View>
    </View>

    


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
    
     

     
    <View style={{height: 60, width: '100%'}} />
        </Layout>
    )
}
const styles=StyleSheet.create({
  tags:{marginLeft: 5,marginHorizontal:30,backgroundColor:"#D7D9DB",borderRadius:10,paddingHorizontal:10},

})