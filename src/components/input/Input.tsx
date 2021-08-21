import { FC, memo, useState } from "react";
import { IInputProps } from "./Input.props";
import { Placeholder, Label, TextField, Wrap, Button } from "./style";

export const Input: FC<IInputProps> = memo((props): JSX.Element => {
  const {
    type = "text",
    name = "name",
    autoCapitalize = "off",
    autoCorrect = "off",
    maxLength,
    placeholder,
    value,
    onEnter,
  } = props;

  const [innerType, setInnerType] = useState<string>(type);

  const filled = props.value?.toString().length ? "filled" : undefined;
  const isInitType = innerType === type;

  return (
    <Wrap>
      <Label>
        <Placeholder className={filled}>{placeholder}</Placeholder>
        <TextField
          name={name}
          type={innerType}
          className={filled}
          value={value}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          autoComplete="off"
          maxLength={maxLength}
          onChange={(e) => onEnter(e.target.value)}
        />
      </Label>
      {type === "password" && (
        <Button
          type="button"
          className={filled}
          onClick={() =>
            isInitType ? setInnerType("text") : setInnerType(type)
          }
        >
          {innerType === type ? "Показать" : "Скрыть"}
        </Button>
      )}
    </Wrap>
  );
});
