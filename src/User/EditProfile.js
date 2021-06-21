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
  Platform
} from 'react-native';
import {
  Text,
  Button,
  Layout,
  Avatar,
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import Person from '../../assets/SVg/Person'
import EmailSvg from '../../assets/SVg/EmailIcon'
import {Header} from '@react-navigation/stack';


import { widthToDp } from '../../Utils/Responsive';

import { COLORS } from '../../constants';
import { color } from 'react-native-reanimated';



const width = Dimensions.get('screen').width;


const useFocus = () => {
    const htmlElRef = React.useRef(null);
    const setFocus = () => {
      htmlElRef.current && htmlElRef.current.focus();
    };
    return [htmlElRef, setFocus];
  };


export default function EditProfile({navigation}) {

  const [email, setEmail] = React.useState('');
  const [userName, setuserName] = React.useState('');
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [avoidginView, setAviodingView] = React.useState(false);



  const [emailRef, setEmailRef] = useFocus();
  const [nameRef, setNameRef] = useFocus();
  const [userNameRef, setUserNameRef] = useFocus();
  const [addressRef, setAddressRef] = useFocus();

  return (
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "position"}
      enabled={avoidginView}
      style={styles.conTainer}
       >
    <Layout style={styles.conTainer}>
      <StatusBar />
      <View>
        <View style={styles.header}>
          <View style={styles.headerFlex}>
            <TouchableOpacity
              style={styles.MenueBtn}
              onPress={() => navigation.goBack()}>
              
               <Icon name="chevron-back" size={25} color={COLORS.black} />
            </TouchableOpacity>
            <Text style={styles.ScreenTitle}>Profile</Text>
          </View>
        </View>
        {/* Search input field */}

        <View style={{margin: 20, alignItems: 'center'}}>
          <TouchableOpacity
         
          >
          <Avatar
            source={require('./../../assesst/48061.png')}
            style={styles.ProfileImage}
          />
          <Icon name="camera-outline" size={20} color="#000" style={styles.addImageIcon} />
          </TouchableOpacity> 
        </View>
      </View>


      <View
            style={styles.InputContainer}
            >
            <View
              style={styles.InputSubContainer}
              >
              <Person onPress={setUserNameRef} />
            </View>
            <View onPress={setUserNameRef} style={{marginLeft: 10}}>
              <Text  appearance="hint">
                UserName
              </Text>
              <TextInput
                ref={userNameRef}
                value={userName}
                onChangeText={text => setuserName(text)}
                style={styles.InputStyle}
                placeholder="User Name"
              />
            </View>
          </View>

      <View
            style={styles.InputContainer}
            onPress={setNameRef}>
            <View
              style={styles.InputSubContainer}
              onPress={setNameRef}>
              <Person onPress={setNameRef} />
            </View>
            <View onPress={setNameRef} style={{marginLeft: 10}}>
              <Text onPress={setNameRef} appearance="hint">
               Full Name
              </Text>
              <TextInput
                ref={nameRef}
                value={name}
                onChangeText={text => setName(text)}
                style={styles.InputStyle}
                placeholder="Full Name"
              />
            </View>
          </View>

          <View
            style={styles.InputContainer}
            >
            <View
              style={styles.InputSubContainer}
              >
              <EmailSvg onPress={setEmailRef} />
            
            </View>
            <View onPress={setEmailRef} style={{marginLeft: 10}}>
              <Text  appearance="hint">
                Email
              </Text>
              <TextInput
                ref={emailRef}
                value={email}
                onFocus={()=>setAviodingView(true)}
                onBLur={()=>setAviodingView(false)}
                onEndEditing={()=>setAviodingView(false)}
                onChangeText={text => setEmail(text)}
                style={styles.InputStyle}
                placeholder="Email"
              />
            </View>
          </View>


          <View
            style={styles.InputContainer}
            >
            <View
              style={styles.InputSubContainer}
              >
              <Icon name="map-outline" color={COLORS.black} size={25} />
            </View>
            <View onPress={setAddressRef} style={{marginLeft: 10}}>
              <Text  appearance="hint">
                Address
              </Text>
              <TextInput
                ref={addressRef}
                value={address}
                onFocus={()=>setAviodingView(true)}
                onBLur={()=>setAviodingView(false)}
                onEndEditing={()=>setAviodingView(false)}
                onChangeText={text => setAddress(text)}
                style={styles.InputStyle}
                placeholder="Address"
              />
            </View>
          </View>

          <Button
          style={[{
            marginHorizontal: 20,
            height: 50,
            borderRadius: 30,
            marginTop: 25,        
          },
          styles.shadow
          ]}
          onPress={()=>navigation.replace("Profile")}
          >
         Save Changes
        </Button>


    </Layout>
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
  ScreenTitle: {marginLeft: 5, fontFamily: 'Poppins-Light'},

  ProfileImage: {height: 100, width: 100, borderRadius: 10},
  InputContainer:{
    height: 60,
    borderColor: '#D7D9DB',
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 17,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:20,
    
  },
  InputSubContainer:{
    borderRightWidth: 1,
    width: 60,
    height: 54,
    marginVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#D7D9DB',
  },
  InputStyle:{height: 35, width: widthToDp(65), paddingBottom: -5},
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
  addImageIcon:{position:'absolute',bottom:2,right:2,backgroundColor:"#fff",padding:3,borderRadius:15}
});
