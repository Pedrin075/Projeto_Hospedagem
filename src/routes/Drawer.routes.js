import TabRoutes from "./Tab.routes";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import User from "../pages/Usuario";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    <Drawer.Navigator>
        <Drawer.Screen
        name="Options"
        component={TabRoutes}
        options={{drawerIcon: ({color, size}) => <Ionicons name="home" color={color} size={size}/>}}
        />
        <Drawer.Screen
        name="aaaa"
        component={User}/>
    </Drawer.Navigator>
}