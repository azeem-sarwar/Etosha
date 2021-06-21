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
import Comment from 'react-native-vector-icons/MaterialCommunityIcons';
import {heightToDp, widthToDp} from '../../Utils/Responsive';

import { COLORS } from '../../constants';



const useFocus = () => {
  const htmlElRef = React.useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };
  return [htmlElRef, setFocus];
};

export default function EtoshaReviews({navigation}) {
  const [commentMessage, setComment] = React.useState('');
  const [ImagePath, SetImagePath] = React.useState(
    require('../../assets/DummyImages/2star.png'),
  );
  const [Rating, setRating] = React.useState(1);

  const [avoidginView, setAviodingView] = React.useState(false);


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
      // keyboardVerticalOffset={Header.HEIGHT+20}
      style={[styles.conTainer]}>

    <StatusBar />
        <View>
          <View style={styles.header}>
            <View style={styles.headerFlex}>
              <TouchableOpacity
                style={styles.MenueBtn}
                onPress={() => navigation.goBack()}>
                  <Icon name="chevron-back" size={25} color={COLORS.black} />
              </TouchableOpacity>
              <Text style={styles.ScreenTitle}>Review</Text>
            </View>
          </View>
         
        </View>

      <View style={{justifyContent:'space-between',height:heightToDp(90)}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              fontFamily: 'Poppins-Light',
            }}>
            Rate your experience {'\n'}with Etosha.com
          </Text>
          <View>
            <Image source={ImagePath} style={{alignSelf: 'center'}} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginHorizontal: 80,
            }}>
            <TouchableOpacity
              onPress={() => {
                setRating(1);
                SetImagePath(require('../../assets/DummyImages/2star.png'));
              }}>
              <Icon
                name="star"
                size={30}
                color={Rating >= 1 ? '#FFA904' : '#D7D9DB'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setRating(2);
                SetImagePath(require('../../assets/DummyImages/2star.png'));
              }}>
              <Icon
                name="star"
                size={30}
                color={Rating >= 2 ? '#FFA904' : '#D7D9DB'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setRating(3);
                SetImagePath(require('../../assets/DummyImages/2star.png'));
              }}>
              <Icon
                name="star"
                size={30}
                color={Rating >= 3 ? '#FFA904' : '#D7D9DB'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setRating(4);
                SetImagePath(require('../../assets/DummyImages/4star.png'));
              }}>
              <Icon
                name="star"
                size={30}
                color={Rating >= 4 ? '#FFA904' : '#D7D9DB'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setRating(5);
                SetImagePath(require('../../assets/DummyImages/2star.png'));
              }}>
              <Icon
                name="star"
                size={30}
                color={Rating >= 5 ? '#FFA904' : '#D7D9DB'}
              />
            </TouchableOpacity>
          </View>
        
      <View>
      <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 30}}>
          <Comment name="comment" size={25} color="#000" />
          <Text>Add a comment</Text>
        </View>

        <Input
          value={commentMessage}
          multiline={true}
          OnFocus={() => setAviodingView(true)}
          onBlur={() => setAviodingView(false)}
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            marginHorizontal: 20,
          }}
          textStyle={{minHeight:100, borderTopLeftRadius: 20}}
          onChangeText={text => setComment(text)}
        />
        <Button
          style={[
            {
              marginHorizontal: 10,
              height: 50,
              borderRadius: 30,
              
              marginTop: -10,
            },
            styles.shadow,
          ]}
          onPress={() => navigation.goBack()}>
          Done
        </Button>
      </View>
        </View>

    </KeyboardAvoidingView>
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
  Container: {flex: 1, backgroundColor: COLORS.background},
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
