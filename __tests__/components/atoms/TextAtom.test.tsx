import {TextAtom} from '@src/components/atoms/TextAtom';
import * as React from 'react';
import renderer from 'react-test-renderer';

function sum(a: number, b: number) {
  return a + b;
}

test('sum numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});

describe('Text Component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<TextAtom text="Sample text" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with title preset', () => {
    const tree = renderer
      .create(<TextAtom text="Sample text" preset="title" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with subTitle preset', () => {
    const tree = renderer
      .create(<TextAtom text="Sample text" preset="subTitle" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with body preset', () => {
    const tree = renderer
      .create(<TextAtom text="Sample text" preset="body" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with caption preset', () => {
    const tree = renderer
      .create(<TextAtom text="Sample text" preset="caption" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
