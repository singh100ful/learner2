import {ButtonAtom} from '@src/components/atoms/ButtonAtom';
import * as React from 'react';
import {Pressable} from 'react-native';
import renderer, {act} from 'react-test-renderer';

describe('Button Atom', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ButtonAtom title="Test button" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with preset small', () => {
    const tree = renderer
      .create(<ButtonAtom title="title" preset="small" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('call onPress props when pressed', () => {
    const onPressMock = jest.fn();

    const component = renderer.create(
      <ButtonAtom title="title" onPress={onPressMock} />,
    );

    const pressable = component.root.findByType(Pressable);

    act(() => {
      pressable.props.onPress();
    });

    expect(onPressMock).toHaveBeenCalled();
  });
});
