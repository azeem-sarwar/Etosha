
import React from 'react';
import {
    Animated,
    Image,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

// constants
import {  COLORS, FONTS, fontsFamily, SIZES } from "../constants";
import { height, heightToDp, width } from '../Utils/Responsive';
import Icon from 'react-native-vector-icons/Ionicons'



// 



const onBoardings = [
    { 
        title: "Let's Travelling",
        description: "Lorem ipsum dolor sit amet, consetetur ",
        img: require('../assesst/onboarding1.png')
    },
    {
        title: "Navigation",
        description: "Lorem ipsum dolor sit amet, consetetur s",
        img: require('../assesst/onboarding2.png')
    },
    {
        title: "Destination",
        description: "Lorem ipsum dolor sit amet, consetetur",
        img: require('../assesst/onboarding3.png')
    }
];


const OnBoarding = () => {
  const [dataSource, setDataSource] = React.useState([]);
  const [scrollToIndex, setScrollToIndex] = React.useState(1);
  const [dataSourceCords, setDataSourceCords] = React.useState([]);
  const [ref, setRef] = React.useState(null);
  

    const scrollX = new Animated.Value(0);


    React.useEffect(() => {

     

        scrollX.addListener(({ value }) => {

         console.log(value)
          

            if(value>=0 && value<=width-1)
            {
              setScrollToIndex(1);
            }
            else if(value>=width && value<=(width*2))
            {
              setScrollToIndex(2);

            }
            else {
              setScrollToIndex(3)
            }
         
          
            if (Math.floor(value / SIZES.width) == onBoardings.length - 1) {
                
            }
        });

        return () => scrollX.removeListener();
    }, [scrollX]);


  

    // Render

    const scrollHandler = () => {
      console.log(onBoardings.length, scrollToIndex , dataSourceCords);
      if (onBoardings.length > scrollToIndex) {
        ref.scrollTo({
          x: scrollToIndex * width,
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
                        onLayout={(event) => {
                          const layout = event.nativeEvent.layout;
                          dataSourceCords[`img-${index}`] = layout.y;
                          setDataSourceCords(dataSourceCords);
                          
                        }}
                    >
                        
                    
                        <View style={{ alignItems: 'center', }}>
                        <Image
                                source={item.img}
                                resizeMode="cover"
                                style={{   
                                }}
                            />
                        </View>


                  

                        <View
                            style={{
                                top:50,
                                marginBottom:-20
                            }}
                        >
                            <Text style={{
                                ...FONTS.h1,
                                color: COLORS.gray,
                                textAlign: 'center',
                            }}
                            >
                                {item.title}
                            </Text>

                            <Text style={{
                                ...FONTS.body3,
                                textAlign: 'center',
                                marginTop: SIZES.base,
                                color: COLORS.gray,
                            }}
                            >
                                {item.description}
                            </Text>
                        </View>
                        {/* Button */}
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
                              setScrollToIndex(scrollToIndex+1);

                              if(scrollToIndex<=2)
                              {
                              scrollHandler()
                              }
                              else{
                                // navigate
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
                              // Navigate
                             }}
                        >
                            <Text style={{...fontsFamily.Light,textAlign:'center',marginTop:10}}>Skip</Text>
                        </TouchableOpacity>
                       </View>
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
            <View>
                {renderContent()}
            </View>
            <View style={styles.dotsRootContainer}>
                {renderDots()}
            </View>
           
                
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
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
      bottom:heightToDp(40)
    },
    dotsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
     
    
    },
    dot: {
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.blue,
        marginHorizontal: SIZES.radius / 2
    }
});

export default OnBoarding;
