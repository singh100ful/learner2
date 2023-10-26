import {moderateScale, horizontalScale} from '@src/theme/scale';
import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {TextAtom} from '../atoms/TextAtom';
import {ButtonAtom} from '../atoms/ButtonAtom';
import {useAppDispatch, useAppSelector} from '@src/provider/store/store';
import {setCart} from '@src/provider/store/reducer/cartReducer';

interface MovieMoleculeProps {
  item: MovieData;
}

export const MovieMolecule: React.FC<MovieMoleculeProps> = ({item}) => {
  const dispatch = useAppDispatch();
  const {cart} = useAppSelector(state => state.root.cart);

  const addToCart = async () => {
    let deal: CartMovie[] = [...cart];
    if (deal.length !== 0) {
      let index = deal.filter(el => el.imdbID === item.imdbID);
      if (index.length > 0) {
        let i = index[0];
        let idx = deal.indexOf(i);
        deal[idx].quantity = deal[idx].quantity + 1;

        console.log('deal', deal);
        dispatch(setCart(deal));
      } else {
        let movie = {
          imdbID: item.imdbID,
          title: item.Title,
          image: item.Poster,
          year: item.Year,
          quantity: 1,
          price: 50,
        };

        deal.push(movie);
        console.log('deal', deal);
        dispatch(setCart(deal));
      }
    } else {
      let movie = {
        imdbID: item.imdbID,
        title: item.Title,
        image: item.Poster,
        year: item.Year,
        quantity: 1,
        price: 50,
      };
      let data = [];
      data.push(movie);
      dispatch(setCart(data));
    }
  };

  return (
    <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
      <Image
        source={{uri: item.Poster}}
        style={{width: moderateScale(100), height: moderateScale(100)}}
      />
      <View
        style={{
          paddingLeft: horizontalScale(10),
          justifyContent: 'space-between',
        }}>
        <View>
          <TextAtom text={item.Title} preset="title" />
          <TextAtom text={item.Year} />
        </View>

        <ButtonAtom title="Add to cart" preset="small" onPress={addToCart} />
      </View>
    </View>
  );
};
