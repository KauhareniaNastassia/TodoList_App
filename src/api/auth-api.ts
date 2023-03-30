import {instance} from "./instance";
import {ResponseType} from "./todolist-api";


export const authApi = {
    me() {
        return instance.get<ResponseType<{ id: number, email: string, login: string }>>('auth/me')
    }
}