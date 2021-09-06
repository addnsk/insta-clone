import { Button } from "components/Button";
import { Facebook } from "components/Icon";
import { Input } from "components/Input";
import { Logo } from "components/Logo";
import { OutsideLink } from "components/OutsideLink/OutsideLink";
import { RoundLoader } from "components/RoundLoader";
import { FC, useState } from "react";
import {
  ButtonWrap,
  Container,
  Error,
  Form,
  InputWrap,
  Separator,
} from "./style";

export const LogInForm: FC = (props): JSX.Element => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const IsLoading = false;
  const isDisabled = true;
  const isError = true;

  return (
    <Container>
      <Logo />
      <Form>
        <InputWrap>
          <Input
            name="username"
            maxLength={75}
            placeholder="Телефон, имя пользователя или эл. адрес"
            value={username}
            onEnter={setUsername}
          />
        </InputWrap>
        <InputWrap>
          <Input
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onEnter={setPassword}
          />
        </InputWrap>
        <ButtonWrap>
          <Button
            type="submit"
            caption="Войти"
            appearance="primary"
            disabled={isDisabled}
            isLoading={IsLoading}
            loader={() => <RoundLoader color="light" />}
          />
        </ButtonWrap>
      </Form>
      <Separator>
        <div />
        <span>ИЛИ</span>
        <div />
      </Separator>
      <ButtonWrap>
        <Button
          type="button"
          caption="Войти через Facebook"
          appearance="facebook"
          leftIcon={Facebook}
        />
      </ButtonWrap>

      {isError && (
        <Error>
          <p>
            К сожалению, вы ввели неправильный пароль. Проверьте свой пароль еще
            раз.
          </p>
        </Error>
      )}
      <OutsideLink>Забыли пароль?</OutsideLink>
    </Container>
  );
};
