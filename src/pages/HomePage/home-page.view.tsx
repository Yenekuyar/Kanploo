import HomeCardController from "../HomePage/components/HomeCard/home-card.controller";
import HeaderController from "../../components/Organisms/Header/header.controller";
import { Image } from "../../components/Atoms/Image/image.view";
import { HomeCard } from "./components/HomeCard/home-card.view";
import { HomePageStyled } from "./home-page.styles";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  return (
    <HomePageStyled>
      <HeaderController />

      <main>
        <h1 className="homecard-title">Modules</h1>
        <section className="homecard-container">
          <HomeCardController
            imageWidth={"120px"}
            imageSrc={"/assets/images/kanban.png"}
            imageAlt={"Kanban Route"}
            cardTitle="Kanban"
          />
        </section>
      </main>
    </HomePageStyled>
  );
}
