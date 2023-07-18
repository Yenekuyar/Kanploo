import { ILoginSubmit, ILoginForm } from "./login-page.props";
import { email, password } from './constants/login-info';

export const handleLoginSubmit: React.FormEventHandler<HTMLFormElement> = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(email?.value, password?.value)

    fetch('https://central-api.ploomes.com/api/Self/Login', {
        method: 'POST',
        body: JSON.stringify({"Email": email,"Password": password}),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
    .then(json => console.log(json))
}