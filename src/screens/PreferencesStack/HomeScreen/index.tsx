import React, {useEffect, useState} from 'react'
import PersonalDataForm from '@screens/PreferencesStack/HomeScreen/Forms/PersonalDataForm'
import ScrollScreen from '@components/ScrollScreen'
import AdressForm from '@screens/PreferencesStack/HomeScreen/Forms/AdressForm'
import Button from '@components/Button'
import {useQuery, useMutation} from 'react-query'
import axios from 'axios'
import {Text} from 'react-native'
import MarketsApi from "@api/Markets";
interface HomeScreenProps {
    accessibilityLabel?: string;
}
const HomeScreen = () => {
  return (
    <ScrollScreen>
      <PersonalDataForm/>
      <AdressForm />
      <Button
          onPress={() => {}}
        label={'Salvar Preferências'}
        buttonStyle={{marginBottom: 20}}
      />
    </ScrollScreen>
  )
}
export default HomeScreen
