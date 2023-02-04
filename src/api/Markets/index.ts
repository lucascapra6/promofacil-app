import HttpModel from "@api/HttpModel";
import {ISections} from "@interfaces/ApiResponses/ListSections";
import IShops from "@interfaces/ApiResponses/ListShops";
class MarketsApi extends HttpModel {
    async listSections(): Promise<ISections[]>  {
        const requestConfig = {
            method:'get',
            url:`/shops/1/session`
        }
        return await this.httpClient.sendRequest(requestConfig) as ISections[]
    }
    async listShops() : Promise<IShops[]> {
        const requestConfig = {
            method:'get',
            url:`/shops`
        }
        return await this.httpClient.sendRequest(requestConfig) as IShops[]
    }
}
export default MarketsApi
