import { ILoginInput } from "./login-input.props"

export const LoginInput = ({ type, placeholder, id }: ILoginInput) => {
    return (
        <input 
            type={type}
            placeholder={placeholder}
            id={id}
        />
    )
}