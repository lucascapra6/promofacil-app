import styled from 'styled-components/native'
import Spacing from 'themes/Spacing/spacing'

const HeaderButtonsContainer = styled.View<{width?: number}>`
  flex-direction: row;
  width: ${props => props.width || 100}px;
  padding: 0 ${Spacing.normal}px 0 ${Spacing.normal}px;
  justify-content: space-between;
`

export default HeaderButtonsContainer
