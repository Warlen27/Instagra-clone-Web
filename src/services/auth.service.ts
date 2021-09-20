import api from './api.service';

type SigIn = {
    email: string;
    password: string;
}



export const signIn = (body: SigIn) => api.post('/login', body);