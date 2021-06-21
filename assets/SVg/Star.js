import React from "react";
import Svg, { Circle, Path, G,Text,TSpan,Rect,Ellipse,Defs,Stop,LinearGradient } from "react-native-svg"


function StarIcon({height=20,width=20,style}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={height}
      height={width}
      data-name="Group 848"
      viewBox="0 0 19.107 18.172"
      {...style}
    >
      <Defs>
        <LinearGradient
          id="linear-gradient"
          x1="0.551"
          x2="0.5"
          y1="-0.048"
          y2="0.666"
          gradientUnits="objectBoundingBox"
        >
          <Stop offset="0" stopColor="#ffdf14"></Stop>
          <Stop offset="1" stopColor="#fff91d"></Stop>
        </LinearGradient>
        <LinearGradient
          id="linear-gradient-2"
          x1="0.598"
          x2="0.499"
          y1="0.942"
          y2="0.221"
          gradientUnits="objectBoundingBox"
        >
          <Stop offset="0" stopColor="#ffb809"></Stop>
          <Stop offset="1" stopColor="#ffda04"></Stop>
        </LinearGradient>
        <LinearGradient
          id="linear-gradient-3"
          x1="0.97"
          x2="-0.001"
          y1="0.5"
          y2="0.5"
          gradientUnits="objectBoundingBox"
        >
          <Stop offset="0" stopColor="#fce21a"></Stop>
          <Stop offset="1" stopColor="#faf525"></Stop>
        </LinearGradient>
        <LinearGradient
          id="linear-gradient-4"
          x1="0.113"
          x2="0.497"
          y1="0.333"
          y2="0.499"
          gradientUnits="objectBoundingBox"
        >
          <Stop offset="0" stopColor="#ffbd0a"></Stop>
          <Stop offset="1" stopColor="#ffde0b"></Stop>
        </LinearGradient>
        <LinearGradient
          id="linear-gradient-5"
          x1="0.055"
          x2="0.498"
          y1="0.712"
          y2="0.501"
          gradientUnits="objectBoundingBox"
        >
          <Stop offset="0" stopColor="#ffc101"></Stop>
          <Stop offset="1" stopColor="#ffcb0b"></Stop>
        </LinearGradient>
        <LinearGradient
          id="linear-gradient-6"
          x1="0.953"
          x2="0.503"
          y1="0.707"
          y2="0.501"
          gradientUnits="objectBoundingBox"
        >
          <Stop offset="0" stopColor="#ffa904"></Stop>
          <Stop offset="1" stopColor="#ffc914"></Stop>
        </LinearGradient>
        <LinearGradient
          id="linear-gradient-7"
          x1="0.43"
          x2="0.5"
          y1="0.968"
          y2="0.224"
          xlinkHref="#linear-gradient-4"
        ></LinearGradient>
        <LinearGradient
          id="linear-gradient-8"
          x1="-0.007"
          x2="1.008"
          y1="0.5"
          y2="0.5"
          gradientUnits="objectBoundingBox"
        >
          <Stop offset="0" stopColor="#ffe40e"></Stop>
          <Stop offset="1" stopColor="#fffb17"></Stop>
        </LinearGradient>
        <LinearGradient
          id="linear-gradient-9"
          x1="0.446"
          x2="0.5"
          y1="-0.072"
          y2="0.667"
          gradientUnits="objectBoundingBox"
        >
          <Stop offset="0" stopColor="#ffd70b"></Stop>
          <Stop offset="1" stopColor="#fff213"></Stop>
        </LinearGradient>
        <LinearGradient
          id="linear-gradient-10"
          x1="0.892"
          x2="0.499"
          y1="0.361"
          y2="0.5"
          gradientUnits="objectBoundingBox"
        >
          <Stop offset="0" stopColor="#ffb403"></Stop>
          <Stop offset="1" stopColor="#ffd604"></Stop>
        </LinearGradient>
      </Defs>
      <Path
        fill="url(#linear-gradient)"
        d="M464.43 207.583l-6.5 1.1 9.554 2.145z"
        data-name="Path 2173"
        transform="translate(-457.932 -201.744)"
      ></Path>
      <Path
        fill="url(#linear-gradient-2)"
        d="M604.945 228.686l4.609-4.711L600 226.12z"
        data-name="Path 2174"
        transform="translate(-590.446 -217.034)"
      ></Path>
      <Path
        fill="url(#linear-gradient-3)"
        d="M603.056 126.6L600 120.757v9.086z"
        data-name="Path 2175"
        transform="translate(-590.446 -120.757)"
      ></Path>
      <Path
        fill="url(#linear-gradient-4)"
        d="M513.157 258.438l-.959 6.52 5.9-9.086z"
        data-name="Path 2176"
        transform="translate(-508.548 -246.785)"
      ></Path>
      <Path
        fill="url(#linear-gradient-5)"
        d="M600 262.03l5.9 2.927-5.9-9.086z"
        data-name="Path 2177"
        transform="translate(-590.446 -246.785)"
      ></Path>
      <Path
        fill="url(#linear-gradient-6)"
        d="M512.2 264.958l5.9-2.927v-6.159z"
        data-name="Path 2178"
        transform="translate(-508.548 -246.785)"
      ></Path>
      <Path
        fill="url(#linear-gradient-7)"
        d="M457.932 223.975l4.609 4.711 4.945-2.566z"
        data-name="Path 2179"
        transform="translate(-457.932 -217.034)"
      ></Path>
      <Path
        fill="url(#linear-gradient-8)"
        d="M557.609 120.757l-3.056 5.839 3.056 3.247z"
        data-name="Path 2180"
        transform="translate(-548.055 -120.757)"
      ></Path>
      <Path
        fill="url(#linear-gradient-9)"
        d="M609.554 208.685l-6.5-1.1L600 210.83z"
        data-name="Path 2181"
        transform="translate(-590.446 -201.744)"
      ></Path>
      <Path
        fill="url(#linear-gradient-10)"
        d="M600 255.872l5.9 9.086-.959-6.52z"
        data-name="Path 2182"
        transform="translate(-590.446 -246.785)"
      ></Path>
    </Svg>
  );
}

export default StarIcon;