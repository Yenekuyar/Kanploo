import { useState } from "react";
import LoginPage from "./login-page.view";
import { useNavigate } from "react-router-dom";

export default function LoginController() {

    const [email, setEmail] = useState<string | null>('')
    const [password, setPassword] = useState<string | null>('')

    const navigate = useNavigate();

    const handleEmailChange = (event: { target: { value: string | null }; }) => {
    
        setEmail(event.target.value)
    }
    
    const handlePasswordChange = (event: { target: { value: string | null }; }) => {
        
        setPassword(event.target.value)
    }
    
    const handleLoginSubmit: React.FormEventHandler<HTMLFormElement> = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        try {
            fetch('https://central-api.ploomes.com/api/Self/Login', {
                method: 'POST',
                body: JSON.stringify({"Email": `${email}`,"Password": `${password}`}),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
            .then(json => localStorage.setItem('userkey', json.value[0].UserKey))

            navigate("/home")
        } catch (error) {
            console.log(error)
        }
    }

    return <LoginPage 
                handleEmailChange={handleEmailChange}
                handlePasswordChange={handlePasswordChange}
                handleLoginSubmit={handleLoginSubmit}
            />
}


