import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();
const tabs = [{ name: 'A' }, { name: 'B' }, { name: 'C' }, { name: 'D' }, { name: 'E' }];

function Router() {
    return (
        <NavigationContainer>
            <Tabs.Navigator screenOptions={{ tabBarVisible: false }}>
                <Tabs.Screen name={ROUTES.A} component={ScreenA} />
                <Tabs.Screen name={ROUTES.B} component={ScreenB} />
                <Tabs.Screen name={ROUTES.C} component={ScreenC} />
                <Tabs.Screen name={ROUTES.D} component={ScreenD} />
                <Tabs.Screen name={ROUTES.D} component={ScreenE} />
            </Tabs.Navigator>
            <TabsUI {...{ tabs }} />
        </NavigationContainer>
    );
}