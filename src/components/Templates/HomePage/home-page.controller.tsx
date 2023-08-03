import HomePage from "./home-page.view";
import { userkey } from "../constants/userkey";
import { useNavigate } from "react-router-dom";

export default function HomeController() {
    
    const navigate = useNavigate()

    if (userkey){
        navigate('/')
    }

    return <HomePage />
}