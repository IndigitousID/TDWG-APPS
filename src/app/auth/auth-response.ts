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
    data: PaginatePreferensi;
    message: string;
}

export interface PaginatePreferensi {
    total: number;
    data: PreferensiResponseData;
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
    data: Array<string>;
    message: string;
}

export interface ResourceResponse {
    status: boolean;
    data: PaginateResource;
    message: string;
}

export interface PaginateResource {
    total: number;
    data: ResourceResponseData;
}

export interface ResourceResponseData {
    id: number;
    judul: string;
    direktori: string;
    subdirektori: string;
    konten: string;
    thumbnail: string;
    media_tipe: string;
    media_url: string;
    published_at: string;
    jam: string;
    updated_at: string;
    created_at: string;
 }

export interface NotifikasiResponse {
    status: boolean;
    data: ResourceResponseData;
    message: string;
}

export interface BerandaResponse {
    status: boolean;
    data: BerandaResponseData;
    message: string;
}

export interface BerandaResponseData {
    direktori: string;
    data: ResourceResponseData;
 }

