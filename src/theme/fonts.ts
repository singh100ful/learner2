import {colorPresets} from './colors';
import {scaleFont} from './scale';

export const defaultTexts = {
  title: {
    fontWeight: '700',
    color: colorPresets.primaryText,
    ...scaleFont(20),
  },
  subTitle: {
    fontWeight: '700',
    color: colorPresets.primaryText,
    ...scaleFont(16),
  },
  body: {
    fontWeight: '400',
    color: colorPresets.primaryText,
    ...scaleFont(16),
  },
  caption: {
    fontWeight: '500',
    color: colorPresets.primaryText,
    ...scaleFont(14),
  },
};
