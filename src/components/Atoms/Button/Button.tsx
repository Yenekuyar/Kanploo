interface ButtonProps {
    type: 'button' | 'submit' | 'reset',
}

export const Button = ({ type }: ButtonProps) => {
    return(
        <button type={type}></button>
    )
}