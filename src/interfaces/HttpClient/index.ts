import {AxiosResponse} from "axios";
interface IHttpClient {
    client: any
    httpClient: any
    sendRequest: () => Promise<AxiosResponse<any, any>>
}

export default IHttpClient
