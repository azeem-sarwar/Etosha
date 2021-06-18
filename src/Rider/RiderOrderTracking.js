import { Button, Input,Layout,Text } from "@ui-kitten/components";
import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS, FONTS, icons, SIZES, GOOGLE_API_KEY_andriod, images, fontsFamily } from "../../constants"
import PinMarker from "../Component/Pin";
import RiderPopup from "../Component/riderpopup";




const restaurantdata= {
    id: 1,
    name: "Burger",
    rating: 4.8,
    categories: [5, 7],
    priceRating: 1,
    photo: images.burger_restaurant_1,
    duration: "30 - 45 min",
    location: {
        latitude: 40.732497457467545,
        longitude: -74.0054012540893
    },
    courier: {
        avatar: images.avatar_1,
        name: "Amy"
    }
}


const initialCurrentLocation = {
    streetName: "newa",
    gps: {
        latitude: 40.732416158122824,
        longitude: -74.00639903584285,
    }
}

const RiderPosition = {
    streetName: "Amy",
    gps: {
        latitude: 40.73237144344088,
        longitude: -74.00596720019145,
    }
}
const RiderOrderTracking = ({ route, navigation }) => {
    
    const mapView = React.useRef()

    const [restaurant, setRestaurant] = React.useState(null)
    const [streetName, setStreetName] = React.useState("")
    const [fromLocation, setFromLocation] = React.useState(initialCurrentLocation.gps)
    const [toLocation, setToLocation] = React.useState(initialCurrentLocation.gps)
    const [RiderLocation, setRiderLocation] = React.useState(initialCurrentLocation.gps)

    const [region, setRegion] = React.useState(null)

    const [duration, setDuration] = React.useState(0)
    const [isReady, setIsReady] = React.useState(false)
    const [angle, setAngle] = React.useState(0)
    const [renderDetail, setRenderdetail] = React.useState(false)
// const [Cordinates, setCordinates] = React.useState(null)
const [DeliverStatus, setDeliverStatus] = React.useState("NotStarted")


// Get Way points code is commented
{
//  async function getCordinatesBetweenTwoPoints(){
//     const mode = 'driving'; // 'walking';

// const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${fromLocation}&destination=${toLocation}&key=${GOOGLE_API_KEY_andriod}&mode=${mode}`;

//  fetch(url)
//     .then(response => response.json())
//     .then(responseJson => {
//         if (responseJson.routes.length) {
            
//             setCordinates({
//                 coords: decode(responseJson.routes[0].overview_polyline.points) // definition below
//             });
//         }
//     }).catch(e => {console.warn(e)});
// }
}
 { 
    //   const decode = function (t, e) {
//     for (
//       var n,
//         o,
//         u = 0,
//         l = 0,
//         r = 0,
//         d = [],
//         h = 0,
//         i = 0,
//         a = null,
//         c = Math.pow(10, e || 5);
//         u < t.length;

//     ) {
//       (a = null), (h = 0), (i = 0);
//       do (a = t.charCodeAt(u++) - 63), (i |= (31 & a) << h), (h += 5);
//       while (a >= 32);
//       (n = 1 & i ? ~(i >> 1) : i >> 1), (h = i = 0);
//       do (a = t.charCodeAt(u++) - 63), (i |= (31 & a) << h), (h += 5);
//       while (a >= 32);
//       (o = 1 & i ? ~(i >> 1) : i >> 1),
//         (l += n),
//         (r += o),
//         d.push([l / c, r / c]);
//     }
//     return (d = d.map(function (t) {
//       return {latitude: t[0], longitude: t[1]};
//     }));
//   };
}






    React.useEffect(() => {

      
        let fromLoc = initialCurrentLocation.gps
        let toLoc = restaurantdata.location
        let street = initialCurrentLocation.streetName

        let mapRegion = {
            latitude: (fromLoc.latitude + toLoc.latitude) / 2,
            longitude: (fromLoc.longitude + toLoc.longitude) / 2,
            latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
            longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2
        }

        setRestaurant(restaurant)
        setStreetName(street)
        setFromLocation(fromLoc)
        setToLocation(toLoc)
        setRegion(mapRegion)
        setRiderLocation(RiderPosition.gps)
        // getCordinatesBetweenTwoPoints()
    }, [])



    function calculateAngle(coordinates) {
        let startLat = coordinates[0]["latitude"]
        let startLng = coordinates[0]["longitude"]
        let endLat = coordinates[1]["latitude"]
        let endLng = coordinates[1]["longitude"]
        let dx = endLat - startLat
        let dy = endLng - startLng

        return Math.atan2(dy, dx) * 180 / Math.PI
    }
 



    function renderMap() {
     
        const destinationMarker = () => (
            <Marker
                coordinate={fromLocation}
            >
                <View
                    style={styles.CustomMarkerContainer}
                >
                    <View

                        style={styles.CustomMarkerSubContainer}
                    >
                        <PinMarker
                          
                        />
                    </View>
                </View>
            </Marker>
        )

        const ResturentIcon = () => (
            <Marker
                coordinate={toLocation}
                anchor={{ x: 0.5, y: 0.5 }}
                flat={true}
                rotation={angle}
                onPress={()=>{
                    setRenderdetail(!renderDetail)
                    }}
            >
                <Image
                    source={icons.BurgerKing}
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius:10
                    }}
                />
            </Marker>
        )
        const RiderTracking = () => (
            <Marker
                coordinate={RiderLocation}
                anchor={{ x: 0.5, y: 0.5 }}
                flat={true}
                rotation={angle-270}
                
            >
                <Image
                    source={icons.RiderBikeIcon}
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius:10
                    }}
                />
                
                {/* <RiderPopup height={60} width={90}  /> */}
                
            </Marker>
        )

        return (
            <View style={{ flex: 1 }}>
                <MapView
                    ref={mapView}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={region}
                    style={{ flex: 1 }}
                    customMapStyle={mapStyle}
                >
                     <MapViewDirections
                        origin={fromLocation}
                        destination={toLocation}
                        apikey={GOOGLE_API_KEY_andriod}
                        strokeWidth={4}
                        splitWaypoints={true}
                        strokeColor={COLORS.black}
                        optimizeWaypoints={true}
                        onReady={result => {
                            setDuration(result.duration)

                            if (!isReady) {
                                // Fit route into maps
                                mapView.current.fitToCoordinates(result.coordinates, {
                                    edgePadding: {
                                        right: (SIZES.width / 20),
                                        bottom: (SIZES.height / 4),
                                        left: (SIZES.width / 20),
                                        top: (SIZES.height / 8)
                                    }
                                })

                                // Reposition the car
                                let nextLoc = {
                                    latitude: result.coordinates[0]["latitude"],
                                    longitude: result.coordinates[0]["longitude"]
                                }

                                if (result.coordinates.length >= 2) {
                                    let angle = calculateAngle(result.coordinates)
                                    setAngle(angle)
                                }

                                setFromLocation(nextLoc)
                                setIsReady(true)
                            }
                        }}
                    />  
                    {RiderTracking()}
                    {destinationMarker()}
                    {ResturentIcon()}
                </MapView>
            </View>
        )
    }

    function renderDestinationHeader() {
        return (
            <View
                style={{
                    position: 'absolute',
                    top: 10,
                    left: 0,
                    right: 0,
                    height: 50,  
                }}
            >
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <TouchableOpacity
        style={styles.goBackBtn}
        onPress={() => navigation.goBack()}>
        <Icon  name="chevron-left" size={25} color={COLORS.black} />
      </TouchableOpacity>
      <Text style={{...FONTS.body2,marginLeft:10 ,top:20,marginLeft:20}}>Delivery</Text>
        </View>

     
            </View>
        )
    }

    function renderDeliveryInfo() {
        return (
            <Layout
                style={{                 
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf:'flex-end',
                    marginBottom:3,
                    borderTopRightRadius:40,
                    borderTopLeftRadius:40,
                    backgroundColor:COLORS.background
                }}
            >
                  <View
        style={{
         
          borderRadius: 30,
          
          width:SIZES.width,
          paddingVertical:20
        }}>
        <View>
          <Image
            source={images.DeliveryBoy}
            style={{
              height: 60,
              width: 60,
              borderRadius: 50,
              alignSelf: 'center',
              marginTop: -40,
            }}
          />
        </View>

        <Text category="h4" style={{textAlign: 'center'}}>
        Manuel C. Smith
        </Text>
        <Text style={{textAlign: 'center',...FONTS.body5}} appearance="hint">Customer</Text>
        <View
          style={{
            position: 'absolute',
            top: 15,
            right: 20,
            backgroundColor: COLORS.primary,
            borderRadius: 50,
            height: 30,
            width: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            onPress={() => alert('Book Mark icon is pressed')}
            name="phone"
            size={25}
            color={COLORS.white}
          />
        </View>

        <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>

        <View style={{flexDirection:'row'}}>
        <Icon name="map-marker" size={30} color={COLORS.primary} />
        <View>
            <Text style={{...FONTS.body4}} >9 Dunstan Road </Text>
            <Text style={{...fontsFamily.Light,fontSize:10}} >Delivery address</Text>
        </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <Image
              source={require('../../assesst/Icon/Clock.png')}
              style={{height: 30, width: 30,marginRight:5}}
            />
            <View>
            <Text style={{...FONTS.body4}} >20-25 min </Text>
            <Text style={{...fontsFamily.Light,fontSize:10}} >Delivery time</Text>
        </View>
        </View>
        </View>

          {DeliverStatus=="NotStarted"?
            (<Button style={{marginTop:15,marginHorizontal:20,marginBottom:15,height:60,borderRadius:30}}
          onPress={()=>{
              setDeliverStatus("delivering")
            //   Call function that can start moving the object 
          }}
          >
         <Text style={{...FONTS.h4,color:COLORS.white}}>Start Delivery</Text>
          </Button>):null
          }


          {DeliverStatus=="delivering"?
            (<Button style={{marginTop:15,marginHorizontal:20,marginBottom:15,height:60,borderRadius:30}}
          onPress={()=>
          {
              setDeliverStatus("Complete")
              setRiderLocation(initialCurrentLocation.gps)
          }}
          >
         <Text style={{...FONTS.h4,color:COLORS.white}}>More Details</Text>
          </Button>):null
          }

          {DeliverStatus=="Complete"?
            (<Button style={{marginTop:15,marginHorizontal:20,marginBottom:15,height:60,borderRadius:30}}
          onPress={()=>navigation.navigate('MyReview',{rating:4,message:"Robert delivered my food very quickly and was friendly"})}
          >
         <Text style={{...FONTS.h4,color:COLORS.white}}>Complete</Text>
          </Button>):null
          }
          
          
        </View>
      </View>
 
                 </Layout>
        )
    }

    return (
        <Layout style={{ flex: 1 }}>
            {renderMap()}
            {renderDestinationHeader()}
           {renderDeliveryInfo()}
          
        </Layout>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  goBackBtn: {
    height: 40,
    width: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#fff',
    elevation:5,
    backgroundColor: '#fff',
   top: 20,
    left: 10,
    flexDirection:'row'
  },
  tags: {
    marginHorizontal: 10,
    backgroundColor: '#D7D9DB',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop:10
  },
  CustomMarkerContainer:{
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white
},
CustomMarkerSubContainer:{
  height: 10,
  width: 10,
  borderRadius: 50,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: COLORS.primary,
  // backgroundColor:'#000'
},
Image:{
  borderRadius:50, 
}
});

export default RiderOrderTracking;

const mapStyle = [
    {
        "featureType": "all",
        "stylers": [
            {
                "saturation": 0
            },
            {
                "hue": "#e7ecf0"
            }
        ]
    },
    {
        "featureType": "road",
        "stylers": [
            {
                "saturation": -70
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": -60
            }
        ]
    }
]