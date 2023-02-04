import React from "react";
import {ActivityIndicator, ActivityIndicatorProps} from "react-native";
import styled from "styled-components/native";
import CentralizedContainer from "@components/StyledContainers/CentralizedContainer/CentralizedContainer";
export function Loading(props: ActivityIndicatorProps) {
    return (
        <CentralizedContainer>
            <ActivityIndicator {...props}/>
        </CentralizedContainer>
    )
}
