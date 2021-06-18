import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import {Text, Button, Layout, Avatar, Input} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import Star from 'react-native-vector-icons/AntDesign';
import Comment from 'react-native-vector-icons/MaterialCommunityIcons';
import Arrow from '../../assesst/Icon/arrowBack.svg';
import {Header} from '@react-navigation/stack';
import Person from '../../assesst/Icon/person.svg';
import {heightToDp, widthToDp} from '../../Utils/Responsive';
import EmailSvg from '../../assesst/Icon/email.svg';
import {Directions, } from 'react-native-gesture-handler';




export default function Review({navigation,route}) {
  const [commentMessage, setComment] = React.useState('');
  const [ImagePath, SetImagePath] = React.useState(
    require('../../assesst/2star.png'),
  );
  const [Rating, setRating] = React.useState(1);

React.useEffect(() => {
  let {rating} = route.params;
  console.log(rating)
  switch(rating)
  {
    case 1:
      {setRating(1);
      SetImagePath(require('../../assesst/2star.png'));}
      break;
    case 2:
      {
        setRating(2);
        SetImagePath(require('../../assesst/2star.png'));
      }
      break;
    case 3:
      {
        setRating(3);
        SetImagePath(require('../../assesst/4star.png'));
      }
      break;
    case 4:
      {
        setRating(4);
        SetImagePath(require('../../assesst/4star.png'));
      }
      break;
    case 5:
      {
        setRating(5);
        SetImagePath(require('../../assesst/5star.png'));
      }
      break;
    default:
      {
       alert("error" + typeof(rating))
      }break;

  }
}, [route])


  return (
    <View
      behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
      style={styles.conTainer}>
      <ScrollView style={[styles.conTainer,]}>
        <StatusBar />
        <View>
          <View style={styles.header}>
            <View style={styles.headerFlex}>
              <TouchableOpacity
                style={styles.MenueBtn}
                onPress={() => navigation.goBack()}>
                <Arrow />
              </TouchableOpacity>
              <Text style={styles.ScreenTitle}>My Reviews</Text>
            </View>
          </View>
          {/* Search input field */}
        </View>

      <View style={{justifyContent:'space-between',height:heightToDp(90)}}>
         <View>
         <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              fontFamily: 'Poppins-Light',
            }}>
            Your client rated {'\n'}you {Rating} stars.
          </Text>

          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              fontFamily: 'Poppins-Light',
              marginTop:5,
              width:200,
              alignSelf:'center'
            }}>
            "{route.params.message}"
          </Text>
         </View>
          <View>
            <Image source={ImagePath} style={{alignSelf: 'center'}} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginHorizontal: 80,
            }}>
            <View>
              <Icon
                name="star"
                size={30}
                color={Rating >= 1 ? '#FFA904' : '#D7D9DB'}
              />
            </View>
            <View>
              <Icon
                name="star"
                size={30}
                color={Rating >= 2 ? '#FFA904' : '#D7D9DB'}
              />
            </View>
            <View>
              <Icon
                name="star"
                size={30}
                color={Rating >= 3 ? '#FFA904' : '#D7D9DB'}
              />
            </View>
            <View>
              <Icon
                name="star"
                size={30}
                color={Rating >= 4 ? '#FFA904' : '#D7D9DB'}
              />
            </View>
            <View>
              <Icon
                name="star"
                size={30}
                color={Rating >= 5 ? '#FFA904' : '#D7D9DB'}
              />
            </View>
          </View>
        
      <View>
      <Button
          style={[
            {
              marginHorizontal: 10,
              height: 50,
              borderRadius: 30,
              marginTop: 25,
              marginTop: -10,
            },
            styles.shadow,
          ]}
          onPress={() => navigation.popToTop()}>
          GoBack
        </Button>

     
       
      </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  Container: {flex: 1, backgroundColor: '#F7F9FC'},
  headerFlex: {flexDirection: 'row', alignItems: 'center'},
  MenueBtn: {
    height: 40,
    width: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#D7D9DB',
  },
  ScreenTitle: {marginLeft: 10, fontFamily: 'Poppins-Light'},

  ProfileImage: {height: 100, width: 100, borderRadius: 10},
  InputContainer: {
    height: 60,
    borderColor: '#D7D9DB',
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 17,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  InputSubContainer: {
    borderRightWidth: 1,
    width: 60,
    height: 54,
    marginVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#D7D9DB',
  },

  shadow: {
    shadowColor: '#F24F04',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 10,
  },
});
