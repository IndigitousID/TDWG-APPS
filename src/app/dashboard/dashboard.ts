import { NumberValueAccessor } from '@angular/forms';

export interface NotifikasiSayaData {
    id: number;
    name: string;
    email: string;
    email_verified_at: string,
    api_token: string;
    created_at: string;
    updated_at: string;
}
export interface NotifikasiSayaResponse {
    status: boolean;
    data: NotifikasiSayaData;
    message: string;
}