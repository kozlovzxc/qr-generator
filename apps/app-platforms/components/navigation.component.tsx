import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import NotFoundPageComponent from '../pages/not-found-page.component';
import HomePageComponent from '../pages/home-page.component';
import Constants from 'expo-constants';

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
    colorScheme,
}: {
    colorScheme: ColorSchemeName;
}) {
    return (
        <NavigationContainer
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { height: Constants.statusBarHeight },
                    headerTitle: '',
                }}
            >
                <Stack.Screen name="Root" component={HomePageComponent} />
                <Stack.Screen
                    name="NotFound"
                    component={NotFoundPageComponent}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
