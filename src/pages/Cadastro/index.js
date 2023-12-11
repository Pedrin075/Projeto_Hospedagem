import React from 'react';
import {
    View,   
    Text, 
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,  
    ScrollView
  } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const Cadastro = () =>{
  const navigation = useNavigation();
  const [nome, setNome] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [confSenha, setConfSenha] = React.useState('');

  function handleSingUp(){
    if(nome === '' || userName === '' || email === '' || senha === '' || confSenha ===''){
      alert("Preencha todos os campos")
    } else if(senha !== confSenha){
      alert("As Senhas não são compatíveis! \n Verefique se as senhas foram digitadas igualmente")
    } else{
      alert("Cadastro registrado!")
      navigation.navigate('SingIn')
    }
  }
    return(
      <ScrollView>
        <View style={styles.container}>
            <Image style={styles.logo}
            source={require("../../assets/logo.png")}
            />
            <Text style={styles.textlogo}>Vagas Online</Text>
            <Text style={styles.text}>Cadastro</Text>

            <TextInput style={styles.fields}
            placeholder="Nome"
            placeholderTextColor='#aaaaaa'
            onChangeText={setNome}
            />

            <TextInput style={styles.fields}
            placeholder="Nome de Usuário"
            placeholderTextColor='#aaaaaa'
            onChangeText={setUserName}
            />

            <TextInput style={styles.fields}
            placeholder="E-mail"
            placeholderTextColor='#aaaaaa'
            onChangeText={setEmail}
            />
          
            <TextInput style={styles.fields}
            placeholder="Senha"
            placeholderTextColor='#aaaaaa'
            secureTextEntry={true}
            onChangeText={setSenha}
            />

            <TextInput style={styles.fields}
            placeholder="Confirmar senha"
            placeholderTextColor='#aaaaaa'
            secureTextEntry={true}
            onChangeText={setConfSenha}
            />

            <TouchableOpacity style={styles.button} onPress={handleSingUp}>
                <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    );
}

export default Cadastro;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0097b2',
        alignItems: 'center',
        justifyContent: 'center',
        height: 1080,
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
        marginBottom: 20,
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
        marginTop: 40,
        marginBottom: 60
      },
      textButton:{
        fontSize: 20,
        color: '#fff'
      },
      text:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20
      }
})

