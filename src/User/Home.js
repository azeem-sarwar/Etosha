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
  Button
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import Menue from '../../assesst/Icon/menue.svg';
import Search from '../../assesst/Icon/search.svg';
const CategoryData = [
  {
    id: '1',
    CatName: 'Food',
    img: require('./../../assesst/categoryIcon/Burger.png'),
  },
  {
    id: '2',
    CatName: 'Juice',
    img: require('./../../assesst/categoryIcon/Juice.png'),
  },
  {
    id: '3',
    CatName: 'Dessert',
    img: require('./../../assesst/categoryIcon/IceCream.png'),
  },
];

const PopularFoods = [
  {
    id: '1',
    FoodName: 'Shrimps and Arugula',
    img: require('./../../assesst/dish.jpg'),
    price: 200.0,
    Rating: 4.9,
    Time: '20 min',
  },
  {
    id: '2',
    FoodName: 'Shrimps and Arugula',
    img: require('./../../assesst/popularFood.png'),

    price: 200.0,
    Rating: 4.9,
    Time: '20 min',
  },
  {
    id: '3',
    FoodName: 'Shrimps and Arugula',
    img: require('./../../assesst/popularFood.png'),

    price: 200.0,
    Rating: 4.9,
    Time: '20 min',
  },
];
const width = Dimensions.get('screen').width;

export default function Home({navigation}) {
  const [search, setSearch] = React.useState('');

  const renderCat = ({item}) => {
    return (
      <TouchableOpacity
      onPress={()=>navigation.navigate("FoodCategory",{CategoryName:item.CatName})}
        style={styles.CatContainer}>
        <View
          style={styles.CatImgsec}>
          <Image
            source={item.img}
            style={styles.CatIMg}
          />
          <Text style={{fontFamily: 'Poppins-Regular'}}>{item.CatName}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderPopularFood = ({item}) => {
    return (
      <View
        style={{
          height: 220, 
          width: width - 140,
          margin: 15,
          borderRadius: 30,
          backgroundColor: '#fff',
          
        }}>
        
          <Image
            source={item.img}
            style={{height: 130, width: width - 140, borderRadius: 30}}
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
        
        <View>
          <Text style={{marginLeft: 10, marginVertical: 5}} appearance="hint">
            {item.FoodName}
          </Text>
          <Text
            style={{
              marginLeft: 10,
              fontFamily: 'Poppins-Regular',
              fontSize: 20,
            }}>
            $ {item.price}
          </Text>
          <View style={{flexDirection: 'row'}}>
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
        </View>
      </View>
    );
  };



  const rendertags=()=>{
      return(
        <Text appearance="hint" style={styles.tags}>
        Burger
      </Text>
      )
  }



  return (
    <ScrollView style={{flex: 1, backgroundColor: '#F7F9FC'}}>
      {/* Header Sction */}
      <StatusBar />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          marginHorizontal: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
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
            onPress={()=>navigation.openDrawer()}
            >
            <Menue />
          </TouchableOpacity>
          <Text style={{marginLeft: 5, fontFamily: 'Poppins-Regular'}}>
            {' '}
            Home{' '}
          </Text>
        </View>
        <Image
          source={require('../../assesst/profilePic.png')}
          style={{height: 40, width: 40, borderRadius: 10}}
        />
      </View>

      {/* Search Bar input */}

      <TouchableOpacity
        style={{
          backgroundColor: '#F6F6F6',
          flexDirection: 'row',
          height: 50,
          marginHorizontal: 20,
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
          borderWidth: 0.5,
          borderColor: '#D7D9DB',
          borderRadius: 10,
        }}
        onPress={()=>navigation.navigate('Search')}
        >
        <Text
          style={{marginLeft: 10, fontFamily: 'Poppins-Regular'}}
          appearance="hint"
          >
          Search
        </Text>
        <View
          status="primary"
          style={{
            height: 50,
            width: 50,
            backgroundColor: '#F24F04',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Search />
        </View>
      </TouchableOpacity>

      {/* Catergory Section rander in horizental way */}

      <View>
        <FlatList
          data={CategoryData}
          style={{marginHorizontal: 5}}
          keyExtractor={item => item.id}
          renderItem={renderCat}
          horizontal
        />
      </View>

      {/* Popular food section */}

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          justifyContent: 'space-between',
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
        
      {/* Near By resturen */}
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
         justifyContent:'space-between',          
          
        }}>
        <Text style={{fontFamily: 'Poppins-Regular'}}>Nearby Resturent</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("nearbyResturen")}>
          <Text style={{fontFamily: 'Poppins-Regular'}} appearance="hint">
            View All
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 290, 
          width: width - 20,
          margin: 15,
          borderRadius: 30,
          backgroundColor: '#fff',
          marginBottom:80
        }}>
        
          <Image
            source={require('./../../assesst/dish.jpg')}
            style={{height: 200, width: width - 20, borderRadius: 30}}
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
          <Text style={{marginLeft: 10, marginVertical: 5,fontSize:20}} appearance="hint">
            Burger King
          </Text>
          
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assesst/Icon/Star.png')}
              style={{height: 20, width: 20, marginLeft: 10}}
            />
            <Text appearance="hint" style={{marginLeft: 5}}>
              4.6
            </Text>
            <Image
              source={require('../../assesst/Icon/Clock.png')}
              style={{height: 20, width: 20, marginLeft: 10}}
            />
            <Text appearance="hint" style={{marginLeft: 5}}>
              30 Min
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
           
            <FlatList 

            data={[{id:"1",tag:"Foods"},{id:"2",tag:"Buger"},{id:"3",tag:"Pizza"}]}
            horizontal
            keyExtractor={(item)=>item.id}
            renderItem={rendertags}
            />
            
             
          </View>
        </View>
      </View>
    
     
    </ScrollView>
  );
}
const styles=StyleSheet.create({
    tags:{marginLeft: 5,marginHorizontal:30,backgroundColor:"#D7D9DB",borderRadius:10,paddingHorizontal:10},
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