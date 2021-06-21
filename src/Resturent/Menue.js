import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  FlatList,
  StyleSheet,
} from 'react-native';
import {Text, Button, Layout} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS, FONTS, fontsFamily, SIZES} from '../../constants';
import { NearByReturent } from '../../model/Data';
import StarIcon from '../../assets/SVg/Star';
import ClockIcon from '../../assets/SVg/Clock';





export default function Menu({navigation, route}) {


  const renderMenu = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.CardContainer}
        // onPress={() => navigation.navigate('FoodPage')}
        >
        <View>
          <Image source={item.img} style={styles.Cardimg} />
          <View style={styles.cardDetialSection}>
            <Icon
              onPress={() => alert('heart icon is pressed')}
              name="heart"
              size={25}
              color={COLORS.primary}
            />
          </View>
        </View>

        <View style={{flexShrink: 1}}>
          <Text style={styles.foodTitle}>{item.FoodName}</Text>
          <Text style={styles.descriptionFood} appearance="hint">
    
            {item.foodDescrition}
          </Text>

          <View style={styles.reatingSection}>
            <View style={styles.RatingsectionImg}>
              <StarIcon />
            </View>
            <Text appearance="hint" style={styles.ratingSectionTxt}>
              {item.Rating}
            </Text>
            <View style={styles.RatingsectionImg}>
              <ClockIcon />
            </View>
            <Text appearance="hint" style={styles.ratingSectionTxt}>
              {item.Time}
            </Text>
          </View>
          <View style={styles.PriceTag}>
            <Text style={styles.priceTagText}>$ 40.00</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const header = () => {
    return (
      <View>
        <View style={styles.backbtnSection}>
          <View style={styles.headerbar}>
            <TouchableOpacity
              style={styles.backArrowbtn}
              onPress={() => navigation.goBack()}>
              <Icon name="chevron-back" size={25} color={COLORS.black} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Menu</Text>
          </View>
          <View style={styles.headerRight}>
          <TouchableOpacity
              style={{margin: 10}}
              onPress={() => navigation.navigate('Add Menu')}
              >
              <Icon name="add" size={30} color={COLORS.black} />
              
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{...FONTS.h2,margin:10}}>Menu</Text>
      </View>
    );
  };
  return (
    <Layout style={styles.container}>
      <StatusBar />

      <FlatList
        ListHeaderComponent={header}
        data={NearByReturent}
        keyExtractor={item => item.id}
        renderItem={renderMenu}
        ListFooterComponent={() => (
          <View style={styles.FlatListContainerstyle} />
        )}
      />
    </Layout>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F7F9FC'},
  FlatListContainerstyle: {height: 40, width: '100%'},
  backbtnSection: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  headerbar: {flexDirection: 'row', alignItems: 'center'},
  headerTitle: {marginLeft: 5, fontFamily: 'Poppins-Light'},
  backArrowbtn: {
    height: 40,
    width: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#D7D9DB',
  },
  headerRight: {flexDirection: 'row'},

  CardContainer: {
    elevation:10,
    marginHorizontal:10,
    borderRadius: 30,
    backgroundColor: '#fff',
    marginTop: 10,
    flexDirection: 'row',
    alignItems:'center'
  },
  Cardimg: {height: 170, width: SIZES.width / 2.6, borderRadius: 30},
  cardDetialSection: {
    position: 'absolute',
    top: 10,
    right: 15,
    backgroundColor: '#fff',
    borderRadius: 50,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  foodTitle: {
    marginLeft: 10,
     marginVertical: 10,
      fontSize: 15
    },
  descriptionFood: {
    marginLeft: 10,
     marginVertical: 10, 
     fontSize: 10
    },
  reatingSection: {
    flexDirection: 'row', 
    marginVertical: 10
  },
  RatingsectionImg: {
    height: 20,
    width: 20,
    marginLeft: 10
  },
  ratingSectionTxt: {
    marginLeft: 5, 
    ...fontsFamily.Light
  },
  PriceTag: {
    marginLeft: 10,
    backgroundColor: '#F24F04',
    width: 70,
    borderRadius: 20,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceTagText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
  },
  
});
