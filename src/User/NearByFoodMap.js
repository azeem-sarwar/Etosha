import { Button, Input,Layout,Text } from "@ui-kitten/components";
import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";
import Arrow from '../../assesst/Icon/arrowBack.svg'
import Icon from 'react-native-vector-icons/Ionicons';

import { COLORS, FONTS, icons, SIZES, GOOGLE_API_KEY_andriod, images,List } from "../../constants"
import PinMarker from "../Component/Pin";




const restaurantdata= [{
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
},
{
    id: 1,
    name: "Burger",
    rating: 4.8,
    categories: [5, 7],
    priceRating: 1,
    photo: images.burger_restaurant_1,
    duration: "30 - 45 min",
    location: {
        latitude: 40.73101779384514,
        longitude: -74.00684428253929
    },
    courier: {
        avatar: images.avatar_1,
        name: "Amy"
    }
},
]

const initialCurrentLocation = {
    streetName: "Kuching",
    gps: {
        latitude: 40.732326728728864,
        longitude: -74.00635612049858,
    }
}


const NearByFoodMap = ({ route, navigation }) => {

    const mapView = React.useRef()

    const [restaurant, setRestaurant] = React.useState(null)
    const [streetName, setStreetName] = React.useState("")
    const [fromLocation, setFromLocation] = React.useState(initialCurrentLocation.gps)
    const [toLocation, setToLocation] = React.useState(initialCurrentLocation.gps)
    const [region, setRegion] = React.useState(null)

    const [duration, setDuration] = React.useState(0)
    const [isReady, setIsReady] = React.useState(false)
    const [angle, setAngle] = React.useState(0)
    const [renderDetail, setRenderdetail] = React.useState(false)


    React.useEffect(() => {
       

        let fromLoc = initialCurrentLocation.gps
        let toLoc = restaurantdata[0].location
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

        const ResturantIcon = (Resturant,index) => (
            <Marker
            key={index}
                coordinate={Resturant.location}
                anchor={{ x: 0.5, y: 0.5 }}
                flat={true}
                rotation={angle}
                onPress={()=>setRenderdetail(!renderDetail)}
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

        return (
            <View style={{ flex: 1 }}>
                <MapView
                    ref={mapView}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={region}
                    style={{ flex: 1 }}
                    customMapStyle={mapStyle}
                >
                    
                    {destinationMarker()}
                    {restaurantdata.map((Resturant,index)=>ResturantIcon(Resturant,index))}

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
        <Arrow /> 
      </TouchableOpacity>
      <Text style={{...FONTS.body2,marginLeft:10 ,top:20,marginLeft:20}}>Nearby Resturant</Text>
        </View>

        <View style={{...SIZES.margin,marginTop:40,flexDirection:'row'}}>
        <Input 
        style={{width:220,elevation:5,borderRadius:10}}
        size="large"
        onFocus={()=>setRenderdetail(false)}
        
        />
        <TouchableOpacity size="large" style={{backgroundColor:COLORS.white,marginLeft:20,elevation:5,height:50,width:60,justifyContent:'center',alignItems:'center',borderRadius:10}}>
          <Icon name="locate" size={25} color={COLORS.primary} />
        </TouchableOpacity>
        </View>
        
            </View>
        )
    }

    function renderDeliveryInfo() {
        return (
            <View
                style={{
                   
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf:'flex-end',
                    marginBottom:30
                }}
            >
                  <Layout
        style={{
         
          borderRadius: 30,
          
          width:SIZES.width,
          paddingVertical:20
        }}>
        <View>
          <Image
            source={require('../../assesst/Burgerking.png')}
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
          Burger King
        </Text>
        <Text style={{textAlign: 'center'}} appearance="hint">42 Riverside St.Norcross,{"\n"}GA 30092</Text>
        <View
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            backgroundColor: '#F24F04',
            borderRadius: 50,
            height: 30,
            width: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            onPress={() => alert('Book Mark icon is pressed')}
            name="bookmark"
            size={25}
            color="#fff"
          />
        </View>

        <View style={{marginHorizontal: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical:5}}>
            <Image
              source={require('../../assesst/Icon/Star.png')}
              style={{height: 20, width: 20, marginLeft: 1}}
            />
            <Text appearance="hint" style={{marginLeft: 5}}>
              4.6
            </Text>
            <Image
              source={require('../../assesst/Icon/Clock.png')}
              style={{height: 20, width: 20, marginLeft: 10}}
            />
            <Text appearance="hint" style={{marginLeft: 5}}>
              30 Min
            </Text>
            <Image
              source={require('../../assesst/Icon/Cycle.png')}
              style={{height: 20, width: 30, marginLeft: 10}}
            />
            <Text appearance="hint" style={{marginLeft: 5}}>
              Free Delivery
            </Text>
          </View>

          <View style={{flexDirection: 'row',justifyContent:'center',width:SIZES.width}}>
           
      <Text  style={styles.tags}>
        Burger
      </Text>

      <Text  style={styles.tags}>
        Pizza
      </Text>

      <Text  style={styles.tags}>
        Fast Food
      </Text>
       
          </View>

          <Button style={{marginTop:15,marginHorizontal:20,marginBottom:5,height:60,borderRadius:30}}>
         <Text style={{...FONTS.h4,color:COLORS.white}}> More Detail</Text>
          </Button>
          
        </View>
      </Layout>
 
                 </View>
        )
    }

    return (
        <Layout style={{ flex: 1 }}>
            {renderMap()}
            {renderDestinationHeader()}
            {renderDetail? renderDeliveryInfo():null}
          
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

export default NearByFoodMap;

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