import {LoaderAtom} from '@src/components/atoms/LoaderAtom';
import {SeparatorAtom} from '@src/components/atoms/SeparatorAtom';
import {TextAtom} from '@src/components/atoms/TextAtom';
import {baseUrl} from '@src/constants/appConstants';
import {GenericNavigation} from '@src/navigation/AppNavigation';
import {WINDOW_WIDTH, horizontalScale, verticalScale} from '@src/theme/scale';
import * as React from 'react';
import {Image, View} from 'react-native';

interface DetailScreenProps extends GenericNavigation {}

export const DetailScreen: React.FC<DetailScreenProps> = ({route}) => {
  const [loading, setLoading] = React.useState(false);
  const [title, setTitle] = React.useState<TitleData | null>(null);

  const data: MovieData = route.params?.data;

  const fetchTitle = async (page: number = 1) => {
    setLoading(true);
    try {
      const response = await fetch(baseUrl + `i=${data.imdbID}&plot=full`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      const res = await response.json();
      console.log(res);
      setTitle(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchTitle();
  }, []);

  if (loading) {
    return <LoaderAtom loading={loading} />;
  }
  return (
    <View style={{flex: 1}}>
      <Image
        source={{uri: title?.Poster}}
        style={{width: WINDOW_WIDTH, height: verticalScale(250)}}
        resizeMode="cover"
      />
      <View
        style={{
          paddingHorizontal: horizontalScale(16),
          paddingVertical: verticalScale(10),
        }}>
        <TextAtom text={title?.Title} preset="title" />
        <TextAtom text={'Year: ' + title?.Year} />
        <TextAtom text={'Ratings: ' + title?.imdbRating} />
        <SeparatorAtom />
        <TextAtom text={'Plot: '} preset="subTitle" />
        <TextAtom text={title?.Plot} />
      </View>
    </View>
  );
};
