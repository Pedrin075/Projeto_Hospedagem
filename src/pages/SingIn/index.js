import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native'
import {
  View,   
  Text, 
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,  } from 'react-native'

export default function SingIn () {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogar(){
    if(!email || !senha){
      alert("Preencha todos os campos");
      return;
    }
    if(email === "pedro05silvaoficial@gmail.com" && senha === "123456"){
      navigation.navigate('App')
    } else {
      alert("Cadastro não registrado! \n Veja se seu E-mail ou Senha estão incorretos.")
    }
    
  }

  const handleNavSenha = () =>{
    navigation.navigate('Senha')
  }
  const handleNavCadastro = () =>{
    navigation.navigate('Cadastro')
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo}
      source={require("../../assets/logo.png")}
      />
      <Text style={styles.textlogo}>Vagas Online</Text>
      <TextInput style={styles.fields}
      placeholder="Email"
      onChangeText={setEmail}
      placeholderTextColor='#aaaaaa'
      />
      <TextInput style={styles.fields}
      placeholder="Senha"
      placeholderTextColor='#aaaaaa'
      secureTextEntry={true}
      onChangeText={setSenha}
      />
      <TouchableOpacity style={styles.button} onPress={() => {handleLogar()}}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.text} onPress={() => {handleNavSenha();}}>Esqueceu a senha?</Text>
      <Text style={styles.text} onPress={() => {handleNavCadastro();}}>Ainda não tem cadastro? Clique aqui!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0097b2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fields: {
    backgroundColor: '#f1f1f1',
    color: '#000',
    fontSize: 18,
    padding: 15,
    marginTop: 3,
    borderRadius: 7,
    width: '90%',
    alignItems: 'center',
    marginBottom: 15,
  },
  logo:{
    width:113,
    height: 100,
    marginBottom: 30,
  },
  textlogo:{
    marginBottom: 40,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff'
  },
  button:{
    backgroundColor: '#B1424E',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    marginTop: 50,
    marginBottom: 50
  },
  textButton:{
    fontSize: 20,
    color: '#fff'
  },
  text:{
    color: '#fff',
    marginBottom: 10,
    fontSize: 18,
  }
});