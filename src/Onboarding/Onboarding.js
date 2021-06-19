import React from 'react';


import BottomLeftHand from './../../assesst/Svg/bottomLeftHand.svg';
import BottomRightHand from '../../assesst/Svg/bottomRightHand.svg';
import TopRightHand from '../../assesst/Svg/rightTopHand.svg';
import TopLefthand from '../../assesst/Svg/leftTopHand.svg';

import Burger from '../../assesst/Svg/burger.svg';
import JuiceGlass from '../../assesst/Svg/juiceGlass.svg';
import Pizza from '../../assesst/Svg/Pizza.svg';
import {
  Text,
  Button,
  Layout,
  StyleService
} from '@ui-kitten/components';

import {
  Animated,
  Image,
  SafeAreaView,
  View,
  TouchableOpacity
} from 'react-native';

// constants
import {  COLORS, FONTS, fontsFamily, SIZES } from "../../constants";
import { height, heightToDp, width,widthToDp } from '../../Utils/Responsive';
import Icon from 'react-native-vector-icons/Ionicons'




const onBoardings = [
  { 
    title: 'Find a Resturant',
    description: 'Fastest operation to provide food \nby the fence.',
      img: require('../../assesst/onboarding1.png')
  },
  {
    title: 'Pick The Food',
    description: 'Fastest operation to provide food \nby the fence.',
      img: require('../../assesst/onboarding2.png')
  },
  {
    title: 'Get Fastest Delivery',
    description: 'Fastest operation to provide food \nby the fence.',
      img: require('../../assesst/onboarding3.png')
  }
];







// 






const OnBoarding = ({navigation}) => {

  const [scrollToIndex, setScrollToIndex] = React.useState(0);

  const [completed, setCompleted] = React.useState(0);

 
  const [ref, setRef] = React.useState(null);
  const [RefOfImage, setRefOfImage] = React.useState(null);

  

    const scrollX = new Animated.Value(0);


    React.useEffect(() => {

     

        scrollX.addListener(({ value }) => {

       
          

            if(value>=0 && value<=width-1)
            {
              setScrollToIndex(0);
            }
            else if(value>=width && value<=(width*2))
            {
              setScrollToIndex(1);

            }
            else {
              setScrollToIndex(2)
            }
         
          
            if (Math.floor(value) == 2*SIZES.width) {
                setCompleted(true)
            }
        });

        return () => scrollX.removeListener();
    }, [scrollX]);
 
  

    // Render

    const scrollHandler = () => {
      console.log(onBoardings.length, scrollToIndex );
      if (onBoardings.length > scrollToIndex) {
        ref.scrollTo({
          x: (scrollToIndex + 1) * width,
          y: 0,
          animated: true,
        });
      } else {
        alert('Out of Max Index');
      }
    };



    function renderContent() {
        return (
            <Animated.ScrollView
            ref={ref=>setRef(ref)}
               horizontal
                pagingEnabled
                scrollEnabled
                decelerationRate={0}
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX } } },
                ], { useNativeDriver: false })}
            >
                {onBoardings.map((item, index) => (
                    <View
                        //center
                        //bottom
                        key={`img-${index}`}
                        style={styles.imageAndTextContainer}
                        onLayout={event => {
    const layout = event.nativeEvent.layout;
    console.log('height:', layout.height);
    console.log('width:', layout.width);
    console.log('x:', layout.x);
    console.log('y:', layout.y);
  }}
                    >
                        
                    
                        <View style={{ alignItems: 'center', }}>
                        <Image
                                source={item.img}
                                resizeMode="cover"
                                style={{   
                                }}
                          ref={ref=>setRefOfImage(ref)}

                            />
                        </View>


                  

                        <View
                            style={{
                                top:50,
                                marginBottom:-20
                            }}
                        >
                            <Text style={{
                                ...FONTS.h2,
                                color: COLORS.gray,
                                textAlign: 'center',
                            }}
                            >
                                {item.title}
                            </Text>

                            <Text style={{
                                ...FONTS.body5,
                                textAlign: 'center',
                                marginTop: SIZES.base,
                                
                            }}
                            appearance="hint"
                            >
                                {item.description}
                            </Text>
                        </View>
                        {/* Button */}
                          </View>
                ))}
            </Animated.ScrollView>
        );
    }

    function renderDots() {

        const dotPosition = Animated.divide(scrollX, SIZES.width);

        return (
            <View style={styles.dotsContainer}>
                {onBoardings.map((item, index) => {
                    const opacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: "clamp"
                    });

                    const dotSize = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [SIZES.base, 17, SIZES.base],
                        extrapolate: "clamp"
                    });

                    return (
                        <Animated.View
                            key={`dot-${index}`}
                            opacity={opacity}
                            style={[styles.dot, { width: dotSize, height: dotSize, }]}
                        />
                    );
                })}
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
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
            <View>
                {renderContent()}
            </View>
            <View style={styles.dotsRootContainer}>
                {renderDots()}
            </View>
            <View style={{position:'absolute',bottom:heightToDp(5),alignSelf:'center'}}>
                       <TouchableOpacity
                       
                            style={{
                               
                                width: 60,
                                height: 60,
                                paddingLeft: 20,
                                justifyContent: 'center',
                                
                                borderRadius:50,
                                backgroundColor: COLORS.primary
                            }}
                            onPress={()=>{
                              
                              console.log("ok" ,scrollToIndex)
                              setScrollToIndex(scrollToIndex+1);

                              if(completed)
                              {
                                 navigation.navigate("loginsingup")
                                
                              }
                              else{
                                scrollHandler()
                              }
                            }}
                        >
                            <Icon name="arrow-forward-outline" size={25} color={COLORS.white}></Icon>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                               
                                
                                justifyContent: 'center',
                               
                            }}
                            onPress={() => { 
                              navigation.replace("UserTab")
                             }}
                        >
                            <Text style={{...fontsFamily.Light,textAlign:'center',marginTop:10}}>Skip</Text>
                        </TouchableOpacity>
                       </View>
                      
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
                
        </SafeAreaView>
    );
};



export default OnBoarding;






const styles = StyleService.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white
},
imageAndTextContainer: {
    width: SIZES.width,
    justifyContent:'center',
    // alignItems:'center',
 
    height:height/1.08
    
},
dotsRootContainer: {
  position:'absolute',
  top:heightToDp(58)
},
dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
 

},
dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.black,
    marginHorizontal: SIZES.radius / 2
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
    zIndex:10
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
