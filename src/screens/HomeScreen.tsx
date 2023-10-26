import * as React from 'react';
import {FlatList, Pressable, TextInput, View} from 'react-native';
import {SeparatorAtom} from '@src/components/atoms/SeparatorAtom';
import {moderateScale} from '@src/theme/scale';
import {MovieMolecule} from '@src/components/molecule/MovieMolecule';
import {colorPresets} from '@src/theme/colors';
import {GenericNavigation} from '@src/navigation/AppNavigation';
import {RouteKeys} from '@src/navigation/RouteKeys';
import {fetchMovies} from '@src/provider/store/services/movieService';
import {useAppDispatch, useAppSelector} from '@src/provider/store/store';
import {TextAtom} from '@src/components/atoms/TextAtom';
import Icon from 'react-native-vector-icons/Ionicons';

interface HomeScreenProps extends GenericNavigation {}

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [search, setSearch] = React.useState('');
  const dispatch = useAppDispatch();

  const {loading, movies} = useAppSelector(state => state.root.movie);
  const {cart} = useAppSelector(state => state.root.cart);

  const getMovies = () => {
    let data = {
      search: search,
      page: 1,
    };
    dispatch(fetchMovies(data));
  };

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate(RouteKeys.CartScreen)}>
          {cart.length > 0 && (
            <View
              style={{
                position: 'absolute',
                right: -5,
                top: -5,
                backgroundColor: colorPresets.white,
                paddingHorizontal: moderateScale(3),
                paddingVertical: moderateScale(1),
                borderRadius: moderateScale(10),
                zIndex: 1,
              }}>
              <TextAtom text={cart.length.toString()} preset="caption" />
            </View>
          )}
          <Icon
            name="cart"
            size={moderateScale(25)}
            color={colorPresets.white}
          />
        </Pressable>
      ),
    });
  }, [cart]);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: colorPresets.primaryCTA,
          padding: moderateScale(10),
        }}>
        <TextInput
          value={search}
          onChangeText={setSearch}
          style={{
            padding: 10,
            fontSize: 16,
            backgroundColor: colorPresets.white,
            borderRadius: moderateScale(10),
          }}
          onSubmitEditing={() => getMovies()}
        />
      </View>
      <FlatList
        style={{marginHorizontal: moderateScale(16)}}
        data={movies}
        ItemSeparatorComponent={() => <SeparatorAtom />}
        renderItem={({item, index}) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate(RouteKeys.DetailScreen, {
                  data: item,
                })
              }>
              <MovieMolecule key={index} item={item} />
            </Pressable>
          );
        }}
      />
    </View>
  );
};
