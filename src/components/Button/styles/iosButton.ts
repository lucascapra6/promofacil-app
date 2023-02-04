import styled from 'styled-components/native'
import Spacing from 'themes/Spacing/spacing'
import Colors from 'themes/Colors/colors'

const IosButtonStyled = styled.TouchableOpacity<{secondary?: boolean}>`
  margin-top: ${Spacing.normal}px;
  align-self: center;
  padding: ${Spacing.normal}px;
  padding-left: ${Spacing.large}px;
  padding-right: ${Spacing.large}px;
  border-radius: 5px;
  margin-left: 2px;
  margin-right: 2px;
  background-color: ${props =>
    props.secondary ? Colors.secondary : Colors.primary};
`

export default IosButtonStyled
