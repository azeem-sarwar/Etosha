import React from "react";
import Svg, { Circle, Path, G,Text,TSpan,Rect,Ellipse } from "react-native-svg"


function CreditCard({height=20,width=32,style}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32.601 20.15"
      {...style}
    >
      <G data-name="Group 111" transform="translate(-1573.348 281.839)">
        <Path
          fill="#f16522"
          d="M0 0H8.816V15.842H0z"
          data-name="Rectangle 39"
          transform="translate(1585.241 -279.685)"
        ></Path>
        <Path
          fill="#e41b24"
          d="M1585.8-271.764a10.059 10.059 0 013.848-7.921 10.031 10.031 0 00-6.226-2.154 10.075 10.075 0 00-10.074 10.075 10.075 10.075 0 0010.074 10.075 10.03 10.03 0 006.226-2.154 10.058 10.058 0 01-3.848-7.921"
          data-name="Path 90"
        ></Path>
        <Path
          fill="#f89e1c"
          d="M1689.843-271.765a10.074 10.074 0 01-10.074 10.075 10.027 10.027 0 01-6.226-2.154 10.057 10.057 0 003.847-7.921 10.058 10.058 0 00-3.847-7.921 10.031 10.031 0 016.226-2.153 10.074 10.074 0 0110.074 10.074m-.961 6.243v-.324h.131v-.066h-.333v.066h.131v.324zm.647 0v-.391h-.1l-.117.269-.117-.269h-.1v.391h.072v-.295l.11.255h.075l.11-.255v.3z"
          data-name="Path 91"
          transform="translate(-83.894)"
        ></Path>
      </G>
    </Svg>
  );
}

export default CreditCard;