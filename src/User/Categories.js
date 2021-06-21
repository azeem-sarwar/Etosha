import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  FlatList,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {
  Text,
  Layout
} from '@ui-kitten/components';

import CartIcon from './../../assets/SVg/CartIcon';
import Icon from 'react-native-vector-icons/Ionicons'
import {CategoryData} from '../../model/CategoryDate'

import { COLORS } from '../../constants';
const width = Dimensions.get('screen').width;







export default function Categories({navigation,route}) {




  const renderResturent=({item})=>{
    return(
      <TouchableOpacity
      style={{
         
        width: width-20,
        
        marginHorizontal:10,
        borderRadius: 30,
        backgroundColor: '#fff',
        marginTop:20,
        flexDirection:'row',
        paddingHorizontal:10,
        paddingVertical:20,
        alignItems:'center',
        elevation:10,
       
      }}
      onPress={()=>navigation.navigate("FoodCategory",{CategoryName:item.CatName})}
      >
      
       <Image source={item.img} style={{height:60,width:60,borderRadius:10,marginRight:10}} />
       <Text style={{fontSize:15}}>{item.CatName}</Text>
      
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
         
          Categories
          
        </Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={{marginLeft:10}}
      onPress={()=>navigation.goBack()}
      >
      <Icon name="search" size={25} color={COLORS.black} />
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:10}}>

      <CartIcon />
      <Text style={{fontSize:10,backgroundColor:COLORS.primary,color:COLORS.white,borderRadius:50,width:15,height:15,textAlign:'center',position:'absolute',right:-5,top:-5}}>5</Text>
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
       data={CategoryData}
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