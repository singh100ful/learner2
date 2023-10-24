import {Dimensions} from 'react-native';

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

const baseWidth = 375;
const baseHeight = 812;

export const horizontalScale = (size: number) =>
  (WINDOW_WIDTH / baseWidth) * size;
export const verticalScale = (size: number) =>
  (WINDOW_HEIGHT / baseHeight) * size;

export const moderateScale = (size: number, factor: number = 0.5) =>
  size + (horizontalScale(size) - size) * 0.5;

export const scaleFont = (size: number, height: number = 1.19) => {
  const result = moderateScale(size);

  return {
    fontSize: result,
    lineHeight: result * height,
  };
};
