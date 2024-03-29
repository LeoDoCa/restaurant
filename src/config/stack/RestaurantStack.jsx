import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../modules/auth/login/adapters/screens/Login";
import Restaurants from "../../modules/restaurants/adapters/screens/Restaurants";
import RestaurantDetail from "../../modules/restaurants/adapters/screens/RestaurantDetail";

const Stack = createStackNavigator();

export default function RestaurantStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Restaurants"
                component={Restaurants}
                options={{ title: 'Restaurantes' }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ title: 'Inicio de sesión' }}
            />
            <Stack.Screen
                name="RestaurantDetail"
                component={RestaurantDetail}
                options={{ title: 'Descripcion del restaurante' }}
            />
        </Stack.Navigator>
    )
}