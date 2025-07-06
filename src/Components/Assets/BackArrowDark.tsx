/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable no-return-assign */
/* eslint-disable keyword-spacing */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */


import React from 'react';
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const BackArrowDark = ({ width = 45, height = 45, color = 'white', gradientColor = 'white' }) => (
  <Svg width={width} height={height} viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs>
      <LinearGradient id="paint0_linear" x1="22.5" y1="0" x2="22.5" y2="45" gradientUnits="userSpaceOnUse">
        <Stop offset="0" stopColor={gradientColor} />
        <Stop offset="1" stopColor={gradientColor} stopOpacity="0.44" />
      </LinearGradient>
      <LinearGradient id="paint1_linear" x1="22.9415" y1="15" x2="22.9415" y2="30.01" gradientUnits="userSpaceOnUse">
        <Stop offset="0" stopColor={color} />
        <Stop offset="1" stopColor={color} stopOpacity="0.44" />
      </LinearGradient>
    </Defs>
    <Circle cx="22.5" cy="22.5" r="22" stroke="url(#paint0_linear)" />
    <Path 
      d="M26.6711 16.2655C26.7388 16.1939 26.7917 16.1097 26.8268 16.0176C26.8619 15.9256 26.8786 15.8275 26.8758 15.729C26.873 15.6305 26.8508 15.5336 26.8106 15.4437C26.7703 15.3537 26.7127 15.2726 26.6411 15.205C26.5695 15.1373 26.4853 15.0844 26.3932 15.0493C26.3012 15.0142 26.2031 14.9975 26.1046 15.0003C26.0061 15.0031 25.9092 15.0252 25.8192 15.0655C25.7293 15.1058 25.6482 15.1633 25.5805 15.235L19.205 21.9855C19.0734 22.1248 19 22.3091 19 22.5008C19 22.6924 19.0734 22.8768 19.205 23.0161L25.5805 29.7674C25.6478 29.8405 25.7288 29.8996 25.8191 29.9412C25.9094 29.9828 26.007 30.006 26.1063 30.0095C26.2056 30.0131 26.3046 29.9968 26.3976 29.9618C26.4905 29.9267 26.5756 29.8735 26.6479 29.8053C26.7201 29.7371 26.7781 29.6552 26.8184 29.5644C26.8587 29.4735 26.8806 29.3756 26.8828 29.2763C26.8849 29.1769 26.8673 29.0781 26.831 28.9857C26.7947 28.8932 26.7403 28.8088 26.6711 28.7375L20.7816 22.5008L26.6711 16.2655Z" 
      fill="url(#paint1_linear)" 
    />
  </Svg>
);

export default BackArrowDark;
