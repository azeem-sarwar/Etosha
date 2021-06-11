import React, {useRef} from 'react';
import {StyleSheet, FlatList, View, Animated} from 'react-native';
import {Button, Icon, Layout, Text} from '@ui-kitten/components';

import BottomLeftHand from './../../assesst/Svg/bottomLeftHand.svg';
import BottomRightHand from '../../assesst/Svg/bottomRightHand.svg';
import TopRightHand from '../../assesst/Svg/rightTopHand.svg';
import TopLefthand from '../../assesst/Svg/leftTopHand.svg';

import Burger from '../../assesst/Svg/burger.svg';
import JuiceGlass from '../../assesst/Svg/juiceGlass.svg';
import Pizza from '../../assesst/Svg/Pizza.svg';
import Onboarding1 from '../../assesst/Svg/Onboarding1.svg';
import Onboarding2 from '../../assesst/Svg/Onboarding2.svg';
import Onboarding3 from '../../assesst/Svg/OnBoarding3.svg';

import {BlurView} from '@react-native-community/blur';
import {heightToDp, widthToDp} from '../../Utils/Responsive';
import AppIntroSlider from 'react-native-app-intro-slider';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'

const data = [
  {
    id: '1',
    SvgBanner: Onboarding1,
    title: 'Find a Resturent',
    description: 'Fastest operation to provide food \nby the fence.',
  },
  {
    id: '2',
    SvgBanner: Onboarding2,
    title: 'Pick THe Food',
    description: 'Fastest operation to provide food \nby the fence.',
  },
  {
    id: '3',
    SvgBanner: Onboarding3,
    title: 'Get Fastest Delivery',
    description: 'Fastest operation to provide food \nby the fence.',
  },
];

const HeartIcon = props => <Icon {...props} name="arrow-forward-outline" />;
export default class Onboarding extends React.Component {

   renderItem = ({item}) => {
    return (
      <View style={{marginTop: heightToDp(20)}}>
        <item.SvgBanner
          style={{elevation: -1, marginHorizontal: 15}}
          height={heightToDp(40)}
          width={widthToDp(90)}
        />
        <Text style={{textAlign: 'center'}} category="h3">
          {item.title}
        </Text>
        <Text style={{textAlign: 'center', fontSize: 10}}>
          {item.description}
        </Text>
      </View>
    );
  };
  _renderNextButton() {
    return (
      <Ionicons name="arrow-forward-outline" size={20} color="#fff" />
    );
  }

  renderSkipButton = () => {
    return (
      <Text style={{textAlign: 'center', fontSize: 15,marginTop:10}}>
        Skip
      </Text>
    );
  };
  OnSkip=()=>{
    this.props.navigation.replace("UserTab")
  }
  OnDone=()=>{
    this.props.navigation.replace("loginsingup")
  }

  render(){return (
    <Layout style={styles.container}>
      <Layout style={{flex: 1}}>
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
        <Burger style={styles.pizza} />
        <Pizza
          width={widthToDp(50)}
          height={heightToDp(30)}
          style={styles.burger}
        />

        <AppIntroSlider
       
          renderItem={this.renderItem}
          data={data}
          renderNextButton={this._renderNextButton}
          renderDoneButton={this._renderNextButton}
          renderSkipButton={this.renderSkipButton}
          onSkip={this.OnSkip}
          onDone={this.OnDone}
          activeDotStyle={{backgroundColor:"#000"}}
          dotClickEnabled={true}
          showSkipButton={true}
          dotStyle={{backgroundColor:"gray" }}
        />

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
      </Layout>
    </Layout>
  );}
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
    bottom: -45,
    left: -110,
    elevation: -2,
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
  btnCard: {
    width: 60,
    height: 60,
    borderRadius: 50,

    backgroundColor: 'orange',
    borderColor: 'orange',
    elevation:-1
  },
});
// shadowColor: "#orange",
//   shadowOffset: {
//     width: 0,
//     height: 2
//   },
//   shadowOpacity: 0.25,
//   shadowRadius: 4,
