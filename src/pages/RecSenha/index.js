import React from 'react';
import {
    View,   
    Text, 
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,  } from 'react-native'

const Senha = () =>{
    return(
        <View style={styles.container}>
            <Image style={styles.logo}
            source={require("../../assets/logo.png")}
            />
            <Text style={styles.textlogo}>Vagas Online</Text>
            <Text style={styles.text}>Recuperação de Senha</Text>
            <TextInput style={styles.fields}
            placeholder="Nome de Usuário"
            placeholderTextColor='#aaaaaa'/>
            <TextInput style={styles.fields}
            placeholder="E-mail"
            placeholderTextColor='#aaaaaa'/>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Enviar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Senha;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0097b2',
        alignItems: 'center',
        justifyContent: 'center',
      },
      fields: {
        backgroundColor: '#f1f1f1',
        color: '#f1f1f1',
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

