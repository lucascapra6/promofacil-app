import styled from 'styled-components/native'
import Colors from 'themes/Colors/colors'

interface ITextInputStyled {
  error?: boolean
}
const TextInputStyled = styled.TextInput<ITextInputStyled>`
  background-color: ${Colors.white};
  border-bottom-color: ${props => (props.error ? Colors.error : Colors.gray)};
  border-bottom-width: 1px;
  height: auto;
`
export default TextInputStyled
