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
import { COLORS, fontsFamily, SIZES } from '../../constants';

export default function RiderProfile({navigation}) {
  const [index, setIndex] = React.useState(1);

 


  return (
   
    <Layout style={{...styles.Container}}>
      <StatusBar />
    
        <View>
    <View
      style={styles.header}>
      <View style={styles.headerFlex}>
        <TouchableOpacity
          style={styles.MenueBtn}
          onPress={() => navigation.goBack()}>
     <Icon name="chevron-back" size={25} color={COLORS.black} />

        </TouchableOpacity>
        <Text style={styles.ScreenTitle}>
          Profile
        </Text>
      </View>
    </View>
    {/* Search input field */}

    <View style={{margin: 20, alignItems: 'center'}}>
      <Avatar
        source={require('./../../assets/images/KFC.png')}
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
        <Text style={styles.editProfileText}>Edit Profile</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("EditResturantProfile")} 
        ><FontAwesome name="edit" size={18} color={COLORS.primary} /></TouchableOpacity>
      </View>
    </View>

    
  </View>

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
    Container:{flex: 1,},
    headerFlex:{flexDirection: 'row', alignItems: 'center'},
    MenueBtn:{
        height: 40,
        width: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: COLORS.borderColor,
      },
      ScreenTitle:{marginLeft: 5, fontFamily: 'Poppins-Light'},

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
  editProfileText:{marginHorizontal: 20},
});
