export interface ILoginSubmit {
    preventDefault(): unknown;
    event: Event | undefined
} 

export interface ILoginForm {
    email: string;
    password: string;
    loginError?: string;
} 