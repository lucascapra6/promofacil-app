import AxiosClient from '@api/HttpClient'
import IHttpClient from "@interfaces/HttpClient";
const config = {
  baseURL: 'https://promo-facil-backend.herokuapp.com'
}
const client = new AxiosClient(config)

interface HttpClient {

}
class HttpModel {
  httpClient: AxiosClient
  constructor(httpClient = client) {
    this.httpClient = httpClient
  }
}
export default HttpModel
