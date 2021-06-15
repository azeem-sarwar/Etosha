import React from 'react';
import {StyleSheet, View,TextInput} from 'react-native';
import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Input,
  Text,
  Toggle,
} from '@ui-kitten/components';
import FoofDeliverIcon from '../../assesst/Svg/CenterSvgIcon.svg';
import BottomLeftHand from '../../assesst/Svg/bottomLeftHand.svg';
import BottomRightHand from '../../assesst/Svg/bottomRightHand.svg';
import TopRightHand from '../../assesst/Svg/rightTopHand.svg';
import TopLefthand from '../../assesst/Svg/leftTopHand.svg';
import Etosha from '../../assesst/Svg/etosha.svg';
import Burger from '../../assesst/Svg/burger.svg';
import JuiceGlass from '../../assesst/Svg/juiceGlass.svg';
import Pizza from '../../assesst/Svg/Pizza.svg';
import EmailSvg from '../../assesst/Icon/email.svg';
import DropDownIcon from '../../assesst/Icon/DropDownIcon.svg';
import PhoneBook from '../../assesst/Icon/phoneBook.svg';


import {BlurView} from '@react-native-community/blur';
import {heightToDp, widthToDp} from '../../Utils/Responsive';

import Ionicons from 'react-native-vector-icons/Ionicons';

const HeartIcon = props => <Icon {...props} name="heart" />;
const AlertIcon = props => <Icon {...props} name="alert-circle-outline" />;



const useFocus = () => {
  const htmlElRef = React.useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };
  return [htmlElRef, setFocus];
};

export default function EnterOTp({navigation}) {
 
  const [nomber, setNumber] = React.useState('');
  
  const [f1, setf1] = useFocus();
  const [f2, setf2] = useFocus();

  const [f3, setf3] = useFocus();

  const [f4, setf4] = useFocus();


  
 

 

  return (
    <Layout style={styles.container}
    
    >
      <Layout style={{flex: 1, backgroundColor: '#F7F9FC'}}>
        <TopLefthand
          width={widthToDp(50)}
          height={heightToDp(25)}
          style={styles.TopLeftHand}
        />
        <TopRightHand
          width={widthToDp(25)}
          height={heightToDp(25)}
          style={styles.TopRightHand}
        />
        <Burger
          width={widthToDp(50)}
          height={heightToDp(30)}
          style={styles.pizza}
        />
        <Pizza
          width={widthToDp(50)}
          height={heightToDp(30)}
          style={styles.burger}
        />
        <View style={{alignItems: 'center'}}>
          <Etosha height={100} style={{marginVertical: 20}} />
        </View>

        <Layout
          style={{backgroundColor: '#F7F9FC', width: '100%', marginLeft: 20}}>
          <Text status="basic" style={{fontSize: 20, marginVertical: 10}}>
            Enter Your Code
          </Text>
          <Text appearance="hint" style={{marginTop: 5}}>
          Enter the code we just sent.
          </Text>
        </Layout>

        <Layout
          style={{
            backgroundColor: '#F7F9FC',
            marginHorizontal: 10,
            marginTop: 30,
          }}>

            <View 
            style={{
              height: 60,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal:10
            }}
            >
             <TextInput
                ref={f1}   
                         
                style={styles.Inputstyle}
              />
              <TextInput
                ref={f2}               
                style={styles.Inputstyle}       />
              <TextInput
                ref={f3}
                style={styles.Inputstyle}      />
              <TextInput
                ref={f4}
                style={styles.Inputstyle}/>
          </View>

          <View style={{width:"100%",alignItems:'flex-end'}}>
          <Text style={{textDecorationLine:"underline",}} status="primary">Resend Code</Text>
          </View>
          

          
          <Button
            style={{
              height: 50,
              marginTop: 100,
              borderRadius: 20,
              fontWeight: 'normal',
            }}
            onPress={()=>navigation.navigate("ressetpass")}
            >
            Next
          </Button>

          
          
         
        </Layout>

        {/* <View style={{top:145}}>
          <BottomRightHand
            width={widthToDp(70)}
            height={heightToDp(20)}
            style={styles.bottomRighthandIcon}
          />
          <BottomLeftHand
            width={widthToDp(70)}
            height={heightToDp(20)}
            style={styles.bottomLefthandIcon}
          />
          <JuiceGlass style={styles.Juices} />
          <Burger style={styles.BurgerBottom} />
        </View> */}
      </Layout>
    </Layout>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
  bottomLefthandIcon: {
    bottom: 65,
    left: -110,
  },
  bottomRighthandIcon: {
    bottom: -60,
    right: -250,
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  TopRightHand: {
    position: 'absolute',
    right: -18,
    top: -85,
  },
  TopLeftHand: {
    position: 'absolute',
    left: -80,
    top: -65,
  },
  FoodxaIcon: {
    opacity: 0.15,
    position: 'absolute',
    alignSelf: 'center',
    top: heightToDp(30),
  },
  AppIcon: {position: 'absolute', alignSelf: 'center', top: heightToDp(18)},
  pizza: {
    position: 'absolute',
    top: -80,
    right: -50,
    elevation: -1,
    opacity: 0.2,
  },
  burger: {
    position: 'absolute',
    top: -80,
    left: -50,
    elevation: -1,
    opacity: 0.2,
  },
  Juices: {
    position: 'absolute',
    bottom: 40,
    left: -20,
    elevation: -1,
    opacity: 0.2,
  },
  BurgerBottom: {
    position: 'absolute',
    bottom: 40,
    right: -30,
    elevation: -1,
    opacity: 0.2,
    transform: [{rotate: '80deg'}],
  },
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'opensans-regular',
    color: '#8F9BB3',
  },
  Inputstyle: {height: 60, width: widthToDp(15), paddingBottom: -10, borderColor:"#D7D9DB",borderWidth:1,borderRadius:10,textAlign:'center'},
});


