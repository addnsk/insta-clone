import { useState } from "react";
import { StrictMode } from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";
import { Input } from "./components/input/Input";

export const Fonts = createGlobalStyle`
  body, input {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
    line-height: 18px;
    margin: 0;
  }
`;

const App = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <Fonts />
      <Input
        name={"username"}
        maxLength={75}
        placeholder={"Телефон, имя пользователя или эл. адрес"}
        value={username}
        onEnter={setUsername}
      />
      <Input
        type="password"
        name={"password"}
        placeholder={"Пароль"}
        value={password}
        onEnter={setPassword}
      />
    </>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
