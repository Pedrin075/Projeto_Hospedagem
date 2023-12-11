import User from '../pages/Usuario';

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import StackRoutes from './Stack.routes';
import Routes from './routes';



const Stack = createNativeStackNavigator();

export default function StackRoutes2(){
    return(
        
        <Stack.Navigator initialRouteName='User' screenOptions={{headerShown: false}}>
            <Stack.Screen
            name='User'
            component={User}
            options={{
            }}
            />
            <Stack.Screen
            name='Logout'
            component={StackRoutes2}
            />
        </Stack.Navigator>
        
    )
}
