import React from 'react'
import {View, Text,StyleSheet} from 'react-native'
import { render } from 'react-dom';

export default class BookTran extends React.Component{
    render(){
        return(
            <View style={styles.textStyle}>
                <Text>HELLO WORLD</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  textStyle:{
    textAlign:'center',
    textSize:20,
    justifyContent:'center',
    marginTop:100,
    color:'orange',
  }
})