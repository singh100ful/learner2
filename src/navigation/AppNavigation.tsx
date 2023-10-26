import {
  NavigationContainer,
  NavigationProp,
  RouteProp,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '@src/screens/HomeScreen';
import * as React from 'react';
import {RouteKeys} from './RouteKeys';
import {DetailScreen} from '@src/screens/DetailScreen';
import {colorPresets} from '@src/theme/colors';
import {CartScreen} from '@src/screens/CartScreen';
import {CheckoutScreen} from '@src/screens/CheckoutScreen';

export interface GenericNavigation {
  navigation: NavigationProp<any>;
  route: RouteProp<any, any>;
}

interface AppNavigationProps {}

const Stack = createNativeStackNavigator();

export const AppNavigation: React.FC<AppNavigationProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: colorPresets.primaryCTA},
          headerTintColor: colorPresets.white,
          headerTitleAlign: 'left',
        }}>
        <Stack.Screen name={RouteKeys.HomeScreen} component={HomeScreen} />
        <Stack.Screen name={RouteKeys.DetailScreen} component={DetailScreen} />
        <Stack.Screen name={RouteKeys.CartScreen} component={CartScreen} />
        <Stack.Screen
          name={RouteKeys.CheckoutScreen}
          component={CheckoutScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
