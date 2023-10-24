import {moderateScale, horizontalScale} from '@src/theme/scale';
import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {TextAtom} from '../atoms/TextAtom';

interface MovieMoleculeProps {
  item: MovieData;
}

export const MovieMolecule: React.FC<MovieMoleculeProps> = ({item}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={{uri: item.Poster}}
        style={{width: moderateScale(100), height: moderateScale(100)}}
      />
      <View style={{paddingLeft: horizontalScale(10)}}>
        <TextAtom text={item.Title} preset="title" />
        <TextAtom text={item.Year} />
      </View>
    </View>
  );
};
