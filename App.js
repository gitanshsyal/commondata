/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,TextInput,Image,TouchableOpacity
} from 'react-native';
import styles from './Style'
import images from './Image'
import  Data from './Component'


export default class App  extends React.Component{
 constructor(props){
super(props);
this.state={
  text:''
}
 }
 
  render(){
return(
<View
style={styles.Container}
>
<View
style={styles.Container1}
>

<Image
source={images.image1}
style={styles.image}
></Image>
<Image
source={images.image2}
style={styles.image}
></Image>
<Image
source={images.image3}
style={styles.image}
></Image>
<Data
title="hello"
title1="hello"
text4="game"
></Data>
<Data1
rightvalue="hello"
leftvalue="bye"
></Data1>

</View>

</View>

)


  }
  
}

export const Data1 = ({leftvalue,rightvalue}) =>
{
  return(
    <View style={{flexDirection:'row',marginBottom:8}}>
  <Text style={{fontSize:17,color:'gray',fontWeight:'bold',}}>
                {leftvalue}:{rightvalue}
              </Text>
    </View>
  )
}