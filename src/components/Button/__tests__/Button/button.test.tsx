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
    test('is button label props correct', () => {
        render(<Button onPress={onPressMock} label={buttonLabel} />)
        const propButtonLabel = screen.getByText(buttonLabel);
        expect(propButtonLabel).toBeDefined();
    });
    // test('is button disabled', () => {
    //     const {getByTestId} = render(<Button label={buttonLabel} onPress={onPressMock} disabled={true} visible={false}/>)
    //     const disabledButton = getByTestId('my-button')
    //     expect(disabledButton.props.visible).toBe(false)
    // })
});
