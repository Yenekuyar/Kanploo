import { useNavigate } from "react-router-dom";
import Server from "../../../Server/server.controller";

const apiUrl = process.env.REACT_APP_CENTRAL_API_URL || "";
const login = new Server(apiUrl);

interface IPostLoginBody {
    Email: string;
    Password: string;
  }
  
  interface IPostLoginResponse {
    Self: {
      Id: number;
      UserKey: string;
    };
  }

export function postLogin(email: string, password: string) {
    const promise = login.post<IPostLoginBody, IPostLoginResponse>(
      "Self/Login",
      { Email: `${email}`, Password: `${password}` }
    );
    promise
      .then((response) => {
        console.log(response)
        if(!response.value[0].UserKey){
          alert("Invalid login or password")
        } else {
          localStorage.setItem("userkey", response.value[0].UserKey)
        }
      })
  }