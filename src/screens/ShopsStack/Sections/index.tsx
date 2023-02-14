import {FlatList, StyleSheet, Text, View} from 'react-native'
import React, {useEffect} from 'react'
import Label from '@components/Label'
import SectionCard from './components/SectionCard'
import Screen from '@components/Screen'
import {useFetchSectionsQuery} from "@reactQuery/hookQuerys/sections/useFetchSectionsQuery";
import Colors from "themes/Colors/colors";
import {Loading} from "@components/Loading";
import {useDispatch} from "react-redux";
import {setSectionsAction} from "@store/actions/SectionsActions";
import useStoreData from "hooks/useStoreData";
import useApiDataOfflineHandler from "hooks/useApiDataOfflineHandler";
import {ISections} from "@interfaces/ApiResponses/ListSections";
export default function Sections() {
    const {data, isLoading, isError} = useFetchSectionsQuery()
    const {sections} = useStoreData()
    const sectionsData = useApiDataOfflineHandler<ISections[]>(data, sections, isError)
    const dispatch = useDispatch<any>()

    useEffect(() => {
        if(data) {
            dispatch(setSectionsAction(data))
        }
    },[data])
    if(isLoading) return <Loading color={Colors.primary} size={"large"}></Loading>
    if(!sectionsData) return <Text>Error</Text>
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
        data={sectionsData}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <SectionCard onPress={() => console.log('entra na seção')} label={item.name} imageUrl={item.image.path} isLoading={isLoading} />
        )}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({})
