import React from 'react';
import {View,Text} from 'react-native';

const Card = (props) => {
return (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
);
};

const styles={
  containerStyle:{
  borderWidth:1,
  borderRadius:5,
  borderBottomWidth:0,
  shadowColor:'#18FFFF',
  shadowOffset:{width:0 , height:2},
  shadowOpacity:0.1,
  shadowRadius:2,
  elevation:1,
  marginLeft:5,
  marginRight:5,
  marginTop:10,
  backgroundColor:'#0336FF'

  }
};


export default Card;
