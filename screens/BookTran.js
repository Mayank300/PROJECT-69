import React from 'react'
import {View, Text, StyleSheet,TouchableOpacity, Image} from 'react-native'


export default class BookTran extends React.Component{
    render(){
      return(
        <View>
          <Text style={styles.displayText} > THIS IS TRANSCATION SCREEN </Text>
        </View>
      )
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  displayText:{
    fontSize: 40,
    justifyContent: 'center',
    textAlign: 'center',
  },
  displayText2:{
    fontSize: 30,
    margin: 10,
  },
  scanButton:{
    backgroundColor: '#2196F3',
    padding: 10,
    margin: 10
  },
  buttonText:{
    fontSize: 30,
  }
});