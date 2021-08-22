import { Covid } from "./covid.interface";

export interface ApiResponse {
    data: Covid;
    success: boolean;
    message: string;
}