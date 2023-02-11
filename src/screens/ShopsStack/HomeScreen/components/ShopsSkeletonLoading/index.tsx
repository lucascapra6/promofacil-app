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
                        key:'containe1', width:'100%', height: 180, backgroundColor:Colors.white, marginBottom:Spacing.normal, children: [
                            {
                                key:'row-container1', flexDirection:'row', margin: Spacing.normal, children: [
                                    {
                                        key:'image1', width: 100, height: 100
                                    },
                                    {
                                        key:'shoppingInformation1', children: [
                                            {key:'marketName1', width: 250, height: 30, margin: Spacing.small},
                                            {key:'promotionsNumber1', width: 250, height: 25, margin: Spacing.small}
                                        ]
                                    }
                                ],
                            },
                            {
                                key:'rowContainer3', flexDirection:'row', alignItems:'center', justifyContent:'center', children: [
                                    {key:'promotionButton1', width: 150, height: 50, margin: Spacing.small},
                                    {key:'sectionsButton1', width: 110, height: 50, margin: Spacing.small},
                                ]
                            }
                        ]
                    },
                    {
                        key:'container3', width:'100%', height: 180, backgroundColor:Colors.white, marginBottom:Spacing.normal, children: [
                            {
                                key:'row-container3', flexDirection:'row', margin: Spacing.normal, children: [
                                    {
                                        key:'image3', width: 100, height: 100
                                    },
                                    {
                                        key:'shoppingInformation3', children: [
                                            {key:'marketName3', width: 250, height: 30, margin: Spacing.small},
                                            {key:'promotionsNumber3', width: 250, height: 25, margin: Spacing.small}
                                        ]
                                    }
                                ],
                            },
                            {
                                key:'rowContainer4', flexDirection:'row', alignItems:'center', justifyContent:'center', children: [
                                    {key:'promotionButton3', width: 150, height: 50, margin: Spacing.small},
                                    {key:'sectionsButton3', width: 110, height: 50, margin: Spacing.small},
                                ]
                            }
                        ]
                    },
                    {
                        key:'container4', width:'100%', height: 180, backgroundColor:Colors.white, marginBottom:Spacing.normal, children: [
                            {
                                key:'row-container4', flexDirection:'row', margin: Spacing.normal, children: [
                                    {
                                        key:'image4', width: 100, height: 100
                                    },
                                    {
                                        key:'shoppingInformation4', children: [
                                            {key:'marketName4', width: 250, height: 30, margin: Spacing.small},
                                            {key:'promotionsNumber4', width: 250, height: 25, margin: Spacing.small}
                                        ]
                                    }
                                ],
                            },
                            {
                                key:'rowContainer5', flexDirection:'row', alignItems:'center', justifyContent:'center', children: [
                                    {key:'promotionButton4', width: 150, height: 50, margin: Spacing.small},
                                    {key:'sectionsButton4', width: 110, height: 50, margin: Spacing.small},
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
