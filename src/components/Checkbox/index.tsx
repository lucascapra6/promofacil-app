import React, {useEffect, useState} from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

interface CheckboxProps {
    label: string;
    onChange: (value: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, onChange}) => {
    const [isChecked, setIsChecked] = useState(false)
    function handleChange() {
        setIsChecked(prevState => !prevState)
    }
    useEffect(() => {
        onChange(isChecked)
    },[isChecked])
    return (
        <TouchableOpacity onPress={handleChange}>
            <View style={styles.checkboxContainer}>
                <View style={styles.checkbox}>
                    {isChecked && (<Text>checkbox marcado</Text>)}
                </View>
                <Text style={styles.label}>{label}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    checkbox: {
        height: 24,
        width: 25
    },
    label: {

    },
    checkboxInner: {
        backgroundColor:"red"
    }
})

export default Checkbox
