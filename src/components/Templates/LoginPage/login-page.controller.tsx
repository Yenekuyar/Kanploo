import { useEffect, useState } from "react";
import LoginPage from "./login-page.view";
import { useNavigate } from "react-router-dom";

export default function LoginController() {

    const [email, setEmail] = useState<string | null>('')
    const [password, setPassword] = useState<string | null>('')
    const [errorMessage, setErrorMessage] = useState<string | null>('')
    const [success, setSuccess] = useState<boolean | null>(false)

    const navigate = useNavigate();

    const handleEmailChange = (event: { target: { value: string | null }; }) => {
    
        setEmail(event.target.value)
    }
    
    const handlePasswordChange = (event: { target: { value: string | null }; }) => {
        
        setPassword(event.target.value)
    }

    useEffect(() => {
        setErrorMessage('');
    }, [email, password])
    
    const handleLoginSubmit: React.FormEventHandler<HTMLFormElement> = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
            fetch('https://central-api.ploomes.com/api/Self/Login', {
                method: 'POST',
                body: JSON.stringify({"Email": `${email}`,"Password": `${password}`}),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
            .then(json => localStorage.setItem('userkey', json.value[0].UserKey))

            navigate("/home")
    }

    return <LoginPage 
                handleEmailChange={handleEmailChange}
                handlePasswordChange={handlePasswordChange}
                handleLoginSubmit={handleLoginSubmit}
            />
}


