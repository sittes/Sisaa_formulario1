/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, Dimensions,TextInput} from 'react-native';
import { Actions} from 'react-native-router-flux';
import firebase from "firebase"

var {height, width} = Dimensions.get('window');

type Props = {};
export default class Login extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      deviceWidth: width,
      deviceHeight: height,
      email: "nathanaelotaku@hotmail.com",
      senha: "123456"
    };
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(function(user) {
      if(user) {
        console.log("Current user")
        console.log(JSON.stringify(user))
        if (user){
          Actions.dashboard();
        }
      } else{
        console.log("Deu Erro amigo");
      }
    });
  }

  

  render() {
    

    return (
      <View style={styles.container}>
        <Image style={styles.logoStyle} source={require('../../Images/sisaa.png')}/>
        <Text style={styles.titleText}>SISAA</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({email: text})}
          placeholder="Email"
          value={this.state.email}
        />
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({senha: text})}
          placeholder="Senha"
          secureTextEntry
          value={this.state.senha}
        />

        <TouchableOpacity onPress={/*()=> this.openDetalhes()*/()=> this.loginUser(this.state.email, this.state.senha)} style={styles.loginButton} >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> this.openSignup()} style={styles.askButton} >
          <Text style={styles.buttonText}>Dape</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> this.abrirFormulario()} style={styles.questionButton} >
          <Text style={styles.buttonText}>Formulario</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> this.askForgotPassword()} style={styles.forgotButton} >
          <Text style={styles.forgotText}>Esqueci minha senha</Text>
        </TouchableOpacity>
        
      </View>
    );
  }

  askForgotPassword(){
    if (this.state.email == ""){
      Alert.alert("Erro", "Você precisa informar o seu e-mail");
    }
    else {
      Alert.alert(
        'Recuperar senha',
        'Deseja realmente recuperar a senha do e-mail?\n' + this.state.email + '?',
        [
          {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => 
            //this.confirmRegister()
            this.resetPassword()
          },
        ],
        { cancelable: false }
      )
    }
  }

  resetPassword(){
    const email = this.state.email
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert('Sucesso', "Um e-mail de recuperação de senha foi enviado para: "+email);
      })
      .catch((error) => this.resetPasswordFail(error))
  }

  resetPasswordFail(error){
    console.log("Erro ao recuperar senha: "+error)
  }

  loginUser(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((function(){
      Actions.dashboard();
    }))
    .catch(function(error) {
      if(error.code == "auth/user-not-found"){
        Alert.alert("Atenção!", "Usuário não encontrado");
      }
      else{
        Alert.alert("Atenção", "DEU RUIM AMIGO, PROCURE O DESENVOLVEDOR");
      }
    });

  }

  openAskAlert(){
    Alert.alert(
      'Título do Alerta',
      'Você quer mesmo confirmar?',
      [
        {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => 
          this.openSimpleAlert()
        },
      ],
      { cancelable: false }
    )
  }


  openSimpleAlert(){
    Alert.alert("Olá", "Você confirmou");
  }

  openDetalhes(){
    Actions.dashboard();
  }

  openSignup(){
    Actions.signup();
  }
  abrirFormulario(){
    Actions.Formulario();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  askButton: {
    backgroundColor: "#ff0000",
    borderRadius: 10,
    padding: 10,
    margin: 20,
    width: width * 0.8,
    alignItems: 'center'
  },
  questionButton: {
    backgroundColor: "#ffa500",
    borderRadius: 10,
    padding: 10,
    margin: 20,
    width: width * 0.8,
    alignItems: 'center'
  },

  forgotButton: {
    backgroundColor: "transparent",
    borderRadius: 10,
    padding: 10,
    margin: 20,
    width: width * 0.8,
    alignItems: 'center'
  },
  buttonText:{
    color: "white"
  },
  forgotText:{
    color: "blue",
    textDecorationLine: "underline"
  },
  logoStyle: {
    width: width * 0.55,
    height: width * 0.55
  },
  titleText:{
    fontSize: 30,
    alignItems: 'center',
    textAlign: 'center',
    color: "#4682B4"
  },
  estiloTexto:{
    color: '#ffffff',
    textAlign: 'center',
    alignItems: 'center'
  },
  inputStyle:{
    height: height * 0.06, 
    width: width * 0.85, 
    borderBottomColor: 'gray', 
    borderBottomWidth: 1,
    margin: width * 0.04
  },
  loginButton: {
    backgroundColor: "#00008b",
    borderRadius: 10,
    padding: 10,
    margin: 20,
    width: width * 0.8,
    alignItems: 'center'
  }
});
