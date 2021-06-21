import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,

  ScrollView
} from 'react-native';
import {
  Text,
  Button,
  Layout,
  List,
 
  Card,
  StyleService,
  Avatar,
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';


import { heightToDp, widthToDp } from '../../Utils/Responsive';
import { COLORS, FONTS } from '../../constants';
import StarIcon from '../../assets/SVg/Star';
import {Ingradientsdata} from '../../model/Ingradientsdata'




export default function FoodPage({navigation}) {

    const rederIngradients=({item})=>{
        console.log('item')
        return(
            <Card style={{justifyContent:'center',alignItems:'center',marginHorizontal:10,backgroundColor:'#fff',borderRadius:20}}>
                <Image source={item.img} style={{height:heightToDp(4),width:widthToDp(20)}} />
                <Text style={{textAlign:'center'}}>{item.name}</Text>
            </Card>
        )
    }
  return (
    <ScrollView styles={styles.container}>
      <StatusBar />
      <Image
        source={require('../../assets/DummyImages/dish.jpg')}
        style={{height: 200, width: '100%'}}
      />

      <TouchableOpacity
        style={styles.goBackBtn}
        onPress={() => navigation.goBack()}>
        <Icon name="chevron-back" size={25} color={COLORS.black} />
      </TouchableOpacity>

      <Layout
        style={{borderTopLeftRadius: 30, borderTopRightRadius: 30, top: -30}}>
        <Layout
          style={{
            width: 170,
            height: 40,
            borderRadius: 30,
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: 10,
            backgroundColor: '#fff',
            top: -15,
            marginLeft: 30,
            borderColor: '#D7D9DB',
            borderWidth: 0.5,
          }}>
          <Avatar
            style={{left: 10}}
            size="tiny"
            source={require('../../assets/DummyImages/profilePic.png')}
          />
          <Avatar
            style={{left: 5}}
            size="tiny"
            source={require('../../assets/DummyImages/dish.jpg')}
          />
          <Avatar
            style={{}}
            size="tiny"
            source={require('../../assets/DummyImages/profilePic.png')}
          />
          <View style={{marginLeft: 10}}>
            <StarIcon />
          </View>

          
          <Text>4.9</Text>
        </Layout>

        <View
          style={{
            position: 'absolute',
            top: -15,
            right: 40,
            backgroundColor: '#fff',
            borderRadius: 50,
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 0.5,
            borderColor: '#D7D9DB',
          }}>
          <Icon
            onPress={() => alert('heart icon is pressed')}
            name="heart"
            size={25}
            color="#F24F04"
          />
        </View>

        <Text
          style={{
            marginLeft: 20,
            marginTop: 20,
            fontSize: 18,
            fontFamily: 'Poppins-Light',
          }}>
          Rice With Green Peas
          {'\n'}And Shrimps
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginVertical: 10,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20}}>$45.00</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginRight: 20,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                height: 30,
                width: 30,
                borderRadius: 50,
                marginHorizontal: 5,
                borderColor: '#000',
                borderWidth: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text style={{margin: 5}}>2</Text>
            <TouchableOpacity
              style={{
                height: 30,
                width: 30,
                borderRadius: 50,
                marginHorizontal: 5,
                marginHorizontal: 5,
                borderColor: '#F24F04',
                borderWidth: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text status="primary">+</Text>
            </TouchableOpacity>
          </View>
        </View>




        <Text
          style={{
            marginLeft: 20,
            marginTop: 20,
            fontSize: 16,
            fontFamily: 'Poppins-Light',
          }}>
          Portion
        </Text>



        <View style={{flexDirection:'row',marginHorizontal:20,justifyContent:'space-between',marginVertical:20}}>
        <Button style={{borderColor:'#D7D9DB'}} status="info">
          <Text style={{...FONTS.body4}}>Small</Text>
        </Button>
        <Button style={{borderColor:'#D7D9DB'}} >
          <Text style={{...FONTS.body4,color:COLORS.white}}>
          Medium
          </Text>
        </Button>
        <Button style={{borderColor:'#D7D9DB'}} status="info">
          <Text style={{...FONTS.body4}}>Large</Text>
        </Button>

        
        </View>

        <Text
          style={{
            marginLeft: 20,
            marginTop: 20,
            fontSize: 16,
            fontFamily: 'Poppins-Light',
          }}>
         Ingredients
        </Text>

        
<List 
       data={Ingradientsdata}
       keyExtractor={(item)=>item.id}
       renderItem={rederIngradients}
       horizontal
       style={{backgroundColor:"#fff"}}
      
     />

     <Button style={{height:60,marginHorizontal:20,borderRadius:20,marginVertical:20}}>
         Add to Cart
     </Button>

        
      </Layout>
      <View style={{height:20,width:'100%'}} />
    </ScrollView>
  );
}

const styles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  goBackBtn: {
    height: 40,
    width: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#D7D9DB',
    position: 'absolute',
    backgroundColor: '#fff',
    top: 20,
    left: 10,
  },
});
