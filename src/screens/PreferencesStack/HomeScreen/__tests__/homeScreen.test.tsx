import HomeScreen from "@screens/PreferencesStack/HomeScreen";
import {render} from "@testing-library/react-native";
import PersonalDataForm from "@screens/PreferencesStack/HomeScreen/Forms/PersonalDataForm";

describe('screens/preferences/HomeScreen', () => {
    it('renders correctly', () => {
        const homeScreen = render(<HomeScreen/>)
        expect(homeScreen).toBeDefined()
    })
    it('Homescreen renders personalDataForm', () => {
        const {queryByTestId}= render(<HomeScreen/>)
        const personalDataForm = queryByTestId('personal-data-form')
        expect(personalDataForm).toBeDefined()
    })
    it('PersonalDataform renders all default inputs', () => {
        const {queryByTestId}= render(<HomeScreen/>)
        const personalDataForm = queryByTestId('personal-data-form')
        expect(personalDataForm?.children).toHaveLength(5)
    })
    it('PersonalDataForm has the correct Label description', () => {
        const {queryByTestId}= render(<HomeScreen/>)
        const personalDataFormLabel = queryByTestId('personal-data-form-label')
        expect(personalDataFormLabel?.props.children).toEqual('Informações pessoais')
    })
    it('PersonalDataForm has the correct name input config', () => {
        const {queryByTestId}= render(<HomeScreen/>)
        const personalDataFormNameInput = queryByTestId('name-input')
        const personalDataFormNameInputDescription = personalDataFormNameInput?.props.children[0].props.children
        expect(personalDataFormNameInputDescription).toBe('Nome')
    })
    it('PersonalDataForm has the correct cpf input config', () => {
        const {queryByTestId}= render(<HomeScreen/>)
        const personalDataFormNameInput = queryByTestId('cpf-input')
        const personalDataFormNameInputDescription = personalDataFormNameInput?.props.children[0].props.children
        const personalDataFormNameTextInput = personalDataFormNameInput?.props.children[1]._owner.memoizedProps
        expect(personalDataFormNameInputDescription).toBe('CPF')
        expect(personalDataFormNameTextInput.keyboardType).toBe('numeric')
    })
})
