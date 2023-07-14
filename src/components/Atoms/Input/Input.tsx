
import { InputHTMLAttributes } from "react"

type InputProps = {
    type: string,
    placeholder: string,
    id: string | number,
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({type, placeholder, id}: InputProps) => {
    return(
        <>
            <input 
                type={type}
                placeholder={placeholder}
                id={id}
            />
        </>
    )
}