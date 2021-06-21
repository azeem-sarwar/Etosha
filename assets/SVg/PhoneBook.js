import React from "react";
import Svg, { Circle, Path, G,Text,TSpan,Rect,Ellipse } from "react-native-svg"


function PhoneBookIcon({height=24,width=24,style}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      data-name="Layer 2"
      viewBox="0 0 24 24"
      {...style}
    >
      <G fill="#444251">
        <Path
          d="M17 2H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1h10a1 1 0 011 1z"
          data-name="Path 11"
        ></Path>
        <Circle
          cx="1.5"
          cy="1.5"
          r="1.5"
          data-name="Ellipse 18"
          transform="translate(10.5 15)"
        ></Circle>
        <Path
          d="M14.5 6h-5a1 1 0 000 2h5a1 1 0 000-2z"
          data-name="Path 12"
        ></Path>
      </G>
    </Svg>
  );
}

export default PhoneBookIcon;