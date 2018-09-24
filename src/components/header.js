
//Importing the component
import React from 'react';
import {Text, View} from 'react-native';

//making the component

const Header = (props) => {
  const {textStyle,viewStyle} = styles;

  return (
    <View style={viewStyle}>
      <Text style = {textStyle}> {props.headerText} </Text>
    </View>
  );
};

const styles = {
  viewStyle:{
    backgroundColor: '#2979FF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop:15,
    shadowColor: '#2196F3',
    shadowOffset: {width: 2,height:2},
    shadowOpacity: 0.5,
    elevation: 1,
    position: 'relative'
  },
  textStyle:{
    fontSize:30
  }
};

//exporting Header to used in outside world
export default Header;
