import {QueryClient} from "react-query";
import queryErrorHandler from "@reactQuery/config/errorHandler";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            onError: queryErrorHandler,
            onSuccess: () => console.log('Request success')
        }
    }
})
export default queryClient
