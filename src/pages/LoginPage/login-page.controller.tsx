import { useEffect, useState } from "react";
import LoginPage from "./login-page.view";
import { useNavigate } from "react-router-dom";
import Server from "../../Server/server.controller";

export default function LoginController() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>("");
  const [success, setSuccess] = useState<boolean | null>(false);

  const navigate = useNavigate();

  const handleEmailChange = (event: { target: { value: string } }) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: { target: { value: string } }) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    setErrorMessage("");
  }, [email, password]);

  const handleLoginSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const apiUrl = (process.env.REACT_APP_CENTRAL_API_URL = "teste");
    const login = new Server(apiUrl);

    console.log(apiUrl)
    async function postLogin(){
      try{
        const postData = await login.post('/Self/Login', JSON.stringify({ Email: `${email}`, Password: `${password}` }));
      } catch (error) {
        console.log(error)
      }
    }

    postLogin()
    // fetch("https://central-api.ploomes.com/api/Self/Login", {
    //   method: "POST",
    //   body: JSON.stringify({ Email: `${email}`, Password: `${password}` }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => localStorage.setItem("userkey", json.value[0].UserKey));

    // navigate("/home");
  };

  return (
    <LoginPage
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      handleLoginSubmit={handleLoginSubmit}
    />
  );
}
