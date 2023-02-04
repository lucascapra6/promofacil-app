import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosStatic,
  CreateAxiosDefaults
} from 'axios'

class AxiosClient {
  client: AxiosStatic
  httpClient: AxiosInstance

  constructor(config: CreateAxiosDefaults) {
    this.client = axios
    this.httpClient = this.client.create(config)
  }
  async sendRequest(config: AxiosRequestConfig) {
    const response = await this.httpClient.request(config)
    return response.data
  }
}
export default AxiosClient
