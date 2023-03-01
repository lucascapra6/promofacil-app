import AppImage from "@components/AppImage";
import { render } from "@testing-library/react-native";
describe('AppImage', () => {
    it('renders correctly', () => {
        const {queryByTestId} = render(<AppImage width={100} height={100} testID="app-image"/>)
        const appImage = queryByTestId('app-image')
        expect(appImage).toBeDefined()
    })
    it('renders correctly width and height', () => {
        const {queryByTestId} = render(<AppImage width={100} height={100} testID="app-image"/>)
        const appImage = queryByTestId('app-image')
        expect(appImage?.props.width).toEqual(100)
        expect(appImage?.props.height).toEqual(100)
    })
})
