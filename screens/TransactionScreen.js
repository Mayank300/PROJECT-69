import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Image,  KeyboardAvoidingView } from 'react-native'
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default class TransactionScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hasCameraPermission : null,
      scanned: false,
      buttonState: 'normal',
      scannedData: '',
      scannedBookId: "",
      scannedStudentId: "",
      buttonState: "normal",
    }
  }

  getCameraPermissions = async id => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermissions: status === "granted",
      buttonState: id,
      scanned: false
    });
  };

  handleBarCodeScanned = async ({ type, data }) => {
    const { buttonState } = this.state;

    if (buttonState === "BookId") {
      this.setState({
        scanned: true,
        scannedBookId: data,
        buttonState: "normal"
      });
    } else if (buttonState === "StudentId") {
      this.setState({
        scanned: true,
        scannedStudentId: data,
        buttonState: "normal"
      });
    }
  };


    render() {
      const hasCameraPermissions = this.state.hasCameraPermissions;
      const scanned = this.state.scanned;
      const buttonState = this.state.buttonState;

      if (buttonState !== "normal" && hasCameraPermissions) {
        return (
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        );
      } else if (buttonState === "normal") {
          return (
            <View behavior="padding" style={styles.container}>
              <View>
                <Image
                  source={require("../assets/camera.jpg")}
                  style={{ width: 200, height: 200 }}
                />
                <Text style={{ textAlign: "center", fontSize: 30 }}>BAR CODE SCANNER</Text>
              </View>
              <Text style={styles.transactionAlert}>
                {this.state.transactionMessage}
              </Text>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={() => {
                  this.getCameraPermissions();
                }}
              >
                <Text style={styles.submitButtonText}>SCAN</Text>
              </TouchableOpacity>
            </View>
          );
        }
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: "underline"
    },
    scanButton:{
      backgroundColor: "#2196F3",
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 15,
      textAlign: "center",
      marginTop: 10
    },
    scanButton: {
      backgroundColor: "#66BB6A",
      width: 50,
      borderWidth: 1.5,
      borderLeftWidth: 0
    },
    submitButton: {
      backgroundColor: "#FBC02D",
      width: 100,
      height: 50
    },
    submitButtonText: {
      padding: 10,
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
      color: "white"
    },
    transactionAlert: {
      margin: 10,
      color: "red"
    }
    
  });