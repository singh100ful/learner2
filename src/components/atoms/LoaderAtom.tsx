import {colorPresets} from '@src/theme/colors';
import {verticalScale} from '@src/theme/scale';
import * as React from 'react';
import {ActivityIndicator, View} from 'react-native';

interface LoaderAtomProps {
  loading: boolean;
}

export const LoaderAtom: React.FC<LoaderAtomProps> = ({loading}) => {
  if (loading) {
    return (
      <View style={{paddingVertical: verticalScale(16)}}>
        <ActivityIndicator size={'large'} color={colorPresets.primaryCTA} />
      </View>
    );
  }
  return null;
};
