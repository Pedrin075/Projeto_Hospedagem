import Home from "../pages/home";

import { createBottomTabNavigator, } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Reservas from "../pages/Hospedagens";
import User from "../pages/Usuario";
import StackRoutes2 from "./Stack2.routes";
import { ButtonTab } from "../Components/ButtonTabBar";

const Tab = createBottomTabNavigator();

export default function TabRoutes(){

    return(
        <Tab.Navigator
        initialRouteName="Home" 
        screenOptions={{headerShown: false, 
        tabBarShowLabel: false,
        tabBarStyle:{
            position: 'absolute',
            backgroundColor: '#000',
            bottom: 20,
            left: 10,
            right: 10,
            elevation: 0,
            borderRadius: 20,
            borderTopWidth: 0
        }
        }}>
            <Tab.Screen
            name="Usuario"
            component={StackRoutes2}
            options={{tabBarIcon: ({color, size}) => <Ionicons name="person-circle" color={color} size={size}/>,
            tabBarActiveTintColor: '#8A2BE2',
            tabBarInactiveTintColor: '#fff'
        }}
            />
            <Tab.Screen
            name="Home"
            component={Home}
            options={{tabBarIcon: ({focused ,color, size}) => <ButtonTab color={color} size={size} focused={focused}/>,
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#fff',
            
        }}
            />
            <Tab.Screen
            name="Hospedagens"
            component={Reservas}
            options={{tabBarIcon: ({color, size}) => <Ionicons name="business" color={color} size={size}/>,
            tabBarActiveTintColor: '#8A2BE2', 
            tabBarInactiveTintColor: '#fff'
        }}
            />
        </Tab.Navigator>
    )
}