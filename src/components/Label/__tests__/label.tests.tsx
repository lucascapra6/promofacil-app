import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Label from "@components/Label";

describe('Label Component', () => {
    test('Label renders correctly', () => {
        const { queryByTestId, rerender } = render(<Label>Teste</Label>);
        const label = queryByTestId('app-label');
        expect(label?.props.children).toEqual('Teste');

        rerender(<Label>teste</Label>)
        expect(label?.props.children).toEqual('teste')
    });

    test('Label not render when visible prop is true', () => {
       const {queryByTestId} = render(<Label visible={false}>teste</Label>)
        const label = queryByTestId('app-label')
        expect(label).toBeFalsy()
    });

    test('Label receive correct small size', () => {
        const {queryByTestId} = render(<Label size="small">teste</Label>)
        const label = queryByTestId('app-label')
        expect(label?.props.style.fontSize).toEqual(14)
    });
    test('Label receive correct medium size', () => {
        const {queryByTestId} = render(<Label size="medium">teste</Label>)
        const label = queryByTestId('app-label')
        expect(label?.props.style.fontSize).toEqual(20)
    });
    test('Label receive correct large size', () => {
        const {queryByTestId} = render(<Label size="large">teste</Label>)
        const label = queryByTestId('app-label')
        expect(label?.props.style.fontSize).toEqual(26)
    });
});
