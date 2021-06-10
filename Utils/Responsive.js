import {Dimensions,PixelRatio} from 'react-native'
const {width,height}=Dimensions.get('window')
const widthToDp= number=>{
    let givenwidth=
    typeof number ==='number' ? number :parseFloat(number);
    return PixelRatio.roundToNearestPixel(width*givenwidth/100)
}
const heightToDp= number=>{
    let givenHeight=
    typeof number ==='number' ? number :parseFloat(number);
    return PixelRatio.roundToNearestPixel(height*givenHeight/100)
}
export {widthToDp,heightToDp}

export const common_styles={
    divider:{ height: 1, backgroundColor: "lightgray" }
}