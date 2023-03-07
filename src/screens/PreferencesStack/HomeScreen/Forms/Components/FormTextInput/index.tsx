import {StyleSheet, Text, TextInput, View, TextInputProps} from 'react-native'
import {Dispatch, SetStateAction, FC} from 'react'
import Colors from 'themes/Colors/colors'
import Sizes from 'themes/Fonts/sizes'
import StyledTextInput from '@components/StyledTextInput/style'

interface FormTextInputProps extends TextInputProps {
  description: string
  style?: object
  descriptionStyle?: object
  inputStyle?: object
  error?: boolean
  testID?: string
}

const FormTextInput: FC<FormTextInputProps> = ({
  description,
  inputStyle,
  style,
  descriptionStyle,
  onChangeText,
  error,
    testID
}) => {
  return (
    <View style={{...styles.container, ...style}} testID={testID}>
      <Text style={{...styles.description, ...descriptionStyle}}>
        {description}
      </Text>
      <StyledTextInput
        onChangeText={onChangeText}
        style={inputStyle}
        autoCorrect={false}
        error={error}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 10
  },
  description: {
    color: Colors.gray
  }
})
export default FormTextInput
