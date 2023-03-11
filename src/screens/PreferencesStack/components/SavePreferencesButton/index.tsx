import React from "react";
import Button from "@components/Button";

type SavePreferencesButton = {
    handlePress: (...args: any[]) => void;
}
const SavePreferencesButton = ({handlePress}: SavePreferencesButton) => {
    return (
        <Button
            onPress={() => handlePress('lucas', 123456789)}
            label={'Salvar Preferências'}
            buttonStyle={{marginBottom: 20}}
        />
    )
}
export default SavePreferencesButton
