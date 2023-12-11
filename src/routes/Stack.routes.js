import SingIn from '../pages/SingIn'
import Cadastro from '../pages/Cadastro'
import Senha from '../pages/RecSenha';
import Opening from '../pages/Opening';

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TabRoutes from './Tab.routes';
import User from '../pages/Usuario';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        
        <Stack.Navigator initialRouteName='Opening' id='StackR' screenOptions={{headerShown: false, navigationBarHidden: true}}>
            <Stack.Screen
            name='Opening'
            component={Opening}
            />
            <Stack.Screen
            name='SingIn'
            component={SingIn}
            />
            <Stack.Screen
            name='Cadastro'
            component={Cadastro}
            />
            <Stack.Screen
            name='Senha'
            component={Senha}
            />
            <Stack.Screen
            name='App'
            component={TabRoutes}
            />
        </Stack.Navigator>
        
    )
}
