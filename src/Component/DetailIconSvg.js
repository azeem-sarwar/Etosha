import React from "react";
import Svg, { Path, G } from "react-native-svg"


function DetailIconSvg({height=7,width=20}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 7"
    >
      <G data-name="Layer 2" transform="translate(8 -9)">
        <Path
          fill="#444251"
          d="M13 13.5H3a1 1 0 000 2h10a1 1 0 000-2zm8-5H3a1 1 0 000 2h18a1 1 0 000-2z"
          transform="translate(-10 .5)"
        ></Path>
      </G>
    </Svg>
  );
}

export default DetailIconSvg;