import { BASE_URL, httpClient } from "../../commons/utils/requests";
import { IGetInput, IPostInput, IPutInput } from "../../interfaces/Ibase-service";

export default class BaseService<T> {
    protected baseUrl: string;

    constructor() {
        this.baseUrl = BASE_URL;
    }

    public  async GetAsync({
        endpoint, 
        params, 
        options
    }: IGetInput) : Promise<T> {
        const requestUrl = `${this.baseUrl}/${endpoint}?${params}`
        return httpClient({
            url: requestUrl,
            options: {
                method: 'GET', 
                ...options
            }
        })
        .then((response : T) => response)
        .catch((ex) => {
            throw new Error(ex);
        });
    }

    public  async PostAsync({
        endpoint, 
        requestBody,
        options,
    }: IPostInput) : Promise<T> {
        const requestUrl = `${this.baseUrl}/${endpoint}`
        return httpClient({
            url: requestUrl,
            options: {
                method: 'POST',
                body: JSON.stringify(requestBody),
                headers: {
                    'Content-Type': 'application/json', 
                    ...options.headers,
                },
                ...options
            }
        })
        .then((response : T) => response)
        .catch((ex) => {
            throw new Error(ex);
        });;
    }

    public  async PutAsync({
        endpoint, 
        requestBody, 
        options,
    }: IPutInput) : Promise<T> {
        const requestUrl = `${this.baseUrl}/${endpoint}`
        return httpClient({
            url: requestUrl,
            options: {
                method: 'PUT',
                body: JSON.stringify(requestBody),
                headers: {
                    'Content-Type': 'application/json', 
                    ...options.headers,
                },
                ...options
            }
        })
        .then((response : T) => response)
        .catch((ex) => {
            throw new Error(ex);
        });;
    }

}