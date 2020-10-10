export interface UserData {
    id: number;
    name: string;
    email: string;
    api_token: string;
    created_at: string;
    updated_at: string;
}

export interface LoginResponseData {
    token: string;
    user: UserData;
}

export interface AuthLoginResponse {
    status: boolean;
    data: LoginResponseData;
    message: string;

}

export interface RegisterResponseData {
    name: string;
    email: string;
    updated_at: string;
    created_at: string;
    access_token: string;
    expires_in: number;
    id: number;
}

export interface AuthRegisterResponse {
    status: boolean;
    data: RegisterResponseData;
    message: string;
 }

export interface PreferensiResponse {
    status: boolean;
    data: PreferensiResponseData;
    message: string;
}

export interface PreferensiResponseData {
    id: number;
    jam: string;
    hari: string;
    direktori: string;
    updated_at: string;
    created_at: string;
 }


export interface DirektoriResponse {
    status: boolean;
    data: array;
    message: string;
}
