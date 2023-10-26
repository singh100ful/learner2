/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const sleep = (ms: number) =>
  new Promise(resolve => setTimeout(() => resolve(true), ms));

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

it('renders correctly', async () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
  await sleep(10);
});
