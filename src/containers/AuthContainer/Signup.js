/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet,Text, ImageBackground, Alert, Dimensions, TouchableOpacity, TextInput,ScrollView,} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card } from 'react-native-elements';
import firebase from "firebase"


var {height, width} = Dimensions.get('window');


type Props = {};
export default class SignUp extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      deviceWidth: width,
      deviceHeight: height,
      nome: "",
      email: "",
      senha: "",
      matricula: ""
    
    };
  }

  componentDidMount(){
    const { currentUser } = firebase.auth();
    if (currentUser){
      console.log("Estou logado: ", currentUser.uid)
    }
    //Buscar os dados do usuário logado no banco (depois de ter aprendido a fazer push no banco e criar auth)
  }

  render() {
    return (
      <ScrollView>
      <ImageBackground source={require('../../Images/background.jpg')} style={{width: '100%', height: '100%'}}>
        <TouchableOpacity onPress={()=> this.backToLogin()} style={styles.backButton} >
          <Text style={styles.backButtonText}>ᐸ Login</Text>
        </TouchableOpacity>

        
        <Text style={styles.titleText}>Dape para 400 HZS</Text>

        <Card style={styles.containercard}>
        
              <Text style={styles.sectionTitle}>DADOS DO VOO</Text>
                  <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}></Text> 
              </Text>
                  <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Matricula Solicitante cia Aerea</Text> 
              </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder=" Digite a Matricula "                
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Nome Solicitante Cia area</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite o Nome"                
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Cia Aérea</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a cia"                
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Fiscal De atendimento</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a Matricula "                
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Prefixo</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite o prefixo"                
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Tipo Icao Aicrt</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="digite o tipo"                
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Categoria</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="digite a categoria"                
              />
              <Text style={styles.sectionTitle}>1° Conexão</Text>
                  <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}></Text> 
              </Text>
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Data De Inico</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a Data "    
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Hora de Inicio</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite o Inicio "    
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Data do Fim</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite o fim "    
              />
              
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Hora Fim</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a hora"    
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}> posição</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a  posição "    
              />
              <Text style={styles.sectionTitle}>2° Conexão</Text>
                  <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}></Text> 
              </Text>
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Data De Inico</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a Data "    
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Hora de Inicio</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite o Inicio "    
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Data do Fim</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite o fim "    
              />
              
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Hora Fim</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a hora"    
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}> posição</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a  posição "    
              />
              <Text style={styles.sectionTitle}>3° Conexão</Text>
                  <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}></Text> 
              </Text>
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Data De Inico</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a Data "    
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Hora de Inicio</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite o Inicio "    
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Data do Fim</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite o fim "    
              />
              
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Hora Fim</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a hora"    
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}> posição</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a  posição "    
              />
              <Text style={styles.sectionTitle}>Dape Para Tomada</Text>
                  <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}></Text> 
              </Text>
              <Text style={styles.sectionTitle}>1°Conexão</Text>
                  <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}></Text> 
              </Text>
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Hora Inicio</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a hora"    
              />
               <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Hora Fim</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a hora"    
              />
              <Text style={styles.sectionTitle}>1°Conexão</Text>
                  <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}></Text> 
              </Text>
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Hora Inicio</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a hora"    
              />
               <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Hora Fim</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a hora"    
              />
              <Text style={styles.sectionTitle}>Dape Para ambulift</Text>
                  <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}></Text> 
              </Text>
              <Text style={styles.sectionTitle}>DADOS DO VOO</Text>
                  <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}></Text> 
              </Text>
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Voo</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite o Voo  "    
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Empresa Solicitante Do Serviço</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a Empresa  "    
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Prefixo</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite o Prefixo "    
              />
              <Text style={styles.sectionTitle}>1 Solicitação</Text>
                  <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}></Text> 
              </Text>
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Nome Solicitante(Representante Da Cia Area Ou Esata)</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite o Nome"    
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Hora Da Solicitação</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a Hora "    
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Posição</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a Posição"    
              />
               <Text style={styles.sectionTitle}>2 Solicitação</Text>
                  <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}></Text> 
              </Text>
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Nome Solicitante(Representante Da Cia Area Ou Esata)</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite o Nome"    
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Hora Da Solicitação</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a Hora "    
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Posição</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a Posição"    
              />
               <Text style={styles.sectionTitle}>Dape Para Transporte De Tripulante E/ou Desembarque Híbrido</Text>
                  <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}></Text> 
              </Text>
              <Text style={styles.sectionTitle}>DADOS DO VOO</Text>
                  <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}></Text> 
              </Text>
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Voo</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite o Voo  "    
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Prefixo</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite o Prefixo "    
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Empresa Solicitante Do Serviço</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a Empresa"    
              />
               <Text style={styles.sectionTitle}>1 Solicitação</Text>
                  <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}></Text> 
              </Text>
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Nome Solicitante(Representante Da Cia Area Ou Esata)</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite o Nome"    
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Hora Da Solicitação</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a Hora "    
              />
               <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Quantidade de Viagens</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a Quatidade "    
              />
               <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Posição</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a Posição "    
              />
              <Text style={styles.sectionTitle}>1 Solicitação</Text>
                  <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}></Text> 
              </Text>
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Nome Solicitante(Representante Da Cia Area Ou Esata)</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite o Nome"    
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Hora Da Solicitação</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a Hora "    
              />
               <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Quantidade de Viagens</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a Quatidade "    
              />
               <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Posição</Text> 
                  </Text>
                <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a Posição "    
              />
               <Text style={styles.sectionTitle}>Lavagem Técnica</Text>
                  <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}></Text> 
                </Text>
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Voo(se Aplicavel)</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite o Voo"    
              />
               <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Prefixo(se Aplicavel)</Text> 
                  </Text>
               <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite o Prefixo "    
              />
               <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Posição Ou Local A Ser Lavado</Text> 
                  </Text>
               <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a Posição "    
              />
               <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Posição</Text> 
                  </Text>
               <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a Posição "    
              />
               <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Empresa Do Solicitante</Text> 
                  </Text>
               <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a Empresa "    
              />
               <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Hora Solicitação</Text> 
                  </Text>
               <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a Hora "    
              />
               <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Empresa Envolvida No Derrramamento</Text> 
                  </Text>
               <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a Empresa "    
              />
               <Text style={styles.sectionTitle}>Organização de Envelope</Text>
                  <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}></Text> 
                </Text>
               <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Empresa Responsavel pelo Equipamento </Text> 
                  </Text>
               <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a Empresa "    
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Empresa Responsavel pelo Equipamento </Text> 
                  </Text>
               <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a Empresa "    
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Posição Ou Local</Text> 
                  </Text>
               <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a Posição "    
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Fiscal Em atendimento </Text> 
                  </Text>
               <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite o Atendimento "    
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Data </Text> 
                  </Text>
               <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a Data "    
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Hora</Text> 
                  </Text>
               <TextInput
                  style={styles.inputStyle}                
                  placeholder="Digite a Hora"    
              />

        <TouchableOpacity onPress={()=> this.askRegister()} style={styles.registerButton} >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
          </Card>
        </ImageBackground>
        </ScrollView>
      
    );
  }

  backToLogin(){
    Actions.login();
  }

  askRegister(){
    Alert.alert(
      'Registrar',
      'Confirma o seu registo?',
      [
        {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => 
          //this.confirmRegister()
          this.registerUser(this.state.email, this.state.senha, this.state.nome, this.state.matricula)
        },
      ],
      { cancelable: false }
    )
  }

  registerUser (email, password, nome, matricula) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((currentUser) => {
      firebase.database().ref("Users/"+currentUser.user.uid).update({
        uid: currentUser.user.uid,
        email: email,
        nome: nome,
        matricula: matricula
      });
      Alert.alert("Sucesso!", "Usuário criado");
      Actions.pop();
    })
    .catch((error) => { 
      console.log("firebase error: " + error);
      Alert.alert("Errou no auth!", error.code)
    });
  }

  confirmRegister () {
    const userData = {
      nome: this.state.nome,
      email: this.state.email,
      matricula: this.state.matricula
    }
      firebase.database().ref("Users/").push(userData)
      .then((snapshot) => {
        Alert.alert("Sucesso!", "Usuário criado");
        Actions.pop();
      })
      .catch((error) =>{
        console.log("Error: ", error);
        Alert.alert("Errou na persistência!", error.code)
      })
      
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  backButton: {
    backgroundColor: "transparent",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignSelf: "flex-start"
  },
  backButtonText: {
    color: "blue",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold"
  },
  registerButton: {
    backgroundColor: "#000099",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    width: width * 0.8,
    alignItems: 'center'
  },
  buttonText:{
    color: "white"
  },
  inputStyle:{
    height: height * 0.06, 
    width: width * 0.8, 
    borderBottomColor: 'blue', 
    borderBottomWidth: 2.0,
    margin: width * 0.01,
    color: "black"
  },
  titleText:{
    fontSize: 20,
    alignItems: 'center',
    textAlign: 'center',
    color: "blue"
  },

 
});