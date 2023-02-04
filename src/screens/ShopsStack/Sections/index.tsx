import {FlatList, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Label from '@components/Label'
import SectionCard from './components/SectionCard'
import Screen from '@components/Screen'
import {useFetchSectionsQuery} from "@reactQuery/hookQuerys/sections/useFetchSectionsQuery";
import Colors from "themes/Colors/colors";
import {Loading} from "@components/Loading";

export default function Sections() {
    const {data, isLoading, isError} = useFetchSectionsQuery()
    if(isLoading) return <Loading color={Colors.primary} size={"large"}></Loading>
    if(isError) return <Text>Erro...</Text>
  return (
    <Screen>
      <FlatList
        ListHeaderComponent={() => (
          <Label
            size="large"
            color="black"
            fontWeight="bold"
            style={{marginBottom: 20}}>
            Seções
          </Label>
        )}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <SectionCard onPress={() => console.log('entra na seção')} label={item.name} imageUrl={item.image.path} isLoading={isLoading} />
        )}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({})
