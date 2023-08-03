import { Image } from "../../Atoms/Image/image.view"
import { HeaderStyled } from "./header.styles"

export const Header = () => {
    return (
        <HeaderStyled>
            <div className="header-container">
                <Image 
                    width="40px"
                    image={"/assets/images/logoroxo.png"}
                    alt={"Logo"}
                />
                Kanploo
            </div>
        </HeaderStyled>
    )
}