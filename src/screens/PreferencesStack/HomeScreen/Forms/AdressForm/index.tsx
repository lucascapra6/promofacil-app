import {StyleSheet, Text, View} from 'react-native'
import React, {useState, PropsWithChildren} from 'react'
import Label from '@components/Label'
import FormTextInput from '@screens/PreferencesStack/HomeScreen/Forms/Components/FormTextInput'
import FormContainer from '@screens/PreferencesStack/HomeScreen/Forms/Components/FormContainer'
import RowContainer from '@components/StyledContainers/RowContainer/RowContainer'
const AdressForm = () => {
  const [cidade, setCidade] = useState<number | string | null>(null)
  const [CPF, setCpf] = useState<number | string | null>(null)
  const [email, setEmail] = useState<number | string | null>(null)
  const [phone, setPhone] = useState<number | string | null>(null)
  console.log(cidade)
  return (
    <FormContainer>
      <Label size={'large'} color={'black'}>
        Informações de localização
      </Label>
      <RowContainer>
        <FormTextInput
          style={styles.rowContainerInput}
          onChangeText={text => setCidade(text)}
          description={'Cidade'}
        />
        <FormTextInput
          style={styles.rowContainerInput}
          onChangeText={text => setCpf(text)}
          description={'Estado'}
          error={true}
        />
      </RowContainer>
      <FormTextInput description={'Rua'} />
      <FormTextInput description={'Bairro'} />
      <RowContainer>
        <FormTextInput
          style={styles.rowContainerInput}
          description={'Número'}
        />
        <FormTextInput
          style={styles.rowContainerInput}
          description={'Complemento'}
        />
        <FormTextInput
          style={styles.rowContainerInput}
          description={'Complemento'}
        />
      </RowContainer>
    </FormContainer>
  )
}

const styles = StyleSheet.create({
  rowContainerInput: {
    flex: 1,
    marginHorizontal: 2
  }
})
export default AdressForm
