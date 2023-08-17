export interface ILoginSubmit {
  preventDefault(): unknown;
  event: Event | undefined;
}

export interface ILoginForm {
  email: string;
  password: string;
  loginError?: string;
}

export interface ILogin {
  email: HTMLElement | null;
  password: HTMLElement | null;
}

export interface IProps {
  handleEmailChange: (event: { target: { value: string } }) => void;
  handlePasswordChange: (event: { target: { value: string } }) => void;
  handleLoginSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
