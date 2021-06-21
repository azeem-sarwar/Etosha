import React from 'react';
import { StyleSheet,ImageBackground,Dimensions } from 'react-native';
import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import FoofDeliverIcon from '../assets/SVg/CenterSvgIcon.svg'







import LeftTopHand from '../assets/SVg/LeftTopHand'
import RightTopHand from '../assets/SVg/RightTopHand'
import Burger from '../assets/SVg/Burger'
import Pizza from '../assets/SVg/Pizza'
import EtoshaIcon from '../assets/SVg/EtoshaIcon'
import BottomRightHand from '../assets/SVg/BottomRightHand'
import BottomLeftHand from '../assets/SVg/BottomLeftHand'
import JuiceGlass from '../assets/SVg/JuiceIcon'





import { heightToDp, widthToDp } from '../Utils/Responsive';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;


const HeartIcon = (props) => (
    <Icon {...props} name='heart'/>
  );
export default function SaplashScreen() {
    return (
        <Layout style={styles.container}>
         
        <Layout style={{flex:1}} >
        <LeftTopHand width={widthToDp(50)} height={heightToDp(25)} style={styles.TopLeftHand} />
        <RightTopHand width={widthToDp(25)} height={heightToDp(25)} style={styles.TopRightHand} />

        <Burger width={widthToDp(50)} height={heightToDp(30)} style={styles.pizza}/>
        <Pizza width={widthToDp(50)} height={heightToDp(30)} style={styles.burger} />
        <FoofDeliverIcon width={widthToDp(50)} height={heightToDp(50)} style={styles.FoodxaIcon} />

        <EtoshaIcon width={widthToDp(50)} height={heightToDp(50)} style={styles.AppIcon}  />

        <BottomRightHand width={widthToDp(70)} height={heightToDp(20)} style={styles.bottomRighthandIcon}/>
        <BottomLeftHand width={widthToDp(70)} height={heightToDp(20)} style={styles.bottomLefthandIcon} />
        <JuiceGlass  style={styles.Juices} />
        <Burger width={widthToDp(50)} height={heightToDp(30)} style={styles.BurgerBottom} />
       
        </Layout>
       
      </Layout>
    )
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
    bottomLefthandIcon:{
        position:'absolute',
        bottom:-52,
        left:-110,
        
    },
    bottomRighthandIcon:{
      position:'absolute',
        bottom:-25,
        right:-120,
        
        
    },
    blurView:{
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
      },
      TopRightHand:{
        position: "absolute",
        right:-18,
        top:-85
      },
      TopLeftHand:{
        position:'absolute',
        left:-80,
        top:-65,
        
      },FoodxaIcon:{opacity:0.15,position:'absolute',alignSelf:"center",top:heightToDp(30)},
      AppIcon:{position:'absolute',alignSelf:"center",top:heightToDp(18)},
      pizza:{position:"absolute",top:-80,right:-50,elevation:-1,opacity:0.2, },
      burger:{position:"absolute",top:-80,left:-50,elevation:-1,opacity:0.05, },
      Juices:{position:"absolute",bottom:-20,left:-20,elevation:-1,opacity:0.2, },
      BurgerBottom:{position:"absolute",bottom:-20,right:-30,elevation:-1,opacity:0.05, transform: [{ rotate: "80deg" }]}
  });
  // shadowColor: "#orange",
  //   shadowOffset: {
  //     width: 0,
  //     height: 2
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,