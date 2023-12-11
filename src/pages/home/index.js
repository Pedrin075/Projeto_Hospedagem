import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    View,   
    Text, 
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Button
} from 'react-native'

export default function Home(){

    const navigation = useNavigation();
    const handleIrHospedagens = () => {
        navigation.navigate('Hospedagens')
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TextInput style={{backgroundColor: '#fff', width: '70%', marginTop: 40, borderRadius: 20, paddingLeft: 13,}} placeholder='Buscar' />
            </View>
            <ScrollView>
            <View style={styles.section}>
                <Text style={{backgroundColor: '#fff', fontSize: 30, fontWeight:'bold', marginLeft: 15, marginTop: 15}}>Ofertas!</Text>
                <View style={styles.produtos}>
                    <View>
                        <TouchableOpacity>
                        <Image style={styles.imagem} source={require('../../assets/Itatiba.webp')}/>
                        <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 3}}>Itatiba, Brasil</Text>
                        <Text style={{fontSize: 12, color: "#a1a1a1", marginLeft: 3}}>66 km de distância</Text>
                        <Text style={{fontSize: 13, marginLeft: 3}}>R$630 noite</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                        <Image style={styles.imagem} source={require('../../assets/Itatiba2.webp')}/>
                        <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 3}}>Itatiba, Brasil</Text>
                        <Text style={{fontSize: 12, color: "#a1a1a1", marginLeft: 3}}>59 km de distância</Text>
                        <Text style={{fontSize: 13, marginLeft: 3}}>R$5,032 noite</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.produtos}>
                    <View>
                        <TouchableOpacity>
                        <Image style={styles.imagem} source={require('../../assets/centro.webp')}/>
                        <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 3}}>Centro, Brasil</Text>
                        <Text style={{fontSize: 12, color: "#a1a1a1", marginLeft: 3}}>242 km de distância</Text>
                        <Text style={{fontSize: 13, marginLeft: 3}}>R$18.681 noite</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                        <Image style={styles.imagem} source={require('../../assets/prainha.webp')}/>
                        <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 3}}>Prainha, Brasil</Text>
                        <Text style={{fontSize: 12, color: "#a1a1a1", marginLeft: 3}}>126 km de distância</Text>
                        <Text style={{fontSize: 13, marginLeft: 3}}>R$633 noite</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.produtos}>
                    <View>
                        <TouchableOpacity>
                        <Image style={styles.imagem} source={require('../../assets/toninhas.webp')}/>
                        <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 3}}>Toninhas, Brasil</Text>
                        <Text style={{fontSize: 12, color: "#a1a1a1", marginLeft: 3}}>157 km de distância</Text>
                        <Text style={{fontSize: 13, marginLeft: 3}}>R$576 noite</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                        <Image style={styles.imagem} source={require('../../assets/jardim-jaqueira.webp')}/>
                        <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 3}}>Jardim Jaqeira, Brasil</Text>
                        <Text style={{fontSize: 12, color: "#a1a1a1", marginLeft: 3}}>127 km de distância</Text>
                        <Text style={{fontSize: 13, marginLeft: 3}}>R$573 noite</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{alignItems: 'center', marginTop: 25}}>
                    <TouchableOpacity onPress={handleIrHospedagens}>
                        <Text style={{color: '#aaaaaa'}}>------------- Ver mais -------------</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{backgroundColor: '#fff', fontSize: 30, fontWeight:'bold', marginLeft: 15, marginTop: 30, marginBottom: 30 }}>Promoções</Text>
                </View>
            </View>
            <View style={{alignItems: 'center'}}>
                <View style={styles.article}>
                    <Image style={styles.imagemPromocao} source={require('../../assets/promocao1.webp')}/> 
                    <View style={{alignItems: 'center', width: '50%', marginTop: 10}}>
                        <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>Summerville Resort - All {'\n'}Inclusive</Text>
                        <Text style={{color: '#a9a9a9', fontSize: 14, marginTop: 10}}>Porto de Galinhas. A 7,99 km do centro</Text>
                        <Text style={{color: '#f9f9f9', fontSize: 14, marginTop: 10, marginRight: 60}}>Voo + Hospedagem {'\n'}Preço por pessoa {'\n'}R$ 5.502</Text>
                        <View style={styles.button}>
                            <Button title='Ver mais'/>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{alignItems: 'center'}}>
                <View style={styles.article}>
                    <Image style={styles.imagemPromocao} source={require('../../assets/promocao2.webp')}/> 
                    <View style={{alignItems: 'center', width: '50%', marginTop: 10}}>
                        <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>Armação Resort Porto {'\n'}de Galinhas</Text>
                        <Text style={{color: '#a9a9a9', fontSize: 14, marginTop: 10}}>Porto de Galinhas. A 2,02 km do centro</Text>
                        <Text style={{color: '#f9f9f9', fontSize: 14, marginTop: 10, marginRight: 60}}>Voo + Hospedagem {'\n'}Preço por pessoa {'\n'}R$ 3.480</Text>
                        <View style={styles.button}>
                            <Button title='Ver mais'/>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{alignItems: 'center', marginBottom: 70}}>
                <View style={styles.article}>
                    <Image style={styles.imagemPromocao} source={require('../../assets/promocao3.webp')}/> 
                    <View style={{alignItems: 'center', width: '50%', marginTop: 10}}>
                        <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>Rio Othon Palace</Text>
                        <Text style={{color: '#a9a9a9', fontSize: 14, marginTop: 10, marginRight: 12}}>Rio de Janeiro, Copacabana. {'\n'}A 8,46 km do centro</Text>
                        <Text style={{color: '#f9f9f9', fontSize: 14, marginTop: 10, marginRight: 60}}>Voo + Hospedagem {'\n'}Preço por pessoa {'\n'}R$ 1.807</Text>
                        <View style={styles.button}>
                            <Button title='Ver mais'/>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flex: 1,
    },
    header:{
        backgroundColor: '#4169E1',
        height: 120,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    produtos:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
    },
    imagem:{
        width: 180,
        height: 180,
        marginTop: 20,
        margin: 3
    },
    imagemPromocao:{
        width: 180,
        height:180,
        marginBottom: 10,
        marginLeft: 10, 
        marginTop: 10
    },
    article:{
        width: '95%',
        height: 200,
        backgroundColor: '#504D49',
        marginBottom: 20,
        flexDirection: 'row',
    },
    button:{
        marginTop: 14,
        marginLeft: 90
    }
})