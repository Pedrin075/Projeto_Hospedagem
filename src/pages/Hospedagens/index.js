import React from 'react';
import {
    View,   
    Text, 
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native'

export default function Hospedagem(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontSize: 22, color: '#fff', marginBottom: 20, fontWeight: 'bold'}}>Hospedagens</Text>
            </View>
            <ScrollView>
            <View style={styles.section}>
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
                <View style={styles.produtos}>
                    <View>
                        <TouchableOpacity>
                        <Image style={styles.imagem} source={require('../../assets/portinho.webp')}/>
                        <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 3}}>Portinho, Brasil</Text>
                        <Text style={{fontSize: 12, color: "#a1a1a1", marginLeft: 3}}>129 km de distância</Text>
                        <Text style={{fontSize: 13, marginLeft: 3}}>R$354 noite</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                        <Image style={styles.imagem} source={require('../../assets/Paraty.webp')}/>
                        <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 3}}>Paraty, Brasil</Text>
                        <Text style={{fontSize: 12, color: "#a1a1a1", marginLeft: 3}}>205 km de distância</Text>
                        <Text style={{fontSize: 13, marginLeft: 3}}>R$3.819 noite</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.produtos}>
                    <View>
                        <TouchableOpacity>
                        <Image style={styles.imagem} source={require('../../assets/palmeiras.webp')}/>
                        <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 3}}>Palmeiras, Brasil</Text>
                        <Text style={{fontSize: 12, color: "#a1a1a1", marginLeft: 3}}>122 km de distância</Text>
                        <Text style={{fontSize: 13, marginLeft: 3}}>R$1.054 noite</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                        <Image style={styles.imagem} source={require('../../assets/almada.webp')}/>
                        <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 3}}>Almada, Brasil</Text>
                        <Text style={{fontSize: 12, color: "#a1a1a1", marginLeft: 3}}>178 km de distância</Text>
                        <Text style={{fontSize: 13, marginLeft: 3}}>R$1.155 noite</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.produtos}>
                    <View>
                        <TouchableOpacity>
                        <Image style={styles.imagem} source={require('../../assets/saoSebastiao.webp')}/>
                        <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 3}}>São Sebastião, Brasil</Text>
                        <Text style={{fontSize: 12, color: "#a1a1a1", marginLeft: 3}}>125 km de distância</Text>
                        <Text style={{fontSize: 13, marginLeft: 3}}>R$646 noite</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                        <Image style={styles.imagem} source={require('../../assets/ubatuba.webp')}/>
                        <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 3}}>Ubatuba, Brasil</Text>
                        <Text style={{fontSize: 12, color: "#a1a1a1", marginLeft: 3}}>158 km de distância</Text>
                        <Text style={{fontSize: 13, marginLeft: 3}}>R$244 noite</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.produtos}>
                    <View>
                        <TouchableOpacity>
                        <Image style={styles.imagem} source={require('../../assets/angra-reis.webp')}/>
                        <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 3}}>Angra dos Reis, Brasil</Text>
                        <Text style={{fontSize: 12, color: "#a1a1a1", marginLeft: 3}}>Praia da Fazenda, Ubatuba</Text>
                        <Text style={{fontSize: 13, marginLeft: 3}}>R$56.116 noite</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                        <Image style={styles.imagem} source={require('../../assets/camorim.webp')}/>
                        <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 3}}>Camorim, Brasil</Text>
                        <Text style={{fontSize: 12, color: "#a1a1a1", marginLeft: 3}}>241 km de distância</Text>
                        <Text style={{fontSize: 13, marginLeft: 3}}>R$14.884 noite</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{alignItems: 'center', marginTop: 25, marginBottom: 120}}>
                        <Text style={{color: '#000', fontWeight: 'bold'}}>Mais Hospedagens em breve!</Text>
                </View>
            </View>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#aaaaaa',
        flex: 1
    },
    header:{
        backgroundColor: '#4169E1',
        height: 120,
        width: '100%',
        justifyContent: 'flex-end',
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
})