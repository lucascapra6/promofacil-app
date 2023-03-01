import Screen from "@components/Screen";
import {render} from "@testing-library/react-native";
import {Text} from "react-native";
import AppImage from "@components/AppImage";
import Colors from "themes/Colors/colors";
describe('components/screen', () => {
    it('it renders correctly', () => {
        const {queryByTestId} = render(
            <Screen>
            <Text>Teste</Text>
            </Screen>)
        const screenView = queryByTestId('styled-screen-view')
        expect(screenView).toBeDefined()
    })
    it('it should have the default background color', () => {
        const {queryByTestId} = render(
            <Screen>
                <Text>Teste</Text>
            </Screen>)
        const screenView = queryByTestId('styled-screen-view')
        expect(screenView?.props.style[0].backgroundColor).toEqual(Colors.background)
    })
    it('it should have the normal padding size', () => {
        const {queryByTestId} = render(
            <Screen padding="normal">
                <Text>Teste</Text>
            </Screen>)
        const screenView = queryByTestId('screen-view')
        expect(screenView?.props.style.padding).toEqual(10)
    })
    it('it should have the small padding size', () => {
        const {queryByTestId} = render(
            <Screen padding="small">
                <Text>Teste</Text>
            </Screen>)
        const screenView = queryByTestId('screen-view')
        expect(screenView?.props.style.padding).toEqual(5)
    })
    it('it should have the large padding size', () => {
        const {queryByTestId} = render(
            <Screen padding="large">
                <Text>Teste</Text>
            </Screen>)
        const screenView = queryByTestId('screen-view')
        expect(screenView?.props.style.padding).toEqual(20)
    })
})
