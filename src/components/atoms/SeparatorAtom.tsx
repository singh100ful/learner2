import {colorPresets} from '@src/theme/colors';
import {verticalScale} from '@src/theme/scale';
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface SeparatorAtomProps {}

export const SeparatorAtom: React.FC<SeparatorAtomProps> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: verticalScale(10),
  },
  line: {flex: 1, backgroundColor: colorPresets.gray, height: 1},
});
