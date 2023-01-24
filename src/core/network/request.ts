import axios, { AxiosResponse } from "axios";

export interface Request {
    postRequest(url: string, data: any, header: {}): Promise<AxiosResponse>
    putRequest(url: string, data: any, header: {}): Promise<AxiosResponse>
    getRequest(url: string, header: {}, noParams?: boolean): Promise<AxiosResponse>
    deleteRequest(url: string, header: {}): Promise<AxiosResponse>
}

export default class RequestImpl implements Request {
    constructor() {
    }

    async putRequest(url: string, data: any, header: {}): Promise<AxiosResponse<any, any>> {
        const _header = await this._createHeader(header);
        return await axios.put(url, data, { headers: _header })
    }

    async deleteRequest(url: string, header: {}): Promise<AxiosResponse<any, any>> {
        const _header = await this._createHeader(header);
        return await axios.delete(url, { headers: _header });
    }

    async getRequest(url: string, header: {}, noParams: boolean = true): Promise<AxiosResponse<any, any>> {
        const _header = await this._createHeader(header);
        const apiKey = await this._createApiKey(noParams);
        const finalUrl = url + apiKey;
        return await axios.get(finalUrl, { headers: _header });
    }

    async postRequest(url: string, data: any, header: {}): Promise<AxiosResponse<any, any>> {
        const _header = await this._createHeader(header);
        return await axios.post(url, data, { headers: _header })
    }

    async _createHeader(header: {}): Promise<any> {
        return {
            'Content-Type': 'application/json',
        }
    }

    async _createApiKey(noParams: boolean): Promise<any> {
        if (noParams) {
            return '?api_key=f62f750b70a8ef11dad44670cfb6aa57'
        }
        else {
            return '&api_key=f62f750b70a8ef11dad44670cfb6aa57'
        }
    }
}
