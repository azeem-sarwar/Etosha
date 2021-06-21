import React from 'react';
import {StyleSheet} from 'react-native';
import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';

import LeftTopHand from '../../assets/SVg/LeftTopHand'
import RightTopHand from '../../assets/SVg/RightTopHand'
import Burger from '../../assets/SVg/Burger'

import Pizza from '../../assets/SVg/Pizza'
import BottomRightHand from '../../assets/SVg/BottomRightHand'
import BottomLeftHand from '../../assets/SVg/BottomLeftHand'
import JuiceGlass from '../../assets/SVg/JuiceIcon'






import ShefIcon from '../../assesst/Svg/shefIcon.svg';


import {heightToDp, widthToDp} from '../../Utils/Responsive';
import { COLORS,fontsFamily } from '../../constants';

const HeartIcon = props => <Icon {...props} name="heart" />;
export default function SaplashScreen({navigation}) {
  return (
    <Layout style={styles.container}>
      <Layout
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F7F9FC',
        }}>
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

        <ShefIcon style={{marginBottom: 30, marginTop: 50}} />
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            marginTop: 20,
            marginBottom: 10,
            ...fontsFamily.Light
          }}>
          Good Evening
        </Text>
        <Text style={{textAlign: 'center',...fontsFamily.Light}} appearance="hint">
          Fastest food delivery service
          {'\n'}for you.
        </Text>

        <Layout style={styles.btContainer}>
          <Button
          onPress={()=>navigation.navigate("signup")}
            style={{height: 60, width: 135, borderRadius: 30}}
            status="info" >
            <Text style={{...fontsFamily.Light}}>Sign Up</Text>
          </Button>
          <Button 
          onPress={()=>navigation.navigate("login")}
          style={{height: 60, width: 135, borderRadius: 30}}>
            <Text style={{color:COLORS.white,...fontsFamily.Light}}>Login</Text>
          </Button>
        </Layout>
        <Text onPress={()=>navigation.navigate("UserTab")} style={{textAlign: 'center', marginTop: 10,...fontsFamily.Light}}>Guest Visit</Text>

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
        <Burger style={styles.BurgerBottom} 
             width={widthToDp(50)}
          height={heightToDp(30)}
        />
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
    position: 'absolute',
    bottom: -52,
    left: -110,
  },
  bottomRighthandIcon: {
    position: 'absolute',
    bottom: -25,
    right: -120,
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
    bottom: -20,
    left: -20,
    elevation: -1,
    opacity: 0.2,
  },
  BurgerBottom: {
    position: 'absolute',
    bottom: -20,
    right: -30,
    elevation: -1,
    opacity: 0.2,
    transform: [{rotate: '80deg'}],
  },
  btContainer: {
    flexDirection: 'row',
    marginHorizontal: 40,
    alignItems: 'center',
    width: '80%',
    justifyContent: 'space-between',
    marginVertical: 30,
    backgroundColor:'#F7F9FC'
  },
});
