import React from 'react';
import {View,Text,Image,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
const AlbumDetail = (props) => {
return (
  <Card >
    <CardSection >
    <View style={styles.thumbnailContainerStyle}>
      <Image
        style={styles.thumbnail}
        source={{uri:props.record.thumbnail_image}}/>
    </View>
    <View style = {styles.headerContentStyle}>
        <Text style={styles.headerTextStyle}>{props.record.title}</Text>
        <Text>{props.record.artist}</Text>
    </View>
    </CardSection>
    <CardSection >
      <Image
        style={styles.imageStyle}
       source={{uri:props.record.image}}/>
    </CardSection>
    <CardSection>
      <Button click={() => Linking.openURL(props.record.url)} >
        Buy Now
      </Button>
    </CardSection>
  </Card>
);
};

const styles = {
  headerContentStyle:{
    flexDirection : 'column',
    justifyContent: 'space-around'
  },
  thumbnail:{
    height:50,
    width:50
  },
  headerTextStyle:{
    fontSize:20
  },
  thumbnailContainerStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight:10,
  },
  imageStyle:{
    height:300,
    flex:1,
    width:null
  }
};

export default AlbumDetail;
