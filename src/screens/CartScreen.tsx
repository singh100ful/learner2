import {ButtonAtom} from '@src/components/atoms/ButtonAtom';
import {SeparatorAtom} from '@src/components/atoms/SeparatorAtom';
import {TextAtom} from '@src/components/atoms/TextAtom';
import {GenericNavigation} from '@src/navigation/AppNavigation';
import {RouteKeys} from '@src/navigation/RouteKeys';
import {useAppSelector} from '@src/provider/store/store';
import {moderateScale} from '@src/theme/scale';
import * as React from 'react';
import {Image, View} from 'react-native';

interface CartScreenProps extends GenericNavigation {}

export const CartScreen: React.FC<CartScreenProps> = ({navigation}) => {
  const {cart} = useAppSelector(state => state.root.cart);
  const total = cart.reduce(
    (sum, element: CartMovie) => sum + element.price,
    0,
  );
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: moderateScale(20),
        paddingVertical: moderateScale(10),
        justifyContent: 'space-between',
      }}>
      <View>
        {cart.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: moderateScale(5),
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={{uri: item.image}}
                  style={{width: moderateScale(50), height: moderateScale(50)}}
                />
                <View style={{paddingLeft: moderateScale(10)}}>
                  <TextAtom text={item.title} />
                  <TextAtom text={item.year} />
                </View>
              </View>
              <TextAtom preset="subTitle" text={item.quantity.toString()} />
            </View>
          );
        })}
        <SeparatorAtom />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextAtom preset="title" text={'Total: ' + cart.length} />
          <TextAtom preset="title" text={'$' + total.toString()} />
        </View>
      </View>
      <View>
        <ButtonAtom
          title="Checkout"
          onPress={() =>
            navigation.navigate(RouteKeys.CheckoutScreen, {
              total: total,
            })
          }
        />
      </View>
    </View>
  );
};
