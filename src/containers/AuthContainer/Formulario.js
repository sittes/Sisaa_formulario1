
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet,Text,Dimensions, TouchableOpacity, TextInput,ScrollView,} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card } from 'react-native-elements';

var {height, width} = Dimensions.get('window');


type Props = {};
export default class Formulario extends Component<Props> {



  render() {
    return (
      <ScrollView>
        <TouchableOpacity onPress={()=> this.backToLogin()} style={styles.backButton} >
          <Text style={styles.backButtonText}>ᐸ Login</Text>
        </TouchableOpacity>

        
        <Text style={styles.titleText}>FORMULARIO DE AERONAVE</Text>

        <Card style={styles.containercard}>
        
              <Text style={styles.sectionTitle}>DADOS DA AERONAVE/AIRCRAFT DATA</Text>
                  <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}></Text> 
              </Text>
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Matricula/Registration</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder=" Digite a Matricula "                
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Modelo/Model</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder=" Digite o Modelo"                
              />
               <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Mtow</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder=" Digite o Mtow"                
              />
               <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Classe/Cao type</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder=" Digite a Classe"                
              />
              <Text style={styles.sectionTitle}>DADOS DA OPERAÇÃO/OPERATIONAL INFORMATION</Text>
                  <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}></Text> 
              </Text>
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Data de Pouso/Arival Date</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder=" Digite a Data"                
              />
               <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Piloto em Comando/Pic</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder=" Digite o Nome do Piloto"                
              />
               <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Telefone/Phone</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder=" Digite o Telefone"                
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Email</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder=" Digite o Email"                
              />
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Voo de instrução ou Experiencia</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder=" Digite o Intrução ou Experiencia"                
              />
                <Text style={styles.sectionTitle}>DADOS DO OPERADOR DA AERONAVE/AIRCRAFTS OPERATOR DATA</Text>
                  <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}></Text> 
              </Text>
              <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Nome ou Razão Social/Name or Company</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder=" Digite o Nome"                
              />
               <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Cnpj ou Cpf/Nif or Document</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder=" Digite o cnpj ou cpf"                
              />
               <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Se Aeronave e Estrangeira Numero do Avanac/if Foreing Aicraft Avanac</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder=" Digite o Numero"                
              />
               <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Data de Nascimento(Se pessoa Fisica)/Data of Birth</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder=" Digite a Data"                
              />
               <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Endereço/Address</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder=" Digite o Endereço"                
              />
               <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Cep/Po Box</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder=" Digite o Cep"                
              />
               <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Cidade/City</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder=" Digite a Cidade"                
              />
               <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Bairro/District</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder=" Digite o Bairro"                
              />
               <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Uf/State</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder=" Digite o State"                
              />
               <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Telefone 1/Phone 1</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder=" Digite o Telefone"                
              />
               <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Email</Text> 
                  </Text>
              <TextInput
                  style={styles.inputStyle}                
                  placeholder=" Digite o Email"                
              />

              

        <TouchableOpacity onPress={()=> this.askRegister()} style={styles.registerButton} >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        </Card>
        </ScrollView>
      
    );
  }

  backToLogin(){
    Actions.login();
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
    fontSize: 20,
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




















