import LoginPage from "./login-page.view";
import { useEffect, useState } from "react";
import { postLogin } from "./services/postLogin";
import { useNavigate } from "react-router-dom";

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

  const handleLoginSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    postLogin(email, password);
    // [TODO] - Verificar como que eu vou meter uma verificação nesse navigate pra só qnd logar ele navegar.
      navigate("/home")
    // documentation.ploomes
  };

  return (
    <LoginPage
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      handleLoginSubmit={handleLoginSubmit}
    />
  );
}
