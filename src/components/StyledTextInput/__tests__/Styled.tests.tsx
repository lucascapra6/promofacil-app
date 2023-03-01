import {render} from "@testing-library/react-native";
import TextInputStyled from "@components/StyledTextInput/style";
import Colors from "themes/Colors/colors";
describe('components/StyledTextInput', () => {
    it('it renders correctly', () => {
        const {queryByTestId} = render(<TextInputStyled testID="text-input-styled"/>)
        const screenView = queryByTestId('text-input-styled')
        expect(screenView).toBeDefined()
    })
    it('it receives error props and change the style', () => {
        const {queryByTestId} = render(<TextInputStyled error={true} testID="text-input-styled"/>)
        const screenView = queryByTestId('text-input-styled')
        expect(screenView?.props.style[0].borderBottomColor).toEqual(Colors.error)
    })
})
