import { IImage } from "./image.props"
import { StyledImage } from "./image.styles"

export const Image = ({ image, alt }: IImage) => {
    return (
        <StyledImage src={image} alt={alt} />
    )
}