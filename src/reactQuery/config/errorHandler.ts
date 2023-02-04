import {Alert} from "react-native";

export default function queryErrorHandler(error: unknown): void {
    const errorMessage = error instanceof Error ? error.message : 'Falha de conexão com o servidor';
    Alert.alert('Atenção', errorMessage)
}
