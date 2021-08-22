import { useState } from "react";
import { StrictMode } from "react";
import { render } from "react-dom";
import { Input } from "components/Input";
import { Button } from "./components/Button";
import { Logo } from "./components/Logo";
import { Theme } from "./components/Theme";

import { ReactComponent as Arrow } from "components/Icon/svg/home.svg";
import { RoundLoader } from "components/RoundLoader";

const App = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Theme>
      <Logo />
      <Input
        name="username"
        maxLength={75}
        placeholder="Телефон, имя пользователя или эл. адрес"
        value={username}
        onEnter={setUsername}
      />
      <Input
        type="password"
        name="password"
        placeholder="Пароль"
        value={password}
        onEnter={setPassword}
      />
      <Button
        type="submit"
        caption="Войти"
        appearance="primary"
        rightIcon={Arrow}
        disabled
      />
      <Button
        type="submit"
        appearance="ghost"
        rightIcon={Arrow}
        leftIcon={Arrow}
      />
      <Button
        type="submit"
        caption="Какой то очень очень очень очень очень длинный текст"
        appearance="outline"
      />
      <Button type="submit" appearance="outline" leftIcon={Arrow} />
      <Button
        type="submit"
        caption="Войти через Facebook"
        appearance="accentGhost"
        rightIcon={Arrow}
      />

      <Button
        type="submit"
        caption="Войти через Facebook"
        appearance="facebook"
        leftIcon={Arrow}
      ></Button>
      <Button
        type="submit"
        caption="Войти"
        appearance="primary"
        rightIcon={Arrow}
        isLoading
        loader={() => <RoundLoader color="light" />}
      />
    </Theme>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
