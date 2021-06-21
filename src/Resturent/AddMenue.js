import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import {
  Text,
  Button,
  Layout,
  Avatar,
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import Clock from 'react-native-vector-icons/Fontisto';
import PhotoIcon from 'react-native-vector-icons/FontAwesome';



import {Header} from '@react-navigation/stack';

import { widthToDp } from '../../Utils/Responsive';

import { COLORS, images, SIZES } from '../../constants';


import DollarSvg from '../Component/DollarSvg'
import FoodSvg from '../Component/FoodSVG'
import DetailIconSvg from '../Component/DetailIconSvg';
import TamatoSvg from '../Component/TamatogSVg';




const width = Dimensions.get('screen').width;


const useFocus = () => {
    const htmlElRef = React.useRef(null);
    const setFocus = () => {
      htmlElRef.current && htmlElRef.current.focus();
    };
    return [htmlElRef, setFocus];
  };


export default function AddMenu({navigation}) {


    const [foodName, setfoodName] = React.useState('');
    const [foodNameRef, setFoodNameRef] = useFocus();

  const [foodprice, setFoodPrice] = React.useState('');
const [foodPriceRef, setFoodPriceRef] = useFocus();

  const [preprationTime, setPreprationTime] = React.useState('');
  const [preprationTimeRef, setPreprationTimeRef] = useFocus();

  const [description, setDescription] = React.useState('');
  const [ descriptionRef, setDescriptionRef] = useFocus();
  
  const [avoidginView, setAviodingView] = React.useState(false);

  const [ Ingradients, setIngradients] = React.useState([]);
  const [ ingarientsInput, setIngarientsInput] = React.useState([]);



  const addValues = (text, index) => {
    let dataArray = Ingradients;
    let checkBool = false;
    if (dataArray.length !== 0){
      dataArray.forEach(element => {
        if (element.index === index ){
          element.text = text;
          checkBool = true;
        }
      });
    }
    if (checkBool){
    setIngradients(dataArray);
  }
  else {
    dataArray.push({'text':text,'index':index});
    setIngradients(dataArray);
  }
  }

 const addTextInput = (index) => {
    let textInput = ingarientsInput;
    
    textInput.push(
        <View
        style={styles.InputContainer}
        key={index}
        >
        <TouchableOpacity
          style={styles.InputSubContainer}
          
          >
          <TamatoSvg />
        </TouchableOpacity>


        <View style={{marginLeft: 10,flexDirection:'row',alignItems:'center'}}>


        <View  >
          <Text  appearance="hint">
            Ingradients {index+1}
          </Text>
          <TextInput
            
            
            onFocus={()=>setAviodingView(true)}
            onBLur={()=>setAviodingView(false)}
            onSubmit={()=>{}}
            onChangeText={text => setDescription(text)}
            style={{ width: widthToDp(55), paddingBottom: -5}}
            placeholder="Ingradients"
          />
        </View>
        
        <PhotoIcon name="photo" size={25} color={COLORS.primary} />
        </View>
      </View>
      );
      setIngarientsInput(textInput);
      console.log(ingarientsInput)
  }
  
 
  
  

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset = {Header.HEIGHT + 20}
    style={styles.Container}
     >
    <ScrollView style={{flex:1}}>
      
      
       <StatusBar />
     <View style={{flex:10}}>
     <View>
        <View style={styles.header}>
          <View style={styles.headerFlex}>
            <TouchableOpacity
              style={styles.MenueBtn}
              onPress={() => navigation.goBack()}>
              <Icon name="chevron-back" size={25} color={COLORS.black} />
            </TouchableOpacity>
            <Text style={styles.ScreenTitle}>Add Menu</Text>
          </View>
        </View>
        {/* Search input field */}

        <View style={{margin: 20, alignItems: 'center'}}>
          <TouchableOpacity
         
          >
          <Avatar
            source={images.DummyProfileImage}
            style={styles.ProfileImage}
          />
          <Icon name="camera-outline" size={20} color="#000" style={styles.addImageIcon} />
          </TouchableOpacity> 
        </View>
      </View>


      <View
            style={styles.InputContainer}
            >
            <TouchableOpacity
              style={styles.InputSubContainer}
              onPress={setFoodNameRef}
              >
              <FoodSvg />
            </TouchableOpacity>
            <View onPress={setFoodNameRef} style={{marginLeft: 10}}>
              <Text  appearance="hint">
              Food Name
              </Text>
              <TextInput
                ref={foodNameRef}
                value={foodName}
                onChangeText={text => setfoodName(text)}
                style={styles.InputStyle}
                placeholder="Food Name"
                returnKeyType="next"
                onSubmitEditing={setFoodPriceRef}
              />
            </View>
          </View>

      <View
            style={styles.InputContainer}
            >
            <TouchableOpacity
              style={styles.InputSubContainer}
              onPress={setFoodPriceRef}>
             <DollarSvg />
            </TouchableOpacity>
            <View style={{marginLeft: 10}}>
              <Text onPress={setFoodPriceRef} appearance="hint">
               Pice
              </Text>
              <TextInput
                ref={foodPriceRef}
                value={foodprice}
              onSubmitEditing={() => {setPreprationTimeRef()}}
                onChangeText={text => setFoodPrice(text)}
                style={styles.InputStyle}
                placeholder="Price"
                returnKeyType="next"

              />
            </View>
          </View>

          <View
            style={styles.InputContainer}
            >
            <TouchableOpacity
              style={styles.InputSubContainer}
              onPress={setPreprationTimeRef} 
              >
              <Clock name="clock" size={20} color={COLORS.black} />
            
            </TouchableOpacity>
            <View onPress={setPreprationTimeRef} style={{marginLeft: 10}}>
              <Text  appearance="hint">
              Preparation time
              </Text>
              <TextInput
                ref={preprationTimeRef}
                value={preprationTime}
                onFocus={()=>setAviodingView(true)}
                onBLur={()=>setAviodingView(false)}
                onSubmitEditing={setDescriptionRef}
                onChangeText={text => setPreprationTime(text)}
                style={styles.InputStyle}
                placeholder="Preparation time"
                returnKeyType="next"

              />
            </View>
          </View>


          <View
            style={[styles.InputContainerDesciption]}
            >
            <TouchableOpacity
              style={[styles.InputSubContainer]}
              onPress={setDescriptionRef}
              >
              <DetailIconSvg />
            </TouchableOpacity>
            <View onPress={setDescriptionRef} style={{marginLeft: 10}}>
              <Text  appearance="hint">
                Description
              </Text>
              <TextInput
                ref={descriptionRef}
                value={description}
                onFocus={()=>setAviodingView(true)}
                onBLur={()=>setAviodingView(false)}
                onSubmit={()=>{}}
                onChangeText={text => setDescription(text)}
                style={styles.InputStyleDesciption}
                placeholder="Description"
                multiline
              />
            </View>
          </View>



          {ingarientsInput.map((value) => {
          return value
        })}

        <TouchableOpacity style={styles.addmoreBtn} onPress={()=>addTextInput(ingarientsInput.length)} >
           <Icon name="add" size={20} color={COLORS.black} />
           <Text>Add Another Ingredient</Text>

        </TouchableOpacity>


          

          <Button
          style={[{
            marginHorizontal: 20,
            height: 50,
            borderRadius: 30,
            zIndex:100,
            marginVertical:20        
          },
          styles.shadow
          ]}
          onPress={()=>navigation.replace("Menu")}
          >
         Save Changes
        </Button>
     </View>
      
      
   
    </ScrollView>
    </KeyboardAvoidingView>

  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  Container: {flex: 1,},
  headerFlex: {flexDirection: 'row', alignItems: 'center'},
  MenueBtn: {
    height: 40,
    width: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#D7D9DB',
  },
  ScreenTitle: {marginLeft: 5, fontFamily: 'Poppins-Light'},

  ProfileImage: {height: 100, width: 100, borderRadius: 10,borderWidth:0.5,borderColor:COLORS.borderColor},
  InputContainer:{
    height: 60,
    borderColor: '#D7D9DB',
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 17,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:20,
    
  },
  InputSubContainer:{
    borderRightWidth: 1,
    width: 60,
    height: 54,
    marginVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#D7D9DB',
  },
  InputStyle:{height: 35, width: widthToDp(65), paddingBottom: -5},

  InputContainerDesciption:{
    height: 100,
    borderColor: '#D7D9DB',
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 17,
    flexDirection: 'row',
    justifyContent: 'center',
    
    marginHorizontal:20,
    
  },
 
  InputStyleDesciption:{ width: widthToDp(65), paddingBottom: -5},


  shadow: {
    shadowColor: '#F24F04',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 10,
  },
  addImageIcon:{position:'absolute',bottom:2,right:2,backgroundColor:"#fff",padding:3,borderRadius:15},
  addmoreBtn:{flexDirection:'row',alignSelf:'center',height:40,backgroundColor:COLORS.lightGray,borderWidth:0.5,padding:10,borderRadius:20},
});
