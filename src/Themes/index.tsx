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


import { ImageStyle, TextStyle, ViewStyle, useColorScheme } from 'react-native';
import React, { createContext } from 'react';
import { overlay } from 'react-native-paper';
export type Theme = { [key: string]: ViewStyle | TextStyle | ImageStyle };

const ThemeContext = createContext<any>({});

const lightTheme = {
  background: "#FFF",
  text: "#000",
  textColor1:'#333132',
  textColor2:'#707070',
  backWhite:'##F8F8F8'
 
};




export default function ThemeContent ({children} :{children : any}){
  const colorScheme = useColorScheme();
  return(
    <ThemeContext.Provider value={colorScheme === 'dark' ? lightTheme : lightTheme}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => React.useContext(ThemeContext);

