import HeaderController from "../../Organisms/Header/header.controller";
import { HomePageStyled } from "./home-page.styles";

export default function HomePage(){
    return(
        <HomePageStyled>
            <HeaderController />
        </HomePageStyled>
    )
}