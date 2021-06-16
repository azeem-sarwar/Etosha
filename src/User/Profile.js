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
  Card,
  Avatar,
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Arrow from '../../assesst/Icon/arrowBack.svg';
import { fontsFamily } from '../../constants';

const width = Dimensions.get('screen').width;

const NearByReturent = [
  {
    id: '1',
    FoodName: 'Shrimps and Arugula',
    img: require('./../../assesst/dish.jpg'),
    price: 200.0,
    Rating: 4.9,
    Time: '20 min',
    tags: [
      {id: '1', tag: 'Foods'},
      {id: '2', tag: 'Buger'},
      {id: '3', tag: 'Pizza'},
    ],
  },
  {
    id: '2',
    FoodName: 'Shrimps and Arugula',
    img: require('./../../assesst/popularFood.png'),

    price: 200.0,
    Rating: 4.9,
    Time: '20 min',
    tags: [
      {id: '1', tag: 'Foods'},
      {id: '2', tag: 'Buger'},
      {id: '3', tag: 'Pizza'},
    ],
  },
  {
    id: '3',
    FoodName: 'Shrimps and Arugula',
    img: require('./../../assesst/popularFood.png'),

    price: 200.0,
    Rating: 4.9,
    Time: '20 min',
    tags: [
      {id: '1', tag: 'Foods'},
      {id: '2', tag: 'Buger'},
      {id: '3', tag: 'Pizza'},
    ],
  },
  {
    id: '4',
    FoodName: 'Shrimps and Arugula',
    img: require('./../../assesst/dish.jpg'),
    price: 200.0,
    Rating: 4.9,
    Time: '20 min',
    tags: [
      {id: '1', tag: 'Foods'},
      {id: '2', tag: 'Buger'},
      {id: '3', tag: 'Pizza'},
    ],
  },
  {
    id: '5',
    FoodName: 'Shrimps and Arugula',
    img: require('./../../assesst/popularFood.png'),

    price: 200.0,
    Rating: 4.9,
    Time: '20 min',
    tags: [
      {id: '1', tag: 'Foods'},
      {id: '2', tag: 'Buger'},
      {id: '3', tag: 'Pizza'},
    ],
  },
  {
    id: '6',
    FoodName: 'Shrimps and Arugula',
    img: require('./../../assesst/popularFood.png'),

    price: 200.0,
    Rating: 4.9,
    Time: '20 min',
    tags: [
      {id: '1', tag: 'Foods'},
      {id: '2', tag: 'Buger'},
      {id: '3', tag: 'Pizza'},
    ],
  },
];

export default function Profile({navigation}) {
  const [index, setIndex] = React.useState(1);

  const RanderFoods = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.renderFoodCard}
        onPress={() => navigation.navigate('FoodPage')}>
        <Image
          source={require('./../../assesst/dish.jpg')}
          style={styles.renderFoodCardImage}
        />
        <View
          style={styles.heartIcon}>
          <Icon
            onPress={() => alert('heart icon is pressed')}
            name="heart"
            size={25}
            color="#F24F04"
          />
        </View>

        <View
          style={styles.priceTagStyle}>
          <Text
            style={styles.priceTagtxt}>
            $ {item.price}
          </Text>
        </View>
        <View>
          <Text
            style={styles.FoodTitle}
            >
            Burger King
          </Text>

          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assesst/Icon/Star.png')}
              style={styles.ImageIcon}
            />
            <Text appearance="hint" style={{marginLeft: 5}}>
              4.6
            </Text>
            <Image
              source={require('../../assesst/Icon/Clock.png')}
              style={styles.ImageIcon }
            />
            <Text appearance="hint" style={{marginLeft: 5}}>
              30 Min
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const Headers=()=>(
    <View>
    <View
      style={styles.header}>
      <View style={styles.headerFlex}>
        <TouchableOpacity
          style={styles.MenueBtn}
          onPress={() => navigation.goBack()}>
          <Arrow />
        </TouchableOpacity>
        <Text style={styles.ScreenTitle}>
          Profile
        </Text>
      </View>
    </View>
    {/* Search input field */}

    <View style={{margin: 20, alignItems: 'center'}}>
      <Avatar
        source={require('./../../assesst/48061.png')}
        style={styles.ProfileImage}
      />
      <Text
        style={styles.NameTxt}>
        Dwayne Johnson
      </Text>
      <Text
        style={styles.addressTxt}
        appearance="hint">
        47 W 13th St, New York, NY{'\n'}
        10011, USA
      </Text>
      <View style={styles.ProfileEditTag}>
        <Text style={{marginHorizontal: 20}}>Edit Profile</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("EditProfile")} 
        ><FontAwesome name="edit" size={18} color="#F24F04" /></TouchableOpacity>
      </View>
    </View>

    <View
      style={styles.ButtonContainer}>
      <Button
        size="giant"
        style={{width: 150, borderRadius: 40}}
        onPress={() => setIndex(1)}
        status={index !== 1 ? 'info' : 'primary'}>
        <Text style={{color:index == 1 ?"#Fff":"#000",...fontsFamily.Light}}>Favourite</Text>
      </Button>
      <Button
        size="giant"
        style={{width: 150, borderRadius: 40}}
        onPress={() => setIndex(2)}
        status={index !== 2 ? 'info' : 'primary'}>
        <Text style={{color:index == 2 ?"#Fff":"#000",...fontsFamily.Light}}>Settings</Text>
      </Button>
    </View>
  </View>

  )

  return (
    <Layout style={styles.conTainer}>
      <StatusBar />
    
      {index === 1 ? (
        <List
        ListHeaderComponent={Headers}
          data={NearByReturent}
          keyExtractor={item => item.id}
          renderItem={RanderFoods}
          numColumns={2}
          ListFooterComponent={() => (
            <View style={{height: 60, width: '100%'}} />
          )}
        />
      ) : null}

      {index === 2 ? Headers() : null}
    </Layout>
  );
}
const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
      },
    Container:{flex: 1, backgroundColor: '#F7F9FC'},
    headerFlex:{flexDirection: 'row', alignItems: 'center'},
    MenueBtn:{
        height: 40,
        width: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#D7D9DB',
      },
      ScreenTitle:{marginLeft: 5, fontFamily: 'Poppins-Light'},
renderFoodCard:{
    paddingBottom: 10,
    width: width / 2.25,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 30,
    backgroundColor: '#fff',
  } ,
  NameTxt:{
    fontSize: 17,
    marginVertical: 5,
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
  },
  addressTxt:{
    fontSize: 10,
    marginVertical: 5,
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
  },
  ProfileImage:{height: 100, width: 100, borderRadius: 10},
  ProfileEditTag:{flexDirection: 'row', alignItems: 'center'},
  tags: {
    marginLeft: 5,
    marginHorizontal: 30,
    backgroundColor: '#D7D9DB',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  ButtonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginHorizontal: 20,
  },
  renderFoodCardImage:{height: 150, width: width / 2.25, borderRadius: 30},
  heartIcon:{
    position: 'absolute',
    top: 10,
    right: 15,
    backgroundColor: '#fff',
    borderRadius: 50,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceTagStyle:{
    marginLeft: 10,
    backgroundColor: '#F24F04',
    width: 70,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceTagtxt:{
    marginLeft: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
  },
  FoodTitle:{marginLeft: 10, marginVertical: 5, fontSize: 20},
  ImageIcon:{height: 20, width: 20, marginLeft: 10},
});
