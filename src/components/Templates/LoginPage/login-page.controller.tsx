import { useState } from "react";
import { ILogin } from "./login-page.props";
import LoginPage from "./login-page.view";

export default function LoginController() {

    const [email, setEmail] = useState<string | null>('')
    const [password, setPassword] = useState<string | null>('')

    const handleEmailChange = (event: { target: { value: string | null }; }) => {
        console.log(event.target.value)
    
        setEmail(event.target.value)
    }
    
    const handlePasswordChange = (event: { target: { value: string | null }; }) => {
        

        setPassword(event.target.value)
    }
    
    const handleLoginSubmit: React.FormEventHandler<HTMLFormElement> = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
    
        fetch('https://central-api.ploomes.com/api/Self/Login', {
            method: 'POST',
            body: JSON.stringify({"Email": `${email}`,"Password": `${password}`}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(json => console.log(json))
    }

    return <LoginPage 
                handleEmailChange={handleEmailChange}
                handlePasswordChange={handlePasswordChange}
                handleLoginSubmit={handleLoginSubmit}
            />
}


