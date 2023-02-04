import React from 'react'
import styled from 'styled-components/native'
import ViewableIcon from '@components/ViewableIcon'
import IIcons from '@interfaces/Icons'

export const StyledBottomBarIcon = styled(ViewableIcon)<{focused: boolean}>`
  position: absolute;
  top: ${props => (props.focused ? 15 : 25)}px;
`

export default StyledBottomBarIcon
