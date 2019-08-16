import React, {Fragment} from 'react';
import {
   
    StyleSheet,Text,View,Button,TouchableOpacity
    
  } from 'react-native';
  
export default class Component extends React.Component{
   
render(){
   
    return(
        <View>
        <Text
        
        >{this.props.title}</Text> 
        <Text
        
        >{this.props.title1}</Text> 
       <TouchableOpacity>
         <Text
         style={{width:100,height:30}}
         >{this.props.text4}</Text>

       </TouchableOpacity>
      </View>
    )
}

}



