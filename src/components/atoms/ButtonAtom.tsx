import * as React from 'react';
import {Pressable, PressableProps, ViewStyle} from 'react-native';
import {TextAtom} from './TextAtom';
import {colorPresets} from '@src/theme/colors';
import {moderateScale} from '@src/theme/scale';

interface ButtonAtomProps extends PressableProps {
  title: string;
  preset?: ButtonPresets;
}

export const ButtonAtom: React.FC<ButtonAtomProps> = ({
  title,
  preset = 'primary',
  ...rest
}) => {
  const viewStyle = Presets[preset];
  return (
    <Pressable
      {...rest}
      style={({pressed}) => [
        viewStyle,
        {
          opacity: pressed ? 0.7 : 1,
        },
      ]}>
      <TextAtom
        text={title}
        preset="subTitle"
        style={{color: colorPresets.white}}
      />
    </Pressable>
  );
};

const BASE_VIEW: ViewStyle = {
  backgroundColor: colorPresets.primaryCTA,
  padding: moderateScale(15),
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: moderateScale(8),
};

const SMALL_VIEW: ViewStyle = {
  backgroundColor: colorPresets.primaryCTA,
  padding: moderateScale(5),
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: moderateScale(120),
  borderRadius: moderateScale(5),
};

const Presets = {
  primary: {...BASE_VIEW} as ViewStyle,
  primaryDisabled: {
    ...BASE_VIEW,
    backgroundColor: colorPresets.gray,
  } as ViewStyle,
  small: {...SMALL_VIEW} as ViewStyle,
};

export type ButtonPresets = keyof typeof Presets;
