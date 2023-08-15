import { useNavigate } from "react-router-dom";
import { IHomeCard } from "./home-card.props";
import { HomeCard } from "./home-card.view";

export default function HomeCardController(props: IHomeCard) {


    return <HomeCard 
            imageWidth={props.imageWidth}
            imageAlt={props.imageAlt}
            imageSrc={props.imageSrc}
            cardTitle={props.cardTitle}
        />
} 