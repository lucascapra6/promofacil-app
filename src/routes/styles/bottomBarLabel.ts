import styled from 'styled-components/native'
import Colors from 'themes/Colors/colors'
import Sizes from 'themes/Fonts/sizes'
import Spacing from 'themes/Spacing/spacing'

const BottomBarLabel = styled.Text`
  color: ${Colors.white};
  font-size: ${Sizes.small}px;
  padding-bottom: ${Spacing.small}px;
  position: absolute;
  bottom: 0;
`
export default BottomBarLabel
