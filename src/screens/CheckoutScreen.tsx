import {GenericNavigation} from '@src/navigation/AppNavigation';
import * as React from 'react';
import {Text, View} from 'react-native';

interface CheckoutScreenProps extends GenericNavigation {}

export const CheckoutScreen: React.FC<CheckoutScreenProps> = ({route}) => {
  const total = route?.params?.total;
  return (
    <View>
      <Text>{total}</Text>
    </View>
  );
};
