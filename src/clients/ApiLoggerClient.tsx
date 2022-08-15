import axios from "axios";
import config from '../config.json'

export interface Message{
    title: string,
    description: string,
    key: string
}

export interface GetMessageResponse{
    messages: Array<Message>,
    count: number
}

export class ApiLoggerClient{
    async getMessages(): Promise<GetMessageResponse> {
        const response = await axios.get(`${config.API_LOGGER_URL}/message`)
        return response.data
    }
}