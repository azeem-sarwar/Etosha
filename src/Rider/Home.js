import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  FlatList,
  StyleSheet,
} from 'react-native';
import {Text, Button, Avatar, Layout, List} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import Bell from 'react-native-vector-icons/EvilIcons';
import Dots from 'react-native-vector-icons/MaterialCommunityIcons';
import Menue from '../../assets/SVg/MenuIcon';

import {COLORS, FONTS, fontsFamily, icons, SIZES} from '../../constants';
import {RiderData} from '../../model/Data';
import ClockIcon from '../../assets/SVg/Clock';

export default function Home({navigation}) {
  const [search, setSearch] = React.useState('');

  const renderDelveries = () => {
    return (
      <TouchableOpacity
        style={styles.Cards}
        // onPress={() => navigation.navigate('ResturentProfile')}
      >
        <Image
          source={require('./../../assets/DummyImages/dish.jpg')}
          style={{height: 130, width: SIZES.width - 40, borderRadius: 30}}
        />
        <Button
          size="tiny"
          style={styles.ASAPbtn}
          accessoryLeft={() => (
            <Layout style={styles.LeftAccessory}>
              <View style={styles.ButtonIcon}>
              <ClockIcon />
              </View>
            </Layout>
          )}>
          <Text style={{color: COLORS.white, ...FONTS.body4}}>
            As soon as Possible
          </Text>
        </Button>

        <View>
          <Text style={styles.CardTitle}>Burger King</Text>

          <View style={styles.CardDetail}>
            <View style={{justifyContent: 'center'}}>
              <Icon
                name="radio-button-on-sharp"
                size={25}
                color={COLORS.primary}
              />
              <Dots name="dots-vertical" size={25} color={COLORS.primary} />
              <Icon
                name="radio-button-off-sharp"
                size={25}
                color={COLORS.primary}
              />
            </View>
            <View style={styles.CardDetailtxt}>
              <Text style={styles.txt}>Town Hall, Main City</Text>

              <Text style={styles.txt}>Lincoln Street, Downtown NYC</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const header = () => {
    return (
      <View>
        <StatusBar />

        <View style={styles.headerMenue}>
          <View style={styles.meueButtonSec}>
            <TouchableOpacity
              style={styles.MenueButton}
              onPress={() => navigation.openDrawer()}>
              <Menue />
            </TouchableOpacity>
            <Text style={styles.headerTitle}> Home </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={{margin: 10}}
            onPress={()=>navigation.navigate("Notification")}
            >
              <Bell name="bell" size={30} color={COLORS.black} />
              <Text style={styles.textNotify}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Avatar
                onPress={() => {
                  alert('ok');
                }}
                source={require('../../assets/DummyImages/profilePic.png')}
                style={styles.ProfileAvatar}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar input */}

        <TouchableOpacity
          style={styles.searchBar}
          // onPress={() => navigation.navigate('Search')}
          >
          <Text style={styles.searchTitle} appearance="hint">
            Search
          </Text>
          <View status="primary" style={styles.searchButton}>
            <Icon name="search" size={25} color={COLORS.white} />
          </View>
        </TouchableOpacity>

        {/* Catergory Section rander in horizental way */}

        {/* Popular food section */}

        {/* Near By resturen */}
        <View style={styles.titleCArds}>
          <Text style={{...FONTS.body3}}>Deliveries Near me</Text>
          <TouchableOpacity
           onPress={() => navigation.navigate('Deliveries near me')}
          >
            <Text style={{...FONTS.body4}}>View All</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Layout style={{flex: 1,backgroundColor:COLORS.white,}}>
      <FlatList
        data={RiderData}
        ListHeaderComponent={() => (
          <View style={{marginHorizontal: 20}}>{header()}</View>
        )}
        keyExtractor={item => item.id}
        renderItem={renderDelveries}
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={{flex:1}}
      />
    </Layout>
  );
}
const styles = StyleSheet.create({
  ASAPbtn: {
    position: 'absolute',
    top: 10,
    left: 15,
    borderRadius: 50,
  },
  CardTitle: {
    marginLeft: 10,
    marginVertical: 5,
    fontSize: 20,
    ...FONTS.h3_bold,
  },
  CardDetailtxt: {justifyContent: 'space-between', marginLeft: 3},
  txt: {marginVertical: 5, fontSize: 20, ...FONTS.h4},
  ButtonIcon: {height: 20, width: 20},
  LeftAccessory: {
    backgroundColor: COLORS.white,
    borderRadius: 50,
    padding: 5,
    marginRight: 5,
  },
  CardDetail: {flexDirection: 'row', marginLeft: 10},
  Cards: {
    width: SIZES.width - 40,
    alignSelf:'center',
    borderRadius: 30,
    backgroundColor: COLORS.white,
    paddingBottom: 10,
    elevation: 5,
    marginVertical: 10,
    shadowColor: "#F24F04",
shadowOffset: {
	width: 0,
	height: 9,
},
shadowOpacity: 0.48,
shadowRadius: 11.95,

elevation: 18,
  },
  titleCArds: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  searchButton: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchTitle: {marginLeft: 10, ...fontsFamily.Light},
  searchBar: {
    backgroundColor: COLORS.lightGray,
    flexDirection: 'row',
    height: 50,

    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: COLORS.lightGray,
    borderRadius: 10,
  },
  ProfileAvatar: {height: 40, width: 40, borderRadius: 10},
  headerTitle: {marginLeft: 5, ...fontsFamily.Light},
  MenueButton: {
    height: 40,
    width: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: COLORS.lightGray,
  },
  meueButtonSec: {flexDirection: 'row', alignItems: 'center'},
  headerMenue: {
    flexDirection: 'row',
    marginTop: 20,

    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tags: {
    marginLeft: 5,
    marginHorizontal: 30,
    backgroundColor: COLORS.lightGray,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  CatContainer: {
    height: 50,
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 10,
    width: 110,
  },
  CatImgsec: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CatIMg: {height: 20, width: 20, marginRight: 5},
  textNotify: {
    fontSize: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    width: 15,
    height: 15,
    textAlign: 'center',
    position: 'absolute',
    right: -5,
    top: -5,
    color: COLORS.white,
    ...fontsFamily.Light,
  },
});
