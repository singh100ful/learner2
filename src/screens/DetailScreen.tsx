import {ButtonAtom} from '@src/components/atoms/ButtonAtom';
import {LoaderAtom} from '@src/components/atoms/LoaderAtom';
import {SeparatorAtom} from '@src/components/atoms/SeparatorAtom';
import {TextAtom} from '@src/components/atoms/TextAtom';
import {GenericNavigation} from '@src/navigation/AppNavigation';
import {movieDetails} from '@src/provider/store/services/movieService';
import {useAppDispatch, useAppSelector} from '@src/provider/store/store';
import {WINDOW_WIDTH, horizontalScale, verticalScale} from '@src/theme/scale';
import * as React from 'react';
import {Image, View} from 'react-native';

interface DetailScreenProps extends GenericNavigation {}

export const DetailScreen: React.FC<DetailScreenProps> = ({route}) => {
  const data: MovieData = route.params?.data;
  const dispatch = useAppDispatch();
  const {loading, details} = useAppSelector(state => state.root.movie);

  React.useEffect(() => {
    dispatch(movieDetails(data.imdbID));
  }, []);

  if (loading.detail) {
    return <LoaderAtom loading={loading.detail} />;
  }
  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <View>
        <Image
          source={{uri: details?.Poster}}
          style={{width: WINDOW_WIDTH, height: verticalScale(250)}}
          resizeMode="cover"
        />
        <View
          style={{
            paddingHorizontal: horizontalScale(16),
            paddingVertical: verticalScale(10),
          }}>
          <TextAtom text={details?.Title} preset="title" />
          <TextAtom text={'Year: ' + details?.Year} />
          <TextAtom text={'Ratings: ' + details?.imdbRating} />
          <SeparatorAtom />
          <TextAtom text={'Plot: '} preset="subTitle" />
          <TextAtom text={details?.Plot} />
        </View>
      </View>
      <ButtonAtom title="Buy Now" />
    </View>
  );
};
