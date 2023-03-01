import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import Button from "@components/Button";
import AndroidButton from "@components/Button/AndroidButton";

describe('Button', () => {
    const onPressMock = jest.fn();
    const buttonLabel = 'Teste'
    test('should call onPress function when button is clicked', () => {
        const { getByTestId } = render(<Button onPress={onPressMock} testID="my-button" label={buttonLabel} />);
        const button = getByTestId('my-button');

        fireEvent.press(button);

        expect(onPressMock).toHaveBeenCalled();
    });
    test('is button component rendering the Android button', () => {
        const returnsTrue = () => true
        const {queryByTestId} = render(<Button label={buttonLabel} onPress={onPressMock} isAndroid={returnsTrue()}/>)
        const androidButton = queryByTestId('my-button')
        expect(androidButton?.props.children._owner.memoizedProps.testID).toEqual('android-button')
    });
    test('is button component rendering the Ios button', () => {
        const returnsFalse = () => false
        const {queryByTestId} = render(<Button label={buttonLabel} onPress={onPressMock} isAndroid={returnsFalse()}/>)
        const androidButton = queryByTestId('my-button')
        expect(androidButton?.props.children[0]._owner.memoizedProps.testID).toEqual('ios-button')
    });
    test('is button label props correct', () => {
        render(<Button onPress={onPressMock} label={buttonLabel} />)
        const propButtonLabel = screen.getByText(buttonLabel);
        expect(propButtonLabel).toBeDefined();
    });
    test('is button not visible', () => {
        const {queryByTestId} = render(<Button label={buttonLabel} onPress={onPressMock} visible={false}/>)
        const button = queryByTestId('my-button')
        expect(button).toBeFalsy()
    });
    test('is button disabled', () => {
        const {queryByTestId} = render(<Button label={buttonLabel} onPress={onPressMock} disabled={true}/>)
        const button = queryByTestId('my-button')
        expect(button?.props.accessibilityState.disabled).toBe(true)
    })
});
