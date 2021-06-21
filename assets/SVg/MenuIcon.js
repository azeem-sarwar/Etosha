import React from "react";
import Svg, { Circle, Path, G,Text,TSpan,Rect,Ellipse } from "react-native-svg"

function MenueIcon({height=28,width=28,style}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 28 28"
      {...style}
    >
      <G fill="#444251" transform="translate(-.216 -.216)">
        <Rect
          width="22"
          height="2"
          data-name="Rectangle 565"
          rx="0.95"
          transform="translate(3.216 13.216)"
        ></Rect>
        <Rect
          width="11"
          height="2"
          data-name="Rectangle 566"
          rx="0.95"
          transform="translate(14.216 19.216)"
        ></Rect>
        <Rect
          width="11"
          height="2"
          data-name="Rectangle 567"
          rx="0.95"
          transform="translate(3.216 7.216)"
        ></Rect>
      </G>
    </Svg>
  );
}

export default MenueIcon;