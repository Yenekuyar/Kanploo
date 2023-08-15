import Server from "../../../Server/server.controller";

export const postLogin = (email: string, password: string) => new Server(
  (process.env.CENTRAL_API_URL = ""),
  "Self/Login",
  JSON.stringify({ Email: `${email = ''}`, Password: `${password = ''}` }),
);
