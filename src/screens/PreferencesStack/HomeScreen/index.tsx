import React, {useEffect, useState} from 'react'
import PersonalDataForm from '@screens/PreferencesStack/HomeScreen/Forms/PersonalDataForm'
import ScrollScreen from '@components/ScrollScreen'
import AdressForm from '@screens/PreferencesStack/HomeScreen/Forms/AdressForm'
import Button from '@components/Button'
import {useQuery, useMutation} from 'react-query'
import axios from 'axios'
import {Text} from 'react-native'
import MarketsApi from "@api/Markets";
import SavePreferencesButton from "@screens/PreferencesStack/components/SavePreferencesButton";
interface HomeScreenProps {
    accessibilityLabel?: string;
}
function handlePress(nome: string, cpf: number) {
    return {nome, cpf}
}
const HomeScreen = () => {
  return (
    <ScrollScreen>
      <PersonalDataForm/>
      <AdressForm />
      <SavePreferencesButton handlePress={handlePress}/>
    </ScrollScreen>
  )
}
export default HomeScreen
