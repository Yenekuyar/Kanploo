import { useNavigate } from "react-router-dom";
import { Image } from "../../../../components/Atoms/Image/image.view";
import { IHomeCard } from "./home-card.props";
import { StyledHomeCard } from "./home-card.styles";

export function HomeCard(props: IHomeCard) {
  return (
    <StyledHomeCard>
      <Image
        width={props.imageWidth}
        alt={props.imageAlt}
        image={props.imageSrc}
      />
      <h2>{props.cardTitle}</h2>
    </StyledHomeCard>
  );
}
