import {StyleSheet, Text, TextInput, View} from 'react-native'
import Colors from 'themes/Colors/colors'
import Spacing from 'themes/Spacing/spacing'
import React, {useState} from 'react'
import Label from '@components/Label'
import FormTextInput from '@screens/PreferencesStack/HomeScreen/Forms/Components/FormTextInput'
import FormContainer from '@screens/PreferencesStack/HomeScreen/Forms/Components/FormContainer'
const PersonalDataForm = () => {
  const [name, setName] = useState<number | string | null>(null)
  const [CPF, setCpf] = useState<number | string | null>(null)
  const [email, setEmail] = useState<number | string | null>(null)
  const [phone, setPhone] = useState<number | string | null>(null)
  return (
    <FormContainer>
      <Label size={'large'} color={'black'}>
        Informações pessoais
      </Label>
      <FormTextInput
        description={'Nome'}
        onChangeText={text => setName(text)}
      />
      <FormTextInput description={'CPF'} keyboardType={'numeric'} />
      <FormTextInput description={'E-mail'} keyboardType={'email-address'} />
      <FormTextInput description={'Telefone'} keyboardType={'numeric'} />
    </FormContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    width: '100%',
    padding: Spacing.normal,
    borderRadius: 10
  },
  inputStyle: {
    backgroundColor: 'red',
    flex: 1,
    height: 40,
    marginHorizontal: 5
  },
  rowContainer: {
    flexDirection: 'row'
  }
})
export default PersonalDataForm
