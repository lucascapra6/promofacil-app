import React, {useEffect, useState} from 'react'
import PersonalDataForm from '@screens/PreferencesStack/HomeScreen/Forms/PersonalDataForm'
import ScrollScreen from '@components/ScrollScreen'
import AdressForm from '@screens/PreferencesStack/HomeScreen/Forms/AdressForm'
import SavePreferencesButton from "@screens/PreferencesStack/components/SavePreferencesButton";
import Checkbox from "@components/Checkbox";
import QuantityControl from "hooks/Reacthook/QuantityControll";
import useQuantityControll from "hooks/Reacthook/useQuantityControll";
interface HomeScreenProps {
    accessibilityLabel?: string;
}
function handlePress(nome: string, cpf: number) {
    return {nome, cpf}
}
const HomeScreen = () => {
    const {increment, decrement, result} = useQuantityControll()
  return (
    <ScrollScreen>
        <QuantityControl increment={increment} decrement={decrement} result={result}/>
      <PersonalDataForm/>
      <AdressForm />
      <SavePreferencesButton handlePress={handlePress}/>
    </ScrollScreen>
  )
}
export default HomeScreen
