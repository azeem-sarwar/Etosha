import React from "react";
import Svg, { Circle, Path, G,Text,TSpan,Rect,Ellipse } from "react-native-svg"



function FoodSvg({height=20,width=18}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 20"
    >
      <G data-name="Layer 2" transform="translate(-3 -2)">
        <Path
          fill="#444251"
          d="M18 12.15V3a1 1 0 00-2 0v9.15a4.16 4.16 0 00-3 4c0 2.05 1.52 5.8 4 5.8s4-3.75 4-5.8a4.16 4.16 0 00-3-4zM17 20c-.8 0-2-2.27-2-3.8a2.11 2.11 0 012-2.2 2.11 2.11 0 012 2.2c0 1.53-1.2 3.8-2 3.8zM10 2a1 1 0 00-1 1v5.46l-1 .67V3a1 1 0 00-2 0v6.13l-1-.67V3a1 1 0 00-2 0v6a1 1 0 00.45.83L6 11.54V21a1 1 0 002 0v-9.46l2.55-1.71A1 1 0 0011 9V3a1 1 0 00-1-1z"
        ></Path>
      </G>
    </Svg>
  );
}

export default FoodSvg;
