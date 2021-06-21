import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  FlatList
} from 'react-native';
import {
  Text,
  Button,
  Layout,
  List,
  StyleService,
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';;
import { COLORS, SIZES } from '../../constants';
import StarIcon from '../../assets/SVg/Star';
import ClockIcon from '../../assets/SVg/Clock';
import CycleIcon from '../../assets/SVg/CycleIcon';



const CategoryData = [
    {
      id: '1',
      CatName: 'Food',
      isSelected:true
    },
    {
      id: '2',
      CatName: 'Juice',
      isSelected:false
    },
    {
      id: '3',
      CatName: 'Dessert',
      isSelected:false
    },
  ];

  const PopularFoods = [
    {
      id: '1',
      FoodName: 'Shrimps and Arugula',
      img: require('./../../assets/DummyImages/dish.jpg'),
      price: 200.0,
      Rating: 4.9,
      Time: '20 min',
    },
    {
      id: '2',
      FoodName: 'Shrimps and Arugula',
      img: require('./../../assets/DummyImages/popularFood.png'),
  
      price: 200.0,
      Rating: 4.9,
      Time: '20 min',
    },
   
  ];





export default function ResturentProfile({navigation}) {

  const [isSelected,setisSelected] = React.useState("Food")
  const rendertags = ({item}) => {
    return (
      <Text appearance="hint" style={styles.tags}>
        {item.tag}
      </Text>
    );
  };

  const renderCat = ({item}) => {
      
    return (
      <TouchableOpacity style={{height:50,width:100,marginHorizontal:10,
      backgroundColor:item.CatName==isSelected?"#F24F04":"#fff"
      ,justifyContent:'center',alignItems:'center',borderRadius:40}}
      onPress={()=>navigation.navigate("FoodCategory",{CategoryName:item.CatName})}
      >
          <Text style={{fontSize:18,color:item.isSelected?"#fff":"#000"}}>{item.CatName}</Text>
      </TouchableOpacity>
    );
  };

  const renderPopularFood = ({item}) => {
    return (
      <View
        style={{
          height: 220, 
          width: SIZES.width/2.4,
          margin: 15,
          borderRadius: 30,
          backgroundColor: '#fff',
          paddingBottom:20,
        }}>
        
          <Image
            source={item.img}
            style={{height: 130, width: SIZES.width/2.4, borderRadius: 30}}
          />
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
              color:"#fff"
              
            }}>
            $ {item.price}
          </Text>
          </View>
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
        
        <View>
          <Text style={{marginLeft: 10, marginVertical: 5}} appearance="hint">
            {item.FoodName}
          </Text>
          
          <View style={{flexDirection: 'row'}}>
            <View style={{height: 20, width: 20, marginLeft: 10}}>
            <StarIcon />
            </View>
            <Text appearance="hint" style={{marginLeft: 5}}>
              {item.Rating}
            </Text>
            <View style={{height: 20, width: 20, marginLeft: 10}}>
               <ClockIcon />
            </View>
           
            <Text appearance="hint" style={{marginLeft: 5}}>
              {item.Time}
            </Text>
          </View>
        </View>
      </View>
    );
  };




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

<TouchableOpacity onPress={()=>navigation.navigate("FoodMap")}>

<Layout
        style={{
         
          borderRadius: 30,
          top: -30,
          marginHorizontal: 20,
          paddingVertical:20
        }}>
        <View>
          <Image
            source={require('../../assets/DummyImages/Burgerking.png')}
            style={{
              height: 60,
              width: 60,
              borderRadius: 50,
              alignSelf: 'center',
              marginTop: -40,
            }}
          />
        </View>

        <Text category="h4" style={{textAlign: 'center'}}>
          Burger King
        </Text>
        <Text style={{textAlign: 'center'}} appearance="hint">42 Riverside St.Norcross,{"\n"}GA 30092</Text>
        <View
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            backgroundColor: '#F24F04',
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
            color="#fff"
          />
        </View>

        <View style={{marginHorizontal: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical:5}}>
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
            <View style={{height: 20, width: 30, marginLeft: 10}}>
               <CycleIcon />
            </View>
            
            <Text appearance="hint" style={{marginLeft: 5}}>
              Free Delivery
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <List
              data={[
                {id: '1', tag: 'Foods'},
                {id: '2', tag: 'Buger'},
                {id: '3', tag: 'Pizza'},
              ]}
              style={{backgroundColor:'#fff'}}
              horizontal
              keyExtractor={item => item.id}
              renderItem={rendertags}
            />
          </View>
        </View>
      </Layout>
   
</TouchableOpacity>

         <View>
        <FlatList
          data={CategoryData}
          
          keyExtractor={item => item.id}
          renderItem={renderCat}
          horizontal
        />
      </View>




      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          justifyContent: 'space-between',
          marginVertical:10,
        }}>
        <Text style={{fontFamily: 'Poppins-Regular'}}>Popular Foods</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("popularFood")}>
          <Text style={{fontFamily: 'Poppins-Regular'}} appearance="hint">
            View All
          </Text>
        </TouchableOpacity>
      </View>
    

      <FlatList
        data={PopularFoods}
        keyExtractor={item => item.id}
        renderItem={renderPopularFood}
        horizontal
      />




        <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
         justifyContent:'space-between',          
          
        }}>
        <Text style={{fontFamily: 'Poppins-Regular'}}>Best Seller</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("nearbyResturen")}>
          <Text style={{fontFamily: 'Poppins-Regular'}} appearance="hint">
            View All
          </Text>
        </TouchableOpacity>
      </View>


      <View
        style={{
          
          
          margin: 10,
          borderRadius: 30,
          backgroundColor: '#fff',
          paddingBottom:10
        }}>
        
          <Image
            source={require('./../../assets/DummyImages/dish.jpg')}
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
          <Text style={{marginLeft: 10, marginVertical: 5,fontSize:20}} >
            Burger King
          </Text>
          <Text
            style={{
              marginLeft: 10,
              fontFamily: 'Poppins-Regular',
              fontSize: 20,
            }}
            appearance="hint"
            >
            $ 45.00
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
      </View>
    


      <View style={{height: 60, width: '100%'}} />
    </ScrollView>
  );
}

const styles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
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
  tags: {
    marginHorizontal: 3,
    backgroundColor: '#D7D9DB',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});
