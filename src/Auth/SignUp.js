import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View,KeyboardAvoidingView} from 'react-native';
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
import LeftTopHand from '../../assets/SVg/LeftTopHand'
import RightTopHand from '../../assets/SVg/RightTopHand'
import Burger from '../../assets/SVg/Burger'

import Pizza from '../../assets/SVg/Pizza'
import BottomRightHand from '../../assets/SVg/BottomRightHand'
import BottomLeftHand from '../../assets/SVg/BottomLeftHand'
import JuiceGlass from '../../assets/SVg/JuiceIcon'
import Etosha from '../../assets/SVg/EtoshaIcon'

import EmailSvg from '../../assets/SVg/EmailIcon';
import Lock from '../../assets/SVg/LockIcon';
import Person from '../../assets/SVg/Person';



import {heightToDp, widthToDp} from '../../Utils/Responsive';
import {TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { fontsFamily } from '../../constants';

const HeartIcon = props => <Icon {...props} name="heart" />;
const AlertIcon = props => <Icon {...props} name="alert-circle-outline" />;

const useToggleState = (initialState = false) => {
  const [checked, setChecked] = React.useState(initialState);

  const onCheckedChange = isChecked => {
    setChecked(isChecked);
  };

  return {checked, onChange: onCheckedChange};
};

const useFocus = () => {
  const htmlElRef = React.useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };
  return [htmlElRef, setFocus];
};

export default function SignUp({navigation}) {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');

  const [password, setpassword] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);



  const [emailRef, setEmailRef] = useFocus();
  const [nameRef, setNameRef] = useFocus();

  const [PasswordRef, setPasswordRef] = useFocus();

  const Saveme = useToggleState();

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <Layout style={styles.container}
    
    >
      <Layout style={{flex: 1, backgroundColor: '#F7F9FC'}}>
        <LeftTopHand
          width={widthToDp(50)}
          height={heightToDp(25)}
          style={styles.TopLeftHand}
        />
        <RightTopHand
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
          <Etosha width={widthToDp(40)} height={heightToDp(20)}  />
        </View>

        <Layout
          style={{backgroundColor: '#F7F9FC', width: '100%', marginLeft: 20}}>
          <Text status="basic" style={{fontSize: 20, marginVertical: 10,...fontsFamily.Light}}>
            Sign Up
          </Text>
          <Text appearance="hint" style={{marginTop: 5,...fontsFamily.Light}}>
            Enter your email and password.
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
              borderColor: '#D7D9DB',
              borderRadius: 10,
              borderWidth: 1,
              marginVertical: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={setNameRef}>
            <View
              style={{
                borderRightWidth: 1,
                width: 60,
                height: 54,
                marginVertical: 2,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#D7D9DB',
              }}
              onPress={setNameRef}>
              <Person onPress={setNameRef} />
            </View>
            <View onPress={setNameRef} style={{marginLeft: 10}}>
              <Text onPress={setNameRef} appearance="hint" style={{...fontsFamily.Light}}>
                Name
              </Text>
              <TextInput
                ref={nameRef}
                value={name}
                style={{...fontsFamily.Light}}
                onChangeText={text => setName(text)}
                style={{height: 35, width: widthToDp(65), paddingBottom: -5}}
                placeholder="Name"
              />
            </View>
          </View>

          <View
            style={{
              height: 60,
              borderColor: '#D7D9DB',
              borderRadius: 10,
              borderWidth: 1,
              marginVertical: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={setEmailRef}>
            <View
              style={{
                borderRightWidth: 1,
                width: 60,
                height: 54,
                marginVertical: 2,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#D7D9DB',
              }}
              onPress={setEmailRef}>
              <EmailSvg onPress={setEmailRef} />
            </View>
            <View onPress={setEmailRef} style={{marginLeft: 10}}>
              <Text onPress={setEmailRef} appearance="hint" style={{...fontsFamily.Light}} >
                Email
              </Text>
              <TextInput
                ref={emailRef}
                value={email}
                style={{...fontsFamily.Light}}
                onChangeText={text => setEmail(text)}
                style={{height: 35, width: widthToDp(65), paddingBottom: -5}}
                placeholder="email here"
              />
            </View>
          </View>

          <View
            style={{
              height: 60,
              borderColor: '#D7D9DB',
              borderRadius: 10,
              borderWidth: 1,
              flexDirection: 'row',
              marginVertical: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                borderRightWidth: 1,
                width: 60,
                height: 54,
                marginVertical: 2,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#D7D9DB',
              }}
              onPress={setPasswordRef}>
              <Lock onPress={setPasswordRef} />
            </View>
            <View
              onPress={setPasswordRef}
              style={{marginLeft: 10, justifyContent: 'center'}}>
              <Text onPress={setPasswordRef} appearance="hint" style={{...fontsFamily.Light}}>
                password
              </Text>
              <TextInput
                ref={PasswordRef}
                style={{...fontsFamily.Light}}
                secureTextEntry={secureTextEntry}
                value={password}
                onChangeText={text => setpassword(text)}
                style={{height: 35, width: widthToDp(60), paddingBottom: -5}}
                placeholder="Password"
              />
            </View>
            <Ionicons
              onPress={toggleSecureEntry}
              size={20}
              color="#000"
              name={secureTextEntry ? 'eye-off' : 'eye'}
            />
          </View>

          
          <Button
            style={{
              height: 50,
              marginTop: 20,
              borderRadius: 20,
              fontWeight: 'normal',
            }}
            onPress={()=>navigation.navigate("UserTab")}
            
            >
            SignUp
          </Button>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Text style={{...fontsFamily.Light}}>Already have an account?</Text>
            <Text status="primary" style={{fontSize:20,...fontsFamily.Light}} onPress={()=>navigation.navigate('login')} >   Sign in</Text>
          </View>
        </Layout>

        {/* <View>
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
  Inputstyle: {},
});
