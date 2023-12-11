import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native'
import {
  View,   
  Text, 
  ScrollView,
  TouchableOpacity,  } from 'react-native'
import * as Animatable from 'react-native-animatable'


export default function Opening() {

    const navigation = useNavigation();
    const handleNavSingIn = () => {
        navigation.navigate('SingIn');
    }
    const handleNavSingUp = () =>{
        navigation.navigate('Cadastro')
    }
    

    return(
        <View style={{flex:1, backgroundColor: '#40E0D0'}}>
            <View style={{flex: 2, justifyContent: 'center', alignItems: 'center',}}>
                <Animatable.Image
                animation="slideInDown" 
                iterationCount={"infinite"}
                direction="alternate"
                source={require("../../assets/aviao-de-papel.png")}
                style={{width: 90, height: 90,}}
                />
            </View>
            <Animatable.View animation="fadeInUp" delay={600} style={{flex: 1, backgroundColor: '#fff', height: 300, width: "100%", borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20}}>
                <ScrollView>
                <Text style={{fontSize: 30, fontWeight: 'bold', }}>Seja Bem Vindo!</Text>
                <Text style={{fontSize: 20, marginTop: 10}}>Aqui na Vagas Online você encontra os melhores serviços de hospedagem, preços e combos de viagem e hospedagem, tudo no mesmo pacote!</Text>
                <Text style={{fontSize: 20, marginTop: 10}}>Gostou? Comece por aqui:</Text>
                <View style={{flex: 2, alignItems: 'center', justifyContent: 'flex-end'}}>
                    <TouchableOpacity onPress={handleNavSingIn} style={{backgroundColor: '#40E0D0', width: '40%', justifyContent: 'center', alignItems: 'center', height: 45, marginTop: 30, borderRadius: 10}}>
                        <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>Sing In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleNavSingUp} style={{backgroundColor: '#40E0D0', width: '40%', justifyContent: 'center', alignItems: 'center', height: 45, marginTop: 15, marginBottom: 40, borderRadius: 10}}>
                        <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>Sing Up</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </Animatable.View>

        </View>

    )
}