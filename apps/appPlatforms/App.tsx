import React from 'react';
// Need to be at the top of App.tsx
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePageComponent from './src/pages/home-page.component';
import NotFoundPageComponent from './src/pages/not-found-page.component';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { height: 24 },
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
};

export default App;
