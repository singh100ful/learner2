import * as React from 'react';
import {FlatList, Pressable, TextInput, View} from 'react-native';
import {baseUrl} from '@src/constants/appConstants';
import {SeparatorAtom} from '@src/components/atoms/SeparatorAtom';
import {moderateScale} from '@src/theme/scale';
import {MovieMolecule} from '@src/components/molecule/MovieMolecule';
import {colorPresets} from '@src/theme/colors';
import {GenericNavigation} from '@src/navigation/AppNavigation';
import {RouteKeys} from '@src/navigation/RouteKeys';

interface HomeScreenProps extends GenericNavigation {}

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [search, setSearch] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<MovieData[]>([]);

  const fetchMovies = async (page: number = 1) => {
    setLoading(true);
    try {
      const response = await fetch(baseUrl + `s=${search}&page=${page}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      const res = await response.json();
      console.log(res);
      setData(res.Search);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // React.useEffect(() => {
  //   fetchMovies();
  // }, []);

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
          onSubmitEditing={() => fetchMovies()}
        />
      </View>
      <FlatList
        style={{marginHorizontal: moderateScale(16)}}
        data={data}
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
