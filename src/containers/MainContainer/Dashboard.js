/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, kayboard, TouchableOpacity, Dimensions, ImageBackground, Statusbar } from 'react-native';
import firebase from "firebase";
import { Actions } from 'react-native-router-flux';
import { CheckBox, Font, Awesome, Icon } from 'react-native-elements';

var { height, width } = Dimensions.get('window');



type Props = {};
export default class Dashboard extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      deviceWidth: width,
      deviceHeight: height,
    };
  }

  render() {
    return (
      <ImageBackground source={require('../../Images/background.jpg')} style={{ width: '100%', height: '100%' }}>

        <TouchableOpacity onPress={() => this.logout()} style={styles.logout} >
          <Text style={styles.logoutText}>ᐸ Logout</Text>
        </TouchableOpacity>
        <Text style={styles.titleText}>CheckLists</Text>
        
          <TouchableOpacity onPress={() => this.openDetalhes()} style={styles.backButton} >
            <Text style={styles.buttonText}>Inspeção do Abrigo de Rampa</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.openAlert()} style={styles.backButton} >
              <Text style={styles.buttonText}>Vistoria de Pista</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.openAlert()} style={styles.backButton} >
              <Text style={styles.buttonText}>Vistoria de Equipamento</Text>
            </TouchableOpacity>
      </ImageBackground>



          );
        }
      
  openDetalhes(){
            Actions.checklist();
          }
        
  openAlert(){
            alert('Em Desenvolvimento !');
          }
        
  logout(){
            firebase.auth().signOut()
              .then(function () {
                Actions.login();
              })
              .catch(function (error) {
                alert.alert("Atenção", "DEu ruim meu chapa");
              });
          }
       }
       
const styles = StyleSheet.create({
            container: {
            flex: 1,
          //justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#012060',
        },
  buttonText:{
            color: "white",
          fontSize: 20,
          textAlign: "center"
        },
  logoutText:{
            color: "#012060",
          fontSize: 20,
          textAlign: "center",
          fontWeight: "bold"
        },
  backButton: {
            backgroundColor: "#012060",
          borderRadius: 10,
          padding: 10,
          margin: 20,
          alignSelf: "flex-start",
          width: width * 0.9
        },
  titleText:{
            fontSize: 30,
          alignItems: 'center',
          textAlign: 'center',
          color: "#012060"
          //fontWeight: "bold"
        },
  logout: {
            backgroundColor: "transparent",
          borderRadius: 10,
          padding: 10,
          margin: 10,
          alignSelf: "flex-start"
          //justifyContent: 'flex-start'
        }
      });
