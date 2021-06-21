import React from "react";
import Svg, { Circle, Path, G,Text,TSpan,Rect,Ellipse } from "react-native-svg"

function PersonIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      data-name="Layer 2"
      viewBox="0 0 24 24"
    >
      <G fill="#444251">
        <Path
          d="M12 11a4 4 0 10-4-4 4 4 0 004 4zm0-6a2 2 0 11-2 2 2 2 0 012-2z"
          data-name="Path 2160"
        ></Path>
        <Path
          d="M12 13a7 7 0 00-7 7 1 1 0 002 0 5 5 0 0110 0 1 1 0 002 0 7 7 0 00-7-7z"
          data-name="Path 2161"
        ></Path>
      </G>
    </Svg>
  );
}

export default PersonIcon;