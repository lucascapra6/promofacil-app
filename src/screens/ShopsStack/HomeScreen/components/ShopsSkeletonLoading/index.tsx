import React from "react";
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import {ISkeletonContentProps} from "react-native-skeleton-content-nonexpo/lib/Constants";
import Colors from "themes/Colors/colors";
import Spacing from "themes/Spacing/spacing";
import {ScrollView, View} from "react-native";
interface IShopsSkeletonLoading extends ISkeletonContentProps {
    numberOfRenders: number
}
const ShopsSkeletonLoading = ({isLoading,...props}: ISkeletonContentProps) => {
    const array = [1,2]
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SkeletonContent
                containerStyle={{ flex: 1}}
                animationDirection="horizontalLeft"
                layout={[
                    {
                        key:'container', width:'100%', height: 180, backgroundColor:Colors.white, marginBottom:Spacing.normal, children: [
                            {
                                key:'row-container', flexDirection:'row', margin: Spacing.normal, children: [
                                    {
                                        key:'image', width: 100, height: 100
                                    },
                                    {
                                        key:'shoppingInformation', children: [
                                            {key:'marketName', width: 250, height: 30, margin: Spacing.small},
                                            {key:'promotionsNumber', width: 250, height: 25, margin: Spacing.small}
                                        ]
                                    }
                                ],
                            },
                            {
                                key:'rowContainer2', flexDirection:'row', alignItems:'center', justifyContent:'center', children: [
                                    {key:'promotionButton', width: 150, height: 50, margin: Spacing.small},
                                    {key:'sectionsButton', width: 110, height: 50, margin: Spacing.small},
                                ]
                            }
                        ]
                    },
                    {
                        key:'container', width:'100%', height: 180, backgroundColor:Colors.white, marginBottom:Spacing.normal, children: [
                            {
                                key:'row-container', flexDirection:'row', margin: Spacing.normal, children: [
                                    {
                                        key:'image', width: 100, height: 100
                                    },
                                    {
                                        key:'shoppingInformation', children: [
                                            {key:'marketName', width: 250, height: 30, margin: Spacing.small},
                                            {key:'promotionsNumber', width: 250, height: 25, margin: Spacing.small}
                                        ]
                                    }
                                ],
                            },
                            {
                                key:'rowContainer2', flexDirection:'row', alignItems:'center', justifyContent:'center', children: [
                                    {key:'promotionButton', width: 150, height: 50, margin: Spacing.small},
                                    {key:'sectionsButton', width: 110, height: 50, margin: Spacing.small},
                                ]
                            }
                        ]
                    },
                    {
                        key:'container', width:'100%', height: 180, backgroundColor:Colors.white, marginBottom:Spacing.normal, children: [
                            {
                                key:'row-container', flexDirection:'row', margin: Spacing.normal, children: [
                                    {
                                        key:'image', width: 100, height: 100
                                    },
                                    {
                                        key:'shoppingInformation', children: [
                                            {key:'marketName', width: 250, height: 30, margin: Spacing.small},
                                            {key:'promotionsNumber', width: 250, height: 25, margin: Spacing.small}
                                        ]
                                    }
                                ],
                            },
                            {
                                key:'rowContainer2', flexDirection:'row', alignItems:'center', justifyContent:'center', children: [
                                    {key:'promotionButton', width: 150, height: 50, margin: Spacing.small},
                                    {key:'sectionsButton', width: 110, height: 50, margin: Spacing.small},
                                ]
                            }
                        ]
                    },
                    {
                        key:'container', width:'100%', height: 180, backgroundColor:Colors.white, marginBottom:Spacing.normal, children: [
                            {
                                key:'row-container', flexDirection:'row', margin: Spacing.normal, children: [
                                    {
                                        key:'image', width: 100, height: 100
                                    },
                                    {
                                        key:'shoppingInformation', children: [
                                            {key:'marketName', width: 250, height: 30, margin: Spacing.small},
                                            {key:'promotionsNumber', width: 250, height: 25, margin: Spacing.small}
                                        ]
                                    }
                                ],
                            },
                            {
                                key:'rowContainer2', flexDirection:'row', alignItems:'center', justifyContent:'center', children: [
                                    {key:'promotionButton', width: 150, height: 50, margin: Spacing.small},
                                    {key:'sectionsButton', width: 110, height: 50, margin: Spacing.small},
                                ]
                            }
                        ]
                    },
                ]}
                isLoading={isLoading}
                {...props}
            />
        </ScrollView>
    )
}
export default ShopsSkeletonLoading
