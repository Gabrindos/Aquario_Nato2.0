import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Slide01Screem, Slide02Screem } from '../screens';
import { Ionicons, Entypo } from '@expo/vector-icons';

type MenuTabParam = {
    Slide1: undefined
    Slide2: undefined
}

type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Slide1">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator screenOptions={{ headerShown:false }}>
            <Tab.Screen name="Slide1" component={Slide01Screem}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="home" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen name="Slide2" component={Slide02Screem}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="fish-sharp" size={24} color="black" />
                    )
                }} 
            />
        </Tab.Navigator>
    );
}
