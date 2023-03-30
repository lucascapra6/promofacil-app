import {act, fireEvent, renderHook, screen} from "@testing-library/react-native";
import useQuantityControll from "hooks/Reacthook/useQuantityControll";
import {render} from "@testing-library/react-native";
import HomeScreen from "@screens/PreferencesStack/HomeScreen";
import QuantityControl from "hooks/Reacthook/QuantityControll";
describe('it should handle with react states', () => {
    it('test if the result is being incremented when button is pressed', () => {
        const {result} = renderHook(() => useQuantityControll())
        render(<QuantityControl result={result.current.result} decrement={result.current.decrement} increment={result.current.increment}/>)

        const button = screen.getByTestId('incrementButton')
        fireEvent.press(button)
        expect(result.current.result).toEqual(2)
    })
})
