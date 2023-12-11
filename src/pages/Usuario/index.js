import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, StyleSheet} from "react-native";

export default function User(){

    const navigation = useNavigation();
    const handleLogout = () => {
        navigation.reset({index: 0, routes: [{name: 'Logout'}]})
        navigation.goBack()
        navigation.goBack()
    }


    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontSize: 22, color: '#fff', marginBottom: 20, fontWeight: 'bold'}}>Usuário</Text>
            </View>
        <View>
            <Button title="Logout" onPress={handleLogout}/>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#aaaaaa',
        flex: 1,
    },
    header:{
        backgroundColor: '#4169E1',
        height: 120,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
})